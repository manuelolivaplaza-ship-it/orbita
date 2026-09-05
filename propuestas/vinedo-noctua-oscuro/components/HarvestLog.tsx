import type { Wine } from "@/lib/wines";
import { num } from "@/lib/format";

export function HarvestLog({ wine }: { wine: Wine }) {
  const rows = [
    ["Registro", wine.logId],
    ["Parcela", wine.parcel],
    ["Fecha", wine.harvestDate],
    ["Inicio", `${wine.harvestStart} hrs`],
    ["Término", `${wine.harvestEnd} hrs`],
    ["Temp. uva", wine.grapeTemp],
    ["Luna", `${wine.moon.name} · ${Math.round(wine.moon.illumination * 100)} %`],
    ["Altitud", `${num(wine.altitude)} m`],
    ["Suelo", wine.soil],
    ["Rendimiento", wine.yield],
    ["Alcohol", `${num(wine.alcohol, 1)} % vol`],
    ["Botellas", num(wine.production)],
    ["Crianza", wine.aging],
    ["Servicio", wine.serving],
  ];

  return (
    <div className="border border-bone/10 bg-night/60 p-6 md:p-8">
      <p className="kicker">Registro de cosecha</p>
      <dl className="mt-6 divide-y divide-bone/10">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="grid grid-cols-[7.5rem_1fr] gap-4 py-2.5 md:grid-cols-[9rem_1fr]"
          >
            <dt className="font-mono text-[10px] uppercase tracking-kicker text-mist">
              {label}
            </dt>
            <dd className="text-sm text-bone">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
