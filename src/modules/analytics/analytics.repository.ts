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
    const [userStats, sessionCount, sessions] = await Promise.all([
      prisma.userStats.findUnique({
        where: { userId },
      }),
      prisma.quizSession.count({
        where: { userId, completedAt: { not: null } },
      }),
      prisma.quizSession.findMany({
        where: {
          userId,
          completedAt: { not: null },
        },
        select: { accuracy: true, completedAt: true },
      }),
    ]);

    return { userStats, sessionCount, sessions };
  }

  static async getOverview7Days(userId: string) {
    const today = new Date();
    const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    sevenDaysAgo.setUTCHours(0, 0, 0, 0);

    const [userStats, sessionCount, sessions] = await Promise.all([
      prisma.userStats.findUnique({
        where: { userId },
      }),
      prisma.quizSession.count({
        where: { userId, completedAt: { not: null } },
      }),
      prisma.quizSession.findMany({
        where: {
          userId,
          completedAt: { gte: sevenDaysAgo },
        },
        select: { accuracy: true, completedAt: true },
      }),
    ]);

    return { userStats, sessionCount, sessions };
  }

  static async getCompletedSessionDates(userId: string, since?: Date) {
    return prisma.quizSession.findMany({
      where: {
        userId,
        completedAt: {
          not: null,
          ...(since ? { gte: since } : {}),
        },
      },
      select: { completedAt: true },
      orderBy: { completedAt: 'desc' },
    });
  }

  static async countActiveDays(userId: string) {
    const result = await prisma.$queryRawUnsafe<{ count: bigint }[]>(
      `SELECT COUNT(DISTINCT DATE("completedAt")) as count
       FROM "QuizSession"
       WHERE "userId" = $1 AND "completedAt" IS NOT NULL`,
      userId
    );

    return Number(result[0]?.count ?? 0);
  }
}
