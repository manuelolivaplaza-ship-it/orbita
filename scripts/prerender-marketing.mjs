import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ORIGIN, NAV, ROUTES, absoluteUrl, HOME_FAQS } from './marketing-routes.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const indexPath = path.join(dist, 'index.html');

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function navHtml() {
  return NAV.map(
    (item) =>
      `<a href="${item.href}" class="text-sm font-medium text-zinc-700 hover:text-[#0B0B12]">${escapeHtml(item.label)}</a>`,
  ).join('\n          ');
}

function shellHtml(route) {
  const cta =
    route.path === '/contacto'
      ? '<a href="/contacto" class="inline-flex items-center rounded-full bg-[#0B0B12] text-white text-sm font-medium px-6 py-2.5">Escribir a Reclu</a>'
      : route.path === '/crm'
        ? '<a href="/crm/demo" class="text-sm font-medium underline">Ver demo</a>'
        : route.path === '/'
          ? '<a href="/contacto" class="inline-flex items-center rounded-full bg-[#0B0B12] text-white text-sm font-medium px-6 py-2.5">Pedir presupuesto</a> <a href="/galeria" class="text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-[5px] ml-3">Ver demos de rubro</a>'
          : '<a href="/galeria" class="text-sm font-medium underline">Ver demos de rubro</a>';
  const kicker =
    route.path === '/'
      ? '<p class="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Sitios web · 7–14 días</p>'
      : '';
  return `<div class="relative min-h-screen bg-[#F7F8FC] text-[#0B0B12] font-sans">
      <header class="px-4 sm:px-6 py-4">
        <nav class="max-w-[88rem] mx-auto flex flex-wrap items-center gap-4" aria-label="Principal">
          <a href="/" class="text-[1.2rem] font-medium tracking-tight text-[#0B0B12]">reclu</a>
          ${navHtml()}
        </nav>
      </header>
      <main class="px-5 sm:px-6 pt-[calc(5.25rem+env(safe-area-inset-top))] pb-24 max-w-[88rem] mx-auto">
        ${kicker}
        <h1 class="text-[2.05rem] sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#0B0B12] leading-[1.04] mb-5" style="letter-spacing:-0.045em">${escapeHtml(route.h1)}</h1>
        <p class="text-zinc-700 text-[15px] sm:text-lg max-w-md leading-[1.5] mb-8">${escapeHtml(route.lead)}</p>
        <p>${cta}</p>
      </main>
    </div>`;
}

function professionalService() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Reclu',
    url: `${ORIGIN}/`,
    image: `${ORIGIN}/og-image.jpg`,
    description:
      'Estudio web en Santiago de Chile. Sitios claros y rápidos en 7–14 días, con WhatsApp para que te escriban.',
    areaServed: 'CL',
    address: { '@type': 'PostalAddress', addressLocality: 'Santiago', addressCountry: 'CL' },
    email: 'hola@reclu.cl',
    telephone: '+56935409699',
    priceRange: '$420.000–$1.490.000 CLP',
  };
}

function webSite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Reclu',
    url: `${ORIGIN}/`,
    inLanguage: 'es-CL',
    publisher: { '@type': 'Organization', name: 'Reclu', url: `${ORIGIN}/` },
  };
}

function webPage(route) {
  return {
    '@context': 'https://schema.org',
    '@type': route.schemaType || 'WebPage',
    name: route.title,
    description: route.description,
    url: absoluteUrl(route.path),
    isPartOf: { '@type': 'WebSite', name: 'Reclu', url: `${ORIGIN}/` },
    inLanguage: 'es-CL',
  };
}

