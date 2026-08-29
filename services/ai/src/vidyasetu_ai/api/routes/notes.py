import logging

from fastapi import APIRouter, Depends

from vidyasetu_ai.core.model_registry import ModelRegistry
from vidyasetu_ai.core.security import require_internal_api_key
from vidyasetu_ai.core.similarity import cosine_similarity
from vidyasetu_ai.schemas.notes import (
    NoteValidationInput,
    NoteValidationResult,
    validate_note,
)
from vidyasetu_ai.utils.errors import (
    raise_bad_input,
    raise_document_parsing_error,
    raise_model_failure,
)

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/notes",
    tags=["notes"],
    dependencies=[Depends(require_internal_api_key)],
)


def _embedding_similarity(text_a: str, text_b: str) -> float:
    """Return cosine similarity between two texts using the loaded embedding model.

    Raises:
        ModelFailureError: if the embedding model is unavailable or fails.
    """
    try:
        entry = ModelRegistry.get().get_model()
        vec_a, vec_b = entry.model.encode([text_a, text_b])
        return cosine_similarity(vec_a, vec_b)
    except Exception as exc:
        logger.error("Embedding model failure: %s", exc, exc_info=True)
        raise_model_failure(
            "The embedding model is currently unavailable. Please try again later."
        )


@router.post("/validate", response_model=NoteValidationResult)
def validate_generated_note(payload: NoteValidationInput) -> NoteValidationResult:
    """Validate an AI-generated study note before it is stored/shown.

    Called by the Next.js backend after generation and before the note
    is persisted. See schemas.notes.validate_note for the pipeline:
    prompt-injection-safe title handling, content safety scan, embedding
    based consistency check against the source chapter, and a basic
    quality check.

    Raises:
        BadInputError (400): if the note or source content is empty/invalid.
        DocumentParsingError (422): if the note payload cannot be processed.
        ModelFailureError (500): if the embedding model fails during validation.
    """
    if not payload.note.content.strip():
        raise_bad_input("note.content must not be empty.")

    if not payload.source_content.strip():
        raise_bad_input("source_content must not be empty.")

    try:
        return validate_note(payload, similarity_fn=_embedding_similarity)
    except ValueError as exc:
        logger.warning("Note validation rejected due to bad input: %s", exc)
        raise_bad_input(str(exc))
    except (TypeError, AttributeError) as exc:
        # Covers document/payload parsing failures (e.g., malformed note structure)
        logger.error("Document parsing error during note validation: %s", exc, exc_info=True)
        raise_document_parsing_error(
            f"The note payload could not be processed: {exc}"
        )