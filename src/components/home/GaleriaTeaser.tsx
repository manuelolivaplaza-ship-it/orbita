import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import catalogo from 'virtual:propuestas-catalogo';
import { SECTORES } from '../../data/sectores';
import { PropuestaCard } from '../galeria/PropuestaCard';

function contarPorSector(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const entry of catalogo) counts[entry.sector] = (counts[entry.sector] ?? 0) + 1;
  return counts;
}

/** Tres destacadas deterministas: una clara, una oscura y una con acento de color. */
function destacarTres() {
  const porVariante = (pred: (v: string) => boolean) => catalogo.find((e) => pred(e.variant));
  return [porVariante((v) => v === 'claro'), porVariante((v) => v === 'oscuro'), porVariante((v) => v === 'teal' || v === 'azul')]
    .filter((e): e is NonNullable<typeof e> => Boolean(e))
    .slice(0, 3);
}

/**
 * Teaser de la galería de propuestas en el home: banda oscura con los
 * sectores disponibles y tres propuestas en vivo.
 */
export const GaleriaTeaser: React.FC = () => {
  const counts = contarPorSector();
  const sectoresConContenido = SECTORES.filter((s) => (counts[s.slug] ?? 0) > 0);
  const destacadas = destacarTres();

  return (
    <section id="galeria" className="relative z-10 overflow-hidden bg-[#0B0B12] px-6 py-24 text-white sm:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#6B7280]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#A1A1AA]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[88rem]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
              Galería de propuestas
            </p>
            <h2
              className="text-4xl font-medium tracking-tight sm:text-5xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              Tu sector, ya en órbita.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              Direcciones de diseño listas por rubro. Entra a la que te guste, recórrela como lo
              haría tu cliente y esa misma la adaptamos a tu marca.
            </p>
          </div>
          <Link
            to="/galeria"
            className="group inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-sm font-medium text-[#0B0B12] transition-colors hover:bg-zinc-200"
          >
            <span>Ver galería completa</span>
            <span className="rounded-full bg-[#0B0B12] p-2">
              <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>

        {/* Chips de sector */}
        <div className="mb-14 flex flex-wrap gap-2.5">
          {sectoresConContenido.map((sector) => {
            const Icon = sector.icon;
            return (
              <Link
                key={sector.slug}
                to={`/galeria/${sector.slug}`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-4 w-4" style={{ color: sector.accent }} />
                {sector.label}
                <span className="text-xs text-white/45">{counts[sector.slug]}</span>
              </Link>
            );
          })}
        </div>

        {/* Destacadas en vivo */}
        {destacadas.length > 0 && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {destacadas.map((entry, i) => (
              <PropuestaCard key={entry.slug} {...entry} index={i} />
            ))}
          </div>
        )}

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-sm text-white/60">
            {catalogo.length} propuestas navegables · actualizamos la galería constantemente.
          </p>
          <Link
            to="/galeria"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-zinc-300"
          >
            Explorar todas
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
