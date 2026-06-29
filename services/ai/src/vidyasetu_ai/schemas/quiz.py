"""Pydantic schemas for quiz generation input, output, and validation."""

from __future__ import annotations

import difflib
from enum import StrEnum
from typing import Any

from pydantic import BaseModel, Field, model_validator


class QuestionType(StrEnum):
    MCQ = "MCQ"
    SUBJECTIVE = "SUBJECTIVE"


class Difficulty(StrEnum):
    EASY = "EASY"
    MEDIUM = "MEDIUM"
    HARD = "HARD"


class QuizOption(BaseModel):
    label: str = Field(..., min_length=1, max_length=10)
    value: str = Field(..., min_length=1, max_length=1000)
    is_correct: bool = False


class GeneratedQuestion(BaseModel):
    type: QuestionType
    difficulty: Difficulty
    question_text: str = Field(..., min_length=10, max_length=2000)
    explanation: str | None = Field(None, min_length=10, max_length=3000)
    options: list[QuizOption] = []
    marks: float = Field(default=1.0, ge=0.5, le=100.0)
    source_citation: str | None = Field(None, min_length=3, max_length=500)


class QuizGenerationInput(BaseModel):
    source_id: str = Field(..., min_length=1)
    source_type: str = Field(..., pattern="^(CHAPTER|TOPIC|NOTE|AI|CUSTOM)$")
    count: int = Field(default=5, ge=1, le=50)
    difficulty_preference: list[Difficulty] | None = None


class ValidationErrorDetail(BaseModel):
    field: str
    message: str
    code: str
    repair_hint: str | None = None


class QuestionValidationResult(BaseModel):
    question_index: int
    valid: bool
    errors: list[ValidationErrorDetail] = []


class QuizValidationResult(BaseModel):
    valid: bool
    total_questions: int
    question_results: list[QuestionValidationResult] = []
    cross_question_errors: list[ValidationErrorDetail] = []
    metadata: dict[str, Any] = {}


class QuizGenerationOutput(BaseModel):
    questions: list[GeneratedQuestion]
    source_id: str
    source_type: str
    metadata: dict[str, Any] = {}

    @model_validator(mode="after")
    def validate_quiz_output(self) -> QuizGenerationOutput:
        errors: list[ValidationErrorDetail] = []

        for i, q in enumerate(self.questions):
            if q.type == QuestionType.MCQ:
                if len(q.options) < 2:
                    errors.append(
                        ValidationErrorDetail(
                            field=f"questions[{i}].options",
                            message="MCQ must have at least 2 options",
                            code="MCQ_MIN_OPTIONS",
                            repair_hint=(
                                "Add more options or change"
                                " question type to SUBJECTIVE"
                            ),
                        )
                    )

                labels = [o.label for o in q.options]
                if len(labels) != len(set(labels)):
                    errors.append(
                        ValidationErrorDetail(
                            field=f"questions[{i}].options",
                            message="Option labels must be unique",
                            code="DUPLICATE_OPTION_LABELS",
                            repair_hint=(
                                "Assign unique labels"
                                " (e.g. A, B, C, D) to each option"
                            ),
                        )
                    )

                values = [o.value.strip().lower() for o in q.options]
                if len(values) != len(set(values)):
                    errors.append(
                        ValidationErrorDetail(
                            field=f"questions[{i}].options",
                            message="Option values must be unique",
                            code="DUPLICATE_OPTION_VALUES",
                            repair_hint="Remove or reword duplicate option values",
                        )
                    )

                correct_options = [o for o in q.options if o.is_correct]
                if len(correct_options) != 1:
                    errors.append(
                        ValidationErrorDetail(
                            field=f"questions[{i}].options",
                            message="MCQ must have exactly one correct option",
                            code="MCQ_CORRECT_COUNT",
                            repair_hint=(
                                "Mark exactly one option as correct"
                                if len(correct_options) == 0
                                else "Only one option should be marked as correct"
                            ),
                        )
                    )

            if not q.explanation or len(q.explanation.strip()) < 10:
                errors.append(
                    ValidationErrorDetail(
                        field=f"questions[{i}].explanation",
                        message="Explanation is required"
                        " and must be at least 10 characters",
                        code="MISSING_EXPLANATION",
                        repair_hint=(
                            "Provide a detailed explanation"
                            " of the correct answer"
                        ),
                    )
                )

        if errors:
            raise ValueError(
                f"Quiz validation failed with {len(errors)} error(s): "
                + "; ".join(e.message for e in errors[:5])
            )

        return self


def find_duplicate_questions(
    questions: list[GeneratedQuestion],
    similarity_threshold: float = 0.85,
) -> list[dict[str, Any]]:
    duplicates: list[dict[str, Any]] = []
    seen: list[tuple[int, str]] = []

    for i, q in enumerate(questions):
        normalized = q.question_text.strip().lower()
        for j, prev in seen:
            ratio = difflib.SequenceMatcher(None, prev, normalized).ratio()
            if ratio >= similarity_threshold:
                duplicates.append(
                    {
                        "question_a_index": j,
                        "question_b_index": i,
                        "similarity": round(ratio, 4),
                        "text_a": questions[j].question_text,
                        "text_b": q.question_text,
                    }
                )
        seen.append((i, normalized))

    return duplicates


