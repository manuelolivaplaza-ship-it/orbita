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
}: {
  src: string;
  name: string;
  fallbackImage?: string;
  fallbackNode?: React.ReactNode;
  shotWidth?: number;
  shotHeight?: number;
  iframeSandbox?: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / shotWidth);
    });
    ro.observe(el);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { rootMargin: '240px' },
    );
    io.observe(el);

    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, [shotWidth]);

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
          loading="lazy"
          onLoad={() => setReady(true)}
          sandbox={iframeSandbox}
          referrerPolicy="no-referrer"
          className="pointer-events-none border-0 absolute top-0 left-0"
          style={{
            width: shotWidth,
            height: shotHeight,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        />
      )}
    </div>
  );
}
