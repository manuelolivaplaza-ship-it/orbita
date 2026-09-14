import { PLAN_PRICES } from "./constants";
import { fold, foldWords } from "./fold";
import { normalizeWa } from "./phone";
import type {
  FollowupStep,
  LeadPatch,
  LeadStatus,
  MotivoPerdido,
  PlanOfrecido,
} from "./types";
import { ALL_STATUSES, FOLLOWUP_STEPS, MOTIVOS_PERDIDO, PLANES } from "./types";

const HEADER_TO_FIELD: Record<string, keyof LeadPatch | "ignore"> = {
  id: "id",
  nombre_negocio: "nombre_negocio",
  negocio: "nombre_negocio",
  nombre: "nombre_negocio",
  empresa: "nombre_negocio",
  razon_social: "nombre_negocio",
  nombre_legal: "nombre_negocio",
  marca: "nombre_negocio",
  marca_corta: "nombre_negocio",
  rubro: "rubro",
  sector: "rubro",
  giro: "rubro",
  comuna: "comuna",
  ciudad: "comuna",
  telefono_wa: "telefono_wa",
  telefono: "telefono_wa",
  email: "email",
  correo: "email",
  mail: "email",
  tel: "telefono_wa",
  whatsapp: "telefono_wa",
  wa: "telefono_wa",
  phone: "telefono_wa",
  celular: "telefono_wa",
  website: "website",
  web: "website",
  sitio: "website",
  url: "website",
  maps_url: "maps_url",
  maps: "maps_url",
  google_maps: "maps_url",
  gmaps: "maps_url",
  clase: "clase",
  class: "clase",
  buy_score: "buy_score",
  buyscore: "buy_score",
  score: "buy_score",
  puntaje: "buy_score",
  slug: "slug",
  ejemplo_url: "ejemplo_url",
  ejemplo: "ejemplo_url",
  demo: "ejemplo_url",
  galeria_url: "galeria_url",
  galeria: "galeria_url",
  insight: "insight",
  mensaje_wa: "mensaje_wa",
  mensaje: "mensaje_wa",
  wa_msg: "mensaje_wa",
  copy: "mensaje_wa",
  status: "status",
  estado: "status",
  control_pipeline: "status",
  pipeline: "status",
  dia_lote: "dia_lote",
  por_dia: "dia_lote",
  dia: "dia_lote",
  lote: "dia_lote",
  fecha_envio: "fecha_envio",
  enviado: "fecha_envio",
  fecha_respuesta: "fecha_respuesta",
  next_followup: "next_followup",
  followup: "next_followup",
  followup_step: "followup_step",
  plan_ofrecido: "plan_ofrecido",
  plan: "plan_ofrecido",
  monto_clp: "monto_clp",
  monto: "monto_clp",
  precio: "monto_clp",
  reunion_at: "reunion_at",
  reunion: "reunion_at",
  sena: "sena",
  senia: "sena",
  deposito: "sena",
  motivo_perdido: "motivo_perdido",
  motivo: "motivo_perdido",
  owner: "owner",
  dueno: "owner",
  notas: "notas",
  notes: "notas",
  comentario: "notas",
  source: "source",
  fuente: "source",
};

const STATUS_ALIASES: Record<string, LeadStatus> = {
  nuevo: "nuevo",
  new: "nuevo",
  pendiente: "nuevo",
  por_contactar: "nuevo",
  contactado: "contactado",
  enviado: "contactado",
  sent: "contactado",
  contacted: "contactado",
  respondio: "respondio",
  contesto: "respondio",
  reply: "respondio",
  respuesta: "respondio",
  interesado: "interesado",
  interes: "interesado",
  interested: "interesado",
  reunion: "reunion",
  meeting: "reunion",
  cita: "reunion",
  propuesta: "propuesta",
  cotizacion: "propuesta",
  proposal: "propuesta",
  ganado: "ganado",
  won: "ganado",
  cerrado: "ganado",
  senado: "ganado",
  nurture: "nurture",
  nutrido: "nurture",
  follow_later: "nurture",
  mas_adelante: "nurture",
  perdido: "perdido",
  lost: "perdido",
  descartado: "perdido",
  no: "perdido",
};

