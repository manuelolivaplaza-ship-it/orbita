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

/** Tres destacadas: oscura, clara y con acento, de rubros distintos. */
function destacarTres() {
  const picked: typeof catalogo = [];
  const sectors = new Set<string>();
  const take = (pred: (variant: string) => boolean) => {
    const found = catalogo.find((e) => pred(e.variant) && !sectors.has(e.sector));
    if (found) {
      picked.push(found);
      sectors.add(found.sector);
    }
  };
  take((v) => v === 'oscuro');
  take((v) => v === 'claro');
  take((v) => v === 'teal' || v === 'azul');
  for (const entry of catalogo) {
    if (picked.length >= 3) break;
    if (!picked.some((p) => p.slug === entry.slug)) picked.push(entry);
  }
  return picked.slice(0, 3);
}

/**
 * Galería de propuestas en el home: superficie clara, índice de rubros
 * y tres sitios en vivo sin marco de navegador.
 */
export const GaleriaTeaser: React.FC = () => {
  const counts = contarPorSector();
  const sectoresConContenido = SECTORES.filter((s) => (counts[s.slug] ?? 0) > 0);
  const destacadas = destacarTres();
  const [featured, ...rest] = destacadas;

  return (
    <section
      id="galeria"
      className="relative z-10 scroll-mt-24 border-t border-zinc-200/80 bg-white px-4 py-16 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
              Galería de propuestas
            </p>
            <h2
              className="text-4xl font-medium leading-[1.02] tracking-tight text-[#0B0B12] sm:text-5xl lg:text-6xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              Direcciones de diseño,
              <br className="hidden sm:block" /> listas para tu rubro.
            </h2>
          </div>
          <div className="max-w-md lg:col-span-5 lg:justify-self-end lg:pb-1">
            <p className="text-base leading-relaxed text-zinc-600">
              Entra a la que te guste, recórrela como lo haría tu cliente y esa misma la
              adaptamos a tu marca.
            </p>
            <Link
              to="/galeria"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#0B0B12] transition-colors hover:text-[#6B7280]"
            >
              Ver galería completa
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {sectoresConContenido.length > 0 && (
          <div className="-mx-6 mb-12 overflow-x-auto border-y border-zinc-200/80 [scrollbar-width:none] sm:mx-0 sm:mb-14 sm:overflow-visible [&::-webkit-scrollbar]:hidden">
            <nav
              aria-label="Sectores de la galería"
              className="flex w-max items-baseline gap-x-0 px-6 py-4 sm:w-auto sm:flex-wrap sm:gap-y-2 sm:px-0 sm:py-5"
            >
              {sectoresConContenido.map((sector, i) => (
                <span key={sector.slug} className="inline-flex items-baseline whitespace-nowrap">
                  {i > 0 && (
                    <span className="mx-2.5 text-zinc-300" aria-hidden>
                      /
                    </span>
                  )}
                  <Link
                    to={`/galeria/${sector.slug}`}
                    className="group/s inline-flex items-baseline gap-1.5 text-sm text-zinc-600 transition-colors hover:text-[#0B0B12]"
                  >
                    {sector.label}
                    <span className="tabular-nums text-[11px] text-zinc-400 transition-colors group-hover/s:text-zinc-500">
                      {counts[sector.slug]}
                    </span>
                  </Link>
                </span>
              ))}
            </nav>
          </div>
        )}

        {featured && (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0">
            <div className="lg:col-span-7 xl:col-span-8">
              <PropuestaCard {...featured} index={0} size="featured" />
            </div>
            {rest.length > 0 && (
              <div className="flex flex-col gap-12 sm:grid sm:grid-cols-2 sm:gap-8 lg:col-span-5 lg:flex lg:flex-col lg:gap-10 xl:col-span-4">
                {rest.map((entry, i) => (
                  <PropuestaCard key={entry.slug} {...entry} index={i + 1} />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200/80 pt-8 sm:mt-16">
          <p className="text-sm text-zinc-500">
            {catalogo.length} propuestas navegables · actualizamos la galería constantemente.
          </p>
          <Link
            to="/galeria"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0B0B12] transition-colors hover:text-[#6B7280]"
          >
            Explorar todas
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
