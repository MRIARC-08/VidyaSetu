import { NcertRepository } from './ncert.repository';

export class NcertServices {
  static async getSubjects(classId: string) {
    const academicClass = await NcertRepository.getAcadmicClass(
      Number(classId)
    );

    if (!academicClass || !academicClass.id) {
      throw new Error('no academicClass');
    }

    return await NcertRepository.getSubjects(academicClass.id);
  }

  static async getChapters(
    subjectId: string,
    classId: string,
    page: number = 1,
    limit: number = 20
  ) {
    const academicClass = await NcertRepository.getAcadmicClass(
      Number(classId)
    );

    if (!academicClass || !academicClass.id) {
      throw new Error('no academicClass');
    }

    const result = await NcertRepository.getChapters(
      subjectId,
      academicClass.id,
      page,
      limit
    );

    if (!result.subject) {
      throw new Error('subject not found');
    }

    return result;
  }

  static async getChapter(
    chapterId: string,
    subjectId: string,
    classId: string
  ) {
    const academicClass = await NcertRepository.getAcadmicClass(
      Number(classId)
    );

    if (!academicClass || !academicClass.id) {
      throw new Error('no academicClass');
    }

    const chapter = await NcertRepository.getChapter(
      chapterId,
      subjectId,
      academicClass.id
    );

    if (!chapter) {
      throw new Error('chapter not found');
    }

    return chapter;
  }
}
