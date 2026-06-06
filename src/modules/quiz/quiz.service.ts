import { prisma } from '@/lib/prisma';
import type { Prisma } from '@/generated/prisma/client';
import { QuizRepository } from './quiz.repository';
import type {
  CreateQuizInput,
  QuizQuestion,
  StartQuizInput,
  SubmitQuizInput,
} from './quiz.types';
import { QuizApiError } from './quiz.types';
import AnalyticsService from '../analytics/analytics.service';

const calculateAccuracy = (correctCount: number, totalQuestions: number) => {
  if (totalQuestions === 0) {
    return 0;
  }

  return Number(((correctCount / totalQuestions) * 100).toFixed(2));
};

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

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

    if (
      input.source === 'NOTE' ||
      input.source === 'CUSTOM' ||
      input.source === 'AI'
    ) {
      throw new QuizApiError(
        `${input.source} quiz source is not yet supported`,
        501
      );
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
      questionCount: input.questionCount,
    });

    return {
      quiz,
      questions: shuffleArray(questions),
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

  static async getSession(sessionId: string, userId: string) {
    const session = await QuizRepository.findSessionWithResponses(sessionId);

    if (!session) {
      throw new QuizApiError('Quiz session not found', 404);
    }

    if (session.userId !== userId) {
      throw new QuizApiError('You are not allowed to view this session', 403);
    }

    const sanitizedResponses = session.responses.map((r) => ({
      id: r.id,
      questionId: r.questionId,
      selectedOptionId: r.selectedOptionId,
      subjectiveAnswer: r.subjectiveAnswer,
      isCorrect: r.isCorrect,
      score: r.score,
      timeTaken: r.timeTaken,
      question: {
        id: r.question.id,
        type: r.question.type,
        difficulty: r.question.difficulty,
        questionText: r.question.questionText,
        explanation: r.question.explanation,
        options: r.question.options,
      },
    }));

    return {
      session: {
        id: session.id,
        quizId: session.quizId,
        totalQuestions: session.totalQuestions,
        correctCount: session.correctCount,
        accuracy: session.accuracy,
        timeTaken: session.timeTaken,
        startedAt: session.startedAt,
        completedAt: session.completedAt,
        quiz: {
          id: session.quiz.id,
          mode: session.quiz.mode,
          source: session.quiz.source,
        },
      },
      responses: sanitizedResponses,
    };
  }

  static async getQuizHistory(userId: string, page: number, limit: number) {
    const safeLimit = Math.min(limit, 50);
    const sessions = await QuizRepository.getUserSessions(
      userId,
      page,
      safeLimit
    );
    const total = await QuizRepository.countUserSessions(userId);

    return { sessions, total, page, limit: safeLimit };
  }

  static async submitQuiz(input: SubmitQuizInput) {
    const session = await QuizRepository.findSessionById(input.sessionId);

    if (!session) {
      throw new QuizApiError('Quiz session not found', 404);
    }

    if (session.userId !== input.userId) {
      throw new QuizApiError('You are not allowed to submit this session', 403);
    }

    if (session.completedAt) {
      throw new QuizApiError('Quiz session is already submitted', 409);
    }

    const questionIds = [...new Set(input.responses.map((r) => r.questionId))];
    const questions = await QuizRepository.findQuestionsByIds(questionIds);

    if (questions.length !== questionIds.length) {
      throw new QuizApiError('One or more questions not found', 404);
    }

    const questionMap = new Map(questions.map((q) => [q.id, q]));

    const optionIds = [
      ...new Set(
        input.responses
          .filter((r) => r.selectedOptionId)
          .map((r) => r.selectedOptionId!)
      ),
    ];

    const options =
      optionIds.length > 0
        ? await QuizRepository.findOptionsByIds(optionIds)
        : [];

    const optionMap = new Map(options.map((o) => [o.id, o]));

    const responseData: Prisma.QuestionResponseCreateManyInput[] = [];
    let correctCount = 0;
    let totalTimeTaken = 0;

    for (const response of input.responses) {
      if (!questionMap.has(response.questionId)) {
        throw new QuizApiError('Question not found', 404);
      }

      let isCorrect: boolean | null = null;
      let score: number | null = null;

      if (response.selectedOptionId) {
        const selectedOption = optionMap.get(response.selectedOptionId);

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

    const totalQuestions = session.totalQuestions ?? input.responses.length;
    const accuracy = calculateAccuracy(correctCount, totalQuestions);

    const updatedSession = await prisma.$transaction(async (tx) => {
      await QuizRepository.createQuestionResponses(responseData, tx);

      const sess = await QuizRepository.updateSession(
        input.sessionId,
        {
          correctCount,
          accuracy,
          timeTaken: totalTimeTaken,
          completedAt: new Date(),
        },
        tx
      );

      await AnalyticsService.updateStatsAndStreak(
        session.userId,
        {
          totalQuestions,
          correctCount,
        },
        tx
      );

      return sess;
    });

    await QuizServices.updateUserStats(session.userId);

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

  private static async updateUserStats(userId: string) {
    const [sessionCount, allResponses] = await Promise.all([
      QuizRepository.countUserSessions(userId),
      QuizRepository.getAllResponsesWithDifficulty(userId),
    ]);

    let totalCorrect = 0;
    let totalQuestions = 0;
    let easyCorrect = 0;
    let easyTotal = 0;
    let mediumCorrect = 0;
    let mediumTotal = 0;
    let hardCorrect = 0;
    let hardTotal = 0;

    for (const r of allResponses) {
      totalQuestions++;
      if (r.isCorrect) totalCorrect++;

      const diff = r.question.difficulty;
      if (diff === 'EASY') {
        easyTotal++;
        if (r.isCorrect) easyCorrect++;
      } else if (diff === 'MEDIUM') {
        mediumTotal++;
        if (r.isCorrect) mediumCorrect++;
      } else if (diff === 'HARD') {
        hardTotal++;
        if (r.isCorrect) hardCorrect++;
      }
    }

    await QuizRepository.upsertUserStats(userId, {
      userId,
      totalSessions: sessionCount,
      totalQuestions,
      totalCorrect,
      overallAccuracy: calculateAccuracy(totalCorrect, totalQuestions),
      easyAccuracy: calculateAccuracy(easyCorrect, easyTotal),
      mediumAccuracy: calculateAccuracy(mediumCorrect, mediumTotal),
      hardAccuracy: calculateAccuracy(hardCorrect, hardTotal),
    });
  }
}
