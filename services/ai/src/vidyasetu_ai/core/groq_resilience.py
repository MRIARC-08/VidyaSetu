"""
Groq provider resilience primitives.

Provides:
- Stable timeout constants (connect, read, total workflow).
- Stable internal error hierarchy mapped from raw provider errors.
- A RetryPolicy with bounded exponential back-off and jitter.
- A three-state CircuitBreaker (CLOSED → OPEN → HALF_OPEN).
- A ``groq_call`` orchestrator that composes all of the above.

Design constraints
------------------
- Authentication and output-validation errors are **never** retried.
- Retry count and total elapsed time are both bounded.
- The circuit breaker is thread-safe and emits structured log entries on
  every state transition.
- Secrets are stripped from all exception messages before logging or
  re-raising.
"""

from __future__ import annotations

import logging
import random
import re
import threading
import time
from collections.abc import Callable
from dataclasses import dataclass, field
from enum import Enum
from typing import Any, TypeVar

logger = logging.getLogger(__name__)

T = TypeVar("T")

# ---------------------------------------------------------------------------
# Timeout budgets
# ---------------------------------------------------------------------------

_GROQ_KEY_RE = re.compile(r"gsk_[A-Za-z0-9]{20,}", re.ASCII)


class GroqTimeouts:
    """Named timeout constants for Groq provider calls (seconds)."""

    CONNECT_S: int = 10
    """Maximum time allowed to establish a TCP connection."""

    READ_S: int = 60
    """Maximum time allowed for the provider to stream the first response byte."""

    TOTAL_WORKFLOW_S: int = 120
    """Hard ceiling for a single end-to-end generation workflow."""


# ---------------------------------------------------------------------------
# Stable internal error hierarchy
# ---------------------------------------------------------------------------


class GroqError(Exception):
    """Base class for all stable Groq resilience errors.

    Callers can distinguish retryable from terminal failures by checking
    the ``retryable`` attribute.
    """

    retryable: bool = True
    """Whether a caller or retry policy may attempt this operation again."""

    def __init__(
        self, message: str, *, retry_after_seconds: float | None = None
    ) -> None:
        super().__init__(message)
        self.retry_after_seconds: float | None = retry_after_seconds


class GroqRateLimitError(GroqError):
    """HTTP 429 or ``rate_limit_exceeded`` from the Groq API."""

    retryable = True


class GroqTimeoutError(GroqError):
    """Connect or read timeout while calling the Groq API."""

    retryable = True


class GroqProviderError(GroqError):
    """Generic 5xx or unexpected provider-side failure."""

    retryable = True


class GroqAuthError(GroqError):
    """HTTP 401/403 — invalid or missing API key.  Never retried."""

    retryable = False

    def __init__(self) -> None:
        super().__init__("Groq API key is invalid or missing")


class GroqUnavailableModelError(GroqError):
    """HTTP 404 model-not-found.  Never retried."""

    retryable = False

    def __init__(self, model: str = "") -> None:
        label = f" '{model}'" if model else ""
        super().__init__(f"Groq model{label} is not available")


class GroqInvalidOutputError(GroqError):
    """The provider returned output that failed schema/parser validation.

    Never retried automatically; the caller must decide whether a reprompt
    is appropriate.
    """

    retryable = False

    def __init__(self, detail: str = "") -> None:
        msg = "Groq returned output that failed validation"
        if detail:
            msg = f"{msg}: {detail}"
        super().__init__(msg)


# ---------------------------------------------------------------------------
# Secret redaction
# ---------------------------------------------------------------------------


def _redact(text: str) -> str:
    """Strip Groq API key patterns from *text*."""
    return _GROQ_KEY_RE.sub("[REDACTED]", text)


# ---------------------------------------------------------------------------
# Exception classifier
# ---------------------------------------------------------------------------


