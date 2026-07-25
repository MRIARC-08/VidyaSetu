import { BookmarkController } from "@/modules/bookmark/bookmark.controller";

export async function GET(req: Request){
    return BookmarkController.getBookmarks(req)
}

export async function POST(req: Request){
    return BookmarkController.createBookmark(req)
}
