import { SetCookies } from '@/lib/auth/cookies';
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import {
  validateFilePath,
  isAllowedExtension,
  getMimeType,
  FileSecurityError,
} from '@/lib/file-security';

export async function GET(request: Request) {
  try {
    const token = await SetCookies.verifyCookies();

    if (!token?.sub) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: 401 }
      );
    }

    const url = new URL(request.url);
    const filename = url.searchParams.get('filename');
    const directory = url.searchParams.get('directory') || 'exports';

    if (!filename) {
      return NextResponse.json(
        { message: 'filename query parameter is required' },
        { status: 400 }
      );
    }

    if (!isAllowedExtension(filename)) {
      return NextResponse.json(
        { message: 'File type not allowed' },
        { status: 403 }
      );
    }

    let filepath: string;
    try {
      filepath = validateFilePath(filename, directory as never);
    } catch (error) {
      if (error instanceof FileSecurityError) {
        return NextResponse.json(
          { message: error.message },
          { status: error.statusCode }
        );
      }
      throw error;
    }

    try {
      const fileContent = await fs.readFile(filepath);
      const mimeType = getMimeType(filename);

      return new NextResponse(fileContent, {
        status: 200,
        headers: {
          'Content-Type': mimeType,
          'Content-Disposition': `attachment; filename="${filename}"`,
          'Cache-Control': 'no-store',
          'X-Content-Type-Options': 'nosniff',
        },
      });
    } catch (fsError) {
      if (
        fsError instanceof Error &&
        fsError.message.includes('ENOENT')
      ) {
        return NextResponse.json(
          { message: 'File not found' },
          { status: 404 }
        );
      }

      console.error(`File read error for ${filepath}:`, fsError);
      return NextResponse.json(
        { message: 'Error reading file' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in file download endpoint:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
