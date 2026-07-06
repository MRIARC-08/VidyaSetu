from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase

from vidyasetu_ai.core.config import get_settings


class Base(DeclarativeBase):
    pass


def build_engine(database_url: str | None = None):
    url = database_url or get_settings().database_url
    # Replace postgresql:// with postgresql+asyncpg:// for async driver
    if url.startswith("postgresql://"):
        url = url.replace("postgresql://", "postgresql+asyncpg://", 1)
    return create_async_engine(url, echo=False, pool_pre_ping=True)


def build_session_factory(engine):
    return async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)