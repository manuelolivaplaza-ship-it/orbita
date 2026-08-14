import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { usePrefersReducedMotion } from '../lib/usePrefersReducedMotion';

interface HeroProps {
  onOpenQuoteModal: (planName?: string) => void;
  onOpenSchedule: () => void;
}

const VIDEO_HERO = 'https://mail.programbi.com/uploads/Generar_video_de_planeta_girando_202608102007.mp4';

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onOpenSchedule }) => {
  const reducedMotion = usePrefersReducedMotion();
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

  return (
    <section id="hero" className="relative flex-1 px-4 sm:px-6 pt-[5.5rem] pb-5 flex items-end min-h-screen">
      {/* Outer Card Container */}
      <div 
        className="relative w-full rounded-[1.25rem] md:rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(15,15,40,0.10)] border border-white/60 bg-[#E8EAF2]"
        style={{ height: 'calc(100vh - 5.5rem - 1.25rem)', minHeight: '560px' }}
      >
        {/* Reproduce una vez y se queda en el último frame (sin loop) */}
        {!reducedMotion && (
          <video
            src={VIDEO_HERO}
            autoPlay
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        )}

        {/* Local Soft White Gradient Mask on Left 45% */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.72) 38%, rgba(255,255,255,0) 72%)'
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-start h-full p-6 sm:p-8 md:p-12 pt-10 sm:pt-12 md:pt-14 max-w-xl">
          
          {/* Eyebrow badge */}
          <div className="glass-light rounded-full px-3.5 py-1 text-xs font-medium text-zinc-800 mb-5 flex items-center gap-2 border border-white/80 shadow-xs animate-fade-in-up">
            <Sparkles className="w-3.5 h-3.5 text-[#6B7280]" />
            <span>Estudio web · diseño orbital</span>
          </div>

          {/* Heading - Two lines clip reveal */}
          <h1 
            className="text-[#0B0B12] text-5xl sm:text-6xl lg:text-7xl font-medium leading-[0.95] tracking-tight mb-6"
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

          {/* Subtitle */}
          <p className="text-zinc-700/90 text-base md:text-lg max-w-md mb-8 leading-relaxed font-normal animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            Diseñamos landings y sitios que se sienten de otro planeta — claros, rápidos y obsesionados con que te escriban.
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            {/* Primary Halo Style Pill */}
            <button
              onClick={() => onOpenQuoteModal()}
              className="group inline-flex items-center gap-3 bg-[#0B0B12] text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-zinc-800 transition-all duration-200 shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B7280]"
            >
              <span>Pedir presupuesto</span>
              <span className="rounded-full bg-white p-2.5 transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#0B0B12]" />
              </span>
            </button>

            {/* Secondary link */}
            <button
              type="button"
              onClick={onOpenSchedule}
              className="text-sm font-medium text-zinc-800 hover:text-[#6B7280] underline underline-offset-4 decoration-zinc-400 hover:decoration-[#6B7280] transition-all ml-2 py-2"
            >
              Agendar reunión →
            </button>
            <Link
              to="/creaciones"
              className="text-sm font-medium text-zinc-600 hover:text-[#6B7280] transition-all py-2"
            >
              Ver creaciones
            </Link>
          </div>

          <div className="mt-auto w-full max-w-md pt-8 shrink-0">
            <p className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium mb-3">
              Para marcas en aceleración:
            </p>
            <div className="relative overflow-hidden w-full">
              <div className="marquee-track flex items-center gap-8 py-1">
                {[...clientTypes, ...clientTypes].map((item, index) => (
                  <span
                    key={`${item.name}-${index}`}
                    className={`text-sm whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity ${item.style}`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Subtle Decorative Floating Orb on Bottom Right */}
        <div className="hidden lg:block absolute bottom-12 right-12 z-10 glass-light rounded-2xl p-5 max-w-xs animate-float-y border border-white/80 shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">Estado de agenda</span>
          </div>
          <p className="text-xs text-zinc-600 leading-snug">
            Cupos abiertos para desarrollo en 21 días. Respuesta en &lt; 24h.
          </p>
        </div>
      </div>
    </section>
  );
};
