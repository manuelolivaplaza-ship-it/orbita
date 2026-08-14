import type { ReactNode } from 'react';

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
  pill?: boolean;
  tone?: 'dark' | 'light';
}

export function LiquidGlassFilter() {
  return (
    <svg width="0" height="0" className="absolute overflow-hidden" aria-hidden>
      <filter id="orbita-liquid" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.011 0.016" numOctaves="2" seed="7" result="noise" />
        <feGaussianBlur in="noise" stdDeviation="1.1" result="soft" />
        <feDisplacementMap in="SourceGraphic" in2="soft" scale="16" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}

export function LiquidGlass({ children, className = '', pill = false, tone = 'dark' }: LiquidGlassProps) {
  return (
    <div
      className={`liquid-glass ${pill ? 'liquid-glass--pill' : ''} ${tone === 'light' ? 'liquid-glass--light' : ''} ${className}`}
    >
      <span className="liquid-glass__edge" aria-hidden />
      <span className="liquid-glass__shine" aria-hidden />
      <div className="liquid-glass__content">{children}</div>
    </div>
  );
}
