"""
Schema unit tests — run without a live database.
Integration tests (marked with @pytest.mark.integration) require
PostgreSQL with pgvector and AI_DATABASE_URL set.
"""

import uuid
import pytest
from unittest.mock import AsyncMock, MagicMock, patch


# ── Model import tests ────────────────────────────────────────────────────────

def test_ai_document_model_has_required_columns():
    from vidyasetu_ai.db.models import AiDocument
    cols = {c.name for c in AiDocument.__table__.columns}
    required = {
        "id", "source_type", "source_id", "owner_id",
        "visibility", "content_hash", "language",
        "created_at", "updated_at",
    }
    assert required <= cols


def test_ai_chunk_model_has_required_columns():
    from vidyasetu_ai.db.models import AiChunk
    cols = {c.name for c in AiChunk.__table__.columns}
    required = {
        "id", "document_id", "heading_path", "chunk_order",
        "embedding_model", "embedding_dim", "chunk_text",
        "embedding", "token_count", "created_at",
    }
    assert required <= cols


def test_ai_documents_unique_constraint():
    from vidyasetu_ai.db.models import AiDocument
    constraints = {c.name for c in AiDocument.__table__.constraints}
    assert "uq_ai_documents_source" in constraints


def test_ai_chunks_unique_constraint():
    from vidyasetu_ai.db.models import AiChunk
    constraints = {c.name for c in AiChunk.__table__.constraints}
    assert "uq_ai_chunks_doc_order_model" in constraints


def test_ai_documents_indexes():
    from vidyasetu_ai.db.models import AiDocument
    indexes = {i.name for i in AiDocument.__table__.indexes}
    assert "ix_ai_documents_source_type" in indexes
    assert "ix_ai_documents_owner_id" in indexes


def test_ai_chunks_indexes():
    from vidyasetu_ai.db.models import AiChunk
    indexes = {i.name for i in AiChunk.__table__.indexes}
    assert "ix_ai_chunks_document_id" in indexes
    assert "ix_ai_chunks_embedding_model" in indexes


def test_ai_document_tablename():
    from vidyasetu_ai.db.models import AiDocument
    assert AiDocument.__tablename__ == "ai_documents"


def test_ai_chunk_tablename():
    from vidyasetu_ai.db.models import AiChunk
    assert AiChunk.__tablename__ == "ai_chunks"


# ── database.py unit tests ────────────────────────────────────────────────────

def test_build_engine_replaces_scheme():
    from vidyasetu_ai.db.database import build_engine
    with patch("vidyasetu_ai.db.database.create_async_engine") as mock_engine:
        mock_engine.return_value = MagicMock()
        build_engine("postgresql://localhost/test")
        called_url = mock_engine.call_args[0][0]
        assert called_url.startswith("postgresql+asyncpg://")


def test_build_engine_leaves_asyncpg_scheme():
    from vidyasetu_ai.db.database import build_engine
    with patch("vidyasetu_ai.db.database.create_async_engine") as mock_engine:
        mock_engine.return_value = MagicMock()
        build_engine("postgresql+asyncpg://localhost/test")
        called_url = mock_engine.call_args[0][0]
        assert called_url.startswith("postgresql+asyncpg://")