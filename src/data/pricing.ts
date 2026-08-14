import type { PlanItem } from '../types';

export const BASE_PRICES = {
  Sonda: 490_000,
  Estación: 990_000,
  Constelación: 1_690_000,
} as const;

export type PlanId = keyof typeof BASE_PRICES;

export const PLAN_HINTS: Record<PlanId, string> = {
  Sonda: 'Landing / campaña',
  Estación: 'Web premium',
  Constelación: 'Multi / rediseño',
};

export const plans: PlanItem[] = [
  {
    id: 'sonda',
    name: 'Plan Sonda',
    price: '$490.000 CLP',
    priceRaw: BASE_PRICES.Sonda,
    description: 'Ideal para validar una oferta o lanzar una campaña con máxima claridad y velocidad.',
    features: [
      'Landing de 1 página de alto impacto',
      'Hasta 5–6 bloques estratégicos',
      'Diseño responsive 100% mobile',
      'Formulario o WhatsApp funcional',
      '1 ronda de revisiones',
      'Entrega típica: 14–18 días',
    ],
    ctaText: 'Pedir presupuesto Sonda',
  },
  {
    id: 'estacion',
    name: 'Plan Estación',
    price: '$990.000 CLP',
    priceRaw: BASE_PRICES.Estación,
    popular: true,
    description: 'La opción principal para empresas y servicios que buscan presencia sólida y conversión.',
    features: [
      'Landing premium o sitio (5–8 bloques)',
      'Hero con media e interacción',
      'Motion suave y sistema visual',
      'SEO técnico base + analytics',
      '2 rondas de revisiones',
      'Guía de publicación y handoff',
      'Entrega típica: 18–25 días',
    ],
    ctaText: 'Pedir presupuesto Estación',
  },
  {
    id: 'constelacion',
    name: 'Plan Constelación',
    price: '$1.690.000 CLP',
    priceRaw: BASE_PRICES.Constelación,
    description: 'Para multi-sección, rediseños o marcas que necesitan acompañamiento y extras creativos.',
    features: [
      'Sitio multi-sección o rediseño',
      'Copy colaborativo de conversión',
      'Prioridad en el calendario',
      'Integraciones (WhatsApp / CRM)',
      '15 días de soporte post-lanzamiento',
      'Pack creativo base (imágenes o brand)',
      'Entrega típica: 25–35 días',
    ],
    ctaText: 'Pedir presupuesto Constelación',
  },
];

export const PLAN_SUMMARIES: { plan: PlanId; price: string; for: string }[] = [
  { plan: 'Sonda', price: 'desde $490.000', for: 'Landing o campaña puntual' },
  { plan: 'Estación', price: 'desde $990.000', for: 'Landing premium o sitio 5–8 bloques' },
  { plan: 'Constelación', price: 'desde $1.690.000', for: 'Multi-sección, rediseño o pack creativo' },
];

export function planKeyFromName(name?: string): PlanId {
  if (!name) return 'Estación';
  const clean = name.replace(/^Plan\s+/i, '').trim();
  if (clean in BASE_PRICES) return clean as PlanId;
  return 'Estación';
}

export function formatCLP(amount: number): string {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(amount);
}
