import { NcertRepository } from './ncert.repository';
import { ApiError } from '../../lib/errors';

export class NcertServices {
  static async getSubjects(classId: string) {
    if (!classId || isNaN(Number(classId))) throw new ApiError(400, 'Invalid classId parameter');
    try {
      const academicClass = await NcertRepository.getAcadmicClass(Number(classId));
      if (!academicClass || !academicClass.id) throw new ApiError(404, 'Academic class not found');
      return await NcertRepository.getSubjects(academicClass.id);
    } catch (error) {
      if (error instanceof ApiError) throw error;
      console.error('[NcertServices.getSubjects] DB Error:', error);
      throw new ApiError(500, 'Internal database error');
    }
  }

  static async getChapters(subjectId: string, classId: string, page: number = 1, limit: number = 20) {
    if (!subjectId || !classId || isNaN(Number(classId))) throw new ApiError(400, 'Invalid parameters provided');
    try {
      const academicClass = await NcertRepository.getAcadmicClass(Number(classId));
      if (!academicClass || !academicClass.id) throw new ApiError(404, 'Academic class not found');
      const result = await NcertRepository.getChapters(subjectId, academicClass.id, page, limit);
      if (!result || !result.subject) throw new ApiError(404, 'Subject not found');
      return result;
    } catch (error) {
      if (error instanceof ApiError) throw error;
      console.error('[NcertServices.getChapters] DB Error:', error);
      throw new ApiError(500, 'Internal database error');
    }
  }

  static async getChapter(chapterId: string, subjectId: string, classId: string) {
    if (!chapterId || !subjectId || !classId || isNaN(Number(classId))) throw new ApiError(400, 'Invalid parameters provided');
    try {
      const academicClass = await NcertRepository.getAcadmicClass(Number(classId));
      if (!academicClass || !academicClass.id) throw new ApiError(404, 'Academic class not found');
      const chapter = await NcertRepository.getChapter(chapterId, subjectId, academicClass.id);
      if (!chapter) throw new ApiError(404, 'Chapter not found');
      return chapter;
    } catch (error) {
      if (error instanceof ApiError) throw error;
      console.error('[NcertServices.getChapter] DB Error:', error);
      throw new ApiError(500, 'Internal database error');
    }
  }

  static async updateChapterContent(chapterId: string, content: string) {
    if (!chapterId || !content) throw new ApiError(400, 'Chapter ID and content are required');
    try {
      return await NcertRepository.updateChapterContent(chapterId, content);
    } catch (error) {
      console.error('[NcertServices.updateChapterContent] DB Error:', error);
      throw new ApiError(500, 'Internal database error');
    }
  }
}
