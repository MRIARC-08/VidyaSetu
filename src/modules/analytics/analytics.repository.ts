import { prisma } from '@/lib/prisma';

export default class AnalyticsRepository {
  static async getCompletedSessionsWithTopics(
    userId: string,
    from?: Date,
    to?: Date
  ) {
    return await prisma.quizSession.findMany({
      where: {
        userId,
        completedAt: {
          not: null,
          ...(from && { gte: from }),
          ...(to && { lte: to }),
        },
      },
      include: {
        responses: {
          include: {
            question: {
              include: {
                topic: true,
              },
            },
          },
        },
      },
      orderBy: {
        completedAt: 'desc',
      },
    });
  }

  static async getQuizSesssions(userId: string) {
    return await prisma.quizSession.findMany({
      where: {
        userId: userId,
      },
      include: {
        responses: true,
      },
    });
  }

  static async getOverview(userId: string) {
    const [user, sessionCount, sessions] = await Promise.all([
      prisma.user.findUnique({
        where: { id: userId },
        select: {
          streakCount: true,
          lastActiveDate: true,
        },
      }),
      prisma.quizSession.count({
        where: { userId, completedAt: { not: null } },
      }),
      prisma.quizSession.findMany({
        where: { userId, completedAt: { not: null } },
        select: { accuracy: true },
      }),
    ]);

    return { user, sessionCount, sessions };
  }
}
