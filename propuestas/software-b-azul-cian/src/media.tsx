import { useState } from 'react';

type Proporcion = '16 / 9' | '1 / 1' | '4 / 5';

interface PropsFigura {
  src: string;
  alt: string;
  proporcion?: Proporcion;
  caption?: string;
  prioridad?: boolean;
  className?: string;
}

export function Figura({ src, alt, proporcion = '16 / 9', caption, prioridad = false, className }: PropsFigura) {
  const [estado, setEstado] = useState<'espera' | 'lista' | 'fallo'>('espera');
  return (
    <figure className={`figura${className ? ` ${className}` : ''}`}>
      <div className="figura-marco" style={{ aspectRatio: proporcion }}>
        <div className="figura-respaldo" aria-hidden="true">
          <span className="figura-malla" />
          <span className="figura-marca">ALTIVA</span>
          <span className="figura-ref">{src.split('/').pop()}</span>
        </div>
        {estado !== 'fallo' && (
          <img
            src={src}
            alt={alt}
            loading={prioridad ? 'eager' : 'lazy'}
            decoding="async"
            className={estado === 'lista' ? 'figura-img figura-img--lista' : 'figura-img'}
            onLoad={() => setEstado('lista')}
            onError={() => setEstado('fallo')}
          />
        )}
      </div>
      {caption ? <figcaption className="figura-caption">{caption}</figcaption> : null}
    </figure>
  );
}

export function MapaLinea() {
  return (
    <svg
      className="mapa-linea"
      viewBox="0 0 480 320"
      role="img"
      aria-label="Mapa esquemático de la oficina de ALTIVA: Av. Apoquindo 4700, of. 21, Las Condes, Santiago."
    >
      <g stroke="var(--linea)" strokeWidth="1.5" fill="none">
        <path d="M80 0 V320" />
        <path d="M170 0 V320" />
        <path d="M340 0 V320" />
        <path d="M430 0 V320" />
        <path d="M0 70 H480" />
        <path d="M0 250 H480" />
        <path d="M0 160 L200 320" />
      </g>
      <path
        d="M0 150 C 130 142, 280 134, 480 124"
        stroke="var(--azul-cian)"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="252" cy="135" r="7.5" fill="var(--papel)" stroke="var(--azul-cian)" strokeWidth="2.5" />
      <circle cx="252" cy="135" r="3" fill="var(--azul-cian)" />
      <text x="272" y="128" className="mapa-texto mapa-texto--fuerte">
        Av. Apoquindo 4700, of. 21
      </text>
      <text x="272" y="148" className="mapa-texto">
        Las Condes · Santiago
      </text>
    </svg>
  );
}
