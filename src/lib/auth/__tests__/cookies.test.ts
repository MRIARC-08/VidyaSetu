import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  cookieSet: vi.fn(),
  cookieGet: vi.fn(),
  cookieDelete: vi.fn(),
  cookieGetAll: vi.fn(),
  verifyAccessToken: vi.fn(),
}));

vi.mock('next/headers', () => ({
  cookies: vi.fn(() =>
    Promise.resolve({
      set: mocks.cookieSet,
      get: mocks.cookieGet,
      delete: mocks.cookieDelete,
      getAll: mocks.cookieGetAll,
    })
  ),
}));

vi.mock('@/lib/auth/jwt', () => ({
  jwtService: {
    verifyAccessToken: mocks.verifyAccessToken,
  },
}));

import { SetCookies } from '../cookies';

describe('SetCookies', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('setAuthCookies', () => {
    it('sets both access and refresh cookies with correct options', async () => {
      await SetCookies.setAuthCookies('access-token', 'refresh-token');

      expect(mocks.cookieSet).toHaveBeenCalledWith(
        'access_token',
        'access-token',
        expect.objectContaining({
          httpOnly: true,
          sameSite: 'lax',
          path: '/',
          maxAge: 15 * 60,
        })
      );

      expect(mocks.cookieSet).toHaveBeenCalledWith(
        'refresh_token',
        'refresh-token',
        expect.objectContaining({
          httpOnly: true,
          sameSite: 'lax',
          path: '/',
          maxAge: 7 * 24 * 60 * 60,
        })
      );
    });
  });

  describe('verifyCookies', () => {
    it('returns decoded payload for a valid access token', async () => {
      const mockPayload = { sub: 'user-1', role: 'STUDENT' };
      mocks.cookieGet.mockReturnValue({ value: 'valid-token' });
      mocks.verifyAccessToken.mockReturnValue(mockPayload);

      const result = await SetCookies.verifyCookies();

      expect(mocks.cookieGet).toHaveBeenCalledWith('access_token');
      expect(mocks.verifyAccessToken).toHaveBeenCalledWith('valid-token');
      expect(result).toEqual(mockPayload);
    });

    it('returns undefined when access_token cookie is missing', async () => {
      mocks.cookieGet.mockReturnValue(undefined);

      const result = await SetCookies.verifyCookies();

      expect(mocks.cookieGet).toHaveBeenCalledWith('access_token');
      expect(mocks.verifyAccessToken).not.toHaveBeenCalled();
      expect(result).toBeUndefined();
    });
  });

  describe('deleteCookies', () => {
    it('deletes both access and refresh cookies', async () => {
      await SetCookies.deleteCookies();

      expect(mocks.cookieDelete).toHaveBeenCalledWith('access_token');
      expect(mocks.cookieDelete).toHaveBeenCalledWith('refresh_token');
    });
  });
});
