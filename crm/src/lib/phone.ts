/** Normaliza a dígitos internacionales. Chile móvil → 569XXXXXXXX. */
export function normalizeWa(raw: string | null | undefined): string | null {
  if (!raw) return null;
  let digits = raw.replace(/\D/g, "");
  if (!digits) return null;
  if (digits.startsWith("00")) digits = digits.slice(2);
  if (digits.length === 9 && digits.startsWith("9")) digits = `56${digits}`;
  if (digits.length === 8) digits = `569${digits}`;
  if (digits.length === 11 && digits.startsWith("56") && digits[2] !== "9") {
    digits = `569${digits.slice(2)}`;
  }
  return digits || null;
}

export function displayWa(raw: string | null | undefined): string {
  const d = normalizeWa(raw);
  if (!d) return "—";
  if (d.startsWith("56") && d.length >= 11) {
    return `+56 ${d.slice(2, 3)} ${d.slice(3, 7)} ${d.slice(7)}`;
  }
  return `+${d}`;
}

export function waMeUrl(phone: string, text?: string | null): string {
  const d = normalizeWa(phone);
  if (!d) return "#";
  const q = text?.trim()
    ? `?text=${encodeURIComponent(text.trim())}`
    : "";
  return `https://wa.me/${d}${q}`;
}
