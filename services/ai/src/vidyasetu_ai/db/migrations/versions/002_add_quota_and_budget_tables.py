"""Add quota and budget tables.

Revision ID: 002
Revises: 001
Create Date: 2026-07-06
"""

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects.postgresql import UUID

revision = "002"
down_revision = "001"
branch_labels = None
depends_on = None


def upgrade() -> None:
    # user_quota_policies
    op.create_table(
        "user_quota_policies",
        sa.Column("id", UUID(as_uuid=True), primary_key=True),
        sa.Column("name", sa.Text(), nullable=False, unique=True),
        sa.Column("max_requests", sa.Integer(), nullable=False),
        sa.Column("max_tokens", sa.BigInteger(), nullable=True),
        sa.Column("max_concurrency", sa.Integer(), nullable=False),
        sa.Column("window_seconds", sa.Integer(), nullable=False, server_default="86400"),
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

    # user_quota_assignments
    op.create_table(
        "user_quota_assignments",
        sa.Column("user_id", sa.Text(), primary_key=True),
        sa.Column(
            "platform_policy_id",
            UUID(as_uuid=True),
            sa.ForeignKey("user_quota_policies.id", ondelete="RESTRICT"),
            nullable=False,
        ),
        sa.Column(
            "byok_policy_id",
            UUID(as_uuid=True),
            sa.ForeignKey("user_quota_policies.id", ondelete="RESTRICT"),
            nullable=False,
        ),
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

    # user_usage_trackers
    op.create_table(
        "user_usage_trackers",
        sa.Column("user_id", sa.Text(), primary_key=True),
        sa.Column("is_byok", sa.Boolean(), primary_key=True, server_default="false"),
        sa.Column(
            "window_start",
            sa.DateTime(timezone=True),
            server_default=sa.func.now(),
            nullable=False,
        ),
        sa.Column("requests_used", sa.Integer(), nullable=False, server_default="0"),
        sa.Column("tokens_used", sa.BigInteger(), nullable=False, server_default="0"),
        sa.Column("active_concurrency", sa.Integer(), nullable=False, server_default="0"),
        sa.Column(
            "updated_at",
            sa.DateTime(timezone=True),
            server_default=sa.func.now(),
            nullable=False,
        ),
    )

    # ai_job_reservations
    op.create_table(
        "ai_job_reservations",
        sa.Column("id", UUID(as_uuid=True), primary_key=True),
        sa.Column("user_id", sa.Text(), nullable=False),
        sa.Column("is_byok", sa.Boolean(), nullable=False, server_default="false"),
        sa.Column("reserved_tokens", sa.Integer(), nullable=False),
        sa.Column("status", sa.Text(), nullable=False, server_default="PENDING"),
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

    # Seed default policies
    op.execute(
        """
        INSERT INTO user_quota_policies (id, name, max_requests, max_tokens, max_concurrency, window_seconds, created_at, updated_at)
        VALUES 
        ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'default_platform', 100, 50000, 2, 86400, NOW(), NOW()),
        ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a22', 'default_byok', 500, NULL, 5, 86400, NOW(), NOW())
        """
    )


def downgrade() -> None:
    op.drop_table("ai_job_reservations")
    op.drop_table("user_usage_trackers")
    op.drop_table("user_quota_assignments")
    op.drop_table("user_quota_policies")
