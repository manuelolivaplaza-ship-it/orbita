export function santiagoNow(date = new Date()) {
  const fmt = new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  const hourFmt = new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    hour: "2-digit",
    hourCycle: "h23",
  });
  const weekdayFmt = new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    weekday: "long",
  });
  const time = fmt.format(date);
  const hour = Number.parseInt(hourFmt.format(date), 10);
  const night = hour >= 20 || hour < 8;
  const weekday = weekdayFmt.format(date);
  return { time, hour, night, weekday };
}

export function nightLabel(night: boolean) {
  return night
    ? "Guardia de noche · la puerta está abierta"
    : "Consulta diurna · la guardia sigue";
}
