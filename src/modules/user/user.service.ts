import UserRepository from './user.repository';
import {
  userUpdateSchema,
  type UserUpdateData,
  type UserUpdateInput,
} from './user.validator';

export default class UserServices {
  static async getUser(userId: string) {
    return await UserRepository.getUser(userId);
  }

  static async updateUser(
    userId: string,
    payload: UserUpdateInput | { data: UserUpdateInput }
  ) {
    const rawData = 'data' in payload && payload.data ? payload.data : payload;
    const cleanedData = Object.fromEntries(
      Object.entries(rawData).filter(
        ([, value]) => value !== undefined && value !== null
      )
    );

    const validatedData = userUpdateSchema.parse(cleanedData) as UserUpdateData;

    return await UserRepository.updateUser({
      userId,
      data: validatedData,
    });
  }
}
