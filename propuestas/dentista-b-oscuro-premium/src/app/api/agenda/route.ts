import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const file = path.join(process.cwd(), "data", "agenda.json");

type Solicitud = {
  name: string;
  phone: string;
  email: string;
  reason: string;
  prevision: string;
  date: string;
  notes: string;
  createdAt: string;
};

function isString(v: unknown): v is string {
  return typeof v === "string";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Solicitud incompleta" }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const name = payload.name;
  const phone = payload.phone;
  const email = payload.email;
  const reason = payload.reason;
  const prevision = payload.prevision;
  const date = payload.date;
  const notes = payload.notes;

  if (!isString(name) || !isString(phone) || !name.trim() || !phone.trim()) {
    return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
  }

  const solicitud: Solicitud = {
    name: name.trim(),
    phone: phone.trim(),
    email: isString(email) ? email.trim() : "",
    reason: isString(reason) ? reason : "",
    prevision: isString(prevision) ? prevision : "",
    date: isString(date) ? date : "",
    notes: isString(notes) ? notes.trim() : "",
    createdAt: new Date().toISOString(),
  };

  await mkdir(path.dirname(file), { recursive: true });
  let existing: Solicitud[] = [];
  try {
    existing = JSON.parse(await readFile(file, "utf8")) as Solicitud[];
  } catch {
    existing = [];
  }
  existing.push(solicitud);
  await writeFile(file, JSON.stringify(existing, null, 2), "utf8");

  return NextResponse.json({ ok: true });
}
