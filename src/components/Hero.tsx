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
      className="relative isolate flex h-[100svh] min-h-[100svh] flex-col overflow-hidden lg:block lg:h-auto"
    >
      <div
        className="pointer-events-none absolute right-[-12%] top-[8%] h-[28rem] w-[28rem] rounded-full lg:right-[-8%] lg:top-[6%] lg:h-[42rem] lg:w-[42rem]"
        style={{ background: 'radial-gradient(circle, rgba(107,114,128,0.11) 0%, rgba(107,114,128,0) 68%)' }}
        aria-hidden
      />

      <div className="pointer-events-none relative z-10 mx-auto w-full max-w-[88rem] shrink-0 px-4 pt-24 pb-1 sm:px-6 sm:pt-28 lg:absolute lg:inset-0 lg:flex lg:min-h-[100svh] lg:items-center lg:px-6 lg:pt-0 lg:pb-0">
        <div className="pointer-events-auto max-w-xl lg:max-w-[30rem] xl:max-w-xl">
          <h1
            className="mb-4 text-[2.75rem] font-medium leading-[0.92] tracking-tight text-[#0B0B12] sm:mb-6 sm:text-6xl lg:text-7xl"
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
            className="mb-6 max-w-md animate-fade-in-up text-[15px] leading-relaxed text-zinc-700/90 sm:mb-8 sm:text-base md:text-lg"
            style={{ animationDelay: '0.25s' }}
          >
            Diseñamos sitios que se sienten de otro planeta — claros, rápidos y obsesionados con que
            te escriban. Elige una propuesta de tu rubro y recórrela en vivo antes de partir.
          </p>

          <div
            className="flex animate-fade-in-up flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            style={{ animationDelay: '0.35s' }}
          >
            <button
              onClick={() => onOpenQuoteModal()}
              className="group inline-flex items-center gap-3 rounded-full bg-[#0B0B12] py-2 pl-7 pr-2 text-base font-medium text-white shadow-md transition-all duration-200 hover:bg-zinc-800 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B7280] md:text-lg"
            >
              <span>Pedir presupuesto</span>
              <span className="rounded-full bg-white p-2.5 transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4 text-[#0B0B12] sm:h-5 sm:w-5" />
              </span>
            </button>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link
                to="/galeria"
                className="group inline-flex items-center gap-2 rounded-full border border-zinc-300/90 bg-white/80 px-5 py-2.5 text-sm font-medium text-[#0B0B12] transition-all hover:border-zinc-400 hover:bg-white hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B7280]"
              >
                <Compass className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-[#0B0B12]" />
                Explorar la galería
              </Link>

              <button
                type="button"
                onClick={onOpenSchedule}
                className="py-2 text-sm font-medium text-zinc-800 underline decoration-zinc-400 underline-offset-4 transition-all hover:text-[#6B7280] hover:decoration-[#6B7280]"
              >
                Agendar reunión →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Móvil: escenario propio abajo, altura real (no flex-1). Desktop: sangra a la derecha. */}
      <div
        className="relative z-[1] min-h-[18rem] w-full flex-1 animate-fade-in-up lg:absolute lg:inset-y-0 lg:left-[50%] lg:right-0 lg:min-h-0 lg:w-auto lg:flex-none xl:left-[42%] 2xl:left-[38%]"
        style={{ animationDelay: '0.2s' }}
      >
        <OrbitCarousel />
      </div>
    </section>
  );
};
