import { useEffect, useState } from 'react';

/** Activa animaciones gateadas tras montar React y observa los .reveal. */
export function useRevealOnScroll(): void {
  useEffect(() => {
    document.documentElement.classList.add('js');
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export interface ScrollUI {
  progreso: number;
  oculto: boolean;
  pasadoHero: boolean;
}

/** Barra de progreso 2px, nav hide-down/show-up y umbral para la CTA fija móvil. */
export function useScrollUI(): ScrollUI {
  const [progreso, setProgreso] = useState(0);
  const [oculto, setOculto] = useState(false);
  const [pasadoHero, setPasadoHero] = useState(false);

  useEffect(() => {
    let prev = window.scrollY;
    let raf = 0;

    const medir = () => {
      raf = 0;
      const y = window.scrollY;
      const alto = document.documentElement.scrollHeight - window.innerHeight;
      setProgreso(alto > 0 ? Math.min(1, y / alto) : 0);
      setPasadoHero(y > 520);
      const d = y - prev;
      if (Math.abs(d) > 6) {
        setOculto(d > 0 && y > 180);
        prev = y;
      }
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(medir);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    medir();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return { progreso, oculto, pasadoHero };
}
