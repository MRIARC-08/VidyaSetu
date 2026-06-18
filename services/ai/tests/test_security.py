from fastapi.testclient import TestClient

VALID_KEY = "test-internal-api-key-at-least-32-characters"


def test_internal_endpoint_rejects_missing_key(client: TestClient) -> None:
    response = client.get("/api/v1/internal/ping")

    assert response.status_code == 401


def test_internal_endpoint_rejects_invalid_key(client: TestClient) -> None:
    response = client.get(
        "/api/v1/internal/ping",
        headers={"X-Internal-API-Key": "incorrect-key"},
    )

    assert response.status_code == 401


def test_internal_endpoint_accepts_valid_key(client: TestClient) -> None:
    response = client.get(
        "/api/v1/internal/ping",
        headers={"X-Internal-API-Key": VALID_KEY},
    )

    assert response.status_code == 200
    assert response.json()["status"] == "ok"
