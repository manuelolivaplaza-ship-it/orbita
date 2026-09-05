const clp = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

export function formatCLP(value: number) {
  return clp.format(value);
}

export function formatTemp(value: number) {
  const abs = Math.abs(value).toFixed(1).replace(".", ",");
  return value < 0 ? `−${abs}` : abs;
}
