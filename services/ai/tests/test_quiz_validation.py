"""Tests for quiz output validation schemas."""

import pytest
from pydantic import ValidationError

from vidyasetu_ai.schemas.quiz import (
    Difficulty,
    GeneratedQuestion,
    QuestionType,
    QuizOption,
    find_duplicate_questions,
    validate_question,
    validate_quiz_generation,
)

# ── Fixtures ──────────────────────────────────────────────────────────────


@pytest.fixture
def valid_mcq() -> GeneratedQuestion:
    return GeneratedQuestion(
        type=QuestionType.MCQ,
        difficulty=Difficulty.EASY,
        question_text="What is the chemical symbol for water?",
        explanation="H2O is the chemical formula for water.",
        marks=1.0,
        options=[
            QuizOption(label="A", value="H2O", is_correct=True),
            QuizOption(label="B", value="CO2", is_correct=False),
            QuizOption(label="C", value="NaCl", is_correct=False),
            QuizOption(label="D", value="HCl", is_correct=False),
        ],
    )


@pytest.fixture
def valid_subjective() -> GeneratedQuestion:
    return GeneratedQuestion(
        type=QuestionType.SUBJECTIVE,
        difficulty=Difficulty.HARD,
        question_text="Explain the process of photosynthesis in detail.",
        explanation="""
            Photosynthesis is the process by which
            plants convert sunlight into energy.
        """,
        marks=5.0,
    )


# ── Valid fixtures pass ───────────────────────────────────────────────────


class TestValidFixtures:
    def test_valid_mcq(self, valid_mcq: GeneratedQuestion) -> None:
        result = validate_question(valid_mcq, 0)
        assert result.valid is True
        assert len(result.errors) == 0

    def test_valid_subjective(self, valid_subjective: GeneratedQuestion) -> None:
        result = validate_question(valid_subjective, 1)
        assert result.valid is True
        assert len(result.errors) == 0

    def test_valid_batch_validation(
        self, valid_mcq: GeneratedQuestion, valid_subjective: GeneratedQuestion
    ) -> None:
        result = validate_quiz_generation([valid_mcq, valid_subjective])
        assert result.valid is True
        assert result.total_questions == 2
        assert all(r.valid for r in result.question_results)

    def test_quiz_generation_output_valid(
        self, valid_mcq: GeneratedQuestion
    ) -> None:
        from vidyasetu_ai.schemas.quiz import QuizGenerationOutput

        output = QuizGenerationOutput(
            questions=[valid_mcq],
            source_id="chapter-123",
            source_type="CHAPTER",
        )
        assert len(output.questions) == 1

    def test_difficulty_enum_values(self) -> None:
        assert Difficulty.EASY.value == "EASY"
        assert Difficulty.MEDIUM.value == "MEDIUM"
        assert Difficulty.HARD.value == "HARD"

    def test_question_type_enum_values(self) -> None:
        assert QuestionType.MCQ.value == "MCQ"
        assert QuestionType.SUBJECTIVE.value == "SUBJECTIVE"


# ── Invalid correct answers ───────────────────────────────────────────────


class TestCorrectAnswerValidation:
    def test_no_correct_option(self) -> None:
        q = GeneratedQuestion(
            type=QuestionType.MCQ,
            difficulty=Difficulty.MEDIUM,
            question_text="Which planet is known as the Red Planet?",
            explanation="Mars is known as the Red Planet.",
            options=[
                QuizOption(label="A", value="Venus", is_correct=False),
                QuizOption(label="B", value="Mars", is_correct=False),
                QuizOption(label="C", value="Jupiter", is_correct=False),
            ],
        )
        result = validate_question(q, 0)
        assert result.valid is False
        codes = [e.code for e in result.errors]
        assert "MCQ_NO_CORRECT" in codes

    def test_multiple_correct_options(self) -> None:
        q = GeneratedQuestion(
            type=QuestionType.MCQ,
            difficulty=Difficulty.EASY,
            question_text="Select prime numbers:",
            explanation="Prime numbers have exactly two factors.",
            options=[
                QuizOption(label="A", value="2", is_correct=True),
                QuizOption(label="B", value="3", is_correct=True),
                QuizOption(label="C", value="4", is_correct=False),
            ],
        )
        result = validate_question(q, 0)
        assert result.valid is False
        codes = [e.code for e in result.errors]
        assert "MCQ_MULTIPLE_CORRECT" in codes


