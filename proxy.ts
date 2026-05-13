import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * PRODUCTION-READY IP RESTRICTION PROXY (Formerly Middleware)
 * 
 * As of Next.js 16, the 'middleware.ts' convention has been renamed to 'proxy.ts'.
 * This proxy restricts access to the portfolio based on the visitor's IP address.
 */

// --- CONFIGURATION ---
const ALLOWED_PUBLIC_IP = '181.xx.xx.xx';
const LOCAL_IPS = ['127.0.0.1', '::1'];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. PUBLIC ROUTE EXCEPTION: /cv (and its assets)
  if (pathname.startsWith('/cv')) {
    return NextResponse.next();
  }

  // 2. IP EXTRACTION LOGIC
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');

  let visitorIp = '';

  if (forwarded) {
    visitorIp = forwarded.split(',')[0].trim();
  } else if (realIp) {
    visitorIp = realIp.trim();
  }

  // 3. ACCESS CONTROL
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isLocal = LOCAL_IPS.includes(visitorIp) || (isDevelopment && !visitorIp);
  const isAllowed = visitorIp === ALLOWED_PUBLIC_IP;

  if (isLocal || isAllowed) {
    return NextResponse.next();
  }

  // 4. MAINTENANCE REDIRECTION/REWRITE
  if (pathname === '/maintenance') {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = '/maintenance';
  return NextResponse.rewrite(url);
}

// 5. MATCHER CONFIGURATION
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
};
