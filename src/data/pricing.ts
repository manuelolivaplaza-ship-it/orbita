import type { PlanItem } from '../types';

export const BASE_PRICES = {
  Sonda: 490_000,
  Estación: 990_000,
  Constelación: 1_690_000,
  Aplicación: 1_890_000,
} as const;

export const BASE_PRICES_UF = {
  Sonda: 12.5,
  Estación: 25.0,
  Constelación: 42.5,
  Aplicación: 48.0,
} as const;

export const MONTHLY_PRICES = {
  Sonda: 89_000,
  Estación: 149_000,
  Constelación: 298_000,
  Aplicación: 189_000,
} as const;

export const MONTHLY_PRICES_UF = {
  Sonda: 2.25,
  Estación: 3.75,
  Constelación: 7.5,
  Aplicación: 4.8,
} as const;

export const UF_APPROX_CLP = 39_600;

export type PlanId = keyof typeof BASE_PRICES;

export const PLAN_HINTS: Record<PlanId, string> = {
  Sonda: 'Landing de validación / campaña',
  Estación: 'Web comercial + Panel CRM',
  Constelación: 'Multi-sección / Plataforma',
  Aplicación: 'Web App interactiva / PWA / Portales',
};

export const plans: PlanItem[] = [
  {
    id: 'sonda',
    name: 'Plan Sonda',
    price: '$490.000 CLP',
    priceRaw: BASE_PRICES.Sonda,
    priceUf: '12,5 UF',
    priceUfRaw: BASE_PRICES_UF.Sonda,
    monthlyPrice: '$89.000 CLP',
    monthlyPriceRaw: MONTHLY_PRICES.Sonda,
    monthlyPriceUf: '2,25 UF',
    monthlyPriceUfRaw: MONTHLY_PRICES_UF.Sonda,
    description: 'Ideal para validar una oferta, lanzar una campaña o tener presencia profesional con máxima claridad y velocidad.',
    aiAssistant: {
      conversations: 'Hasta 2.000 conversaciones / mes',
      shortLabel: 'Asistente IA Opcional',
      optional: true,
      description: 'Es 100% opcional sumarlo a tu plan. Si lo requieres, puedes integrar un asistente con IA adaptado a tu negocio (o conectar a Orb) con capacidad de hasta 2.000 conversaciones/mes para responder preguntas frecuentes y derivar prospectos a WhatsApp 24/7.',
    },
    features: [
      'Landing page de alta conversión: diseñada desde cero en código limpio para captar y convertir prospectos.',
      'Estructura de 5 a 6 bloques estratégicos: hero persuasivo, servicios, propuesta de valor, testimonios, formulario y contacto.',
      'Botón WhatsApp inteligente: mensaje predeterminado configurado para iniciar conversaciones comerciales al instante.',
      'Panel CRM Órbita (Nivel Esencial): bandeja centralizada para registrar cada prospecto que ingresa desde tu web en tiempo real.',
      'Diseño responsive mobile-first: maquetación ultra-fluida optimizada al milímetro para teléfonos móviles y tablets.',
      'Formularios automáticos: conexión directa con tu correo corporativo y sincronización en Google Sheets.',
      'SEO técnico on-page: configuración de metadatos, títulos semánticos y vista previa OpenGraph para compartir en redes.',
      'Rendimiento y velocidad sub-segundo: arquitectura estática ultraligera sin plugins pesados que ralenticen la carga.',
      '1 ronda de revisiones completas: ajuste fino de contenidos, colores y detalles antes de la publicación final.',
      'Propiedad 100% del código: sin licencias ocultas ni ataduras de permanencia. El código y los accesos son tuyos.',
      'Sprint de entrega: de 10 a 14 días hábiles (o sprint prioritario de 7 días con Modo Turbo bonificado).',
    ],
    monthlyFeatures: [
      'Landing page comercial publicada: diseño exclusivo sin costo inicial alto, lista para promocionar tus servicios.',
      'Hosting cloud ultra-rápido + SSL: servidores de alta disponibilidad con certificado de seguridad y carga instantánea.',
      'Botón WhatsApp y captador de leads: canal directo para recibir consultas de clientes potenciales todos los días.',
      'Panel CRM Órbita Esencial en la nube: gestión ágil de tus contactos desde tu teléfono o computador sin hojas de cálculo.',
      'Asistente con IA (Integración opcional): tú decides si sumarlo a tu web; permite integrar un asistente adaptado a tu negocio o conectar a Orb con hasta 2.000 conversaciones mensuales.',
      'Bolsa mensual de cambios de contenido: actualizamos textos, precios, fotos o banners cada vez que lo necesites.',
      'Mantenimiento técnico y copias de seguridad: monitoreo continuo contra caídas y respaldos periódicos en la nube.',
      'Optimización de carga y Core Web Vitals: mantención técnica para asegurar máxima velocidad en Google y redes sociales.',
      'Soporte directo vía WhatsApp: atención cercana de nuestro equipo ante cualquier consulta o ajuste menor.',
      'Libertad de suscripción: cuota mensual predecible sin contratos forzados; puedes pausar o cancelar cuando desees.',
    ],
    ctaText: 'Pedir presupuesto Sonda',
  },
  {
    id: 'estacion',
    name: 'Plan Estación',
    price: '$990.000 CLP',
    priceRaw: BASE_PRICES.Estación,
    priceUf: '25,0 UF',
    priceUfRaw: BASE_PRICES_UF.Estación,
    monthlyPrice: '$149.000 CLP',
    monthlyPriceRaw: MONTHLY_PRICES.Estación,
    monthlyPriceUf: '3,75 UF',
    monthlyPriceUfRaw: MONTHLY_PRICES_UF.Estación,
    popular: true,
    description: 'La opción predilecta de pymes, clínicas y empresas que buscan presencia sólida, automatización de prospectos y conversión.',
    aiAssistant: {
      conversations: 'Hasta 10.000 conversaciones / mes',
      shortLabel: 'Asistente IA Opcional',
      optional: true,
      description: 'Es 100% opcional sumarlo a tu plan. Si lo requieres, puedes integrar un asistente con IA personalizado con catálogo y servicios (o conectar a Orb) con capacidad de hasta 10.000 conversaciones/mes para cualificar leads y registrarlos en tu CRM.',
    },
    features: [
      'Sitio comercial completo o landing Pro: arquitectura estratégica de 5 a 8 bloques para ventas y servicios.',
      'Panel CRM Órbita Pro integrado: embudo Kanban interactivo para mover prospectos de "Nuevo" a "Cerrado" con drag & drop.',
      'Alertas instantáneas vía Webhook: notificación en tiempo real a tu WhatsApp cada vez que entra un nuevo interesado.',
      'Dashboard con analítica en vivo: visualiza visitas reales, clics a WhatsApp, conversiones y tasa de cierre en un solo lugar.',
      'Copywriting persuasivo profesional: redacción de textos comerciales enfocados en derribar objeciones y generar confianza.',
      'SEO técnico avanzado + Schema Markup: indexación optimizada para posicionar tus servicios y datos de contacto en Google.',
      'Micro-interacciones y motion suave: detalles visuales interactivos que elevan la percepción de valor y profesionalismo.',
      'Exportación de base de prospectos: descarga tus contactos filtrados a CSV o Excel con un solo clic.',
      '2 rondas de revisiones completas: afinamos y pulimos cada detalle interactivo antes del lanzamiento definitivo.',
      'Código fuente y propiedad absoluta: arquitectura moderna en React/TypeScript sin depender de plugins vulnerables.',
      'Modo Turbo bonificado: sprint prioritario de entrega en 7 días hábiles con 15 días de soporte post-lanzamiento.',
    ],
    monthlyFeatures: [
      'Sitio web comercial de alto impacto: desarrollo completo sin desembolso inicial alto, optimizado para captar clientes.',
      'Hosting cloud de alto rendimiento + CDN: infraestructura veloz con 99.9% de uptime garantizado y carga sub-segundo.',
      'Panel CRM Órbita Pro completo: embudo Kanban multi-columna para gestionar tu pipeline de ventas de manera profesional.',
      'Alertas automáticas a WhatsApp: tu equipo de ventas recibe el aviso en su teléfono en el segundo exacto que entra un lead.',
      'Asistente con IA (Integración opcional): tú decides si sumarlo a tu web; permite integrar un asistente adaptado a tu negocio o conectar a Orb con hasta 10.000 conversaciones mensuales.',
      'Hasta 2 horas mensuales de ajustes: solicitud de nuevas secciones, actualización de casos de éxito o piezas comerciales.',
      'Dashboard de analítica en vivo: métricas continuas de visitas, clics a WhatsApp y tasa de conversión.',
      'Monitoreo y seguridad proactiva 24/7: protección perimetral, renovación de certificados SSL y copias de seguridad continuas.',
      'Soporte prioritario continuo: línea directa por WhatsApp con nuestro equipo de desarrollo para cualquier requerimiento.',
      'Publicación rápida en 7 días hábiles: ponemos tu plataforma en marcha con todas las integraciones activas.',
    ],
    ctaText: 'Pedir presupuesto Estación',
  },
  {
    id: 'constelacion',
    name: 'Plan Constelación',
    price: '$1.690.000 CLP',
    priceRaw: BASE_PRICES.Constelación,
    priceUf: '42,5 UF',
    priceUfRaw: BASE_PRICES_UF.Constelación,
    monthlyPrice: '$298.000 CLP',
    monthlyPriceRaw: MONTHLY_PRICES.Constelación,
    monthlyPriceUf: '7,5 UF',
    monthlyPriceUfRaw: MONTHLY_PRICES_UF.Constelación,
    description: 'Para empresas con múltiples servicios, rediseños completos o marcas que necesitan arquitectura a medida y extras creativos.',
    aiAssistant: {
      conversations: 'Hasta 20.000 conversaciones / mes',
      shortLabel: 'Asistente IA Opcional',
      optional: true,
      description: 'Es 100% opcional sumarlo a tu plan. Si lo requieres, puedes integrar un agente con IA autónomo a medida (o conectar a Orb) con capacidad de hasta 20.000 conversaciones/mes, flujos complejos y soporte multicanal.',
    },
    features: [
      'Sitio multi-sección o rediseño integral: estructura profunda para empresas con múltiples áreas, servicios o filiales.',
      'Panel CRM Multi-usuario avanzado: permisos jerárquicos por roles para administradores, ejecutivos y ejecutivos de ventas.',
      'Integraciones a medida: conexión nativa con Google Analytics 4, Meta Pixel, API externas o webhooks personalizados.',
      'Dirección de arte y pack visual: curaduría fotográfica de alta resolución, iconografía a medida y micro-interacciones.',
      'Estrategia SEO estructural completa: arquitectura de información, enlazado interno y cumplimiento estricto de Core Web Vitals.',
      'Reportería analítica con benchmarks: comparativa de comportamiento de usuarios, conversión por sección y fuentes de tráfico.',
      '3 rondas de revisiones colaborativas: iteración cercana con diseñador senior para alinear la web al 100% con tu identidad corporativa.',
      'Entrega de repositorio y documentación: código de nivel empresarial, modular y limpio, con guía de despliegue.',
      'Código de nivel empresarial: desarrollo escalable, modular y limpio, con entrega de repositorio y documentación técnica.',
      'Soporte VIP post-lanzamiento de 30 días: acompañamiento directo para resolver consultas y garantizar un despegue comercial perfecto.',
    ],
    monthlyFeatures: [
      'Plataforma multi-página corporativa: desarrollo y evolución continua sin barreras de entrada ni inversión inicial elevada.',
      'Infraestructura Enterprise dedicada: servidores cloud dedicados, CDN global de baja latencia y respaldos diarios.',
      'Panel CRM Órbita Multi-usuario en la nube: roles para todo tu equipo comercial con reportería exportable.',
      'Asistente con IA (Integración opcional): tú decides si sumarlo a tu web; permite integrar un agente a medida o conectar a Orb con hasta 20.000 conversaciones mensuales.',
      'Evolución web continua (hasta 4 hrs/mes): creación de nuevas páginas de servicios, campañas estacionales o mejoras UX.',
      'Mantenimiento SEO mensual proactivo: auditorías de posicionamiento y ajustes técnicos para ganar terreno frente a la competencia.',
      'Pack gráfico y diseño de piezas: adaptación de creatividades, banners de temporada y recursos visuales para tu sitio.',
      'SLA de soporte prioritario 24/7: respuesta técnica en menos de 2 horas hábiles ante cualquier incidencia o consulta.',
      'Auditorías trimestrales de conversión: recomendaciones estratégicas de diseño y copywriting para maximizar ventas.',
      'Tranquilidad total sin permanencia: plataforma siempre actualizada con las últimas tecnologías web.',
    ],
    ctaText: 'Pedir presupuesto Constelación',
  },
];

