import { SetCookies } from '@/lib/auth/cookies';
import { AuthServices } from '@/modules/auth/auth.service';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('refresh_token');

    const { refreshToken, accessToken } = await AuthServices.refreshToken(
      token?.value
    );
    await SetCookies.deleteCookies();
    await SetCookies.setAccesstoken(accessToken);
    await SetCookies.setRefreshtoken(refreshToken);
    return NextResponse.json(
      { message: 'server-refreshed', accessToken },
      { status: 200 }
    );
  } catch (error: unknown) {
    await SetCookies.deleteCookies();

    const message =
      error instanceof Error ? error.message : 'Authentication request failed';

    return NextResponse.json({ error: message }, { status: 401 });
  }
}
