import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { ZodError } from 'zod';
import { requireRole } from '@/lib/middleware/role.middleware';
import { ForbiddenError } from '@/lib/middleware/auth.middleware';

import { jwtService } from '@/lib/auth/jwt';
import { AdminServices } from './admin.service';
import { AdminApiError } from './admin.types';
import { seedNcertSchema, addQuestionSchema } from './admin.validator';

/**
 * Centralized admin authentication and authorization
 * Validates both authentication token and ADMIN role
 * @throws AdminApiError if authentication fails
 * @throws ForbiddenError if user doesn't have ADMIN role
 */
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

  // Centralized role validation - throws ForbiddenError if role insufficient
  try {
    requireRole('ADMIN')({
      userId: payload.sub,
      role: payload.role,
      isProfileCompleted: true,
    });
  } catch (error) {
    if (error instanceof ForbiddenError) {
      throw new AdminApiError(error.message, 403);
    }
    throw error;
  }

  return { userId: payload.sub, role: payload.role };
}

/**
 * Centralized error handler for admin operations
 * Ensures consistent error responses across all admin endpoints
 */
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

/**
 * Parse JSON request body with error handling
 */
async function parseJson(request: Request) {
  try {
    return await request.json();
  } catch {
    throw new AdminApiError('Invalid JSON request body', 400);
  }
}

/**
 * Admin Controller
 * All endpoints require ADMIN role for access
 * Role hierarchy ensures ADMIN access to all admin operations
 */
export class AdminController {
  /**
   * Seed NCERT data into the database
   * @protected Requires ADMIN role
   * @endpoint POST /api/admin/seed-ncert
   */
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

  /**
   * Add a new question to the database
   * @protected Requires ADMIN role
   * @endpoint POST /api/admin/add-question
   */
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

  /**
   * List all questions with pagination
   * @protected Requires ADMIN role
   * @endpoint GET /api/admin/questions
   */
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

  /**
   * Delete a question by ID
   * @protected Requires ADMIN role
   * @endpoint DELETE /api/admin/questions/:questionId
   */
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
