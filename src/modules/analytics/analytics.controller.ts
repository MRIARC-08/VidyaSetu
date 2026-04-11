import { NextResponse } from 'next/server';
import AnalyticsService from './analytics.service';
import { SetCookies } from '@/lib/auth/cookies';

// TODO: Implement analytics controller
export default class AnalyticsController {
  static async getAnalytics(req: Request) {
    try {
      const access_token = await SetCookies.verifyCookies();
      console.log(access_token, 'accesstoken');

      if (!access_token)
        throw new Error('userId not accesseble at the controller');
      const res = await AnalyticsService.analytics(access_token.sub);

      return NextResponse.json(res, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ status: 401, message: error.message });
    }
  }
}
