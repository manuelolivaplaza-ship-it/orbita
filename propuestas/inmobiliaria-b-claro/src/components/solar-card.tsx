import Image from "next/image";
import Link from "next/link";
import { LotPlan } from "@/components/lot-plan";
import type { Solar } from "@/lib/data";
import { formatUf } from "@/lib/utils";

export function SolarCard({ solar }: { solar: Solar }) {
  return (
    <Link
      href={`/solares/${solar.slug}`}
      className="group block border border-line bg-papel transition-colors hover:border-ink"
    >
      <div className="grid sm:grid-cols-2">
        <div className="img-zoom relative aspect-[3/4] sm:aspect-auto sm:min-h-[420px]">
          <Image
            src={solar.image}
            alt={`${solar.title}, ${solar.comuna}`}
            fill
            sizes="(max-width: 640px) 100vw, 40vw"
            className="object-cover"
          />
          {solar.status === "reservado" ? (
            <span className="font-mono absolute top-3 left-3 bg-papel px-2 py-1 text-[10px] tracking-[0.16em] uppercase">
              Reservado
            </span>
          ) : null}
        </div>
        <div className="flex flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4">
            <div>
              <p className="kicker">
                Lámina {solar.lamina} · {solar.comuna}
              </p>
              <h3 className="font-display mt-2 text-2xl leading-tight font-semibold tracking-tight">
                {solar.title}
              </h3>
            </div>
            <p className="font-display nums text-xl tracking-tight">
              UF {formatUf(solar.uf)}
            </p>
          </div>
          <LotPlan
            lot={solar.lot}
            frente={solar.frente}
            fondo={solar.fondo}
            className="min-h-[220px] flex-1 border-b border-line"
          />
          <dl className="font-mono grid grid-cols-3 gap-px bg-line text-[10px] tracking-[0.12em] uppercase">
            <div className="bg-papel px-3 py-3">
              <dt className="text-muted">Frente</dt>
              <dd className="mt-1 text-ink">
                {solar.frente.toString().replace(".", ",")} m
              </dd>
            </div>
            <div className="bg-papel px-3 py-3">
              <dt className="text-muted">Patio</dt>
              <dd className="mt-1 text-ink">{solar.patio} m²</dd>
            </div>
            <div className="bg-papel px-3 py-3">
              <dt className="text-muted">Norte</dt>
              <dd className="mt-1 text-ink">{solar.orientacion}</dd>
            </div>
          </dl>
        </div>
      </div>
    </Link>
  );
}
