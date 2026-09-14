"use server";

import { revalidatePath } from "next/cache";
import { requireSession } from "@/lib/auth";
import {
  addNote,
  changeStatus,
  createLead,
  markReply,
  markSent,
  updateLead,
} from "@/lib/db";
import { normalizeWa } from "@/lib/phone";
import type { LeadStatus, MotivoPerdido, PlanOfrecido } from "@/lib/types";

function refresh(id?: string) {
  revalidatePath("/");
  revalidatePath("/hoy");
  revalidatePath("/pipeline");
  revalidatePath("/leads");
  if (id) revalidatePath(`/leads/${id}`);
}

export async function markSentAction(id: string, _formData?: FormData) {
  await requireSession();
  await markSent(id);
  refresh(id);
}

export async function markReplyAction(id: string, textOrForm?: string | FormData) {
  await requireSession();
  const text = typeof textOrForm === "string" ? textOrForm : undefined;
  await markReply(id, text);
  refresh(id);
}

export async function changeStatusAction(
  id: string,
  status: LeadStatus,
  extra: { motivo?: MotivoPerdido; sena?: boolean } = {},
) {
  await requireSession();
  await changeStatus(id, status, extra);
  refresh(id);
}

export async function addNoteAction(id: string, formData: FormData) {
  await requireSession();
  const text = String(formData.get("text") ?? "");
  await addNote(id, text);
  refresh(id);
}

export async function updateLeadAction(id: string, formData: FormData) {
  await requireSession();
  const str = (k: string) => {
    const v = String(formData.get(k) ?? "").trim();
    return v ? v : null;
  };
  const num = (k: string) => {
    const v = String(formData.get(k) ?? "").trim();
    if (!v) return null;
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  };
  const plan = str("plan_ofrecido") as PlanOfrecido | null;
  await updateLead(id, {
    nombre_negocio: String(formData.get("nombre_negocio") ?? "").trim(),
    rubro: str("rubro"),
    comuna: str("comuna"),
    email: str("email")?.toLowerCase() ?? null,
    telefono_wa: normalizeWa(str("telefono_wa")),
    website: str("website"),
    maps_url: str("maps_url"),
    clase: str("clase"),
    buy_score: num("buy_score"),
    slug: str("slug"),
    ejemplo_url: str("ejemplo_url"),
    galeria_url: str("galeria_url"),
    insight: str("insight"),
    mensaje_wa: str("mensaje_wa"),
    dia_lote: num("dia_lote"),
    next_followup: str("next_followup"),
    plan_ofrecido: plan,
    monto_clp: num("monto_clp"),
    reunion_at: str("reunion_at"),
    owner: str("owner"),
    notas: str("notas"),
    sena: formData.get("sena") === "on",
  });
  refresh(id);
}

export async function createLeadAction(formData: FormData) {
  await requireSession();
  const nombre = String(formData.get("nombre_negocio") ?? "").trim();
  if (!nombre) throw new Error("Nombre requerido");
  const lead = await createLead({
    nombre_negocio: nombre,
    rubro: String(formData.get("rubro") ?? "").trim() || "dentista",
    comuna: String(formData.get("comuna") ?? "").trim() || null,
    telefono_wa: normalizeWa(String(formData.get("telefono_wa") ?? "")),
    source: "manual",
  });
  refresh(lead.id);
  return lead.id;
}

export async function snoozeAction(id: string) {
  await requireSession();
  const { addDays, todaySantiago } = await import("@/lib/santiago");
  const { updateLead: upd } = await import("@/lib/db");
  await upd(id, { next_followup: addDays(todaySantiago(), 1) });
  refresh(id);
}