def classify_groq_exception(exc: BaseException) -> GroqError:
    """Map a raw provider exception to a stable :class:`GroqError` subclass.

    The returned error's message is always secret-safe (API keys are
    redacted).  The original exception is attached as ``__cause__`` by the
    caller via ``raise ... from exc``.

    Priority order
    --------------
    1. ``langchain_core`` output-parser failures  → :class:`GroqInvalidOutputError`
    2. ``httpx`` status errors (by HTTP status code)
    3. ``httpx`` timeout                           → :class:`GroqTimeoutError`
    4. ``groq`` SDK errors (by error code / type)
    5. Fallback                                    → :class:`GroqProviderError`
    """
    # --- langchain output-parser failures -----------------------------------
    try:
        from langchain_core.exceptions import (
            OutputParserException,  # type: ignore[import-untyped]
        )

        if isinstance(exc, OutputParserException):
            return GroqInvalidOutputError(_redact(str(exc)))
    except ImportError:
        pass

    # --- httpx HTTP status errors -------------------------------------------
    try:
        import httpx

        if isinstance(exc, httpx.HTTPStatusError):
            status = exc.response.status_code
            retry_after = _parse_retry_after(exc.response.headers.get("retry-after"))
            if status in (401, 403):
                return GroqAuthError()
            if status == 404:
                # Try to extract model name from response body
                try:
                    body = exc.response.json()
                    model = body.get("error", {}).get("param", "") or ""
                except Exception:
                    model = ""
                return GroqUnavailableModelError(model)
            if status == 429:
                return GroqRateLimitError(
                    "Groq rate limit exceeded",
                    retry_after_seconds=retry_after,
                )
            if status >= 500:
                return GroqProviderError(
                    _redact(f"Groq provider error (HTTP {status})"),
                )
            return GroqProviderError(_redact(f"Groq unexpected HTTP {status}"))

        if isinstance(exc, httpx.TimeoutException):
            return GroqTimeoutError("Groq request timed out")
    except ImportError:
        pass

    # --- groq SDK errors ----------------------------------------------------
    try:
        import groq as groq_sdk  # type: ignore[import-untyped]

        if isinstance(exc, groq_sdk.AuthenticationError):
            return GroqAuthError()
        if isinstance(exc, groq_sdk.RateLimitError):
            retry_after = _parse_retry_after(
                getattr(getattr(exc, "response", None), "headers", {}).get(
                    "retry-after"
                )
            )
            return GroqRateLimitError(
                "Groq rate limit exceeded",
                retry_after_seconds=retry_after,
            )
        if isinstance(exc, groq_sdk.NotFoundError):
            return GroqUnavailableModelError()
        if isinstance(exc, groq_sdk.APIStatusError):
            status = getattr(exc, "status_code", 0)
            if status in (401, 403):
                return GroqAuthError()
            return GroqProviderError(_redact(f"Groq API error (status {status})"))
        if isinstance(exc, groq_sdk.APITimeoutError):
            return GroqTimeoutError("Groq request timed out")
    except ImportError:
        pass

    # --- langchain-groq wrapping --------------------------------------------
    exc_type_name = type(exc).__name__
    exc_msg = _redact(str(exc))

    if "rate" in exc_type_name.lower() or "ratelimit" in exc_msg.lower():
        return GroqRateLimitError("Groq rate limit exceeded (inferred)")
    if "timeout" in exc_type_name.lower() or "timeout" in exc_msg.lower():
        return GroqTimeoutError("Groq request timed out (inferred)")
    if "auth" in exc_type_name.lower() or "unauthorized" in exc_msg.lower():
        return GroqAuthError()

    return GroqProviderError(exc_msg)


def _parse_retry_after(value: str | None) -> float | None:
    """Parse a ``Retry-After`` header value to seconds, or return ``None``."""
    if not value:
        return None
    try:
        return max(0.0, float(value))
    except (ValueError, TypeError):
        return None


# ---------------------------------------------------------------------------
# Retry policy
# ---------------------------------------------------------------------------


