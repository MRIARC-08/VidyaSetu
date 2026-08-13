from hmac import compare_digest
from typing import Annotated

from fastapi import Depends, HTTPException, status
from fastapi.security import APIKeyHeader

from vidyasetu_ai.core.config import Settings, get_settings

internal_api_key_header = APIKeyHeader(
    name="X-Internal-API-Key",
    auto_error=False,
)


def require_internal_api_key(
    provided_key: Annotated[str | None, Depends(internal_api_key_header)],
    settings: Annotated[Settings, Depends(get_settings)],
) -> None:
    expected_key = settings.internal_api_key.get_secret_value()

    if provided_key is None or not compare_digest(provided_key, expected_key):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid internal service credential",
        )
