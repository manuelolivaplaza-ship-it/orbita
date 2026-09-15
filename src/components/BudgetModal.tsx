import React, { useEffect, useRef, useState } from 'react';
import {
  X,
  Check,
  ArrowRight,
  ArrowLeft,
  Image,
  Palette,
  PenLine,
  Search,
  MessageSquare,
  BarChart3,
  Zap,
  LayoutTemplate,
  PanelsTopLeft,
  Layers,
} from 'lucide-react';
import {
  BASE_PRICES,
  IVA_SHORT,
  PLAN_HINTS,
  TURBO_PROMO_UNTIL_SHORT,
  formatCLP,
  planKeyFromName,
  type PlanId,
} from '../data/pricing';
import { submitLead } from '../lib/leads';
import { FIELD_MAX } from '../lib/formLimits';
import { HoneypotField } from './HoneypotField';

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

type AddonId = 'copy' | 'aiImages' | 'brandKit' | 'seo' | 'whatsapp' | 'analytics' | 'motion';
type Step = 1 | 2;

const PLANS: {
  id: PlanId;
  label: string;
  hint: string;
  includes: string;
  icon: React.ElementType;
  recommended?: boolean;
}[] = [
  {
    id: 'Sonda',
    label: 'Sonda',
    hint: PLAN_HINTS.Sonda,
    includes: 'Una página para captar y convertir',
    icon: LayoutTemplate,
  },
  {
    id: 'Estación',
    label: 'Estación',
    hint: PLAN_HINTS.Estación,
    includes: 'Sitio comercial con CRM y WhatsApp',
    icon: PanelsTopLeft,
    recommended: true,
  },
  {
    id: 'Constelación',
    label: 'Constelación',
    hint: PLAN_HINTS.Constelación,
    includes: 'Varias secciones o un rediseño completo',
    icon: Layers,
  },
];

const ADDONS: {
  id: AddonId;
  name: string;
  desc: string;
  price: number;
  icon: React.ElementType;
  promoFree?: boolean;
  group: 'promo' | 'optional';
}[] = [
  {
    id: 'copy',
    name: 'Textos profesionales',
    desc: 'Copy de conversión en español, revisado contigo antes de publicar.',
    price: 90_000,
    icon: PenLine,
    promoFree: true,
    group: 'promo',
  },
  {
    id: 'seo',
    name: 'SEO para Google',
    desc: 'Títulos, meta, sitemap y checklist para que te encuentren.',
    price: 70_000,
    icon: Search,
    promoFree: true,
    group: 'promo',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp y formularios',
    desc: 'Botones contextuales, formulario y alerta de cada lead.',
    price: 55_000,
    icon: MessageSquare,
    promoFree: true,
    group: 'promo',
  },
  {
    id: 'aiImages',
    name: 'Imágenes con IA',
    desc: 'Visuales de marca o producto, generados y retocados para la web.',
    price: 120_000,
    icon: Image,
    group: 'optional',
  },
  {
    id: 'brandKit',
    name: 'Identidad visual express',
    desc: 'Wordmark, paleta, tipografías y guía mínima de uso digital.',
    price: 190_000,
    icon: Palette,
    group: 'optional',
  },
  {
    id: 'analytics',
    name: 'Medición de conversiones',
    desc: 'GA4, Meta Pixel y eventos clave para saber qué funciona.',
    price: 45_000,
    icon: BarChart3,
    group: 'optional',
  },
  {
    id: 'motion',
    name: 'Animaciones suaves',
    desc: 'Entradas, hover y scroll con movimiento, sin saturar.',
    price: 85_000,
    icon: Zap,
    group: 'optional',
  },
];

const PROMO_ADDONS = ADDONS.filter((a) => a.group === 'promo');
const OPTIONAL_ADDONS = ADDONS.filter((a) => a.group === 'optional');

const PLAZO_OPTIONS = [
  { id: '7dias', label: 'En 7 días' },
  { id: '14dias', label: 'En 2 semanas' },
  { id: '30dias', label: 'En un mes' },
  { id: 'flexible', label: 'Flexible' },
] as const;