export interface ExtraItem {
  id: string;
  name: string;
  priceClp: string;
  priceUf: string;
  priceClpRaw: number;
  priceUfRaw: number;
  period?: string;
  tag?: string;
  description: string;
}

export const EXTRAS_PRICING: ExtraItem[] = [
  {
    id: 'turbo',
    name: 'Modo Turbo (Entrega en 7 días)',
    priceClp: 'GRATIS',
    priceUf: '0 UF',
    priceClpRaw: 0,
    priceUfRaw: 0,
    tag: 'Tiempo limitado (Valor normal: $280.000 / 7 UF)',
    description: 'Entregamos tu sitio listo para publicar en solo 7 días hábiles sin comprometer un ápice de diseño ni rendimiento.',
  },
  {
    id: 'mantenimiento',
    name: 'Plan Órbita Care (Hosting + Soporte)',
    priceClp: '$60.000',
    priceUf: '1,5 UF',
    priceClpRaw: 60_000,
    priceUfRaw: 1.5,
    period: '/ mes',
    tag: 'Opcional recurrente',
    description: 'Hosting ultra-rápido en CDN global, SSL, backups semanales automáticos, soporte prioritario por WhatsApp y hosting continuo de tu Panel CRM.',
  },
  {
    id: 'idiomas',
    name: 'Pack Multi-idioma (Español / Inglés)',
    priceClp: '$240.000',
    priceUf: '6,0 UF',
    priceClpRaw: 240_000,
    priceUfRaw: 6.0,
    description: 'Estructura bilingüe nativa con selector de idiomas, metadatos hreflang para SEO y traducción adaptada.',
  },
  {
    id: 'app-pwa',
    name: 'Módulo Web App & PWA Instalable',
    priceClp: '$490.000',
    priceUf: '12,5 UF',
    priceClpRaw: 490_000,
    priceUfRaw: 12.5,
    tag: 'Agregado de Software',
    description: 'Convierte tu web en una aplicación instalable en iOS y Android con acceso offline, login de usuarios, portal privado y notificaciones push.',
  },
];

