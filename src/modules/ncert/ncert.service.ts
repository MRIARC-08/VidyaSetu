import { NcertRepository } from './ncert.repository';

export class NcertServices {
  static async getSubjects(classId: string) {
    const academicClass = await NcertRepository.getAcadmicClass(
      Number(classId)
    );

    if (!academicClass || !academicClass.id)
      throw new Error('no academicClass');
    return await NcertRepository.getSubjects(academicClass?.id);
  }

  static async getChapters(subjectId: string) {
    return await NcertRepository.getChapters(subjectId);
  }

  static async getChapter(chapterId: string) {
    return NcertRepository.getChapter(chapterId);
  }

  static async updateChapterContent(
  chapterId: string,
  content: string
) {
  return NcertRepository.updateChapterContent(
    chapterId,
    content
  );
}
}
