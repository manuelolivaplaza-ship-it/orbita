export const PIPELINE_STATUSES = [
  "nuevo",
  "contactado",
  "respondio",
  "interesado",
  "reunion",
  "propuesta",
  "ganado",
] as const;

export const SIDE_STATUSES = ["nurture", "perdido"] as const;

export const ALL_STATUSES = [...PIPELINE_STATUSES, ...SIDE_STATUSES] as const;

export type LeadStatus = (typeof ALL_STATUSES)[number];

export const MOTIVOS_PERDIDO = [
  "precio",
  "timing",
  "no_fit",
  "sin_respuesta",
  "otro",
] as const;

export type MotivoPerdido = (typeof MOTIVOS_PERDIDO)[number];

export const PLANES = ["sonda", "estacion", "constelacion"] as const;
export type PlanOfrecido = (typeof PLANES)[number];

export const FOLLOWUP_STEPS = [0, 2, 5, 9, 14] as const;
export type FollowupStep = (typeof FOLLOWUP_STEPS)[number];

export const EVENT_TYPES = ["sent", "reply", "status_change", "note"] as const;
export type EventType = (typeof EVENT_TYPES)[number];

export const INBOUND_SOURCES = [
  "cotizacion",
  "contacto",
  "reunion",
  "web",
] as const;

export type InboundSource = (typeof INBOUND_SOURCES)[number];

export function isInboundSource(source: string | null | undefined): boolean {
  return Boolean(source && (INBOUND_SOURCES as readonly string[]).includes(source));
}

export type Lead = {
  id: string;
  nombre_negocio: string;
  rubro: string | null;
  comuna: string | null;
  telefono_wa: string | null;
  email: string | null;
  website: string | null;
  maps_url: string | null;
  clase: string | null;
  buy_score: number | null;
  slug: string | null;
  ejemplo_url: string | null;
  galeria_url: string | null;
  insight: string | null;
  mensaje_wa: string | null;
  status: LeadStatus;
  dia_lote: number | null;
  fecha_envio: string | null;
  fecha_respuesta: string | null;
  next_followup: string | null;
  followup_step: FollowupStep;
  plan_ofrecido: PlanOfrecido | null;
  monto_clp: number | null;
  reunion_at: string | null;
  sena: boolean;
  motivo_perdido: MotivoPerdido | null;
  owner: string | null;
  notas: string | null;
  source: string | null;
  created_at: string;
  updated_at: string;
};

export type LeadPatch = Partial<
  Omit<Lead, "id" | "created_at" | "updated_at">
> & { id?: string };

export type LeadEvent = {
  id: string;
  lead_id: string;
  type: EventType;
  payload: Record<string, unknown>;
  created_at: string;
};

export type AppSettings = {
  id: 1;
  daily_new_cap: number;
  timezone: string;
  bot_key_override: string | null;
  owner_default: string;
  updated_at: string;
};

export type HoyQueue = {
  today: string;
  timezone: string;
  cap: number;
  followups: Lead[];
  nuevos: Lead[];
  inbound: Lead[];
};
