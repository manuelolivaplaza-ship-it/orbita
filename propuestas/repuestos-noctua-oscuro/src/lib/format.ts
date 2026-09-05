const clp = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

export function formatCLP(value: number) {
  return clp.format(value);
}

export function cleanPatente(value: string) {
  return value.replace(/[\s.\-]/g, "").toUpperCase();
}

export function isValidPatente(value: string) {
  const clean = cleanPatente(value);
  return /^[A-Z]{4}\d{2}$/.test(clean) || /^[A-Z]{2}\d{4}$/.test(clean);
}

export function formatPatente(value: string) {
  const clean = cleanPatente(value);
  if (/^[A-Z]{4}\d{2}$/.test(clean)) {
    return `${clean.slice(0, 4)} ${clean.slice(4)}`;
  }
  if (/^[A-Z]{2}\d{4}$/.test(clean)) {
    return `${clean.slice(0, 2)} ${clean.slice(2, 4)}.${clean.slice(4)}`;
  }
  return value.toUpperCase();
}

export function cleanRut(value: string) {
  return value.replace(/[^0-9kK]/g, "").toUpperCase();
}

export function formatRut(value: string) {
  const clean = cleanRut(value);
  if (clean.length < 2) return clean;
  const body = clean.slice(0, -1);
  const dv = clean.slice(-1);
  const withDots = body.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${withDots}-${dv}`;
}

export function isValidRut(value: string) {
  const clean = cleanRut(value);
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
  return dv === expected;
}
