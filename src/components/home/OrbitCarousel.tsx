import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import catalogo from 'virtual:propuestas-catalogo';
import { SECTORES, getSector } from '../../data/sectores';
import { PreviewHeroShot } from '../cases/PreviewHeroShot';
import { usePrefersReducedMotion } from '../../lib/usePrefersReducedMotion';

const AUTO_MS = 5000;
const DRAG_UNIT = 90; // px de arrastre por paso de carta

/**
 * Carrusel orbital: las propuestas giran alrededor del nodo Órbita como
 * satélites. La carta frontal muestra el sitio en vivo; el resto, skeletons
 * tintados con el color de su sector. Solo hay 2 iframes montados a la vez
 * (frontal y siguiente) para mantener el hero liviano.
 */
export const OrbitCarousel: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion();
  const boxRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; base: number; moved: boolean } | null>(null);

  const [box, setBox] = useState({ w: 560, h: 560 });
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);

  const anillo = useMemo(
    () =>
      SECTORES.map((sector) => {
        const entry = catalogo.find((e) => e.sector === sector.slug);
        return entry ? { ...entry, accent: sector.accent } : undefined;
      }).filter((e): e is NonNullable<typeof e> => Boolean(e)),
    [],
  );

  const n = anillo.length;

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setBox({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Auto-giro: pausa en hover o mientras se arrastra.
  useEffect(() => {
    if (reducedMotion || hovered || dragging || n < 2) return;
    const t = window.setInterval(() => {
      setActive((a) => Math.round(a) + 1);
    }, AUTO_MS);
    return () => window.clearInterval(t);
  }, [reducedMotion, hovered, dragging, n]);

  const geo = useMemo(() => {
    const cardW = Math.min(290, Math.max(170, box.w * 0.54));
    const rx = Math.min(box.w / 2 - cardW / 2 - 6, 265);
    const lift = rx * 0.42;
    return { cardW, cardH: cardW * 0.72, rx, lift };
  }, [box]);

  const frontIdx = ((Math.round(active) % n) + n) % n;
  const nextIdx = (frontIdx + 1) % n;
  const maxArc = box.w < 480 ? 4 : Math.floor(n / 2);

  const step = (dir: 1 | -1) => setActive((a) => Math.round(a) + dir);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current = { startX: e.clientX, base: active, moved: false };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = dragRef.current;
    if (!d) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 6) d.moved = true;
    setDragging(d.moved);
    setActive(d.base - dx / DRAG_UNIT);
  };

  const endDrag = () => {
    if (!dragRef.current) return;
    dragRef.current = null;
    setDragging(false);
    setActive((a) => Math.round(a));
  };

  // Evita que un arrastre termine navegando a la propuesta.
  const onClickCapture = (e: React.MouseEvent) => {
    if (dragRef.current?.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="relative w-full select-none" aria-roledescription="carrusel" aria-label="Propuestas en órbita">
      {/* Anillos decorativos + glow del nodo */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="absolute animate-pulse-glow rounded-full"
          style={{
            width: geo.rx * 1.1,
            height: geo.rx * 1.1,
            background: 'radial-gradient(circle, rgba(107,114,128,0.22) 0%, rgba(107,114,128,0) 70%)',
          }}
        />
        <div
          className="absolute rounded-[50%] border border-dashed border-zinc-400/35"
          style={{ width: geo.rx * 2 + geo.cardW * 0.4, height: (geo.rx + geo.lift) * 1.28 }}
        />
        <div
          className="absolute rounded-[50%] border border-zinc-300/30"
          style={{ width: geo.rx * 1.32, height: geo.rx * 0.92 }}
        />
      </div>

      {/* Nodo central: marca Órbita */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="glass-light flex h-[104px] w-[104px] items-center justify-center rounded-full border border-white/80 shadow-[0_18px_50px_-16px_rgba(15,15,40,0.35)]">
          <svg width="58" height="58" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" fill="#0B0B12" />
            <ellipse
              cx="12"
              cy="12"
              rx="9"
              ry="4"
              stroke="#0B0B12"
              strokeWidth="1.6"
              strokeDasharray="100"
              transform="rotate(-25 12 12)"
            />
            <circle cx="18.5" cy="8.5" r="1.7" fill="#6B7280" />
          </svg>
        </div>
      </div>

      {/* Anillo de cartas */}
      <div
        ref={boxRef}
        className="relative mx-auto touch-pan-y"
        style={{ height: Math.max(380, geo.cardH + geo.lift + 96) }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          endDrag();
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
      >
        {anillo.map((item, i) => {
          const offset = (((i - active) % n) + n) % n;
          const signed = offset > n / 2 ? offset - n : offset;
          if (Math.abs(signed) > maxArc) return null;

          const rad = (signed * (360 / n) * Math.PI) / 180;
          const depth = Math.cos(rad); // 1 frente · -1 fondo
          const x = Math.sin(rad) * geo.rx;
          const y = -(1 - depth) * geo.lift;
          const scale = 0.52 + 0.48 * ((depth + 1) / 2);
          const opacity = Math.abs(signed) < 0.5 ? 1 : 0.22 + 0.68 * ((depth + 1) / 2);
          const isFront = i === frontIdx;
          const live = isFront || i === nextIdx;
          const sectorInfo = getSector(item.sector);

          return (
            <div
              key={item.slug}
              className={`absolute left-1/2 top-1/2 ${isFront ? 'cursor-pointer' : 'pointer-events-none'}`}
              style={{
                width: geo.cardW,
                height: geo.cardH,
                marginLeft: -geo.cardW / 2,
                marginTop: -geo.cardH / 2,
                zIndex: Math.round(depth * 100) + 100,
                opacity,
                filter: depth < 0.55 ? `blur(${((0.55 - depth) * 2.4).toFixed(2)}px)` : undefined,
                transform: `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`,
                transition: dragging || reducedMotion ? 'none' : 'transform 750ms cubic-bezier(0.22, 1, 0.36, 1), opacity 750ms cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              <Link
                to={`/propuesta/${item.slug}?from=${encodeURIComponent(`/galeria/${item.sector}`)}`}
                aria-label={`Ver propuesta ${item.brand}`}
                tabIndex={isFront ? 0 : -1}
                className="group block h-full overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-[0_18px_45px_-18px_rgba(15,15,40,0.35)]"
              >
                {/* Mini marco de navegador */}
                <div className="flex items-center gap-1.5 border-b border-zinc-100 bg-zinc-50 px-2.5 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                  <span className="ml-1 truncate text-[9px] font-medium text-zinc-400">
                    preview.orbita.studio/{item.slug}
                  </span>
                </div>
                <div className="relative h-[calc(100%-1.9rem)] bg-zinc-100">
                  {live ? (
                    <PreviewHeroShot
                      src={`/propuestas/${item.slug}/index.html`}
                      name={item.brand}
                      shotWidth={1280}
                      shotHeight={900}
                      iframeSandbox="allow-scripts"
                      fallbackNode={
                        <div
                          className="absolute inset-0 animate-pulse"
                          style={{
                            background: `linear-gradient(135deg, ${item.accent}14 0%, #F7F8FC 45%, ${item.accent}0C 100%)`,
                          }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-medium tracking-tight text-zinc-400">{item.brand}</span>
                          </div>
                        </div>
                      }
                    />
                  ) : (
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${item.accent}12 0%, #F1F2F7 55%, ${item.accent}0A 100%)`,
                      }}
                    >
                      <div className="absolute inset-x-4 top-4 space-y-2 opacity-40">
                        <div className="h-2 w-2/3 rounded-full bg-zinc-300" />
                        <div className="h-2 w-1/2 rounded-full bg-zinc-300" />
                        <div className="mt-4 grid grid-cols-3 gap-2">
                          {[0, 1, 2].map((k) => (
                            <div key={k} className="h-10 rounded-md bg-zinc-200/80" />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-[#0B0B12]/80 to-transparent p-3">
                    <span className="truncate text-xs font-medium tracking-tight text-white">{item.brand}</span>
                    <span
                      className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white"
                      style={{ backgroundColor: item.accent }}
                    >
                      {sectorInfo?.label ?? item.sector}
                    </span>
                  </div>
                  {isFront && (
                    <span className="absolute right-2.5 top-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/95 shadow-sm">
                      <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600" />
                    </span>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Controles */}
      <div className="mt-2 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Propuesta anterior"
          className="glass-light rounded-full border border-white/80 p-2.5 text-zinc-700 shadow-sm transition-colors hover:bg-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {anillo.map((item, i) => (
            <button
              key={item.slug}
              type="button"
              aria-label={`Ir a ${item.brand}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === frontIdx ? 'w-5 bg-[#0B0B12]' : 'w-1.5 bg-zinc-300 hover:bg-zinc-400'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Propuesta siguiente"
          className="glass-light rounded-full border border-white/80 p-2.5 text-zinc-700 shadow-sm transition-colors hover:bg-white"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Chip de conteo */}
      <div className="glass-light mt-5 inline-flex items-center gap-2 rounded-full border border-white/80 px-3.5 py-1.5 shadow-xs">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <span className="text-xs font-medium text-zinc-700">
          {catalogo.length} propuestas · {SECTORES.length} sectores en órbita
        </span>
      </div>
    </div>
  );
};
