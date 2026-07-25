from fastapi import APIRouter, Depends

from vidyasetu_ai.core.security import require_internal_api_key
from vidyasetu_ai.schemas.health import HealthResponse

api_router = APIRouter()


@api_router.get(
    "/internal/ping",
    response_model=HealthResponse,
    tags=["internal"],
    dependencies=[Depends(require_internal_api_key)],
)
def internal_ping() -> HealthResponse:
    return HealthResponse(status="ok", service="vidyasetu-ai")
