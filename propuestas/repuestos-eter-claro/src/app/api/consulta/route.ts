import { NextResponse } from "next/server";
import { isValidEmail, isValidPatente } from "@/lib/utils";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      phone?: string;
      email?: string;
      patente?: string;
      marca?: string;
      modelo?: string;
      year?: string;
      message?: string;
    };
    if (!body.name || body.name.trim().length < 3) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    if (!body.phone || body.phone.replace(/\D/g, "").length < 8) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    if (body.email && !isValidEmail(body.email)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    if (body.patente && body.patente.trim() && !isValidPatente(body.patente)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    const hasVehicle = Boolean(body.marca && body.modelo && body.year);
    if (!body.patente?.trim() && !hasVehicle) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    if (!body.message || body.message.trim().length < 8) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
