from typing import Literal
from pydantic import BaseModel, Field


class HealthResponse(BaseModel):
    status: Literal["ok"]
    service: str
    version: str | None = None


class ReadinessResponse(BaseModel):
    status: Literal["ready", "degraded"]
    checks: dict[str, bool] = Field(default_factory=dict)
    loaded_models: list[str] = Field(default_factory=list)
    load_error: str | None = None