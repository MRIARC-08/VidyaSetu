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

  static findNoteById(noteId: string, userId: string) {
    return prisma.note.findFirst({
      where: {
        id: noteId,
        userId,
        deletedAt: null,
      },
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
      include: {
        quiz: true,
      },
    });
  }

  static findQuestionById(questionId: string) {
    return prisma.question.findUnique({
      where: { id: questionId },
      select: {
        id: true,
        type: true,
      },
    });
  }

  static findOptionById(optionId: string) {
    return prisma.option.findUnique({
      where: { id: optionId },
      select: {
        id: true,
        questionId: true,
        isCorrect: true,
      },
    });
  }

  static createQuestionResponses(
    data: Prisma.QuestionResponseCreateManyInput[]
  ) {
    return prisma.questionResponse.createMany({ data });
  }

  static updateSession(
    sessionId: string,
    data: Prisma.QuizSessionUncheckedUpdateInput
  ) {
    return prisma.quizSession.update({
      where: { id: sessionId },
      data,
    });
  }
}
