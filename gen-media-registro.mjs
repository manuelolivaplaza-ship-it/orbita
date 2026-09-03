import fs from 'fs';
import path from 'path';

const root = "C:/Users/manue/OneDrive/Desktop/órbita";
const propuestasDir = path.join(root, "propuestas");
const registroPath = "C:/Users/manue/OneDrive/Desktop/SitiosWeb/_leads/MEDIA-REGISTRO.md";

// Enumerar slugs con dist/index.html
const allEntries = fs.readdirSync(propuestasDir, { withFileTypes: true });
let slugs = [];
for (const e of allEntries) {
  if (!e.isDirectory()) continue;
  const name = e.name;
  if (name.startsWith('_')) continue;
  if (name === 'propuestas') continue;
  if (name.endsWith('.tmp')) continue;
  const distIndex = path.join(propuestasDir, name, "dist/index.html");
  if (fs.existsSync(distIndex)) slugs.push(name);
}
slugs.sort();
console.log(`Slugs con build: ${slugs.length}`);
console.log(slugs.join('\n'));

// Mapeo PROMPT
const promptFiles = fs.readdirSync(propuestasDir).filter(f => f.startsWith('PROMPT-') && f.endsWith('.md'));
console.log(`\nPROMPTs: ${promptFiles.length}`);

