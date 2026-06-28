import { QuizRepository } from './quiz.repository';
import type { CreateQuizInput, SubmitQuizInput } from './quiz.types';

export class QuizService {
  static async createQuiz(userId: string, input: CreateQuizInput) {
    const quiz = await QuizRepository.create({ ...input, userId });
    return quiz;
  }

  static async getQuiz(id: string) {
    const quiz = await QuizRepository.findById(id);
    if (!quiz) {
      throw new Error('Quiz not found');
    }
    return quiz;
  }

  static async getUserQuizzes(userId: string) {
    return QuizRepository.findByUser(userId);
  }

  static async startSession(userId: string, quizId: string) {
    const quiz = await QuizRepository.findById(quizId);
    if (!quiz) {
      throw new Error('Quiz not found');
    }
    if (quiz.userId !== userId) {
      throw new Error('Unauthorized');
    }
    const session = await QuizRepository.createSession({
      userId,
      quizId,
      totalQuestions: quiz.questionCount,
    });
    return session;
  }

  static async getSession(sessionId: string) {
    const session = await QuizRepository.getSessionById(sessionId);
    if (!session) {
      throw new Error('Session not found');
    }
    return session;
  }

  static async submitQuiz(userId: string, input: SubmitQuizInput) {
    const session = await QuizRepository.getSessionById(input.sessionId);
    if (!session) {
      throw new Error('Session not found');
    }
    if (session.userId !== userId) {
      throw new Error('Unauthorized');
    }
    if (session.completedAt) {
      throw new Error('Session already completed');
    }

    let correctCount = 0;
    let totalTimeTaken = 0;

    for (const answer of input.answers) {
      const isCorrect = answer.selectedOptionId
        ? await this.checkAnswer(answer.questionId, answer.selectedOptionId)
        : undefined;

      await QuizRepository.saveResponse({
        sessionId: input.sessionId,
        questionId: answer.questionId,
        selectedOptionId: answer.selectedOptionId,
        subjectiveAnswer: answer.subjectiveAnswer,
        isCorrect,
        timeTaken: answer.timeTaken,
      });

      if (isCorrect) correctCount++;
      totalTimeTaken += answer.timeTaken;
    }

    const accuracy = session.totalQuestions > 0
      ? Math.round((correctCount / session.totalQuestions) * 100) / 100
      : 0;

    const completed = await QuizRepository.submitSession(input.sessionId, {
      correctCount,
      accuracy,
      timeTaken: totalTimeTaken,
      completedAt: new Date(),
    });

    return completed;
  }

  private static async checkAnswer(
    questionId: string,
    selectedOptionId: string,
  ): Promise<boolean> {
    const { prisma } = await import('@/lib/prisma');
    const option = await prisma.option.findUnique({
      where: { id: selectedOptionId },
      select: { isCorrect: true, questionId: true },
    });
    return option?.questionId === questionId && option.isCorrect === true;
  }
}
