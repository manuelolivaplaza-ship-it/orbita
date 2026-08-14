import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cases } from '../data/cases';
import { CaseCard } from '../components/cases/CaseCard';
import { PageMeta } from '../components/PageMeta';
import type { LayoutOutletContext } from '../layouts/MainLayout';

export default function CreacionesPage() {
  const { onOpenQuoteModal } = useOutletContext<LayoutOutletContext>();

  return (
    <>
      <PageMeta
        title="Creaciones | Órbita"
        description="Casos de éxito y sitios creados por Órbita. Creaciones seleccionadas: landings y sitios que convierten."
      />

      <section className="relative z-10 px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-[88rem] mx-auto">
          <div className="max-w-3xl">
            <p className="text-[#6B7280] font-semibold text-xs uppercase tracking-widest mb-4">
              Portfolio
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#0B0B12] leading-[0.95] mb-6"
              style={{ letterSpacing: '-0.045em' }}
            >
              Creaciones.
            </h1>
            <p className="text-zinc-600 text-lg sm:text-xl max-w-xl leading-relaxed">
              Proyectos en producción y demos que puedes recorrer: entra a un caso y navega el sitio como lo haría un cliente.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-24 sm:pb-28">
        <div className="max-w-[88rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {cases.map((c) => (
              <CaseCard key={c.slug} caseStudy={c} variant="tall" />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-28">
        <div className="max-w-[88rem] mx-auto">
          <div className="rounded-3xl bg-[#0B0B12] text-white px-8 sm:px-12 py-14 sm:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#6B7280]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-[#A1A1AA]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-3" style={{ letterSpacing: '-0.03em' }}>
                ¿Tu marca es la siguiente órbita?
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