function findPromptForSlug(slug, sector) {
  const normalized = slug.toUpperCase().replace(/-/g, '-');
  const slugUp = slug.toUpperCase();
  // 1) mapeo directo por slug (prioridad máxima)
  const mapping = {
    'ARQUITECTURA-B-CLARO': 'PROMPT-ARQUITECTURA-B-CLARO-MINIMALISTA.md',
    'ARQUITECTURA-B-OSCURO': 'PROMPT-ARQUITECTURA-B-OSCURO-PREMIUM.md',
    'ARQUITECTURA-CLARO': 'PROMPT-ARQUITECTURA-B-CLARO-MINIMALISTA.md',
    'ARQUITECTURA-OSCURO-PREMIUM': 'PROMPT-ARQUITECTURA-B-OSCURO-PREMIUM.md',
    'ARQUITECTURA-OSCURO': 'PROMPT-ARQUITECTURA-B-OSCURO-PREMIUM.md',
    'CENTRO-MEDICO-ETER-CLARO': 'PROMPT-CENTRO-MEDICO-ETER-CLARO.md',
    'CENTRO-MEDICO-NOCTUA-OSCURO': 'PROMPT-CENTRO-MEDICO-NOCTUA-OSCURO.md',
    'CENTRO-MEDICO-CLARO': 'PROMPT-CENTRO-MEDICO-CLARO-MINIMALISTA.md',
    'CONCESIONARIA-ETER-CLARO': 'PROMPT-CONCESIONARIA-ETER-CLARO.md',
    'CONCESIONARIA-NOCTUA-OSCURO': 'PROMPT-CONCESIONARIA-NOCTUA-OSCURO.md',
    'CONCESIONARIA-CLARO': 'PROMPT-CONCESIONARIA-CLARO-MINIMALISTA.md',
    'CONCESIONARIA-OSCURO': 'PROMPT-CONCESIONARIA-OSCURO-PREMIUM.md',
    'DENTISTA-B-AZUL-CIAN': 'PROMPT-DENTISTA-B-AZUL-CIAN.md',
    'DENTISTA-B-CLARO': 'PROMPT-DENTISTA-B-CLARO-MINIMALISTA.md',
    'DENTISTA-B-OSCURO': 'PROMPT-DENTISTA-B-OSCURO-PREMIUM.md',
    'DENTISTA-B-TEAL': 'PROMPT-DENTISTA-B-TEAL.md',
    'DISTRIBUIDORA-ETER-CLARO': 'PROMPT-DISTRIBUIDORA-ETER-CLARO.md',
    'DISTRIBUIDORA-NOCTUA-OSCURO': 'PROMPT-DISTRIBUIDORA-NOCTUA-OSCURO.md',
    'KINESIOLOGIA-ETER-CLARO': 'PROMPT-KINESIOLOGIA-ETER-CLARO.md',
    'KINESIOLOGIA-NOCTUA-OSCURO': 'PROMPT-KINESIOLOGIA-NOCTUA-OSCURO.md',
    'LABORATORIO-ETER-CLARO': 'PROMPT-LABORATORIO-ETER-CLARO.md',
    'LABORATORIO-NOCTUA-OSCURO': 'PROMPT-LABORATORIO-NOCTUA-OSCURO.md',
    'MARKETING-B-AZUL-CIAN': 'PROMPT-MARKETING-B-AZUL-CIAN.md',
    'MARKETING-B-CLARO': 'PROMPT-MARKETING-B-CLARO-MINIMALISTA.md',
    'MARKETING-B-OSCURO': 'PROMPT-MARKETING-B-OSCURO-PREMIUM.md',
    'NEUMATICOS-ETER-CLARO': 'PROMPT-NEUMATICOS-ETER-CLARO.md',
    'NEUMATICOS-NOCTUA-OSCURO': 'PROMPT-NEUMATICOS-NOCTUA-OSCURO.md',
    'REPUESTOS-ETER-CLARO': 'PROMPT-REPUESTOS-ETER-CLARO.md',
    'REPUESTOS-NOCTUA-OSCURO': 'PROMPT-REPUESTOS-NOCTUA-OSCURO.md',
    'SALUD-MENTAL-ETER-CLARO': 'PROMPT-SALUD-MENTAL-ETER-CLARO.md',
    'SALUD-MENTAL-NOCTUA-OSCURO': 'PROMPT-SALUD-MENTAL-NOCTUA-OSCURO.md',
    'SOFTWARE-B-AZUL-CIAN': 'PROMPT-SOFTWARE-B-AZUL-CIAN.md',
    'SOFTWARE-B-CLARO': 'PROMPT-SOFTWARE-B-CLARO-MINIMALISTA.md',
    'SOFTWARE-B-OSCURO': 'PROMPT-SOFTWARE-B-OSCURO-PREMIUM.md',
    'UNIVERSIDAD-ETER-CLARO': 'PROMPT-UNIVERSIDAD-ETER-CLARO.md',
    'UNIVERSIDAD-NOCTUA-OSCURO': 'PROMPT-UNIVERSIDAD-NOCTUA-OSCURO.md',
    'VETERINARIA-B-CLARO': 'PROMPT-VETERINARIA-B-CLARO-MINIMALISTA.md',
    'VETERINARIA-B-OSCURO': 'PROMPT-VETERINARIA-B-OSCURO-PREMIUM.md',
    'VETERINARIA-B-TEAL': 'PROMPT-VETERINARIA-B-TEAL.md',
    'VINEDO-ETER-CLARO': 'PROMPT-VINEDO-ETER-CLARO.md',
    'VINEDO-NOCTUA-OSCURO': 'PROMPT-VINEDO-NOCTUA-OSCURO.md',
  };
  for (const [k, v] of Object.entries(mapping)) {
    if (slugUp === k || slugUp.endsWith(k) || slugUp.includes(k)) {
      if (promptFiles.includes(v)) return v;
    }
  }
  // 2) intento exacto
  const exact = `PROMPT-${normalized}.md`;
  if (promptFiles.includes(exact)) return exact;
  // 3) intentos por sector+variante
  if (sector) {
    const sUp = sector.toUpperCase().replace(/-/g, '-').replace(/\s+/g, '-');
    const candidates = [
      `PROMPT-${sUp}-ETER-CLARO.md`,
      `PROMPT-${sUp}-NOCTUA-OSCURO.md`,
      `PROMPT-${sUp}-B-CLARO-MINIMALISTA.md`,
      `PROMPT-${sUp}-B-OSCURO-PREMIUM.md`,
      `PROMPT-${sUp}-B-AZUL-CIAN.md`,
      `PROMPT-${sUp}-B-TEAL.md`,
      `PROMPT-${sUp}-CLARO-MINIMALISTA.md`,
      `PROMPT-${sUp}-OSCURO-PREMIUM.md`,
      `PROMPT-${sUp}-INDUSTRIAL-ETER-CLARO.md`,
    ];
    for (const c of candidates) if (promptFiles.includes(c)) return c;
    if (slug.endsWith('-eter-claro')) {
      const c2 = `PROMPT-${sUp}-ETER-CLARO.md`;
      if (promptFiles.includes(c2)) return c2;
    }
    if (slug.endsWith('-noctua-oscuro')) {
      const c2 = `PROMPT-${sUp}-NOCTUA-OSCURO.md`;
      if (promptFiles.includes(c2)) return c2;
    }
  }
  // 4) fallback genérico (ya mapeado arriba)
  // fallback por paleta
  if (slug.includes('oscuro') || slug.includes('noctua') || slug.includes('b-oscuro')) {
    if (promptFiles.includes('PROMPT-SITIO-OSCURO.md')) return 'PROMPT-SITIO-OSCURO.md';
  }
  if (promptFiles.includes('PROMPT-SITIO-CLARO.md')) return 'PROMPT-SITIO-CLARO.md';
  return promptFiles[0] || null;
}

