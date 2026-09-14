import { PLAN_PRICES } from "./constants";
import { replyPatch, sentPatch } from "./followup";
import { todaySantiago } from "./santiago";
import { getSettings } from "./settings";
import { getServiceClient } from "./supabase";
import type {
  EventType,
  HoyQueue,
  Lead,
  LeadEvent,
  LeadPatch,
  LeadStatus,
  MotivoPerdido,
} from "./types";
import { INBOUND_SOURCES } from "./types";

export type LeadFilters = {
  q?: string;
  status?: LeadStatus | "all";
  rubro?: string;
  comuna?: string;
  dia_lote?: number;
  plan?: string;
  source?: "all" | "web" | "csv" | "manual" | string;
};

export async function listLeads(filters: LeadFilters = {}): Promise<Lead[]> {
  const db = getServiceClient();
  let query = db.from("leads").select("*").order("updated_at", { ascending: false });
  if (filters.status && filters.status !== "all") {
    query = query.eq("status", filters.status);
  }
  if (filters.rubro) query = query.ilike("rubro", filters.rubro);
  if (filters.comuna) query = query.ilike("comuna", `%${filters.comuna}%`);
  if (filters.dia_lote != null) query = query.eq("dia_lote", filters.dia_lote);
  if (filters.plan) query = query.eq("plan_ofrecido", filters.plan);
  if (filters.source && filters.source !== "all") {
    if (filters.source === "web") {
      query = query.in("source", [...INBOUND_SOURCES]);
    } else {
      query = query.eq("source", filters.source);
    }
  }
  if (filters.q) {
    const q = filters.q.trim().replace(/[%(),]/g, "");
    if (q) {
      query = query.or(
        `nombre_negocio.ilike.%${q}%,telefono_wa.ilike.%${q}%,email.ilike.%${q}%,comuna.ilike.%${q}%,insight.ilike.%${q}%`,
      );
    }
  }
  const { data, error } = await query.limit(2000);
  if (error) throw new Error(error.message);
  return (data ?? []) as Lead[];
}

export async function getLead(id: string): Promise<Lead | null> {
  const db = getServiceClient();
  const { data, error } = await db.from("leads").select("*").eq("id", id).maybeSingle();
  if (error) throw new Error(error.message);
  return (data as Lead) ?? null;
}

export async function getEvents(leadId: string): Promise<LeadEvent[]> {
  const db = getServiceClient();
  const { data, error } = await db
    .from("events")
    .select("*")
    .eq("lead_id", leadId)
    .order("created_at", { ascending: false })
    .limit(200);
  if (error) throw new Error(error.message);
  return (data ?? []) as LeadEvent[];
}

export async function addEvent(
  leadId: string,
  type: EventType,
  payload: Record<string, unknown> = {},
): Promise<void> {
  const db = getServiceClient();
  const { error } = await db.from("events").insert({ lead_id: leadId, type, payload });
  if (error) throw new Error(error.message);
}

export async function updateLead(id: string, patch: LeadPatch): Promise<Lead> {
  const db = getServiceClient();
  const clean = { ...patch };
  delete clean.id;
  if (clean.plan_ofrecido && clean.monto_clp == null) {
    clean.monto_clp = PLAN_PRICES[clean.plan_ofrecido];
  }
  const { data, error } = await db
    .from("leads")
    .update(clean)
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw new Error(humanDbError(error.message));
  return data as Lead;
}

export async function createLead(input: LeadPatch & { nombre_negocio: string }): Promise<Lead> {
  const db = getServiceClient();
  const { data, error } = await db
    .from("leads")
    .insert({
      ...input,
      status: input.status ?? "nuevo",
      source: input.source ?? "manual",
      owner: input.owner ?? "Manuel",
    })
    .select("*")
    .single();
  if (error) throw new Error(humanDbError(error.message));
  return data as Lead;
}

export async function upsertLeads(rows: (LeadPatch & { id: string })[]): Promise<{
  upserted: number;
  errors: string[];
}> {
  const db = getServiceClient();
  const errors: string[] = [];
  let upserted = 0;
  const chunk = 80;
  for (let i = 0; i < rows.length; i += chunk) {
    const slice = rows.slice(i, i + chunk);
    const payload = slice.map((row) => ({
      ...row,
      status: row.status ?? "nuevo",
      source: row.source ?? "csv",
      owner: row.owner ?? "Manuel",
      followup_step: row.followup_step ?? 0,
      sena: row.sena ?? false,
    }));
    const { error, data } = await db
      .from("leads")
      .upsert(payload, { onConflict: "id" })
      .select("id");
    if (error) {
      errors.push(humanDbError(error.message));
    } else {
      upserted += data?.length ?? slice.length;
    }
  }
  return { upserted, errors };
}

export async function markSent(id: string, at = new Date()): Promise<Lead> {
  const lead = await getLead(id);
  if (!lead) throw new Error("Lead no existe");
  const patch = sentPatch(lead, at);
  const updated = await updateLead(id, patch);
  await addEvent(id, "sent", {
    followup_step: updated.followup_step,
    next_followup: updated.next_followup,
    first: !lead.fecha_envio,
  });
  return updated;
}

export async function markReply(
  id: string,
  text?: string,
  at = new Date(),
): Promise<Lead> {
  const lead = await getLead(id);
  if (!lead) throw new Error("Lead no existe");
  const patch = replyPatch(lead, at);
  const updated = await updateLead(id, patch);
  await addEvent(id, "reply", { text: text ?? null });
  return updated;
}

