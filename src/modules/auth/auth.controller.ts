import { NextResponse } from 'next/server';
import { AuthServiceError, AuthServices } from './auth.service';
import { SetCookies } from '@/lib/auth/cookies';
import { cookies } from 'next/headers';

function authErrorResponse(error: unknown, fallbackStatus = 400) {
  const message =
    error instanceof Error ? error.message : 'Authentication request failed';
  const status =
    error instanceof AuthServiceError ? error.statusCode : fallbackStatus;

  return NextResponse.json({ error: message }, { status });
}

export class AuthControllers {
  static async register(req: Request) {
    try {
      const body = await req.json();

      const result = await AuthServices.handleRegister(body);

      await SetCookies.setAccesstoken(result.accessToken);
      await SetCookies.setRefreshtoken(result.refreshToken);

      return NextResponse.json({ user: result.user }, { status: 201 });
    } catch (error: unknown) {
      return authErrorResponse(error);
    }
  }

  static async login(req: Request) {
    const body = await req.json();

    try {
      const result = await AuthServices.handleLoginUser(body);

      await SetCookies.setAccesstoken(result.accessToken);
      await SetCookies.setRefreshtoken(result.refreshToken);

      return NextResponse.json({ user: result.user }, { status: 201 });
    } catch (error: unknown) {
      return authErrorResponse(error);
    }
  }

  static async refresh() {
    try {
      const cookieStore = await cookies();
      const token = cookieStore.get('refresh_token');

      const { refreshToken, accessToken } = await AuthServices.refreshToken(
        token?.value
      );

      await SetCookies.setAccesstoken(accessToken);
      await SetCookies.setRefreshtoken(refreshToken);
      return NextResponse.json({ message: 'refreshed' }, { status: 200 });
    } catch (error: unknown) {
      await SetCookies.deleteCookies();
      return authErrorResponse(error, 401);
    }
  }

  static async googleLogin(req: Request) {
    try {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    } catch (error: unknown) {
      return authErrorResponse(error, 401);
    }
  }
}
