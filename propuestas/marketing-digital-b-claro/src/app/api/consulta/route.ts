import { NextResponse } from "next/server";
import { isValidEmail } from "@/lib/utils";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };
    if (!body.name || body.name.trim().length < 3) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    if (!body.email || !isValidEmail(body.email)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    if (!body.message || body.message.trim().length < 12) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
