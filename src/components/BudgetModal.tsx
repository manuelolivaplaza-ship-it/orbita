import React, { useEffect, useRef, useState } from 'react';
import {
  X,
  Check,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Zap,
  Image,
  Film,
  Palette,
  PenLine,
  Search,
  MessageSquare,
  BarChart3,
  Camera,
  Rocket,
  Clock,
} from 'lucide-react';
import { BASE_PRICES, formatCLP, planKeyFromName, type PlanId } from '../data/pricing';
import { submitLead } from '../lib/leads';
import { FIELD_MAX } from '../lib/formLimits';
import { whatsappUrl } from '../data/site';
import { HoneypotField } from './HoneypotField';

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

type AddonId =
  | 'turbo'
  | 'copy'
  | 'aiImages'
  | 'productPhoto'
  | 'heroVideo'
  | 'brandKit'
  | 'seo'
  | 'whatsapp'
  | 'analytics'
  | 'motion';

/** Promo temporal: se muestra precio original tachado + GRATIS (no suma al total). */
const ADDONS: {
  id: AddonId;
  name: string;
  desc: string;
  price: number;
  icon: React.ElementType;
  featured?: boolean;
  promoFree?: boolean;
}[] = [
  {
    id: 'turbo',
    name: 'Modo Turbo · 7 días',
    desc: 'Prioridad total. Tu sitio listo para publicar en 7 días hábiles (alcance acotado).',
    price: 280_000,
    icon: Rocket,
    featured: true,
    promoFree: true,
  },
  {
    id: 'aiImages',
    name: 'Imágenes con IA',
    desc: 'Pack de visuales de marca / producto generados y retocados para la web.',
    price: 120_000,
    icon: Image,
  },
  {
    id: 'productPhoto',
    name: 'Pack visual de productos',
    desc: 'Dirección creativa + set de renders o fotomontajes listos para catálogo.',
    price: 180_000,
    icon: Camera,
  },
  {
    id: 'heroVideo',
    name: 'Video / reel para el hero',
    desc: 'Clip corto en loop o micro-video cinematográfico para la portada.',
    price: 150_000,
    icon: Film,
  },
  {
    id: 'brandKit',
    name: 'Brand kit express',
    desc: 'Wordmark, paleta, tipografías y guía mínima de uso en digital.',
    price: 190_000,
    icon: Palette,
  },
  {
    id: 'copy',
    name: 'Copywriting premium',
    desc: 'Textos de conversión en español, revisados contigo antes de publicar.',
    price: 90_000,
    icon: PenLine,
    promoFree: true,
  },
  {
    id: 'seo',
    name: 'SEO técnico + bases',
    desc: 'Títulos, meta, estructura, sitemap y checklist de indexación.',
    price: 70_000,
    icon: Search,
    promoFree: true,
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Business + formularios',
    desc: 'Botones contextuales, formulario inteligente y alertas de lead.',
    price: 55_000,
    icon: MessageSquare,
    promoFree: true,
  },
  {
    id: 'analytics',
    name: 'Analytics & píxeles',
    desc: 'GA4, Meta Pixel / eventos clave y medición de conversiones.',
    price: 45_000,
    icon: BarChart3,
  },
  {
    id: 'motion',
    name: 'Motion & micro-interacciones',
    desc: 'Animaciones suaves de entrada, hover y scroll sin saturar.',
    price: 85_000,
    icon: Zap,
  },
];

