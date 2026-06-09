import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { NotesServices } from './notes.service';
import { NotesApiError } from './notes.types';
import { uploadSchema } from './notes.validator';

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
      const formData = await parseFormData(request);

      const userId = formData.get('userId') as string | null;
      const title = formData.get('title') as string | null;
      const file = formData.get('file') as File | null;

      if (!userId) {
        return NextResponse.json(
          { message: 'userId is required' },
          { status: 400 }
        );
      }

      uploadSchema.parse({ title, file });

      const result = await NotesServices.uploadNote(userId, title!, file!);

      return NextResponse.json(
        { message: 'Note uploaded successfully', data: result },
        { status: 201 }
      );
    } catch (error) {
      return handleNotesError(error);
    }
  }


  static async list(request: Request) {
    try {
      const { searchParams } = new URL(request.url);
      const userId = searchParams.get('userId');

      if (!userId) {
        return NextResponse.json(
          { message: 'userId query parameter is required' },
          { status: 400 }
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
      const { searchParams } = new URL(request.url);
      const userId = searchParams.get('userId');

      if (!userId) {
        return NextResponse.json(
          { message: 'userId query parameter is required' },
          { status: 400 }
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
      const { searchParams } = new URL(request.url);
      const userId = searchParams.get('userId');

      if (!userId) {
        return NextResponse.json(
          { message: 'userId query parameter is required' },
          { status: 400 }
        );
      }

      const result = await NotesServices.deleteNote(userId, noteId);

      return NextResponse.json(result);
    } catch (error) {
      return handleNotesError(error);
    }
  }
}