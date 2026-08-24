import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { OrbitCarousel } from './home/OrbitCarousel';

interface HeroProps {
  onOpenQuoteModal: (planName?: string) => void;
  onOpenSchedule: () => void;
}

const clientTypes = [
  { name: 'Startups', style: 'font-semibold tracking-wider text-[#0B0B12]' },
  { name: 'Clínicas', style: 'font-serif italic text-zinc-800' },
  { name: 'SaaS', style: 'font-mono uppercase tracking-widest text-zinc-800 text-xs' },
  { name: 'Estudios', style: 'font-medium tracking-tight text-zinc-900' },
  { name: 'Ecommerce', style: 'font-bold text-[#0B0B12]' },
  { name: 'Consultoras', style: 'font-sans font-medium text-zinc-700' },
  { name: 'Restaurantes', style: 'font-serif text-zinc-900' },
  { name: 'Academias', style: 'font-medium underline decoration-[#6B7280]/40 text-zinc-800' },
];

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onOpenSchedule }) => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center px-4 pt-24 pb-14 sm:px-6 sm:pt-28">
      {/* Glow ambiental detrás del carrusel */}
      <div
        className="pointer-events-none absolute right-[-10%] top-[8%] hidden h-[36rem] w-[36rem] rounded-full lg:block"
        style={{ background: 'radial-gradient(circle, rgba(107,114,128,0.13) 0%, rgba(107,114,128,0) 65%)' }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[88rem] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_1fr] lg:gap-6">
        {/* Copy */}
        <div className="max-w-xl">
          <div className="glass-light mb-6 flex animate-fade-in-up items-center gap-2 rounded-full border border-white/80 px-3.5 py-1 text-xs font-medium text-zinc-800 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#6B7280]" />
            <span>Estudio web · diseño orbital</span>
          </div>

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

          <div className="mt-auto w-full max-w-md shrink-0 pt-12">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-zinc-500">
              Para marcas en aceleración:
            </p>
            <div className="relative w-full overflow-hidden">
              <div className="marquee-track flex items-center gap-8 py-1">
                {[...clientTypes, ...clientTypes].map((item, index) => (
                  <span
                    key={`${item.name}-${index}`}
                    className={`whitespace-nowrap text-sm opacity-80 transition-opacity hover:opacity-100 ${item.style}`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carrusel orbital */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <OrbitCarousel />
        </div>
      </div>
    </section>
  );
};
