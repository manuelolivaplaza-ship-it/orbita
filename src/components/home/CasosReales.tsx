import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CoverImage } from '../CoverImage';
import { getFeaturedCases } from '../../data/cases';

const RESULTADO: Record<string, string> = {
  programbi: 'Web + CRM / leads a WhatsApp',
  maverlang: 'Sitio de producto en producción, camino claro a la acción',
};

/**
 * Bloque corto de clientes reales. Las demos de la galería no van aquí.
 */
export const CasosReales: React.FC = () => {
  const live = getFeaturedCases().filter((c) => c.kind === 'live');

  if (live.length === 0) return null;

  return (
    <section
      id="casos-reales"
      className="relative z-10 scroll-mt-24 border-t border-zinc-200/80 bg-[#F7F8FC] px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
              Casos reales
            </p>
            <h2
              className="text-3xl font-medium tracking-tight text-[#0B0B12] sm:text-4xl"
              style={{ letterSpacing: '-0.03em' }}
            >
              En producción, no demos.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
              ProgramBI y Maverlang son sitios de clientes. El resto de la galería son propuestas
              de rubro para que elijas dirección de diseño.
            </p>
          </div>
          <Link
            to="/creaciones"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#0B0B12] hover:text-[#6B7280]"
          >
            Ver creaciones
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {live.map((c) => (
            <Link
              key={c.slug}
              to={`/creaciones/${c.slug}`}
              className="group flex gap-4 rounded-2xl border border-zinc-200/90 bg-white p-4 shadow-xs transition-colors hover:border-zinc-300 sm:p-5"
            >
              <div className="h-24 w-32 shrink-0 overflow-hidden rounded-xl bg-zinc-100 sm:h-28 sm:w-40">
                <CoverImage
                  src={c.cover}
                  alt={`Sitio de ${c.name}`}
                  className="h-full w-full object-cover object-top"
                  width={160}
                  height={112}
                  loading="lazy"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Cliente · {c.industry}
                </p>
                <h3
                  className="mt-1 text-lg font-medium tracking-tight text-[#0B0B12]"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  {c.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                  {RESULTADO[c.slug] ?? c.result}
                </p>
                {c.url && (
                  <p className="mt-2 text-xs text-zinc-600">
                    {c.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </p>
                )}
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-zinc-300 transition-colors group-hover:text-[#0B0B12]" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
