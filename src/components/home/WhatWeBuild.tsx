import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '../../data/services';
import { SpotlightCard } from '../SpotlightCard';

/** Mini mockup: landing de una sola página / un CTA */
function MockLanding() {
  return (
    <div className="relative w-full aspect-[16/10] rounded-xl bg-[#0B0B12] overflow-hidden border border-white/10 shadow-inner">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-white/5">
        <span className="w-2 h-2 rounded-full bg-white/20" />
        <span className="w-2 h-2 rounded-full bg-white/20" />
        <span className="w-2 h-2 rounded-full bg-white/20" />
        <span className="ml-2 flex-1 h-1.5 rounded-full bg-white/10 max-w-[40%]" />
      </div>
      <div className="p-3 sm:p-4 h-[calc(100%-2rem)] flex flex-col gap-2">
        <div className="flex-1 rounded-lg bg-gradient-to-br from-[#6B7280]/50 to-[#A1A1AA]/30 relative overflow-hidden">
          <div className="absolute bottom-3 left-3 space-y-1.5 w-[55%]">
            <div className="h-2 w-full rounded bg-white/90" />
            <div className="h-1.5 w-2/3 rounded bg-white/50" />
            <div className="mt-2 h-5 w-16 rounded-full bg-white" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          <div className="h-6 rounded bg-white/10" />
          <div className="h-6 rounded bg-white/10" />
          <div className="h-6 rounded bg-[#6B7280]/40" />
        </div>
      </div>
    </div>
  );
}

function MockMulti() {
  return (
    <div className="relative w-full aspect-[16/10] flex items-end justify-center pb-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-lg border border-zinc-200 bg-white shadow-md overflow-hidden"
          style={{
            width: `${78 - i * 8}%`,
            height: `${72 - i * 6}%`,
            bottom: `${i * 6}%`,
            left: `${8 + i * 6}%`,
            zIndex: 3 - i,
            opacity: 1 - i * 0.12,
          }}
        >
          <div className="h-1.5 bg-zinc-200" />
          <div className="p-2 space-y-1">
            <div className="h-1.5 w-1/2 rounded bg-zinc-200" />
            <div className="h-8 rounded bg-zinc-100" />
            <div className="h-1 w-full rounded bg-zinc-100" />
            <div className="h-1 w-3/4 rounded bg-zinc-100" />
          </div>
        </div>
      ))}
    </div>
  );
}

function MockRedesign() {
  return (
    <div className="relative w-full aspect-[16/10] grid grid-cols-2 gap-2">
      <div className="rounded-lg border border-zinc-200 bg-zinc-100 p-2 flex flex-col gap-1.5 opacity-70">
        <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">Antes</span>
        <div className="h-2 w-full rounded bg-zinc-300" />
        <div className="flex-1 rounded bg-zinc-200" />
        <div className="h-1.5 w-1/2 rounded bg-zinc-300" />
      </div>
      <div className="rounded-lg border border-zinc-300 bg-[#0B0B12] p-2 flex flex-col gap-1.5 shadow-md">
        <span className="text-[9px] font-bold uppercase tracking-wider text-white/70">Después</span>
        <div className="h-2 w-2/3 rounded bg-white/90" />
        <div className="flex-1 rounded bg-gradient-to-br from-zinc-700 to-zinc-900" />
        <div className="h-4 w-12 rounded-full bg-white" />
      </div>
    </div>
  );
}

function MockCampaign() {
  return (
    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-zinc-200 bg-zinc-50">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 mb-1">
          Campaña
        </div>
        <div className="h-2 w-24 rounded bg-[#0B0B12]/80 mb-1" />
        <div className="h-1.5 w-16 rounded bg-zinc-400/50 mb-3" />
        <div className="flex gap-1.5 mb-3">
          {['02', '14', '36'].map((n) => (
            <div
              key={n}
              className="w-8 h-8 rounded-md bg-white border border-zinc-200 shadow-xs flex items-center justify-center text-[10px] font-semibold text-[#0B0B12]"
            >
              {n}
            </div>
          ))}
        </div>
        <div className="h-5 w-20 rounded-full bg-[#0B0B12]" />
      </div>
    </div>
  );
}

const mocks: Record<string, React.FC> = {
  landing: MockLanding,
  multi: MockMulti,
  redesign: MockRedesign,
  campaign: MockCampaign,
};

