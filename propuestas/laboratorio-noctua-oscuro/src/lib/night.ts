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

const WEEKDAYS = new Set(["lun", "mar", "mié", "mie", "jue", "vie"]);
const SATURDAY = new Set(["sáb", "sab"]);

export type LabPhase = "toma" | "procesando" | "silencio";

export function labPhase(date = new Date()): LabPhase {
  const { weekday, hour, minute } = santiagoParts(date);
  const t = hour * 60 + minute;
  const processing = t >= 18 * 60 || t < 7 * 60;

  if (WEEKDAYS.has(weekday)) {
    const morning = t >= 6 * 60 + 30 && t < 12 * 60;
    const dusk = t >= 16 * 60 && t < 21 * 60;
    if (morning || dusk) return "toma";
  }
  if (SATURDAY.has(weekday)) {
    if (t >= 7 * 60 && t < 12 * 60) return "toma";
  }
  if (processing) return "procesando";
  return "silencio";
}

export function phaseLabel(phase: LabPhase) {
  if (phase === "toma") return "Toma abierta";
  if (phase === "procesando") return "Procesando";
  return "En silencio";
}

export function samplesInFlight(date = new Date()) {
  const { hour, minute } = santiagoParts(date);
  const t = hour + minute / 60;
  const night = t >= 18 || t < 7;
  if (night) {
    const fromEighteen = t >= 18 ? t - 18 : t + 6;
    return Math.round(28 + Math.sin(fromEighteen / 4) * 18 + (minute % 7));
  }
  if (t >= 7 && t < 12) return 9 + (minute % 5);
  return 3 + (minute % 3);
}
