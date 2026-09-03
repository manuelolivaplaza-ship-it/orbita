import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GripHorizontal, Zap } from 'lucide-react';

type Pos = { x: number; y: number };

const MARGIN = 12;
const STORAGE_KEY = 'orbita-preview-popup';

function clamp(pos: Pos, w: number, h: number): Pos {
  const maxX = Math.max(MARGIN, window.innerWidth - w - MARGIN);
  const maxY = Math.max(MARGIN, window.innerHeight - h - MARGIN);
  return {
    x: Math.min(maxX, Math.max(MARGIN, pos.x)),
    y: Math.min(maxY, Math.max(MARGIN, pos.y)),
  };
}

function defaultPos(w: number, h: number): Pos {
  return clamp(
    {
      x: window.innerWidth - w - 20,
      y: window.innerHeight - h - 24,
    },
    w,
    h,
  );
}

export function PreviewReturnPopup({
  name,
  caseSlug,
  backUrl,
  crmUrl,
  labelTag = 'Preview Órbita',
}: {
  name: string;
  caseSlug?: string;
  backUrl?: string;
  crmUrl?: string;
  labelTag?: string;
}) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ dx: number; dy: number } | null>(null);
  const [pos, setPos] = useState<Pos | null>(null);

  const measure = useCallback(() => {
    const el = nodeRef.current;
    if (!el) return { w: 260, h: 88 };
    const r = el.getBoundingClientRect();
    return { w: r.width, h: r.height };
  }, []);

  useEffect(() => {
    const { w, h } = measure();
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Pos;
        setPos(clamp(saved, w, h));
        return;
      }
    } catch {
      /* ignore */
    }
    setPos(defaultPos(w, h));
  }, [measure]);

  useEffect(() => {
    const onResize = () => {
      const { w, h } = measure();
      setPos((prev) => (prev ? clamp(prev, w, h) : defaultPos(w, h)));
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [measure]);

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('a, button')) return;
    const el = nodeRef.current;
    if (!el || !pos) return;
    el.setPointerCapture(event.pointerId);
    drag.current = { dx: event.clientX - pos.x, dy: event.clientY - pos.y };
  };

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const { w, h } = measure();
    const next = clamp(
      { x: event.clientX - drag.current.dx, y: event.clientY - drag.current.dy },
      w,
      h,
    );
    setPos(next);
  };

  const endDrag = () => {
    if (!drag.current || !pos) return;
    drag.current = null;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(pos));
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      ref={nodeRef}
      onPointerDown={startDrag}
      onPointerMove={onMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className="fixed z-[80] w-[min(18.5rem,calc(100vw-1.5rem))] select-none touch-none"
      style={{
        left: pos?.x ?? -9999,
        top: pos?.y ?? -9999,
        opacity: pos ? 1 : 0,
      }}
    >
      <div className="rounded-2xl border border-white/15 bg-[#0B0B12]/92 text-white shadow-[0_18px_50px_-18px_rgba(15,15,40,0.55)] backdrop-blur-md">
        <div className="flex items-center justify-center pt-2 pb-1 cursor-grab active:cursor-grabbing text-white/35">
          <GripHorizontal className="w-4 h-4" />
        </div>
        <div className="px-3.5 pb-3.5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-white/45 mb-0.5">
            {labelTag}
          </p>
          <p className="text-sm font-medium tracking-tight truncate mb-3">{name}</p>
          <div className="flex gap-2">
            <Link
              to={backUrl ?? (caseSlug ? `/creaciones/${caseSlug}` : '/')}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-white text-[#0B0B12] text-xs font-medium px-3 py-2 hover:bg-zinc-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </Link>
            {crmUrl && (
              <Link
                to={crmUrl}
                target="_blank"
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-zinc-800 text-white border border-white/15 text-xs font-medium px-3 py-2 hover:bg-zinc-700 transition-colors shadow-xs"
                title="Abrir panel CRM y analítica en tiempo real"
              >
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Panel CRM</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
