import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const standards = [
    'React 19',
    'Tailwind CSS',
    'TypeScript',
    'SEO técnico base',
    'Copy de conversión',
    'Diseño mobile-first',
    'GA4 & analytics',
    'WhatsApp o formulario',
    'Handoff de publicación',
  ];

  return (
    <section className="bg-[#F7F8FC] border-y border-zinc-200/60 px-6 py-12 relative overflow-hidden z-10">
      <div className="max-w-[88rem] mx-auto grid md:grid-cols-4 gap-6 md:gap-8 items-center">
        {/* Left Column */}
        <div className="md:col-span-1 flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs border border-zinc-200/80 text-[#6B7280]">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <p className="text-zinc-600 text-sm leading-snug font-normal">
            Herramientas y estándares con los que construimos cada lanzamiento.
          </p>
        </div>

        {/* Right Column: Marquee */}
        <div className="md:col-span-3 overflow-hidden py-2 relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#F7F8FC] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F7F8FC] to-transparent z-10 pointer-events-none" />

          <div className="marquee-track flex items-center">
            {[...standards, ...standards, ...standards].map((item, idx) => (
              <div
                key={`${item}-${idx}`}
                className="flex items-center gap-6 mx-6 shrink-0 group cursor-default"
              >
                <span className="text-zinc-600 group-hover:text-[#0B0B12] text-sm font-medium tracking-wide transition-colors">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B7280]/30 group-hover:bg-[#6B7280] transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
