import { prisma } from '@/lib/prisma';

// TODO: Implement analytics repository
export default class AnalyticsRepository {
  static async getQuizSesssions(userId: string) {
    // await prisma.user.findUnique({
    //   where: {
    //     id: userId,
    //   },
    //   include: {
    //     quizSessions: true,
    //     quizzes: true,

    //   },
    // });

    return await prisma.quizSession.findMany({
      where: {
        userId: userId,
      },
      include: {
        responses: true,
      },
    });
  }
}
