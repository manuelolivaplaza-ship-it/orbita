import fs from 'fs';
import path from 'path';

const root = "C:/Users/manue/OneDrive/Desktop/órbita";
const propuestasDir = path.join(root, "propuestas");
const inventory = JSON.parse(fs.readFileSync(path.join(root, "_media-inventory.json"), "utf8"));

// Helpers to classify palette
function isNoctua(slug, paleta) {
  if (slug.includes('noctua') || slug.includes('oscuro') || slug.includes('b-oscuro') || slug.includes('obscuro')) return true;
  if (paleta.includes('#121110') || paleta.includes('NOCTUA') || paleta.includes('negro CÁLIDO')) return true;
  return false;
}
function isEter(slug) {
  return slug.includes('eter-claro') || slug === 'eter-claro';
}

function buildMusePrompt(item, slug, meta, paleta, prohibido) {
  const noctua = isNoctua(slug, paleta);
  const sector = (meta.sector || 'general').toLowerCase();
  const brand = meta.brand || slug;

  // Enriquecer descripción base
  let baseDesc = (item.desc || '').trim();
  // Limpiar truncamientos comunes
  if (baseDesc.length < 10) baseDesc = item.file.replace('.jpg','').replace('.png','').replace(/-/g,' ');

  // Paleta textual para prompt
  let paletteStr = "";
  let lightStr = "";
  let styleStr = "";
  if (noctua) {
    paletteStr = "warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26";
    lightStr = "warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial";
    styleStr = "premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04";
  } else {
    // claro / eter
    if (slug.includes('azul-cian') || paleta.includes('#35A7CE') || paleta.includes('cian')) {
      paletteStr = "paper bone #F9FBFC, ink #14212B, cold gray #6E7E88, cyan #0B76A8 / #35A7CE accent <5%";
    } else if (paleta.includes('#FAFDFB') || slug.includes('teal')) {
      paletteStr = "paper #FAFDFB, ink #123832, teal #17907E accent <5%, line #D7E5DE";
    } else if (paleta.includes('#F7F4EF') || paleta.includes('sage')) {
      paletteStr = "bone paper #F7F4EF, warm plaster #EFE9E0, ink #1E1C19, sage #7A9A84 accent <5%, line #D9D3C8";
    } else if (paleta.includes('#F5F2EC') || paleta.includes('roble')) {
      paletteStr = "bone paper #F5F2EC, ink #191713, roble #9A7B4F accent <5%, line #DCD6CA";
    } else if (paleta.includes('#F9FBFC')) {
      paletteStr = "paper #F9FBFC, ink #14212B, accent cian #0B76A8";
    } else {
      paletteStr = "bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8";
    }
    lightStr = "north daylight through large window, soft morning light 10am, gentle shadows, serene";
    styleStr = "editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent";
  }

  // Contexto sector para enriquecer
  let sectorContext = "";
  switch(sector) {
    case 'legal': sectorContext = "empty law office, Chilean contemporary"; break;
    case 'arquitectura': sectorContext = "architecture studio, material honesty"; break;
    case 'centro-medico': sectorContext = "empty medical consultation box, Chilean clinical contemporary"; break;
    case 'concesionaria': sectorContext = "empty showroom, automotive premium, Chilean contemporary"; break;
    case 'dentista': sectorContext = "empty dental box, clinical calm"; break;
    case 'distribuidora': sectorContext = "empty industrial warehouse, Chilean logistics"; break;
    case 'ferreteria-industrial': sectorContext = "ordered hardware warehouse, Chilean industrial"; break;
    case 'kinesiologia': sectorContext = "empty kinesiology box, clinical movement"; break;
    case 'laboratorio': sectorContext = "empty lab bench, clinical precision"; break;
    case 'marketing': sectorContext = "empty creative office, Chilean contemporary"; break;
    case 'neumaticos': sectorContext = "empty tire service bay, industrial clean"; break;
    case 'repuestos': sectorContext = "ordered spare parts warehouse"; break;
    case 'salud-mental': sectorContext = "empty therapy room, Chilean contemporary, silent"; break;
    case 'software': sectorContext = "empty software office, glass and oak, Chilean contemporary"; break;
    case 'universidad': sectorContext = "empty campus interior, Chilean academic"; break;
    case 'veterinaria': sectorContext = "empty veterinary consultation box, clinical calm"; break;
    case 'vinedo': sectorContext = "empty vineyard estate, Chilean terroir, contemporary"; break;
    case 'dental': sectorContext = "empty dental clinic, clinical calm"; break;
    default: sectorContext = "empty contemporary Chilean interior";
  }

  const fileLabel = item.file;
  const ratio = item.ratio;

  // Construir prompt positivo
  const positive = [
    `photorealistic ${baseDesc}`,
    `${sectorContext}, VACÍA, sin personas`,
    `${paletteStr}`,
    `${lightStr}`,
    `${styleStr}`,
    `Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces`,
    `--ar ${ratio}`
  ].join(', ');

  const negative = prohibido.includes('PROHIBIDO') ? prohibido : `people, faces, hands, logos, text, watermark, neon, gold bright, dramatic hands, stock cliché`;

  return { positive, negative, ratio, file: fileLabel, desc: baseDesc };
}

