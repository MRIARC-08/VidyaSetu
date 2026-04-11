import { NextResponse } from 'next/server';
import { AuthServices } from './auth.service';
import { SetCookies } from '@/lib/auth/cookies';
import { jwtService } from '@/lib/auth/jwt';
import { cookies } from 'next/headers';

export class AuthControllers {
  static async register(req: Request) {
    try {
      const body = await req.json();

      const result = await AuthServices.handleRegister(body);

      await SetCookies.setAccesstoken(result.accessToken);
      await SetCookies.setRefreshtoken(result.refreshToken);

      return NextResponse.json({ user: result.user }, { status: 201 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }

  static async login(req: Request) {
    const body = await req.json();

    try {
      const result = await AuthServices.HandleloginUser(body);

      await SetCookies.setAccesstoken(result.accessToken);
      await SetCookies.setRefreshtoken(result.refreshToken);

      return NextResponse.json({ user: result.user }, { status: 201 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }

  static async refresh(req: Request) {
    try {
      const cookieStore = await cookies();
      const token = cookieStore.get('refresh_token');
      const { refreshToken, accessToken } = await AuthServices.refreshToken(
        token?.value!
      );
      await SetCookies.setAccesstoken(accessToken);
      await SetCookies.setRefreshtoken(refreshToken);
      return NextResponse.json({ message: 'refreshed' }, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ message: error.message }, { status: 401 });
    }
  }

  static async googleLogin(req: Request) {
    try {
      const { searchParams } = new URL(req.url);

      const email = searchParams.get('email')!;
      const name = searchParams.get('name');
      const image = searchParams.get('image');
      const providerAccountId = searchParams.get('providerAccountId')!;

      const result = await AuthServices.handleGoogleService({
        email,
        name,
        image,
        providerAccountId,
      });

      // const res = NextResponse.redirect(new URL("/dashboard", req.url))

      // res.cookies.set("access_token", result.accessToken, {
      //   httpOnly: true,
      //   sameSite: "lax",
      //   path: "/"
      // })

      // res.cookies.set("refresh_token", result.refreshToken, {
      //   httpOnly: true,
      //   sameSite: "lax",
      //   path: "/"
      // })

      await SetCookies.setAccesstoken(result.accessToken);
      await SetCookies.setRefreshtoken(result.refreshToken);

      return NextResponse.redirect(new URL('/dashboard', req.url));
    } catch (err: any) {
      return NextResponse.json({ message: err.message }, { status: 401 });
    }
  }
}
