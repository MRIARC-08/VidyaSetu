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

    const body = await req.json();
    const { title, content, chapterId } = body;

    if (!content) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      );
    }

    const validation = validateContent(content);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.reason },
        { status: 400 }
      );
    }

    const sanitizedContent = sanitizeContent(content);

    const note = await prisma.note.create({
      data: {
        userId: payload.sub,
        title: title || 'AI-Generated Notes',
        content: sanitizedContent,
        extractedText: sanitizedContent.substring(0, 500),
      },
    });

    return NextResponse.json({
      message: 'Notes extracted successfully',
      note: {
        ...note,
        isAiAssisted: true,
        disclaimer:
          'These notes were AI-generated. Please cross-reference with your NCERT textbooks for accuracy.',
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
