import { prisma } from '@/lib/prisma';
import { AuthProvider } from '@/generated/prisma/enums';
import { email } from 'zod';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import { StringFormatParams } from 'zod/v4/core';

export class AuthRepository {
  static async findUserByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  }

  static async findUserByid(id: string) {
    return prisma.user.findUnique({ where: { id } });
  }

  static async createUser(data: {
    email: string;
    name: string | null;
    image: string | null;
  }) {
    return prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        image: data.image,
        isEmailVerified: true,
        emailVerifiedAt: new Date(),
      },
    });
  }

  static async registerUser(data: { email: string; password: string }) {
    let hashedPassword = await bcrypt.hash(data.password, 10);

    return prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
      },
    });
  }

  static async enasureGoogleAccountLinked(
    userId: string,
    providerAccountId: string
  ) {
    const isExisting = await prisma.account.findFirst({
      where: {
        provider: AuthProvider.GOOGLE,
        providerAccountId,
      },
    });

    if (!isExisting) {
      await prisma.account.create({
        data: {
          userId,
          provider: AuthProvider.GOOGLE,
          providerAccountId,
        },
      });
    }
  }

  static async createRefreshToken(userId: string) {
    const token = crypto.randomBytes(64).toString('hex');

    await prisma.refreshToken.create({
      data: {
        userId,
        token,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return token;
  }

  static async deleteRefreshToken(token: string) {
    await prisma.refreshToken.deleteMany({ where: { token } });
  }

  static async findRefreshToken(token: string) {
    console.log('heyy');
    return await prisma.refreshToken.findUnique({ where: { token } });
  }
}
