import React from 'react';
import { Check, ArrowRight, Sparkles, Rocket } from 'lucide-react';
import { plans } from '../data/pricing';

interface PreciosProps {
  onOpenQuoteModal: (planName?: string) => void;
}

export const Precios: React.FC<PreciosProps> = ({ onOpenQuoteModal }) => {

  return (
    <section id="precios" className="bg-[#F7F8FC] px-6 py-24 sm:py-28 relative z-10">
      <div className="max-w-[88rem] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200 mb-3 inline-block">
            Inversión transparente
          </span>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-[#0B0B12] mb-3">
            Órbitas de inversión
          </h2>
          <p className="text-zinc-600 text-base leading-relaxed">
            Referencias en CLP. El alcance exacto se cierra en la cotización personalizada — con extras y Modo Turbo si lo necesitas.
          </p>
        </div>

        {/* Turbo + promo callout */}
        <div className="max-w-3xl mx-auto mb-12 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 to-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 shadow-xs">
          <div className="w-11 h-11 rounded-xl bg-[#0B0B12] text-white flex items-center justify-center shrink-0">
            <Rocket className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-base font-medium text-[#0B0B12]">Modo Turbo</h3>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                Gratis · tiempo limitado
              </span>
              <span className="text-[11px] text-zinc-400 line-through">
                $280.000
              </span>
              <span className="text-[10px] font-semibold text-zinc-600">
                · 7 días
              </span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Por tiempo limitado: Turbo, copywriting, SEO técnico y WhatsApp van sin cargo extra.
              ¿Fecha límite? Entregamos tu sitio listo para publicar en 7 días hábiles.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenQuoteModal('Estación')}
            className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#0B0B12] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors"
          >
            Cotizar con Turbo
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-2">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'ring-2 ring-[#6B7280] md:scale-[1.03] shadow-xl z-20'
                  : 'border border-zinc-200/80 hover:border-zinc-300 shadow-xs hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#6B7280] text-white text-xs font-medium px-4 py-1 rounded-full shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3 h-3 text-zinc-200" />
                  <span>Más elegida</span>
                </div>
              )}

              <div>
                <div className="mb-6 pb-6 border-b border-zinc-100">
                  <h3 className="text-2xl font-medium text-[#0B0B12] mb-2 tracking-tight">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-xs text-zinc-500 font-medium">desde</span>
                    <span className="text-3xl sm:text-4xl font-semibold text-[#0B0B12] tracking-tight">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.popular ? 'bg-[#6B7280] text-white' : 'bg-zinc-100 text-zinc-700'
                        }`}
                      >
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-zinc-700 text-xs sm:text-sm leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenQuoteModal(plan.name)}
                className={`w-full py-3 px-6 rounded-full font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-[#0B0B12] text-white hover:bg-zinc-800 shadow-md active:scale-[0.98]'
                    : 'border border-[#0B0B12] text-[#0B0B12] hover:bg-[#0B0B12] hover:text-white'
                }`}
              >
                <span>Pedir presupuesto</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-zinc-500 mt-10 max-w-xl mx-auto leading-relaxed">
          Promo temporal: Modo Turbo, copywriting, SEO técnico y WhatsApp sin costo extra (se muestra el precio original tachado).
          También puedes sumar imágenes con IA, video, brand kit y más. ¿Proyecto a medida? Escríbenos.
        </p>
      </div>
    </section>
  );
};
