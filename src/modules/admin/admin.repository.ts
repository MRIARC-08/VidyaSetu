import { prisma } from '@/lib/prisma';
import type { SeedNcertInput } from './admin.types';

export class AdminRepository {
  static async getTopicById(topicId: string) {
    return prisma.topic.findUnique({
      where: { id: topicId },
      select: { id: true, title: true },
    });
  }

  static async getQuestionById(id: string) {
    return prisma.question.findUnique({
      where: { id },
      include: { options: true },
    });
  }

  static async deleteQuestion(id: string) {
    return prisma.question.delete({ where: { id } });
  }

  static async listQuestions(page: number, limit: number) {
    return prisma.question.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        topic: {
          select: {
            id: true,
            title: true,
            chapter: { select: { id: true, title: true } },
          },
        },
        options: true,
      },
    });
  }

  static async countQuestions() {
    return prisma.question.count();
  }

  static async seedNcertData(data: SeedNcertInput): Promise<{
    classesCreated: number;
    subjectsCreated: number;
    chaptersCreated: number;
    duplicatesSkipped: number;
  }> {
    let classesCreated = 0;
    let subjectsCreated = 0;
    let chaptersCreated = 0;
    let duplicatesSkipped = 0;

    await prisma.$transaction(async (tx: any) => {
      for (const book of data.books) {
        let academicClass = await tx.academicClass.findUnique({
          where: { level: book.grade },
        });

        if (!academicClass) {
          academicClass = await tx.academicClass.create({
            data: { level: book.grade },
          });
          classesCreated++;
        }

        let subject = await tx.subject.findFirst({
          where: { academicClassId: academicClass.id, name: book.subject },
        });

        if (!subject) {
          subject = await tx.subject.create({
            data: { name: book.subject, academicClassId: academicClass.id },
          });
          subjectsCreated++;
        } else {
          duplicatesSkipped++;
        }

        for (let i = 0; i < book.chapters.length; i++) {
          const existing = await tx.chapter.findFirst({
            where: { subjectId: subject.id, title: book.chapters[i] },
          });

          if (!existing) {
            await tx.chapter.create({
              data: {
                title: book.chapters[i],
                order: i + 1,
                subjectId: subject.id,
              },
            });
            chaptersCreated++;
          } else {
            duplicatesSkipped++;
          }
        }
      }
    });

    return {
      classesCreated,
      subjectsCreated,
      chaptersCreated,
      duplicatesSkipped,
    };
  }

  static async createQuestion(data: {
    topicId: string | null;
    type: string;
    difficulty: string;
    questionText: string;
    explanation?: string | null;
    options: { label: string; value: string; isCorrect: boolean }[];
  }) {
    return prisma.question.create({
      data: {
        topicId: data.topicId,
        type: data.type as any,
        difficulty: data.difficulty as any,
        questionText: data.questionText,
        explanation: data.explanation ?? null,
        options: {
          create: data.options.map((o) => ({
            label: o.label,
            value: o.value,
            isCorrect: o.isCorrect,
          })),
        },
      },
      include: { options: true },
    });
  }
}
