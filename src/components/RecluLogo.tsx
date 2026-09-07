import React from 'react';

interface RecluLogoProps {
  className?: string;
  wordmarkClassName?: string;
}

/** Wordmark Reclu en Outfit, sin imagotipo. */
export const RecluLogo: React.FC<RecluLogoProps> = ({
  className = '',
  wordmarkClassName = 'text-[#0B0B12]',
}) => {
  return (
    <span
      className={`text-[1.2rem] font-medium leading-none tracking-tight ${wordmarkClassName} ${className}`}
      style={{ fontFamily: 'Outfit, Inter, system-ui, sans-serif' }}
    >
      reclu
    </span>
  );
};
