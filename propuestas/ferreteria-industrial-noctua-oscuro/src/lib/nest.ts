import { site } from "@/data/site";

export type Cut = {
  id: string;
  lengthMm: number;
  qty: number;
};

export type PackedBar = {
  pieces: number[];
  used: number;
  remnant: number;
  kerfs: number;
};

export type NestResult = {
  bars: PackedBar[];
  pieces: number;
  extraCuts: number;
  remnantTotal: number;
  utilization: number;
  corteIva: number;
  invalid: number[];
};

export const TIRA_MM = site.tiraMm;
export const KERF_MM = site.kerfMm;

export function nestCuts(cuts: Cut[]): NestResult {
  const invalid: number[] = [];
  const lengths: number[] = [];

  for (const cut of cuts) {
    if (!Number.isFinite(cut.lengthMm) || cut.qty < 1) continue;
    if (cut.lengthMm > TIRA_MM || cut.lengthMm < 50) {
      invalid.push(cut.lengthMm);
      continue;
    }
    for (let i = 0; i < cut.qty; i += 1) lengths.push(cut.lengthMm);
  }

  lengths.sort((a, b) => b - a);

  const bars: PackedBar[] = [];
  for (const length of lengths) {
    let placed = false;
    for (const bar of bars) {
      const extra = bar.pieces.length === 0 ? 0 : KERF_MM;
      if (bar.used + extra + length <= TIRA_MM) {
        bar.pieces.push(length);
        bar.kerfs += extra ? 1 : 0;
        bar.used += extra + length;
        bar.remnant = TIRA_MM - bar.used;
        placed = true;
        break;
      }
    }
    if (!placed) {
      bars.push({
        pieces: [length],
        used: length,
        remnant: TIRA_MM - length,
        kerfs: 0,
      });
    }
  }

  const pieces = lengths.length;
  const extraCuts = pieces;
  const remnantTotal = bars.reduce((sum, bar) => sum + bar.remnant, 0);
  const utilization =
    bars.length === 0
      ? 0
      : (bars.reduce((sum, bar) => sum + bar.used, 0) / (bars.length * TIRA_MM)) *
        100;

  return {
    bars,
    pieces,
    extraCuts,
    remnantTotal,
    utilization,
    corteIva: extraCuts * site.corteExtra,
    invalid,
  };
}

export function parseMm(raw: string) {
  const clean = raw.replace(/\s/g, "").replace(/mm/gi, "").replace(/m$/i, "");
  const normalized = clean.includes(",")
    ? clean.replace(/\./g, "").replace(",", ".")
    : clean.replace(/\.(?=\d{3}$)/, "");
  const value = Number(normalized);
  if (!Number.isFinite(value) || value <= 0) return NaN;
  if (value <= 6) return Math.round(value * 1000);
  return Math.round(value);
}
