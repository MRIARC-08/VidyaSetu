import { NextResponse } from 'next/server';
import { AuthServiceError, AuthServices } from './auth.service';
import { SetCookies } from '@/lib/auth/cookies';
import { cookies } from 'next/headers';
import {
  LoginSchema,
  RegisterSchema,
  RefreshTokenSchema,
} from './auth.validator';

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

      const validation = RegisterSchema.safeParse(body);
      if (!validation.success) {
        console.error(
          'Registration validation failed:',
          validation.error.format()
        );
        return NextResponse.json(
          {
            error: 'Validation failed',
            fields: validation.error.flatten().fieldErrors,
          },
          { status: 400 }
        );
      }

      const result = await AuthServices.handleRegister(validation.data);

      await SetCookies.setAuthCookies(result.accessToken, result.refreshToken);

      return NextResponse.json({ user: result.user }, { status: 201 });
    } catch (error: unknown) {
      return authErrorResponse(error);
    }
  }

  static async login(req: Request) {
    try {
      const body = await req.json();

      const validation = LoginSchema.safeParse(body);
      if (!validation.success) {
        console.error('Login validation failed:', validation.error.format());
        return NextResponse.json(
          {
            error: 'Validation failed',
            fields: validation.error.flatten().fieldErrors,
          },
          { status: 400 }
        );
      }

      const result = await AuthServices.handleLoginUser(validation.data);

      await SetCookies.setAuthCookies(result.accessToken, result.refreshToken);

      return NextResponse.json({ user: result.user }, { status: 201 });
    } catch (error: unknown) {
      return authErrorResponse(error);
    }
  }

  static async refresh() {
    try {
      const cookieStore = await cookies();
      const token = cookieStore.get('refresh_token');

      const validation = RefreshTokenSchema.safeParse({
        refreshToken: token?.value ?? '',
      });
      if (!validation.success) {
        console.error(
          'Refresh token validation failed:',
          validation.error.format()
        );
        return NextResponse.json(
          {
            error: 'Validation failed',
            fields: validation.error.flatten().fieldErrors,
          },
          { status: 400 }
        );
      }

      const { refreshToken, accessToken } = await AuthServices.refreshToken(
        token?.value as string
      );

      await SetCookies.setAuthCookies(accessToken, refreshToken);
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
