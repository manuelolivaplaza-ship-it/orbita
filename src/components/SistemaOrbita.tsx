import React, { useState } from 'react';
import { ArrowDown, Zap, Shield, Target, Rocket } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

interface SistemaOrbitaProps {
  onOpenQuoteModal: (planName?: string) => void;
}

const IMAGE_BENTO =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png&w=1280&q=85';

type BottomId = '02' | '03' | '04';

const layers = {
  '01': {
    tag: 'Capa 01',
    title: 'Primera impresión',
    body: 'En los primeros segundos el visitante entiende qué ofreces. Hero claro, buena imagen y un mensaje directo: qué haces y para quién.',
  },
  '02': {
    tag: 'Capa 02',
    title: 'Credibilidad',
    body: 'Logos, números o testimonios a la vista. El visitante ve que eres una marca seria antes de escribirte.',
  },
  '03': {
    tag: 'Capa 03',
    title: 'Contacto fácil',
    body: 'Un solo objetivo: que te escriban. Botones claros a WhatsApp o formulario, sin menús confusos ni pasos de más.',
  },
  '04': {
    tag: 'Capa 04',
    title: 'Sitio listo',
    body: 'Web publicada, formularios funcionando y una guía corta. Puedes usarla y actualizarla sin depender de nosotros.',
  },
} as const;

/**
 * Arriba: Capa 01 ancha (fija).
 * Abajo: 02 | 03 | 04 con expand sutil lateral (sin reflujo agresivo del texto).
 */
