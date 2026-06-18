import { NextResponse } from "next/server";
import { authenticate } from "@/lib/middleware/auth.middleware";
import { BookmarkController } from "@/modules/bookmark/bookmark.controller";

export async function DELETE(req: Request, {params}:{params: Promise<{id:string}>}){
    try {
        const auth=await authenticate();
        const {id}= await params;

        return await BookmarkController.deleteBookmark(id,auth);
    } catch (error) {
        const message= error instanceof Error? error.message : "Internal server error";
        return NextResponse.json({success: false,message},{status: 401});
    }
}