# ── Duplicate options ─────────────────────────────────────────────────────


class TestDuplicateOptions:
    def test_duplicate_labels(self) -> None:
        q = GeneratedQuestion(
            type=QuestionType.MCQ,
            difficulty=Difficulty.EASY,
            question_text="What is 2 + 2?",
            explanation="2 + 2 equals 4.",
            options=[
                QuizOption(label="A", value="3", is_correct=False),
                QuizOption(label="A", value="4", is_correct=True),
                QuizOption(label="B", value="5", is_correct=False),
            ],
        )
        result = validate_question(q, 0)
        assert result.valid is False
        codes = [e.code for e in result.errors]
        assert "DUPLICATE_OPTION_LABELS" in codes

    def test_duplicate_values(self) -> None:
        q = GeneratedQuestion(
            type=QuestionType.MCQ,
            difficulty=Difficulty.EASY,
            question_text="What is the capital of France?",
            explanation="Paris is the capital of France.",
            options=[
                QuizOption(label="A", value="Paris", is_correct=True),
                QuizOption(label="B", value="London", is_correct=False),
                QuizOption(label="C", value="Paris", is_correct=False),
            ],
        )
        result = validate_question(q, 0)
        assert result.valid is False
        codes = [e.code for e in result.errors]
        assert "DUPLICATE_OPTION_VALUES" in codes


# ── Missing explanation ───────────────────────────────────────────────────


class TestExplanationValidation:
    def test_missing_explanation(self) -> None:
        q = GeneratedQuestion(
            type=QuestionType.MCQ,
            difficulty=Difficulty.EASY,
            question_text="What is 1 + 1?",
            explanation=None,
            options=[
                QuizOption(label="A", value="1", is_correct=False),
                QuizOption(label="B", value="2", is_correct=True),
            ],
        )
        result = validate_question(q, 0)
        assert result.valid is False
        codes = [e.code for e in result.errors]
        assert "MISSING_EXPLANATION" in codes

    def test_empty_explanation(self) -> None:
        with pytest.raises(ValidationError) as exc:
            GeneratedQuestion(
                type=QuestionType.MCQ,
                difficulty=Difficulty.EASY,
                question_text="What is 1 + 1?",
                explanation="   ",
                options=[
                    QuizOption(label="A", value="1", is_correct=False),
                    QuizOption(label="B", value="2", is_correct=True),
                ],
            )
        assert "explanation" in str(exc.value)

    def test_too_short_explanation(self) -> None:
        with pytest.raises(ValidationError) as exc:
            GeneratedQuestion(
                type=QuestionType.MCQ,
                difficulty=Difficulty.EASY,
                question_text="What is 1 + 1?",
                explanation="Its 2.",
                options=[
                    QuizOption(label="A", value="1", is_correct=False),
                    QuizOption(label="B", value="2", is_correct=True),
                ],
            )
        assert "explanation" in str(exc.value)


# ── Unsupported question types ────────────────────────────────────────────


class TestUnsupportedTypes:
    def test_unsupported_type_is_rejected(self) -> None:
        questions = [
            GeneratedQuestion(
                type=QuestionType.MCQ,
                difficulty=Difficulty.EASY,
                question_text="This is a valid MCQ question for testing purposes.",
                explanation="This is a detailed explanation for testing.",
                options=[
                    QuizOption(label="A", value="Yes", is_correct=True),
                    QuizOption(label="B", value="No", is_correct=False),
                ],
            ),
        ]
        questions[0].type = "FILL_IN_THE_BLANK"  # type: ignore[assignment]
        result = validate_quiz_generation(questions)
        codes = [e.code for e in result.cross_question_errors]
        assert "UNSUPPORTED_QUESTION_TYPE" in codes


