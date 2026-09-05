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

export function isClinicOpen(date = new Date()) {
  const { weekday, hour, minute } = santiagoParts(date);
  const t = hour * 60 + minute;
  if (WEEKDAYS.has(weekday)) return t >= 16 * 60 && t < 23 * 60;
  if (SATURDAY.has(weekday)) return t >= 10 * 60 && t < 14 * 60;
  return false;
}
