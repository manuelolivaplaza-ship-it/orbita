const WEEK: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

export function santiagoParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Santiago",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "Mon";
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);

  return {
    weekday,
    day: WEEK[weekday] ?? 1,
    hour,
    minute,
    minutes: hour * 60 + minute,
  };
}

export function naveAbierta(date = new Date()) {
  const { day, minutes } = santiagoParts(date);
  const openEvening = minutes >= 18 * 60;
  const morningWeek = minutes < 5 * 60 + 30;

  if (day >= 1 && day <= 5) {
    if (openEvening) return true;
    if (day !== 1 && morningWeek) return true;
    return false;
  }

  if (day === 6) {
    return morningWeek || openEvening;
  }

  return minutes < 60;
}

export function proximoCierre(date = new Date()) {
  const { day, minutes } = santiagoParts(date);
  if (!naveAbierta(date)) return null;

  if (day === 0) return "01:00";
  if (day === 6 && minutes >= 18 * 60) return "01:00";
  if (minutes >= 18 * 60) return "05:30";
  return "05:30";
}
