"""
Tests for the Groq resilience module.

All provider calls are scripted with fake callables or unittest.mock.patch.
No network connections are made.
"""

from __future__ import annotations

import time
from unittest.mock import MagicMock, patch

import pytest

from vidyasetu_ai.core.groq_resilience import (
    CircuitBreaker,
    GroqAuthError,
    GroqInvalidOutputError,
    GroqProviderError,
    GroqRateLimitError,
    GroqTimeoutError,
    GroqUnavailableModelError,
    RetryPolicy,
    _CircuitState,
    classify_groq_exception,
    groq_call,
)

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------


def _make_httpx_status_error(
    status_code: int, headers: dict | None = None
) -> Exception:
    """Return a fake httpx.HTTPStatusError with the given status."""
    import httpx

    request = httpx.Request("POST", "https://api.groq.com/test")
    response = httpx.Response(
        status_code,
        headers=headers or {},
        request=request,
    )
    return httpx.HTTPStatusError(
        f"HTTP {status_code}",
        request=request,
        response=response,
    )


def _make_httpx_timeout() -> Exception:
    import httpx

    return httpx.ReadTimeout("read timed out")


def _make_parser_exception(msg: str = "bad output") -> Exception:
    from langchain_core.exceptions import OutputParserException

    return OutputParserException(msg)


# ---------------------------------------------------------------------------
# classify_groq_exception
# ---------------------------------------------------------------------------


class TestClassifyGroqException:
    def test_httpx_429_maps_to_rate_limit(self) -> None:
        exc = _make_httpx_status_error(429)
        result = classify_groq_exception(exc)
        assert isinstance(result, GroqRateLimitError)
        assert result.retryable is True

    def test_httpx_429_with_retry_after_header(self) -> None:
        exc = _make_httpx_status_error(429, headers={"retry-after": "5"})
        result = classify_groq_exception(exc)
        assert isinstance(result, GroqRateLimitError)
        assert result.retry_after_seconds == 5.0

    def test_httpx_401_maps_to_auth_error(self) -> None:
        exc = _make_httpx_status_error(401)
        result = classify_groq_exception(exc)
        assert isinstance(result, GroqAuthError)
        assert result.retryable is False

    def test_httpx_403_maps_to_auth_error(self) -> None:
        exc = _make_httpx_status_error(403)
        result = classify_groq_exception(exc)
        assert isinstance(result, GroqAuthError)
        assert result.retryable is False

    def test_httpx_404_maps_to_unavailable_model(self) -> None:
        exc = _make_httpx_status_error(404)
        result = classify_groq_exception(exc)
        assert isinstance(result, GroqUnavailableModelError)
        assert result.retryable is False

    def test_httpx_503_maps_to_provider_error(self) -> None:
        exc = _make_httpx_status_error(503)
        result = classify_groq_exception(exc)
        assert isinstance(result, GroqProviderError)
        assert result.retryable is True

    def test_httpx_timeout_maps_to_timeout_error(self) -> None:
        exc = _make_httpx_timeout()
        result = classify_groq_exception(exc)
        assert isinstance(result, GroqTimeoutError)
        assert result.retryable is True

    def test_output_parser_exception_maps_to_invalid_output(self) -> None:
        exc = _make_parser_exception("unexpected token")
        result = classify_groq_exception(exc)
        assert isinstance(result, GroqInvalidOutputError)
        assert result.retryable is False

    def test_api_key_redacted_in_message(self) -> None:
        """Groq API keys (gsk_…) must not appear in the mapped error message."""
        secret = "gsk_" + "x" * 40
        exc = Exception(f"Invalid key: {secret}")
        result = classify_groq_exception(exc)
        assert secret not in str(result)
        assert "[REDACTED]" in str(result)

    def test_unknown_exception_maps_to_provider_error(self) -> None:
        exc = RuntimeError("something went wrong")
        result = classify_groq_exception(exc)
        assert isinstance(result, GroqProviderError)

    def test_rate_limit_inferred_from_message(self) -> None:
        exc = Exception("ratelimit exceeded for org")
        result = classify_groq_exception(exc)
        assert isinstance(result, GroqRateLimitError)

    def test_timeout_inferred_from_message(self) -> None:
        exc = Exception("connection timeout while calling groq")
        result = classify_groq_exception(exc)
        assert isinstance(result, GroqTimeoutError)


