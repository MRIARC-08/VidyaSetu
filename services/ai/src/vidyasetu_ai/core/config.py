from functools import lru_cache
from pathlib import Path
from typing import Literal

from pydantic import Field, SecretStr
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_prefix="AI_",
        case_sensitive=False,
        extra="ignore",
    )

    environment: Literal["development", "test", "production"] = "development"
    internal_api_key: SecretStr = Field(min_length=32)
    log_level: Literal["DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"] = "INFO"
    database_url: str = "postgresql://postgres:postgres@localhost:5432/vidyasetu"
    groq_api_key: SecretStr | None = None
    groq_model: str | None = None
    embedding_model: str = "intfloat/multilingual-e5-base"
    model_cache_dir: Path = Path(".cache/models")
    request_timeout_seconds: int = Field(default=30, ge=1, le=120)


@lru_cache
def get_settings() -> Settings:
    return Settings()
