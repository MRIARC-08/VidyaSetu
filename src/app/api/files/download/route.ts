import { NextResponse } from 'next/server';
import path from 'path';
import { SetCookies } from '@/lib/auth/cookies';
import { prisma } from '@/lib/prisma';

const ALLOWED_DIR = path.join(process.cwd(), 'public', 'uploads');

async function getAuthenticatedUserId(): Promise<string | null> {
  const token = await SetCookies.verifyCookies();
  return token?.sub ?? null;
}

export async function GET(req: Request) {
  try {
    const userId = await getAuthenticatedUserId();

    if (!userId) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const fileId = searchParams.get('id');
    const filename = searchParams.get('file');

    if (!fileId && !filename) {
      return NextResponse.json(
        { message: 'File ID or filename parameter required' },
        { status: 400 }
      );
    }

    if (filename) {
      const basename = path.basename(filename);
      const normalizedPath = path.normalize(basename);

      if (normalizedPath.includes('..') || normalizedPath.startsWith('/')) {
        console.warn(
          `[SECURITY] Path traversal attempt detected: User ${userId} tried to access "${filename}"`
        );
        return NextResponse.json(
          { message: 'Invalid file path' },
          { status: 403 }
        );
      }

      const filepath = path.join(ALLOWED_DIR, normalizedPath);

      if (!filepath.startsWith(ALLOWED_DIR)) {
        console.warn(
          `[SECURITY] Path escape attempt detected: User ${userId} tried to access "${filepath}"`
        );
        return NextResponse.json(
          { message: 'Access denied' },
          { status: 403 }
        );
      }

      return NextResponse.json(
        { message: 'File download initiated', file: normalizedPath },
        { status: 200 }
      );
    }

    if (fileId) {
      const note = await prisma.note.findFirst({
        where: {
          id: fileId,
          userId,
        },
        select: {
          id: true,
          title: true,
          fileUrl: true,
        },
      });

      if (!note) {
        return NextResponse.json(
          { message: 'File not found' },
          { status: 404 }
        );
      }

      if (!note.fileUrl) {
        return NextResponse.json(
          { message: 'No file associated with this note' },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          message: 'File download link',
          data: {
            id: note.id,
            title: note.title,
            url: note.fileUrl,
          },
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: 'Invalid request parameters' },
      { status: 400 }
    );
  } catch (error) {
    console.error('[ERROR] File download error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
