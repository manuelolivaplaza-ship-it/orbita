import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCL(n: number) {
  return n.toLocaleString("es-CL");
}

export function formatUF(n: number) {
  return `UF ${formatCL(n)}`;
}

export function formatM2(n: number) {
  return `${formatCL(n)} m²`;
}

export function ufPerM2(uf: number, m2: number) {
  return Math.round(uf / m2);
}
