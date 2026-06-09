import type { Prisma } from '@/generated/prisma/client';
import { prisma } from '@/lib/prisma';

export class QuizRepository {
  static findUserById(userId: string) {
    return prisma.user.findUnique({
      where: { id: userId },
      select: { id: true },
    });
  }

  static findChapterById(chapterId: string) {
    return prisma.chapter.findUnique({
      where: { id: chapterId },
      select: { id: true },
    });
  }

  static findTopicById(topicId: string) {
    return prisma.topic.findUnique({
      where: { id: topicId },
      select: { id: true },
    });
  }

  static findQuestionsByChapter(chapterId: string, take: number) {
    return prisma.question.findMany({
      where: {
        topic: {
          chapterId,
        },
      },
      take,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        topicId: true,
        type: true,
        difficulty: true,
        questionText: true,
        explanation: true,
        options: {
          select: {
            id: true,
            label: true,
            value: true,
          },
        },
      },
    });
  }

  static findQuestionsByTopic(topicId: string, take: number) {
    return prisma.question.findMany({
      where: { topicId },
      take,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        topicId: true,
        type: true,
        difficulty: true,
        questionText: true,
        explanation: true,
        options: {
          select: {
            id: true,
            label: true,
            value: true,
          },
        },
      },
    });
  }

  static createQuiz(data: Prisma.QuizUncheckedCreateInput) {
    return prisma.quiz.create({ data });
  }

  static findQuizById(quizId: string) {
    return prisma.quiz.findUnique({
      where: { id: quizId },
    });
  }

  static createSession(data: Prisma.QuizSessionUncheckedCreateInput) {
    return prisma.quizSession.create({ data });
  }

  static findSessionById(sessionId: string) {
    return prisma.quizSession.findUnique({
      where: { id: sessionId },
    });
  }

  static findSessionWithResponses(sessionId: string) {
    return prisma.quizSession.findUnique({
      where: { id: sessionId },
      include: {
        quiz: {
          select: {
            id: true,
            mode: true,
            source: true,
          },
        },
        responses: {
          include: {
            question: {
              select: {
                id: true,
                type: true,
                difficulty: true,
                questionText: true,
                explanation: true,
                options: {
                  select: {
                    id: true,
                    label: true,
                    value: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  static findQuestionsByIds(questionIds: string[]) {
    return prisma.question.findMany({
      where: { id: { in: questionIds } },
      select: { id: true },
    });
  }

  static findOptionsByIds(optionIds: string[]) {
    return prisma.option.findMany({
      where: { id: { in: optionIds } },
      select: {
        id: true,
        questionId: true,
        isCorrect: true,
      },
    });
  }

  static createQuestionResponses(
    data: Prisma.QuestionResponseCreateManyInput[],
    tx?: Prisma.TransactionClient
  ) {
    const client = tx || prisma;
    return client.questionResponse.createMany({ data });
  }

  static updateSession(
    sessionId: string,
    data: Prisma.QuizSessionUncheckedUpdateInput,
    tx?: Prisma.TransactionClient
  ) {
    const client = tx || prisma;
    return client.quizSession.update({
      where: { id: sessionId },
      data,
    });
  }

  static getUserSessions(userId: string, page: number, limit: number) {
    return prisma.quizSession.findMany({
      where: { userId },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { completedAt: { sort: 'desc', nulls: 'last' } },
      include: {
        quiz: {
          select: {
            id: true,
            mode: true,
            source: true,
            chapterId: true,
            topicId: true,
            createdAt: true,
          },
        },
      },
    });
  }

  static countUserSessions(userId: string) {
    return prisma.quizSession.count({ where: { userId } });
  }

  static getUserStats(userId: string) {
    return prisma.userStats.findUnique({ where: { userId } });
  }

  static getAllResponsesWithDifficulty(userId: string) {
    return prisma.questionResponse.findMany({
      where: { session: { userId } },
      select: {
        isCorrect: true,
        question: {
          select: { difficulty: true },
        },
      },
    });
  }

  static upsertUserStats(
    userId: string,
    data: Prisma.UserStatsUncheckedCreateInput
  ) {
    return prisma.userStats.upsert({
      where: { userId },
      create: data,
      update: {
        totalSessions: data.totalSessions,
        totalQuestions: data.totalQuestions,
        totalCorrect: data.totalCorrect,
        overallAccuracy: data.overallAccuracy,
        easyAccuracy: data.easyAccuracy,
        mediumAccuracy: data.mediumAccuracy,
        hardAccuracy: data.hardAccuracy,
      },
    });
  }
}
