import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  findUserByEmail: vi.fn(),
  findUserByid: vi.fn(),
  createUser: vi.fn(),
  enasureGoogleAccountLinked: vi.fn(),
  registerUser: vi.fn(),
  createRefreshToken: vi.fn(),
  findRefreshToken: vi.fn(),
  deleteRefreshToken: vi.fn(),
  rotateRefreshToken: vi.fn(),
  generateAccessToken: vi.fn(),
  compare: vi.fn(),
}));

vi.mock('./auth.repository', () => ({
  AuthRepository: {
    findUserByEmail: mocks.findUserByEmail,
    findUserByid: mocks.findUserByid,
    createUser: mocks.createUser,
    enasureGoogleAccountLinked: mocks.enasureGoogleAccountLinked,
    registerUser: mocks.registerUser,
    createRefreshToken: mocks.createRefreshToken,
    findRefreshToken: mocks.findRefreshToken,
    deleteRefreshToken: mocks.deleteRefreshToken,
    rotateRefreshToken: mocks.rotateRefreshToken,
  },
}));

vi.mock('@/lib/auth/jwt', () => ({
  jwtService: {
    generateAccessToken: mocks.generateAccessToken,
  },
}));

vi.mock('bcrypt', () => ({
  default: {
    compare: mocks.compare,
  },
}));

import { AuthServices } from './auth.service';

const mockUser = {
  id: 'user-1',
  email: 'student@example.com',
  password: 'hashed-password',
  role: 'STUDENT',
  firstTime: true,
};

