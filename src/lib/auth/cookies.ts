import { cookies } from "next/headers";

export class SetCookies {
    static async setRefreshtoken (refreshToken: string){
        const cookieStore = await cookies()
        cookieStore.set("refresh_token", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            path: "/"

        })
    }

    static async setAccesstoken (accessToken: string){
        const cookieStore = await cookies()
        cookieStore.set("access_token", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            path: "/"

        })
    }
}