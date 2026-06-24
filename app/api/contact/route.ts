import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json(
      { ok: false, message: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Contact message received by the placeholder API route."
  });
}
