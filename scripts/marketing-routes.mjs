/** Rutas de marketing indexables. Fuente para sitemap + prerender. */
export const ORIGIN = 'https://www.reclu.cl';

/** Copia del FAQ del home para JSON-LD en el HTML prerenderizado. */
export const HOME_FAQS = [
  {
    question: '¿Cuánto tarda un proyecto típico?',
    answer:
      'Un proyecto promedio toma entre 2 y 4 semanas según el nivel de complejidad y el plan seleccionado. Definimos un calendario estricto desde el día 1.',
  },
  {
    question: '¿Los textos los escriben ustedes?',
    answer:
      'Sí, escribimos el copywriting en español orientado a conversión a partir de tu brief inicial. Tú revisas y validas el tono antes de publicar.',
  },
  {
    question: '¿Incluye hosting y dominio?',
    answer:
      'El desarrollo es compra única: el código es tuyo. Hosting y dominio no van en el plan base. Si quieres que nosotros nos encarguemos después de publicar, está Reclu Care ($60.000/mes): hosting, SSL, backups y soporte.',
  },
  {
    question: '¿Solo trabajan en Chile?',
    answer:
      'No. Trabajamos 100% online con clientes en todo Chile y Latinoamérica. Mantenemos coordinación fluida por Google Meet y WhatsApp.',
  },
  {
    question: '¿Puedo usar mi logo actual?',
    answer:
      'Totalmente. Si ya tienes identidad de marca, la integramos respetando sus guías. Si no tienes logo, creamos un wordmark tipográfico limpio y moderno para la web.',
  },
  {
    question: '¿Qué necesito para empezar?',
    answer:
      'Solo 3 cosas: claridad sobre qué vendes y a quién, 2 o 3 páginas web de referencia que te gusten visualmente, y el objetivo principal que quieres lograr.',
  },
  {
    question: '¿Puedo agendar una reunión?',
    answer:
      'Sí. En Agendar eliges un día hábil (lunes a viernes) entre 8:00 y 19:00, hora de Santiago. La llamada dura 30 minutos y te confirmamos el link.',
  },
];

