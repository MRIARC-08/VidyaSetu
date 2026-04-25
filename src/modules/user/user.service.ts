import { SetCookies } from '@/lib/auth/cookies';
import UserRepository from './user.repository';

type UserUpdateData = {
  email?: string;
  name?: string;
  password?: string;
  class?: string;
  image?: string;
  firstTime?: boolean;
  streakCount?: number;
  lastActiveDate?: string;
};

export default class UserServices {
  static async getUser() {
    const access_token = await SetCookies.verifyCookies();

    if (!access_token) {
      throw new Error('nahh!! something is wrong with the accestoken ');
    }

    return await UserRepository.getUser(access_token.sub);
  }

  static async updateUser(payload: UserUpdateData | { data: UserUpdateData }) {
    const access_token = await SetCookies.verifyCookies();
    if (!access_token) {
      throw new Error('nahh!! something is wrong with the accestoken ');
    }

    const rawData = 'data' in payload && payload.data ? payload.data : payload;

    const cleanedData = Object.fromEntries(
      Object.entries(rawData).filter(
        ([, value]) => value !== undefined && value !== null
      )
    ) as UserUpdateData;

    if (Object.keys(cleanedData).length === 0) {
      throw new Error('No valid user fields provided for update.');
    }

    return await UserRepository.updateUser({
      userId: access_token.sub,
      data: cleanedData,
    });
  }
}
