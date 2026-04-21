import { prisma } from '@/lib/prisma';

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
    return await prisma.user.update({
      where: {
        id: userId,
      },
      data:  {...data} ,
    });
  }
}
