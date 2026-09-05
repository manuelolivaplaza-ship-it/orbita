import React, { useState, useRef, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import {
  Check,
  X,
  Sparkles,
  Rocket,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  Clock,
  MessageCircle,
  Layers,
  Zap,
  DollarSign,
  Briefcase,
  ChevronDown,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { LiquidGlass } from '../components/LiquidGlass';
import { Orb } from '../components/orb';
import {
  plans,
  EXTRAS_PRICING,
  COMPARISON_TABLE,
  PRICING_FAQS,
  UF_APPROX_CLP,
} from '../data/pricing';
import type { LayoutOutletContext } from '../layouts/MainLayout';
import { whatsappUrl } from '../data/site';

type BillingMode = 'onetime' | 'monthly';

export default function PreciosPage() {
  const { onOpenQuoteModal, onOpenSchedule } = useOutletContext<LayoutOutletContext>();
  const [billingMode, setBillingMode] = useState<BillingMode>('onetime');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showAllDetails, setShowAllDetails] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const renderFeatureBullet = (feat: string, isPopular: boolean) => {
    const parts = feat.split(': ');
    return (
      <li key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700">
        <span
          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
            isPopular ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-800'
          }`}
        >
          <Check className="h-2.5 w-2.5" />
        </span>
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

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const handleEnded = () => {
      v.pause();
    };
    v.addEventListener('ended', handleEnded);
    return () => v.removeEventListener('ended', handleEnded);
  }, []);

  // Group comparison table by category
  const categories = Array.from(new Set(COMPARISON_TABLE.map((row) => row.category)));

  const handleWhatsAppConsult = () => {
    const text = 'Hola Órbita! Estuve revisando los planes de precios y me gustaría hacer unas consultas sobre mi proyecto web.';
    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <PageMeta
        title="Precios y Planes Web 2026 | Órbita"
        description="Elige entre compra única con propiedad 100% o suscripción mensual todo incluido. Panel CRM integrado y WhatsApp."
      />

      <div className="relative isolate min-h-screen bg-[#F7F8FC] pb-24 sm:pb-32 overflow-hidden">
        {/* Background Hero Video: plays once, stays on the last frame, with subtle bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] sm:h-[720px] overflow-hidden -z-10 select-none">
          <video
            ref={videoRef}
            src="/video/precios-hero.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-90"
          />
          {/* Subtle bottom fade only at the lower edge so the video is crisp and visible */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, transparent 0%, transparent 66%, rgba(247,248,252,0.35) 82%, rgba(247,248,252,0.9) 94%, #F7F8FC 100%)',
            }}
          />
        </div>

        {/* 1. HERO & BILLING MODEL TOGGLE (WHITE TITLE, GENEROUS SPACING, NO HELPER TEXT) */}
        <section className="px-4 pt-28 sm:px-6 sm:pt-36 pb-20 sm:pb-28 text-center max-w-4xl mx-auto relative z-10">
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.0] mb-12 sm:mb-16 drop-shadow-md"
            style={{ letterSpacing: '-0.045em' }}
          >
            Inversión clara.<br />
            Sin costos ocultos.
          </h1>

          {/* LIQUID GLASS BILLING MODEL TOGGLE */}
          <div className="inline-flex flex-col items-center">
            <LiquidGlass pill tone="light">
              <div className="flex items-center gap-1.5 p-1.5">
                <button
                  type="button"
                  onClick={() => setBillingMode('onetime')}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    billingMode === 'onetime'
                      ? 'bg-white text-zinc-950 shadow-sm'
                      : 'text-zinc-700 hover:text-zinc-950 hover:bg-white/40'
                  }`}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Compra única</span>
                </button>

                <button
                  type="button"
                  onClick={() => setBillingMode('monthly')}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    billingMode === 'monthly'
                      ? 'bg-white text-zinc-950 shadow-sm'
                      : 'text-zinc-700 hover:text-zinc-950 hover:bg-white/40'
                  }`}
                >
                  <Layers className="h-3.5 w-3.5" />
                  <span>Planes mensuales</span>
                </button>
              </div>
            </LiquidGlass>
          </div>
        </section>

        {/* 2. THE 3 CORE PLANS GRID */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {plans.map((plan) => {
              const isMonthly = billingMode === 'monthly';
              const displayPrice = isMonthly ? plan.monthlyPrice : plan.price;
              const subtext = isMonthly
                ? `o ${plan.monthlyPriceUf}/mes · Cancela cuando quieras`
                : `o ${plan.priceUf} · 50% al partir / 50% al publicar`;
              const currentFeatures = isMonthly && plan.monthlyFeatures ? plan.monthlyFeatures : plan.features;
              const ctaText = isMonthly ? `Suscribirme a ${plan.name}` : `Cotizar ${plan.name}`;
              const guaranteeNote = isMonthly
                ? 'Garantía 99.9% uptime · Sin amarres de permanencia'
                : 'Pago 50% al partir · 50% al publicar';

              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col justify-between rounded-3xl bg-white p-5 sm:p-7 md:p-9 transition-all duration-300 ${
                    plan.popular
                      ? 'border-2 border-zinc-950 shadow-xl lg:-translate-y-2'
                      : 'border border-zinc-200/80 shadow-xs hover:border-zinc-300 hover:shadow-md'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#0B0B12] px-4 py-1 text-xs font-semibold tracking-wide text-white shadow-md flex items-center gap-1.5 whitespace-nowrap">
                      <Sparkles className="h-3 w-3 text-amber-400 fill-amber-400" />
                      <span>{isMonthly ? 'Plan Más Popular' : 'Más Elegido · 68% de clientes'}</span>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="border-b border-zinc-100 pb-6 mb-6">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500">
                          {plan.id === 'sonda' ? 'Inicio Rápido' : plan.id === 'estacion' ? 'Comercial Completo' : 'Corporativo'}
                        </span>
                        <span className="text-[10px] font-mono font-semibold rounded bg-zinc-100 px-2 py-0.5 text-zinc-600">
                          {isMonthly ? 'Suscripción mensual' : 'Pago único'}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#0B0B12] mt-1 mb-3">
                        {plan.name}
                      </h3>

                      {/* Dynamic Price Display */}
                      <div className="mt-4 mb-2">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xs font-medium text-zinc-500">
                            {isMonthly ? 'cuota' : 'desde'}
                          </span>
                          <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-[#0B0B12]">
                            {displayPrice}
                          </span>
                          {isMonthly && (
                            <span className="text-xs font-semibold text-zinc-500 font-mono">
                              / mes
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-[11px] text-zinc-400">
                          {subtext}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-3">
                        {isMonthly
                          ? `Tu web siempre activa, rápida y actualizada con soporte continuo y hosting incluido.`
                          : plan.description}
                      </p>
                    </div>

                    {/* Features List (Simplified with Global Synchronized Expansion) */}
                    <div className="mb-8">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                        {isMonthly ? 'Qué incluye tu mensualidad:' : 'Qué incluye este plan:'}
                      </p>

                      {/* Simplified primary features */}
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

                    {/* Módulo Opcional: Asistente con IA personalizado - Compacto y no seleccionable */}
                    {isMonthly && plan.aiAssistant && (
                      <div className="mb-6 rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-3.5 transition-colors">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-2.5">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white shadow-2xs border border-zinc-200/60 overflow-hidden">
                              <Orb size={22} state="idle" tone="ink" playful shadow={false} />
                            </div>
                            <span className="text-xs font-semibold text-zinc-900 tracking-tight">
                              Asistente con IA personalizado
                            </span>
                          </div>
                          <span className="rounded-full bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 text-[9px] font-mono font-medium text-emerald-700 whitespace-nowrap">
                            {plan.aiAssistant.shortLabel}
                          </span>
                        </div>

                        <p className="text-[11px] text-zinc-600 leading-relaxed pl-0 mt-2 sm:pl-8 sm:mt-0">
                          {plan.aiAssistant.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenQuoteModal(
                          isMonthly ? `${plan.name} (Mensual)` : plan.name
                        )
                      }
                      className={`group flex w-full items-center justify-center gap-2 rounded-full py-3.5 px-6 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
                        plan.popular
                          ? 'bg-[#0B0B12] text-white hover:bg-zinc-800 shadow-md'
                          : 'border border-zinc-900 bg-white text-zinc-900 hover:bg-zinc-950 hover:text-white'
                      }`}
                    >
                      <span>{ctaText}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                    <p className="mt-2 text-center text-[10px] text-zinc-400 font-mono">
                      {guaranteeNote}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. MODO TURBO PROMO BANNER */}
          <div className="mt-12 rounded-3xl border border-emerald-200/90 bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B0B12] text-white shadow-md">
                <Rocket className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h4 className="text-lg font-semibold text-zinc-950">
                    Modo Turbo: Tu sitio listo en 7 días hábiles
                  </h4>
                  <span className="rounded-full bg-emerald-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    Bonificado $0
                  </span>
                  <span className="font-mono text-xs text-zinc-400 line-through">
                    $280.000 / 7 UF
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-2xl">
                  Si tienes prisa o una fecha límite comercial, activamos el sprint prioritario de estudio. Diseñamos, redactamos y dejamos tu web lista para publicar en 7 días hábiles sin cargo adicional.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenQuoteModal('Estación')}
              className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-[#0B0B12] px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors shadow-sm"
            >
              <span>Pedir con Turbo Gratis</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* 4. OPTIONAL EXTRAS & RETAINERS */}
        <section className="mt-24 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
              Personalización & Extras
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#0B0B12] mt-1 mb-3">
              Servicios adicionales transparentes
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Puedes sumar extras a cualquiera de los planes según las necesidades de tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EXTRAS_PRICING.map((extra) => {
              const displayExtraPrice = `${extra.priceClp} · ${extra.priceUf}${extra.period || ''}`;

              return (
                <div
                  key={extra.id}
                  className="flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-2xs hover:border-zinc-300 transition-colors"
                >
                  <div>
                    {extra.tag && (
                      <span className="inline-block rounded-md bg-zinc-100 px-2 py-0.5 text-[10px] font-mono font-semibold text-zinc-600 mb-3">
                        {extra.tag}
                      </span>
                    )}
                    <h4 className="text-base font-semibold text-zinc-900 mb-1">{extra.name}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed mb-4">{extra.description}</p>
                  </div>
                  <div className="border-t border-zinc-100 pt-3">
                    <span className="font-mono text-base font-bold text-zinc-950">
                      {displayExtraPrice}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. FULL COMPARISON MATRIX */}
        <section className="mt-24 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
              Tabla Comparativa
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#0B0B12] mt-1 mb-3">
              Compara los planes en detalle
            </h2>
            <p className="text-sm text-zinc-600">
              Cada característica explicada sin tecnicismos para que elijas con certeza.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200/90 bg-white shadow-xs overflow-hidden">
            <p className="sm:hidden text-center text-zinc-400 text-[11px] py-2 bg-zinc-50 border-b border-zinc-100 font-mono">
              ← Desliza para comparar todos los planes →
            </p>
            <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <table className="w-full min-w-[640px] text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50/80">
                    <th className="p-4 sm:p-5 font-semibold text-zinc-900 w-2/5 sm:w-1/3">
                      Característica
                    </th>
                    <th className="p-4 sm:p-5 font-semibold text-zinc-900 text-center w-1/5">
                      Sonda
                      <div className="font-mono text-[11px] font-normal text-zinc-500">
                        {billingMode === 'monthly' ? '$89.000/mes (2,25 UF)' : '$490.000 (12,5 UF)'}
                      </div>
                    </th>
                    <th className="p-4 sm:p-5 font-semibold text-zinc-900 text-center bg-zinc-100/60 w-1/5">
                      Estación (Recomendado)
                      <div className="font-mono text-[11px] font-normal text-zinc-500">
                        {billingMode === 'monthly' ? '$149.000/mes (3,75 UF)' : '$990.000 (25,0 UF)'}
                      </div>
                    </th>
                    <th className="p-4 sm:p-5 font-semibold text-zinc-900 text-center w-1/5">
                      Constelación
                      <div className="font-mono text-[11px] font-normal text-zinc-500">
                        {billingMode === 'monthly' ? '$298.000/mes (7,5 UF)' : '$1.690.000 (42,5 UF)'}
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {categories.map((cat) => (
                    <React.Fragment key={cat}>
                      <tr className="bg-zinc-100/40">
                        <td
                          colSpan={4}
                          className="px-4 py-2.5 text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-600"
                        >
                          {cat}
                        </td>
                      </tr>
                      {COMPARISON_TABLE.filter((r) => r.category === cat).map((row) => (
                        <tr key={row.feature} className="hover:bg-zinc-50/60 transition-colors">
                          <td className="p-4 sm:px-5 font-medium text-zinc-800">
                            {row.feature}
                          </td>
                          <td className="p-4 text-center text-zinc-600">
                            {typeof row.sonda === 'boolean' ? (
                              row.sonda ? (
                                <Check className="h-4 w-4 text-emerald-600 mx-auto" />
                              ) : (
                                <X className="h-4 w-4 text-zinc-300 mx-auto" />
                              )
                            ) : (
                              row.sonda
                            )}
                          </td>
                          <td className="p-4 text-center font-medium text-zinc-950 bg-zinc-50/50">
                            {typeof row.estacion === 'boolean' ? (
                              row.estacion ? (
                                <Check className="h-4 w-4 text-emerald-600 mx-auto" />
                              ) : (
                                <X className="h-4 w-4 text-zinc-300 mx-auto" />
                              )
                            ) : (
                              row.estacion
                            )}
                          </td>
                          <td className="p-4 text-center text-zinc-600">
                            {typeof row.constelacion === 'boolean' ? (
                              row.constelacion ? (
                                <Check className="h-4 w-4 text-emerald-600 mx-auto" />
                              ) : (
                                <X className="h-4 w-4 text-zinc-300 mx-auto" />
                              )
                            ) : (
                              row.constelacion
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 6. TRANSPARENCY & METHOD SUMMARY */}
        <section className="mt-24 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="rounded-3xl border border-zinc-200/90 bg-white p-8 sm:p-12 shadow-xs">
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#0B0B12] mb-8 text-center">
              Cómo trabajamos los pagos y la entrega
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-start">
                <span className="font-mono text-2xl font-bold text-zinc-300 mb-2">01</span>
                <h4 className="text-base font-semibold text-zinc-900 mb-1">50% Anticipo</h4>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Para reservar el cupo en el calendario de estudio e iniciar la arquitectura, redacción y diseño interactivo.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <span className="font-mono text-2xl font-bold text-zinc-300 mb-2">02</span>
                <h4 className="text-base font-semibold text-zinc-900 mb-1">Pruebas en Vivo</h4>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Te entregamos un enlace privado para que recorras el sitio como lo haría tu cliente, pruebes los formularios y WhatsApp, y hagamos ajustes.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <span className="font-mono text-2xl font-bold text-zinc-300 mb-2">03</span>
                <h4 className="text-base font-semibold text-zinc-900 mb-1">50% al Publicar</h4>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Solo cuando estés 100% conforme, abonas el saldo restante y conectamos el sitio a tu dominio con certificado SSL y accesos completos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FREQUENTLY ASKED QUESTIONS */}
        <section className="mt-24 px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
              Dudas Frecuentes
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#0B0B12] mt-1 mb-2">
              Preguntas sobre precios y contratación
            </h2>
          </div>

          <div className="space-y-3">
            {PRICING_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-zinc-200/80 bg-white transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                  >
                    <span className="text-sm sm:text-base font-medium text-zinc-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-zinc-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-zinc-950' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 8. BOTTOM CONTACT / CONSULTATION BANNER */}
        <section className="mt-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
          <div className="rounded-3xl bg-[#0B0B12] p-8 sm:p-12 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-4xl font-medium tracking-tight mb-4">
              ¿Tu proyecto necesita un alcance a medida?
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              Cuéntanos qué necesitas (multi-idioma, cotizador complejo, portal de clientes o catálogo) y te armamos una propuesta personalizada en menos de 24 horas.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleWhatsAppConsult}
                className="inline-flex items-center gap-2 rounded-full bg-white text-zinc-950 px-6 py-3 text-sm font-semibold hover:bg-zinc-100 transition-colors shadow-sm"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600 fill-emerald-600" />
                <span>Consultar por WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={onOpenSchedule}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors"
              >
                <span>Agendar videollamada</span>
                <ArrowRight className="h-4 w-4 text-zinc-400" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
