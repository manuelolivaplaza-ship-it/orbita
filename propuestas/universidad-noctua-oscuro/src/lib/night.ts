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

const SYNODIC = 29.53058867;
const KNOWN_NEW = Date.UTC(2000, 0, 6, 18, 14);

export function moonAge(date = new Date()) {
  const days = (date.getTime() - KNOWN_NEW) / 86_400_000;
  return ((days % SYNODIC) + SYNODIC) % SYNODIC;
}

export function moonPhaseIndex(date = new Date()) {
  return Math.round((moonAge(date) / SYNODIC) * 8) % 8;
}

export function moonPhaseName(date = new Date()) {
  return MOON_NAMES[moonPhaseIndex(date)];
}

export function moonIllumination(date = new Date()) {
  return (1 - Math.cos((2 * Math.PI * moonAge(date)) / SYNODIC)) / 2;
}

export function isWaxing(date = new Date()) {
  return moonAge(date) < SYNODIC / 2;
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
    minute: get("minute"),
    time: `${get("hour")}:${get("minute")}`,
  };
}

const OPEN_DAYS = new Set(["lun", "mar", "mié", "mie", "jue", "vie"]);

export function isInstituteOpen(date = new Date()) {
  const { weekday, hour, minute } = santiagoParts(date);
  if (!OPEN_DAYS.has(weekday)) return false;
  const mins = hour * 60 + Number(minute);
  return mins >= 17 * 60 + 30 || mins < 60;
}
