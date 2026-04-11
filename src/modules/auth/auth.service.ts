import { prisma } from '@/lib/prisma';
import { AuthRepository } from './auth.repository';

import { email, string } from 'zod';
import bcrypt from 'bcrypt';
import { jwtService } from '@/lib/auth/jwt';
import { redirect } from 'next/navigation';
import { SetCookies } from '@/lib/auth/cookies';

export class AuthServices {
  static async handleGoogleService(data: {
    image: string | null;
    name: string | null;
    email: string;
    providerAccountId: string;
  }) {
    let user = await AuthRepository.findUserByEmail(data.email);

    if (!user) {
      user = await AuthRepository.createUser({
        email: data.email,
        name: data.name,
        image: data.image,
      });
    }

    await AuthRepository.enasureGoogleAccountLinked(
      user.id,
      data.providerAccountId
    );

    const accessToken = jwtService.generateAccessToken({
      id: user.id,
      role: user.role,
      isProfileCompleted: false,
    });

    const refreshToken = await AuthRepository.createRefreshToken(user.id);

    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  static async handleRegister(data: { email: string; password: string }) {
    let user = await AuthRepository.findUserByEmail(data.email);

    if (!user) {
      user = await AuthRepository.registerUser({
        email: data.email,
        password: data.password,
      });
    }

    const accessToken = jwtService.generateAccessToken({
      id: user.id,
      role: user.role,
      isProfileCompleted: user.firstTime,
    });

    const refreshToken = await AuthRepository.createRefreshToken(user.id);

    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  static async HandleloginUser(data: { email: string; password: string }) {
    let user = await AuthRepository.findUserByEmail(data.email);

    if (!user || !user.password) {
      throw new Error('invalid credentials');
    }

    let isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) {
      throw new Error('invalid credentials');
    }

    const accessToken = jwtService.generateAccessToken({
      id: user.id,
      role: user.role,
      isProfileCompleted: user.firstTime,
    });

    const refreshToken = await AuthRepository.createRefreshToken(user.id);

    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  static async handleLogout(refreshTokentoken: string) {
    await AuthRepository.deleteRefreshToken(refreshTokentoken);
  }

  static createRefreshToken(userId: string) {
    return AuthRepository.createRefreshToken(userId);
  }

  static async refreshToken(token: string) {
    let stored = await AuthRepository.findRefreshToken(token);

    if (!stored || stored.expiresAt <= new Date()) {
      // might cause problem later,, will have to see later in another versions
      SetCookies.deleteCookies();
      throw new Error('Invalid or expired refresh token');
    }

    await AuthRepository.deleteRefreshToken(token);

    const newRefreshToken = await AuthRepository.createRefreshToken(
      stored.userId
    );

    let user = await AuthRepository.findUserByid(stored.userId);

    const accessToken = jwtService.generateAccessToken({
      id: user!.id,
      role: user!.role,
      isProfileCompleted: user!.firstTime,
    });

    return {
      refreshToken: newRefreshToken,
      accessToken,
    };
  }
}
