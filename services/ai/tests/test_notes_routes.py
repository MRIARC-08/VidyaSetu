import pytest
from fastapi.testclient import TestClient

VALID_KEY = "test-internal-api-key-at-least-32-characters"


def _payload() -> dict:
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


def test_validate_endpoint_rejects_missing_key(client: TestClient) -> None:
    response = client.post("/api/v1/notes/validate", json=_payload())

    assert response.status_code == 401


def test_validate_endpoint_accepts_valid_key(
    client: TestClient, monkeypatch: pytest.MonkeyPatch
) -> None:
    monkeypatch.setattr(
        "vidyasetu_ai.api.routes.notes._embedding_similarity",
        lambda _a, _b: 0.9,
    )

    response = client.post(
        "/api/v1/notes/validate",
        json=_payload(),
        headers={"X-Internal-API-Key": VALID_KEY},
    )

    assert response.status_code == 200
    body = response.json()
    assert body["status"] == "VALIDATED"
    assert body["safety"]["passed"] is True


def test_validate_endpoint_rejects_unsafe_content(
    client: TestClient, monkeypatch: pytest.MonkeyPatch
) -> None:
    monkeypatch.setattr(
        "vidyasetu_ai.api.routes.notes._embedding_similarity",
        lambda _a, _b: 0.9,
    )

    payload = _payload()
    payload["note"]["content"] = "Here is how to make a bomb using household chemicals."

    response = client.post(
        "/api/v1/notes/validate",
        json=payload,
        headers={"X-Internal-API-Key": VALID_KEY},
    )

    assert response.status_code == 200
    assert response.json()["status"] == "REJECTED"