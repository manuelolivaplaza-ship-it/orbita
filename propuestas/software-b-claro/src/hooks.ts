import { useEffect, useRef, useState } from 'react';

export function useReducedMotion(): boolean {
  const [reducido, setReducido] = useState<boolean>(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const actualizar = () => setReducido(mq.matches);
    mq.addEventListener('change', actualizar);
    return () => mq.removeEventListener('change', actualizar);
  }, []);
  return reducido;
}

export function useInView<T extends Element>(limiar = 0.25, unaVez = true) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            setVisible(true);
            if (unaVez) obs.disconnect();
          } else if (!unaVez) {
            setVisible(false);
          }
        }
      },
      { threshold: limiar, rootMargin: '0px 0px -6% 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [limiar, unaVez]);
  return { ref, visible };
}

export function useCountUp(destino: number, activo: boolean, duracion = 1200): number {
  const reducido = useReducedMotion();
  const [valor, setValor] = useState(0);
  useEffect(() => {
    if (!activo) return;
    if (reducido) {
      setValor(destino);
      return;
    }
    let raf = 0;
    const inicio = performance.now();
    const paso = (t: number) => {
      const p = Math.min(1, (t - inicio) / duracion);
      const suavizado = 1 - Math.pow(1 - p, 3);
      setValor(Math.round(destino * suavizado));
      if (p < 1) raf = requestAnimationFrame(paso);
    };
    raf = requestAnimationFrame(paso);
    return () => cancelAnimationFrame(raf);
  }, [activo, destino, duracion, reducido]);
  return valor;
}

export function useNavScroll() {
  const [oculto, setOculto] = useState(false);
  const [compacto, setCompacto] = useState(false);
  useEffect(() => {
    let ultimaY = window.scrollY;
    let raf = 0;
    const medir = () => {
      raf = 0;
      const y = window.scrollY;
      setCompacto(y > 8);
      if (y > ultimaY + 6 && y > 220) setOculto(true);
      else if (y < ultimaY - 6 || y <= 220) setOculto(false);
      ultimaY = y;
    };
    const alDesplazar = () => {
      if (!raf) raf = requestAnimationFrame(medir);
    };
    window.addEventListener('scroll', alDesplazar, { passive: true });
    medir();
    return () => {
      window.removeEventListener('scroll', alDesplazar);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return { oculto, compacto };
}

export function useSeccionActiva(ids: string[]): string {
  const clave = ids.join('|');
  const [activa, setActiva] = useState(ids[0] ?? '');
  useEffect(() => {
    const lista = clave.split('|');
    if (!('IntersectionObserver' in window)) return;
    const razones = new Map<string, number>();
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) razones.set(e.target.id, e.intersectionRatio);
        let mejor = '';
        let max = 0;
        for (const [id, r] of razones) {
          if (r > max) {
            max = r;
            mejor = id;
          }
        }
        if (mejor) setActiva(mejor);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.05, 0.25, 0.5] },
    );
    for (const id of lista) {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, [clave]);
  return activa;
}

export function hayHover(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}
