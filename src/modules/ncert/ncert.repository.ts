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

  static async getChapters(subjectId: string, classId: string) {
    return await prisma.subject.findFirst({
      where: {
        id: subjectId,
        academicClassId: classId,
      },
      include: {
        chapters: true,
      },
    });
  }

  static async getChapter(
    chapterId: string,
    subjectId: string,
    classId: string
  ) {
    return await prisma.chapter.findFirst({
      where: {
        id: chapterId,
        subjectId,
        subject: {
          academicClassId: classId,
        },
      },
    });
  }
}
