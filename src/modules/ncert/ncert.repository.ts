import { prisma } from '@/lib/prisma';

export class NcertRepository {
  static async getClasses() {
    return await prisma.academicClass.findMany({
      orderBy: { level: 'asc' },
    });
  }

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
