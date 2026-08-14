export type CaseMetric = {
  label: string;
  value: string;
};

export type CaseKind = 'live' | 'preview';

export type CaseStudy = {
  slug: string;
  name: string;
  client?: string;
  industry: string;
  tagline: string;
  summary: string;
  url?: string;
  year?: string;
  services: string[];
  metrics: CaseMetric[];
  cover: string;
  accent: string;
  gallery: string[];
  challenge: string;
  solution: string;
  result: string;
  featured: boolean;
  kind: CaseKind;
  /** Ruta interna de la web de ejemplo. Solo en casos `preview`. */
  previewSlug?: string;
};

const img = (file: string) => `/cases/${file}`;
const preview = (folder: string, file: string) => `/previews/${folder}/${file}`;

export const cases: CaseStudy[] = [
  {
    slug: 'programbi',
    name: 'ProgramBI',
    client: 'ProgramBI',
    industry: 'EdTech · Data',
    tagline: 'Academia de datos que convierte visitas en postulaciones a cursos.',
    summary:
      'Sitio multi-sección para capacitaciones en Power BI, SQL, Python y Data Science. Catálogo de programas, prueba social, equipo, casos y un embudo claro a cotización y WhatsApp.',
    url: 'https://www.programbi.com',
    year: '2025',
    services: [
      'Sitio multi-sección',
      'Catálogo de cursos',
      'Copy de conversión',
      'Formulario + WhatsApp',
      'SEO y contenido',
    ],
    metrics: [
      { value: '+5.000', label: 'Estudiantes egresados' },
      { value: '+10', label: 'Programas activos' },
      { value: '98%', label: 'Satisfacción' },
    ],
    cover: img('programbi-cover.jpg'),
    accent: '#3b82f6',
    gallery: [],
    challenge:
      'Vender formación en datos exige confianza de marca y un camino corto a la postulación. Había que ordenar la oferta (bootcamps, cursos cortos, empresas), mostrar resultados reales y que el visitante cotice sin fricción.',
    solution:
      'Arquitectura clara: hero de impacto, métricas sociales, logos de empresas, catálogo de programas, proyectos reales, equipo docente, testimonios, blog y CTA persistente a información / WhatsApp. Diseño premium orientado a conversión B2C y B2B.',
    result:
      'Un activo digital listo para ads y SEO: mensaje nítido (“aprende análisis de datos con expertos”), prueba social visible y un solo embudo hacia cotización y contacto.',
    featured: true,
    kind: 'live',
  },
  {
    slug: 'maverlang',
    name: 'Maverlang',
    client: 'Maverlang',
    industry: 'SaaS · IA',
    tagline: 'Producto de IA con presencia web a la altura de un copiloto serio.',
    summary:
      'Sitio de producto para Maverlang, plataforma de inteligencia artificial orientada a análisis de noticias, portafolio y toma de decisiones en tiempo real. Identidad tech, claridad de propuesta y camino a la acción.',
    url: 'https://www.maverlang.com',
    year: '2025',
    services: [
      'Landing / sitio de producto',
      'Identidad visual digital',
      'UX de producto SaaS',
      'Mensaje de valor IA',
    ],
    metrics: [
      { value: 'Live', label: 'Producto en producción' },
      { value: 'SaaS', label: 'Posicionamiento' },
      { value: 'IA', label: 'Núcleo del producto' },
    ],
    cover: img('maverlang-cover.jpg'),
    accent: '#6B7280',
    gallery: [],
    challenge:
      'Un producto de IA necesita verse confiable y moderno en los primeros segundos. El sitio tenía que comunicar qué hace el copiloto, para quién es y por qué importa — sin ruido genérico de “otra startup de AI”.',
    solution:
      'Diseño alineado a producto tech, jerarquía tipográfica fuerte, propuesta de valor centrada en análisis y decisiones, y CTAs orientados a exploración del producto y conversión.',
    result:
      'Una vitrina digital coherente con un copiloto de IA: estética de producto serio, mensaje claro y base lista para escalar features y onboarding.',
    featured: true,
    kind: 'live',
  },
  {
    slug: 'clinica-aurora',
    name: 'Clínica Aurora',
    client: 'Clínica Aurora',
    industry: 'Salud · Clínica',
    tagline: 'Medicina privada que se siente humana desde la primera visita al sitio.',
    summary:
      'Landing de conversión para una clínica boutique: especialidades, métricas, opiniones, FAQ, reserva y WhatsApp. Un solo objetivo: pedir hora.',
    year: '2026',
    services: ['Landing de conversión', 'WhatsApp + formulario', 'Prueba social', 'FAQ', 'CTA persistente'],
    metrics: [
      { value: '1', label: 'Acción: reservar hora' },
      { value: '5', label: 'Especialidades' },
      { value: 'Estación', label: 'Plan de referencia' },
    ],
    cover: preview('aurora', 'hero.jpg'),
    accent: '#5B7A6A',
    gallery: [preview('aurora', 'hero.jpg'), preview('aurora', 'consult.jpg')],
    challenge:
      'Las clínicas suelen verse frías o genéricas. Había que transmitir calma, credenciales y un solo siguiente paso: pedir hora, sin un menú de 20 ítems.',
    solution:
      'Hero fotográfico, especialidades en lenguaje llano, equipo presentado con sobriedad y un bloque de reserva siempre a la vista. Paleta sage/crema, lejos del azul médico de plantilla.',
    result:
      'Una web de ejemplo que se puede recorrer completa: el visitante entiende la oferta en 10 segundos y llega al formulario sin perderse.',
    featured: true,
    kind: 'preview',
    previewSlug: 'clinica-aurora',
  },
  {
    slug: 'solsticio',
    name: 'Solsticio',
    client: 'Solsticio',
    industry: 'Gastronomía · Fine dining',
    tagline: 'Un restaurante que se reserva por atmósfera, no por un PDF del menú.',
    summary:
      'Landing editorial con oferta clara (degustación de viernes), carta, prueba social y reserva por formulario o WhatsApp.',
    year: '2026',
    services: ['Landing / campaña', 'Oferta única', 'Reserva + WhatsApp', 'Prueba social'],
    metrics: [
      { value: '1', label: 'Acción: reservar mesa' },
      { value: '12', label: 'Platos en carta' },
      { value: 'Sonda', label: 'Plan de referencia' },
    ],
    cover: preview('solsticio', 'hero.jpg'),
    accent: '#C45C26',
    gallery: [preview('solsticio', 'hero.jpg'), preview('solsticio', 'interior.jpg')],
    challenge:
      'Un restaurante serio no puede verse como un delivery. El sitio tenía que oler a sala: luz baja, plato, tipografía y un calendario de reserva, no un grid de fotos de stock.',
    solution:
      'Composición editorial, carta corta de temporada, bloque de reserva y una sola dirección. Tipografía serif de menú y acento terracota sobre carbón.',
    result:
      'Preview navegable de punta a punta. Sirve para mostrar cómo se ve un Sonda gastronómico cuando el brief es “premium, no ruidoso”.',
    featured: true,
    kind: 'preview',
    previewSlug: 'solsticio',
  },
  {
    slug: 'vale-asociados',
    name: 'Vale & Asociados',
    client: 'Vale & Asociados',
    industry: 'Legal · Consultora',
    tagline: 'Un estudio jurídico que se presenta como partner, no como banner de “abogados 24/7”.',
    summary:
      'Sitio multi-sección para un boutique legal: áreas de práctica, método y contacto. Piedra, tinta y latón — sobrio a propósito.',
    year: '2026',
    services: ['Sitio multi-sección', 'Formulario con routing', 'Casos / encargos', 'FAQ', 'WhatsApp de filtro'],
    metrics: [
      { value: '4', label: 'Áreas de práctica' },
      { value: '1', label: 'Formulario cualificado' },
      { value: 'Constelación', label: 'Plan de referencia' },
    ],
    cover: preview('vale', 'hero.jpg'),
    accent: '#B0894F',
    gallery: [preview('vale', 'hero.jpg'), preview('vale', 'desk.jpg')],
    challenge:
      'El visitante de un estudio legal llega con un problema, no a “explorar la marca”. El sitio debía ordenar las áreas, filtrar casos que no calzan y pedir solo lo necesario para una primera reunión.',
    solution:
      'Estructura institucional clara, áreas con alcance y límites, un método en tres pasos y un formulario que pregunta rubro y urgencia. Cero stock de martillos y balanzas.',
    result:
      'Una pieza demo que se siente de estudio serio: el tipo de presencia que una consultora o firma boutique necesita para no competir por precio.',
    featured: false,
    kind: 'preview',
    previewSlug: 'vale-asociados',
  },
  {
    slug: 'casa-bruma',
    name: 'Casa Bruma',
    client: 'Casa Bruma',
    industry: 'Arquitectura · Interior',
    tagline: 'Un estudio de arquitectura que deja hablar a la obra, no al slogan.',
    summary:
      'Portfolio-sitio para un estudio de casas en el valle: proyectos, nota de taller y una sola vía de encargo. Luz, hormigón y silencio.',
    year: '2026',
    services: ['Portfolio multi-sección', 'Método visible', 'Ficha de obra', 'Inquiry + WhatsApp'],
    metrics: [
      { value: '3', label: 'Obras en vitrina' },
      { value: '1', label: 'Camino a encargo' },
      { value: 'Estación', label: 'Plan de referencia' },
    ],
    cover: preview('bruma', 'hero.jpg'),
    accent: '#6B6A4E',
    gallery: [preview('bruma', 'hero.jpg'), preview('bruma', 'kitchen.jpg')],
    challenge:
      'Los estudios de arquitectura suelen ahogar la obra con menús y “nosotros”. Había que hacer una vitrina lenta: foto grande, ficha corta, y que el encargo se pida con contexto (terreno, encargo, plazo).',
    solution:
      'Portfolio de tres obras con ficha, una nota de taller y un inquiry que pide el encargo, no un “mensaje”. Tipografía Instrument y paleta de tierra.',
    result:
      'Una demo que se recorre como un libro: sirve para mostrar cómo se ve un sitio de estudio creativo cuando el producto es la obra.',
    featured: false,
    kind: 'preview',
    previewSlug: 'casa-bruma',
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getFeaturedCases(): CaseStudy[] {
  return cases.filter((c) => c.featured);
}

export function getAdjacentCases(slug: string): { prev?: CaseStudy; next?: CaseStudy } {
  const idx = cases.findIndex((c) => c.slug === slug);
  if (idx < 0) return {};
  return {
    prev: cases[idx - 1],
    next: cases[idx + 1] ?? cases[0],
  };
}

export function getPreviewPath(caseStudy: CaseStudy, embed = false): string | null {
  if (!caseStudy.previewSlug) return null;
  return embed ? `/preview/${caseStudy.previewSlug}?embed=1` : `/preview/${caseStudy.previewSlug}`;
}