const PLAN_ALIASES: Record<string, PlanOfrecido> = {
  sonda: "sonda",
  estacion: "estacion",
  constelacion: "constelacion",
};

const MOTIVO_ALIASES: Record<string, MotivoPerdido> = {
  precio: "precio",
  timing: "timing",
  tiempo: "timing",
  no_fit: "no_fit",
  nofit: "no_fit",
  no_es_fit: "no_fit",
  sin_respuesta: "sin_respuesta",
  ghost: "sin_respuesta",
  otro: "otro",
};

function detectDelim(headerLine: string): string {
  const counts = {
    ",": (headerLine.match(/,/g) || []).length,
    ";": (headerLine.match(/;/g) || []).length,
    "\t": (headerLine.match(/\t/g) || []).length,
  };
  return (Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? ",") as
    | ","
    | ";"
    | "\t";
}

function parseRow(line: string, delim: string): string[] {
  const out: string[] = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cur += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === delim) {
      out.push(cur);
      cur = "";
    } else {
      cur += ch;
    }
  }
  out.push(cur);
  return out.map((s) => s.trim());
}

function splitRecords(text: string, delim: string): string[][] {
  const rows: string[][] = [];
  let cur = "";
  let inQuotes = false;
  const push = () => {
    const line = cur.replace(/\r$/, "");
    if (line.length) rows.push(parseRow(line, delim));
    cur = "";
  };
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
      cur += ch;
    } else if ((ch === "\n" || ch === "\r") && !inQuotes) {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      push();
    } else {
      cur += ch;
    }
  }
  if (cur.length) push();
  return rows;
}

function parseBool(raw: string): boolean | undefined {
  const v = foldWords(raw);
  if (["si", "true", "1", "x", "yes", "ok", "pagada", "pagado"].includes(v)) {
    return true;
  }
  if (["no", "false", "0", ""].includes(v)) return false;
  return undefined;
}

function parseIntLoose(raw: string): number | undefined {
  const n = Number(String(raw).replace(/[^\d-]/g, ""));
  return Number.isFinite(n) ? n : undefined;
}

function parseStatus(raw: string): LeadStatus | undefined {
  const key = fold(raw);
  if (STATUS_ALIASES[key]) return STATUS_ALIASES[key];
  if ((ALL_STATUSES as readonly string[]).includes(key)) {
    return key as LeadStatus;
  }
  return undefined;
}

function parsePlan(raw: string): PlanOfrecido | undefined {
  const key = fold(raw).replace(/^plan_/, "");
  if (PLAN_ALIASES[key]) return PLAN_ALIASES[key];
  if ((PLANES as readonly string[]).includes(key)) return key as PlanOfrecido;
  return undefined;
}

function parseMotivo(raw: string): MotivoPerdido | undefined {
  const key = fold(raw);
  if (MOTIVO_ALIASES[key]) return MOTIVO_ALIASES[key];
  if ((MOTIVOS_PERDIDO as readonly string[]).includes(key)) {
    return key as MotivoPerdido;
  }
  return undefined;
}

function parseStep(raw: string): FollowupStep | undefined {
  const n = parseIntLoose(raw);
  if (n === undefined) return undefined;
  if ((FOLLOWUP_STEPS as readonly number[]).includes(n)) {
    return n as FollowupStep;
  }
  return undefined;
}

function mapHeader(header: string): keyof LeadPatch | "ignore" | null {
  const key = fold(header);
  if (!key) return "ignore";
  if (HEADER_TO_FIELD[key]) return HEADER_TO_FIELD[key];
  if (key.includes("control") && key.includes("pipeline")) return "status";
  if (key === "por_dia" || key.endsWith("por_dia")) return "dia_lote";
  return null;
}

export type ParsedLeadRow = LeadPatch & { id: string };