function extractPasoMedia(promptContent) {
  const idx = promptContent.indexOf('PASO 0');
  if (idx === -1) return {raw:'', images:[]};
  const slice = promptContent.slice(idx, idx+2500);
  // buscar hasta siguiente ## o SECCIONES o PALETA etc.
  const endMarkers = ['SECCIONES', 'PALETA','MOTION','CONVERSI','REGLAS','BENCHMARK','PROCESO','```'];
  let end = slice.length;
  // no cortar demasiado pronto
  const raw = slice;
  // extraer imágenes: pattern file.jpg/png 16:9 o 4:5 etc
  const imgRegex = /([a-z0-9\-_]+\.(?:jpg|png|svg|webp))\s+(\d+:\d+)\s+([^·\n]+)?/gi;
  const images=[];
  let m;
  while ((m=imgRegex.exec(raw))!==null) {
    if (images.length>=8) break;
    images.push({file:m[1], ratio:m[2], desc:(m[3]||'').trim().replace(/\s+/g,' ').slice(0,220)});
  }
  // si no encontró con ratio, probar sin ratio estricto
  if (images.length===0) {
    const altRegex = /([a-z0-9\-_]+\.(?:jpg|png))\s+([^·\n]{10,120})/gi;
    while ((m=altRegex.exec(raw))!==null) {
      if (images.length>=4) break;
      images.push({file:m[1], ratio:'16:9', desc:m[2].trim().slice(0,120)});
    }
  }
  return {raw: raw.slice(0,1200), images};
}

function extractPaleta(promptContent) {
  const m = promptContent.match(/PALETA[\s\S]{0,400}--[^ \n]+ [^\n]+/);
  if (m) return m[0].slice(0,600).replace(/\s+/g,' ').trim();
  const m2 = promptContent.match(/--papel[^ \n]* [^\n]+/);
  if (m2) return m2[0].slice(0,300);
  return '';
}
function extractProhibido(promptContent) {
  const m = promptContent.match(/PROHIBIDO[^ \n]*[^\n]{0,300}/);
  if (m) return m[0].slice(0,400).replace(/\s+/g,' ');
  const m2 = promptContent.match(/máx 4 imágenes[^ \n]*[^\n]{0,300}/);
  if (m2) return m2[0].slice(0,400).replace(/\s+/g,' ');
  return 'PROHIBIDO personas, caras, manos, logos, texto, branding, neon';
}

let inventory=[];
for (const slug of slugs) {
  const metaPath = path.join(propuestasDir, slug, "meta.json");
  let meta={};
  try { meta = JSON.parse(fs.readFileSync(metaPath,'utf8')); } catch {}
  const mediaDir = path.join(propuestasDir, slug, "public/media");
  let mediaFiles=[];
  try { mediaFiles = fs.readdirSync(mediaDir).filter(f=>!f.includes('_orig') && !f.endsWith('.svg') || true); } catch {}
  // filtrar solo jpg/png visibles, ignorar _orig
  let mediaVisible=[];
  try {
    const all = fs.readdirSync(mediaDir);
    mediaVisible = all.filter(f=> !f.includes('_orig') && !f.includes('_tmp') && (f.endsWith('.jpg')||f.endsWith('.png')||f.endsWith('.jpeg')||f.endsWith('.webp')) );
  } catch {}
  const promptFile = findPromptForSlug(slug, meta.sector||'');
  let promptContent='';
  if (promptFile) {
    try { promptContent = fs.readFileSync(path.join(propuestasDir, promptFile),'utf8'); } catch {}
  }
  const paso = extractPasoMedia(promptContent);
  const paleta = extractPaleta(promptContent);
  const prohibido = extractProhibido(promptContent);
  // si paso no tiene imagenes, usar mediaVisible como fallback
  let images = paso.images;
  if (images.length===0 && mediaVisible.length>0) {
    images = mediaVisible.slice(0,4).map(f=>{
      const ext = path.extname(f);
      const base = path.basename(f, ext);
      return {file:f, ratio:'16:9', desc:`${base} — espacio vacío editorial, sin personas`}
    });
  }
  // si aún vacío y es salud-mental etc con 8 images fallback ya viene de PROMPT
  // asegurar max 4-8
  inventory.push({slug, meta, mediaVisible, mediaCount: mediaVisible.length, promptFile, paleta, prohibido, images, pasoRaw: paso.raw});
}

console.log(JSON.stringify(inventory.map(i=>({slug:i.slug, sector:i.meta.sector, brand:i.meta.brand, promptFile:i.promptFile, images:i.images.map(x=>x.file+ ' '+x.ratio)})), null, 2));
fs.writeFileSync(path.join(root, '_media-inventory.json'), JSON.stringify(inventory, null, 2), 'utf8');
console.log(`Inventory written to _media-inventory.json (${inventory.length} webs)`);
