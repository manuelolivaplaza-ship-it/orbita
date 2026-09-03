export type DeadlineKind =
  | "f29"
  | "f29e"
  | "previred"
  | "f22"
  | "dj"
  | "patente"
  | "otro";

export type Deadline = {
  iso: string;
  title: string;
  period: string;
  kind: DeadlineKind;
  note: string;
};

const TZ = "America/Santiago";

const HOLIDAYS = new Set([
  "2026-01-01",
  "2026-04-03",
  "2026-05-01",
  "2026-05-21",
  "2026-06-21",
  "2026-06-29",
  "2026-07-16",
  "2026-08-15",
  "2026-09-18",
  "2026-09-19",
  "2026-10-12",
  "2026-10-31",
  "2026-11-01",
  "2026-12-08",
  "2026-12-25",
  "2027-01-01",
  "2027-03-26",
  "2027-05-01",
  "2027-05-21",
  "2027-06-21",
  "2027-06-28",
  "2027-07-16",
  "2027-08-15",
  "2027-09-17",
  "2027-09-18",
  "2027-10-11",
  "2027-10-31",
  "2027-11-01",
  "2027-12-08",
  "2027-12-25",
]);

const MONTHS = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

export function santiagoToday(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "01";
  return {
    year: Number(get("year")),
    month: Number(get("month")),
    day: Number(get("day")),
    iso: `${get("year")}-${get("month")}-${get("day")}`,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function isoDate(year: number, month: number, day: number) {
  return `${year}-${pad(month)}-${pad(day)}`;
}

function weekday(iso: string) {
  return new Date(`${iso}T12:00:00-03:00`).getUTCDay();
}

function isClosed(iso: string) {
  const day = weekday(iso);
  return day === 0 || day === 6 || HOLIDAYS.has(iso);
}

function nextBusinessDay(iso: string) {
  let current = iso;
  for (let i = 0; i < 12; i += 1) {
    if (!isClosed(current)) return current;
    const [y, m, d] = current.split("-").map(Number);
    const next = new Date(Date.UTC(y, m - 1, d + 1));
    current = isoDate(next.getUTCFullYear(), next.getUTCMonth() + 1, next.getUTCDate());
  }
  return current;
}

function shiftMonth(year: number, month: number, delta: number) {
  const date = new Date(Date.UTC(year, month - 1 + delta, 1));
  return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1 };
}

function dueOn(year: number, month: number, day: number) {
  const last = new Date(Date.UTC(year, month, 0)).getUTCDate();
  return nextBusinessDay(isoDate(year, month, Math.min(day, last)));
}

function periodLabel(year: number, month: number) {
  return `${MONTHS[month - 1]} ${year}`;
}

function monthlyDeadlines(year: number, month: number): Deadline[] {
  const period = shiftMonth(year, month, -1);
  const label = periodLabel(period.year, period.month);
  return [
    {
      iso: dueOn(year, month, 12),
      title: "F29",
      period: label,
      kind: "f29",
      note: "Plazo general. IVA, retenciones y PPM del mes anterior.",
    },
    {
      iso: dueOn(year, month, 13),
      title: "Previred",
      period: label,
      kind: "previred",
      note: "Cotizaciones previsionales, salud y seguro de cesantía.",
    },
    {
      iso: dueOn(year, month, 20),
      title: "F29 electrónico",
      period: label,
      kind: "f29e",
      note: "Día 20 si declara y paga por internet y es facturador electrónico.",
    },
  ];
}

const ANNUAL: Deadline[] = [
  {
    iso: "2026-03-27",
    title: "DJ 1879 y 1887",
    period: "Año tributario 2026",
    kind: "dj",
    note: "Honorarios y sueldos. Base de la Operación Renta.",
  },
  {
    iso: "2026-04-30",
    title: "F22 · Operación Renta",
    period: "Rentas 2025",
    kind: "f22",
    note: "Declaración anual. Pago hasta el 30 de abril si hay impuesto.",
  },
  {
    iso: "2026-01-31",
    title: "Patente municipal · 1ª cuota",
    period: "2026",
    kind: "patente",
    note: "Primera cuota de patente comercial. Confirme en su municipalidad.",
  },
  {
    iso: "2026-07-31",
    title: "Patente municipal · 2ª cuota",
    period: "2026",
    kind: "patente",
    note: "Segunda cuota. Santiago y la mayoría de las comunas del Gran Santiago.",
  },
  {
    iso: "2027-03-26",
    title: "DJ 1879 y 1887",
    period: "Año tributario 2027",
    kind: "dj",
    note: "Honorarios y sueldos. Fecha referencial; confirme en sii.cl.",
  },
  {
    iso: "2027-04-30",
    title: "F22 · Operación Renta",
    period: "Rentas 2026",
    kind: "f22",
    note: "Declaración anual del año comercial 2026.",
  },
  {
    iso: "2027-01-31",
    title: "Patente municipal · 1ª cuota",
    period: "2027",
    kind: "patente",
    note: "Primera cuota de patente comercial.",
  },
  {
    iso: "2027-07-31",
    title: "Patente municipal · 2ª cuota",
    period: "2027",
    kind: "patente",
    note: "Segunda cuota de patente comercial.",
  },
];

function uniqueKey(item: Deadline) {
  return `${item.iso}-${item.kind}-${item.period}`;
}

export function allDeadlines(): Deadline[] {
  const items: Deadline[] = [...ANNUAL];
  for (const year of [2026, 2027]) {
    for (let month = 1; month <= 12; month += 1) {
      items.push(...monthlyDeadlines(year, month));
    }
  }
  const seen = new Set<string>();
  return items
    .filter((item) => {
      const key = uniqueKey(item);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => a.iso.localeCompare(b.iso) || a.title.localeCompare(b.title, "es"));
}

export function upcomingDeadlines(from = new Date(), count = 6): Deadline[] {
  const today = santiagoToday(from).iso;
  return allDeadlines()
    .filter((item) => item.iso >= today)
    .slice(0, count);
}

export function deadlinesInMonth(year: number, month: number): Deadline[] {
  const prefix = `${year}-${pad(month)}-`;
  return allDeadlines().filter((item) => item.iso.startsWith(prefix));
}

export function daysUntil(iso: string, from = new Date()) {
  const today = santiagoToday(from).iso;
  const start = Date.parse(`${today}T12:00:00-03:00`);
  const end = Date.parse(`${iso}T12:00:00-03:00`);
  return Math.round((end - start) / 86_400_000);
}

export function formatLongDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} de ${MONTHS[month - 1]} de ${year}`;
}

export function formatShortDate(iso: string) {
  const [, month, day] = iso.split("-").map(Number);
  return `${day} ${MONTHS[month - 1].slice(0, 3)}.`;
}

export const monthNames = MONTHS;

export const kindLabel: Record<DeadlineKind, string> = {
  f29: "IVA",
  f29e: "IVA",
  previred: "Previsión",
  f22: "Renta",
  dj: "DJ",
  patente: "Municipal",
  otro: "Otro",
};
