import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import catalogo from 'virtual:propuestas-catalogo';
import { SECTORES, getSector } from '../../data/sectores';
import { PreviewHeroShot } from '../cases/PreviewHeroShot';
import { usePrefersReducedMotion } from '../../lib/usePrefersReducedMotion';

const CARD_W = 260;
const CARD_H = 162;
const GAP = 16;
const SHOT_W = 960;
const SHOT_H = 620;
const SPEED = 0.045; // ~45px per second for a relaxed, premium pace

type CarouselItem = (typeof catalogo)[number] & { accent: string };

function pickFeatured(): CarouselItem[] {
  const picked: CarouselItem[] = [];
  const used = new Set<string>();

  // Pick one from each distinctive sector first
  for (const sector of SECTORES) {
    const entry = catalogo.find((e) => e.sector === sector.slug && !e.slug.includes('.tmp'));
    if (!entry) continue;
    picked.push({ ...entry, accent: sector.accent });
    used.add(entry.slug);
    if (picked.length >= 8) break;
  }

  // Fill up to 8 if needed
  for (const e of catalogo) {
    if (picked.length >= 8) break;
    if (used.has(e.slug) || e.slug.includes('.tmp')) continue;
    picked.push({ ...e, accent: getSector(e.sector)?.accent ?? '#6B7280' });
    used.add(e.slug);
  }

  return picked;
}

export const MobileHeroCarousel: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion();
  const items = useMemo(pickFeatured, []);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);

  // Touch drag tracking
  const touchStartX = useRef<number | null>(null);
  const touchLastX = useRef<number | null>(null);
  const touchDragged = useRef(false);

  const singleWidth = items.length * (CARD_W + GAP);
  const shotScale = CARD_W / SHOT_W;

  useEffect(() => {
    if (reducedMotion || singleWidth === 0) return;

    let raf = 0;
    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = Math.min(now - lastTime, 48);
      lastTime = now;

      if (!pausedRef.current) {
        offsetRef.current += SPEED * dt;
        if (offsetRef.current >= singleWidth) {
          offsetRef.current -= singleWidth;
        } else if (offsetRef.current < 0) {
          offsetRef.current += singleWidth;
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(-${offsetRef.current.toFixed(1)}px, 0, 0)`;
        }
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion, singleWidth]);

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    touchStartX.current = e.touches[0].clientX;
    touchLastX.current = e.touches[0].clientX;
    touchDragged.current = false;
    pausedRef.current = true;

    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchLastX.current === null) return;
    const currentX = e.touches[0].clientX;
    const dx = currentX - touchLastX.current;
    const totalDx = Math.abs(currentX - touchStartX.current);

    if (totalDx > 6) {
      touchDragged.current = true;
    }

    touchLastX.current = currentX;
    offsetRef.current -= dx;

    // Wrap around smoothly during manual touch drag
    if (offsetRef.current >= singleWidth) {
      offsetRef.current -= singleWidth;
    } else if (offsetRef.current < 0) {
      offsetRef.current += singleWidth;
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(-${offsetRef.current.toFixed(1)}px, 0, 0)`;
    }
  };

  const onTouchEnd = () => {
    touchStartX.current = null;
    touchLastX.current = null;

    resumeTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false;
    }, 2500);
  };

  if (items.length === 0) return null;

  // Duplicate the list so it loops infinitely without gaps
  const displayItems = [...items, ...items, ...items];

  return (
    <div className="w-full select-none">
      {/* Top hint bar */}
      <div className="flex items-center justify-between px-5 mb-2.5">
        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
          Propuestas en vivo
        </span>
        <span className="text-[11px] font-mono text-zinc-400">
          ← Desliza para explorar →
        </span>
      </div>

      {/* Viewport with soft left/right edge masks */}
      <div
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing touch-pan-x"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        {/* Left edge fade */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#F7F8FC] to-transparent"
          aria-hidden
        />

        {/* Right edge fade */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#F7F8FC] to-transparent"
          aria-hidden
        />

        {/* Moving Track */}
        <div
          ref={trackRef}
          className="flex will-change-transform py-2 pl-4"
          style={{ gap: `${GAP}px` }}
        >
          {displayItems.map((item, index) => {
            const sectorInfo = getSector(item.sector);
            return (
              <div
                key={`${item.slug}-${index}`}
                className="shrink-0"
                style={{ width: `${CARD_W}px`, height: `${CARD_H}px` }}
              >
                <Link
                  to={`/propuesta/${item.slug}?from=${encodeURIComponent(`/galeria/${item.sector}`)}`}
                  aria-label={`Ver propuesta ${item.brand}`}
                  onClick={(e) => {
                    if (touchDragged.current) {
                      e.preventDefault();
                    }
                  }}
                  className="group block h-full w-full overflow-hidden rounded-2xl bg-zinc-100 shadow-[0_12px_28px_-8px_rgba(15,15,40,0.20)] ring-1 ring-black/[0.08] active:scale-[0.98] transition-transform duration-200"
                >
                  <div className="relative h-full w-full">
                    <PreviewHeroShot
                      src={`/propuestas/${item.slug}/index.html`}
                      name={item.brand}
                      shotWidth={SHOT_W}
                      shotHeight={SHOT_H}
                      scale={shotScale}
                      iframeSandbox="allow-scripts"
                      fallbackNode={
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(145deg, ${item.accent}28 0%, #E4E4EA 42%, ${item.accent}14 100%)`,
                          }}
                        />
                      }
                    />

                    {/* Gradient overlay label */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-[#0B0B12]/80 via-[#0B0B12]/35 to-transparent px-3.5 pb-2.5 pt-8">
                      <span className="truncate text-xs font-semibold tracking-tight text-white drop-shadow-xs">
                        {item.brand}
                      </span>
                      <span className="shrink-0 rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white backdrop-blur-xs">
                        {sectorInfo?.label ?? item.sector}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
