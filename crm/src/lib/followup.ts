import { CADENCE } from "./constants";
import { addDays, dateSantiago, todaySantiago } from "./santiago";
import type { FollowupStep, Lead, LeadPatch, LeadStatus } from "./types";

export function nextCadenceStep(current: number): FollowupStep | null {
  const idx = CADENCE.indexOf(current as (typeof CADENCE)[number]);
  if (idx === -1) return CADENCE[0];
  if (idx >= CADENCE.length - 1) return null;
  return CADENCE[idx + 1];
}

export function sentPatch(lead: Lead, at = new Date()): LeadPatch {
  const iso = at.toISOString();
  const today = todaySantiago(at);

  if (lead.status === "nuevo" || !lead.fecha_envio) {
    return {
      status: lead.status === "nuevo" ? "contactado" : lead.status,
      fecha_envio: lead.fecha_envio ?? iso,
      followup_step: 2,
      next_followup: addDays(today, 2),
    };
  }

  const sendDate = dateSantiago(lead.fecha_envio);
  const next = nextCadenceStep(lead.followup_step);
  if (next == null) {
    return {
      followup_step: 14,
      next_followup: null,
    };
  }
  return {
    followup_step: next,
    next_followup: addDays(sendDate, next),
  };
}

export function replyPatch(
  lead: Lead,
  at = new Date(),
): LeadPatch {
  const nextStatus: LeadStatus =
    lead.status === "nuevo" ||
    lead.status === "contactado" ||
    lead.status === "nurture"
      ? "respondio"
      : lead.status;
  return {
    status: nextStatus,
    fecha_respuesta: lead.fecha_respuesta ?? at.toISOString(),
    next_followup: null,
  };
}

export function overdueDays(lead: Lead, today = todaySantiago()): number | null {
  if (!lead.next_followup) return null;
  const diff =
    (Date.parse(`${today}T00:00:00Z`) -
      Date.parse(`${lead.next_followup}T00:00:00Z`)) /
    86_400_000;
  return Math.round(diff);
}
