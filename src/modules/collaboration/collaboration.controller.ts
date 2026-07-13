import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { SetCookies } from '@/lib/auth/cookies';

import { CollaborationServices } from './collaboration.service';
import { CollaborationApiError } from './collaboration.types';
import {
  createGroupSchema,
  joinGroupSchema,
  createTutoringRequestSchema,
  updateTutoringRequestSchema,
  createSessionSchema,
  updateSessionSchema,
} from './collaboration.validator';

const parseJsonBody = async (request: Request) => {
  try {
    return await request.json();
  } catch {
    throw new CollaborationApiError('Invalid JSON request body', 400);
  }
};

const getUserIdFromJwt = async () => {
  const token = await SetCookies.verifyCookies();
  if (!token) throw new CollaborationApiError('Authentication required', 401);
  return token.sub;
};

const handleError = (error: unknown) => {
  if (error instanceof ZodError) {
    return NextResponse.json(
      { message: 'Invalid request body', errors: error.issues },
      { status: 400 },
    );
  }

  if (error instanceof CollaborationApiError) {
    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode },
    );
  }

  return NextResponse.json(
    { message: 'Internal server error' },
    { status: 500 },
  );
};

export class CollaborationControllers {
  static async createGroup(request: Request) {
    try {
      const userId = await getUserIdFromJwt();
      const body = await parseJsonBody(request);
      const input = createGroupSchema.parse({ ...body, userId });
      const result = await CollaborationServices.createGroup(input);
      return NextResponse.json({ message: 'Study group created', data: result }, { status: 201 });
    } catch (error) {
      return handleError(error);
    }
  }

  static async listGroups(request: Request) {
    try {
      const userId = await getUserIdFromJwt();
      const url = new URL(request.url);
      const mine = url.searchParams.get('mine') === 'true';
      const result = await CollaborationServices.listGroups(mine ? userId : undefined);
      return NextResponse.json({ data: result });
    } catch (error) {
      return handleError(error);
    }
  }

  static async getGroup(request: Request) {
    try {
      const userId = await getUserIdFromJwt();
      const url = new URL(request.url);
      const groupId = url.searchParams.get('groupId');
      if (!groupId) throw new CollaborationApiError('groupId is required', 400);
      const result = await CollaborationServices.getGroup(groupId, userId);
      return NextResponse.json({ data: result });
    } catch (error) {
      return handleError(error);
    }
  }

  static async joinGroup(request: Request) {
    try {
      const userId = await getUserIdFromJwt();
      const body = await parseJsonBody(request);
      const input = joinGroupSchema.parse({ ...body, userId });
      const result = await CollaborationServices.joinGroup(input);
      return NextResponse.json(result, { status: 200 });
    } catch (error) {
      return handleError(error);
    }
  }

  static async leaveGroup(request: Request) {
    try {
      const userId = await getUserIdFromJwt();
      const url = new URL(request.url);
      const groupId = url.searchParams.get('groupId');
      if (!groupId) throw new CollaborationApiError('groupId is required', 400);
      const result = await CollaborationServices.leaveGroup(groupId, userId);
      return NextResponse.json(result);
    } catch (error) {
      return handleError(error);
    }
  }

  static async createTutoringRequest(request: Request) {
    try {
      const userId = await getUserIdFromJwt();
      const body = await parseJsonBody(request);
      const input = createTutoringRequestSchema.parse({ ...body, userId });
      const result = await CollaborationServices.createTutoringRequest(input);
      return NextResponse.json({ message: 'Tutoring request sent', data: result }, { status: 201 });
    } catch (error) {
      return handleError(error);
    }
  }

  static async listTutoringRequests(request: Request) {
    try {
      const userId = await getUserIdFromJwt();
      const result = await CollaborationServices.listTutoringRequests(userId);
      return NextResponse.json({ data: result });
    } catch (error) {
      return handleError(error);
    }
  }

  static async updateTutoringRequest(request: Request) {
    try {
      const userId = await getUserIdFromJwt();
      const body = await parseJsonBody(request);
      const input = updateTutoringRequestSchema.parse({ ...body, userId });
      const result = await CollaborationServices.updateTutoringRequest(input);
      return NextResponse.json({ message: 'Tutoring request updated', data: result });
    } catch (error) {
      return handleError(error);
    }
  }

  static async createSession(request: Request) {
    try {
      const userId = await getUserIdFromJwt();
      const body = await parseJsonBody(request);
      const input = createSessionSchema.parse({ ...body, userId });
      const result = await CollaborationServices.createSession(input);
      return NextResponse.json({ message: 'Session scheduled', data: result }, { status: 201 });
    } catch (error) {
      return handleError(error);
    }
  }

  static async listSessions(request: Request) {
    try {
      const userId = await getUserIdFromJwt();
      const result = await CollaborationServices.listSessions(userId);
      return NextResponse.json({ data: result });
    } catch (error) {
      return handleError(error);
    }
  }

  static async updateSession(request: Request) {
    try {
      const userId = await getUserIdFromJwt();
      const body = await parseJsonBody(request);
      const input = updateSessionSchema.parse({ ...body, userId });
      const result = await CollaborationServices.updateSession(input);
      return NextResponse.json({ message: 'Session updated', data: result });
    } catch (error) {
      return handleError(error);
    }
  }

  static async getSummary(request: Request) {
    try {
      const userId = await getUserIdFromJwt();
      const result = await CollaborationServices.getSummary(userId);
      return NextResponse.json({ data: result });
    } catch (error) {
      return handleError(error);
    }
  }
}
