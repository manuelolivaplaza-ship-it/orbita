import type { LeadStatus, MotivoPerdido, PlanOfrecido } from "./types";

export const BRAND = {
  name: "Reclu",
  owner: "Manuel",
  wa: "56935409699",
  site: "https://reclu.cl",
  timezone: "America/Santiago",
} as const;

export const PLAN_PRICES: Record<PlanOfrecido, number> = {
  sonda: 420_000,
  estacion: 990_000,
  constelacion: 1_490_000,
};

export const CARE_MONTHLY = 60_000;

export const STATUS_LABEL: Record<LeadStatus, string> = {
  nuevo: "Nuevo",
  contactado: "Contactado",
  respondio: "Respondió",
  interesado: "Interesado",
  reunion: "Reunión",
  propuesta: "Propuesta",
  ganado: "Ganado",
  nurture: "Nurture",
  perdido: "Perdido",
};

export const MOTIVO_LABEL: Record<MotivoPerdido, string> = {
  precio: "Precio",
  timing: "Timing",
  no_fit: "No fit",
  sin_respuesta: "Sin respuesta",
  otro: "Otro",
};

export const PLAN_LABEL: Record<PlanOfrecido, string> = {
  sonda: "Sonda",
  estacion: "Estación",
  constelacion: "Constelación",
};

export const SOURCE_LABEL: Record<string, string> = {
  cotizacion: "Cotización",
  contacto: "Contacto",
  reunion: "Reunión",
  web: "Web",
  csv: "CSV",
  manual: "Manual",
};

export const STATUS_TONE: Record<LeadStatus, string> = {
  nuevo: "bg-zinc-500/15 text-zinc-300 ring-zinc-500/20",
  contactado: "bg-sky-500/15 text-sky-300 ring-sky-500/20",
  respondio: "bg-teal-500/15 text-teal-300 ring-teal-500/20",
  interesado: "bg-amber-500/15 text-amber-300 ring-amber-500/20",
  reunion: "bg-violet-500/15 text-violet-300 ring-violet-500/20",
  propuesta: "bg-orange-500/15 text-orange-300 ring-orange-500/20",
  ganado: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/20",
  nurture: "bg-slate-500/15 text-slate-300 ring-slate-500/20",
  perdido: "bg-rose-500/15 text-rose-300/80 ring-rose-500/20",
};

export const CADENCE = [2, 5, 9, 14] as const;

export const COOKIE_NAME = "reclu_crm";
