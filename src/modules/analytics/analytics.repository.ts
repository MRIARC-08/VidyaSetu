import { prisma } from '@/lib/prisma';

export default class AnalyticsRepository {
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
