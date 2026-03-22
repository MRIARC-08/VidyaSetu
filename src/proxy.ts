import { access, accessSync } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import { jwtService } from './lib/auth/jwt';

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next();
  }

  const accessToken = req.cookies.get('access_token')?.value;

  const refreshToken = req.cookies.get('refresh_token');

  if (
    (!accessToken || !refreshToken) &&
    !pathname.startsWith('/home') &&
    !pathname.startsWith('/login') &&
    !pathname.startsWith('/register')
  ) {
    return NextResponse.redirect(new URL('/login', req.url));
  } else if (
    accessToken &&
    refreshToken &&
    (pathname.startsWith('/register') || pathname.startsWith('/login'))
  ) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}
