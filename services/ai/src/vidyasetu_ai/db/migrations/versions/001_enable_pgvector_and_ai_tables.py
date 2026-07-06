"""Enable pgvector extension and create ai_documents and ai_chunks tables.

Revision ID: 001
Revises:
Create Date: 2026-06-23
Migration owner: Python AI service (Alembic)
Do NOT modify these tables from Prisma migrations.
"""

import sqlalchemy as sa
from alembic import op
from pgvector.sqlalchemy import Vector
from sqlalchemy.dialects.postgresql import UUID

revision = "001"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # Enable pgvector extension
    op.execute("CREATE EXTENSION IF NOT EXISTS vector")

    # ai_documents table
    op.create_table(
        "ai_documents",
        sa.Column("id", UUID(as_uuid=True), primary_key=True),
        sa.Column("source_type", sa.Text(), nullable=False),
        sa.Column("source_id", sa.Text(), nullable=False),
        sa.Column("owner_id", sa.Text(), nullable=True),
        sa.Column("visibility", sa.Text(), nullable=False, server_default="public"),
        sa.Column("content_hash", sa.Text(), nullable=False),
        sa.Column("language", sa.Text(), nullable=False, server_default="en"),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            server_default=sa.func.now(),
            nullable=False,
        ),
        sa.Column(
            "updated_at",
            sa.DateTime(timezone=True),
            server_default=sa.func.now(),
            nullable=False,
        ),
    )
    op.create_unique_constraint(
        "uq_ai_documents_source", "ai_documents", ["source_type", "source_id"]
    )
    op.create_index("ix_ai_documents_source_type", "ai_documents", ["source_type"])
    op.create_index("ix_ai_documents_owner_id", "ai_documents", ["owner_id"])

    # ai_chunks table
    op.create_table(
        "ai_chunks",
        sa.Column("id", UUID(as_uuid=True), primary_key=True),
     sa.Column(
            "document_id",
            UUID(as_uuid=True),
            sa.ForeignKey("ai_documents.id", ondelete="CASCADE"),
            nullable=False,
        ),
        sa.Column("heading_path", sa.Text(), nullable=True),
        sa.Column("chunk_order", sa.Integer(), nullable=False),
        sa.Column("embedding_model", sa.Text(), nullable=False),
        sa.Column("embedding_dim", sa.Integer(), nullable=False),
        sa.Column("chunk_text", sa.Text(), nullable=False),
        sa.Column("embedding", Vector(768), nullable=True),
        sa.Column("token_count", sa.BigInteger(), nullable=True),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            server_default=sa.func.now(),
            nullable=False,
        ),
    )
    op.create_unique_constraint(
        "uq_ai_chunks_doc_order_model",
        "ai_chunks",
        ["document_id", "chunk_order", "embedding_model"],
    )
    op.create_index("ix_ai_chunks_document_id", "ai_chunks", ["document_id"])
    op.create_index("ix_ai_chunks_embedding_model", "ai_chunks", ["embedding_model"])

    # HNSW vector index for fast similarity search with source filtering
    op.execute(
        """
        CREATE INDEX ix_ai_chunks_embedding_hnsw
        ON ai_chunks
        USING hnsw (embedding vector_cosine_ops)
        WITH (m = 16, ef_construction = 64)
        """
    )


def downgrade() -> None:
    op.drop_table("ai_chunks")
    op.drop_table("ai_documents")
    op.execute("DROP EXTENSION IF EXISTS vector")