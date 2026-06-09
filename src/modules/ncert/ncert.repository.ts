import { prisma } from '@/lib/prisma';

export class NcertRepository {
  static async getAcadmicClass(grade: number) {
    return await prisma.academicClass.findUnique({
      where: {
        level: grade,
      },
    });
  }

  static async searchContent(query: string) {
    return await prisma.chapter.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            content: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            topics: {
              some: {
                OR: [
                  {
                    title: {
                      contains: query,
                      mode: 'insensitive',
                    },
                  },
                  {
                    content: {
                      contains: query,
                      mode: 'insensitive',
                    },
                  },
                ],
              },
            },
          },
        ],
      },
      include: {
        subject: {
          include: {
            academicClass: true,
          },
        },
        topics: true,
      },
      take: 20,
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

  static async getChapters(subjectId: string) {
    return await prisma.subject.findUnique({
      where: {
        id: subjectId,
      },
      include: {
        chapters: true,
      },
    });
  }

  static async getChapter(chapterId: string) {
    return await prisma.chapter.findUnique({
      where: {
        id: chapterId,
      },
    });
  }
}
