import { ronda, ventanas, type VentanaId } from "@/data/catalog";

const MOON_NAMES = [
  "Nueva",
  "Creciente",
  "Cuarto creciente",
  "Gibosa creciente",
  "Llena",
  "Gibosa menguante",
  "Cuarto menguante",
  "Menguante",
] as const;

export function moonPhaseName(date = new Date()) {
  const synodic = 29.53058867;
  const known = Date.UTC(2000, 0, 6, 18, 14);
  const days = (date.getTime() - known) / 86_400_000;
  const age = ((days % synodic) + synodic) % synodic;
  const index = Math.round((age / synodic) * 8) % 8;
  return MOON_NAMES[index];
}

export function santiagoParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return {
    weekday: get("weekday").replace(".", "").toLowerCase(),
    hour: Number(get("hour")),
    minute: Number(get("minute")),
    time: `${get("hour")}:${get("minute")}`,
  };
}

const OPEN_DAYS = new Set(["lun", "mar", "mié", "mie", "jue", "vie", "sáb", "sab"]);

const PREV_DAY: Record<string, string> = {
  lun: "dom",
  mar: "lun",
  mié: "mar",
  mie: "mar",
  jue: "mié",
  vie: "jue",
  sáb: "vie",
  sab: "vie",
  dom: "sáb",
};

export function nightMinutes(date = new Date()) {
  const { hour, minute } = santiagoParts(date);
  const raw = hour * 60 + minute;
  return hour < 12 ? raw + 24 * 60 : raw;
}

export function isRondaLive(date = new Date()) {
  const { weekday, hour } = santiagoParts(date);
  if (hour >= 21) return OPEN_DAYS.has(weekday);
  if (hour < 6) return OPEN_DAYS.has(PREV_DAY[weekday] ?? "");
  return false;
}

export function currentVentanaId(date = new Date()): VentanaId | null {
  if (!isRondaLive(date)) return null;
  const mins = nightMinutes(date);
  const match = ventanas.find(
    (ventana) => mins >= ventana.startMin && mins < ventana.endMin,
  );
  return match?.id ?? null;
}

export function currentStopIndex(date = new Date()) {
  if (!isRondaLive(date)) return -1;
  const mins = nightMinutes(date);
  let index = 0;
  for (let i = 0; i < ronda.length; i += 1) {
    if (mins >= ronda[i].minutos) index = i;
  }
  return index;
}
