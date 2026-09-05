import { site } from "@/data/site";
import type { Powertrain, Temperament } from "@/data/vehicles";
import { powertrainLabel, temperamentLabel } from "@/data/vehicles";

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

export function formatTemperament(value: Temperament) {
  return temperamentLabel[value];
}

export function formatPowertrain(value: Powertrain) {
  return powertrainLabel[value];
}

export function padIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}
