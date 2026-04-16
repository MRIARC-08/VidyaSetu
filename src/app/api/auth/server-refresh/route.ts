import { SetCookies } from "@/lib/auth/cookies";
import { AuthControllers } from "@/modules/auth/auth.controller";
import { AuthServices } from "@/modules/auth/auth.service";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
    try {
        console.log(req)
        const cookieStore = await cookies()
        const token = cookieStore.get("refresh_token")
        console.log(token, "-==================---")
        if (!token) throw new Error("no refresh token")
        const {refreshToken, accessToken} = await AuthServices.refreshToken(token?.value)
        await SetCookies.deleteCookies()
        await SetCookies.setAccesstoken(accessToken)
        await SetCookies.setRefreshtoken(refreshToken)
        return NextResponse.json({message: "server-refreshed"}, {status: 200})
    } catch (error:any) {
        return NextResponse.json({message: error.message}, {status: 401})
    }
}