import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { OrbitCarousel } from './home/OrbitCarousel';

interface HeroProps {
  onOpenQuoteModal: (planName?: string) => void;
  onOpenSchedule: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onOpenSchedule }) => {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[100svh] overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-28 lg:px-6 lg:pt-0 lg:pb-0"
    >
      {/* Glow ambiental detrás del arco */}
      <div
        className="pointer-events-none absolute right-[-8%] top-[6%] h-[28rem] w-[28rem] rounded-full sm:h-[42rem] sm:w-[42rem]"
        style={{ background: 'radial-gradient(circle, rgba(107,114,128,0.11) 0%, rgba(107,114,128,0) 68%)' }}
        aria-hidden
      />

      {/* Veladura suave a la izquierda: el copy se lee, las cards siguen viéndose */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[72%] bg-gradient-to-r from-[#F7F8FC] from-15% via-[#F7F8FC]/70 to-transparent lg:hidden"
        aria-hidden
      />

      <div className="pointer-events-none relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-[88rem] items-start lg:min-h-[100svh] lg:items-center">
        {/* Copy */}
        <div className="pointer-events-auto max-w-xl lg:max-w-[30rem] xl:max-w-xl">
          <h1
            className="mb-6 text-5xl font-medium leading-[0.95] tracking-tight text-[#0B0B12] sm:text-6xl lg:text-7xl"
            style={{ letterSpacing: '-0.045em' }}
          >
            <span className="block overflow-hidden py-0.5">
              <span className="block animate-clip-reveal">Tu marca,</span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <span className="block animate-clip-reveal" style={{ animationDelay: '0.12s' }}>
                en órbita.
              </span>
            </span>
          </h1>

          <p
            className="mb-8 max-w-md animate-fade-in-up text-base leading-relaxed text-zinc-700/90 md:text-lg"
            style={{ animationDelay: '0.25s' }}
          >
            Diseñamos sitios que se sienten de otro planeta — claros, rápidos y obsesionados con que
            te escriban. Elige una propuesta de tu rubro y recórrela en vivo antes de partir.
          </p>

          <div
            className="flex animate-fade-in-up flex-wrap items-center gap-4"
            style={{ animationDelay: '0.35s' }}
          >
            <button
              onClick={() => onOpenQuoteModal()}
              className="group inline-flex items-center gap-3 rounded-full bg-[#0B0B12] py-2 pl-8 pr-2 text-base font-medium text-white shadow-md transition-all duration-200 hover:bg-zinc-800 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B7280] md:text-lg"
            >
              <span>Pedir presupuesto</span>
              <span className="rounded-full bg-white p-2.5 transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4 text-[#0B0B12] sm:h-5 sm:w-5" />
              </span>
            </button>

            <Link
              to="/galeria"
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-300/90 bg-white/70 px-6 py-3 text-sm font-medium text-[#0B0B12] transition-all hover:border-zinc-400 hover:bg-white hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B7280]"
            >
              <Compass className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-[#0B0B12]" />
              Explorar la galería
            </Link>

            <button
              type="button"
              onClick={onOpenSchedule}
              className="ml-1 py-2 text-sm font-medium text-zinc-800 underline decoration-zinc-400 underline-offset-4 transition-all hover:text-[#6B7280] hover:decoration-[#6B7280]"
            >
              Agendar reunión →
            </button>
          </div>
        </div>
      </div>

      {/* Arco de propuestas: de fondo a la derecha, también en móvil */}
      <div
        className="absolute inset-y-0 right-0 z-[1] left-[28%] animate-fade-in-up sm:left-[36%] lg:left-[50%] xl:left-[42%] 2xl:left-[38%]"
        style={{ animationDelay: '0.2s' }}
      >
        <OrbitCarousel />
      </div>
    </section>
  );
};
