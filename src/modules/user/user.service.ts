import { SetCookies } from '@/lib/auth/cookies';
import UserRepository from './user.repository';

export default class UserServices {
  static async getUser() {
    const access_token = await SetCookies.verifyCookies();

    if (!access_token) {
      throw new Error('nahh!! something is wrong with the accestoken ');
    }

    return await UserRepository.getUser(access_token.sub);
  }

  static async updateUser(data: {
    data: {
      email: string | undefined;
      name: string | undefined;
      password: string | undefined;
      class: string | undefined;
      image: string | undefined;
      firstTime: boolean | undefined;
      streakCount: number | undefined;
      lastActiveDate: string | undefined;
    };
  }) {
    const access_token = await SetCookies.verifyCookies();
    if (!access_token) {
      throw new Error('nahh!! something is wrong with the accestoken ');
    }

    return await UserRepository.updateUser({
      userId: access_token.sub,
      data: { ...data.data },
    });
  }
}
