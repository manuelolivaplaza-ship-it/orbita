import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getFeaturedCases } from '../data/cases';
import { CaseCard } from '../components/cases/CaseCard';
import { PageMeta } from '../components/PageMeta';
import type { LayoutOutletContext } from '../layouts/MainLayout';

export default function CreacionesPage() {
  const { onOpenQuoteModal } = useOutletContext<LayoutOutletContext>();
  const featured = getFeaturedCases();

  return (
    <>
      <PageMeta
        title="Creaciones | Reclu"
        description="Casos reales en producción: ProgramBI (web + CRM / leads a WhatsApp) y Maverlang. Las demos de rubro están en la galería."
      />

      <section className="relative z-10 px-4 pt-28 pb-12 sm:px-6 sm:pt-32 sm:pb-20">
        <div className="max-w-[88rem] mx-auto">
          <div className="max-w-3xl">
            <p className="text-[#6B7280] font-semibold text-xs uppercase tracking-widest mb-4">
              Casos reales
            </p>
            <h1
              className="mb-6 text-4xl font-medium leading-[0.95] tracking-tight text-[#0B0B12] sm:text-6xl lg:text-7xl"
              style={{ letterSpacing: '-0.045em' }}
            >
              Creaciones.
            </h1>
            <p className="text-zinc-600 text-lg sm:text-xl max-w-xl leading-relaxed">
              Sitios de clientes en producción: ProgramBI y Maverlang. Las demos de rubro están en
              la galería.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="max-w-[88rem] mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {featured.map((c) => (
              <CaseCard key={c.slug} caseStudy={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-28 sm:px-6">
        <div className="max-w-[88rem] mx-auto">
          <div className="relative flex flex-col gap-8 overflow-hidden rounded-3xl bg-[#0B0B12] px-5 py-10 text-white sm:px-12 sm:py-16 md:flex-row md:items-center md:justify-between">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#6B7280]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-[#A1A1AA]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-3" style={{ letterSpacing: '-0.03em' }}>
                ¿Listo para potenciar tu marca con Reclu?
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                Cuéntanos qué vendes y a quién. Preparamos una propuesta clara, sin relleno.
              </p>
            </div>
            <button
              onClick={() => onOpenQuoteModal()}
              className="relative z-10 inline-flex items-center gap-3 bg-white text-[#0B0B12] text-sm font-medium pl-6 pr-1.5 py-1.5 rounded-full hover:bg-zinc-100 transition-colors shrink-0"
            >
              <span>Pedir presupuesto</span>
              <span className="rounded-full bg-[#0B0B12] p-2">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
