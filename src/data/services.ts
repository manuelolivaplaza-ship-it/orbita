export type OrbitService = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  idealFor: string;
  deliverables: string[];
  plan: 'Sonda' | 'Estación' | 'Constelación';
  accent: string;
};

export const services: OrbitService[] = [
  {
    id: 'landing',
    name: 'Landing de conversión',
    tagline: 'Una página. Una oferta. Una acción.',
    description:
      'Página única obsesionada con que te escriban: hero con media, prueba social, oferta clara y formulario o WhatsApp.',
    idealFor: 'Lanzamientos, campañas, validar una oferta o un servicio nuevo.',
    deliverables: [
      'Hero con media de alto impacto',
      'Hasta 5–7 bloques estratégicos',
      'Copy orientado a conversión',
      'Formulario o WhatsApp listo',
      'Mobile real + SEO base',
    ],
    plan: 'Sonda',
    accent: 'from-[#6B7280] to-[#A1A1AA]',
  },
  {
    id: 'multi',
    name: 'Sitio multi-sección',
    tagline: 'Presencia completa que vende aunque tú no estés.',
    description:
      'Sitio con varias secciones (inicio, servicios, nosotros, contacto…) con el mismo rigor de conversión que una landing.',
    idealFor: 'Empresas, clínicas, estudios y marcas que necesitan más que una sola página.',
    deliverables: [
      'Arquitectura de información',
      '5–8 secciones coherentes',
      'Sistema visual y tipográfico',
      'Motion suave y CTAs consistentes',
      'Handoff y guía de publicación',
    ],
    plan: 'Estación',
    accent: 'from-[#18181B] to-[#6B7280]',
  },
  {
    id: 'redesign',
    name: 'Rediseño de sitio',
    tagline: 'Tu marca ya existe. Ahora que se vea en órbita.',
    description:
      'Partimos de lo que tienes, diagnosticamos fricción y reconstruimos con claridad, velocidad y un camino único a contacto.',
    idealFor: 'Marcas con sitio desactualizado, lento o que no genera leads.',
    deliverables: [
      'Auditoría de fricción y mensaje',
      'Nuevo sistema visual',
      'Rebuild completo o parcial',
      'Migración de contenidos clave',
      'Mejoras de performance y SEO',
    ],
    plan: 'Constelación',
    accent: 'from-[#0B0B12] to-[#27272A]',
  },
  {
    id: 'campaign',
    name: 'One-page de campaña',
    tagline: 'Velocidad de misil para una promo puntual.',
    description:
      'Landing ultrarrápida para un evento, lanzamiento o promo con fecha de caducidad. Sin relleno, sin menús eternos.',
    idealFor: 'Ads, lanzamientos, webinars, preventas y eventos.',
    deliverables: [
      'Mensaje único y contundente',
      'Bloques mínimos de fricción cero',
      'Integración de tracking (GA4/pixel)',
      'Formulario o checkout soft',
      'Entrega express',
    ],
    plan: 'Sonda',
    accent: 'from-[#A1A1AA] to-[#6B7280]',
  },
  {
    id: 'integrations',
    name: 'Sitio + WhatsApp / CRM',
    tagline: 'Que el lead no se enfríe en la bandeja.',
    description:
      'Conectamos el sitio con WhatsApp, formularios inteligentes o CRM para que cada visita tenga un siguiente paso real.',
    idealFor: 'Equipos de ventas y servicios que cierran por chat o pipeline.',
    deliverables: [
      'CTAs de WhatsApp contextuales',
      'Formularios con routing',
      'Integración CRM / email',
      'Notificaciones de lead',
      'Medición de conversiones',
    ],
    plan: 'Constelación',
    accent: 'from-[#6B7280] to-[#D4D4D8]',
  },
  {
    id: 'ai-visuals',
    name: 'Imágenes y packs visuales con IA',
    tagline: 'Producto, marca y atmósfera — listos para la web.',
    description:
      'Creamos y curamos visuales con IA: fotos de producto, fondos de hero, mockups y assets consistentes con tu marca. Ideal si aún no tienes sesión fotográfica.',
    idealFor: 'Ecommerce, servicios, lanzamientos y marcas sin banco de imágenes propio.',
    deliverables: [
      'Pack de 8–15 visuales listos para web',
      'Estilo coherente con tu marca',
      'Renders / fotomontajes de producto',
      'Optimización de peso y formato',
      'Variantes para desktop y mobile',
    ],
    plan: 'Estación',
    accent: 'from-[#52525B] to-[#A1A1AA]',
  },
  {
    id: 'turbo',
    name: 'Modo Turbo (7 días)',
    tagline: 'Gratis por tiempo limitado · antes $280.000',
    description:
      'Prioridad total en el calendario: brief, diseño y build en paralelo para entregar un sitio publicable en 7 días hábiles (alcance acotado al plan). Promo temporal sin costo extra.',
    idealFor: 'Campañas, eventos, lanzamientos y oportunidades que no esperan.',
    deliverables: [
      'Kickoff el mismo día o al siguiente',
      'Entrega en 7 días hábiles',
      'Canal de feedback express',
      'Checklist de publicación incluido',
      '1 ronda de ajustes prioritarios',
      'Promo: sin cargo extra por tiempo limitado',
    ],
    plan: 'Sonda',
    accent: 'from-[#0B0B12] to-[#6B7280]',
  },
  {
    id: 'hero-video',
    name: 'Video / reel para el hero',
    tagline: 'La primera impresión se mueve.',
    description:
      'Micro-video o loop cinematográfico para la portada: atmósfera de marca sin saturar ni frenar la carga del sitio.',
    idealFor: 'Marcas premium, hospitality, tech y lanzamientos con presencia fuerte.',
    deliverables: [
      'Clip corto en loop (6–12 s típico)',
      'Export optimizado para web',
      'Versión horizontal y/o vertical',
      'Integración en el hero',
      'Fallback estático si el video no carga',
    ],
    plan: 'Estación',
    accent: 'from-[#3F3F46] to-[#D4D4D8]',
  },
  {
    id: 'brand-kit',
    name: 'Brand kit express',
    tagline: 'Identidad mínima para verse serio desde el día uno.',
    description:
      'Si aún no tienes marca armada: wordmark, paleta, tipografías y reglas básicas de uso digital para que la web y tus redes hablen el mismo idioma.',
    idealFor: 'Startups, freelancers y negocios que arrancan sin manual de marca.',
    deliverables: [
      'Wordmark o logotipo tipográfico',
      'Paleta y tipografías',
      'Guía corta de uso digital',
      'Archivos exportados (SVG / PNG)',
      'Aplicación en la web',
    ],
    plan: 'Constelación',
    accent: 'from-[#18181B] to-[#71717A]',
  },
];

export function getServiceById(id: string): OrbitService | undefined {
  return services.find((s) => s.id === id);
}
