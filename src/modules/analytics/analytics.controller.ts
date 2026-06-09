import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import AnalyticsService from './analytics.service';
import {
  WeakTopicAnalyticsError,
  type AnalyticsOverviewResponse,
  type StreakDataResponse,
} from './analytics.types';
import { weakTopicsQuerySchema } from './analytics.validator';
import { SetCookies } from '@/lib/auth/cookies';

async function getAuthenticatedUserId(): Promise<string | null> {
  const token = await SetCookies.verifyCookies();
  return token?.sub ?? null;
}

const handleAnalyticsError = (error: unknown): NextResponse => {
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
  static async getAnalytics(
    _req: Request
  ): Promise<NextResponse<AnalyticsOverviewResponse | { message: string }>> {
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
      return handleAnalyticsError(error) as NextResponse<
        AnalyticsOverviewResponse | { message: string }
      >;
    }
  }

  static async getStreakData(
    _req: Request
  ): Promise<NextResponse<StreakDataResponse | { message: string }>> {
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
      return handleAnalyticsError(error) as NextResponse<
        StreakDataResponse | { message: string }
      >;
    }
  }

  static async getWeakTopics(req: Request): Promise<NextResponse> {
    try {
      const userId = await getAuthenticatedUserId();
      if (!userId) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
      }

      const url = new URL(req.url);
      const rawParams = Object.fromEntries(url.searchParams.entries());
      const params = weakTopicsQuerySchema.parse(rawParams);

      const result = await AnalyticsService.getWeakTopics(userId, params);

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
