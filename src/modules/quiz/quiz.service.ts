import { prisma } from '@/config/db';

export class QuizApiError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
    this.name = 'QuizApiError';
  }
}

const QuizRepository = {
  async findSessionWithResponses(sessionId: string) {
    return await prisma.quizSession.findUnique({
      where: { id: sessionId },
      include: { responses: true },
    });
  }
};

export const QuizServices = {
  async updateUserStats(userId: string) {
    return { success: true };
  }
};

export class QuizService {
  async submitQuiz(sessionId: string, userId: string, responses: any[]) {
    // 1. Idempotency Check
    const existingSession = await QuizRepository.findSessionWithResponses(sessionId);
    if (existingSession?.completedAt) {
      return {
        session: existingSession,
        summary: { message: "Retrieved previously completed quiz submission." },
        alreadySubmitted: true
      };
    }

    // 2. Atomic Transaction Boundary
    const session = await prisma.$transaction(async (tx) => {
      await tx.quizResponse.createMany({
        data: responses.map(r => ({ ...r, sessionId }))
      });

      const updatedSession = await tx.quizSession.update({
        where: { id: sessionId },
        data: { completedAt: new Date() }
      });

      await tx.userStreak.update({
        where: { userId },
        data: { count: { increment: 1 }, lastActive: new Date() }
      });

      return updatedSession;
    });

    // 3. Fire-and-Forget Post-Commit Hook
    QuizServices.updateUserStats(userId).catch((err) => {
      console.error('[QuizServices.submitQuiz] post-commit stats refresh failed (non-fatal):', err);
    });

    return {
      session,
      summary: { message: "Quiz submitted successfully." },
      alreadySubmitted: false
    };
  }
}