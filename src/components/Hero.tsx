import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';

const MobileHeroCarousel = lazy(() =>
  import('./home/MobileHeroCarousel').then((m) => ({ default: m.MobileHeroCarousel })),
);
const OrbitCarousel = lazy(() =>
  import('./home/OrbitCarousel').then((m) => ({ default: m.OrbitCarousel })),
);

interface HeroProps {
  onOpenQuoteModal: (planName?: string) => void;
  onOpenSchedule: () => void;
}

function useIsLg() {
  const [lg, setLg] = useState<boolean | null>(null);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const apply = () => setLg(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);
  return lg;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const isLg = useIsLg();

  return (
    <section
      id="hero"
      className="relative isolate overflow-x-clip pt-[calc(5.25rem+env(safe-area-inset-top))] pb-10 sm:pt-24 sm:pb-12 lg:h-[100svh] lg:overflow-hidden lg:py-0"
    >
      <div
        className="pointer-events-none absolute right-[-18%] top-[28%] h-[22rem] w-[22rem] rounded-full lg:right-[-8%] lg:top-[6%] lg:h-[42rem] lg:w-[42rem]"
        style={{ background: 'radial-gradient(circle, rgba(107,114,128,0.11) 0%, rgba(107,114,128,0) 68%)' }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[88rem] px-5 sm:px-6 lg:absolute lg:inset-0 lg:flex lg:items-center lg:px-6">
        <div className="relative w-full max-w-xl lg:max-w-[30rem] xl:max-w-xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 lg:hidden">
            Sitios web · 7–14 días
          </p>

          <h1
            className="mb-3.5 text-[2.05rem] font-medium leading-[1.04] tracking-tight text-[#0B0B12] sm:mb-6 sm:text-6xl lg:text-7xl"
            style={{ letterSpacing: '-0.045em' }}
          >
            <span className="block overflow-hidden py-0.5">
              <span className="block animate-clip-reveal">Creamos sitios</span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <span className="block animate-clip-reveal" style={{ animationDelay: '0.12s' }}>
                que venden.
              </span>
            </span>
          </h1>

          <p
            className="mb-5 max-w-md animate-fade-in-up text-[15px] leading-[1.5] text-zinc-700/90 sm:mb-8 sm:text-base md:text-lg"
            style={{ animationDelay: '0.25s' }}
          >
            Claros, rápidos y listos en 7–14 días, con WhatsApp para que te escriban. Recorre una
            demo de tu rubro antes de partir.
          </p>

          <div
            className="flex animate-fade-in-up flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            style={{ animationDelay: '0.35s' }}
          >
            <button
              onClick={() => onOpenQuoteModal()}
              className="group inline-flex items-center justify-between gap-3 rounded-full bg-[#0B0B12] py-2.5 pl-6 pr-2.5 text-[15px] font-medium text-white shadow-md transition-all duration-200 hover:bg-zinc-800 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B7280] sm:justify-start sm:pl-7 sm:text-base md:text-lg"
            >
              <span>Pedir presupuesto</span>
              <span className="rounded-full bg-white p-2 transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4 text-[#0B0B12] sm:h-5 sm:w-5" />
              </span>
            </button>

            <Link
              to="/galeria"
              className="group inline-flex items-center justify-center gap-2 py-2 text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-[5px] transition-all hover:text-[#0B0B12] hover:decoration-[#0B0B12] sm:justify-start"
            >
              <Compass className="h-4 w-4 text-zinc-500" />
              Ver demos de rubro
            </Link>
          </div>
        </div>
      </div>

      <div className="relative mt-8 min-h-[16.5rem] w-full max-w-full overflow-x-clip lg:hidden">
        {isLg === false && (
          <Suspense fallback={<div className="h-[16.5rem]" aria-hidden />}>
            <MobileHeroCarousel />
          </Suspense>
        )}
      </div>

      <div
        className="pointer-events-auto hidden animate-fade-in-up lg:absolute lg:inset-0 lg:left-[50%] lg:block lg:h-full lg:w-auto xl:left-[42%] 2xl:left-[38%]"
        style={{ animationDelay: '0.2s' }}
      >
        {isLg === true && (
          <Suspense fallback={null}>
            <OrbitCarousel />
          </Suspense>
        )}
      </div>
    </section>
  );
};
