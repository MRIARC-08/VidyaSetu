import { access, accessSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import { jwtService } from "./lib/auth/jwt";

export function middleware(req:NextRequest){

    
    const {pathname} = req.nextUrl
    const accessToken = req.cookies.get("access_token")?.value
 

    const refreshToken = req.cookies.get("refresh_token")

    if ((!accessToken || !refreshToken) && !pathname.startsWith("/home") ){
        return NextResponse.redirect(new URL("/login", req.url))
    }

    if (accessToken&&refreshToken&&(pathname.startsWith("/register") || pathname.startsWith("/login"))){
        return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    return NextResponse.next()


}