function faqPage(faqs = HOME_FAQS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

const PRICING_FAQS = [
  {
    question: '¿Por qué ofrecen precios en UF y en CLP?',
    answer:
      'En Chile, la Unidad de Fomento (UF) es el estándar preferido por empresas, clínicas y servicios profesionales para contratos comerciales y facturación B2B, mientras que el peso chileno (CLP) facilita el pago inmediato a personas y pequeños emprendimientos. Puedes cotizar en cualquiera de las dos monedas con total transparencia.',
  },
  {
    question: '¿Los precios incluyen IVA?',
    answer:
      'No. Todos los valores publicados son netos; se suma el 19% de IVA al facturar (boleta o factura electrónica). En las tarjetas y el cotizador verás “valores netos + 19% IVA” junto al precio.',
  },
  {
    question: '¿Hay mensualidades o cobros ocultos obligatorios?',
    answer:
      'No en la compra única. El sitio y el CRM se pagan una vez (50% al iniciar y 50% al publicar). El código es tuyo. Si después quieres hosting, backups y soporte, está Reclu Care ($60.000 / 1,5 UF al mes), opcional. Si prefieres no pagar el desarrollo de entrada, los planes mensuales incluyen el sitio, el CRM y Orbit.',
  },
  {
    question: '¿Qué incluye un plan mensual?',
    answer:
      'El sitio web va incluido (no cobramos el desarrollo aparte). También el panel CRM y Orbit, el chat con IA de esta plataforma — el mismo que ves en la esquina. Esencial: 2,5 UF y 2.000 chats/mes. Pro: 5 UF y 5.000 chats. Escala: 7 UF y 10.000 chats. Sin permanencia.',
  },
  {
    question: '¿Qué es un chat con Orbit?',
    answer:
      'Orbit es el asistente con IA de Reclu: el globo de la esquina de esta web. En tu sitio será el mismo chat, entrenado con tu negocio. Un chat es una conversación completa de un visitante con Orbit (preguntas, respuestas, derivación a WhatsApp o al CRM), no un mensaje suelto.',
  },
  {
    question: '¿Cómo funciona la forma de pago?',
    answer:
      'Trabajamos con el esquema estándar de la industria: 50% de anticipo para reservar el espacio en calendario y comenzar la producción, y el 50% restante únicamente cuando el sitio esté completamente terminado, probado y aprobado por ti antes de conectarlo a tu dominio definitivo.',
  },
  {
    question: '¿Realmente el Modo Turbo es gratis?',
    answer:
      'Sí, hasta el 31/10/2026. El Modo Turbo (entrega en 7 días hábiles) está a $0 para Sonda y Estación, sujeto a que nos entregues contenidos y accesos a tiempo. Después de esa fecha vuelve a su valor normal ($280.000 / 7 UF).',
  },
  {
    question: '¿Qué pasa si necesito agregar funciones más adelante?',
    answer:
      'Tu sitio se construye sobre código moderno, modular y escalable (React / Tailwind / Vite). Puedes empezar hoy con el Plan Sonda o Estación y más adelante agregar nuevas páginas, catálogo interactivo o sistemas de reserva sin tener que rehacer la web desde cero.',
  },
];

function offerCatalog() {
  const offers = [
    { name: 'Plan Sonda', price: 420000, description: 'Landing de conversión con WhatsApp y CRM esencial.' },
    { name: 'Plan Estación', price: 890000, description: 'Sitio comercial + CRM con WhatsApp.' },
    { name: 'Plan Constelación', price: 1490000, description: 'Multi-sección / rediseño con panel completo.' },
  ];
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Planes web Reclu',
    url: `${ORIGIN}/precios`,
    itemListElement: offers.map((offer, i) => ({
      '@type': 'Offer',
      position: i + 1,
      name: offer.name,
      description: offer.description,
      price: offer.price,
      priceCurrency: 'CLP',
      url: `${ORIGIN}/precios`,
      availability: 'https://schema.org/InStock',
    })),
  };
}

function asGraph(items) {
  return {
    '@context': 'https://schema.org',
    '@graph': items.map((item) => {
      const rest = { ...item };
      delete rest['@context'];
      return rest;
    }),
  };
}

function jsonLdFor(route) {
  if (route.path === '/') return asGraph([professionalService(), faqPage(), webSite()]);
  if (route.path === '/precios') return asGraph([webPage(route), offerCatalog(), faqPage(PRICING_FAQS)]);
  return webPage(route);
}

