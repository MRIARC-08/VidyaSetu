import { NcertRepository } from './ncert.repository';
import UserServices from '../user/user.service';
import { NcertApiError } from './ncert.types';

export class NcertServices {
  static async getSubjects() {
    const user = await UserServices.getUser();
    const academicClassLevel = Number(user?.class);

    if (!Number.isFinite(academicClassLevel) || academicClassLevel <= 0) {
      throw new NcertApiError('Invalid academic class', 400);
    }

    const academicClass =
      await NcertRepository.getAcadmicClass(academicClassLevel);

    if (!academicClass?.id) {
      throw new NcertApiError('Academic class not found', 404);
    }

    return await NcertRepository.getSubjects(academicClass?.id);
  }

  static async getChapters(subjectId: string) {
    if (!subjectId) {
      throw new NcertApiError('Subject id is required', 400);
    }

    const subject = await NcertRepository.getChapters(subjectId);

    if (!subject) {
      throw new NcertApiError('Subject not found', 404);
    }

    return subject;
  }

  static async getChapter(chapterId: string) {
    if (!chapterId) {
      throw new NcertApiError('Chapter id is required', 400);
    }

    const chapter = await NcertRepository.getChapter(chapterId);

    if (!chapter) {
      throw new NcertApiError('Chapter not found', 404);
    }

    return chapter;
  }
}
