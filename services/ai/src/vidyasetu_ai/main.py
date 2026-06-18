from fastapi import FastAPI

from vidyasetu_ai import __version__
from vidyasetu_ai.api.router import api_router
from vidyasetu_ai.api.routes.health import router as health_router


def create_app() -> FastAPI:
    app = FastAPI(
        title="VidyaSetu AI Service",
        description="Internal embeddings, retrieval, and LLM service.",
        version=__version__,
    )
    app.include_router(health_router)
    app.include_router(api_router, prefix="/api/v1")
    return app


app = create_app()
