import { assertBot } from "@/lib/bot-auth";
import { getLead, updateLead } from "@/lib/db";
import { PLAN_PRICES } from "@/lib/constants";
import { normalizeWa } from "@/lib/phone";
import type { LeadPatch, LeadStatus, MotivoPerdido, PlanOfrecido } from "@/lib/types";
import { ALL_STATUSES, MOTIVOS_PERDIDO, PLANES } from "@/lib/types";

type Ctx = { params: Promise<{ id: string }> };

const ALLOWED: (keyof LeadPatch)[] = [
  "nombre_negocio",
  "rubro",
  "comuna",
  "email",
  "telefono_wa",
  "website",
  "maps_url",
  "clase",
  "buy_score",
  "slug",
  "ejemplo_url",
  "galeria_url",
  "insight",
  "mensaje_wa",
  "status",
  "dia_lote",
  "fecha_envio",
  "fecha_respuesta",
  "next_followup",
  "followup_step",
  "plan_ofrecido",
  "monto_clp",
  "reunion_at",
  "sena",
  "motivo_perdido",
  "owner",
  "notas",
  "source",
];

export async function GET(req: Request, ctx: Ctx) {
  const denied = await assertBot(req);
  if (denied) return denied;
  const { id } = await ctx.params;
  const lead = await getLead(id);
  if (!lead) return Response.json({ error: "No existe" }, { status: 404 });
  return Response.json({ lead });
}

export async function PATCH(req: Request, ctx: Ctx) {
  const denied = await assertBot(req);
  if (denied) return denied;
  const { id } = await ctx.params;
  const existing = await getLead(id);
  if (!existing) return Response.json({ error: "No existe" }, { status: 404 });

  const body = (await req.json()) as Record<string, unknown>;
  const patch: LeadPatch = {};
  for (const key of ALLOWED) {
    if (body[key] === undefined) continue;
    (patch as Record<string, unknown>)[key] = body[key];
  }
  if (typeof patch.telefono_wa === "string") {
    patch.telefono_wa = normalizeWa(patch.telefono_wa);
  }
  if (patch.status && !ALL_STATUSES.includes(patch.status as LeadStatus)) {
    return Response.json({ error: "status inválido" }, { status: 400 });
  }
  if (patch.plan_ofrecido && !PLANES.includes(patch.plan_ofrecido as PlanOfrecido)) {
    return Response.json({ error: "plan inválido" }, { status: 400 });
  }
  if (
    patch.motivo_perdido &&
    !MOTIVOS_PERDIDO.includes(patch.motivo_perdido as MotivoPerdido)
  ) {
    return Response.json({ error: "motivo inválido" }, { status: 400 });
  }
  if (patch.plan_ofrecido && patch.monto_clp == null) {
    patch.monto_clp = PLAN_PRICES[patch.plan_ofrecido];
  }
  try {
    const lead = await updateLead(id, patch);
    return Response.json({ ok: true, lead });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Error" },
      { status: 400 },
    );
  }
}
