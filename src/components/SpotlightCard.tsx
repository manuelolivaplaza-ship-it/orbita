import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  /** 3D tilt intensity. 0 = sin tilt (recomendado en filas que se expanden) */
  tilt?: number;
  dark?: boolean;
};

type AsDiv = CommonProps & {
  as?: 'div';
  to?: never;
  onClick?: () => void;
};

type AsLink = CommonProps & {
  as: 'link';
  to: string;
  onClick?: never;
};

type SpotlightCardProps = AsDiv | AsLink;

/**
 * Card 3D con borde que sigue el cursor (spotlight negro).
 */
export const SpotlightCard: React.FC<SpotlightCardProps> = (props) => {
  const { children, className = '', tilt = 0, dark = false } = props;
  const ref = useRef<HTMLDivElement | HTMLAnchorElement>(null);
  const [active, setActive] = useState(false);

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / rect.width) * 2 - 1;
      const py = (y / rect.height) * 2 - 1;

      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
      el.style.setProperty('--rx', `${(-py * tilt).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${(px * tilt).toFixed(2)}deg`);
    },
    [tilt],
  );

  const handleEnter = () => setActive(true);
  const handleLeave = () => {
    setActive(false);
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--mx', '50%');
    el.style.setProperty('--my', '50%');
  };

  const useTilt = tilt > 0;

  const shellClass = [
    'spotlight-card',
    useTilt ? 'spotlight-card--tilt' : '',
    dark ? 'spotlight-card--dark' : '',
    active ? 'spotlight-card--active' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handlers = {
    onMouseMove: useTilt
      ? handleMove
      : (e: React.MouseEvent) => {
          const el = ref.current;
          if (!el) return;
          const rect = el.getBoundingClientRect();
          el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
          el.style.setProperty('--my', `${e.clientY - rect.top}px`);
        },
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
  };

  if (props.as === 'link') {
    return (
      <Link
        ref={ref as React.RefObject<HTMLAnchorElement>}
        to={props.to}
        className={shellClass}
        {...handlers}
      >
        <span className="spotlight-card__border" aria-hidden />
        <span className="spotlight-card__glare" aria-hidden />
        <span className="spotlight-card__body">{children}</span>
      </Link>
    );
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={shellClass}
      onClick={props.onClick}
      {...handlers}
    >
      <span className="spotlight-card__border" aria-hidden />
      <span className="spotlight-card__glare" aria-hidden />
      <span className="spotlight-card__body">{children}</span>
    </div>
  );
};
