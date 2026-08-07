import { NextResponse } from "next/server";
import { ATELIER_COOKIE, atelierToken, expectedPin } from "@/lib/atelier";

export async function POST(request: Request) {
  let pin = "";
  try {
    const body = (await request.json()) as { pin?: string };
    pin = String(body.pin ?? "").trim();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (pin !== expectedPin() || pin.length < 4) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ATELIER_COOKIE, atelierToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return response;
}
