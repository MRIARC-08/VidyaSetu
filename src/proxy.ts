import { access, accessSync } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import { jwtService } from './lib/auth/jwt';

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log(pathname)
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-pathname", pathname);
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
    (!refreshToken) &&
    (pathname.startsWith('/dashboard') ||
    pathname.startsWith('/ncert') ||
    pathname.startsWith('/performance'))
  ) {
    return NextResponse.redirect(new URL('/login', req.url));
  } else if (
    refreshToken &&
    (pathname.startsWith('/register') || pathname.startsWith('/login'))
  ) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next({
    request : {
      headers: requestHeaders
    }
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
