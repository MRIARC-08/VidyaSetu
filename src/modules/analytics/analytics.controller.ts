import { NextResponse } from 'next/server';
import AnalyticsService from './analytics.service';
import { SetCookies } from '@/lib/auth/cookies';

async function getAuthenticatedUserId() {
  const token = await SetCookies.verifyCookies();

  if (!token) {
    return null;
  }

  return token.sub;
}

function handleError(error: unknown) {
  const message =
    error instanceof Error ? error.message : 'Internal server error';

  return NextResponse.json({ success: false, message }, { status: 500 });
}

export default class AnalyticsController {
  static async getAnalytics(_req: Request) {
    try {
      const userId = await getAuthenticatedUserId();

      if (!userId) {
        return NextResponse.json(
          { message: 'Authentication required' },
          { status: 401 }
        );
      }

      const res = await AnalyticsService.analytics(userId);

      return NextResponse.json({ success: true, data: res }, { status: 200 });
    } catch (error: unknown) {
      return handleError(error);
    }
  }

  static async getStreakData(_req: Request) {
    try {
      const userId = await getAuthenticatedUserId();

      if (!userId) {
        return NextResponse.json(
          { message: 'Authentication required' },
          { status: 401 }
        );
      }

      const res = await AnalyticsService.getStreakData(userId);

      return NextResponse.json({ success: true, data: res }, { status: 200 });
    } catch (error: unknown) {
      return handleError(error);
    }
  }
}
