import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { ZodError } from 'zod';

import { jwtService } from '@/lib/auth/jwt';
import { AdminServices } from './admin.service';
import { AdminApiError } from './admin.types';
import { seedNcertSchema, addQuestionSchema } from './admin.validator';

async function requireAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get('access_token');

  if (!token) {
    throw new AdminApiError('Authentication required', 401);
  }

  let payload: { sub: string; role: string };
  try {
    payload = jwtService.verifyAccessToken(token.value);
  } catch {
    throw new AdminApiError('Invalid or expired access token', 401);
  }

  if (payload.role !== 'ADMIN') {
    throw new AdminApiError('Admin access required', 403);
  }

  return { userId: payload.sub, role: payload.role };
}

function handleAdminError(error: unknown) {
  if (error instanceof ZodError) {
    return NextResponse.json(
      { message: 'Invalid request body', errors: error.issues },
      { status: 400 }
    );
  }

  if (error instanceof AdminApiError) {
    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    );
  }

  const message =
    error instanceof Error ? error.message : 'Internal server error';
  return NextResponse.json({ message }, { status: 500 });
}

async function parseJson(request: Request) {
  try {
    return await request.json();
  } catch {
    throw new AdminApiError('Invalid JSON request body', 400);
  }
}

export class AdminController {
  static async seedNcert(request: Request) {
    try {
      const admin = await requireAdmin();
      const body = await parseJson(request);
      const input = seedNcertSchema.parse(body);
      const result = await AdminServices.seedNcert(input);

      console.log(
        `[ADMIN] userId=${admin.userId} action=seed-ncert result=${JSON.stringify(result)}`
      );

      return NextResponse.json(
        { message: 'NCERT data seeded successfully', data: result },
        { status: 201 }
      );
    } catch (error) {
      return handleAdminError(error);
    }
  }

  static async addQuestion(request: Request) {
    try {
      const admin = await requireAdmin();
      const body = await parseJson(request);
      const input = addQuestionSchema.parse(body);
      const question = await AdminServices.addQuestion(input);

      console.log(
        `[ADMIN] userId=${admin.userId} action=add-question questionId=${question.id}`
      );

      return NextResponse.json(
        { message: 'Question added successfully', data: question },
        { status: 201 }
      );
    } catch (error) {
      return handleAdminError(error);
    }
  }

  static async listQuestions(request: Request) {
    try {
      await requireAdmin();
      const url = new URL(request.url);
      const page = Math.max(1, Number(url.searchParams.get('page')) || 1);
      const limit = Math.max(1, Number(url.searchParams.get('limit')) || 20);

      const result = await AdminServices.listQuestions(page, limit);

      return NextResponse.json({ data: result });
    } catch (error) {
      return handleAdminError(error);
    }
  }

  static async deleteQuestion(request: Request, questionId: string) {
    try {
      const admin = await requireAdmin();
      await AdminServices.deleteQuestion(questionId);

      console.log(
        `[ADMIN] userId=${admin.userId} action=delete-question questionId=${questionId}`
      );

      return NextResponse.json({ message: 'Question deleted successfully' });
    } catch (error) {
      return handleAdminError(error);
    }
  }
}
