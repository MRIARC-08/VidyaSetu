import { prisma } from '@/lib/prisma';

export class BookmarkService {
  // 1. Get all bookmarks for a specific user
  static async getBookmarks(userId: string) {
    return prisma.bookmark.findMany({
      where: { userId },
      include: {
        chapter: {
          include: {
            subject: {
              include: {
                academicClass: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // 2. Add a new bookmark
  static async createBookmark(userId: string, chapterId: string) {
    // Check if the chapter exists first
    const chapterExists = await prisma.chapter.findUnique({
      where: { id: chapterId },
    });
    if (!chapterExists) {
      throw new Error('Chapter not found');
    }

    return prisma.bookmark.create({
      data: {
        userId,
        chapterId,
      },
      include: {
        chapter: true,
      },
    });
  }

  // 3. Remove a bookmark
  static async deleteBookmark(bookmarkId: string, userId: string) {
    // Find the bookmark first to verify ownership
    const bookmark = await prisma.bookmark.findUnique({
      where: { id: bookmarkId },
    });

    if (!bookmark) {
      throw new Error('Bookmark not found');
    }

    if (bookmark.userId !== userId) {
      throw new Error('Unauthorized to delete this bookmark');
    }

    return prisma.bookmark.delete({
      where: { id: bookmarkId },
    });
  }
}
