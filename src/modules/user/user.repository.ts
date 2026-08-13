import { prisma } from '@/lib/prisma';
import { PUBLIC_USER_SELECT } from './user.select';

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
      where: { id: userId },
      select: {
        ...PUBLIC_USER_SELECT,
        class: true,
        image: true,
        isEmailVerified: true,
        emailVerifiedAt: true,
        stats: true,
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
    const { password, ...safeData } = data;

    return await prisma.user.update({
      where: { id: userId },
      data: safeData,
      select: PUBLIC_USER_SELECT,
    });
  }
}