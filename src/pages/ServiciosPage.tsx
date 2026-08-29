import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '../data/services';
import { getFeaturedCases } from '../data/cases';
import { PLAN_SUMMARIES } from '../data/pricing';
import { CaseCard } from '../components/cases/CaseCard';
import { PageMeta } from '../components/PageMeta';
import type { LayoutOutletContext } from '../layouts/MainLayout';

export default function ServiciosPage() {
  const { onOpenQuoteModal } = useOutletContext<LayoutOutletContext>();
  const featured = getFeaturedCases().slice(0, 2);

  return (
    <>
      <PageMeta
        title="Servicios | Órbita"
        description="Landings de conversión, sitios multi-sección, rediseños y campañas. Productos digitales que venden."
      />

      {/* Hero */}
      <section className="relative z-10 px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-[88rem] mx-auto max-w-3xl">
          <p className="text-[#6B7280] font-semibold text-xs uppercase tracking-widest mb-4">
            Servicios
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#0B0B12] leading-[0.95] mb-6"
            style={{ letterSpacing: '-0.045em' }}
          >
            No plantillas.<br />
            Sistemas que venden.
          </h1>
          <p className="text-zinc-600 text-lg sm:text-xl leading-relaxed max-w-2xl">
            Cada entregable tiene un trabajo concreto: frenar el scroll, explicar la oferta y convertir la visita en un mensaje.
          </p>
        </div>
      </section>

      {/* Service list */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-[88rem] mx-auto space-y-5">
          {services.map((service, idx) => (
            <article
              key={service.id}
              className="grid lg:grid-cols-12 gap-8 rounded-3xl border border-zinc-200/80 bg-white p-7 sm:p-10 shadow-xs hover:border-[#6B7280]/25 transition-colors"
            >
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-zinc-500 tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-600 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded-full">
                    Plan {service.plan}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#0B0B12] mb-2">
                  {service.name}
                </h2>
                <p className="text-[#6B7280] text-sm font-medium mb-4">{service.tagline}</p>
                <p className="text-zinc-600 text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">
                  Ideal para
                </p>
                <p className="text-sm text-zinc-700 mb-6">{service.idealFor}</p>
                <button
                  onClick={() => onOpenQuoteModal(service.plan)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#0B0B12] hover:text-[#6B7280] transition-colors group"
                >
                  Pedir {service.plan}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
              <div className="lg:col-span-7">
                <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${service.accent} mb-6 opacity-90`} />
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
                  Qué incluye
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-zinc-700">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-zinc-100 text-[#6B7280] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Plan mapping */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-[88rem] mx-auto rounded-3xl border border-zinc-200/80 bg-[#F7F8FC] p-8 sm:p-12">
          <h2
            className="text-3xl font-medium tracking-tight text-[#0B0B12] mb-8"
            style={{ letterSpacing: '-0.03em' }}
          >
            Qué plan para qué necesidad
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {PLAN_SUMMARIES.map((row) => (
              <button
                key={row.plan}
                onClick={() => onOpenQuoteModal(row.plan)}
                className="text-left rounded-2xl bg-white border border-zinc-200/80 p-6 hover:border-[#6B7280]/40 hover:shadow-md transition-all"
              >
                <div className="text-lg font-medium text-[#0B0B12] mb-1">Plan {row.plan}</div>
                <div className="text-sm text-[#6B7280] font-medium mb-2">{row.price}</div>
                <div className="text-sm text-zinc-600">{row.for}</div>
              </button>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/#precios"
              className="text-sm font-medium text-zinc-600 hover:text-[#6B7280] transition-colors"
            >
              Ver detalle de precios en home →
            </Link>
          </div>
        </div>
      </section>

      {/* How it looks in practice */}
      <section className="relative z-10 px-6 pb-28">
        <div className="max-w-[88rem] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <h2
              className="text-3xl sm:text-4xl font-medium tracking-tight text-[#0B0B12]"
              style={{ letterSpacing: '-0.03em' }}
            >
              Cómo se ve en la práctica
            </h2>
            <Link
              to="/creaciones"
              className="text-sm font-medium text-[#0B0B12] hover:text-[#6B7280] transition-colors"
            >
              Ver todas las creaciones →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {featured.map((c) => (
              <CaseCard key={c.slug} caseStudy={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