function PriceTag({
  price,
  promoFree,
  formatCLP,
  align = 'right',
}: {
  price: number;
  promoFree?: boolean;
  formatCLP: (n: number) => string;
  align?: 'left' | 'right';
}) {
  const alignClass = align === 'left' ? 'text-left' : 'text-right';
  if (promoFree) {
    return (
      <span className={`${alignClass} shrink-0`}>
        <span className="block text-[11px] line-through text-zinc-400">{formatCLP(price)}</span>
        <span className="inline-flex items-center text-xs font-bold uppercase tracking-wide text-emerald-600">
          Gratis
        </span>
      </span>
    );
  }
  return (
    <span className={`text-[12px] font-semibold whitespace-nowrap text-zinc-700 ${alignClass}`}>
      +{formatCLP(price)}
    </span>
  );
}

function AddonCard({
  addon,
  on,
  onToggle,
  tile,
}: {
  addon: (typeof ADDONS)[number];
  on: boolean;
  onToggle: () => void;
  tile?: boolean;
}) {
  const Icon = addon.icon;
  const selected = on
    ? 'border-[#0B0B12]/30 bg-zinc-50 ring-1 ring-[#0B0B12]/10'
    : 'border-zinc-200 bg-white hover:border-zinc-300';
  const iconBox = on ? 'bg-[#0B0B12] text-white' : 'bg-zinc-100 text-zinc-600';
  const checkBox = on
    ? 'bg-[#0B0B12] border-[#0B0B12] text-white'
    : 'border-zinc-300 bg-white';

  if (tile) {
    return (
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={on}
        className={`text-left p-4 rounded-2xl border transition-all flex flex-col h-full ${selected}`}
      >
        <span className="flex items-start justify-between gap-2 mb-3">
          <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBox}`}>
            <Icon className="w-4 h-4" />
          </span>
          <span className={`w-5 h-5 rounded-md border flex items-center justify-center ${checkBox}`}>
            {on && <Check className="w-3 h-3" />}
          </span>
        </span>
        <span className="text-sm font-medium text-[#0B0B12] leading-snug">{addon.name}</span>
        <span className="block text-[11px] text-zinc-500 leading-relaxed mt-1 flex-1">{addon.desc}</span>
        <span className="mt-3">
          <PriceTag price={addon.price} promoFree={addon.promoFree} formatCLP={formatCLP} align="left" />
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={on}
      className={`text-left p-3.5 rounded-2xl border transition-all flex gap-3 ${selected}`}
    >
      <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBox}`}>
        <Icon className="w-4 h-4" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-start justify-between gap-2">
          <span className="text-sm font-medium text-[#0B0B12] leading-snug">{addon.name}</span>
          <PriceTag price={addon.price} promoFree={addon.promoFree} formatCLP={formatCLP} />
        </span>
        <span className="block text-[11px] text-zinc-500 leading-relaxed mt-0.5">{addon.desc}</span>
      </span>
      <span className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${checkBox}`}>
        {on && <Check className="w-3 h-3" />}
      </span>
    </button>
  );
}

function Field({
  id,
  label,
  required,
  children,
  className = '',
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-1.5">
        {label}
        {required ? <span className="text-zinc-400 font-medium normal-case tracking-normal"> · obligatorio</span> : null}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-[#0B0B12] placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-[#0B0B12]/8 outline-none bg-white';

export const BudgetModal: React.FC<BudgetModalProps> = ({ isOpen, onClose, defaultPlan }) => {
  const [step, setStep] = useState<Step>(1);
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('Estación');
  const [addons, setAddons] = useState<Record<AddonId, boolean>>({
    copy: true,
    aiImages: false,
    brandKit: false,
    seo: true,
    whatsapp: true,
    analytics: false,
    motion: false,
  });
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [rubro, setRubro] = useState('');
  const [plazo, setPlazo] = useState('flexible');
  const [objetivo, setObjetivo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [honey, setHoney] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (defaultPlan) {
      setSelectedPlan(planKeyFromName(defaultPlan));
    }
  }, [defaultPlan]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setError(null);
      setStep(1);
      setSending(false);
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    dialogRef.current?.querySelector<HTMLElement>('button, input, textarea, select')?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0 });
  }, [step, submitted]);

  if (!isOpen) return null;

  const toggleAddon = (id: AddonId) => {
    setAddons((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const calculateTotal = () => {
    let total = BASE_PRICES[selectedPlan] ?? BASE_PRICES.Estación;
    for (const addon of ADDONS) {
      if (addons[addon.id] && !addon.promoFree) total += addon.price;
    }
    return total;
  };

  const promoSavings = () =>
    ADDONS.filter((a) => a.promoFree && addons[a.id]).reduce((s, a) => s + a.price, 0);

  const selectedAddonList = ADDONS.filter((a) => addons[a.id]);
  const paidAddonCount = selectedAddonList.filter((a) => !a.promoFree).length;
  const total = calculateTotal();
  const savings = promoSavings();
  const planMeta = PLANS.find((p) => p.id === selectedPlan) ?? PLANS[1];
  const plazoLabel = PLAZO_OPTIONS.find((p) => p.id === plazo)?.label ?? 'Flexible';

  const goNext = () => setStep(2);
  const goBack = () => setStep(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step !== 2) {
      setStep(2);
      return;
    }
    setSending(true);
    setError(null);
    try {
      await submitLead({
        source: 'cotizacion',
        nombre,
        email,
        telefono,
        empresa,
        rubro,
        plazo,
        objetivo,
        mensaje,
        plan: selectedPlan,
        extras: selectedAddonList.map((a) => a.name).join(', ') || 'Sin extras',
        total: formatCLP(total),
        honey,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo enviar. Prueba de nuevo en un momento.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="fixed inset-0 bg-[#0B0B12]/45 backdrop-blur-md" onClick={onClose} />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="budget-modal-title"
        className="relative z-10 flex max-h-[100dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl border border-zinc-200/90 bg-white shadow-2xl sm:max-h-[92vh] sm:rounded-3xl"
      >
        <div className="shrink-0 border-b border-zinc-100 bg-white">
          <div className="flex items-center justify-between px-5 sm:px-7 py-4">
            <div className="min-w-0">
              <h3 id="budget-modal-title" className="text-lg sm:text-xl font-medium text-[#0B0B12] tracking-tight">
                Cotiza tu sitio
              </h3>
              <p className="text-xs text-zinc-500 mt-0.5">
                {submitted ? 'Solicitud enviada' : `Paso ${step} de 2 · ${IVA_SHORT}`}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-full hover:bg-zinc-100 text-zinc-600 transition-colors shrink-0"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!submitted && (
            <nav aria-label="Pasos de la cotización" className="px-5 sm:px-7 pb-4">
              <ol className="grid grid-cols-2 gap-3">
                {(
                  [
                    { id: 1 as const, label: 'Tu sitio', hint: 'Plan y complementos' },
                    { id: 2 as const, label: 'Tus datos', hint: 'Para enviarte la propuesta' },
                  ] as const
                ).map((s) => {
                  const active = step === s.id;
                  const done = step > s.id;
                  return (
                    <li key={s.id}>
                      <button
                        type="button"
                        onClick={() => setStep(s.id)}
                        className="w-full text-left"
                        aria-current={active ? 'step' : undefined}
                      >
                        <div className="flex items-center gap-2.5 mb-2">
                          <span
                            className={`w-6 h-6 rounded-full text-[11px] font-semibold flex items-center justify-center shrink-0 ${
                              active || done ? 'bg-[#0B0B12] text-white' : 'bg-zinc-100 text-zinc-500'
                            }`}
                          >
                            {done ? <Check className="w-3.5 h-3.5" /> : s.id}
                          </span>
                          <span className="min-w-0">
                            <span
                              className={`block text-sm font-medium truncate ${
                                active ? 'text-[#0B0B12]' : 'text-zinc-600'
                              }`}
                            >
                              {s.label}
                            </span>
                            <span className="block text-[11px] text-zinc-500 truncate">{s.hint}</span>
                          </span>
                        </div>
                        <div
                          className={`h-0.5 rounded-full ${active || done ? 'bg-[#0B0B12]' : 'bg-zinc-200'}`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}
        </div>

        {submitted ? (
          <div className="flex-1 overflow-y-auto py-12 px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 mb-5">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-medium text-[#0B0B12] mb-2">Solicitud recibida</h4>
            <p className="text-zinc-600 text-sm max-w-md mx-auto leading-relaxed mb-5">
              Registramos tu interés en <strong className="text-[#0B0B12]">Plan {selectedPlan}</strong>
              {selectedAddonList.length > 0 ? ` con ${selectedAddonList.length} complemento${selectedAddonList.length === 1 ? '' : 's'}` : ''}.
            </p>
            <div className="max-w-sm mx-auto rounded-2xl border border-zinc-200 bg-zinc-50/80 px-4 py-3 text-left mb-8">
              <p className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold mb-1">Estimación de referencia</p>
              <p className="text-xl font-semibold text-[#0B0B12]">
                {formatCLP(total)} <span className="text-xs font-normal text-zinc-500">{IVA_SHORT}</span>
              </p>
              {selectedAddonList.length > 0 && (
                <p className="text-[11px] text-zinc-500 mt-1.5 leading-relaxed">
                  {selectedAddonList.map((a) => a.name).join(' · ')}
                </p>
              )}
            </div>
            <p className="text-zinc-500 text-xs max-w-sm mx-auto mb-8">
              Quedó en nuestro CRM. Te contactamos con la propuesta exacta.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium bg-[#0B0B12] text-white hover:bg-zinc-800"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
            <div ref={contentRef} className="flex-1 overflow-y-auto px-5 sm:px-7 py-5 pb-8 space-y-7">
              {step === 1 ? (
                <>
                  <section>
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-[#0B0B12]">Elige tu plan</h4>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        Es la base del sitio. Recomendamos Estación para la mayoría de negocios.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                      {PLANS.map((plan) => {
                        const Icon = plan.icon;
                        const on = selectedPlan === plan.id;
                        return (
                          <button
                            key={plan.id}
                            type="button"
                            onClick={() => setSelectedPlan(plan.id)}
                            aria-pressed={on}
                            className={`text-left p-2.5 sm:p-3.5 rounded-2xl border transition-all ${
                              on
                                ? 'border-[#0B0B12] bg-zinc-50 ring-2 ring-[#0B0B12]/10'
                                : 'border-zinc-200 bg-white hover:border-zinc-300'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-1 mb-1.5 sm:mb-2">
                              <span
                                className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center ${
                                  on ? 'bg-[#0B0B12] text-white' : 'bg-zinc-100 text-zinc-600'
                                }`}
                              >
                                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              </span>
                              <span
                                className={`w-4 h-4 sm:w-5 sm:h-5 rounded border sm:rounded-md flex items-center justify-center ${
                                  on
                                    ? 'bg-[#0B0B12] border-[#0B0B12] text-white'
                                    : 'border-zinc-300 bg-white'
                                }`}
                              >
                                {on && <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-[13px] sm:text-sm font-medium text-[#0B0B12] leading-tight">
                                {plan.label}
                              </span>
                              {plan.recommended && (
                                <span className="hidden sm:inline-flex text-[9px] font-semibold uppercase tracking-wider text-zinc-600 bg-zinc-100 px-1.5 py-0.5 rounded-full">
                                  Recomendado
                                </span>
                              )}
                            </div>
                            <div className="hidden sm:block text-[11px] text-zinc-500 mt-0.5">{plan.hint}</div>
                            <div className="hidden sm:block text-[11px] text-zinc-500 mt-1.5 leading-snug">
                              {plan.includes}
                            </div>
                            <div className="text-[12px] sm:text-sm font-semibold text-[#0B0B12] mt-1 sm:mt-2">
                              {formatCLP(BASE_PRICES[plan.id])}
                            </div>
                            <div className="hidden sm:block text-[10px] text-zinc-400 mt-0.5">{IVA_SHORT}</div>
                          </button>
                        );
                      })}
                    </div>
                  </section>

                  <section>
                    <div className="mb-1">
                      <h4 className="text-sm font-semibold text-[#0B0B12] flex items-center gap-2">
                        Complementos recomendados
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Promo
                        </span>
                      </h4>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        Van sin cargo hasta el {TURBO_PROMO_UNTIL_SHORT}. Puedes quitarlos si no los necesitas.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-3">
                      {PROMO_ADDONS.map((addon) => (
                        <React.Fragment key={addon.id}>
                          <div className="sm:hidden">
                            <AddonCard
                              addon={addon}
                              on={addons[addon.id]}
                              onToggle={() => toggleAddon(addon.id)}
                            />
                          </div>
                          <div className="hidden sm:block h-full">
                            <AddonCard
                              addon={addon}
                              on={addons[addon.id]}
                              onToggle={() => toggleAddon(addon.id)}
                              tile
                            />
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </section>

                  <section>
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-[#0B0B12]">¿Quieres sumar algo más?</h4>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        Opcional. El plan ya incluye un sitio listo para publicar.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {OPTIONAL_ADDONS.map((addon) => (
                        <AddonCard
                          key={addon.id}
                          addon={addon}
                          on={addons[addon.id]}
                          onToggle={() => toggleAddon(addon.id)}
                        />
                      ))}
                    </div>
                  </section>
                </>
              ) : (
                <>
                  <section className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">Resumen</p>
                      <button
                        type="button"
                        onClick={goBack}
                        className="text-[11px] font-medium text-zinc-600 hover:text-[#0B0B12] underline underline-offset-2 shrink-0"
                      >
                        Cambiar
                      </button>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      <li className="flex justify-between gap-3 text-xs text-zinc-700">
                        <span>
                          <span className="font-medium text-[#0B0B12]">Plan {planMeta.label}</span>
                          <span className="text-zinc-500"> · {planMeta.hint}</span>
                        </span>
                        <span className="font-medium shrink-0">{formatCLP(BASE_PRICES[selectedPlan])}</span>
                      </li>
                      {selectedAddonList.map((a) => (
                        <li key={a.id} className="flex justify-between gap-3 text-xs text-zinc-600">
                          <span>{a.name}</span>
                          <span className={a.promoFree ? 'text-emerald-600 font-medium shrink-0' : 'font-medium shrink-0'}>
                            {a.promoFree ? 'Gratis' : `+${formatCLP(a.price)}`}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {selectedAddonList.length === 0 && (
                      <p className="text-[11px] text-zinc-500 mt-2">Sin complementos — solo el plan.</p>
                    )}
                  </section>

                  <section>
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-[#0B0B12]">Tus datos</h4>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        Con esto armamos la propuesta y te contactamos.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
                      <HoneypotField value={honey} onChange={setHoney} />
                      <Field id="quote-nombre" label="Nombre" required>
                        <input
                          id="quote-nombre"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Tu nombre"
                          value={nombre}
                          maxLength={FIELD_MAX.nombre}
                          onChange={(e) => setNombre(e.target.value)}
                          className={inputClass}
                        />
                      </Field>
                      <Field id="quote-email" label="Email" required>
                        <input
                          id="quote-email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="tucorreo@empresa.cl"
                          value={email}
                          maxLength={FIELD_MAX.email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={inputClass}
                        />
                      </Field>
                      <Field id="quote-tel" label="WhatsApp">
                        <input
                          id="quote-tel"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+56 9 …"
                          value={telefono}
                          maxLength={FIELD_MAX.telefono}
                          onChange={(e) => setTelefono(e.target.value)}
                          className={inputClass}
                        />
                      </Field>
                      <Field id="quote-empresa" label="Empresa o marca">
                        <input
                          id="quote-empresa"
                          type="text"
                          autoComplete="organization"
                          placeholder="Nombre de tu negocio"
                          value={empresa}
                          maxLength={FIELD_MAX.empresa}
                          onChange={(e) => setEmpresa(e.target.value)}
                          className={inputClass}
                        />
                      </Field>
                      <Field id="quote-rubro" label="Rubro" className="sm:col-span-2">
                        <input
                          id="quote-rubro"
                          type="text"
                          placeholder="Ej. clínica, ferretería, estudio legal"
                          value={rubro}
                          maxLength={FIELD_MAX.rubro}
                          onChange={(e) => setRubro(e.target.value)}
                          className={inputClass}
                        />
                      </Field>
                      <div className="sm:col-span-2">
                        <p className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                          ¿Para cuándo lo necesitas?
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {PLAZO_OPTIONS.map((opt) => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setPlazo(opt.id)}
                              className={`py-2.5 px-3 rounded-xl border text-xs font-medium transition-all ${
                                plazo === opt.id
                                  ? 'border-[#0B0B12] bg-[#0B0B12] text-white'
                                  : 'border-zinc-200 text-zinc-700 hover:border-zinc-300 bg-white'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <Field id="quote-objetivo" label="Objetivo principal" className="sm:col-span-2">
                        <input
                          id="quote-objetivo"
                          type="text"
                          placeholder="Más leads, lanzamiento, rediseño…"
                          value={objetivo}
                          maxLength={FIELD_MAX.objetivo}
                          onChange={(e) => setObjetivo(e.target.value)}
                          className={inputClass}
                        />
                      </Field>
                      <Field id="quote-mensaje" label="Cuéntanos más" className="sm:col-span-2">
                        <textarea
                          id="quote-mensaje"
                          rows={4}
                          placeholder="Qué ofreces, referencias visuales, páginas que te gustan, integraciones…"
                          value={mensaje}
                          maxLength={FIELD_MAX.mensaje}
                          onChange={(e) => setMensaje(e.target.value)}
                          className={`${inputClass} resize-none`}
                        />
                      </Field>
                    </div>
                  </section>
                </>
              )}
            </div>

            <div className="shrink-0 border-t border-zinc-100 bg-white px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-7 sm:py-4">
              {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
                    Estimación
                  </span>
                  <div className="text-2xl font-semibold text-[#0B0B12] tracking-tight">
                    {formatCLP(total)}
                    <span className="text-xs font-normal text-zinc-500 ml-1.5">{IVA_SHORT}</span>
                  </div>
                  {savings > 0 && (
                    <p className="text-[11px] text-emerald-600 font-medium mt-0.5">
                      Ahorras {formatCLP(savings)} con la promo
                    </p>
                  )}
                  <p className="text-[11px] text-zinc-500 mt-0.5 max-w-sm truncate">
                    {planMeta.label}
                    {paidAddonCount > 0 ? ` · ${paidAddonCount} extra${paidAddonCount === 1 ? '' : 's'}` : ''}
                    {step === 2 ? ` · ${plazoLabel}` : ''}
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {step === 2 && (
                    <button
                      type="button"
                      onClick={goBack}
                      aria-label="Volver al paso anterior"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-full text-sm font-medium border border-zinc-200 text-zinc-700 hover:bg-zinc-50 shrink-0"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span className="hidden sm:inline">Volver</span>
                    </button>
                  )}
                  {step === 1 ? (
                    <button
                      type="button"
                      onClick={goNext}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#0B0B12] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all"
                    >
                      <span>Continuar a tus datos</span>
                      <ArrowRight className="w-4 h-4 text-zinc-400" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={sending}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#0B0B12] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all disabled:opacity-70"
                    >
                      <span>{sending ? 'Enviando…' : 'Enviar cotización'}</span>
                      <ArrowRight className="w-4 h-4 text-zinc-400" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