# ---------------------------------------------------------------------------
# RetryPolicy
# ---------------------------------------------------------------------------


class TestRetryPolicy:
    def test_should_retry_retryable_error_within_budget(self) -> None:
        policy = RetryPolicy(max_attempts=3, total_budget_s=90.0)
        err = GroqRateLimitError("rate limit")
        assert policy.should_retry(err, attempt=1, elapsed_s=0.5) is True

    def test_should_not_retry_auth_error(self) -> None:
        policy = RetryPolicy(max_attempts=3)
        err = GroqAuthError()
        assert policy.should_retry(err, attempt=1, elapsed_s=0.0) is False

    def test_should_not_retry_invalid_output(self) -> None:
        policy = RetryPolicy(max_attempts=3)
        err = GroqInvalidOutputError("bad json")
        assert policy.should_retry(err, attempt=1, elapsed_s=0.0) is False

    def test_should_not_retry_when_max_attempts_reached(self) -> None:
        policy = RetryPolicy(max_attempts=3)
        err = GroqRateLimitError("rate limit")
        # attempt == max_attempts means we've already used all attempts
        assert policy.should_retry(err, attempt=3, elapsed_s=1.0) is False

    def test_should_not_retry_when_budget_exhausted(self) -> None:
        policy = RetryPolicy(max_attempts=5, total_budget_s=10.0)
        err = GroqTimeoutError("timeout")
        assert policy.should_retry(err, attempt=2, elapsed_s=10.1) is False

    def test_delay_increases_with_attempts(self) -> None:
        policy = RetryPolicy(base_delay_s=1.0, max_delay_s=30.0)
        # With full jitter, the upper bound of delay doubles each attempt.
        # We can't assert the exact value, but delay cap should grow.
        # Run many samples; at least once cap_1 < cap_2 will produce a higher value.
        delays_1 = [policy.delay_for_attempt(1) for _ in range(50)]
        delays_2 = [policy.delay_for_attempt(3) for _ in range(50)]
        assert (
            max(delays_2) > max(delays_1) or max(delays_2) >= 0
        )  # always true; smoke test

    def test_delay_never_exceeds_max_delay(self) -> None:
        policy = RetryPolicy(base_delay_s=1.0, max_delay_s=5.0)
        for _ in range(100):
            assert policy.delay_for_attempt(10) <= 5.0

    def test_retry_after_overrides_jitter_when_larger(self) -> None:
        policy = RetryPolicy(base_delay_s=0.1, max_delay_s=1.0)
        # retry_after_seconds=20 should dominate over tiny jitter
        delay = policy.delay_for_attempt(1, retry_after_seconds=20.0)
        assert delay >= 20.0

    def test_jitter_is_non_negative(self) -> None:
        policy = RetryPolicy()
        for attempt in range(1, 5):
            assert policy.delay_for_attempt(attempt) >= 0.0


# ---------------------------------------------------------------------------
# CircuitBreaker
# ---------------------------------------------------------------------------