function upsertMeta(html, attr, key, value) {
  const re = new RegExp(`<meta ${attr}="${key}" content="[^"]*"\\s*\\/?>`, 'i');
  const tag = `<meta ${attr}="${key}" content="${escapeHtml(value)}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace('</head>', `    ${tag}\n  </head>`);
}

function injectFontPreloads(html) {
  const assetsDir = path.join(dist, 'assets');
  if (!fs.existsSync(assetsDir)) return html;
  const files = fs.readdirSync(assetsDir).filter((f) => f.endsWith('.woff2'));
  const pick = (re) => files.find((f) => re.test(f));
  const chosen = [
    pick(/inter-latin-400/i) || pick(/inter.*400/i),
    pick(/outfit-latin-500/i) || pick(/outfit.*500/i),
  ].filter(Boolean);
  if (!chosen.length) return html;
  if (html.includes('rel="preload"') && html.includes('as="font"')) return html;
  const tags = chosen
    .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
    .join('\n    ');
  return html.replace('</head>', `    ${tags}\n  </head>`);
}

function applyMeta(html, route, { noIndex = false } = {}) {
  const url = absoluteUrl(route.path);
  const jsonLd = JSON.stringify(jsonLdFor(route), null, 2);
  const image = `${ORIGIN}/og-image.jpg`;
  let out = html;
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`);
  out = upsertMeta(out, 'name', 'description', route.description);
  out = upsertMeta(out, 'property', 'og:title', route.title);
  out = upsertMeta(out, 'property', 'og:description', route.description);
  out = upsertMeta(out, 'property', 'og:url', url);
  out = upsertMeta(out, 'property', 'og:image', image);
  out = upsertMeta(out, 'property', 'og:site_name', 'Reclu');
  out = upsertMeta(out, 'name', 'twitter:title', route.title);
  out = upsertMeta(out, 'name', 'twitter:description', route.description);
  out = upsertMeta(out, 'name', 'twitter:image', image);
  if (noIndex) {
    out = upsertMeta(out, 'name', 'robots', 'noindex, nofollow');
  }
  if (/<link rel="canonical"/i.test(out)) {
    out = out.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${url}" />`);
  } else {
    out = out.replace('</head>', `    <link rel="canonical" href="${url}" />\n  </head>`);
  }
  if (noIndex) {
    out = out.replace(/<script id="jsonld-primary" type="application\/ld\+json">[\s\S]*?<\/script>/, '');
  } else {
    const jsonBlock = `<script id="jsonld-primary" type="application/ld+json">\n${jsonLd}\n    </script>`;
    if (/id="jsonld-primary"/.test(out)) {
      out = out.replace(/<script id="jsonld-primary" type="application\/ld\+json">[\s\S]*?<\/script>/, jsonBlock);
    } else {
      out = out.replace('</head>', `    ${jsonBlock}\n  </head>`);
    }
  }
  out = injectFontPreloads(out);
  const rootAt = out.indexOf('<div id="root">');
  const bodyClose = out.lastIndexOf('</body>');
  if (rootAt !== -1 && bodyClose !== -1 && rootAt < bodyClose) {
    out =
      out.slice(0, rootAt) +
      `<div id="root">\n    ${shellHtml(route)}\n    </div>\n  ` +
      out.slice(bodyClose);
  }
  return out;
}

function writeSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = ROUTES.map(
    (r) => `  <url>
    <loc>${absoluteUrl(r.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  ).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  fs.writeFileSync(path.join(dist, 'sitemap.xml'), xml);
  fs.writeFileSync(path.join(root, 'public', 'sitemap.xml'), xml);
}

if (!fs.existsSync(indexPath)) {
  console.error('prerender-marketing: dist/index.html no existe. Corre vite build primero.');
  process.exit(1);
}

const template = fs.readFileSync(indexPath, 'utf8');

for (const route of ROUTES) {
  const html = applyMeta(template, route);
  if (route.path === '/') {
    fs.writeFileSync(indexPath, html);
    continue;
  }
  const destDir = path.join(dist, route.path.replace(/^\//, ''));
  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(path.join(destDir, 'index.html'), html);
}

writeSitemap();
console.log(`prerender-marketing: ${ROUTES.length} rutas + sitemap.xml`);
