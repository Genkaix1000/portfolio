import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ATELIER_COOKIE, isAtelierToken } from "@/lib/atelier";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/cv")) return NextResponse.next();

  if (isAtelierToken(request.cookies.get(ATELIER_COOKIE)?.value)) {
    return NextResponse.next();
  }

  const gate = new URL("/atelier", request.url);
  gate.searchParams.set("next", pathname);
  return NextResponse.redirect(gate);
}

export const config = {
  matcher: ["/cv", "/cv/:path*"],
};
