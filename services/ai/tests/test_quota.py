import uuid
import pytest
import pytest_asyncio
from fastapi.testclient import TestClient
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine

from vidyasetu_ai.core.quota import QuotaManager
from vidyasetu_ai.db.database import Base, get_db
from vidyasetu_ai.db.models import (
    AiJobReservation,
    UserQuotaAssignment,
    UserQuotaPolicy,
    UserUsageTracker,
)
from vidyasetu_ai.main import app

VALID_KEY = "test-internal-api-key-at-least-32-characters"

# Create in-memory async SQLite database
test_engine = create_async_engine("sqlite+aiosqlite:///:memory:", echo=False)
test_session_factory = async_sessionmaker(
    test_engine, class_=AsyncSession, expire_on_commit=False
)


async def override_get_db():
    async with test_session_factory() as session:
        yield session


app.dependency_overrides[get_db] = override_get_db


@pytest_asyncio.fixture(autouse=True)
async def setup_db():
    async with test_engine.begin() as conn:
        await conn.run_sync(
            lambda connection: Base.metadata.create_all(
                connection,
                tables=[
                    Base.metadata.tables["user_quota_policies"],
                    Base.metadata.tables["user_quota_assignments"],
                    Base.metadata.tables["user_usage_trackers"],
                    Base.metadata.tables["ai_job_reservations"],
                ],
            )
        )

    # Seed default policies
    async with test_session_factory() as session:
        p1 = UserQuotaPolicy(
            id=uuid.UUID("a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"),
            name="default_platform",
            max_requests=3,
            max_tokens=1000,
            max_concurrency=2,
            window_seconds=10,
        )
        p2 = UserQuotaPolicy(
            id=uuid.UUID("a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a22"),
            name="default_byok",
            max_requests=5,
            max_tokens=None,
            max_concurrency=3,
            window_seconds=10,
        )
        session.add_all([p1, p2])
        await session.commit()

    yield

    async with test_engine.begin() as conn:
        await conn.run_sync(
            lambda connection: Base.metadata.drop_all(
                connection,
                tables=[
                    Base.metadata.tables["ai_job_reservations"],
                    Base.metadata.tables["user_usage_trackers"],
                    Base.metadata.tables["user_quota_assignments"],
                    Base.metadata.tables["user_quota_policies"],
                ],
            )
        )


@pytest.mark.asyncio
async def test_get_user_policy_defaults() -> None:
    async with test_session_factory() as session:
        p_platform = await QuotaManager.get_user_policy(session, "user1", is_byok=False)
        assert p_platform.name == "default_platform"
        assert p_platform.max_requests == 3

        p_byok = await QuotaManager.get_user_policy(session, "user1", is_byok=True)
        assert p_byok.name == "default_byok"
        assert p_byok.max_tokens is None


@pytest.mark.asyncio
async def test_get_user_policy_custom() -> None:
    async with test_session_factory() as session:
        # Create a custom policy
        custom_p = UserQuotaPolicy(
            id=uuid.UUID("a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a99"),
            name="custom_premium",
            max_requests=100,
            max_tokens=100000,
            max_concurrency=10,
            window_seconds=60,
        )
        assignment = UserQuotaAssignment(
            user_id="vip_user",
            platform_policy_id=custom_p.id,
            byok_policy_id=custom_p.id,
        )
        session.add_all([custom_p, assignment])
        await session.commit()

        p = await QuotaManager.get_user_policy(session, "vip_user", is_byok=False)
        assert p.name == "custom_premium"
        assert p.max_requests == 100


def test_api_quota_rate_limits(client: TestClient) -> None:
    headers = {
        "X-Internal-API-Key": VALID_KEY,
        "X-User-Id": "user123",
        "X-User-Is-BYOK": "false",
    }

    # First request: Allowed
    response = client.post("/api/v1/ai/request", headers=headers)
    assert response.status_code == 200
    assert response.json()["status"] == "allowed"

    # Second request: Allowed
    response = client.post("/api/v1/ai/request", headers=headers)
    assert response.status_code == 200

    # Third request: Allowed
    response = client.post("/api/v1/ai/request", headers=headers)
    assert response.status_code == 200

    # Fourth request: 429 Limit Exceeded
    response = client.post("/api/v1/ai/request", headers=headers)
    assert response.status_code == 429
    res_body = response.json()["detail"]
    assert res_body["code"] == "REQUEST_LIMIT_EXCEEDED"
    assert "Retry-After" in response.headers


def test_api_byok_bypasses_tokens_limit(client: TestClient) -> None:
    headers = {
        "X-Internal-API-Key": VALID_KEY,
        "X-User-Id": "byok_user",
        "X-User-Is-BYOK": "true",
    }

    # Start a job requesting huge amount of tokens
    response = client.post(
        "/api/v1/ai/job/start",
        headers=headers,
        json={"estimated_tokens": 999999},
    )
    assert response.status_code == 200
    assert response.json()["status"] == "started"


def test_concurrency_and_reconciliation(client: TestClient) -> None:
    headers = {
        "X-Internal-API-Key": VALID_KEY,
        "X-User-Id": "job_user",
        "X-User-Is-BYOK": "false",
    }

    # Start job 1 (concurrency 1)
    r1 = client.post(
        "/api/v1/ai/job/start",
        headers=headers,
        json={"estimated_tokens": 100},
    )
    assert r1.status_code == 200
    res_id_1 = r1.json()["reservation_id"]

    # Start job 2 (concurrency 2)
    r2 = client.post(
        "/api/v1/ai/job/start",
        headers=headers,
        json={"estimated_tokens": 100},
    )
    assert r2.status_code == 200
    res_id_2 = r2.json()["reservation_id"]

    # Start job 3 (concurrency 3 -> exceeds max_concurrency of 2)
    r3 = client.post(
        "/api/v1/ai/job/start",
        headers=headers,
        json={"estimated_tokens": 100},
    )
    assert r3.status_code == 429
    assert r3.json()["detail"]["code"] == "CONCURRENCY_LIMIT_EXCEEDED"

    # Reconcile/complete job 1 (concurrency becomes 1)
    reconcile_res = client.post(
        "/api/v1/ai/job/reconcile",
        headers=headers,
        json={
            "reservation_id": res_id_1,
            "actual_tokens": 50,
            "status": "COMPLETED",
        },
    )
    assert reconcile_res.status_code == 200

    # Start job 3 again (should succeed now)
    r3 = client.post(
        "/api/v1/ai/job/start",
        headers=headers,
        json={"estimated_tokens": 100},
    )
    assert r3.status_code == 200
