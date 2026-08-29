import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PreviewHeroShot } from '../cases/PreviewHeroShot';
import { getSector, VARIANT_LABELS } from '../../data/sectores';

const SHOT_W = 1440;
const SHOT_H = 900;

/**
 * Card de la galería: el sitio en vivo, sin marco de navegador.
 * La captura es la pieza; marca y rubro van como ficha debajo.
 */
export const PropuestaCard: React.FC<{
  slug: string;
  brand: string;
  sector: string;
  variant: string;
  description?: string;
  variantProp?: 'default' | 'wide';
  size?: 'default' | 'featured';
  index?: number;
}> = ({
  slug,
  brand,
  sector,
  variant,
  description,
  variantProp = 'default',
  size = 'default',
  index = 0,
}) => {
  const sectorInfo = getSector(sector);
  const accent = sectorInfo?.accent ?? '#6B7280';
  const backTo = sector ? `/galeria/${sector}` : '/galeria';
  const variantLabel = VARIANT_LABELS[variant];
  const featured = size === 'featured';
  const wide = variantProp === 'wide';

  return (
    <Link
      to={`/propuesta/${slug}?from=${encodeURIComponent(backTo)}`}
      className={`galeria-card group flex flex-col outline-none ${wide ? 'md:col-span-2' : ''}`}
      style={{ animationDelay: `${Math.min(index, 8) * 70}ms` }}
    >
      <div
        className={`galeria-shot relative overflow-hidden bg-zinc-100 ${
          wide ? 'aspect-[16/10] md:aspect-[2/1]' : 'aspect-[16/10]'
        }`}
      >
        <div className="absolute inset-0 origin-top-left transition-transform duration-700 ease-out group-hover:scale-[1.06]">
          <PreviewHeroShot
            src={`/propuestas/${slug}/index.html`}
            name={brand}
            shotWidth={SHOT_W}
            shotHeight={SHOT_H}
            iframeSandbox="allow-scripts"
            fallbackNode={
              <div
                className="absolute inset-0 animate-pulse"
                style={{
                  background: `linear-gradient(135deg, ${accent}14 0%, #F4F5F8 42%, ${accent}0A 100%)`,
                }}
              />
            }
          />
        </div>
      </div>

      <div
        className={`flex items-start justify-between gap-4 ${
          featured ? 'mt-5 sm:mt-6' : 'mt-4'
        }`}
      >
        <div className="min-w-0">
          <p className="flex flex-wrap items-center gap-x-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
            <span>{sectorInfo?.label ?? sector}</span>
            {variantLabel && (
              <>
                <span className="text-zinc-300" aria-hidden>
                  ·
                </span>
                <span>{variantLabel}</span>
              </>
            )}
          </p>
          <h3
            className={`mt-1.5 font-medium tracking-tight text-[#0B0B12] ${
              featured ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
            }`}
            style={{ letterSpacing: '-0.03em' }}
          >
            {brand}
          </h3>
          {description && (
            <p
              className={`mt-1.5 text-sm leading-relaxed text-zinc-600 ${
                featured ? 'line-clamp-2 max-w-lg' : 'line-clamp-1 max-w-md'
              }`}
            >
              {description}
            </p>
          )}
        </div>

        <span
          className={`mt-0.5 inline-flex shrink-0 items-center justify-center rounded-full border border-zinc-200/90 bg-white text-[#0B0B12] shadow-sm transition-all duration-300 group-hover:border-[#0B0B12] group-hover:bg-[#0B0B12] group-hover:text-white ${
            featured ? 'h-10 w-10' : 'h-9 w-9'
          }`}
          aria-hidden
        >
          <ArrowUpRight className={featured ? 'h-4 w-4' : 'h-3.5 w-3.5'} />
        </span>
      </div>
    </Link>
  );
};
