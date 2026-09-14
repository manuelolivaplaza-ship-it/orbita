"use server";

import { revalidatePath } from "next/cache";
import { requireSession } from "@/lib/auth";
import { parseCsv } from "@/lib/csv";
import { upsertLeads } from "@/lib/db";

export async function importCsvAction(formData: FormData) {
  await requireSession();
  const file = formData.get("file");
  if (!(file instanceof File)) throw new Error("Archivo requerido");
  const text = await file.text();
  const parsed = parseCsv(text);
  if (!parsed.rows.length) {
    return {
      upserted: 0,
      skipped: parsed.skipped,
      errors: ["El CSV no tiene filas válidas."],
    };
  }
  const result = await upsertLeads(parsed.rows);
  revalidatePath("/");
  revalidatePath("/hoy");
  revalidatePath("/leads");
  revalidatePath("/pipeline");
  return { ...result, skipped: parsed.skipped };
}
