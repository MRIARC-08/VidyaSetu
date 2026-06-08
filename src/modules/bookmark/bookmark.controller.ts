import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { withAuth, type AuthContext } from '@/lib/middleware/auth.middleware';
import { BookmarkService } from './bookmark.service';

const handleError = (error: unknown) => {
    if (error instanceof ZodError) {
        return NextResponse.json(
            { success: false, message: 'Invalid request body', errors: error.issues },
            { status: 400 }
        );
    }

    const message = error instanceof Error ? error.message : 'Internal server error';

    // Set appropriate status codes based on the error message
    let status = 500;
    if (message.includes('not found')) status = 404;
    else if (message.includes('Unauthorized')) status = 403;

    return NextResponse.json({ success: false, message }, { status });
};

export class BookmarkController {
    // GET /api/bookmarks - get all user's bookmarks
    static getBookmarks = withAuth(async (_req: Request, auth: AuthContext) => {
        try {
            const bookmarks = await BookmarkService.getBookmarks(auth.userId);
            return NextResponse.json({ success: true, data: bookmarks });
        } catch (error) {
            return handleError(error);
        }
    });

    // POST /api/bookmarks - create a bookmark
    static createBookmark = withAuth(async (req: Request, auth: AuthContext) => {
        try {
            const body = await req.json().catch(() => ({}));
            const { chapterId } = body;
            if (!chapterId) {
                return NextResponse.json(
                    { success: false, message: 'chapterId is required' },
                    { status: 400 }
                );
            }
            const bookmark = await BookmarkService.createBookmark(auth.userId, chapterId);
            return NextResponse.json(
                { success: true, message: 'Bookmark created successfully', data: bookmark },
                { status: 201 }
            );
        } catch (error) {
            return handleError(error);
        }
    })

    // DELETE /api/bookmarks/:id - delete a bookmark
   static async deleteBookmark(bookmarkId: string, auth: AuthContext) {
    try {
      const bookmark = await BookmarkService.deleteBookmark(bookmarkId, auth.userId);
      return NextResponse.json({ success: true, data: bookmark }, { status: 200 });
    } catch (error) {
      return handleError(error);
    }
  }

}