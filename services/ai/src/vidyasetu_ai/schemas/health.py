from typing import Literal

from pydantic import BaseModel, Field


class HealthResponse(BaseModel):
    status: Literal["ok"]
    service: str
    version: str | None = None


class ReadinessResponse(BaseModel):
    status: Literal["ready"]
    checks: dict[str, bool] = Field(default_factory=dict)
