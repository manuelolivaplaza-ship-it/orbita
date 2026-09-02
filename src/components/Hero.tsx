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
    <section id="hero" className="relative isolate h-[100svh] min-h-[100svh] overflow-hidden">
      <div
        className="pointer-events-none absolute right-[-18%] top-[28%] h-[22rem] w-[22rem] rounded-full lg:right-[-8%] lg:top-[6%] lg:h-[42rem] lg:w-[42rem]"
        style={{ background: 'radial-gradient(circle, rgba(107,114,128,0.11) 0%, rgba(107,114,128,0) 68%)' }}
        aria-hidden
      />

      {/* Fondo: el arco llena el viewport en celular; en desktop sangra a la derecha. */}
      <div
        className="absolute inset-0 z-0 animate-fade-in-up lg:left-[50%] xl:left-[42%] 2xl:left-[38%]"
        style={{ animationDelay: '0.2s' }}
      >
        <OrbitCarousel />
      </div>

      {/* Velo solo móvil: el copy se lee; las cards siguen viéndose a la derecha y abajo. */}
      <div
        className="hero-mobile-veil pointer-events-none absolute inset-0 z-[1] lg:hidden"
        aria-hidden
      />

      <div className="pointer-events-none relative z-[2] mx-auto flex h-full w-full max-w-[88rem] items-start px-5 pt-[5.75rem] sm:px-6 sm:pt-28 lg:absolute lg:inset-0 lg:items-center lg:px-6 lg:pt-0">
        <div className="pointer-events-auto w-full max-w-[21rem] sm:max-w-xl lg:max-w-[30rem] xl:max-w-xl">
          <h1
            className="mb-7 text-[2.35rem] font-medium leading-[0.94] tracking-tight text-[#0B0B12] sm:mb-6 sm:text-6xl lg:text-7xl"
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
            className="mb-10 max-w-[19.5rem] animate-fade-in-up text-[15px] leading-[1.65] text-zinc-700/90 sm:mb-8 sm:max-w-md sm:text-base md:text-lg"
            style={{ animationDelay: '0.25s' }}
          >
            Diseñamos sitios que se sienten de otro planeta — claros, rápidos y obsesionados con que
            te escriban. Elige una propuesta de tu rubro y recórrela en vivo antes de partir.
          </p>

          <div
            className="flex animate-fade-in-up flex-col items-stretch gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            style={{ animationDelay: '0.35s' }}
          >
            <button
              onClick={() => onOpenQuoteModal()}
              className="group inline-flex items-center justify-between gap-3 rounded-full bg-[#0B0B12] py-2 pl-6 pr-2 text-[15px] font-medium text-white shadow-md transition-all duration-200 hover:bg-zinc-800 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B7280] sm:justify-start sm:pl-7 sm:text-base md:text-lg"
            >
              <span>Pedir presupuesto</span>
              <span className="rounded-full bg-white p-2.5 transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4 text-[#0B0B12] sm:h-5 sm:w-5" />
              </span>
            </button>

            <div className="flex flex-col items-start gap-3.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
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
                className="py-1 text-sm font-medium text-zinc-800 underline decoration-zinc-400 underline-offset-[5px] transition-all hover:text-[#6B7280] hover:decoration-[#6B7280]"
              >
                Agendar reunión →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
