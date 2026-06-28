import { prisma } from '@/lib/prisma';
import type { CreateQuizInput } from './quiz.types';

export class QuizRepository {
  static async create(data: CreateQuizInput & { userId: string }) {
    return prisma.quiz.create({
      data: {
        userId: data.userId,
        mode: data.mode,
        source: data.source,
        chapterId: data.chapterId,
        topicId: data.topicId,
        noteId: data.noteId,
        questionCount: data.questionCount,
      },
    });
  }

  static async findById(id: string) {
    return prisma.quiz.findUnique({ where: { id } });
  }

  static async findByUser(userId: string) {
    return prisma.quiz.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  static async update(id: string, data: { mode?: string; questionCount?: number }) {
    return prisma.quiz.update({ where: { id }, data });
  }

  static async createSession(data: {
    userId: string;
    quizId: string;
    totalQuestions: number;
  }) {
    return prisma.quizSession.create({
      data: {
        userId: data.userId,
        quizId: data.quizId,
        totalQuestions: data.totalQuestions,
        correctCount: 0,
        accuracy: 0,
        timeTaken: 0,
      },
    });
  }

  static async getSessionById(id: string) {
    return prisma.quizSession.findUnique({
      where: { id },
      include: { responses: true },
    });
  }

  static async submitSession(
    sessionId: string,
    data: {
      correctCount: number;
      accuracy: number;
      timeTaken: number;
      completedAt: Date;
    },
  ) {
    return prisma.quizSession.update({
      where: { id: sessionId },
      data,
    });
  }

  static async saveResponse(data: {
    sessionId: string;
    questionId: string;
    selectedOptionId?: string;
    subjectiveAnswer?: string;
    isCorrect?: boolean;
    timeTaken: number;
  }) {
    return prisma.questionResponse.create({ data });
  }
}