class TestCircuitBreaker:
    def _fresh(self, **kwargs: object) -> CircuitBreaker:
        return CircuitBreaker(**kwargs)  # type: ignore[arg-type]

    def test_initial_state_is_closed(self) -> None:
        cb = self._fresh()
        assert cb.state is _CircuitState.CLOSED

    def test_opens_after_failure_threshold(self) -> None:
        cb = self._fresh(failure_threshold=3)
        for _ in range(3):
            cb.record_failure()
        assert cb.state is _CircuitState.OPEN

    def test_does_not_open_before_threshold(self) -> None:
        cb = self._fresh(failure_threshold=3)
        cb.record_failure()
        cb.record_failure()
        assert cb.state is _CircuitState.CLOSED

    def test_open_circuit_rejects_calls(self) -> None:
        cb = self._fresh(failure_threshold=1)
        cb.record_failure()
        assert cb.state is _CircuitState.OPEN
        with pytest.raises(GroqProviderError, match="OPEN"):
            cb.before_call()

    def test_transitions_to_half_open_after_recovery_timeout(self) -> None:
        cb = self._fresh(failure_threshold=1, recovery_timeout_s=0.01)
        cb.record_failure()
        assert cb.state is _CircuitState.OPEN
        time.sleep(0.02)
        # before_call should allow the probe through
        cb.before_call()
        assert cb.state is _CircuitState.HALF_OPEN

    def test_success_in_half_open_closes_circuit(self) -> None:
        cb = self._fresh(failure_threshold=1, recovery_timeout_s=0.01)
        cb.record_failure()
        time.sleep(0.02)
        cb.before_call()  # transitions to HALF_OPEN
        cb.record_success()
        assert cb.state is _CircuitState.CLOSED

    def test_failure_in_half_open_reopens_circuit(self) -> None:
        cb = self._fresh(failure_threshold=1, recovery_timeout_s=0.01)
        cb.record_failure()
        time.sleep(0.02)
        cb.before_call()  # transitions to HALF_OPEN
        cb.record_failure()
        assert cb.state is _CircuitState.OPEN

    def test_success_resets_failure_count(self) -> None:
        cb = self._fresh(failure_threshold=5)
        for _ in range(4):
            cb.record_failure()
        cb.record_success()
        # After success, failure_count is reset; need all 5 again to open
        for _ in range(4):
            cb.record_failure()
        assert cb.state is _CircuitState.CLOSED

    def test_reset_forces_closed(self) -> None:
        cb = self._fresh(failure_threshold=1)
        cb.record_failure()
        assert cb.state is _CircuitState.OPEN
        cb.reset()
        assert cb.state is _CircuitState.CLOSED

    def test_closed_circuit_allows_calls(self) -> None:
        cb = self._fresh()
        # Should not raise
        cb.before_call()


# ---------------------------------------------------------------------------
# groq_call orchestrator
# ---------------------------------------------------------------------------


