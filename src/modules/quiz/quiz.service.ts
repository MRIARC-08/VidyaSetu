import { QuizRepository } from './quiz.repository';
import type {
  CreateQuizInput,
  QuizQuestion,
  StartQuizInput,
  SubmitQuizInput,
} from './quiz.types';
import { QuizApiError } from './quiz.types';

const calculateAccuracy = (correctCount: number, totalQuestions: number) => {
  if (totalQuestions === 0) {
    return 0;
  }

  return Number(((correctCount / totalQuestions) * 100).toFixed(2));
};

export class QuizServices {
  static async createQuiz(input: CreateQuizInput) {
    const user = await QuizRepository.findUserById(input.userId);

    if (!user) {
      throw new QuizApiError('User not found', 404);
    }

    let questions: QuizQuestion[] = [];

    if (input.source === 'CHAPTER') {
      const chapter = await QuizRepository.findChapterById(input.chapterId!);

      if (!chapter) {
        throw new QuizApiError('Chapter not found', 404);
      }

      questions = await QuizRepository.findQuestionsByChapter(
        input.chapterId!,
        input.questionCount
      );
    }

    if (input.source === 'TOPIC') {
      const topic = await QuizRepository.findTopicById(input.topicId!);

      if (!topic) {
        throw new QuizApiError('Topic not found', 404);
      }

      questions = await QuizRepository.findQuestionsByTopic(
        input.topicId!,
        input.questionCount
      );
    }

    if (input.source === 'NOTE') {
      const note = await QuizRepository.findNoteById(
        input.noteId!,
        input.userId
      );

      if (!note) {
        throw new QuizApiError('Note not found', 404);
      }
    }

    if (['CHAPTER', 'TOPIC'].includes(input.source) && questions.length === 0) {
      throw new QuizApiError('No questions found for this quiz source', 404);
    }

    const quiz = await QuizRepository.createQuiz({
      userId: input.userId,
      mode: input.mode,
      source: input.source,
      chapterId: input.chapterId ?? null,
      topicId: input.topicId ?? null,
      noteId: input.noteId ?? null,
      questionCount: questions.length || input.questionCount,
    });

    return {
      quiz,
      questions,
    };
  }

  static async startQuiz(input: StartQuizInput) {
    const quiz = await QuizRepository.findQuizById(input.quizId);

    if (!quiz) {
      throw new QuizApiError('Quiz not found', 404);
    }

    if (quiz.userId !== input.userId) {
      throw new QuizApiError('You are not allowed to start this quiz', 403);
    }

    return QuizRepository.createSession({
      userId: input.userId,
      quizId: input.quizId,
      totalQuestions: quiz.questionCount,
      correctCount: 0,
      accuracy: 0,
      timeTaken: 0,
    });
  }

  static async submitQuiz(input: SubmitQuizInput) {
    const session = await QuizRepository.findSessionById(input.sessionId);

    if (!session) {
      throw new QuizApiError('Quiz session not found', 404);
    }

    if (session.completedAt) {
      throw new QuizApiError('Quiz session is already submitted', 409);
    }

    const responseData = [];
    let correctCount = 0;
    let totalTimeTaken = 0;

    for (const response of input.responses) {
      const question = await QuizRepository.findQuestionById(
        response.questionId
      );

      if (!question) {
        throw new QuizApiError('Question not found', 404);
      }

      let isCorrect: boolean | null = null;
      let score: number | null = null;

      if (response.selectedOptionId) {
        const selectedOption = await QuizRepository.findOptionById(
          response.selectedOptionId
        );

        if (!selectedOption) {
          throw new QuizApiError('Selected option not found', 404);
        }

        if (selectedOption.questionId !== response.questionId) {
          throw new QuizApiError(
            'Selected option does not belong to the question',
            400
          );
        }

        isCorrect = selectedOption.isCorrect;
        score = selectedOption.isCorrect ? 1 : 0;

        if (selectedOption.isCorrect) {
          correctCount += 1;
        }
      }

      totalTimeTaken += response.timeTaken ?? 0;

      responseData.push({
        sessionId: input.sessionId,
        questionId: response.questionId,
        selectedOptionId: response.selectedOptionId ?? null,
        subjectiveAnswer: response.subjectiveAnswer ?? null,
        isCorrect,
        score,
        timeTaken: response.timeTaken ?? 0,
      });
    }

    await QuizRepository.createQuestionResponses(responseData);

    const totalQuestions = session.totalQuestions || input.responses.length;
    const accuracy = calculateAccuracy(correctCount, totalQuestions);

    const updatedSession = await QuizRepository.updateSession(input.sessionId, {
      correctCount,
      accuracy,
      timeTaken: totalTimeTaken,
      completedAt: new Date(),
    });

    return {
      session: updatedSession,
      summary: {
        totalQuestions,
        attemptedQuestions: input.responses.length,
        correctCount,
        accuracy,
        timeTaken: totalTimeTaken,
      },
    };
  }
}
