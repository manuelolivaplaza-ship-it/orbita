import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import type { CaseStudy } from '../../data/cases';
import { getPreviewPath } from '../../data/cases';
import { PreviewHeroShot } from './PreviewHeroShot';

interface CaseCardProps {
  caseStudy: CaseStudy;
  variant?: 'default' | 'wide' | 'tall';
}

/**
 * Card de portfolio nítida: captura real + marco browser, sin difuminado de color.
 */
export const CaseCard: React.FC<CaseCardProps> = ({ caseStudy, variant = 'default' }) => {
  const heightClass =
    variant === 'wide'
      ? 'min-h-[22rem] md:min-h-[28rem]'
      : variant === 'tall'
        ? 'min-h-[26rem] md:min-h-[32rem]'
        : 'min-h-[22rem] md:min-h-[26rem]';

  const primaryMetric = caseStudy.metrics[0];

  return (
    <Link
      to={`/creaciones/${caseStudy.slug}`}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-sm hover:shadow-lg hover:border-zinc-300 transition-all duration-300 ${heightClass} ${
        variant === 'wide' ? 'md:col-span-2' : ''
      }`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-100 bg-zinc-50 shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <div className="ml-2 flex-1 min-w-0">
          <div className="h-6 rounded-md bg-white border border-zinc-200/90 px-3 flex items-center max-w-full">
            <span className="text-[11px] text-zinc-500 truncate font-medium">
              {caseStudy.url?.replace(/^https?:\/\//, '') ?? caseStudy.name.toLowerCase()}
            </span>
          </div>
        </div>
      </div>

      <div className="relative flex-1 min-h-0 bg-zinc-100 overflow-hidden">
        {caseStudy.kind === 'preview' && caseStudy.previewSlug ? (
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
            <PreviewHeroShot
              src={`${getPreviewPath(caseStudy, true)}&card=1`}
              fallbackImage={caseStudy.cover}
              name={caseStudy.name}
            />
          </div>
        ) : (
          <img
            src={caseStudy.cover}
            alt={`Captura de ${caseStudy.name}`}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
        )}
        {/* Scrim solo abajo para legibilidad del texto — sin tinte de color */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0B0B12]/85 via-[#0B0B12]/35 to-transparent pointer-events-none" />

        <div className="absolute top-4 left-4 right-4 z-10 flex items-start justify-between gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-700 bg-white/95 border border-zinc-200/80 px-3 py-1 rounded-full shadow-sm">
            {caseStudy.kind === 'live' ? 'En vivo' : 'Preview'} · {caseStudy.industry}
          </span>
          {primaryMetric && (
            <span className="text-[11px] font-semibold text-zinc-700 bg-white/95 border border-zinc-200/80 px-3 py-1 rounded-full shadow-sm">
              {primaryMetric.value} · {primaryMetric.label}
            </span>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-1.5">
            {caseStudy.name}
          </h3>
          <p className="text-white/80 text-sm leading-relaxed line-clamp-2 mb-3 max-w-md">
            {caseStudy.tagline}
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white group-hover:gap-2.5 transition-all">
            {caseStudy.kind === 'preview' ? 'Recorrer el sitio' : 'Ver caso'}
            <ArrowUpRight className="w-4 h-4 text-zinc-300" />
          </span>
        </div>
      </div>
    </Link>
  );
};

/** Variante compacta para listados (opcional) */
export const CaseCardMeta: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => (
  <a
    href={caseStudy.url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 text-sm text-zinc-600 hover:text-[#0B0B12]"
  >
    Visitar sitio
    <ExternalLink className="w-3.5 h-3.5" />
  </a>
);