export const SistemaOrbita: React.FC<SistemaOrbitaProps> = ({ onOpenQuoteModal }) => {
  const [hovered, setHovered] = useState<BottomId | null>(null);

  const scrollToCards = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#sistema-cards')?.scrollIntoView({ behavior: 'smooth' });
  };

  /**
   * Expansión sutil:
   * - Default: 04 un poco más ancha (espejo)
   * - Hover: crece poco; las otras casi no se comprimen
   * - minWidth evita que el texto se reacomode feo
   */
  const flexFor = (id: BottomId) => {
    if (!hovered) {
      if (id === '04') return 1.45;
      return 1;
    }
    if (hovered === id) return 1.75;
    return 0.92;
  };

  return (
    <section id="sistema" className="bg-white px-6 py-24 sm:py-28 relative z-10">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-16 sm:mb-20 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-semibold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5 text-[#6B7280]" />
              <span>Cómo construimos tu web</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0B0B12] leading-[1.05] tracking-tight mb-8"
              style={{ letterSpacing: '-0.03em' }}
            >
              El sistema Órbita.
            </h2>
            <a
              href="#sistema-cards"
              onClick={scrollToCards}
              className="inline-flex items-center gap-3 bg-[#0B0B12] text-white text-sm font-medium pl-6 pr-1.5 py-1.5 rounded-full hover:bg-zinc-800 transition-colors shadow-xs"
            >
              <span>Ver las 4 capas</span>
              <span className="rounded-full bg-white p-2">
                <ArrowDown className="w-4 h-4 text-[#0B0B12]" />
              </span>
            </a>
          </div>
          <div className="pt-2 md:pt-8">
            <p className="text-xl sm:text-2xl text-zinc-600 leading-snug font-normal">
              Cuatro capas que trabajan juntas: captar la atención, generar confianza, guiar al contacto y entregar un sitio listo para usar.
            </p>
            <p className="mt-4 text-base text-zinc-500 leading-relaxed max-w-lg">
              No es una plantilla genérica. Es un orden claro de secciones para que tu marca se vea profesional y te escriban.
            </p>
          </div>
        </div>

        <div id="sistema-cards" className="flex flex-col gap-4">
          {/* ── ARRIBA: Capa 01 fija ── */}
          <SpotlightCard className="min-h-[22rem] p-0 overflow-hidden" tilt={6}>
            <div className="relative min-h-[22rem] p-8 sm:p-10 flex flex-col justify-between overflow-hidden rounded-[inherit]">
              <img
                src={IMAGE_BENTO}
                alt={layers['01'].title}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.93) 0%, rgba(255,255,255,0.78) 48%, rgba(255,255,255,0.28) 100%)',
                }}
              />
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white">
                  {layers['01'].tag}
                </span>
                <div className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center">
                  <Zap className="w-4 h-4 text-[#6B7280]" />
                </div>
              </div>
              <div className="relative z-10 pt-16 max-w-xl">
                <h3 className="text-[#0B0B12] text-2xl sm:text-3xl font-medium tracking-tight mb-3">
                  {layers['01'].title}
                </h3>
                <p className="text-zinc-700 text-base max-w-md leading-relaxed">
                  {layers['01'].body}
                </p>
              </div>
            </div>
          </SpotlightCard>

          {/* ── ABAJO: expand sutil, texto sin reflujo ── */}
          <div
            className="flex flex-col lg:flex-row gap-4"
            onMouseLeave={() => setHovered(null)}
          >
            {/* Capa 02 */}
            <div
              className="min-h-[22rem] transition-[flex-grow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden"
              style={{
                flexGrow: flexFor('02'),
                flexBasis: 0,
                flexShrink: 1,
                minWidth: 0,
              }}
              onMouseEnter={() => setHovered('02')}
            >
              <SpotlightCard className="h-full p-0 overflow-hidden" tilt={6}>
                <div className="relative h-full min-h-[22rem] p-8 flex flex-col justify-between overflow-hidden rounded-[inherit] bg-white">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-zinc-100 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600 bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200/80 whitespace-nowrap">
                      {layers['02'].tag}
                    </span>
                    <Shield className="w-5 h-5 text-[#6B7280] shrink-0" />
                  </div>
                  <div className="relative z-10 pt-12 min-w-[14rem]">
                    <h3 className="text-[#0B0B12] text-2xl font-medium tracking-tight mb-3 whitespace-nowrap">
                      {layers['02'].title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed max-w-[16rem]">
                      {layers['02'].body}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            {/* Capa 03 */}
            <div
              className="min-h-[22rem] transition-[flex-grow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden"
              style={{
                flexGrow: flexFor('03'),
                flexBasis: 0,
                flexShrink: 1,
                minWidth: 0,
              }}
              onMouseEnter={() => setHovered('03')}
            >
              <SpotlightCard className="h-full p-0 overflow-hidden" tilt={6}>
                <div className="relative h-full min-h-[22rem] p-8 flex flex-col justify-between overflow-hidden rounded-[inherit] bg-white">
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-zinc-100 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600 bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200/80 whitespace-nowrap">
                      {layers['03'].tag}
                    </span>
                    <Target className="w-5 h-5 text-[#6B7280] shrink-0" />
                  </div>
                  <div className="relative z-10 pt-12 min-w-[14rem]">
                    <h3 className="text-[#0B0B12] text-2xl font-medium tracking-tight mb-3 whitespace-nowrap">
                      {layers['03'].title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed max-w-[16rem]">
                      {layers['03'].body}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            {/* Capa 04 */}
            <div
              className="min-h-[22rem] transition-[flex-grow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden"
              style={{
                flexGrow: flexFor('04'),
                flexBasis: 0,
                flexShrink: 1,
                minWidth: 0,
              }}
              onMouseEnter={() => setHovered('04')}
            >
              <SpotlightCard className="h-full p-0 overflow-hidden" tilt={6}>
                <div className="relative h-full min-h-[22rem] p-8 flex flex-col justify-between overflow-hidden rounded-[inherit] bg-white">
                  <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-gradient-to-br from-[#E4E4E7] to-[#D4D4D8] rounded-full opacity-40 blur-xl pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600 bg-zinc-100 px-3 py-1 rounded-full whitespace-nowrap">
                      {layers['04'].tag}
                    </span>
                    <Rocket className="w-5 h-5 text-[#6B7280] shrink-0" />
                  </div>
                  <div className="relative z-10 pt-12 min-w-[14rem]">
                    <h3 className="text-[#0B0B12] text-2xl sm:text-3xl font-medium tracking-tight mb-3 whitespace-nowrap">
                      {layers['04'].title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed max-w-[18rem]">
                      {layers['04'].body}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => onOpenQuoteModal()}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0B0B12] hover:text-[#6B7280] transition-colors"
          >
            Pedir un sitio con este sistema
            <Rocket className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
