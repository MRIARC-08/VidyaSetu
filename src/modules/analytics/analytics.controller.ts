import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import AnalyticsService from './analytics.service';
import { WeakTopicAnalyticsError } from './analytics.types';
import { weakTopicsQuerySchema } from './analytics.validator';
import { SetCookies } from '@/lib/auth/cookies';

const handleAnalyticsError = (error: unknown) => {
  if (error instanceof ZodError) {
    return NextResponse.json(
      { message: 'Invalid query parameters', errors: error.issues },
      { status: 400 }
    );
  }
  if (error instanceof WeakTopicAnalyticsError) {
    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    );
  }
  return NextResponse.json(
    { message: 'Internal server error' },
    { status: 500 }
  );
};

export default class AnalyticsController {
  static async getAnalytics(_req: Request) {
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

  static async getWeakTopics(req: Request) {
    try {
      const access_token = await SetCookies.verifyCookies();
      if (!access_token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
      }

      const url = new URL(req.url);
      const rawParams = Object.fromEntries(url.searchParams.entries());
      const params = weakTopicsQuerySchema.parse(rawParams);

      const result = await AnalyticsService.getWeakTopics(
        access_token.sub,
        params
      );

      return NextResponse.json(
        { message: 'Weak topics retrieved successfully', data: result },
        { status: 200 }
      );
    } catch (error: unknown) {
      return handleAnalyticsError(error);
    }
  }
}

export { AnalyticsController };
