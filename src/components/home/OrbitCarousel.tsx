import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import catalogo from 'virtual:propuestas-catalogo';
import { SECTORES, getSector } from '../../data/sectores';
import { PreviewHeroShot } from '../cases/PreviewHeroShot';
import { usePrefersReducedMotion } from '../../lib/usePrefersReducedMotion';

const TAU = Math.PI * 2;
const SPEED = TAU / 85_000;
const TARGET = 14; // Punto óptimo: separación sutil y armónica sin huecos excesivos
const VISIBLE = 1.08;
const WARM = VISIBLE + 0.55;
const KEEP = VISIBLE + 0.3;
const SHOT_W = 960;
const SHOT_H = 620;

type RingItem = (typeof catalogo)[number] & { accent: string };

function shortest(a: number) {
  return Math.atan2(Math.sin(a), Math.cos(a));
}

function isCoarsePointer() {
  return typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;
}

function pickRing(): RingItem[] {
  const picked: RingItem[] = [];
  const used = new Set<string>();
  for (const sector of SECTORES) {
    const entry = catalogo.find((e) => e.sector === sector.slug && !e.slug.includes('.tmp'));
    if (!entry) continue;
    picked.push({ ...entry, accent: sector.accent });
    used.add(entry.slug);
  }
  for (const e of catalogo) {
    if (picked.length >= TARGET) break;
    if (used.has(e.slug) || e.slug.includes('.tmp')) continue;
    picked.push({ ...e, accent: getSector(e.sector)?.accent ?? '#6B7280' });
    used.add(e.slug);
  }
  return picked.slice(0, TARGET);
}

function liveForAngle(θ0: number, n: number, prev: Set<number>): number[] {
  const next: { i: number; dist: number }[] = [];
  for (let i = 0; i < n; i++) {
    const signed = shortest(θ0 + (i / n) * TAU - Math.PI);
    const dist = Math.abs(signed);
    const visible = dist < VISIBLE;
    const incoming = signed < 0 && dist < WARM;
    const keep = prev.has(i) && dist < KEEP;
    if (visible || incoming || keep) next.push({ i, dist });
  }
  next.sort((a, b) => a.dist - b.dist);
  return next.map((s) => s.i);
}

/**
 * Arco de propuestas: círculo grande recortado a la derecha.
 * Gira solo. En desktop el hover pausa; en táctil el primer toque pausa
 * y el segundo entra a la propuesta.
 */
