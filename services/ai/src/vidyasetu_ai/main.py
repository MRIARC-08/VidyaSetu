import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException

from vidyasetu_ai import __version__
from vidyasetu_ai.api.router import api_router
from vidyasetu_ai.api.routes.health import router as health_router
from vidyasetu_ai.core.config import get_settings
from vidyasetu_ai.core.model_registry import ModelRegistry
from vidyasetu_ai.utils.errors import http_exception_handler, unhandled_exception_handler

logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    settings = get_settings()
    try:
        ModelRegistry.get().preload(settings.embedding_model)
    except Exception:
        logger.warning(
            "Embedding model failed to preload at startup — will retry on first use"
        )
    yield
    ModelRegistry.reset()


def create_app() -> FastAPI:
    app = FastAPI(
        title="VidyaSetu AI Service",
        description="Internal embeddings, retrieval, and LLM service.",
        version=__version__,
        lifespan=lifespan,
    )
    app.include_router(health_router)
    app.include_router(api_router, prefix="/api/v1")

    # Register standardized error handlers so every error — including
    # unhandled runtime exceptions — returns {"detail": "..."} JSON.
    app.add_exception_handler(HTTPException, http_exception_handler)  # type: ignore[arg-type]
    app.add_exception_handler(Exception, unhandled_exception_handler)

    return app


app = create_app()
