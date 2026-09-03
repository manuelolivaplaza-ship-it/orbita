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
          <span className="figura-marca">SERENA</span>
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
      aria-label="Mapa esquemático de SERENA DENTAL: Av. Irarrázaval 3450, of. 12, Ñuñoa, Santiago."
    >
      <g stroke="var(--linea)" strokeWidth="1.5" fill="none">
        <path d="M60 0 V320" />
        <path d="M150 0 V320" />
        <path d="M330 0 V320" />
        <path d="M420 0 V320" />
        <path d="M0 60 H480" />
        <path d="M0 240 H480" />
        <path d="M0 130 L180 320" />
      </g>
      <path
        d="M0 150 C 140 144, 300 138, 480 132"
        stroke="var(--azul-clinico)"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="248" cy="140" r="7.5" fill="var(--papel)" stroke="var(--azul-clinico)" strokeWidth="2.5" />
      <circle cx="248" cy="140" r="3" fill="var(--azul-clinico)" />
      <text x="268" y="132" className="mapa-texto mapa-texto--fuerte">
        Av. Irarrázaval 3450, of. 12
      </text>
      <text x="268" y="152" className="mapa-texto">
        Ñuñoa · Santiago
      </text>
    </svg>
  );
}
