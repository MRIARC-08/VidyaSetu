import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import AnalyticsService from './analytics.service';
import { WeakTopicAnalyticsError } from './analytics.types';
import { weakTopicsQuerySchema } from './analytics.validator';
import { SetCookies } from '@/lib/auth/cookies';

async function getAuthenticatedUserId() {
  const token = await SetCookies.verifyCookies();
  return token?.sub ?? null;
}

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
      return handleAnalyticsError(error);
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
      return handleAnalyticsError(error);
    }
  }

  static async getWeakTopics(req: Request) {
    try {
      const userId = await getAuthenticatedUserId();
      if (!userId) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
      }

      const url = new URL(req.url);
      const rawParams = Object.fromEntries(url.searchParams.entries());
      const params = weakTopicsQuerySchema.parse(rawParams);

      const result = await AnalyticsService.getWeakTopics(
        userId,
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

  static async getSubjectProgress(req: Request) {
    try {
      const userId = await getAuthenticatedUserId();
      if (!userId) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
      }

      const url = new URL(req.url);
      const classLevelStr = url.searchParams.get('classLevel');

      if (!classLevelStr) {
        return NextResponse.json(
          { message: 'classLevel is required' },
          { status: 400 }
        );
      }

      const classLevel = Number(classLevelStr);
      if (isNaN(classLevel)) {
        return NextResponse.json(
          { message: 'Invalid classLevel' },
          { status: 400 }
        );
      }

      const result = await AnalyticsService.getSubjectProgress(
        userId,
        classLevel
      );

      return NextResponse.json(
        { message: 'Subject progress retrieved successfully', data: result },
        { status: 200 }
      );
    } catch (error: unknown) {
      return handleAnalyticsError(error);
    }
  }
}

export { AnalyticsController };
