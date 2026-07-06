import uuid
from typing import Annotated

from fastapi import APIRouter, Depends
from pydantic import BaseModel, Field
from sqlalchemy.ext.asyncio import AsyncSession

from vidyasetu_ai.core.quota import QuotaManager, enforce_quota, get_user_context
from vidyasetu_ai.core.security import require_internal_api_key
from vidyasetu_ai.db.database import get_db

router = APIRouter(prefix="/ai", tags=["ai"])


class JobStartInput(BaseModel):
    estimated_tokens: int = Field(..., ge=1)


class JobReconcileInput(BaseModel):
    reservation_id: uuid.UUID
    actual_tokens: int | None = Field(None, ge=0)
    status: str = Field("COMPLETED", pattern="^(COMPLETED|FAILED|CANCELLED)$")


class StandardResponse(BaseModel):
    status: str


class JobStartResponse(BaseModel):
    status: str
    reservation_id: uuid.UUID


@router.post(
    "/request",
    response_model=StandardResponse,
    dependencies=[Depends(enforce_quota)],
)
async def check_quota_only() -> StandardResponse:
    """Check request budget and concurrency, increment requests count and active concurrency."""
    return StandardResponse(status="allowed")


@router.post(
    "/job/start",
    response_model=JobStartResponse,
    dependencies=[Depends(require_internal_api_key)],
)
async def start_job(
    body: JobStartInput,
    user_context: Annotated[tuple[str, bool], Depends(get_user_context)],
    db: Annotated[AsyncSession, Depends(get_db)],
) -> JobStartResponse:
    """Start a long-running job by checking quota limits and reserving estimated tokens."""
    user_id, is_byok = user_context
    reservation_id = await QuotaManager.check_and_update_usage(
        db, user_id, is_byok, estimated_tokens=body.estimated_tokens
    )
    return JobStartResponse(status="started", reservation_id=reservation_id)


@router.post(
    "/job/reconcile",
    response_model=StandardResponse,
    dependencies=[Depends(require_internal_api_key)],
)
async def reconcile_job(
    body: JobReconcileInput,
    db: Annotated[AsyncSession, Depends(get_db)],
) -> StandardResponse:
    """Reconcile a completed/failed job and adjust usage tracker tokens and active concurrency."""
    await QuotaManager.reconcile_job(
        db,
        reservation_id=body.reservation_id,
        actual_tokens=body.actual_tokens,
        status=body.status,
    )
    return StandardResponse(status="reconciled")