export interface ComparisonRow {
  category: string;
  feature: string;
  sonda: string | boolean;
  estacion: string | boolean;
  constelacion: string | boolean;
  tooltip?: string;
}

export const COMPARISON_TABLE: ComparisonRow[] = [
  // Arquitectura y Diseño
  { category: 'Diseño & Arquitectura', feature: 'Tipo de sitio', sonda: 'Landing de 1 página', estacion: 'Sitio comercial o landing 5-8 bloques', constelacion: 'Multi-sección completo / Rediseño' },
  { category: 'Diseño & Arquitectura', feature: 'Bloques estratégicos de contenido', sonda: '5 a 6 bloques', estacion: 'Hasta 8 bloques', constelacion: 'Ilimitados según arquitectura' },
  { category: 'Diseño & Arquitectura', feature: 'Diseño responsive 100% mobile-first', sonda: true, estacion: true, constelacion: true },
  { category: 'Diseño & Arquitectura', feature: 'Animaciones suaves y micro-interacciones', sonda: 'Esenciales', estacion: 'Avanzadas (Spline/Motion)', constelacion: 'Personalizadas a medida' },

  // Conversión & CRM
  { category: 'Conversión & CRM', feature: 'Panel CRM Órbita incluido', sonda: 'Nivel Esencial', estacion: 'Nivel Pro Completo', constelacion: 'Multi-usuario Avanzado' },
  { category: 'Conversión & CRM', feature: 'Embudo Kanban de prospectos', sonda: false, estacion: true, constelacion: true },
  { category: 'Conversión & CRM', feature: 'Gráficos de analítica en vivo', sonda: 'Métricas base', estacion: 'Gráfico interactivo con benchmarks', constelacion: 'Analítica integral + GA4' },
  { category: 'Conversión & CRM', feature: 'Alertas inmediatas a WhatsApp', sonda: 'Formulario estándar', estacion: 'Webhook WhatsApp instantáneo', constelacion: 'Multi-destinatario Webhook' },
  { category: 'Conversión & CRM', feature: 'Exportación de prospectos a CSV/Excel', sonda: false, estacion: true, constelacion: true },

  // Rendimiento & SEO
  { category: 'Rendimiento & SEO', feature: 'Velocidad de carga sub-segundo (<1s)', sonda: true, estacion: true, constelacion: true },
  { category: 'Rendimiento & SEO', feature: 'SEO técnico on-page + OpenGraph', sonda: 'Básico', estacion: 'Avanzado + Schema markup', constelacion: 'Estrategia SEO completa' },
  { category: 'Rendimiento & SEO', feature: 'Copywriting persuasivo', sonda: 'Estructura base', estacion: 'Redacción completa enfocada en ventas', constelacion: 'Copywriting colaborativo profundo' },

  // Entrega & Soporte
  { category: 'Entrega & Soporte', feature: 'Rondas de revisión incluidas', sonda: '1 ronda', estacion: '2 rondas', constelacion: '3 rondas' },
  { category: 'Entrega & Soporte', feature: 'Plazo de entrega estándar', sonda: '10–14 días hábiles', estacion: '14–20 días hábiles', constelacion: '25–35 días hábiles' },
  { category: 'Entrega & Soporte', feature: 'Modo Turbo (7 días hábiles)', sonda: 'Disponible (Gratis promo)', estacion: 'Disponible (Gratis promo)', constelacion: 'Consultar calendario' },
  { category: 'Entrega & Soporte', feature: 'Soporte técnico post-lanzamiento', sonda: '7 días de garantía', estacion: '15 días de soporte', constelacion: '30 días de soporte VIP' },
];

