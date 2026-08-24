import type { LucideIcon } from 'lucide-react';
import {
  Building2,
  Calculator,
  Code2,
  DraftingCompass,
  Dumbbell,
  Megaphone,
  PawPrint,
  PenTool,
  Scale,
  ShoppingBag,
  Sparkles,
  Stethoscope,
} from 'lucide-react';

export type Sector = {
  slug: string;
  label: string;
  heroTitle: string;
  description: string;
  accent: string;
  icon: LucideIcon;
};

/** Orden pensado para venta: primero los nichos con más propuestas. */
export const SECTORES: Sector[] = [
  {
    slug: 'dental',
    label: 'Dental',
    heroTitle: 'Sitios web para clínicas dentales',
    description:
      'Propuestas pensadas para clínicas dentales: agendar hora, tratamientos y confianza desde la primera pantalla.',
    accent: '#0E7490',
    icon: Stethoscope,
  },
  {
    slug: 'legal',
    label: 'Legal',
    heroTitle: 'Sitios web para estudios jurídicos',
    description:
      'Sobriedad y jerarquía: prácticas, equipo y una propuesta de valor clara para clientes exigentes.',
    accent: '#92400E',
    icon: Scale,
  },
  {
    slug: 'arquitectura',
    label: 'Arquitectura',
    heroTitle: 'Sitios web para estudios de arquitectura',
    description:
      'La obra como protagonista: grillas amplias, fotografía y una dirección estética que no compite con el proyecto.',
    accent: '#57534E',
    icon: DraftingCompass,
  },
  {
    slug: 'inmobiliaria',
    label: 'Inmobiliaria',
    heroTitle: 'Sitios web para corredoras de propiedades',
    description:
      'Catálogo de propiedades, filtros y captura de contactos: herramientas para convertir visitas en clientes.',
    accent: '#1D4ED8',
    icon: Building2,
  },
  {
    slug: 'veterinaria',
    label: 'Veterinaria',
    heroTitle: 'Sitios web para clínicas veterinarias',
    description:
      'Cercanía y urgencia: horas, especialidades y un tono que calma a quien llega preocupado.',
    accent: '#0D9488',
    icon: PawPrint,
  },
  {
    slug: 'bienestar',
    label: 'Bienestar y fitness',
    heroTitle: 'Sitios web para estudios y centros de entrenamiento',
    description: 'Ritmo, comunidad y agenda de clases: sitios que invitan a moverse.',
    accent: '#4D7C0F',
    icon: Dumbbell,
  },
  {
    slug: 'estetica',
    label: 'Estética',
    heroTitle: 'Sitios web para clínicas de estética',
    description:
      'Sensorialidad y confianza: tratamientos, resultados y reserva de horas en un recorrido elegante.',
    accent: '#BE185D',
    icon: Sparkles,
  },
  {
    slug: 'marketing',
    label: 'Marketing',
    heroTitle: 'Sitios web para agencias de marketing',
    description: 'Portafolio, servicios y casos: agencias que se venden tan bien como venden a sus clientes.',
    accent: '#A21CAF',
    icon: Megaphone,
  },
  {
    slug: 'software',
    label: 'Software',
    heroTitle: 'Sitios web para casas de software',
    description: 'Producto, stack y confianza técnica: sitios B2B que explican lo complejo de forma simple.',
    accent: '#4338CA',
    icon: Code2,
  },
  {
    slug: 'contabilidad',
    label: 'Contabilidad',
    heroTitle: 'Sitios web para estudios contables',
    description: 'Orden y calma: servicios tributarios y contables con la seriedad que el rubro exige.',
    accent: '#047857',
    icon: Calculator,
  },
  {
    slug: 'ecommerce',
    label: 'E-commerce',
    heroTitle: 'Tiendas online que venden',
    description: 'Vitrina, catálogo y checkout: tiendas rápidas, claras y pensadas para convertir.',
    accent: '#C2410C',
    icon: ShoppingBag,
  },
  {
    slug: 'diseno',
    label: 'Diseño',
    heroTitle: 'Sitios web para estudios de diseño',
    description: 'El sitio como pieza de portafolio: tipografía, grilla y detalle en cada pantalla.',
    accent: '#E11D48',
    icon: PenTool,
  },
];

export const SECTOR_MAP: Record<string, Sector> = Object.fromEntries(
  SECTORES.map((s) => [s.slug, s]),
);

export function getSector(slug: string): Sector | undefined {
  return SECTOR_MAP[slug];
}

export const VARIANT_LABELS: Record<string, string> = {
  claro: 'Claro',
  oscuro: 'Oscuro premium',
  teal: 'Teal',
  azul: 'Azul cián',
};
