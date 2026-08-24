import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PreviewHeroShot } from '../cases/PreviewHeroShot';
import { getSector, VARIANT_LABELS } from '../../data/sectores';

/**
 * Card de la galería de propuestas: preview en vivo (iframe escalado del sitio
 * real servido en /propuestas/<slug>/) dentro de un marco de navegador.
 */
export const PropuestaCard: React.FC<{
  slug: string;
  brand: string;
  sector: string;
  variant: string;
  description?: string;
  variantProp?: 'default' | 'wide';
  index?: number;
}> = ({ slug, brand, sector, variant, description, variantProp = 'default', index = 0 }) => {
  const sectorInfo = getSector(sector);
  const accent = sectorInfo?.accent ?? '#6B7280';
  const backTo = sector ? `/galeria/${sector}` : '/galeria';
  const variantLabel = VARIANT_LABELS[variant];

  return (
    <Link
      to={`/propuesta/${slug}?from=${encodeURIComponent(backTo)}`}
      className={`galeria-card group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-sm hover:shadow-lg hover:border-zinc-300 transition-all duration-300 min-h-[24rem] md:min-h-[30rem] ${
        variantProp === 'wide' ? 'md:col-span-2' : ''
      }`}
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
    >
      {/* Marco de navegador */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-100 bg-zinc-50 shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <div className="ml-2 flex-1 min-w-0">
          <div className="h-6 rounded-md bg-white border border-zinc-200/90 px-3 flex items-center max-w-full">
            <span className="text-[11px] text-zinc-500 truncate font-medium">
              preview.orbita.studio/{slug}
            </span>
          </div>
        </div>
      </div>

      <div className="relative flex-1 min-h-0 bg-zinc-100 overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <PreviewHeroShot
            src={`/propuestas/${slug}/index.html`}
            name={brand}
            iframeSandbox="allow-scripts"
            fallbackNode={
              <div
                className="absolute inset-0 animate-pulse"
                style={{
                  background: `linear-gradient(135deg, ${accent}14 0%, #F7F8FC 45%, ${accent}0C 100%)`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-medium tracking-tight text-zinc-400">
                    Cargando {brand}…
                  </span>
                </div>
              </div>
            }
          />
        </div>

        {/* Scrim inferior para legibilidad */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0B0B12]/85 via-[#0B0B12]/35 to-transparent pointer-events-none" />

        <div className="absolute top-4 left-4 right-4 z-10 flex items-start justify-between gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-700 bg-white/95 border border-zinc-200/80 px-3 py-1 rounded-full shadow-sm">
            {sectorInfo?.label ?? sector}
          </span>
          {variantLabel && (
            <span
              className="text-[11px] font-semibold text-white px-3 py-1 rounded-full shadow-sm"
              style={{ backgroundColor: accent }}
            >
              {variantLabel}
            </span>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-1.5">
            {brand}
          </h3>
          {description && (
            <p className="text-white/80 text-sm leading-relaxed line-clamp-2 mb-3 max-w-md">
              {description}
            </p>
          )}
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white group-hover:gap-2.5 transition-all">
            Recorrer la propuesta
            <ArrowUpRight className="w-4 h-4 text-zinc-300" />
          </span>
        </div>
      </div>
    </Link>
  );
};
