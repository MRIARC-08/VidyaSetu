import { prisma } from '@/lib/prisma';

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

export default class UserRepository {
  static async getUser(userId: string) {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  static async updateUser({
    userId,
    data,
  }: {
    userId: string;
    data: UserUpdateData;
  }) {
    return await prisma.user.update({
      where: {
        id: userId,
      },
      data,
    });
  }
}
