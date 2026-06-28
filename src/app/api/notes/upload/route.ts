import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { jwtService } from '@/lib/auth/jwt';
import { prisma } from '@/lib/prisma';

const BLOCKED_PATTERNS = [
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  /javascript:/gi,
  /on\w+=/gi,
  /data:\s*text\/html/gi,
];

function sanitizeContent(content: string): string {
  let sanitized = content;
  for (const pattern of BLOCKED_PATTERNS) {
    sanitized = sanitized.replace(pattern, '');
  }
  return sanitized;
}

function validateContent(content: string): { valid: boolean; reason?: string } {
  if (!content || content.trim().length === 0) {
    return { valid: false, reason: 'Content is empty' };
  }
  if (content.length > 50000) {
    return { valid: false, reason: 'Content exceeds maximum length of 50000 characters' };
  }
  return { valid: true };
}

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token');

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    let payload;
    try {
      payload = jwtService.verifyAccessToken(accessToken.value);
    } catch {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const title = formData.get('title') as string | null;

    if (!file) {
      return NextResponse.json(
        { error: 'File is required' },
        { status: 400 }
      );
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size exceeds 10MB limit' },
        { status: 400 }
      );
    }

    const allowedTypes = [
      'application/pdf',
      'image/png',
      'image/jpeg',
      'image/webp',
      'text/plain',
    ];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Allowed: PDF, PNG, JPEG, WebP, TXT' },
        { status: 400 }
      );
    }

    const textContent = await file.text();
    const sanitizedContent = sanitizeContent(textContent);
    const validation = validateContent(sanitizedContent);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.reason },
        { status: 400 }
      );
    }

    const note = await prisma.note.create({
      data: {
        userId: payload.sub,
        title: title || file.name || 'Uploaded Notes',
        content: sanitizedContent,
        fileUrl: file.name,
      },
    });

    return NextResponse.json({
      message: 'Notes uploaded successfully',
      note: {
        ...note,
        isAiAssisted: false,
        disclaimer:
          'These notes were uploaded by you or generated with AI assistance. Please cross-reference with your NCERT textbooks for accuracy.',
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
