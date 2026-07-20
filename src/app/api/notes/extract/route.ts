import { NextRequest, NextResponse } from 'next/server';
import { SetCookies } from '@/lib/auth/cookies';
import { NotesServices } from '@/modules/notes/notes.service';
import { errorResponse } from '@/lib/api-response';
import { NotesApiError } from '@/modules/notes/notes.types';

interface ExtractNotesRequest {
  title: string;
  chapter: string;
  topic: string;
  sourceContent: string;
}

export async function POST(request: NextRequest) {
  try {
    const token = await SetCookies.verifyCookies();

    if (!token?.sub) {
      return errorResponse('Unauthorized', 401);
    }

    const body: ExtractNotesRequest = await request.json();

    if (!body.title || !body.chapter || !body.topic || !body.sourceContent) {
      return errorResponse(
        'Missing required fields: title, chapter, topic, sourceContent',
        400
      );
    }

    if (body.sourceContent.length > 10000) {
      return errorResponse(
        'Source content exceeds 10000 character limit',
        400
      );
    }

    const note = await NotesServices.generateAINote(
      token.sub,
      body.title,
      body.chapter,
      body.topic,
      body.sourceContent
    );

    return NextResponse.json({
      success: true,
      note,
      message:
        note.validationStatus === 'REQUIRES_REVIEW'
          ? 'Note generated but requires manual review due to potential issues'
          : 'Note generated and validated successfully',
    });
  } catch (error) {
    console.error('Error in notes/extract:', error);

    if (error instanceof NotesApiError) {
      return errorResponse(error.message, error.statusCode);
    }

    return errorResponse(
      error instanceof Error ? error.message : 'Internal server error',
      500
    );
  }
}