export function parseCsv(text: string): {
  rows: ParsedLeadRow[];
  skipped: { line: number; reason: string }[];
  headers: string[];
} {
  const raw = text.replace(/^\uFEFF/, "");
  if (!raw.trim()) return { rows: [], skipped: [], headers: [] };
  const firstLine = raw.split(/\r?\n/, 1)[0] ?? "";
  const delim = detectDelim(firstLine);
  const table = splitRecords(raw, delim);
  if (!table.length) return { rows: [], skipped: [], headers: [] };

  const headerCells = table[0];
  const mapped = headerCells.map(mapHeader);
  const skipped: { line: number; reason: string }[] = [];
  const rows: ParsedLeadRow[] = [];

  for (let i = 1; i < table.length; i++) {
    const cells = table[i];
    if (cells.every((c) => !c.trim())) continue;
    const patch: LeadPatch = {};
    for (let c = 0; c < headerCells.length; c++) {
      const field = mapped[c];
      const value = (cells[c] ?? "").trim();
      if (!field || field === "ignore" || !value) continue;
      assignField(patch, field, value);
    }
    const id = inferId(patch);
    if (!id) {
      skipped.push({ line: i + 1, reason: "sin id ni teléfono ni nombre" });
      continue;
    }
    if (!patch.nombre_negocio) {
      skipped.push({ line: i + 1, reason: "sin nombre_negocio" });
      continue;
    }
    if (patch.plan_ofrecido && patch.monto_clp == null) {
      patch.monto_clp = PLAN_PRICES[patch.plan_ofrecido];
    }
    if (patch.status === "perdido" && !patch.motivo_perdido) {
      patch.motivo_perdido = "otro";
    }
    rows.push({ ...patch, id });
  }

  return { rows, skipped, headers: headerCells };
}

function inferId(patch: LeadPatch): string | null {
  if (patch.id && String(patch.id).trim()) return String(patch.id).trim();
  if (patch.telefono_wa) return `wa-${patch.telefono_wa}`;
  if (patch.nombre_negocio) {
    const slug = fold(patch.nombre_negocio).slice(0, 48);
    return slug ? `nom-${slug}` : null;
  }
  return null;
}

function assignField(patch: LeadPatch, field: keyof LeadPatch, value: string) {
  switch (field) {
    case "id":
      patch.id = value;
      break;
    case "nombre_negocio":
    case "rubro":
    case "comuna":
    case "email":
    case "website":
    case "maps_url":
    case "clase":
    case "slug":
    case "ejemplo_url":
    case "galeria_url":
    case "insight":
    case "mensaje_wa":
    case "notas":
    case "owner":
    case "source":
    case "fecha_envio":
    case "fecha_respuesta":
    case "next_followup":
    case "reunion_at":
      patch[field] = value;
      break;
    case "telefono_wa":
      patch.telefono_wa = normalizeWa(value);
      break;
    case "buy_score":
    case "dia_lote":
    case "monto_clp": {
      const n = parseIntLoose(value);
      if (n !== undefined) patch[field] = n;
      break;
    }
    case "status": {
      const s = parseStatus(value);
      if (s) patch.status = s;
      break;
    }
    case "plan_ofrecido": {
      const p = parsePlan(value);
      if (p) patch.plan_ofrecido = p;
      break;
    }
    case "motivo_perdido": {
      const m = parseMotivo(value);
      if (m) patch.motivo_perdido = m;
      break;
    }
    case "followup_step": {
      const st = parseStep(value);
      if (st !== undefined) patch.followup_step = st;
      break;
    }
    case "sena": {
      const b = parseBool(value);
      if (b !== undefined) patch.sena = b;
      break;
    }
    default:
      break;
  }
}

export function leadsToCsv(leads: { [k: string]: unknown }[]): string {
  const cols = [
    "id",
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
  const esc = (v: unknown) => {
    if (v == null) return "";
    const s = String(v);
    if (/[",\n;]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
    return s;
  };
  const lines = [cols.join(",")];
  for (const lead of leads) {
    lines.push(cols.map((c) => esc(lead[c])).join(","));
  }
  return `\uFEFF${lines.join("\n")}`;
}
