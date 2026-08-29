"""Standardized error utilities for the VidyaSetu AI FastAPI service.

All HTTP error responses share the shape::

    {"detail": "<user-friendly message>"}

which is the FastAPI default for ``HTTPException``.  Custom domain
exceptions defined here map 1-to-1 to HTTP status codes so route
handlers only need to raise a typed exception rather than hand-craft
status codes every time.

Usage in a route::

    from vidyasetu_ai.utils.errors import raise_bad_input, raise_model_failure

    raise_bad_input("note.content must not be empty")
    raise_model_failure("Embedding model is not loaded")

Or import the exception classes directly and raise them if you need to
attach extra context::

    raise AIServiceError(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        detail="Payload failed schema validation",
    )
"""

from __future__ import annotations

import logging

from fastapi import HTTPException, Request, status
from fastapi.responses import JSONResponse

logger = logging.getLogger(__name__)


# ---------------------------------------------------------------------------
# Domain exception hierarchy
# ---------------------------------------------------------------------------


class AIServiceError(HTTPException):
    """Base class for all VidyaSetu AI service errors.

    Subclasses fix the ``status_code`` so callers only need to raise a
    semantically named exception.
    """


class BadInputError(AIServiceError):
    """400 — the client sent data that the service cannot process."""

    def __init__(self, detail: str) -> None:
        super().__init__(status_code=status.HTTP_400_BAD_REQUEST, detail=detail)


class NotFoundError(AIServiceError):
    """404 — a requested resource (document, model, chapter...) was not found."""

    def __init__(self, detail: str) -> None:
        super().__init__(status_code=status.HTTP_404_NOT_FOUND, detail=detail)


class ModelFailureError(AIServiceError):
    """500 — the embedding / LLM model failed in an unexpected way."""

    def __init__(self, detail: str) -> None:
        super().__init__(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail
        )


class DocumentParsingError(AIServiceError):
    """422 — a document or payload could not be parsed."""

    def __init__(self, detail: str) -> None:
        super().__init__(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail=detail
        )


# ---------------------------------------------------------------------------
# Convenience helpers (preferred in route handlers for brevity)
# ---------------------------------------------------------------------------


def raise_bad_input(message: str) -> None:
    """Raise a 400 Bad Request with *message* as the ``detail``."""
    raise BadInputError(message)


def raise_not_found(message: str) -> None:
    """Raise a 404 Not Found with *message* as the ``detail``."""
    raise NotFoundError(message)


def raise_model_failure(message: str) -> None:
    """Raise a 500 Internal Server Error with *message* as the ``detail``."""
    raise ModelFailureError(message)


def raise_document_parsing_error(message: str) -> None:
    """Raise a 422 Unprocessable Entity with *message* as the ``detail``."""
    raise DocumentParsingError(message)


# ---------------------------------------------------------------------------
# Global FastAPI exception handlers
# ---------------------------------------------------------------------------


async def http_exception_handler(request: Request, exc: HTTPException) -> JSONResponse:
    """Return every HTTPException (including AIServiceError) as structured JSON.

    The response body is always::

        {"detail": "<message>"}

    FastAPI already does this by default, but registering an explicit handler
    lets us log 5xx errors server-side without the caller having to worry
    about it.
    """
    if exc.status_code >= 500:
        logger.error(
            "Server error %s on %s %s: %s",
            exc.status_code,
            request.method,
            request.url.path,
            exc.detail,
        )
    elif exc.status_code >= 400:
        logger.warning(
            "Client error %s on %s %s: %s",
            exc.status_code,
            request.method,
            request.url.path,
            exc.detail,
        )

    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.detail},
        headers=getattr(exc, "headers", None) or {},
    )


async def unhandled_exception_handler(
    request: Request, exc: Exception
) -> JSONResponse:
    """Catch-all for any unhandled exception that escapes route handlers.

    Returns 500 with a safe, generic message so internal tracebacks are
    never exposed to clients.
    """
    logger.exception(
        "Unhandled exception on %s %s",
        request.method,
        request.url.path,
        exc_info=exc,
    )
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={"detail": "An unexpected error occurred. Please try again later."},
    )
