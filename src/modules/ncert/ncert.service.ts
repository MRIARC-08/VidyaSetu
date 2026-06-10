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

  static async searchContent(query: string) {
    const trimmedQuery = query.trim();

    if (trimmedQuery.length < 2) {
      return [];
    }

    const chapters = await NcertRepository.searchContent(trimmedQuery);

    return chapters.map((chapter) => ({
      class: chapter.subject.academicClass.level,
      subjectId: chapter.subject.id,
      subject: chapter.subject.name,
      chapterId: chapter.id,
      chapter: chapter.title,
      topics: chapter.topics.map((topic) => ({
        id: topic.id,
        title: topic.title,
      })),
    }));
  }
}
