const clp = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

export function formatCLP(value: number) {
  return clp.format(value);
}

export function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function formatDays(n: number) {
  if (n <= 1) return "sale hoy";
  return `${n} días hábiles`;
}
