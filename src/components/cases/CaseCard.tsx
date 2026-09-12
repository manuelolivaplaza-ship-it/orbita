import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import type { CaseStudy } from '../../data/cases';
import { CoverImage } from '../CoverImage';

interface CaseCardProps {
  caseStudy: CaseStudy;
  variant?: 'default' | 'wide' | 'tall';
}

function displayHost(url?: string) {
  if (!url) return null;
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

/**
 * Card de creaciones: captura del sitio, sin marco de navegador.
 * Marca y ficha van debajo, igual que la galería de propuestas.
 */
export const CaseCard: React.FC<CaseCardProps> = ({ caseStudy, variant = 'default' }) => {
  const host = displayHost(caseStudy.url);
  const kindLabel = caseStudy.kind === 'live' ? 'En producción' : 'Preview';
  const accessibleName = [caseStudy.name, kindLabel, caseStudy.industry, caseStudy.tagline, host]
    .filter(Boolean)
    .join(' · ');

  return (
    <article
      className={`galeria-card group relative flex flex-col ${
        variant === 'wide' ? 'md:col-span-2' : ''
      }`}
    >
      <Link
        to={`/creaciones/${caseStudy.slug}`}
        aria-label={accessibleName}
        className="absolute inset-0 z-10 rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-[#6B7280] focus-visible:ring-offset-2"
      />
      <div className="pointer-events-none">
        <div
          className={`galeria-shot relative overflow-hidden bg-zinc-100 ${
            variant === 'wide' ? 'aspect-[16/10] md:aspect-[2/1]' : 'aspect-[16/10]'
          }`}
        >
          <div className="absolute inset-0 origin-top-left transition-transform duration-700 ease-out group-hover:scale-[1.06]">
            <CoverImage
              src={caseStudy.cover}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top"
              width={1440}
              height={900}
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-4 flex items-start justify-between gap-4 sm:mt-5">
          <div className="min-w-0">
            <p className="flex flex-wrap items-center gap-x-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
              <span>{caseStudy.kind === 'live' ? 'En producción' : 'Preview'}</span>
              <span className="text-zinc-300" aria-hidden>
                ·
              </span>
              <span>{caseStudy.industry}</span>
            </p>
            <h3
              className="mt-1.5 text-lg font-medium tracking-tight text-[#0B0B12] sm:text-xl"
              style={{ letterSpacing: '-0.03em' }}
            >
              {caseStudy.name}
            </h3>
            <p className="mt-1.5 line-clamp-2 max-w-md text-sm leading-relaxed text-zinc-600">
              {caseStudy.tagline}
            </p>
            {host && (
              <p className="mt-2 text-sm text-zinc-600">{host}</p>
            )}
          </div>

          <span
            className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200/90 bg-white text-[#0B0B12] shadow-sm transition-all duration-300 group-hover:border-[#0B0B12] group-hover:bg-[#0B0B12] group-hover:text-white"
            aria-hidden
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
};

export const CaseCardMeta: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => (
  <a
    href={caseStudy.url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 text-sm text-zinc-600 hover:text-[#0B0B12]"
  >
    Visitar sitio
    <ExternalLink className="h-3.5 w-3.5" />
  </a>
);
