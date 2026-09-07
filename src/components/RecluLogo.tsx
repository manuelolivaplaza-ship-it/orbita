import React from 'react';

interface RecluLogoProps {
  className?: string;
  wordmarkClassName?: string;
}

/** Marca: R geométrica simple + wordmark en Outfit. */
export const RecluLogo: React.FC<RecluLogoProps> = ({
  className = '',
  wordmarkClassName = 'text-[#0B0B12]',
}) => {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        aria-hidden
        className="grid h-7 w-7 shrink-0 place-items-center rounded-[7px] bg-[#0B0B12] text-[13px] font-semibold leading-none text-white"
        style={{ fontFamily: 'Outfit, Inter, system-ui, sans-serif', letterSpacing: '-0.04em' }}
      >
        R
      </span>
      <span
        className={`text-[1.2rem] font-medium leading-none tracking-tight ${wordmarkClassName}`}
        style={{ fontFamily: 'Outfit, Inter, system-ui, sans-serif' }}
      >
        reclu
      </span>
    </span>
  );
};
