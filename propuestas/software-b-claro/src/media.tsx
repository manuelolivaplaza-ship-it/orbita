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
          <span className="figura-marca">BALIZA</span>
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
      aria-label="Mapa esquemático de la oficina BALIZA: Av. Providencia 1208, of. 42, Providencia, Santiago."
    >
      <g stroke="var(--linea)" strokeWidth="1.5" fill="none">
        <path d="M70 0 V320" />
        <path d="M160 0 V320" />
        <path d="M330 0 V320" />
        <path d="M420 0 V320" />
        <path d="M0 60 H480" />
        <path d="M0 230 H480" />
        <path d="M250 0 L480 130" />
        <path d="M0 190 L230 320" />
      </g>
      <path
        d="M0 145 C 120 138, 260 128, 480 118"
        stroke="var(--azul-acero)"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="248" cy="129" r="7.5" fill="var(--papel)" stroke="var(--azul-acero)" strokeWidth="2.5" />
      <circle cx="248" cy="129" r="3" fill="var(--azul-acero)" />
      <text x="268" y="122" className="mapa-texto mapa-texto--fuerte">
        Av. Providencia 1208, of. 42
      </text>
      <text x="268" y="142" className="mapa-texto">
        Providencia · Santiago
      </text>
    </svg>
  );
}
