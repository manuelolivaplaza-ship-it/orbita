import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  Brain,
  Building2,
  Calculator,
  Car,
  CircleDot,
  Code2,
  Cog,
  DraftingCompass,
  Dumbbell,
  FlaskConical,
  GraduationCap,
  Grape,
  Hospital,
  Megaphone,
  PawPrint,
  PenTool,
  Scale,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Store,
  UtensilsCrossed,
  Warehouse,
  Wrench,
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
    slug: 'legal',
    label: 'Legal',
    heroTitle: 'Sitios web para estudios jurídicos',
    description:
      'Sobriedad y jerarquía: prácticas, equipo y una propuesta de valor clara para clientes exigentes.',
    accent: '#92400E',
    icon: Scale,
  },
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
    slug: 'diseno',
    label: 'Diseño',
    heroTitle: 'Sitios web para estudios de diseño',
    description: 'El sitio como pieza de portafolio: tipografía, grilla y detalle en cada pantalla.',
    accent: '#E11D48',
    icon: PenTool,
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
    slug: 'arquitectura',
    label: 'Arquitectura',
    heroTitle: 'Sitios web para estudios de arquitectura',
    description:
      'La obra como protagonista: grillas amplias, fotografía y una dirección estética que no compite con el proyecto.',
    accent: '#57534E',
    icon: DraftingCompass,
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
    slug: 'contabilidad',
    label: 'Contabilidad',
    heroTitle: 'Sitios web para estudios contables',
    description: 'Orden y calma: servicios tributarios y contables con la seriedad que el rubro exige.',
    accent: '#047857',
    icon: Calculator,
  },
  {
    slug: 'centro-medico',
    label: 'Centro médico',
    heroTitle: 'Sitios web para centros médicos',
    description:
      'Especialidades, equipo y reserva de hora: un recorrido claro para quien llega con urgencia o con duda.',
    accent: '#0369A1',
    icon: Hospital,
  },
  {
    slug: 'concesionaria',
    label: 'Concesionaria',
    heroTitle: 'Sitios web para concesionarias',
    description: 'Stock, fichas y toma de contacto: el catálogo de vehículos como pieza de venta.',
    accent: '#B45309',
    icon: Car,
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
    slug: 'gastronomia',
    label: 'Gastronomía',
    heroTitle: 'Sitios web para panaderías, cafés y cocina',
    description: 'Carta, horarios y el local como pieza: sitios que huelen a mostrador aunque se vean en el celular.',
    accent: '#B45309',
    icon: UtensilsCrossed,
  },
  {
    slug: 'neumaticos',
    label: 'Neumáticos',
    heroTitle: 'Sitios web para servitecas y neumáticos',
    description: 'Medidas, alineación y hora de taller: un sitio que resuelve en el primer vistazo.',
    accent: '#334155',
    icon: CircleDot,
  },
  {
    slug: 'repuestos',
    label: 'Repuestos',
    heroTitle: 'Sitios web para casas de repuestos',
    description: 'Búsqueda, stock y mostrador: para quien llega con el código o con la pieza en la mano.',
    accent: '#7C2D12',
    icon: Cog,
  },
  {
    slug: 'ferreteria',
    label: 'Ferretería industrial',
    heroTitle: 'Sitios web para ferreterías industriales',
    description: 'Catálogo técnico y cotización: un sitio de mostrador, no de catálogo decorativo.',
    accent: '#B45309',
    icon: Wrench,
  },
  {
    slug: 'distribuidora',
    label: 'Distribuidora',
    heroTitle: 'Sitios web para distribuidoras',
    description: 'Líneas, cobertura y pedido: B2B claro para quien compra por volumen.',
    accent: '#1E3A8A',
    icon: Warehouse,
  },
  {
    slug: 'mayorista',
    label: 'Mayorista',
    heroTitle: 'Sitios web para minimayoristas',
    description: 'Abasto, surtido y reposición: vitrina rápida para el comercio de barrio.',
    accent: '#C2410C',
    icon: Store,
  },
  {
    slug: 'universidad',
    label: 'Universidad',
    heroTitle: 'Sitios web para universidades e institutos',
    description: 'Admisión, facultades y vida de campus: un sitio que convence a quien todavía elige.',
    accent: '#1E40AF',
    icon: GraduationCap,
  },
  {
    slug: 'vinedo',
    label: 'Viñedo',
    heroTitle: 'Sitios web para viñedos y bodegas',
    description: 'Cepa, visita y guarda: el sitio como extensión de la cava.',
    accent: '#9F1239',
    icon: Grape,
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
