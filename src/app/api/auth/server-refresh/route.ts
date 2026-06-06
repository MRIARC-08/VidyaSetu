import { SetCookies } from '@/lib/auth/cookies';
import { AuthServiceError, AuthServices } from '@/modules/auth/auth.service';
import { cookies } from 'next/headers';

import { errorResponse, successResponse } from '@/lib/api-response';

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

    return successResponse({ accessToken }, 'server-refreshed');
  } catch (error: unknown) {
    if (error instanceof AuthServiceError) {
      return errorResponse(error.message, error.statusCode);
    }

    await SetCookies.deleteCookies();
    return errorResponse('Internal server error', 500);
  }
}
