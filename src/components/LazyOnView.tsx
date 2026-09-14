import { type ReactNode, useEffect, useRef, useState } from 'react';

/** Monta children al acercarse al viewport. Evita JS/media pesado en el primer paint. */
export function LazyOnView({
  children,
  rootMargin = '480px',
  minHeight,
}: {
  children: ReactNode;
  rootMargin?: string;
  minHeight?: number | string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={!show && minHeight != null ? { minHeight } : undefined}>
      {show ? children : null}
    </div>
  );
}
