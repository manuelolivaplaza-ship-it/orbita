import { NextResponse } from "next/server";

const interests = new Set(["visita", "alba", "luz", "atelier", "clases"]);
const hours = new Set(["manana", "mediodia", "tarde"]);

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const nombre = String(body.nombre ?? "").trim();
  const correo = String(body.correo ?? "").trim();
  const telefono = String(body.telefono ?? "").trim();
  const interes = String(body.interes ?? "");
  const horario = String(body.horario ?? "");
  const mensaje = String(body.mensaje ?? "").trim();

  if (nombre.length < 2 || !isEmail(correo) || telefono.length < 8) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!interests.has(interes) || !hours.has(horario)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (mensaje.length > 1200) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
