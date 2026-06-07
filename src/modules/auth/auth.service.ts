import { AuthRepository } from './auth.repository';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { verifyPassword, validatePasswordStrength } from '@/lib/auth/password';
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
const GOOGLE_AUTH_USER_MESSAGE = 'Unable to create or load Google user';
const RESET_TOKEN_TTL_MS = 60 * 60 * 1000;

function hashToken(token: string) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

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

    if (!user) {
      throw new AuthServiceError(GOOGLE_AUTH_USER_MESSAGE, 401);
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
    const strength = validatePasswordStrength(data.password);
    if (!strength.isValid) {
      throw new AuthServiceError(strength.errors[0], 400);
    }

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

    const isMatch = await verifyPassword(data.password, user.password);

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

  static async forgotPassword(email: string) {
    const user = await AuthRepository.findUserByEmail(email);

    if (!user) {
      return { message: 'If that email is registered, a reset link has been sent.' };
    }

    const rawToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = hashToken(rawToken);
    const expiresAt = new Date(Date.now() + RESET_TOKEN_TTL_MS);

    await AuthRepository.saveResetToken(user.id, hashedToken, expiresAt);

    console.log(`[ForgotPassword] Reset token for ${email}: ${rawToken}`);

    return {
      message: 'If that email is registered, a reset link has been sent.',
      resetToken: rawToken,
    };
  }

  static async resetPassword(token: string, newPassword: string) {
    const hashedToken = hashToken(token);
    const user = await AuthRepository.findUserByResetToken(hashedToken);

    if (!user) {
      throw new AuthServiceError('Invalid or expired reset token', 400);
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await AuthRepository.clearResetToken(user.id);

    await AuthRepository.updatePassword(user.id, hashedPassword);

    return { message: 'Password has been reset successfully.' };
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
