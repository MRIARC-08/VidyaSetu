"""Pydantic schemas for AI-generated study notes validation.

Mirrors the approach in schemas/quiz.py (structural output validation),
extended with the two checks free-text study notes additionally need:
content safety and topical/factual consistency with the source chapter.

This module does not call an LLM. It validates content that was already
generated elsewhere (or, for the consistency check, uses embedding
similarity via an injected `similarity_fn` so it stays testable without
a real model loaded).
"""

from __future__ import annotations

from collections.abc import Callable
from enum import StrEnum
from typing import Any

from pydantic import BaseModel, Field

from vidyasetu_ai.core.content_safety import ExternalModerator, scan_for_unsafe_content
from vidyasetu_ai.core.sanitization import sanitize_source_title

SimilarityFn = Callable[[str, str], float]


class ValidationStatus(StrEnum):
    VALIDATED = "VALIDATED"
    REQUIRES_REVIEW = "REQUIRES_REVIEW"
    REJECTED = "REJECTED"


class NoteSourceType(StrEnum):
    CHAPTER = "CHAPTER"
    TOPIC = "TOPIC"


class GeneratedNote(BaseModel):
    content: str = Field(..., min_length=1, max_length=20_000)
    source_id: str = Field(..., min_length=1)
    source_type: NoteSourceType
    source_title: str = Field(..., min_length=1, max_length=300)


class NoteValidationInput(BaseModel):
    note: GeneratedNote
    source_content: str = Field(
        ...,
        min_length=1,
        description=(
            "Ground-truth chapter/topic content the note was "
            "generated from — used for the consistency check."
        ),
    )
    min_content_length: int = Field(
        default=40,
        ge=1,
        description="Minimum trimmed length for a note to pass the quality check.",
    )
    consistency_threshold: float = Field(
        default=0.45,
        ge=0.0,
        le=1.0,
        description=(
            "Minimum cosine similarity between note and source content "
            "embeddings to be considered consistent. Tune against real "
            "embedding model output before relying on this in production."
        ),
    )


class SafetyCheckResult(BaseModel):
    passed: bool
    reasons: list[str] = []


class ConsistencyCheckResult(BaseModel):
    consistent: bool
    similarity: float
    threshold: float


class QualityCheckResult(BaseModel):
    passed: bool
    reasons: list[str] = []


class NoteValidationResult(BaseModel):
    status: ValidationStatus
    safety: SafetyCheckResult
    consistency: ConsistencyCheckResult
    quality: QualityCheckResult
    sanitized_source_title: str
    metadata: dict[str, Any] = {}


def _run_quality_check(
    content: str, source_title: str, min_length: int
) -> QualityCheckResult:
    reasons: list[str] = []
    trimmed = content.strip()

    if len(trimmed) < min_length:
        reasons.append(
            f"content is only {len(trimmed)} characters, below minimum of {min_length}"
        )

    if trimmed.lower() == source_title.strip().lower():
        reasons.append(
            "content is identical to the source title (likely a failed generation)"
        )

    return QualityCheckResult(passed=len(reasons) == 0, reasons=reasons)


def _decide_status(
    safety: SafetyCheckResult,
    consistency: ConsistencyCheckResult,
    quality: QualityCheckResult,
) -> ValidationStatus:
    if not safety.passed:
        # Safety failures carry the highest potential for harm to a
        # minor, so they are rejected outright rather than queued.
        return ValidationStatus.REJECTED
    if not consistency.consistent or not quality.passed:
        return ValidationStatus.REQUIRES_REVIEW
    return ValidationStatus.VALIDATED


def validate_note(
    payload: NoteValidationInput,
    similarity_fn: SimilarityFn,
    external_moderator: ExternalModerator | None = None,
) -> NoteValidationResult:
    """Run the full validation pipeline for one generated note.

    `similarity_fn(text_a, text_b) -> float` computes embedding cosine
    similarity; it's injected so this function can be unit tested without
    loading a real embedding model.
    """
    sanitized_title = sanitize_source_title(payload.note.source_title)

    safety_passed, safety_reasons = scan_for_unsafe_content(
        payload.note.content, external_moderator=external_moderator
    )
    safety = SafetyCheckResult(passed=safety_passed, reasons=safety_reasons)

    similarity = similarity_fn(payload.note.content, payload.source_content)
    consistency = ConsistencyCheckResult(
        consistent=similarity >= payload.consistency_threshold,
        similarity=similarity,
        threshold=payload.consistency_threshold,
    )

    quality = _run_quality_check(
        payload.note.content, payload.note.source_title, payload.min_content_length
    )

    status = _decide_status(safety, consistency, quality)

    return NoteValidationResult(
        status=status,
        safety=safety,
        consistency=consistency,
        quality=quality,
        sanitized_source_title=sanitized_title.sanitized_text,
        metadata={"title_sanitizer_flags": sanitized_title.flags},
    )