# ── Marks validation ──────────────────────────────────────────────────────


class TestMarksValidation:
    def test_zero_marks(self) -> None:
        with pytest.raises(ValidationError) as exc:
            GeneratedQuestion(
                type=QuestionType.SUBJECTIVE,
                difficulty=Difficulty.MEDIUM,
                question_text="Describe the water cycle in detail.",
                explanation=(
                    "The water cycle involves evaporation,"
                    " condensation, and precipitation."
                ),
                marks=0,
            )
        assert "marks" in str(exc.value)

    def test_negative_marks(self) -> None:
        with pytest.raises(ValidationError) as exc:
            GeneratedQuestion(
                type=QuestionType.SUBJECTIVE,
                difficulty=Difficulty.MEDIUM,
                question_text="Describe the water cycle in detail.",
                explanation=(
                    "The water cycle involves evaporation,"
                    " condensation, and precipitation."
                ),
                marks=-1.0,
            )
        assert "marks" in str(exc.value)


# ── Source citation ───────────────────────────────────────────────────────


class TestSourceCitation:
    def test_source_citation_accepted(self) -> None:
        q = GeneratedQuestion(
            type=QuestionType.MCQ,
            difficulty=Difficulty.EASY,
            question_text="What is Newton's first law?",
            explanation=(
                "Newton's first law states that"
                " an object at rest stays at rest."
            ),
            source_citation="Chapter 5: Forces and Motion, NCERT Class 9",
            options=[
                QuizOption(label="A", value="Law of inertia", is_correct=True),
                QuizOption(label="B", value="Law of acceleration", is_correct=False),
            ],
        )
        result = validate_question(q, 0)
        assert result.valid is True


# ── Duplicate / near-duplicate questions ─────────────────────────────────


class TestDuplicateDetection:
    def test_exact_duplicate(self) -> None:
        text = "What is the atomic number of carbon?"
        qs = [
            GeneratedQuestion(
                type=QuestionType.MCQ,
                difficulty=Difficulty.EASY,
                question_text=text,
                explanation="Carbon has atomic number 6.",
                options=[
                    QuizOption(label="A", value="6", is_correct=True),
                    QuizOption(label="B", value="8", is_correct=False),
                ],
            ),
            GeneratedQuestion(
                type=QuestionType.MCQ,
                difficulty=Difficulty.EASY,
                question_text=text,
                explanation="Carbon has atomic number 6.",
                options=[
                    QuizOption(label="A", value="6", is_correct=True),
                    QuizOption(label="B", value="8", is_correct=False),
                ],
            ),
        ]
        duplicates = find_duplicate_questions(qs)
        assert len(duplicates) >= 1
        assert duplicates[0]["question_a_index"] == 0
        assert duplicates[0]["question_b_index"] == 1

    def test_near_duplicate(self) -> None:
        qs = [
            GeneratedQuestion(
                type=QuestionType.MCQ,
                difficulty=Difficulty.EASY,
                question_text="What is the primary function of red blood cells?",
                explanation="Red blood cells carry oxygen.",
                options=[
                    QuizOption(label="A", value="Carry oxygen", is_correct=True),
                    QuizOption(label="B", value="Fight infection", is_correct=False),
                ],
            ),
            GeneratedQuestion(
                type=QuestionType.MCQ,
                difficulty=Difficulty.EASY,
                question_text=(
                    "What is the main function of"
                    " red blood cells in the human body?"
                ),
                explanation="Red blood cells carry oxygen.",
                options=[
                    QuizOption(label="A", value="Carry oxygen", is_correct=True),
                    QuizOption(label="B", value="Fight infection", is_correct=False),
                ],
            ),
        ]
        duplicates = find_duplicate_questions(qs, similarity_threshold=0.6)
        assert len(duplicates) >= 1

    def test_distinct_questions_not_flagged(self) -> None:
        qs = [
            GeneratedQuestion(
                type=QuestionType.MCQ,
                difficulty=Difficulty.EASY,
                question_text="What is the capital of India?",
                explanation="New Delhi is the capital.",
                options=[
                    QuizOption(label="A", value="New Delhi", is_correct=True),
                    QuizOption(label="B", value="Mumbai", is_correct=False),
                ],
            ),
            GeneratedQuestion(
                type=QuestionType.MCQ,
                difficulty=Difficulty.HARD,
                question_text="Derive the quadratic formula.",
                explanation=(
                    "The quadratic formula is derived"
                    " from completing the square."
                ),
                marks=5.0,
                options=[
                    QuizOption(
                        label="A",
                        value="x = [-b \u00b1 sqrt(b\u00b2-4ac)]/2a",
                        is_correct=True,
                    ),
                    QuizOption(
                        label="B",
                        value="x = [-b \u00b1 sqrt(b\u00b2+4ac)]/2a",
                        is_correct=False,
                    ),
                ],
            ),
        ]
        duplicates = find_duplicate_questions(qs)
        assert len(duplicates) == 0


