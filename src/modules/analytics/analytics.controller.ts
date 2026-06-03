import { NextResponse } from 'next/server';
import AnalyticsService from './analytics.service';
import { SetCookies } from '@/lib/auth/cookies';

export default class AnalyticsController {
  static async getAnalytics(req: Request) {
    try {
      const access_token = await SetCookies.verifyCookies();

      if (!access_token) {
        return NextResponse.json(
          { message: 'Authentication required' },
          { status: 401 }
        );
      }

      const res = await AnalyticsService.analytics(access_token.sub);

      return NextResponse.json({ success: true, data: res }, { status: 200 });
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : 'Internal server error';

      return NextResponse.json({ success: false, message }, { status: 500 });
    }
  }
}