export const PRICING_FAQS = [
  {
    question: '¿Por qué ofrecen precios en UF y en CLP?',
    answer: 'En Chile, la Unidad de Fomento (UF) es el estándar preferido por empresas, clínicas y servicios profesionales para contratos comerciales y facturación B2B, mientras que el peso chileno (CLP) facilita el pago inmediato a personas y pequeños emprendimientos. Puedes cotizar en cualquiera de las dos monedas con total transparencia.',
  },
  {
    question: '¿Los precios incluyen IVA?',
    answer: 'Los precios de referencia se indican en valores netos. Si requieres Factura Electrónica emitida a nombre de tu empresa o SpA, se agrega el 19% de IVA correspondiente.',
  },
  {
    question: '¿Hay mensualidades o cobros ocultos obligatorios?',
    answer: 'No. El desarrollo del sitio web y la configuración de tu CRM se pagan una sola vez (50% al iniciar y 50% al publicar con tu conformidad). El código y los accesos son 100% tuyos. Solo si deseas que nosotros nos encarguemos de tu hosting, copias de seguridad y soporte continuo puedes contratar opcionalmente el Plan Órbita Care (1,5 UF/mes).',
  },
  {
    question: '¿Cómo funciona la forma de pago?',
    answer: 'Trabajamos con el esquema estándar de la industria: 50% de anticipo para reservar el espacio en calendario y comenzar la producción, y el 50% restante únicamente cuando el sitio esté completamente terminado, probado y aprobado por ti antes de conectarlo a tu dominio definitivo.',
  },
  {
    question: '¿Realmente el Modo Turbo es gratis?',
    answer: 'Sí. Actualmente tenemos una promoción de temporada donde el Modo Turbo (entrega garantizada en 7 días hábiles) está bonificado a $0 para los planes Sonda y Estación, sujeto a la entrega oportuna de tus contenidos y accesos.',
  },
  {
    question: '¿Qué pasa si necesito agregar funciones más adelante?',
    answer: 'Tu sitio se construye sobre código moderno, modular y escalable (React / Tailwind / Vite). Puedes empezar hoy con el Plan Sonda o Estación y más adelante agregar nuevas páginas, catálogo interactivo o sistemas de reserva sin tener que rehacer la web desde cero.',
  },
];