describe('AuthServices', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mocks.generateAccessToken.mockReturnValue('access-token');
    mocks.createRefreshToken.mockResolvedValue('refresh-token');
    mocks.rotateRefreshToken.mockResolvedValue('rotated-refresh-token');
  });

  describe('handleGoogleService', () => {
    const googlePayload = {
      email: mockUser.email,
      name: 'Student User',
      image: 'https://example.com/avatar.png',
      providerAccountId: 'google-account-1',
    };

    it('links a found Google user and returns tokens', async () => {
      mocks.findUserByEmail.mockResolvedValue(mockUser);

      const result = await AuthServices.handleGoogleService(googlePayload);

      expect(mocks.findUserByEmail).toHaveBeenCalledWith(mockUser.email);
      expect(mocks.createUser).not.toHaveBeenCalled();
      expect(mocks.enasureGoogleAccountLinked).toHaveBeenCalledWith(
        mockUser.id,
        googlePayload.providerAccountId
      );
      expect(mocks.generateAccessToken).toHaveBeenCalledWith({
        id: mockUser.id,
        role: mockUser.role,
        isProfileCompleted: false,
      });
      expect(mocks.createRefreshToken).toHaveBeenCalledWith(mockUser.id);
      expect(result).toEqual({
        user: mockUser,
        accessToken: 'access-token',
        refreshToken: 'refresh-token',
      });
    });

    it('throws a clear auth error when Google user creation returns null', async () => {
      mocks.findUserByEmail.mockResolvedValue(null);
      mocks.createUser.mockResolvedValue(null);

      await expect(
        AuthServices.handleGoogleService(googlePayload)
      ).rejects.toMatchObject({
        message: 'Unable to create or load Google user',
        statusCode: 401,
      });

      expect(mocks.createUser).toHaveBeenCalledWith({
        email: googlePayload.email,
        name: googlePayload.name,
        image: googlePayload.image,
      });
      expect(mocks.enasureGoogleAccountLinked).not.toHaveBeenCalled();
      expect(mocks.generateAccessToken).not.toHaveBeenCalled();
      expect(mocks.createRefreshToken).not.toHaveBeenCalled();
    });
  });

  describe('handleRegister', () => {
    it('registers a new user and returns access and refresh tokens', async () => {
      mocks.findUserByEmail.mockResolvedValue(null);
      mocks.registerUser.mockResolvedValue(mockUser);

      const result = await AuthServices.handleRegister({
        name: 'Student User',
        email: mockUser.email,
        password: 'Password@123',
      });

      expect(mocks.findUserByEmail).toHaveBeenCalledWith(mockUser.email);
      expect(mocks.registerUser).toHaveBeenCalledWith({
        name: 'Student User',
        email: mockUser.email,
        password: 'Password@123',
      });

      expect(mocks.generateAccessToken).toHaveBeenCalledWith({
        id: mockUser.id,
        role: mockUser.role,
        isProfileCompleted: mockUser.firstTime,
      });

      expect(mocks.createRefreshToken).toHaveBeenCalledWith(mockUser.id);

      expect(result).toEqual({
        user: mockUser,
        accessToken: 'access-token',
        refreshToken: 'refresh-token',
      });
    });

    it('throws conflict error when email is already registered', async () => {
      mocks.findUserByEmail.mockResolvedValue(mockUser);

      await expect(
        AuthServices.handleRegister({
          name: 'Student User',
          email: mockUser.email,
          password: 'Password@123',
        })
      ).rejects.toMatchObject({
        message: 'Email is already registered',
        statusCode: 409,
      });

      expect(mocks.registerUser).not.toHaveBeenCalled();
      expect(mocks.createRefreshToken).not.toHaveBeenCalled();
    });
  });

  describe('handleLoginUser', () => {
    it('logs in a user with valid credentials and returns tokens', async () => {
      mocks.findUserByEmail.mockResolvedValue(mockUser);
      mocks.compare.mockResolvedValue(true);

      const result = await AuthServices.handleLoginUser({
        email: mockUser.email,
        password: 'Password@123',
      });

      expect(mocks.findUserByEmail).toHaveBeenCalledWith(mockUser.email);
      expect(mocks.compare).toHaveBeenCalledWith(
        'Password@123',
        mockUser.password
      );

      expect(mocks.generateAccessToken).toHaveBeenCalledWith({
        id: mockUser.id,
        role: mockUser.role,
        isProfileCompleted: mockUser.firstTime,
      });

      expect(mocks.createRefreshToken).toHaveBeenCalledWith(mockUser.id);

      expect(result).toEqual({
        user: mockUser,
        accessToken: 'access-token',
        refreshToken: 'refresh-token',
      });
    });

    it('throws invalid credentials when user is not found', async () => {
      mocks.findUserByEmail.mockResolvedValue(null);

      await expect(
        AuthServices.handleLoginUser({
          email: 'missing@example.com',
          password: 'Password@123',
        })
      ).rejects.toMatchObject({
        message: 'Invalid email or password',
        statusCode: 401,
      });

      expect(mocks.compare).not.toHaveBeenCalled();
      expect(mocks.createRefreshToken).not.toHaveBeenCalled();
    });

    it('throws invalid credentials when password is incorrect', async () => {
      mocks.findUserByEmail.mockResolvedValue(mockUser);
      mocks.compare.mockResolvedValue(false);

      await expect(
        AuthServices.handleLoginUser({
          email: mockUser.email,
          password: 'WrongPassword',
        })
      ).rejects.toMatchObject({
        message: 'Invalid email or password',
        statusCode: 401,
      });

      expect(mocks.compare).toHaveBeenCalledWith(
        'WrongPassword',
        mockUser.password
      );
      expect(mocks.createRefreshToken).not.toHaveBeenCalled();
    });

    it('throws invalid credentials when user has no password', async () => {
      mocks.findUserByEmail.mockResolvedValue({
        ...mockUser,
        password: null,
      });

      await expect(
        AuthServices.handleLoginUser({
          email: mockUser.email,
          password: 'Password@123',
        })
      ).rejects.toMatchObject({
        message: 'Invalid email or password',
        statusCode: 401,
      });

      expect(mocks.compare).not.toHaveBeenCalled();
      expect(mocks.createRefreshToken).not.toHaveBeenCalled();
    });
  });

  describe('refreshToken', () => {
    it('rotates a valid refresh token and returns new tokens', async () => {
      mocks.findRefreshToken.mockResolvedValue({
        token: 'old-refresh-token',
        userId: mockUser.id,
        expiresAt: new Date(Date.now() + 60_000),
      });

      mocks.findUserByid.mockResolvedValue(mockUser);
      mocks.generateAccessToken.mockReturnValue('new-access-token');

      const result = await AuthServices.refreshToken('old-refresh-token');

      expect(mocks.findRefreshToken).toHaveBeenCalledWith('old-refresh-token');
      expect(mocks.findUserByid).toHaveBeenCalledWith(mockUser.id);

      expect(mocks.rotateRefreshToken).toHaveBeenCalledWith(
        'old-refresh-token',
        mockUser.id
      );

      expect(mocks.generateAccessToken).toHaveBeenCalledWith({
        id: mockUser.id,
        role: mockUser.role,
        isProfileCompleted: mockUser.firstTime,
      });

      expect(result).toEqual({
        refreshToken: 'rotated-refresh-token',
        accessToken: 'new-access-token',
        userId: mockUser.id,
      });
    });

    it('throws invalid refresh token error when token is missing', async () => {
      await expect(AuthServices.refreshToken()).rejects.toMatchObject({
        message: 'Invalid or expired refresh token',
        statusCode: 401,
      });

      expect(mocks.findRefreshToken).not.toHaveBeenCalled();
    });

    it('deletes expired refresh token and throws invalid refresh token error', async () => {
      mocks.findRefreshToken.mockResolvedValue({
        token: 'expired-refresh-token',
        userId: mockUser.id,
        expiresAt: new Date(Date.now() - 60_000),
      });

      await expect(
        AuthServices.refreshToken('expired-refresh-token')
      ).rejects.toMatchObject({
        message: 'Invalid or expired refresh token',
        statusCode: 401,
      });

      expect(mocks.deleteRefreshToken).toHaveBeenCalledWith(
        'expired-refresh-token'
      );
      expect(mocks.rotateRefreshToken).not.toHaveBeenCalled();
    });

    it('deletes refresh token when user no longer exists', async () => {
      mocks.findRefreshToken.mockResolvedValue({
        token: 'valid-refresh-token',
        userId: mockUser.id,
        expiresAt: new Date(Date.now() + 60_000),
      });

      mocks.findUserByid.mockResolvedValue(null);

      await expect(
        AuthServices.refreshToken('valid-refresh-token')
      ).rejects.toMatchObject({
        message: 'Invalid or expired refresh token',
        statusCode: 401,
      });

      expect(mocks.deleteRefreshToken).toHaveBeenCalledWith(
        'valid-refresh-token'
      );
      expect(mocks.rotateRefreshToken).not.toHaveBeenCalled();
    });
  });
});
