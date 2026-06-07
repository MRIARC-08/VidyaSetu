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

  static async getSubjectProgress(userId: string, classLevel: number) {
    const subjects = await prisma.subject.findMany({
      where: {
        academicClass: {
          level: classLevel,
        },
      },
      include: {
        chapters: {
          select: {
            id: true,
          },
        },
      },
    });

    const quizSessions = await prisma.quizSession.findMany({
      where: {
        userId,
        completedAt: { not: null },
      },
      select: {
        quiz: {
          select: {
            chapterId: true,
            topic: {
              select: {
                chapterId: true,
              },
            },
          },
        },
      },
    });

    const practicedChapterIds = new Set<string>();
    for (const session of quizSessions) {
      if (session.quiz.chapterId) {
        practicedChapterIds.add(session.quiz.chapterId);
      } else if (session.quiz.topic?.chapterId) {
        practicedChapterIds.add(session.quiz.topic.chapterId);
      }
    }

    return subjects.map((subject: any) => {
      const totalChapters = subject.chapters.length;
      const practicedChaptersCount = subject.chapters.filter((chapter: any) =>
        practicedChapterIds.has(chapter.id)
      ).length;

      return {
        subjectId: subject.id,
        subjectName: subject.name,
        totalChapters,
        practicedChaptersCount,
      };
    });
  }
}
