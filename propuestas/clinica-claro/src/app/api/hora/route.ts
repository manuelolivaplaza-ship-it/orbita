import { NextResponse } from "next/server";
import { isValidEmail, isValidPhone, isValidRut } from "@/lib/utils";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const specialty = String(data.specialty ?? "").trim();
  const rut = String(data.rut ?? "").trim();

  if (name.length < 3 || !isValidEmail(email) || !isValidPhone(phone) || !specialty) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (rut && !isValidRut(rut)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
