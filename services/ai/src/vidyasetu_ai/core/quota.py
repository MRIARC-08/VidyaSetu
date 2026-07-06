import logging
import uuid
from datetime import datetime, timezone
from typing import Annotated

from fastapi import Depends, Header, HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from vidyasetu_ai.core.security import require_internal_api_key
from vidyasetu_ai.db.database import get_db
from vidyasetu_ai.db.models import (
    AiJobReservation,
    UserQuotaAssignment,
    UserQuotaPolicy,
    UserUsageTracker,
)

logger = logging.getLogger("vidyasetu_ai.quota")


class QuotaLimitExceeded(HTTPException):
    def __init__(self, code: str, detail: str, retry_after: int | None = None):
        headers = {}
        if retry_after is not None:
            headers["Retry-After"] = str(max(1, int(retry_after)))
        super().__init__(
            status_code=429,
            detail={"code": code, "message": detail, "retry_after": retry_after},
            headers=headers,
        )


class QuotaManager:
    @staticmethod
    async def get_user_policy(db: AsyncSession, user_id: str, is_byok: bool) -> UserQuotaPolicy:
        # Check custom assignment
        stmt = select(UserQuotaAssignment).where(UserQuotaAssignment.user_id == user_id)
        result = await db.execute(stmt)
        assignment = result.scalar_one_or_none()

        if assignment:
            policy_id = assignment.byok_policy_id if is_byok else assignment.platform_policy_id
            stmt = select(UserQuotaPolicy).where(UserQuotaPolicy.id == policy_id)
            result = await db.execute(stmt)
            policy = result.scalar_one_or_none()
            if policy:
                return policy

        # Fallback to defaults
        default_name = "default_byok" if is_byok else "default_platform"
        stmt = select(UserQuotaPolicy).where(UserQuotaPolicy.name == default_name)
        result = await db.execute(stmt)
        policy = result.scalar_one_or_none()
        if not policy:
            raise HTTPException(
                status_code=500,
                detail=f"Default quota policy '{default_name}' not seeded",
            )
        return policy

    @classmethod
    async def check_and_update_usage(
        cls,
        db: AsyncSession,
        user_id: str,
        is_byok: bool,
        estimated_tokens: int = 0,
    ) -> uuid.UUID | None:
        now = datetime.now(timezone.utc)
        policy = await cls.get_user_policy(db, user_id, is_byok)

        # Lock the row for this user & request type to prevent concurrency race conditions
        stmt = (
            select(UserUsageTracker)
            .where(UserUsageTracker.user_id == user_id, UserUsageTracker.is_byok == is_byok)
            .with_for_update()
        )
        result = await db.execute(stmt)
        tracker = result.scalar_one_or_none()

        if not tracker:
            tracker = UserUsageTracker(
                user_id=user_id,
                is_byok=is_byok,
                window_start=now,
                requests_used=0,
                tokens_used=0,
                active_concurrency=0,
            )
            db.add(tracker)
            await db.flush()

        # Check window reset
        now_naive = now.replace(tzinfo=None)
        window_start_naive = tracker.window_start.replace(tzinfo=None) if tracker.window_start.tzinfo else tracker.window_start
        elapsed = (now_naive - window_start_naive).total_seconds()
        if elapsed >= policy.window_seconds:
            tracker.window_start = now
            tracker.requests_used = 0
            tracker.tokens_used = 0

        # Calculate remaining time in current window for Retry-After
        retry_after = int(max(0.0, policy.window_seconds - elapsed))


        # 1. Concurrency limits
        if tracker.active_concurrency >= policy.max_concurrency:
            logger.info(
                f"Quota Decision: REJECTED | User: {user_id} | BYOK: {is_byok} | "
                f"Reason: CONCURRENCY_LIMIT_EXCEEDED | Current: {tracker.active_concurrency} | "
                f"Max: {policy.max_concurrency}"
            )
            raise QuotaLimitExceeded(
                code="CONCURRENCY_LIMIT_EXCEEDED",
                detail="Too many concurrent requests. Please wait for active tasks to finish.",
                retry_after=5,
            )

        # 2. Request limits
        if tracker.requests_used + 1 > policy.max_requests:
            logger.info(
                f"Quota Decision: REJECTED | User: {user_id} | BYOK: {is_byok} | "
                f"Reason: REQUEST_LIMIT_EXCEEDED | Current: {tracker.requests_used} | "
                f"Max: {policy.max_requests}"
            )
            raise QuotaLimitExceeded(
                code="REQUEST_LIMIT_EXCEEDED",
                detail="Request budget exceeded for the current window.",
                retry_after=retry_after,
            )

        # 3. Token limits
        if policy.max_tokens is not None:
            if tracker.tokens_used + estimated_tokens > policy.max_tokens:
                logger.info(
                    f"Quota Decision: REJECTED | User: {user_id} | BYOK: {is_byok} | "
                    f"Reason: TOKEN_BUDGET_EXCEEDED | Current Tokens: {tracker.tokens_used} | "
                    f"Req: {estimated_tokens} | Max: {policy.max_tokens}"
                )
                raise QuotaLimitExceeded(
                    code="TOKEN_BUDGET_EXCEEDED",
                    detail="Token budget exceeded for the current window.",
                    retry_after=retry_after,
                )

        # Log decision
        logger.info(
            f"Quota Decision: ALLOWED | User: {user_id} | BYOK: {is_byok} | "
            f"Requests: {tracker.requests_used + 1}/{policy.max_requests} | "
            f"Tokens: {tracker.tokens_used + estimated_tokens}/{policy.max_tokens or 'unlimited'} | "
            f"Concurrency: {tracker.active_concurrency + 1}/{policy.max_concurrency}"
        )

        # Commit updates
        tracker.requests_used += 1
        tracker.active_concurrency += 1
        tracker.tokens_used += estimated_tokens
        tracker.updated_at = now

        reservation_id = None
        if estimated_tokens > 0:
            reservation_id = uuid.uuid4()
            reservation = AiJobReservation(
                id=reservation_id,
                user_id=user_id,
                is_byok=is_byok,
                reserved_tokens=estimated_tokens,
                status="PENDING",
            )
            db.add(reservation)

        await db.commit()
        return reservation_id

    @classmethod
    async def reconcile_job(
        cls,
        db: AsyncSession,
        reservation_id: uuid.UUID,
        actual_tokens: int | None = None,
        status: str = "COMPLETED",
    ) -> None:
        stmt = (
            select(AiJobReservation)
            .where(AiJobReservation.id == reservation_id)
            .with_for_update()
        )
        result = await db.execute(stmt)
        reservation = result.scalar_one_or_none()

        if not reservation or reservation.status != "PENDING":
            return

        stmt = (
            select(UserUsageTracker)
            .where(
                UserUsageTracker.user_id == reservation.user_id,
                UserUsageTracker.is_byok == reservation.is_byok,
            )
            .with_for_update()
        )
        result = await db.execute(stmt)
        tracker = result.scalar_one_or_none()

        if tracker:
            tracker.active_concurrency = max(0, tracker.active_concurrency - 1)
            if status == "COMPLETED" and actual_tokens is not None:
                diff = actual_tokens - reservation.reserved_tokens
                tracker.tokens_used = max(0, tracker.tokens_used + diff)
            else:
                # Reclaim all reserved tokens on failure or cancel
                tracker.tokens_used = max(0, tracker.tokens_used - reservation.reserved_tokens)
            tracker.updated_at = datetime.now(timezone.utc)

        reservation.status = status
        await db.commit()

    @classmethod
    async def release_concurrency(
        cls,
        db: AsyncSession,
        user_id: str,
        is_byok: bool,
    ) -> None:
        stmt = (
            select(UserUsageTracker)
            .where(
                UserUsageTracker.user_id == user_id,
                UserUsageTracker.is_byok == is_byok,
            )
            .with_for_update()
        )
        result = await db.execute(stmt)
        tracker = result.scalar_one_or_none()

        if tracker:
            tracker.active_concurrency = max(0, tracker.active_concurrency - 1)
            tracker.updated_at = datetime.now(timezone.utc)
            await db.commit()


# FastAPI Dependencies
def get_user_context(
    x_user_id: Annotated[str | None, Header(include_in_schema=False)] = None,
    x_user_is_byok: Annotated[bool | None, Header(include_in_schema=False)] = None,
) -> tuple[str, bool]:
    if not x_user_id:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="X-User-Id header is required for AI endpoints",
        )
    return x_user_id, bool(x_user_is_byok)


async def enforce_quota(
    user_context: Annotated[tuple[str, bool], Depends(get_user_context)],
    db: Annotated[AsyncSession, Depends(get_db)],
    internal_api_key: Annotated[None, Depends(require_internal_api_key)] = None,
):
    user_id, is_byok = user_context
    await QuotaManager.check_and_update_usage(db, user_id, is_byok)
    try:
        yield user_id, is_byok
    finally:
        await QuotaManager.release_concurrency(db, user_id, is_byok)

