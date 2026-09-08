export function formatUF(value: number) {
  return `UF ${value.toLocaleString("es-CL")}`;
}

export function formatCLP(value: number) {
  return value.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  });
}

export function ufToClp(uf: number, valorUf = 39_250) {
  return Math.round(uf * valorUf);
}

export function plural(n: number, one: string, many: string) {
  return `${n} ${n === 1 ? one : many}`;
}

export function ufPerM2(priceUF: number, area: number) {
  if (!area) return null;
  return Math.round(priceUF / area);
}
