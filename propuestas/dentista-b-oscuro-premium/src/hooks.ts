import { useEffect, useRef, useState, type RefObject } from 'react';

export interface ScrollState {
  progress: number;
  hidden: boolean;
  compact: boolean;
  pastHero: boolean;
}

/* Progreso de lectura (barra 2px) + nav hide-down/show-up + compacta + past-hero */
export function useScrollState(): ScrollState {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, y / max) : 0);
        setHidden(y > 140 && y > last);
        setCompact(y > 40);
        setPastHero(y > window.innerHeight * 0.85);
        last = y;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return { progress, hidden, compact, pastHero };
}

/* Revelado al entrar en viewport: [data-reveal] -> .in */
export function useRevealObserver(): void {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* Cursor personalizado: punto celeste con lerp; se agranda sobre links.
   Desactivado en touch y prefers-reduced-motion. */
export function useCursor(ref: RefObject<HTMLDivElement | null>): void {
  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced || !ref.current) return;

    const el = ref.current;
    document.documentElement.classList.add('has-cursor');
    let tx = -100;
    let ty = -100;
    let x = -100;
    let y = -100;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      el.classList.add('cursor--on');
      const t = e.target as HTMLElement | null;
      const interactive = t?.closest('a, button, [role="button"]');
      el.classList.toggle('cursor--link', Boolean(interactive));
    };
    const onLeave = () => el.classList.remove('cursor--on');
    const loop = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    el.style.transform = 'translate(-100px, -100px)';
    document.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(loop);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove('has-cursor');
    };
  }, [ref]);
}

/* Count-up 1.2s al entrar en viewport; respeta prefers-reduced-motion.
   Pasa el ref del elemento ancla (el número debe estar visible para partir). */
export function useCountUp(ref: RefObject<HTMLElement | null>, value: number, duration = 1200): number {
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(value * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, value, duration]);

  return display;
}
