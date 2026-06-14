import os

import pytest
from fastapi.testclient import TestClient

os.environ["AI_INTERNAL_API_KEY"] = (
    "test-internal-api-key-at-least-32-characters"
)

from vidyasetu_ai.main import app  # noqa: E402


@pytest.fixture
def client() -> TestClient:
    return TestClient(app)
