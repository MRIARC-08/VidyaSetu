import { prisma } from '@/lib/prisma';
import { AuthProvider } from '@/generated/prisma/enums';
import crypto from 'crypto';
import bcrypt from 'bcrypt';

const REFRESH_TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000;

function createRefreshTokenValue() {
  return crypto.randomBytes(64).toString('hex');
}

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

  static async registerUser(data: {
    name: string;
    email: string;
    password: string;
  }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return prisma.user.create({
      data: {
        name: data.name,
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
    const token = createRefreshTokenValue();

    await prisma.refreshToken.create({
      data: {
        userId,
        token,
        expiresAt: new Date(Date.now() + REFRESH_TOKEN_TTL_MS),
      },
    });

    return token;
  }

  static async rotateRefreshToken(token: string, userId: string) {
    const newToken = createRefreshTokenValue();

    await prisma.$transaction([
      prisma.refreshToken.create({
        data: {
          userId,
          token: newToken,
          expiresAt: new Date(Date.now() + REFRESH_TOKEN_TTL_MS),
        },
      }),
      prisma.refreshToken.deleteMany({ where: { token } }),
    ]);

    return newToken;
  }

  static async deleteRefreshToken(token: string) {
    await prisma.refreshToken.deleteMany({ where: { token } });
  }

  static async findRefreshToken(token: string) {
    return prisma.refreshToken.findUnique({ where: { token } });
  }
}