@dataclass
class RetryPolicy:
    """Bounded exponential back-off with full jitter.

    Parameters
    ----------
    max_attempts:
        Maximum number of times the operation will be called (including the
        first attempt).  Must be ≥ 1.
    base_delay_s:
        Initial back-off ceiling in seconds before jitter.
    max_delay_s:
        Hard ceiling for a single inter-attempt sleep.
    total_budget_s:
        Wall-clock budget for **all** attempts combined.  Retry is skipped
        when the remaining budget would be insufficient.
    """

    max_attempts: int = 3
    base_delay_s: float = 1.0
    max_delay_s: float = 30.0
    total_budget_s: float = 90.0

    def delay_for_attempt(
        self,
        attempt: int,
        retry_after_seconds: float | None = None,
    ) -> float:
        """Return sleep duration (seconds) before *attempt* (1-indexed).

        Uses full jitter: ``sleep = random(0, min(max_delay, base * 2^(attempt-1)))``.
        If *retry_after_seconds* is provided and larger, it takes precedence.
        """
        cap = min(self.max_delay_s, self.base_delay_s * (2 ** (attempt - 1)))
        jitter = random.uniform(0.0, cap)
        if retry_after_seconds is not None:
            return max(jitter, retry_after_seconds)
        return jitter

    def should_retry(self, error: GroqError, attempt: int, elapsed_s: float) -> bool:
        """Return ``True`` if another attempt is allowed.

        Rules (all must be satisfied):
        1. ``error.retryable`` is ``True``.
        2. *attempt* < ``max_attempts``.
        3. *elapsed_s* < ``total_budget_s``.
        """
        if not error.retryable:
            return False
        if attempt >= self.max_attempts:
            return False
        return elapsed_s < self.total_budget_s


# ---------------------------------------------------------------------------
# Circuit breaker
# ---------------------------------------------------------------------------


class _CircuitState(Enum):
    CLOSED = "CLOSED"
    OPEN = "OPEN"
    HALF_OPEN = "HALF_OPEN"


@dataclass
class CircuitBreaker:
    """Thread-safe three-state circuit breaker.

    States
    ------
    CLOSED
        Normal operation.  Failures are counted.  When ``failure_threshold``
        consecutive failures occur the circuit opens.
    OPEN
        All calls are rejected immediately with :class:`GroqProviderError`.
        After ``recovery_timeout_s`` the circuit moves to HALF_OPEN.
    HALF_OPEN
        One probe call is allowed.  Success → CLOSED; failure → OPEN.

    Parameters
    ----------
    failure_threshold:
        Consecutive failures required to open the circuit.
    recovery_timeout_s:
        Seconds the circuit stays OPEN before allowing a probe.
    name:
        Label used in log messages.
    """

    failure_threshold: int = 5
    recovery_timeout_s: float = 60.0
    name: str = "groq"

    _state: _CircuitState = field(default=_CircuitState.CLOSED, init=False, repr=False)
    _failure_count: int = field(default=0, init=False, repr=False)
    _opened_at: float | None = field(default=None, init=False, repr=False)
    _lock: threading.Lock = field(
        default_factory=threading.Lock, init=False, repr=False
    )

    # ------------------------------------------------------------------
    # Public interface
    # ------------------------------------------------------------------

    @property
    def state(self) -> _CircuitState:
        return self._state

    def before_call(self) -> None:
        """Check whether a call is permitted; raise if the circuit is OPEN."""
        with self._lock:
            if self._state is _CircuitState.CLOSED:
                return
            if self._state is _CircuitState.OPEN:
                if self._should_attempt_recovery():
                    self._transition(_CircuitState.HALF_OPEN)
                    return
                raise GroqProviderError(
                    f"Circuit '{self.name}' is OPEN — provider calls are suspended"
                )
            # HALF_OPEN: allow the single probe through

    def record_success(self) -> None:
        """Record a successful call; reset the breaker if needed."""
        with self._lock:
            prev = self._state
            self._failure_count = 0
            self._opened_at = None
            if self._state is not _CircuitState.CLOSED:
                self._transition(_CircuitState.CLOSED)
            elif prev is _CircuitState.CLOSED:
                pass  # already closed, nothing to log

    def record_failure(self) -> None:
        """Record a failed call; open the circuit when the threshold is reached."""
        with self._lock:
            self._failure_count += 1
            if self._state is _CircuitState.HALF_OPEN:
                # Probe failed — go straight back to OPEN
                self._opened_at = time.monotonic()
                self._transition(_CircuitState.OPEN)
            elif (
                self._state is _CircuitState.CLOSED
                and self._failure_count >= self.failure_threshold
            ):
                self._opened_at = time.monotonic()
                self._transition(_CircuitState.OPEN)

    def reset(self) -> None:
        """Force the breaker back to CLOSED.  Intended for testing."""
        with self._lock:
            self._failure_count = 0
            self._opened_at = None
            self._state = _CircuitState.CLOSED

    # ------------------------------------------------------------------
    # Internal helpers
    # ------------------------------------------------------------------

    def _should_attempt_recovery(self) -> bool:
        if self._opened_at is None:
            return False
        return (time.monotonic() - self._opened_at) >= self.recovery_timeout_s

    def _transition(self, new_state: _CircuitState) -> None:
        old = self._state
        self._state = new_state
        logger.warning(
            "Circuit breaker '%s' transition: %s → %s  (failures=%d)",
            self.name,
            old.value,
            new_state.value,
            self._failure_count,
        )


