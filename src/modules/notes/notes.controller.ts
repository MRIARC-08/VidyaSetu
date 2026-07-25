import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { SetCookies } from '@/lib/auth/cookies';
import { NotesServices } from './notes.service';
import { NotesApiError } from './notes.types';
import { uploadSchema } from './notes.validator';

async function getAuthenticatedUserId(): Promise<string | null> {
  const token = await SetCookies.verifyCookies();
  return token?.sub ?? null;
}

const parseFormData = async (request: Request) => {
  try {
    return await request.formData();
  } catch {
    throw new NotesApiError('Invalid form data', 400);
  }
};

const handleNotesError = (error: unknown) => {
  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        message: 'Invalid request body',
        errors: error.issues,
      },
      { status: 400 }
    );
  }

  if (error instanceof NotesApiError) {
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

export class NotesControllers {
  static async upload(request: Request) {
    try {
      const auth = await SetCookies.verifyCookies();

      if (!auth) {
        return NextResponse.json(
          { message: 'Authentication required' },
          { status: 401 }
        );
      }

      const formData = await parseFormData(request);

      const title = formData.get('title') as string | null;
      const file = formData.get('file') as File | null;

      uploadSchema.parse({ title, file });

      const result = await NotesServices.uploadNote(auth.sub, title!, file!);

      return NextResponse.json(
        { message: 'Note uploaded successfully', data: result },
        { status: 201 }
      );
    } catch (error) {
      return handleNotesError(error);
    }
  }

  static async list() {
    try {
      const userId = await getAuthenticatedUserId();

      if (!userId) {
        return NextResponse.json(
          { message: 'Authentication required' },
          { status: 401 }
        );
      }
      const notes = await NotesServices.getUserNotes(userId);

      return NextResponse.json({ data: notes });
    } catch (error) {
      return handleNotesError(error);
    }
  }

  static async getById(request: Request, noteId: string) {
    try {
      const userId = await getAuthenticatedUserId();

      if (!userId) {
        return NextResponse.json(
          { message: 'Authentication required' },
          { status: 401 }
        );
      }
      const note = await NotesServices.getNoteById(userId, noteId);

      return NextResponse.json({ data: note });
    } catch (error) {
      return handleNotesError(error);
    }
  }

  static async delete(request: Request, noteId: string) {
    try {
      const userId = await getAuthenticatedUserId();

      if (!userId) {
        return NextResponse.json(
          { message: 'Authentication required' },
          { status: 401 }
        );
      }

      const result = await NotesServices.deleteNote(userId, noteId);

      return NextResponse.json(result);
    } catch (error) {
      return handleNotesError(error);
    }
  }
}
