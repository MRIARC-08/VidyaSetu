import { NextRequest, NextResponse } from 'next/server';
import { jwtService } from './lib/auth/jwt';

const PROTECTED_ROUTES = ['/dashboard', '/ncert', '/performance', '/quiz'];
const ADMIN_ROUTES = ['/admin'];
const AUTH_ROUTES = ['/login', '/register'];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-pathname', pathname);

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next();
  }

  const refreshToken = req.cookies.get('refresh_token')?.value;
  const accessToken = req.cookies.get('access_token')?.value;

  const isProtected = PROTECTED_ROUTES.some((r) => pathname.startsWith(r));
  const isAdmin = ADMIN_ROUTES.some((r) => pathname.startsWith(r));
  const isAuth = AUTH_ROUTES.some((r) => pathname.startsWith(r));

  if (!refreshToken) {
    if (isProtected || isAdmin) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  if (isAuth) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  if (isAdmin && accessToken) {
    try {
      const payload = jwtService.verifyAccessToken(accessToken);
      if (payload.role !== 'ADMIN') {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }
    } catch {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
