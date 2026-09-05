export function formatCLP(value: number) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(value);
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isValidPhone(value: string) {
  return value.replace(/\D/g, "").length >= 8;
}

export function isValidPatente(value: string) {
  const clean = value.replace(/[\s.\-]/g, "").toUpperCase();
  if (!clean) return true;
  return /^[A-Z]{4}\d{2}$/.test(clean) || /^[A-Z]{2}\d{4}$/.test(clean);
}

export function formatPatente(value: string) {
  const clean = value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 6);
  if (clean.length <= 2) return clean;
  if (/^[A-Z]{2}\d/.test(clean) && clean.length <= 6 && /^\d+$/.test(clean.slice(2))) {
    return `${clean.slice(0, 2)}-${clean.slice(2)}`;
  }
  if (clean.length <= 4) return clean;
  return `${clean.slice(0, 4)}-${clean.slice(4)}`;
}

export function stockLabel(value: "hoy" | "48h" | "consultar") {
  switch (value) {
    case "hoy":
      return "Stock hoy";
    case "48h":
      return "Llega en 48 h";
    case "consultar":
      return "A pedido";
  }
}