def validate_question(
    question: GeneratedQuestion,
    index: int,
) -> QuestionValidationResult:
    errors: list[ValidationErrorDetail] = []

    if len(question.question_text.strip()) < 10:
        errors.append(
            ValidationErrorDetail(
                field=f"questions[{index}].question_text",
                message="Question text must be at least 10 characters",
                code="SHORT_QUESTION_TEXT",
                repair_hint="Write a complete question with sufficient detail",
            )
        )

    if question.type == QuestionType.MCQ:
        if len(question.options) < 2:
            errors.append(
                ValidationErrorDetail(
                    field=f"questions[{index}].options",
                    message="MCQ must have at least 2 options",
                    code="MCQ_MIN_OPTIONS",
                    repair_hint=(
                        "Add more options or change"
                        " question type to SUBJECTIVE"
                    ),
                )
            )

        labels = [o.label for o in question.options]
        if len(labels) != len(set(labels)):
            errors.append(
                ValidationErrorDetail(
                    field=f"questions[{index}].options",
                    message="Option labels must be unique",
                    code="DUPLICATE_OPTION_LABELS",
                    repair_hint=(
                        "Assign unique labels"
                        " (e.g. A, B, C, D) to each option"
                    ),
                )
            )

        values = [o.value.strip().lower() for o in question.options]
        if len(values) != len(set(values)):
            errors.append(
                ValidationErrorDetail(
                    field=f"questions[{index}].options",
                    message="Option values must be unique",
                    code="DUPLICATE_OPTION_VALUES",
                    repair_hint="Remove or reword duplicate option values",
                )
            )

        correct_count = sum(1 for o in question.options if o.is_correct)
        if correct_count == 0:
            errors.append(
                ValidationErrorDetail(
                    field=f"questions[{index}].options",
                    message="MCQ must have a correct answer marked",
                    code="MCQ_NO_CORRECT",
                    repair_hint="Mark one option with is_correct=true",
                )
            )
        elif correct_count > 1:
            errors.append(
                ValidationErrorDetail(
                    field=f"questions[{index}].options",
                    message="MCQ must have exactly one correct option",
                    code="MCQ_MULTIPLE_CORRECT",
                    repair_hint="Only one option should be marked as correct",
                )
            )

        for opt in question.options:
            if opt.is_correct:
                value_ok = any(
                    o.value.strip().lower() == opt.value.strip().lower()
                    and o.is_correct
                    for o in question.options
                )
                if not value_ok:
                    idx = question.options.index(opt)
                    errors.append(
                        ValidationErrorDetail(
                            field=(
                                f"questions[{index}]"
                                f".options[{idx}].value"
                            ),
                            message="Correct answer value"
                            " must exist in the option list",
                            code="CORRECT_ANSWER_MISMATCH",
                            repair_hint=(
                                "Ensure the correct option value"
                                " matches one of the listed options"
                            ),
                        )
                    )
                break

    if not question.explanation or len(question.explanation.strip()) < 10:
        errors.append(
            ValidationErrorDetail(
                field=f"questions[{index}].explanation",
                message="Explanation is required"
                " and must be at least 10 characters",
                code="MISSING_EXPLANATION",
                repair_hint=(
                    "Provide a detailed explanation"
                    " of the correct answer"
                ),
            )
        )

    return QuestionValidationResult(
        question_index=index,
        valid=len(errors) == 0,
        errors=errors,
    )


def validate_quiz_generation(
    questions: list[GeneratedQuestion],
    source_type: str | None = None,
) -> QuizValidationResult:
    question_results: list[QuestionValidationResult] = []
    cross_errors: list[ValidationErrorDetail] = []

    for i, q in enumerate(questions):
        result = validate_question(q, i)
        question_results.append(result)

    duplicates = find_duplicate_questions(questions)
    for dup in duplicates:
        cross_errors.append(
            ValidationErrorDetail(
                field=(
                    f"questions[{dup['question_b_index']}]"
                    ".question_text"
                ),
                message=(
                    f"Question {dup['question_b_index']}"
                    f" is {dup['similarity']:.0%} similar"
                    f" to question {dup['question_a_index']}"
                ),
                code="DUPLICATE_QUESTION",
                repair_hint="Reword or remove the near-duplicate question",
            )
        )

    unsupported = [
        q
        for q in questions
        if q.type not in (QuestionType.MCQ, QuestionType.SUBJECTIVE)
    ]
    for q in unsupported:
        idx = questions.index(q)
        cross_errors.append(
            ValidationErrorDetail(
                field=f"questions[{idx}].type",
                message=f"Unsupported question type: {q.type}",
                code="UNSUPPORTED_QUESTION_TYPE",
                repair_hint=(
                    f"Change type to one of:"
                    f" {', '.join(t.value for t in QuestionType)}"
                ),
            )
        )

    all_valid = all(r.valid for r in question_results) and len(cross_errors) == 0

    return QuizValidationResult(
        valid=all_valid,
        total_questions=len(questions),
        question_results=question_results,
        cross_question_errors=cross_errors,
    )