# ── Structured validation result ──────────────────────────────────────────


class TestValidationResultStructure:
    def test_field_level_errors(self) -> None:
        q = GeneratedQuestion(
            type=QuestionType.MCQ,
            difficulty=Difficulty.EASY,
            question_text="What is the capital of Australia?",
            explanation="Canberra is the capital of Australia.",
            marks=2.0,
            options=[
                QuizOption(label="A", value="Sydney", is_correct=False),
            ],
        )
        result = validate_question(q, 0)
        assert result.valid is False
        assert len(result.errors) >= 1
        for err in result.errors:
            assert err.field
            assert err.message
            assert err.code

    def test_repair_hints_present(self) -> None:
        q = GeneratedQuestion(
            type=QuestionType.MCQ,
            difficulty=Difficulty.EASY,
            question_text="This is a valid question for testing purposes here.",
            explanation="No explanation at all here but this is really long enough.",
            options=[
                QuizOption(label="A", value="Option A", is_correct=False),
            ],
        )
        result = validate_question(q, 0)
        if not result.valid:
            for err in result.errors:
                if err.code == "MCQ_MIN_OPTIONS":
                    assert err.repair_hint is not None


# ── Empty and edge cases ─────────────────────────────────────────────────


class TestEdgeCases:
    def test_empty_question_list_is_valid(self) -> None:
        result = validate_quiz_generation([])
        assert result.valid is True
        assert result.total_questions == 0

    def test_subjective_does_not_require_options(self) -> None:
        q = GeneratedQuestion(
            type=QuestionType.SUBJECTIVE,
            difficulty=Difficulty.MEDIUM,
            question_text="Write an essay on climate change and its impact.",
            explanation="Climate change is driven by greenhouse gas emissions.",
            marks=10.0,
        )
        result = validate_question(q, 0)
        assert result.valid is True

    def test_medium_difficulty(self) -> None:
        q = GeneratedQuestion(
            type=QuestionType.MCQ,
            difficulty=Difficulty.MEDIUM,
            question_text="What is the value of pi rounded to two decimal places?",
            explanation="Pi is approximately 3.14.",
            options=[
                QuizOption(label="A", value="3.14", is_correct=True),
                QuizOption(label="B", value="3.16", is_correct=False),
            ],
        )
        result = validate_question(q, 0)
        assert result.valid is True

    def test_boundary_marks(self) -> None:
        q = GeneratedQuestion(
            type=QuestionType.SUBJECTIVE,
            difficulty=Difficulty.HARD,
            question_text="Explain quantum entanglement in simple terms.",
            explanation="Quantum entanglement is when particles remain connected.",
            marks=0.5,
        )
        result = validate_question(q, 0)
        assert result.valid is True