export async function changeStatus(
  id: string,
  status: LeadStatus,
  extra: { motivo?: MotivoPerdido; sena?: boolean } = {},
): Promise<Lead> {
  const lead = await getLead(id);
  if (!lead) throw new Error("Lead no existe");
  if (status === "ganado" && !(extra.sena ?? lead.sena)) {
    throw new Error("Ganado solo con seña.");
  }
  if (status === "perdido" && !extra.motivo && !lead.motivo_perdido) {
    throw new Error("Perdido requiere motivo.");
  }
  return updateLead(id, {
    status,
    sena: extra.sena ?? lead.sena,
    motivo_perdido: extra.motivo ?? lead.motivo_perdido,
  });
}

export async function addNote(id: string, text: string): Promise<void> {
  const trimmed = text.trim();
  if (!trimmed) throw new Error("Nota vacía");
  const lead = await getLead(id);
  if (!lead) throw new Error("Lead no existe");
  await addEvent(id, "note", { text: trimmed, author: "Manuel" });
  const prev = lead.notas?.trim();
  await updateLead(id, {
    notas: prev ? `${prev}\n— ${trimmed}` : trimmed,
  });
}

export async function getHoyQueue(): Promise<HoyQueue> {
  const settings = await getSettings();
  const cap = settings.daily_new_cap || 50;
  const today = todaySantiago();
  const db = getServiceClient();

  const followupsRes = await db
    .from("leads")
    .select("*")
    .lte("next_followup", today)
    .not("status", "in", "(ganado,perdido,nuevo)")
    .order("next_followup", { ascending: true })
    .limit(500);

  if (followupsRes.error) throw new Error(followupsRes.error.message);

  const inboundRes = await db
    .from("leads")
    .select("*")
    .in("source", [...INBOUND_SOURCES])
    .in("status", ["nuevo", "reunion"])
    .is("fecha_envio", null)
    .order("created_at", { ascending: false })
    .limit(50);

  if (inboundRes.error) throw new Error(inboundRes.error.message);

  const nuevosRes = await db
    .from("leads")
    .select("*")
    .eq("status", "nuevo")
    .not("source", "in", `(${INBOUND_SOURCES.join(",")})`)
    .order("buy_score", { ascending: false, nullsFirst: false })
    .limit(cap);

  if (nuevosRes.error) throw new Error(nuevosRes.error.message);

  return {
    today,
    timezone: settings.timezone,
    cap,
    followups: (followupsRes.data ?? []) as Lead[],
    nuevos: (nuevosRes.data ?? []) as Lead[],
    inbound: (inboundRes.data ?? []) as Lead[],
  };
}

export async function getKpis() {
  const db = getServiceClient();
  const today = todaySantiago();
  const { data, error } = await db.from("leads").select(
    "id,status,monto_clp,fecha_envio,fecha_respuesta,next_followup,sena,plan_ofrecido,source",
  );
  if (error) throw new Error(error.message);
  const leads = (data ?? []) as Pick<
    Lead,
    | "id"
    | "status"
    | "monto_clp"
    | "fecha_envio"
    | "fecha_respuesta"
    | "next_followup"
    | "sena"
    | "plan_ofrecido"
    | "source"
  >[];

  const byStatus = Object.fromEntries(
    [
      "nuevo",
      "contactado",
      "respondio",
      "interesado",
      "reunion",
      "propuesta",
      "ganado",
      "nurture",
      "perdido",
    ].map((s) => [s, 0]),
  ) as Record<LeadStatus, number>;

  let enviadosHoy = 0;
  let respuestasHoy = 0;
  let pipelineMonto = 0;
  let ganadoMonto = 0;
  let followupsVencidos = 0;
  let enviados = 0;
  let respuestas = 0;

  const open: LeadStatus[] = [
    "contactado",
    "respondio",
    "interesado",
    "reunion",
    "propuesta",
  ];

  for (const l of leads) {
    byStatus[l.status] += 1;
    if (l.fecha_envio) {
      enviados += 1;
      if (dateKey(l.fecha_envio) === today) enviadosHoy += 1;
    }
    if (l.fecha_respuesta) {
      respuestas += 1;
      if (dateKey(l.fecha_respuesta) === today) respuestasHoy += 1;
    }
    if (open.includes(l.status)) pipelineMonto += l.monto_clp ?? 0;
    if (l.status === "ganado") ganadoMonto += l.monto_clp ?? 0;
    if (
      l.next_followup &&
      l.next_followup <= today &&
      l.status !== "ganado" &&
      l.status !== "perdido" &&
      l.status !== "nuevo"
    ) {
      followupsVencidos += 1;
    }
  }

  const inboundAbiertos = leads.filter(
    (l) =>
      l.source &&
      INBOUND_SOURCES.includes(l.source as (typeof INBOUND_SOURCES)[number]) &&
      (l.status === "nuevo" || l.status === "reunion") &&
      !l.fecha_envio,
  ).length;

  return {
    total: leads.length,
    byStatus,
    enviadosHoy,
    respuestasHoy,
    tasaRespuesta: enviados === 0 ? 0 : Math.round((respuestas / enviados) * 100),
    pipelineMonto,
    ganadoMonto,
    followupsVencidos,
    nuevos: byStatus.nuevo,
    enviados,
    respuestas,
    inboundAbiertos,
  };
}

function dateKey(iso: string): string {
  if (/^\d{4}-\d{2}-\d{2}/.test(iso)) return iso.slice(0, 10);
  return todaySantiago(new Date(iso));
}

function humanDbError(message: string): string {
  if (message.includes("leads_ganado_sena")) return "Ganado solo con seña.";
  if (message.includes("leads_perdido_motivo")) return "Perdido requiere motivo.";
  if (message.includes("leads_followup_step")) return "followup_step debe ser 0, 2, 5, 9 o 14.";
  return message;
}