export const OrbitCarousel: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion();
  const boxRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef(new Map<string, HTMLDivElement>());
  const angleRef = useRef(Math.PI);
  const geoRef = useRef({ w: 560, h: 560, cardW: 300, cardH: 192, r: 420, cx: 520, cy: 280, phone: false });
  const liveKeyRef = useRef('');
  const liveSetRef = useRef<Set<number>>(new Set());
  const hoverRef = useRef(false);
  const reducedRef = useRef(reducedMotion);
  const [pausedSlug, setPausedSlug] = useState<string | null>(null);

  const anillo = useMemo(pickRing, []);
  const n = anillo.length;

  const [box, setBox] = useState({ w: 560, h: 560 });
  const [mobileStage, setMobileStage] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches,
  );
  const [liveIdx, setLiveIdx] = useState<number[]>(() => liveForAngle(Math.PI, anillo.length, new Set()));

  reducedRef.current = reducedMotion;
  liveSetRef.current = new Set(liveIdx);

  const geo = useMemo(() => {
    const phone = mobileStage;
    const cardW = Math.min(
      phone ? 230 : box.w < 640 ? 275 : 352,
      Math.max(170, box.w * (phone ? 0.62 : 0.40)),
    );
    const cardH = cardW * 0.62;
    // Celular: centro ligeramente a la derecha, para que las cards crucen el escenario de forma amplia y nítida.
    const cx = box.w * (phone ? 1.15 : 1.40);
    const cy = box.h * (phone ? 0.50 : 0.50);
    const rWant = Math.max(box.h * (phone ? 0.88 : 0.94), 210);
    const rMax = cx - box.w * (phone ? 0.38 : 0.10);
    const r = Math.max(180, Math.min(rWant, rMax));
    return { w: box.w, h: box.h, cardW, cardH, r, cx, cy, phone };
  }, [box, mobileStage]);

  geoRef.current = geo;
  const shotScale = geo.cardW / SHOT_W;

  const apply = useCallback(() => {
    const g = geoRef.current;
    const θ0 = angleRef.current;
    const stack: { el: HTMLDivElement; signed: number; dist: number }[] = [];

    for (let i = 0; i < n; i++) {
      const el = nodesRef.current.get(anillo[i].slug);
      if (!el) continue;

      const θ = θ0 + (i / n) * TAU;
      const signed = shortest(θ - Math.PI);
      const dist = Math.abs(signed);
      const fade = VISIBLE;

      if (dist > fade + (g.phone ? 0.15 : 0.18)) {
        el.style.visibility = 'hidden';
        el.style.pointerEvents = 'none';
        el.style.opacity = '0';
        el.style.filter = 'none';
        el.style.zIndex = '0';
        continue;
      }

      const x = g.cx + g.r * Math.cos(θ);
      const y = g.cy + g.r * Math.sin(θ);
      const rot = signed * (180 / Math.PI);
      const t = Math.min(1, dist / fade);
      const opacity = t < 0.6 ? 1 : Math.max(0, 1 - (t - 0.6) / 0.4);
      const scale = 1 - t * 0.07;

      el.style.visibility = 'visible';
      el.style.pointerEvents = dist < 0.7 ? 'auto' : 'none';
      el.style.opacity = opacity.toFixed(3);
      el.style.filter = 'none';
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${rot.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      stack.push({ el, signed, dist });
    }

    // De abajo hacia arriba en el arco: cada card queda detrás de la que tiene
    // encima, así no se cortan al cruzar el medio.
    stack.sort((a, b) => a.signed - b.signed);
    for (let k = 0; k < stack.length; k++) {
      stack[k].el.style.zIndex = String(k + 2);
    }

    const next = liveForAngle(θ0, n, liveSetRef.current);
    const key = next.join(',');
    if (key !== liveKeyRef.current) {
      liveKeyRef.current = key;
      setLiveIdx(next);
    }
  }, [anillo, n]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    const sync = () => setMobileStage(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setBox({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useLayoutEffect(() => {
    apply();
  }, [apply, geo]);

  useEffect(() => {
    if (reducedMotion) return;
    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(now - last, 48);
      last = now;
      if (!hoverRef.current) {
        angleRef.current += SPEED * dt;
        apply();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [apply, reducedMotion]);

  if (n === 0) return null;

  const liveSet = new Set(liveIdx);
  const frontIdx = liveIdx[0];

  return (
    <div className="relative h-full w-full select-none" aria-label="Propuestas en órbita">
      <div
        ref={boxRef}
        className="orbit-arc absolute inset-0"
        onClick={(e) => {
          if (!isCoarsePointer()) return;
          if ((e.target as HTMLElement).closest('a')) return;
          hoverRef.current = false;
          setPausedSlug(null);
        }}
      >
        {anillo.map((item, i) => {
          const live = liveSet.has(i);
          const sectorInfo = getSector(item.sector);
          const held = pausedSlug === item.slug;
          return (
            <div
              key={item.slug}
              ref={(el) => {
                if (el) nodesRef.current.set(item.slug, el);
                else nodesRef.current.delete(item.slug);
              }}
              className="orbit-card absolute left-0 top-0"
              style={{
                width: geo.cardW,
                height: geo.cardH,
                marginLeft: -geo.cardW / 2,
                marginTop: -geo.cardH / 2,
              }}
            >
              <Link
                to={`/propuesta/${item.slug}?from=${encodeURIComponent(`/galeria/${item.sector}`)}`}
                aria-label={`Ver propuesta ${item.brand}`}
                tabIndex={i === frontIdx ? 0 : -1}
                className="group block h-full overflow-hidden rounded-[1.25rem] bg-zinc-100 shadow-[0_22px_50px_-18px_rgba(15,15,40,0.30)] ring-1 ring-black/[0.07] hover:shadow-[0_28px_60px_-16px_rgba(15,15,40,0.42)] hover:ring-black/15 transition-all duration-300"
                onMouseEnter={() => {
                  if (isCoarsePointer()) return;
                  hoverRef.current = true;
                }}
                onMouseLeave={() => {
                  if (isCoarsePointer()) return;
                  hoverRef.current = false;
                }}
                onClick={(e) => {
                  if (!isCoarsePointer()) return;
                  if (pausedSlug === item.slug) return;
                  e.preventDefault();
                  hoverRef.current = true;
                  setPausedSlug(item.slug);
                }}
              >
                <div className="relative h-full w-full">
                  {live ? (
                    <PreviewHeroShot
                      src={`/propuestas/${item.slug}/index.html`}
                      name={item.brand}
                      shotWidth={SHOT_W}
                      shotHeight={SHOT_H}
                      scale={shotScale}
                      iframeSandbox="allow-scripts"
                      eager
                      fallbackNode={
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(145deg, ${item.accent}28 0%, #E4E4EA 42%, ${item.accent}14 100%)`,
                          }}
                        />
                      }
                    />
                  ) : (
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(145deg, ${item.accent}30 0%, #D8D8E0 40%, ${item.accent}18 100%)`,
                      }}
                    />
                  )}
                  <div
                    className={`pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-[#0B0B12]/75 via-[#0B0B12]/30 to-transparent px-3.5 pb-3 pt-10 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 ${
                      held ? 'opacity-100' : 'opacity-85'
                    }`}
                  >
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

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-[#F7F8FC] to-transparent lg:h-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-8 bg-gradient-to-t from-[#F7F8FC] to-transparent lg:h-16"
        aria-hidden
      />
    </div>
  );
};
