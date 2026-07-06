from typing import Annotated

from fastapi import APIRouter, Depends

from vidyasetu_ai import __version__
from vidyasetu_ai.core.config import Settings, get_settings
from vidyasetu_ai.core.model_registry import ModelRegistry
from vidyasetu_ai.schemas.health import HealthResponse, ReadinessResponse

router = APIRouter(tags=["health"])


@router.get("/health/live", response_model=HealthResponse)
def liveness() -> HealthResponse:
    return HealthResponse(
        status="ok",
        service="vidyasetu-ai",
        version=__version__,
    )


@router.get("/health/ready", response_model=ReadinessResponse)
def readiness(
    settings: Annotated[Settings, Depends(get_settings)],
) -> ReadinessResponse:
    registry = ModelRegistry.get()
    model_loaded = registry.is_loaded

    return ReadinessResponse(
        status="ready",
        checks={
            "configuration": True,
            "embedding_model_configured": bool(settings.embedding_model),
            "embedding_model_loaded": model_loaded,
        },
        loaded_models=registry.loaded_models,
        load_error=registry.load_error,
    )