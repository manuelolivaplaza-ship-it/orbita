const clp = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

export function formatCLP(value: number) {
  return clp.format(value);
}

export function formatMm(value: number) {
  return `${value.toLocaleString("es-CL")} mm`;
}
