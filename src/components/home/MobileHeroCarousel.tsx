import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import catalogo from 'virtual:propuestas-catalogo';
import { SECTORES, getSector } from '../../data/sectores';
import { PreviewHeroShot } from '../cases/PreviewHeroShot';

type CarouselItem = (typeof catalogo)[number] & { accent: string };

function pickFeatured(): CarouselItem[] {
  const picked: CarouselItem[] = [];
  const used = new Set<string>();

  for (const sector of SECTORES) {
    const entry = catalogo.find((e) => e.sector === sector.slug && !e.slug.includes('.tmp'));
    if (!entry) continue;
    picked.push({ ...entry, accent: sector.accent });
    used.add(entry.slug);
    if (picked.length >= 8) break;
  }

  for (const e of catalogo) {
    if (picked.length >= 8) break;
    if (used.has(e.slug) || e.slug.includes('.tmp')) continue;
    picked.push({ ...e, accent: getSector(e.sector)?.accent ?? '#6B7280' });
    used.add(e.slug);
  }

  return picked;
}

export const MobileHeroCarousel: React.FC = () => {
  const items = useMemo(pickFeatured, []);

  if (items.length === 0) return null;

  return (
    <div className="w-full max-w-full">
      <div className="mb-3 flex items-center justify-between px-5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-600">
          Propuestas en vivo
        </span>
        <span className="text-[11px] text-zinc-600">Desliza →</span>
      </div>

      <div
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-pl-8 scroll-pr-8 pb-1 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
      >
        {/* snap-start ignores padding-left; spacer + scroll-padding keep the first card inset. */}
        <div className="w-8 shrink-0" aria-hidden />
        {items.map((item) => {
          const sectorInfo = getSector(item.sector);
          return (
            <Link
              key={item.slug}
              to={`/propuesta/${item.slug}?from=${encodeURIComponent(`/galeria/${item.sector}`)}`}
              aria-label={`${item.brand} · ${sectorInfo?.label ?? item.sector}`}
              className="relative h-[13.75rem] w-[min(19.5rem,82%)] shrink-0 snap-start overflow-hidden rounded-2xl bg-zinc-100 shadow-[0_12px_28px_-8px_rgba(15,15,40,0.20)] ring-1 ring-black/[0.08] transition-transform duration-200 active:scale-[0.98]"
            >
              <PreviewHeroShot
                src={`/propuestas/${item.slug}/index.html`}
                name={item.brand}
                shotWidth={960}
                shotHeight={620}
                iframeSandbox="allow-scripts"
                live={false}
                fallbackNode={
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(145deg, ${item.accent}28 0%, #E4E4EA 42%, ${item.accent}14 100%)`,
                    }}
                  />
                }
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-[#0B0B12]/80 via-[#0B0B12]/35 to-transparent px-3.5 pb-2.5 pt-10">
                <span className="truncate text-xs font-semibold tracking-tight text-white drop-shadow-xs">
                  {item.brand}
                </span>
                <span className="shrink-0 rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white backdrop-blur-xs">
                  {sectorInfo?.label ?? item.sector}
                </span>
              </div>
            </Link>
          );
        })}
        <div className="w-8 shrink-0" aria-hidden />
      </div>
    </div>
  );
};
