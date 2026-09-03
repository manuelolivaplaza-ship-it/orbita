export function formatUF(value: number) {
  return `UF ${new Intl.NumberFormat("es-CL").format(value)}`;
}

export function formatM2(value: number) {
  return `${new Intl.NumberFormat("es-CL").format(value)} m²`;
}

export function padIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function whatsappHref(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/56991882304?text=${text}`;
}
