import { prisma } from '@/lib/prisma';
import { da } from 'zod/locales';

export class ProfileRepository {
  static async getProfile(userId: string) {
    return await prisma.profile.findUnique({
      where: {
        userId,
      },
    });
  }

  static async updateOrCreateProfile(data: {
    name: string;
    userId: string;
    age: string;
    class: string;
    image: string;
  }) {
    return await prisma.profile.upsert({
      where: {
        userId: data.userId,
      },
      update: {
        name: data.name,
        age: data.age,
        class: data.class,
        image: data.image,
        profileCompleted: true,
      },
      create: {
        name: data.name,

        age: data.age,
        class: data.class,
        image: data.image,
        profileCompleted: true,
        user: {
          connect: {
            id: '28c3e583-ff7a-4696-8504-1dba1972e2e3',
          },
        },
      },
    });
  }

  static async getUser(userId: string) {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        name: true,
        id: true,
        email: true,
        image: true,
        streakCount: true,
        firstTime: true,
      },
    });
  }
}
