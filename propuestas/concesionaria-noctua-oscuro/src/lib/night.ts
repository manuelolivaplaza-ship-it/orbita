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
    minute: get("minute"),
    time: `${get("hour")}:${get("minute")}`,
  };
}

const OPEN_DAYS = new Set(["mar", "mié", "mie", "jue", "vie", "sáb", "sab"]);

export function isHouseOpen(date = new Date()) {
  const { weekday, hour } = santiagoParts(date);
  return OPEN_DAYS.has(weekday) && hour >= 18;
}
