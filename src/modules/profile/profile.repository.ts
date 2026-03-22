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
        userId: data.userId,
        age: data.age,
        class: data.class,
        image: data.image,
        profileCompleted: true,
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
