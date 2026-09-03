import { site } from "@/data/site";

const clp = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

const numberCL = new Intl.NumberFormat("es-CL");

export function formatCLP(value: number) {
  return clp.format(value);
}

export function formatUF(valueCLP: number) {
  const uf = Math.round(valueCLP / site.ufRateCLP);
  return `UF ${numberCL.format(uf)}`;
}

export function formatKm(value: number) {
  if (value === 0) return "0 km · nueva";
  return `${numberCL.format(value)} km`;
}

export function formatPowertrain(value: "electrico" | "hibrido" | "combustion") {
  switch (value) {
    case "electrico":
      return "Silencio";
    case "hibrido":
      return "Aliento";
    case "combustion":
      return "Pulso";
  }
}
