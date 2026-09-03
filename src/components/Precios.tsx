import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles, Rocket, ChevronDown } from 'lucide-react';
import { LiquidGlass } from './LiquidGlass';
import { plans, UF_APPROX_CLP } from '../data/pricing';

interface PreciosProps {
  onOpenQuoteModal: (planName?: string) => void;
}

export const Precios: React.FC<PreciosProps> = ({ onOpenQuoteModal }) => {
  const [billingMode, setBillingMode] = useState<'onetime' | 'monthly'>('onetime');
  const [showAllDetails, setShowAllDetails] = useState<boolean>(false);

  const renderFeatureBullet = (feat: string, isPopular: boolean) => {
    const parts = feat.split(': ');
    return (
      <li key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700">
        <div
          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
            isPopular ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-700'
          }`}
        >
          <Check className="w-2.5 h-2.5" />
        </div>
        <span className="leading-snug">
          {parts.length > 1 ? (
            <>
              <strong className="font-semibold text-zinc-900">{parts[0]}: </strong>
              <span className="text-zinc-600">{parts.slice(1).join(': ')}</span>
            </>
          ) : (
            feat
          )}
        </span>
      </li>
    );
  };

  return (
    <section id="precios" className="bg-[#F7F8FC] px-4 py-16 sm:px-6 sm:py-28 relative z-10">
      <div className="max-w-[88rem] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200 mb-3 inline-block">
            Inversión transparente
          </span>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-[#0B0B12] mb-3">
            Órbitas de inversión
          </h2>
          <p className="text-zinc-600 text-base leading-relaxed mb-6">
            Elige el modelo que mejor se adapte a tu negocio: comprar tu web por una única vez o suscribirte a un plan mensual todo incluido.
          </p>

          {/* Liquid Glass Billing Mode Toggle Switch */}
          <div className="inline-flex flex-col items-center mt-6 mb-2">
            <LiquidGlass pill tone="light">
              <div className="flex items-center gap-1.5 p-1.5">
                <button
                  type="button"
                  onClick={() => setBillingMode('onetime')}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                    billingMode === 'onetime'
                      ? 'bg-[#0B0B12] text-white shadow-2xs'
                      : 'text-zinc-700 hover:text-zinc-950 hover:bg-white/40'
                  }`}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Compra única</span>
                </button>
                <button
                  type="button"
                  onClick={() => setBillingMode('monthly')}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                    billingMode === 'monthly'
                      ? 'bg-[#0B0B12] text-white shadow-2xs'
                      : 'text-zinc-700 hover:text-zinc-950 hover:bg-white/40'
                  }`}
                >
                  <Rocket className="h-3.5 w-3.5" />
                  <span>Planes mensuales</span>
                </button>
              </div>
            </LiquidGlass>
          </div>
        </div>

        {/* Turbo + promo callout */}
        <div className="max-w-3xl mx-auto mb-12 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 to-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 shadow-xs">
          <div className="w-11 h-11 rounded-xl bg-[#0B0B12] text-white flex items-center justify-center shrink-0">
            <Rocket className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-base font-medium text-[#0B0B12]">Modo Turbo</h3>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                Gratis · tiempo limitado
              </span>
              <span className="text-[11px] text-zinc-400 line-through">
                $280.000 / 7 UF
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
          {plans.map((plan) => {
            const isMonthly = billingMode === 'monthly';
            const displayPrice = isMonthly ? plan.monthlyPrice : plan.price;
            const subtext = isMonthly
              ? `o ${plan.monthlyPriceUf}/mes · Cancela cuando quieras`
              : `o ${plan.priceUf} · 50% al partir / 50% al publicar`;
            const currentFeatures = isMonthly && plan.monthlyFeatures ? plan.monthlyFeatures : plan.features;

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'ring-2 ring-zinc-950 md:scale-[1.03] shadow-xl z-20'
                    : 'border border-zinc-200/80 hover:border-zinc-300 shadow-xs hover:shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0B0B12] text-white text-xs font-semibold px-4 py-1 rounded-full shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>{isMonthly ? 'Plan Más Popular' : 'Más elegida'}</span>
                  </div>
                )}

                <div>
                  <div className="mb-6 pb-6 border-b border-zinc-100">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-500">
                        {plan.id === 'sonda' ? 'Inicio Rápido' : plan.id === 'estacion' ? 'Comercial Pro' : 'Corporativo'}
                      </span>
                      <span className="text-[10px] font-mono font-semibold rounded bg-zinc-100 px-2 py-0.5 text-zinc-600">
                        {isMonthly ? 'Mensual' : 'Pago único'}
                      </span>
                    </div>
                    <h3 className="text-2xl font-medium text-[#0B0B12] mb-2 tracking-tight">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-xs text-zinc-500 font-medium">
                        {isMonthly ? 'cuota' : 'desde'}
                      </span>
                      <span className="text-3xl sm:text-4xl font-semibold text-[#0B0B12] tracking-tight font-mono">
                        {displayPrice}
                      </span>
                      {isMonthly && (
                        <span className="text-xs font-semibold text-zinc-500 font-mono">
                          / mes
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 block mb-3">
                      {subtext}
                    </span>
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                      {isMonthly
                        ? 'Tu web siempre al día con hosting ultra-rápido, CRM y soporte continuo.'
                        : plan.description}
                    </p>
                  </div>

                  {/* Features List (Simplified with Global Synchronized Expansion) */}
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {currentFeatures.slice(0, 3).map((feat) =>
                        renderFeatureBullet(feat, !!plan.popular)
                      )}
                    </ul>

                    {/* Expandable details revealed synchronously across all cards */}
                    {currentFeatures.length > 3 && (
                      <div className="mt-4 pt-3 border-t border-zinc-100">
                        {showAllDetails && (
                          <ul className="mb-4 space-y-3 pt-1 border-b border-zinc-100 pb-4 animate-in fade-in slide-in-from-top-1 duration-200">
                            {currentFeatures.slice(3).map((feat) =>
                              renderFeatureBullet(feat, !!plan.popular)
                            )}
                          </ul>
                        )}

                        <button
                          type="button"
                          onClick={() => setShowAllDetails((prev) => !prev)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-zinc-950 transition-colors group/btn py-1"
                        >
                          <span>{showAllDetails ? 'Ver menos detalles' : 'Ver más detalles'}</span>
                          <ChevronDown
                            className={`h-4 w-4 text-zinc-400 group-hover/btn:text-zinc-950 transition-transform duration-200 ${
                              showAllDetails ? 'rotate-180' : 'group-hover/btn:translate-y-0.5'
                            }`}
                          />
                        </button>
                      </div>
                    )}
                  </div>
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
            );
          })}
        </div>

        {/* Link to dedicated Precios page */}
        <div className="mt-12 text-center">
          <Link
            to="/precios"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors group"
          >
            <span>Ver tabla comparativa completa, extras y preguntas frecuentes en la página de Precios</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
