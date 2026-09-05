export const clp = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

export function formatSize(width: number, profile: number, rim: number) {
  return `${width}/${profile} R${rim}`;
}

export function waLink(text: string) {
  return `https://wa.me/56987654321?text=${encodeURIComponent(text)}`;
}
