import React from 'react';
import { Link, Navigate, useOutletContext, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { getAdjacentCases, getCaseBySlug } from '../data/cases';
import { PageMeta } from '../components/PageMeta';
import { LivePreview } from '../components/cases/LivePreview';
import type { LayoutOutletContext } from '../layouts/MainLayout';

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const { onOpenQuoteModal } = useOutletContext<LayoutOutletContext>();
  const caseStudy = slug ? getCaseBySlug(slug) : undefined;

  if (!caseStudy) {
    return <Navigate to="/creaciones" replace />;
  }

  const { next } = getAdjacentCases(caseStudy.slug);

  return (
    <>
      <PageMeta
        title={`${caseStudy.name} | Creaciones Órbita`}
        description={caseStudy.summary}
      />

      {/* Hero: captura nítida en marco, sin tinte de color */}
      <section className="relative z-10 px-6 pt-28 sm:pt-32 pb-10 bg-[#F7F8FC]">
        <div className="max-w-[88rem] mx-auto">
          <Link
            to="/creaciones"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-[#0B0B12] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Todas las creaciones
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-600 bg-white border border-zinc-200 px-3 py-1 rounded-full">
              {caseStudy.industry}
            </span>
            <span
              className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                caseStudy.kind === 'live'
                  ? 'text-emerald-800 bg-emerald-50 border border-emerald-200'
                  : 'text-[#0B0B12] bg-white border border-zinc-200'
              }`}
            >
              {caseStudy.kind === 'live' ? 'En producción' : 'Demo interactiva'}
            </span>
            {caseStudy.year && (
              <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 px-2">
                {caseStudy.year}
              </span>
            )}
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0B0B12] max-w-3xl leading-[1.05] mb-3"
            style={{ letterSpacing: '-0.04em' }}
          >
            {caseStudy.name}
          </h1>
          <p className="text-zinc-600 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
            {caseStudy.tagline}
          </p>

          {caseStudy.kind === 'live' && (
            <div className="rounded-2xl overflow-hidden border border-zinc-200/90 bg-white shadow-sm">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-100 bg-zinc-50">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                <div className="ml-2 flex-1 h-6 rounded-md bg-white border border-zinc-200/90 px-3 flex items-center max-w-md">
                  <span className="text-[11px] text-zinc-500 truncate font-medium">
                    {caseStudy.url?.replace(/^https?:\/\//, '') ?? caseStudy.name}
                  </span>
                </div>
              </div>
              <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-zinc-100">
                <img
                  src={caseStudy.cover}
                  alt={`Captura de ${caseStudy.name}`}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {caseStudy.kind === 'preview' && <LivePreview caseStudy={caseStudy} />}

      {/* Meta + summary */}
      <section className="relative z-10 bg-white px-6 py-16 sm:py-20 border-b border-zinc-200/80">
        <div className="max-w-[88rem] mx-auto grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="text-zinc-700 text-lg leading-relaxed">{caseStudy.summary}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {caseStudy.services.map((s) => (
                <span
                  key={s}
                  className="text-xs font-medium text-zinc-600 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4 lg:items-end">
            {caseStudy.url && (
              <a
                href={caseStudy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#0B0B12] hover:text-[#6B7280] transition-colors"
              >
                Visitar sitio en producción
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {caseStudy.previewSlug && (
              <Link
                to={`/preview/${caseStudy.previewSlug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#0B0B12] hover:text-[#6B7280] transition-colors"
              >
                Abrir sitio de ejemplo
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            <button
              onClick={() => onOpenQuoteModal('Estación')}
              className="inline-flex items-center gap-3 bg-[#0B0B12] text-white text-sm font-medium pl-6 pr-1.5 py-1.5 rounded-full hover:bg-zinc-800 transition-colors w-fit"
            >
              <span>Proyecto similar</span>
              <span className="rounded-full bg-white p-2">
                <ArrowRight className="w-4 h-4 text-[#0B0B12]" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Challenge / Solution / Result */}
      <section className="relative z-10 bg-[#F7F8FC] px-6 py-20 sm:py-24">
        <div className="max-w-[88rem] mx-auto grid md:grid-cols-3 gap-6">
          {[
            { label: 'Desafío', body: caseStudy.challenge },
            { label: 'Solución', body: caseStudy.solution },
            { label: 'Resultado', body: caseStudy.result },
          ].map((block) => (
            <div
              key={block.label}
              className="bg-white rounded-2xl border border-zinc-200/80 p-7 sm:p-8 shadow-xs"
            >
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6B7280] mb-4 block">
                {block.label}
              </span>
              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">{block.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section className="relative z-10 bg-white px-6 py-16 border-y border-zinc-200/80">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {caseStudy.metrics.map((m) => (
            <div key={m.label} className="text-center sm:text-left">
              <div className="text-4xl sm:text-5xl font-medium tracking-tight text-[#0B0B12] mb-1">
                {m.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      {caseStudy.gallery.length > 0 && (
        <section className="relative z-10 bg-[#F7F8FC] px-6 py-20 sm:py-24">
          <div className="max-w-[88rem] mx-auto">
            <h2
              className="text-3xl sm:text-4xl font-medium tracking-tight text-[#0B0B12] mb-10"
              style={{ letterSpacing: '-0.03em' }}
            >
              En detalle
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {caseStudy.gallery.map((src, i) => (
                <div
                  key={src}
                  className="rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md bg-zinc-100 aspect-[16/10]"
                >
                  <img
                    src={src}
                    alt={`${caseStudy.name} captura ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next case + CTA */}
      <section className="relative z-10 bg-white px-6 py-20 sm:py-24">
        <div className="max-w-[88rem] mx-auto flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
          {next && next.slug !== caseStudy.slug && (
            <Link
              to={`/creaciones/${next.slug}`}
              className="group flex-1 rounded-2xl border border-zinc-200/80 bg-[#F7F8FC] p-7 hover:border-[#6B7280]/35 transition-colors"
            >
              <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                Siguiente caso
              </span>
              <div className="mt-2 flex items-center justify-between gap-4">
                <span className="text-2xl font-medium tracking-tight text-[#0B0B12] group-hover:text-[#6B7280] transition-colors">
                  {next.name}
                </span>
                <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-[#6B7280] transition-colors" />
              </div>
            </Link>
          )}
          <button
            onClick={() => onOpenQuoteModal()}
            className="inline-flex items-center justify-center gap-2 bg-[#0B0B12] text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-zinc-800 transition-colors shrink-0"
          >
            Pedir presupuesto
            <ArrowRight className="w-4 h-4 text-zinc-300" />
          </button>
        </div>
      </section>
    </>
  );
}