export const WhatWeBuild: React.FC = () => {
  const preview = services.slice(0, 4);
  const [featured, ...rest] = preview;
  const FeaturedMock = mocks[featured.id] ?? MockLanding;

  return (
    <section id="que-creamos" className="bg-[#F7F8FC] px-6 py-24 sm:py-28 relative z-10">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-12 sm:mb-16 items-end">
          <div>
            <p className="text-[#6B7280] font-semibold text-xs uppercase tracking-widest mb-3">
              Qué creamos
            </p>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0B0B12] leading-[1.05]"
              style={{ letterSpacing: '-0.04em' }}
            >
              Productos digitales<br />que venden.
            </h2>
          </div>
          <div>
            <p className="text-lg sm:text-xl text-zinc-600 leading-snug font-normal mb-5 max-w-md">
              No son plantillas genéricas. Cada producto tiene un trabajo: frenar el scroll, explicar la oferta y convertir la visita en un mensaje.
            </p>
            <Link
              to="/servicios"
              className="inline-flex items-center gap-3 bg-[#0B0B12] text-white text-sm font-medium pl-6 pr-1.5 py-1.5 rounded-full hover:bg-zinc-800 transition-colors shadow-xs"
            >
              <span>Ver todos los servicios</span>
              <span className="rounded-full bg-white p-2">
                <ArrowRight className="w-4 h-4 text-[#0B0B12]" />
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5" style={{ perspective: '1200px' }}>
          {/* Featured */}
          <SpotlightCard
            as="link"
            to="/servicios"
            className="lg:col-span-7 min-h-[22rem] p-6 sm:p-8 md:p-10"
            tilt={6}
          >
            <div className="grid md:grid-cols-2 gap-8 h-full items-center">
              <div className="flex flex-col h-full justify-between order-2 md:order-1">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-700 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded-full">
                      Plan {featured.plan}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                      Producto estrella
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#0B0B12] mb-2">
                    {featured.name}
                  </h3>
                  <p className="text-zinc-800 text-sm font-medium mb-3">{featured.tagline}</p>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-5 max-w-sm">
                    {featured.description}
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 mb-2">
                    Ideal para
                  </p>
                  <p className="text-sm text-zinc-700 mb-5">{featured.idealFor}</p>
                </div>
                <ul className="space-y-2">
                  {featured.deliverables.slice(0, 3).map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-zinc-600">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-zinc-100 text-[#0B0B12] flex items-center justify-center shrink-0 border border-zinc-200">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <FeaturedMock />
              </div>
            </div>
          </SpotlightCard>

          {/* Side stack */}
          <div className="lg:col-span-5 flex flex-col gap-4 md:gap-5">
            {rest.map((service) => {
              const Mock = mocks[service.id] ?? MockLanding;
              return (
                <SpotlightCard
                  key={service.id}
                  as="link"
                  to="/servicios"
                  className="flex-1 min-h-[9.5rem] p-5 sm:p-6"
                  tilt={7}
                >
                  <div className="grid grid-cols-[1fr_7.5rem] sm:grid-cols-[1fr_9rem] gap-4 items-center h-full">
                    <div className="min-w-0">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full border border-zinc-200/80">
                        Plan {service.plan}
                      </span>
                      <h3 className="text-lg sm:text-xl font-medium tracking-tight text-[#0B0B12] mt-2 mb-1">
                        {service.name}
                      </h3>
                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {service.tagline}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-zinc-500">
                        Ver detalle
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                    <div>
                      <Mock />
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 rounded-2xl border border-zinc-200/80 bg-white px-6 sm:px-8 py-6 sm:py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 shadow-[0_18px_40px_-24px_rgba(15,15,40,0.18)]">
          <div>
            <p className="text-base sm:text-lg font-medium text-[#0B0B12] tracking-tight mb-1">
              ¿No sabes cuál necesitas?
            </p>
            <p className="text-sm text-zinc-600 max-w-lg">
              En una llamada te decimos si te alcanza una landing, un multi-sección o un rediseño — sin venderte de más.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/servicios"
              className="text-sm font-medium text-zinc-700 hover:text-[#0B0B12] transition-colors underline underline-offset-4 decoration-zinc-300"
            >
              Comparar productos
            </Link>
            <Link
              to="/#contacto"
              className="inline-flex items-center gap-2 bg-[#0B0B12] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors"
            >
              Pedir recomendación
              <ArrowRight className="w-4 h-4 text-zinc-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
