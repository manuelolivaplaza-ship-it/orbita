export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isValidRut(value: string): boolean {
  const clean = value.replace(/[^0-9kK]/g, "").toUpperCase();
  if (clean.length < 8 || clean.length > 9) return false;
  const body = clean.slice(0, -1);
  const dv = clean.slice(-1);
  if (!/^\d+$/.test(body)) return false;
  let sum = 0;
  let mul = 2;
  for (let i = body.length - 1; i >= 0; i -= 1) {
    sum += Number(body[i]) * mul;
    mul = mul === 7 ? 2 : mul + 1;
  }
  const rest = 11 - (sum % 11);
  const expected = rest === 11 ? "0" : rest === 10 ? "K" : String(rest);
  return expected === dv;
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function santiagoParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Santiago",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const get = (type: string) =>
    parts.find((part) => part.type === type)?.value ?? "";

  const weekday = get("weekday");
  const hour = Number(get("hour"));
  const minute = Number(get("minute"));
  const isWeekend = weekday === "Sat" || weekday === "Sun";
  const open = !isWeekend && hour >= 9 && hour < 19;

  return {
    weekday,
    hour,
    minute,
    isWeekend,
    open,
    time: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
    decimal: hour + minute / 60,
  };
}

export function formatHour(decimal: number) {
  const wrapped = ((decimal % 24) + 24) % 24;
  const h = Math.floor(wrapped);
  const m = Math.round((wrapped - h) * 60) % 60;
  const hour = m === 60 ? (h + 1) % 24 : h;
  const minute = m === 60 ? 0 : m;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}
