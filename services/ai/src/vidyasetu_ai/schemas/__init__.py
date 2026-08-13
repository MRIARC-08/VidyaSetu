"""API schemas."""

from vidyasetu_ai.schemas.health import HealthResponse, ReadinessResponse
from vidyasetu_ai.schemas.quiz import (
    Difficulty,
    GeneratedQuestion,
    QuestionType,
    QuestionValidationResult,
    QuizGenerationInput,
    QuizGenerationOutput,
    QuizOption,
    QuizValidationResult,
    ValidationErrorDetail,
    find_duplicate_questions,
    validate_question,
    validate_quiz_generation,
)

__all__ = [
    "Difficulty",
    "GeneratedQuestion",
    "HealthResponse",
    "QuestionType",
    "QuestionValidationResult",
    "QuizGenerationInput",
    "QuizGenerationOutput",
    "QuizOption",
    "QuizValidationResult",
    "ReadinessResponse",
    "ValidationErrorDetail",
    "find_duplicate_questions",
    "validate_question",
    "validate_quiz_generation",
]
