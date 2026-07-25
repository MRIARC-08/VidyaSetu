import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { SetCookies } from '@/lib/auth/cookies';

import { QuizServices } from './quiz.service';
import { QuizApiError } from './quiz.types';
import {
  createQuizSchema,
  startQuizSchema,
  submitQuizSchema,
} from './quiz.validator';

const parseJsonBody = async (request: Request) => {
  try {
    return await request.json();
  } catch {
    throw new QuizApiError('Invalid JSON request body', 400);
  }
};

const getUserIdFromJwt = async () => {
  const token = await SetCookies.verifyCookies();

  if (!token) {
    throw new QuizApiError('Authentication required', 401);
  }

  return token.sub;
};

const handleQuizError = (error: unknown) => {
  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        message: 'Invalid request body',
        errors: error.issues,
      },
      { status: 400 }
    );
  }

  if (error instanceof QuizApiError) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: error.statusCode }
    );
  }

  if (error instanceof Error && (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError')) {
    return NextResponse.json(
      {
        message: 'Session expired. Please log in again.',
      },
      { status: 401 }
    );
  }

  return NextResponse.json(
    {
      message: 'Internal server error',
    },
    { status: 500 }
  );
};

export class QuizControllers {
  static async create(request: Request) {
    try {
      const tokenPayload = await SetCookies.verifyCookies();

      if (!tokenPayload) {
        throw new QuizApiError('Authentication required', 401);
      }

      const body = await parseJsonBody(request);
      const input = createQuizSchema.parse({ ...body, userId: tokenPayload.sub });

      const result = await QuizServices.createQuiz(input);

      return NextResponse.json(
        {
          message: 'Quiz created successfully',
          data: result,
        },
        { status: 201 }
      );
    } catch (error) {
      return handleQuizError(error);
    }
  }

  static async start(request: Request) {
    try {
      const tokenPayload = await SetCookies.verifyCookies();

      if (!tokenPayload) {
        throw new QuizApiError('Authentication required', 401);
      }

      const body = await parseJsonBody(request);
      const input = startQuizSchema.parse({ ...body, userId: tokenPayload.sub });
      const result = await QuizServices.startQuiz(input);

      return NextResponse.json(
        {
          message: 'Quiz session started successfully',
          data: result,
        },
        { status: 201 }
      );
    } catch (error) {
      return handleQuizError(error);
    }
  }

  static async submit(request: Request) {
  try {
    const userId = await getUserIdFromJwt();
    const body = await parseJsonBody(request);
    const input = submitQuizSchema.parse({ ...body, userId });
    const result = await QuizServices.submitQuiz(input);

    return NextResponse.json({
      message: 'Quiz submitted successfully',
      data: result,
    });
  } catch (error) {
    // Handle network/connection failures explicitly
    if (
      error instanceof TypeError &&
      error.message.toLowerCase().includes('fetch')
    ) {
      return NextResponse.json(
        {
          message: 'Network error: Quiz submission failed. Please check your connection and try again.',
          retryable: true,
        },
        { status: 503 }
      );
    }

    // Handle database/server timeouts
    if (error instanceof Error && error.message.toLowerCase().includes('timeout')) {
      return NextResponse.json(
        {
          message: 'Request timed out. Your answers are saved — please retry submission.',
          retryable: true,
        },
        { status: 504 }
      );
    }

    return handleQuizError(error);
  }
}

  static async getSession(request: Request) {
    try {
      const userId = await getUserIdFromJwt();
      const url = new URL(request.url);
      const sessionId = url.searchParams.get('sessionId');

      if (!sessionId) {
        throw new QuizApiError('sessionId is required', 400);
      }

      const result = await QuizServices.getSession(sessionId, userId);

      return NextResponse.json({ data: result });
    } catch (error) {
      return handleQuizError(error);
    }
  }

  static async getHistory(request: Request) {
    try {
      const userId = await getUserIdFromJwt();
      const url = new URL(request.url);
      const page = Math.max(1, Number(url.searchParams.get('page')) || 1);
      const limit = Math.max(1, Number(url.searchParams.get('limit')) || 10);

      const result = await QuizServices.getQuizHistory(userId, page, limit);

      return NextResponse.json({ data: result });
    } catch (error) {
      return handleQuizError(error);
    }
  }
}
