import { SetCookies } from '@/lib/auth/cookies';
import { NcertRepository } from './ncert.repository';
import UserServices from '../user/user.service';

export class NcertServices {
  static async getSubjects() {
    const user = await UserServices.getUser();
    const academicClass = await NcertRepository.getAcadmicClass(
      Number(user?.class)
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
}
