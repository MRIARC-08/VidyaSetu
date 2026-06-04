import { AuthRepository } from './auth.repository';

import bcrypt from 'bcrypt';
import { jwtService } from '@/lib/auth/jwt';

export class AuthServiceError extends Error {
  constructor(
    message: string,
    public readonly statusCode = 400
  ) {
    super(message);
    this.name = 'AuthServiceError';
  }
}

const INVALID_CREDENTIALS_MESSAGE = 'Invalid email or password';
const INVALID_REFRESH_TOKEN_MESSAGE = 'Invalid or expired refresh token';

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

  static async handleRegister(data: {
    name: string;
    email: string;
    password: string;
  }) {
    const existingUser = await AuthRepository.findUserByEmail(data.email);

    if (existingUser) {
      throw new AuthServiceError('Email is already registered', 409);
    }

    const user = await AuthRepository.registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
    });

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

  static async handleLoginUser(data: { email: string; password: string }) {
    const user = await AuthRepository.findUserByEmail(data.email);

    if (!user || !user.password) {
      throw new AuthServiceError(INVALID_CREDENTIALS_MESSAGE, 401);
    }

    const isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) {
      throw new AuthServiceError(INVALID_CREDENTIALS_MESSAGE, 401);
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

  static async refreshToken(token?: string) {
    if (!token) {
      throw new AuthServiceError(INVALID_REFRESH_TOKEN_MESSAGE, 401);
    }

    const stored = await AuthRepository.findRefreshToken(token);

    if (!stored || stored.expiresAt <= new Date()) {
      if (stored) {
        await AuthRepository.deleteRefreshToken(token);
      }

      throw new AuthServiceError(INVALID_REFRESH_TOKEN_MESSAGE, 401);
    }

    const user = await AuthRepository.findUserByid(stored.userId);

    if (!user) {
      await AuthRepository.deleteRefreshToken(token);
      throw new AuthServiceError(INVALID_REFRESH_TOKEN_MESSAGE, 401);
    }

    const newRefreshToken = await AuthRepository.rotateRefreshToken(
      token,
      user.id
    );

    const accessToken = jwtService.generateAccessToken({
      id: user.id,
      role: user.role,
      isProfileCompleted: user.firstTime,
    });

    return {
      refreshToken: newRefreshToken,
      accessToken,
      userId: user.id,
    };
  }
}