# ---------------------------------------------------------------------------
# Default singletons (injectable / replaceable in tests)
# ---------------------------------------------------------------------------

default_retry_policy = RetryPolicy()
default_circuit_breaker = CircuitBreaker()


# ---------------------------------------------------------------------------
# Orchestrator
# ---------------------------------------------------------------------------


def groq_call(
    fn: Callable[..., T],
    *args: Any,
    policy: RetryPolicy | None = None,
    breaker: CircuitBreaker | None = None,
    **kwargs: Any,
) -> T:
    """Call *fn* with Groq resilience: timeout awareness, retry, and circuit breaker.

    Parameters
    ----------
    fn:
        The callable wrapping a Groq provider call.  It receives ``*args``
        and ``**kwargs`` unchanged on every attempt (idempotent contract).
    policy:
        :class:`RetryPolicy` to use.  Defaults to :data:`default_retry_policy`.
    breaker:
        :class:`CircuitBreaker` to use.  Defaults to :data:`default_circuit_breaker`.

    Raises
    ------
    GroqError
        A stable, secret-safe error that callers can branch on.
    """
    if policy is None:
        policy = default_retry_policy
    if breaker is None:
        breaker = default_circuit_breaker

    start = time.monotonic()
    attempt = 0

    while True:
        # Circuit-breaker gate
        breaker.before_call()

        attempt += 1
        try:
            result = fn(*args, **kwargs)
            breaker.record_success()
            if attempt > 1:
                logger.info(
                    "groq_call succeeded on attempt %d after %.2fs",
                    attempt,
                    time.monotonic() - start,
                )
            return result

        except GroqError:
            # Already classified — re-raise without double-wrapping
            raise
        except Exception as exc:
            groq_err = classify_groq_exception(exc)
            elapsed = time.monotonic() - start

            logger.warning(
                "groq_call attempt %d failed: %s (%.2fs elapsed) retryable=%s",
                attempt,
                type(groq_err).__name__,
                elapsed,
                groq_err.retryable,
            )

            if not policy.should_retry(groq_err, attempt, elapsed):
                breaker.record_failure()
                raise groq_err from exc

            breaker.record_failure()
            sleep_s = policy.delay_for_attempt(attempt, groq_err.retry_after_seconds)
            # Clamp sleep so we don't overshoot the total budget
            remaining = policy.total_budget_s - elapsed
            sleep_s = min(sleep_s, max(0.0, remaining - 0.1))

            logger.info(
                "groq_call: retrying in %.2fs (attempt %d/%d)",
                sleep_s,
                attempt,
                policy.max_attempts,
            )
            time.sleep(sleep_s)
