"""Tests for standardized error handling (issue #527).

Covers:
- utils.errors domain exception classes and helper functions
- Global HTTP exception handler (correct JSON shape + status code)
- Global unhandled exception handler (safe 500 response)
- notes /validate endpoint error branches (400, 422, 500)
"""

from __future__ import annotations

import pytest
from fastapi import HTTPException, status
from fastapi.testclient import TestClient

from vidyasetu_ai.utils.errors import (
    AIServiceError,
    BadInputError,
    DocumentParsingError,
    ModelFailureError,
    NotFoundError,
    raise_bad_input,
    raise_document_parsing_error,
    raise_model_failure,
    raise_not_found,
)

VALID_KEY = "test-internal-api-key-at-least-32-characters"


# ---------------------------------------------------------------------------
# Unit tests — exception classes
# ---------------------------------------------------------------------------


class TestDomainExceptions:
    def test_bad_input_error_status(self) -> None:
        exc = BadInputError("bad thing")
        assert exc.status_code == status.HTTP_400_BAD_REQUEST
        assert exc.detail == "bad thing"

    def test_not_found_error_status(self) -> None:
        exc = NotFoundError("missing thing")
        assert exc.status_code == status.HTTP_404_NOT_FOUND
        assert exc.detail == "missing thing"

    def test_model_failure_error_status(self) -> None:
        exc = ModelFailureError("model crashed")
        assert exc.status_code == status.HTTP_500_INTERNAL_SERVER_ERROR
        assert exc.detail == "model crashed"

    def test_document_parsing_error_status(self) -> None:
        exc = DocumentParsingError("bad doc")
        assert exc.status_code == status.HTTP_422_UNPROCESSABLE_ENTITY
        assert exc.detail == "bad doc"

    def test_all_are_http_exception_subclasses(self) -> None:
        for cls in (BadInputError, NotFoundError, ModelFailureError, DocumentParsingError):
            assert issubclass(cls, HTTPException)
            assert issubclass(cls, AIServiceError)

    def test_raise_bad_input_raises(self) -> None:
        with pytest.raises(BadInputError, match="oops"):
            raise_bad_input("oops")

    def test_raise_not_found_raises(self) -> None:
        with pytest.raises(NotFoundError, match="gone"):
            raise_not_found("gone")

    def test_raise_model_failure_raises(self) -> None:
        with pytest.raises(ModelFailureError, match="boom"):
            raise_model_failure("boom")

    def test_raise_document_parsing_error_raises(self) -> None:
        with pytest.raises(DocumentParsingError, match="bad"):
            raise_document_parsing_error("bad")


# ---------------------------------------------------------------------------
# Integration tests — notes /validate endpoint error paths
# ---------------------------------------------------------------------------


def _valid_payload() -> dict:
    return {
        "note": {
            "content": (
                "Photosynthesis is the process by which plants convert "
                "sunlight, water, and carbon dioxide into glucose and oxygen."
            ),
            "source_id": "chapter-7",
            "source_type": "CHAPTER",
            "source_title": "Photosynthesis",
        },
        "source_content": (
            "Plants use sunlight to convert water and CO2 into glucose and oxygen."
        ),
    }


class TestNotesValidateErrors:
    """Error-path integration tests for POST /api/v1/notes/validate."""

    def test_missing_api_key_returns_401_json(self, client: TestClient) -> None:
        response = client.post("/api/v1/notes/validate", json=_valid_payload())
        assert response.status_code == 401
        body = response.json()
        assert "detail" in body
        assert isinstance(body["detail"], str)

    def test_pydantic_validation_error_returns_422(self, client: TestClient) -> None:
        """Sending a structurally invalid payload triggers FastAPI's 422."""
        response = client.post(
            "/api/v1/notes/validate",
            json={"note": {}, "source_content": "some text"},
            headers={"X-Internal-API-Key": VALID_KEY},
        )
        assert response.status_code == 422

    def test_model_failure_returns_500_json(
        self, client: TestClient, monkeypatch: pytest.MonkeyPatch
    ) -> None:
        """If the embedding model raises, endpoint returns 500 with detail."""

        def _boom(_a: str, _b: str) -> float:
            raise RuntimeError("CUDA out of memory")

        monkeypatch.setattr(
            "vidyasetu_ai.api.routes.notes._embedding_similarity", _boom
        )
        response = client.post(
            "/api/v1/notes/validate",
            json=_valid_payload(),
            headers={"X-Internal-API-Key": VALID_KEY},
        )
        assert response.status_code == 500
        body = response.json()
        assert "detail" in body
        assert isinstance(body["detail"], str)

    def test_value_error_in_validate_note_returns_400(
        self, client: TestClient, monkeypatch: pytest.MonkeyPatch
    ) -> None:
        """If validate_note raises ValueError, endpoint returns 400."""

        def _raises(*_args, **_kwargs):
            raise ValueError("unsupported source type")

        monkeypatch.setattr("vidyasetu_ai.api.routes.notes.validate_note", _raises)
        response = client.post(
            "/api/v1/notes/validate",
            json=_valid_payload(),
            headers={"X-Internal-API-Key": VALID_KEY},
        )
        assert response.status_code == 400
        body = response.json()
        assert "detail" in body
        assert "unsupported source type" in body["detail"]

    def test_type_error_in_validate_note_returns_422(
        self, client: TestClient, monkeypatch: pytest.MonkeyPatch
    ) -> None:
        """If validate_note raises TypeError (parsing failure), endpoint returns 422."""

        def _raises(*_args, **_kwargs):
            raise TypeError("unexpected None in note structure")

        monkeypatch.setattr("vidyasetu_ai.api.routes.notes.validate_note", _raises)
        response = client.post(
            "/api/v1/notes/validate",
            json=_valid_payload(),
            headers={"X-Internal-API-Key": VALID_KEY},
        )
        assert response.status_code == 422
        body = response.json()
        assert "detail" in body

    def test_happy_path_still_works(
        self, client: TestClient, monkeypatch: pytest.MonkeyPatch
    ) -> None:
        """Ensure the happy path is not broken by the new error-handling layer."""
        monkeypatch.setattr(
            "vidyasetu_ai.api.routes.notes._embedding_similarity",
            lambda _a, _b: 0.9,
        )
        response = client.post(
            "/api/v1/notes/validate",
            json=_valid_payload(),
            headers={"X-Internal-API-Key": VALID_KEY},
        )
        assert response.status_code == 200
        body = response.json()
        assert body["status"] == "VALIDATED"
        assert "detail" not in body  # success response must not have 'detail'
