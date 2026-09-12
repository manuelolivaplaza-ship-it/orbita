import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ORIGIN, NAV, ROUTES, absoluteUrl } from './marketing-routes.mjs';

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
  return NAV.map((item) => `<a href="${item.href}" class="text-sm font-medium text-zinc-700 hover:text-[#0B0B12]">${escapeHtml(item.label)}</a>`).join('\n          ');
}

function shellHtml(route) {
  const cta =
    route.path === '/contacto'
      ? '<a href="/contacto" class="text-sm font-medium underline">Escribir a Reclu</a>'
      : route.path === '/crm'
        ? '<a href="/crm/demo" class="text-sm font-medium underline">Ver demo</a>'
        : '<a href="/galeria" class="text-sm font-medium underline">Ver demos de rubro</a>';
  return `<div class="relative min-h-screen bg-[#F7F8FC] text-[#0B0B12] font-sans">
      <header class="px-4 sm:px-6 py-4">
        <nav class="max-w-[88rem] mx-auto flex flex-wrap items-center gap-4" aria-label="Principal">
          <a href="/" class="text-[1.2rem] font-medium tracking-tight text-[#0B0B12]">reclu</a>
          ${navHtml()}
        </nav>
      </header>
      <main class="px-4 sm:px-6 pt-16 pb-24 max-w-[88rem] mx-auto">
        <h1 class="text-4xl sm:text-6xl font-medium tracking-tight text-[#0B0B12] leading-[0.95] mb-6" style="letter-spacing:-0.045em">${escapeHtml(route.h1)}</h1>
        <p class="text-zinc-600 text-lg max-w-xl leading-relaxed mb-8">${escapeHtml(route.lead)}</p>
        <p>${cta}</p>
      </main>
    </div>`;
}

function professionalService(url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Reclu',
    url,
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

function upsertMeta(html, attr, key, value) {
  const re = new RegExp(`<meta ${attr}="${key}" content="[^"]*"\\s*\\/?>`, 'i');
  const tag = `<meta ${attr}="${key}" content="${escapeHtml(value)}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace('</head>', `    ${tag}\n  </head>`);
}

function applyMeta(html, route) {
  const url = absoluteUrl(route.path);
  const jsonLd = JSON.stringify(professionalService(url), null, 2);
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
  if (/<link rel="canonical"/i.test(out)) {
    out = out.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${url}" />`);
  } else {
    out = out.replace('</head>', `    <link rel="canonical" href="${url}" />\n  </head>`);
  }
  const jsonBlock = `<script id="jsonld-primary" type="application/ld+json">\n${jsonLd}\n    </script>`;
  if (/id="jsonld-primary"/.test(out)) {
    out = out.replace(/<script id="jsonld-primary" type="application\/ld\+json">[\s\S]*?<\/script>/, jsonBlock);
  } else {
    out = out.replace('</head>', `    ${jsonBlock}\n  </head>`);
  }
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
