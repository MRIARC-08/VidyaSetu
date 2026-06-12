import { prisma } from '@/lib/prisma';

export class NcertRepository {
  static async getAcadmicClass(grade: number) {
    return await prisma.academicClass.findUnique({
      where: {
        level: grade,
      },
    });
  }

  static async getSubjects(academicClassId: string) {
    return await prisma.subject.findMany({
      where: {
        academicClassId,
      },
      include: {
        chapters: true,
      },
    });
  }

  static async getChapters(subjectId: string, skip = 0, take = 20) {
    const subject = await prisma.subject.findUnique({
      where: {
        id: subjectId,
      },
      include: {
        chapters: {
          skip,
          take,
          orderBy: {
            order: 'asc',
          },
        },
      },
    });

    const totalChapters = await prisma.chapter.count({
      where: {
        subjectId,
      },
    });

    return {
      subject,
      pagination: {
        total: totalChapters,
        skip,
        take,
        hasMore: skip + take < totalChapters,
      },
    };
  }

  static async getChapter(chapterId: string) {
    return await prisma.chapter.findUnique({
      where: {
        id: chapterId,
      },
    });
  }
}
