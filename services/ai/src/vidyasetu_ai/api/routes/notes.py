from fastapi import APIRouter, Depends

from vidyasetu_ai.core.model_registry import ModelRegistry
from vidyasetu_ai.core.security import require_internal_api_key
from vidyasetu_ai.core.similarity import cosine_similarity
from vidyasetu_ai.schemas.notes import (
    NoteValidationInput,
    NoteValidationResult,
    validate_note,
)

router = APIRouter(
    prefix="/notes",
    tags=["notes"],
    dependencies=[Depends(require_internal_api_key)],
)


def _embedding_similarity(text_a: str, text_b: str) -> float:
    entry = ModelRegistry.get().get_model()
    vec_a, vec_b = entry.model.encode([text_a, text_b])
    return cosine_similarity(vec_a, vec_b)


@router.post("/validate", response_model=NoteValidationResult)
def validate_generated_note(payload: NoteValidationInput) -> NoteValidationResult:
    """Validate an AI-generated study note before it is stored/shown.

    Called by the Next.js backend after generation and before the note
    is persisted. See schemas.notes.validate_note for the pipeline:
    prompt-injection-safe title handling, content safety scan, embedding
    based consistency check against the source chapter, and a basic
    quality check.
    """
    return validate_note(payload, similarity_fn=_embedding_similarity)