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
  static async getUser(userId: string) {
    return await UserRepository.getUser(userId);
  }

  static async updateUser(
    userId: string,
    payload: UserUpdateData | { data: UserUpdateData }
  ) {
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
      userId,
      data: cleanedData,
    });
  }
}