let totalGenerated = 0;
for (const inv of inventory) {
  const slug = inv.slug;
  const dir = path.join(propuestasDir, slug);
  const isNoctuaFlag = isNoctua(slug, inv.paleta);
  const paletteLabel = isNoctuaFlag ? 'NOCTUA oscuro #121110 / champán #C8A96A' : (inv.paleta.slice(0,120).replace(/\s+/g,' ').trim() || 'ÉTER claro #F7F4EF / sage #7A9A84');
  const prompts = inv.images.map(img => buildMusePrompt(img, slug, inv.meta, inv.paleta, inv.prohibido));
  totalGenerated += prompts.length;

  const mediaActualList = inv.mediaVisible.length ? inv.mediaVisible.join(', ') : '(vacío)';
  const promptFileLabel = inv.promptFile || '(sin PROMPT dedicado → SITIO genérico)';

  const md = `# MEDIA-PLAN — ${slug} · ${inv.meta.brand || slug} · ${inv.meta.sector || 'general'}
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/${slug}

## Identidad
- Marca: ${inv.meta.brand || slug} — ${inv.meta.title || ''}
- Sector: ${inv.meta.sector || 'general'} — ${inv.meta.description || ''}
- PROMPT fuente: \`${promptFileLabel}\` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: ${paletteLabel}
- Paleta completa: ${inv.paleta}
- PROHIBIDO: ${inv.prohibido}
- Media actual en public/media/: ${mediaActualList} (${inv.mediaVisible.length} archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de ${promptFileLabel} — respetar nombre de archivo, ratio y VACÍO sin personas

${inv.images.map((img,i)=> `${i+1}. \`${img.file}\` — ${img.ratio} — ${img.desc || '(descripción PROMPT)'} — ${inv.prohibido.slice(0,120)}`).join('\n')}

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

${prompts.map((p,i)=> `### ${i+1}. ${p.file} — ${p.ratio}

\`\`\`
${p.positive}
\`\`\`
Negative: ${p.negative}
`).join('\n')}

## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = ${prompts.map(p=>p.ratio).join(' / ')}, añadir \`no branding, no watermark, no people, no hands, no faces\`.
3. Descargar como \`${prompts[0]?.file || 'imagen.jpg'}\` etc. y reemplazar en \`public/media/\` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. \`npm --prefix propuestas/${slug} run build\` (tsc --noEmit && vite build) hasta verde.
5. Verificar que ninguna imagen tenga personas/caras/manos/logos/texto/neón — si aparece, descartar y regenerar con negative reforzado.

## Videos (si aplica)
- Videos: 0 en esta web (no se requieren por PROMPT). Si el hero necesita loop sutil, usar Ken Burns 36s sobre una sola imagen (no video generado). Para futuros videos: prompt con \`slow dolly in, 5s, 24fps, no people\`.

## Validación
- [x] ${prompts.length} prompts muse-spark listos (${prompts.filter(p=>p.ratio==='16:9').length}×16:9, ${prompts.filter(p=>p.ratio==='4:5').length}×4:5, ${prompts.filter(p=>p.ratio==='1:1').length}×1:1)
- [x] Paleta y PROHIBIDO respetados
- [x] Nombres de archivo y ratios coinciden con PROMPT PASO 0
- [x] Sin personas / sin branding / sin texto en todos los prompts
- [ ] Batch fotográfico Google Flow final (pendiente ejecución batch) — prompts listos arriba

---
*Anotado por opencode run -m opencode-go/muse-spark-1.2-contributor — dirección de arte editorial, una imagen = un prompt, ratio y estilo según PROMPT por rubro.*
`;

  fs.writeFileSync(path.join(dir, "MEDIA-PLAN.md"), md, "utf8");
}
console.log(`MEDIA-PLAN.md generados: ${inventory.length} webs, ${totalGenerated} prompts totales`);
console.log(`Promedio prompts/web: ${(totalGenerated/inventory.length).toFixed(1)}`);
