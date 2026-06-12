import { NextResponse } from 'next/server';
import { SetCookies } from '@/lib/auth/cookies';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const downloadChapterSchema = z.object({
  chapterId: z.string().uuid(),
});

async function getAuthenticatedUserId(): Promise<string | null> {
  const token = await SetCookies.verifyCookies();
  return token?.sub ?? null;
}

export async function POST(req: Request) {
  try {
    const userId = await getAuthenticatedUserId();

    if (!userId) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { chapterId } = downloadChapterSchema.parse(body);

    const chapter = await prisma.chapter.findUnique({
      where: { id: chapterId },
      include: {
        subject: true,
        topics: {
          include: {
            questions: {
              include: { options: true },
            },
          },
        },
      },
    });

    if (!chapter) {
      return NextResponse.json(
        { message: 'Chapter not found' },
        { status: 404 }
      );
    }

    const contentBundle = {
      chapter: {
        id: chapter.id,
        title: chapter.title,
        order: chapter.order,
        content: chapter.content,
        contentFormat: chapter.contentFormat,
        subject: {
          id: chapter.subject.id,
          name: chapter.subject.name,
        },
      },
      topics: chapter.topics.map((topic) => ({
        id: topic.id,
        title: topic.title,
        order: topic.order,
        content: topic.content,
        questionCount: topic.questions.length,
      })),
      questions: chapter.topics.flatMap((topic) =>
        topic.questions.map((question) => ({
          id: question.id,
          topicId: question.topicId,
          type: question.type,
          difficulty: question.difficulty,
          questionText: question.questionText,
          explanation: question.explanation,
          options: question.options.map((opt) => ({
            id: opt.id,
            label: opt.label,
            value: opt.value,
            isCorrect: opt.isCorrect,
          })),
        }))
      ),
      metadata: {
        version: '1.0',
        timestamp: new Date().toISOString(),
        totalQuestions: chapter.topics.reduce((sum, t) => sum + t.questions.length, 0),
        totalTopics: chapter.topics.length,
        size: Math.round(JSON.stringify(chapter).length / 1024),
      },
    };

    const downloadRecord = await prisma.note.create({
      data: {
        userId,
        title: `Offline: ${chapter.title}`,
        content: JSON.stringify(contentBundle),
        fileUrl: null,
        extractedText: `Offline chapter bundle for ${chapter.title}`,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Chapter prepared for offline use',
        data: {
          bundleId: downloadRecord.id,
          chapter: {
            id: chapter.id,
            title: chapter.title,
          },
          metadata: contentBundle.metadata,
          instructions:
            'This content bundle includes all chapter material and questions. Store locally for offline access. Progress will sync when online.',
          downloadUrl: `/api/content/download-bundle/${downloadRecord.id}`,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid request', errors: error.issues },
        { status: 400 }
      );
    }

    console.error('[ERROR] Content download error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