export const APP_PLAN = {
  id: 'aplicacion',
  name: 'Plan Aplicación & Software',
  tagline: 'Web App interactiva, PWA instalable en móviles y portales de clientes a medida.',
  price: '$1.890.000 CLP',
  priceRaw: 1_890_000,
  priceUf: '48,0 UF',
  monthlyPrice: '$189.000 CLP',
  monthlyPriceRaw: 189_000,
  monthlyPriceUf: '4,8 UF',
  description: 'Para negocios que necesitan algo más que una web informativa: plataformas con login de usuarios, bases de datos en tiempo real, cotizadores dinámicos, pasarelas de pago o automatizaciones complejas.',
  features: [
    'PWA Instalable en iOS y Android: acceso directo en la pantalla del celular sin comisiones de tiendas de aplicaciones.',
    'Autenticación segura y roles: registro con Google / Email, perfiles privados, dashboards protegidos y permisos administrativos.',
    'Base de datos en tiempo real: integración nativa con PostgreSQL / Supabase, almacenamiento seguro y copias de respaldo continuas.',
    'Pasarelas de cobro automatizadas: conexión con Webpay Plus, Fintoc o Stripe con generación de boletas y suscripciones.',
    'Panel de administración y CRM avanzado: control total de usuarios, transacciones, métricas de actividad y exportación a Excel.',
    'Asistente IA (Orbit) nativo: copiloto conversacional integrado dentro de la app para asistir y resolver dudas a tus usuarios 24/7.',
    'Código 100% propio y sin dependencias propietarias: desarrollo en React, TypeScript y Tailwind con entrega de repositorio.',
    'Soporte técnico VIP de 45 días: inducción completa a tu equipo, monitoreo de rendimiento y garantía post-lanzamiento.',
  ],
  monthlyFeatures: [
    'Infraestructura Cloud dedicada de alta disponibilidad con balanceo de carga y CDN global.',
    'Mantenimiento preventivo de base de datos, APIs externas y respaldos automáticos diarios.',
    'Bolsa mensual de 4 horas de evolución técnica para mejoras de interfaz, nuevos reportes o funciones.',
    'Asistente IA (Orbit) incluido con hasta 20k conversaciones mensuales para soporte automatizado.',
    'Monitoreo perimetral de seguridad, renovación de certificados SSL y línea directa por WhatsApp.',
  ],
  aiAssistant: {
    conversations: 'Hasta 20.000 conversaciones / mes',
    shortLabel: 'Hasta 20k conversaciones',
    optional: false,
    description: 'Copiloto de IA integrado de forma nativa dentro de la aplicación para soporte y automatización.',
  },
};

export const PLAN_SUMMARIES: { plan: PlanId; price: string; priceUf: string; for: string }[] = [
  { plan: 'Sonda', price: 'desde $490.000', priceUf: '12,5 UF', for: 'Landing o campaña puntual' },
  { plan: 'Estación', price: 'desde $990.000', priceUf: '25,0 UF', for: 'Landing premium o sitio 5–8 bloques' },
  { plan: 'Constelación', price: 'desde $1.690.000', priceUf: '42,5 UF', for: 'Multi-sección, rediseño o pack creativo' },
  { plan: 'Aplicación', price: 'desde $1.890.000', priceUf: '48,0 UF', for: 'Web App, PWA instalable o plataforma a medida' },
];

export function planKeyFromName(name?: string): PlanId {
  if (!name) return 'Estación';
  if (/aplicaci|pwa|app|software/i.test(name)) return 'Aplicación';
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

export function formatUF(amount: number): string {
  return `${amount.toLocaleString('es-CL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} UF`;
}