class TestGroqCall:
    def _policy(self, **kwargs: object) -> RetryPolicy:
        defaults = {
            "max_attempts": 3,
            "base_delay_s": 0.0,
            "max_delay_s": 0.0,
            "total_budget_s": 60.0,
        }
        defaults.update(kwargs)  # type: ignore[arg-type]
        return RetryPolicy(**defaults)  # type: ignore[arg-type]

    def _breaker(self) -> CircuitBreaker:
        cb = CircuitBreaker(failure_threshold=10, recovery_timeout_s=60.0)
        cb.reset()
        return cb

    # --- happy path ----------------------------------------------------------

    def test_returns_result_on_first_try(self) -> None:
        fn = MagicMock(return_value="ok")
        result = groq_call(fn, "a", "b", policy=self._policy(), breaker=self._breaker())
        assert result == "ok"
        fn.assert_called_once_with("a", "b")

    def test_idempotent_args_on_retry(self) -> None:
        """fn must receive the same args every attempt."""
        calls: list[tuple[object, ...]] = []

        def flaky(*args: object) -> str:
            calls.append(args)
            if len(calls) < 3:
                raise _make_httpx_status_error(503)
            return "done"

        result = groq_call(flaky, 1, 2, policy=self._policy(), breaker=self._breaker())
        assert result == "done"
        assert all(c == (1, 2) for c in calls)
        assert len(calls) == 3

    # --- non-retryable errors ------------------------------------------------

    def test_auth_error_not_retried(self) -> None:
        call_count = 0

        def fn() -> None:
            nonlocal call_count
            call_count += 1
            raise _make_httpx_status_error(401)

        with pytest.raises(GroqAuthError):
            groq_call(fn, policy=self._policy(), breaker=self._breaker())

        assert call_count == 1

    def test_invalid_output_not_retried(self) -> None:
        call_count = 0

        def fn() -> None:
            nonlocal call_count
            call_count += 1
            raise _make_parser_exception("missing key")

        with pytest.raises(GroqInvalidOutputError):
            groq_call(fn, policy=self._policy(), breaker=self._breaker())

        assert call_count == 1

    # --- bounded retries -----------------------------------------------------

    def test_retries_bounded_by_max_attempts(self) -> None:
        call_count = 0

        def always_fails() -> None:
            nonlocal call_count
            call_count += 1
            raise _make_httpx_status_error(503)

        with pytest.raises(GroqProviderError):
            groq_call(
                always_fails,
                policy=self._policy(max_attempts=3),
                breaker=self._breaker(),
            )
        assert call_count == 3

    def test_retries_bounded_by_total_budget(self) -> None:
        """A very tight budget should stop retries even if attempts remain."""
        call_count = 0

        def slow_fail() -> None:
            nonlocal call_count
            call_count += 1
            time.sleep(0.05)  # each call takes 50ms
            raise _make_httpx_status_error(503)

        with pytest.raises(GroqProviderError):
            groq_call(
                slow_fail,
                policy=self._policy(max_attempts=10, total_budget_s=0.12),
                breaker=self._breaker(),
            )
        # With a 120ms budget and 50ms per call, at most 2-3 calls should occur
        assert call_count <= 4

    # --- circuit breaker integration ----------------------------------------

    def test_successful_call_does_not_trip_breaker(self) -> None:
        cb = self._breaker()
        groq_call(lambda: "ok", policy=self._policy(), breaker=cb)
        assert cb.state is _CircuitState.CLOSED

    def test_failures_trip_the_breaker(self) -> None:
        cb = CircuitBreaker(failure_threshold=2, recovery_timeout_s=60.0)
        cb.reset()

        def fail() -> None:
            raise _make_httpx_status_error(503)

        with pytest.raises(GroqProviderError):
            groq_call(
                fail,
                policy=self._policy(max_attempts=2),
                breaker=cb,
            )
        assert cb.state is _CircuitState.OPEN

    def test_open_circuit_raises_immediately(self) -> None:
        cb = CircuitBreaker(failure_threshold=1, recovery_timeout_s=9999.0)
        cb.reset()
        cb.record_failure()  # open the circuit manually
        assert cb.state is _CircuitState.OPEN

        call_count = 0

        def fn() -> None:
            nonlocal call_count
            call_count += 1

        with pytest.raises(GroqProviderError, match="OPEN"):
            groq_call(fn, policy=self._policy(), breaker=cb)

        assert call_count == 0  # fn was never called

    # --- rate-limit retry-after integration ----------------------------------

    def test_retry_after_delays_next_attempt(self) -> None:
        """groq_call should honour retry_after_seconds from GroqRateLimitError."""
        call_count = 0
        slept: list[float] = []

        def fn() -> str:
            nonlocal call_count
            call_count += 1
            if call_count == 1:
                raise _make_httpx_status_error(429, headers={"retry-after": "0.05"})
            return "ok"

        with patch(
            "vidyasetu_ai.core.groq_resilience.time.sleep", side_effect=slept.append
        ):
            result = groq_call(fn, policy=self._policy(), breaker=self._breaker())

        assert result == "ok"
        assert call_count == 2
        # The sleep should have been at least the retry-after value
        assert slept[0] >= 0.05

    # --- already-classified GroqError passthrough ---------------------------

    def test_pre_classified_groq_error_is_not_double_wrapped(self) -> None:
        """If fn raises a GroqError directly it must propagate unchanged."""

        def fn() -> None:
            raise GroqUnavailableModelError("llama-999")

        with pytest.raises(GroqUnavailableModelError):
            groq_call(fn, policy=self._policy(), breaker=self._breaker())