function PriceTag({
  price,
  promoFree,
  formatCLP,
  dark,
}: {
  price: number;
  promoFree?: boolean;
  formatCLP: (n: number) => string;
  dark?: boolean;
}) {
  if (promoFree) {
    return (
      <span className="text-right shrink-0">
        <span
          className={`block text-[11px] line-through ${
            dark ? 'text-white/45' : 'text-zinc-400'
          }`}
        >
          {formatCLP(price)}
        </span>
        <span
          className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide ${
            dark ? 'text-emerald-300' : 'text-emerald-600'
          }`}
        >
          Gratis
        </span>
        <span
          className={`block text-[10px] mt-0.5 ${
            dark ? 'text-white/50' : 'text-zinc-400'
          }`}
        >
          tiempo limitado
        </span>
      </span>
    );
  }
  return (
    <span
      className={`text-[11px] font-semibold whitespace-nowrap ${
        dark ? 'text-white' : 'text-zinc-600'
      }`}
    >
      +{formatCLP(price)}
    </span>
  );
}

export const BudgetModal: React.FC<BudgetModalProps> = ({ isOpen, onClose, defaultPlan }) => {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('Estación');
  const [addons, setAddons] = useState<Record<AddonId, boolean>>({
    turbo: true, // promo: gratis por tiempo limitado
    copy: true,
    aiImages: false,
    productPhoto: false,
    heroVideo: false,
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

  useEffect(() => {
    if (defaultPlan) {
      setSelectedPlan(planKeyFromName(defaultPlan));
    }
  }, [defaultPlan]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setError(null);
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

  const buildSummaryText = () => {
    const extras = selectedAddonList.map((a) => a.name).join(', ') || 'Sin extras';
    return [
      `Plan: ${selectedPlan}`,
      `Estimación: ${formatCLP(calculateTotal())}`,
      `Modo Turbo: ${addons.turbo ? 'Sí (7 días) — GRATIS promo' : 'No'}`,
      `Extras: ${extras}`,
      `Ahorro promo: ${formatCLP(promoSavings())}`,
      `Empresa: ${empresa || '—'}`,
      `Rubro: ${rubro || '—'}`,
      `Plazo deseado: ${plazo}`,
      `Objetivo: ${objetivo || '—'}`,
      `Detalle: ${mensaje || '—'}`,
      `Nombre: ${nombre || '—'}`,
      `Email: ${email || '—'}`,
      `Tel: ${telefono || '—'}`,
    ].join('\n');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        total: formatCLP(calculateTotal()),
        honey,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo enviar. Prueba el botón de WhatsApp.');
    } finally {
      setSending(false);
    }
  };

  const handleWhatsAppDirect = () => {
    window.open(whatsappUrl(`Hola Órbita — quiero cotizar.\n\n${buildSummaryText()}`), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div
        className="fixed inset-0 bg-[#0B0B12]/45 backdrop-blur-md"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="budget-modal-title"
        className="relative w-full max-w-4xl max-h-[100dvh] sm:max-h-[92vh] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-zinc-200/90 z-10 flex flex-col overflow-hidden animate-fade-in-up"
      >
        {/* Header sticky */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-zinc-100 shrink-0 bg-white">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-full bg-[#0B0B12] text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-zinc-300" />
            </div>
            <div className="min-w-0">
              <h3 id="budget-modal-title" className="text-lg sm:text-xl font-medium text-[#0B0B12] tracking-tight truncate">
                Cotización orbital
              </h3>
              <p className="text-xs text-zinc-500">
                Plan + extras + plazos · estimación en CLP
              </p>
            </div>
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

        {submitted ? (
          <div className="flex-1 overflow-y-auto py-14 px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 mb-5">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-medium text-[#0B0B12] mb-2">¡Solicitud recibida!</h4>
            <p className="text-zinc-600 text-sm max-w-md mx-auto leading-relaxed mb-2">
              Registramos tu interés en <strong className="text-[#0B0B12]">Plan {selectedPlan}</strong>
              {addons.turbo ? ' con Modo Turbo (7 días)' : ''}.
            </p>
            <p className="text-zinc-500 text-xs max-w-sm mx-auto mb-8">
              Estimación de referencia: {formatCLP(calculateTotal())} + IVA. Te contactamos con la propuesta exacta.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Confirmar por WhatsApp
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium border border-zinc-200 text-zinc-700 hover:bg-zinc-50"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
            <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 space-y-8">
              {/* 1. Plan */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">01</span>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                    Elige tu plan base
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(
                    [
                      { id: 'Sonda', label: 'Sonda', hint: 'Landing / campaña' },
                      { id: 'Estación', label: 'Estación', hint: 'Web premium' },
                      { id: 'Constelación', label: 'Constelación', hint: 'Multi / rediseño' },
                    ] as const
                  ).map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`text-left p-4 rounded-2xl border transition-all ${
                        selectedPlan === plan.id
                          ? 'border-[#0B0B12] bg-zinc-50 ring-2 ring-[#0B0B12]/10'
                          : 'border-zinc-200 bg-white hover:border-zinc-300'
                      }`}
                    >
                      <div className="text-sm font-medium text-[#0B0B12]">{plan.label}</div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">{plan.hint}</div>
                      <div className="text-sm font-semibold text-[#0B0B12] mt-2">
                        desde {formatCLP(BASE_PRICES[plan.id])}
                      </div>
                    </button>
                  ))}
                </div>
              </section>

              {/* 2. Turbo highlight */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">02</span>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                    Velocidad de entrega
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => toggleAddon('turbo')}
                  className={`w-full text-left p-5 rounded-2xl border transition-all relative overflow-hidden ${
                    addons.turbo
                      ? 'border-[#0B0B12] bg-[#0B0B12] text-white'
                      : 'border-zinc-200 bg-gradient-to-br from-zinc-50 to-white hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-start gap-4 relative z-10">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                        addons.turbo ? 'bg-white/10 text-white' : 'bg-zinc-100 text-[#0B0B12]'
                      }`}
                    >
                      <Rocket className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-base font-medium">Modo Turbo</span>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            addons.turbo
                              ? 'bg-white/15 text-white'
                              : 'bg-zinc-900 text-white'
                          }`}
                        >
                          7 días
                        </span>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            addons.turbo
                              ? 'bg-emerald-400/20 text-emerald-200'
                              : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          }`}
                        >
                          Gratis · tiempo limitado
                        </span>
                      </div>
                      <p
                        className={`text-sm leading-relaxed ${
                          addons.turbo ? 'text-white/75' : 'text-zinc-600'
                        }`}
                      >
                        Sitio listo para publicar en 7 días hábiles. Ideal para lanzamientos, campañas y fechas límite. Promo temporal: sin costo extra.
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <PriceTag
                        price={280_000}
                        promoFree
                        formatCLP={formatCLP}
                        dark={addons.turbo}
                      />
                      <div
                        className={`text-[11px] mt-1.5 flex items-center justify-end gap-1 ${
                          addons.turbo ? 'text-white/60' : 'text-zinc-500'
                        }`}
                      >
                        <Clock className="w-3 h-3" />
                        {addons.turbo ? 'Activado' : 'Opcional'}
                      </div>
                    </div>
                  </div>
                </button>
              </section>

              {/* 3. Creative extras */}
              <section>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">03</span>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                    Servicios creativos y extras
                  </h4>
                </div>
                <p className="text-xs text-zinc-500 mb-4">
                  Combina lo que necesitas: imágenes, video, marca, SEO y más.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ADDONS.filter((a) => a.id !== 'turbo').map((addon) => {
                    const Icon = addon.icon;
                    const on = addons[addon.id];
                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddon(addon.id)}
                        className={`text-left p-3.5 rounded-xl border transition-all flex gap-3 ${
                          on
                            ? 'border-[#0B0B12]/25 bg-zinc-50 ring-1 ring-[#0B0B12]/10'
                            : 'border-zinc-200 bg-white hover:border-zinc-300'
                        }`}
                      >
                        <span
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                            on ? 'bg-[#0B0B12] text-white' : 'bg-zinc-100 text-zinc-600'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-start justify-between gap-2">
                            <span className="min-w-0">
                              <span className="text-sm font-medium text-[#0B0B12] leading-snug flex flex-wrap items-center gap-1.5">
                                {addon.name}
                                {addon.promoFree && (
                                  <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                                    Promo
                                  </span>
                                )}
                              </span>
                            </span>
                            <PriceTag
                              price={addon.price}
                              promoFree={addon.promoFree}
                              formatCLP={formatCLP}
                            />
                          </span>
                          <span className="block text-[11px] text-zinc-500 leading-relaxed mt-0.5">
                            {addon.desc}
                          </span>
                        </span>
                        <span
                          className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                            on
                              ? 'bg-[#0B0B12] border-[#0B0B12] text-white'
                              : 'border-zinc-300 bg-white'
                          }`}
                        >
                          {on && <Check className="w-3 h-3" />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* 4. Project details */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">04</span>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                    Detalles del proyecto
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
                  <HoneypotField value={honey} onChange={setHoney} />
                  <input
                    type="text"
                    required
                    placeholder="Nombre *"
                    value={nombre}
                    maxLength={FIELD_MAX.nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:border-zinc-400 outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email *"
                    value={email}
                    maxLength={FIELD_MAX.email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:border-zinc-400 outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp / teléfono"
                    value={telefono}
                    maxLength={FIELD_MAX.telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:border-zinc-400 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Empresa o marca"
                    value={empresa}
                    maxLength={FIELD_MAX.empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:border-zinc-400 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Rubro (ej. clínica, SaaS, retail)"
                    value={rubro}
                    maxLength={FIELD_MAX.rubro}
                    onChange={(e) => setRubro(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:border-zinc-400 outline-none sm:col-span-2"
                  />
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                      ¿Para cuándo lo necesitas?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: '7dias', label: 'En 7 días' },
                        { id: '14dias', label: 'En 2 semanas' },
                        { id: '30dias', label: 'En un mes' },
                        { id: 'flexible', label: 'Flexible' },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setPlazo(opt.id);
                            if (opt.id === '7dias' && !addons.turbo) {
                              setAddons((p) => ({ ...p, turbo: true }));
                            }
                          }}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-medium transition-all ${
                            plazo === opt.id
                              ? 'border-[#0B0B12] bg-[#0B0B12] text-white'
                              : 'border-zinc-200 text-zinc-700 hover:border-zinc-300'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Objetivo principal (más leads, lanzamiento, rediseño…)"
                    value={objetivo}
                    maxLength={FIELD_MAX.objetivo}
                    onChange={(e) => setObjetivo(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:border-zinc-400 outline-none sm:col-span-2"
                  />
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos más: qué ofreces, referencias visuales, páginas que te gustan, integraciones, etc."
                    value={mensaje}
                    maxLength={FIELD_MAX.mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:border-zinc-400 outline-none resize-none sm:col-span-2"
                  />
                </div>
              </section>
            </div>

            {/* Sticky footer summary */}
            <div className="shrink-0 border-t border-zinc-100 bg-white px-5 sm:px-8 py-4 sm:py-5">
              {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
                    Estimación de inversión
                  </span>
                  <div className="text-2xl sm:text-3xl font-semibold text-[#0B0B12] tracking-tight">
                    {formatCLP(calculateTotal())}
                    <span className="text-xs font-normal text-zinc-500 ml-1.5">+ IVA ref.</span>
                  </div>
                  {promoSavings() > 0 && (
                    <p className="text-[11px] text-emerald-600 font-medium mt-1">
                      Ahorras {formatCLP(promoSavings())} con la promo actual
                    </p>
                  )}
                  {selectedAddonList.length > 0 && (
                    <p className="text-[11px] text-zinc-500 mt-0.5 max-w-sm line-clamp-1">
                      Incluye: {selectedAddonList.map((a) => a.name).join(' · ')}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="p-3.5 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors shrink-0"
                    title="Enviar por WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </button>
                  <button
                    type="submit"
                    disabled={sending}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#0B0B12] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all disabled:opacity-70"
                  >
                    <span>{sending ? 'Enviando…' : 'Enviar cotización'}</span>
                    <ArrowRight className="w-4 h-4 text-zinc-400" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
