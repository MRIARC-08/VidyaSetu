import { prisma } from '@/lib/prisma';
import type {
  Prisma,
  UserStats as PrismaUserStats,
} from '@/generated/prisma/client';

export type CompletedSessionWithTopics = Prisma.QuizSessionGetPayload<{
  include: {
    responses: {
      include: {
        question: {
          include: {
            topic: true;
          };
        };
      };
    };
  };
}>;

export type QuizSessionWithResponses = Prisma.QuizSessionGetPayload<{
  include: {
    responses: true;
  };
}>;

export interface RepositoryOverviewResult {
  userStats: PrismaUserStats | null;
  sessionCount: number;
  sessions: {
    accuracy: number;
    completedAt: Date | null;
  }[];
}

export interface CompletedSessionDate {
  completedAt: Date | null;
}

export default class AnalyticsRepository {
  static async getCompletedSessionsWithTopics(
    userId: string,
    from?: Date,
    to?: Date
  ): Promise<CompletedSessionWithTopics[]> {
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

  static async getQuizSesssions(
    userId: string
  ): Promise<QuizSessionWithResponses[]> {
    return await prisma.quizSession.findMany({
      where: {
        userId: userId,
      },
      include: {
        responses: true,
      },
    });
  }

  static async getOverview(userId: string): Promise<RepositoryOverviewResult> {
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

  static async getOverview7Days(
    userId: string
  ): Promise<RepositoryOverviewResult> {
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

  static async getCompletedSessionDates(
    userId: string,
    since?: Date
  ): Promise<CompletedSessionDate[]> {
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

  static async countActiveDays(userId: string): Promise<number> {
    const result = await prisma.$queryRawUnsafe<{ count: bigint }[]>(
      `SELECT COUNT(DISTINCT DATE("completedAt")) as count
       FROM "QuizSession"
       WHERE "userId" = $1 AND "completedAt" IS NOT NULL`,
      userId
    );

    return Number(result[0]?.count ?? 0);
  }
}
