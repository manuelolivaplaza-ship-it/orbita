import React, { useEffect, useRef, useState } from 'react';

/**
 * Captura "en vivo": iframe real escalado al ancho del contenedor, con carga
 * perezosa al entrar en viewport (IntersectionObserver). El fallback puede ser
 * una imagen (casos) o un skeleton con clase propia (galería de propuestas).
 */
export function PreviewHeroShot({
  src,
  name,
  fallbackImage,
  fallbackNode,
  shotWidth = 1440,
  shotHeight = 980,
  iframeSandbox,
  eager = false,
  scale: scaleProp,
}: {
  src: string;
  name: string;
  fallbackImage?: string;
  fallbackNode?: React.ReactNode;
  shotWidth?: number;
  shotHeight?: number;
  iframeSandbox?: string;
  /** Carga el iframe de inmediato, sin esperar IntersectionObserver. */
  eager?: boolean;
  /** Si viene de afuera, no hace falta ResizeObserver. */
  scale?: number;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [scaleState, setScaleState] = useState(0.4);
  const [active, setActive] = useState(eager);
  const [ready, setReady] = useState(false);
  /** Un poco más grande que el marco: recorta la scrollbar nativa del iframe. */
  const CLIP = 1.045;
  const scale = (scaleProp ?? scaleState) * CLIP;

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    let ro: ResizeObserver | undefined;
    if (scaleProp == null) {
      ro = new ResizeObserver(([entry]) => {
        setScaleState(entry.contentRect.width / shotWidth);
      });
      ro.observe(el);
    }

    if (eager) {
      setActive(true);
      return () => ro?.disconnect();
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { rootMargin: '240px' },
    );
    io.observe(el);

    return () => {
      ro?.disconnect();
      io.disconnect();
    };
  }, [shotWidth, eager, scaleProp]);

  return (
    <div ref={hostRef} className="absolute inset-0 overflow-hidden bg-zinc-100">
      {fallbackImage ? (
        <img
          src={fallbackImage}
          alt=""
          aria-hidden
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
            ready ? 'opacity-0' : 'opacity-100'
          }`}
        />
      ) : (
        <div
          aria-hidden
          className={`absolute inset-0 transition-opacity duration-500 ${ready ? 'opacity-0' : 'opacity-100'}`}
        >
          {fallbackNode}
        </div>
      )}
      {active && (
        <iframe
          src={src}
          title={`Hero de ${name}`}
          tabIndex={-1}
          loading={eager ? 'eager' : 'lazy'}
          onLoad={() => setReady(true)}
          sandbox={iframeSandbox}
          referrerPolicy="no-referrer"
          scrolling="no"
          className="pointer-events-none absolute top-0 left-0 border-0"
          style={{
            width: shotWidth,
            height: shotHeight,
            overflow: 'hidden',
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        />
      )}
    </div>
  );
}
