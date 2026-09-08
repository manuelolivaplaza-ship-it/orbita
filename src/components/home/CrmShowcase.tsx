import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ExternalLink,
  ShieldCheck,
  MessageCircle,
  Package,
  Maximize2,
} from 'lucide-react';
import catalogo from 'virtual:propuestas-catalogo';
import { CrmWorkspace } from '../crm/CrmWorkspace';

export const CrmShowcase: React.FC = () => {
  const [currentSlug, setCurrentSlug] = useState('dentista-b-oscuro-premium');

  const currentProposal = useMemo(() => {
    return catalogo.find((p) => p.slug === currentSlug) || catalogo[0];
  }, [currentSlug]);

  return (
    <section id="crm-showcase" className="relative z-10 overflow-x-clip bg-[#F7F8FC] px-4 py-16 sm:px-6 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[46rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.10) 0%, rgba(139,92,246,0.06) 45%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[88rem]">
        <div className="mb-10 grid items-end gap-8 sm:mb-14 md:grid-cols-2 md:gap-16">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-700 shadow-2xs">
              <Sparkles className="h-3.5 w-3.5 text-zinc-900" />
              <span>Panel de administración · Incluido</span>
            </div>
            <h2
              className="text-[1.85rem] font-medium leading-[1.08] tracking-tight text-[#0B0B12] sm:text-5xl lg:text-6xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              Tu web no es un folleto.
              <br />
              Viene con panel de control.
            </h2>
          </div>

          <div>
            <p className="mb-5 max-w-md text-base font-normal leading-snug text-zinc-600 sm:text-xl">
              Cada propuesta incluye su propio admin: catálogo (precios, stock, qué se ve en la web), prospectos, agenda, pedidos y WhatsApp. Sin HubSpot ni cuota extra.
            </p>
            <div className="flex flex-col items-stretch gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <Link
                to={`/crm/${currentProposal.slug}`}
                target="_blank"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0B0B12] px-5 py-2.5 text-sm font-medium text-white shadow-xs transition-colors hover:bg-zinc-800"
              >
                <span>Abrir panel a pantalla completa</span>
                <Maximize2 className="h-4 w-4 text-zinc-300" />
              </Link>
              <Link
                to={`/propuesta/${currentProposal.slug}`}
                target="_blank"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-2xs hover:bg-zinc-50"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Ver el sitio público</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="isolate max-w-full overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-[0_28px_80px_-24px_rgba(15,23,42,0.12)] sm:rounded-3xl">
          <p className="border-b border-zinc-100 bg-zinc-50 px-4 py-2 text-center text-[11px] text-zinc-500 sm:hidden">
            Panel real · usa las pestañas de abajo
          </p>
          <div className="relative h-[min(70dvh,560px)] w-full min-w-0 max-w-full overflow-hidden overscroll-x-contain sm:h-[820px]">
            <CrmWorkspace
              key={currentProposal.slug}
              slug={currentProposal.slug}
              brand={currentProposal.brand}
              sector={currentProposal.sector}
              description={currentProposal.description}
              compact
              onSelectCompany={setCurrentSlug}
              initialSection="catalog"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 sm:gap-8">
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_12px_32px_-16px_rgba(15,23,42,0.08)] sm:p-7">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-900">
              <Package className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold tracking-tight text-[#0B0B12]">Catálogo que manda la web</h3>
            <p className="text-sm leading-relaxed text-zinc-600">
              Publicas un tratamiento, un auto o un SKU y aparece en el sitio. Ocultas el precio, bajas el stock o lo dejas en borrador sin tocar código.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_12px_32px_-16px_rgba(15,23,42,0.08)] sm:p-7">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200/60 bg-emerald-50 text-emerald-600">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold tracking-tight text-[#0B0B12]">Prospecto → WhatsApp</h3>
            <p className="text-sm leading-relaxed text-zinc-600">
              El formulario cae en la bandeja, puedes moverlo en el pipeline y abrir WhatsApp con el mensaje armado. Cero Excel.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_12px_32px_-16px_rgba(15,23,42,0.08)] sm:p-7">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-900">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold tracking-tight text-[#0B0B12]">Sin suscripción de CRM</h3>
            <p className="text-sm leading-relaxed text-zinc-600">
              El panel corre en la misma arquitectura de tu web. Agenda, pedidos, equipo y ajustes incluidos — no es un add-on de 50 USD/mes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