export const NAV = [
  { href: '/', label: 'Inicio' },
  { href: '/creaciones', label: 'Creaciones' },
  { href: '/galeria', label: 'Galería' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/crm', label: 'CRM' },
  { href: '/precios', label: 'Precios' },
  { href: '/contacto', label: 'Contacto' },
];

export const CASES = [
  {
    slug: 'programbi',
    name: 'ProgramBI',
    description:
      'Sitio multi-sección para capacitaciones en Power BI, SQL, Python y Data Science. Catálogo de programas y embudo a cotización y WhatsApp.',
  },
  {
    slug: 'maverlang',
    name: 'Maverlang',
    description:
      'Sitio de producto para Maverlang, plataforma de inteligencia artificial orientada a análisis y toma de decisiones.',
  },
  {
    slug: 'clinica-aurora',
    name: 'Clínica Aurora',
    description: 'Landing de conversión para una clínica boutique: especialidades, reserva y WhatsApp.',
  },
  {
    slug: 'solsticio',
    name: 'Solsticio',
    description: 'Landing editorial para restaurante: carta, prueba social y reserva.',
  },
  {
    slug: 'vale-asociados',
    name: 'Vale & Asociados',
    description: 'Sitio multi-sección para un boutique legal: áreas de práctica, método y contacto.',
  },
  {
    slug: 'casa-bruma',
    name: 'Casa Bruma',
    description: 'Portfolio-sitio para un estudio de arquitectura: proyectos y vía de encargo.',
  },
];

export const SECTORS = [
  { slug: 'dental', label: 'Dental', title: 'Sitios web para clínicas dentales', description: 'Propuestas pensadas para clínicas dentales: agendar hora, tratamientos y confianza desde la primera pantalla.' },
  { slug: 'legal', label: 'Legal', title: 'Sitios web para estudios jurídicos', description: 'Sobriedad y jerarquía: prácticas, equipo y una propuesta de valor clara para clientes exigentes.' },
  { slug: 'arquitectura', label: 'Arquitectura', title: 'Sitios web para estudios de arquitectura', description: 'La obra como protagonista: grillas amplias, fotografía y una dirección estética que no compite con el proyecto.' },
  { slug: 'inmobiliaria', label: 'Inmobiliaria', title: 'Sitios web para corredoras de propiedades', description: 'Catálogo de propiedades, filtros y captura de contactos: herramientas para convertir visitas en clientes.' },
  { slug: 'veterinaria', label: 'Veterinaria', title: 'Sitios web para clínicas veterinarias', description: 'Cercanía y urgencia: horas, especialidades y un tono que calma a quien llega preocupado.' },
  { slug: 'bienestar', label: 'Bienestar y fitness', title: 'Sitios web para estudios y centros de entrenamiento', description: 'Ritmo, comunidad y agenda de clases: sitios que invitan a moverse.' },
  { slug: 'estetica', label: 'Estética', title: 'Sitios web para clínicas de estética', description: 'Sensorialidad y confianza: tratamientos, resultados y reserva de horas en un recorrido elegante.' },
  { slug: 'marketing', label: 'Marketing', title: 'Sitios web para agencias de marketing', description: 'Portafolio, servicios y casos: agencias que se venden tan bien como venden a sus clientes.' },
  { slug: 'software', label: 'Software', title: 'Sitios web para casas de software', description: 'Producto, stack y confianza técnica: sitios B2B que explican lo complejo de forma simple.' },
  { slug: 'contabilidad', label: 'Contabilidad', title: 'Sitios web para estudios contables', description: 'Orden y calma: servicios tributarios y contables con la seriedad que el rubro exige.' },
  { slug: 'ecommerce', label: 'E-commerce', title: 'Tiendas online que venden', description: 'Vitrina, catálogo y checkout: tiendas rápidas, claras y pensadas para convertir.' },
  { slug: 'diseno', label: 'Diseño', title: 'Sitios web para estudios de diseño', description: 'El sitio como pieza de portafolio: tipografía, grilla y detalle en cada pantalla.' },
];

export const ROUTES = [
  {
    path: '/',
    title: 'Reclu | Sitios web en 7–14 días + WhatsApp',
    description:
      'Rediseñamos tu web en 7–14 días: clara, rápida y con WhatsApp para que te escriban. Demos de rubro en vivo. Santiago, Chile.',
    h1: 'Creamos sitios que venden.',
    lead: 'Claros, rápidos y listos en 7–14 días, con WhatsApp para que te escriban. Recorre una demo de tu rubro antes de partir.',
    schemaType: 'WebPage',
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    path: '/creaciones',
    title: 'Creaciones | Reclu',
    description:
      'Casos reales en producción: ProgramBI (web + CRM / leads a WhatsApp) y Maverlang. Las demos de rubro están en la galería.',
    h1: 'Creaciones.',
    lead: 'Sitios de clientes en producción: ProgramBI y Maverlang. Las demos de rubro están en la galería.',
    schemaType: 'CollectionPage',
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    path: '/galeria',
    title: 'Galería de demos | Reclu',
    description:
      'Demos y propuestas de rubro para recorrer en vivo. No son sitios de clientes — esos están en Creaciones.',
    h1: 'Galería de propuestas',
    lead: 'Demos y propuestas de rubro para recorrer en vivo. Elige una dirección de diseño y la adaptamos a tu marca.',
    schemaType: 'CollectionPage',
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    path: '/servicios',
    title: 'Servicios | Reclu',
    description:
      'Landings de conversión, sitios multi-sección, rediseños y campañas. Productos digitales que venden.',
    h1: 'No plantillas. Sistemas que venden.',
    lead: 'Cada entregable tiene un trabajo concreto: frenar el scroll, explicar la oferta y convertir la visita en un mensaje.',
    schemaType: 'WebPage',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/precios',
    title: 'Precios web | Reclu',
    description:
      'Compra única o plan mensual con sitio incluido, CRM y Orbit. Valores netos + 19% IVA. Turbo gratis hasta el 31/10.',
    h1: 'Inversión clara. Compra única.',
    lead: 'Planes Sonda, Estación y Constelación. Compra única o mensual con sitio, CRM y Orbit.',
    schemaType: 'WebPage',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    path: '/crm',
    title: 'CRM con WhatsApp | Reclu',
    description:
      'Cada sitio Reclu incluye panel de administración: catálogo, prospectos, agenda, pedidos y WhatsApp. Sin HubSpot ni cuota extra.',
    h1: 'Tu web no es un folleto. Viene con panel de control.',
    lead: 'Cada propuesta incluye su propio admin: catálogo, prospectos, agenda, pedidos y WhatsApp. Sin HubSpot ni cuota extra.',
    schemaType: 'WebPage',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/contacto',
    title: 'Contacto | Reclu',
    description:
      'Cuéntanos qué vendes. Te respondemos con enfoque y rango de inversión. WhatsApp +56 9 3540 9699. Santiago, Chile.',
    h1: 'Impulsa tu marca con Reclu.',
    lead: 'Cuéntanos qué vendes. Te respondemos con enfoque y rango de inversión — sin una propuesta de 40 páginas.',
    schemaType: 'ContactPage',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    path: '/privacidad',
    title: 'Privacidad | Reclu',
    description: 'Política de privacidad de Reclu.',
    h1: 'Privacidad',
    lead: 'Cómo usamos los datos que nos envías por formulario, WhatsApp, agenda o newsletter.',
    changefreq: 'yearly',
    priority: '0.3',
  },
  {
    path: '/terminos',
    title: 'Términos | Reclu',
    description: 'Términos de uso de Reclu.',
    h1: 'Términos',
    lead: 'Condiciones de contratación y uso del sitio de Reclu.',
    changefreq: 'yearly',
    priority: '0.3',
  },
  ...CASES.map((c) => ({
    path: `/creaciones/${c.slug}`,
    title: `${c.name} | Creaciones Reclu`,
    description: c.description,
    h1: c.name,
    lead: c.description,
    changefreq: 'monthly',
    priority: '0.7',
  })),
  ...SECTORS.map((s) => ({
    path: `/galeria/${s.slug}`,
    title: `${s.label} | Galería de propuestas Reclu`,
    description: `${s.title}. ${s.description}`,
    h1: s.title,
    lead: s.description,
    schemaType: 'CollectionPage',
    changefreq: 'monthly',
    priority: '0.6',
  })),
];

export function absoluteUrl(path) {
  if (path === '/') return `${ORIGIN}/`;
  return `${ORIGIN}${path}`;
}
