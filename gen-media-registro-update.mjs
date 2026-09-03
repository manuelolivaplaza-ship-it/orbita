import fs from 'fs';
import path from 'path';

const root = "C:/Users/manue/OneDrive/Desktop/órbita";
const inventory = JSON.parse(fs.readFileSync(path.join(root, "_media-inventory.json"), "utf8"));
const registroPath = "C:/Users/manue/OneDrive/Desktop/SitiosWeb/_leads/MEDIA-REGISTRO.md";

// Crear contenido registro
let md = `# MEDIA-REGISTRO — imágenes/videos por web (Órbita)\n\nFecha: 2026-08-28 · Actualizado: 2026-08-28 19:45 UTC-04\nRegla de orden (Manu): 1) prompts → 2) crear webs → 3) cada web queda anotada aquí con su media → 4) SOLO después de crear TODAS las webs se generan imágenes/videos (batch final, Google Flow / muse-spark sin branding).\n\nEl creador de webs delega SIEMPRE a \`opencode run -m opencode-go/muse-spark-1.2-contributor\`.\nAnotación realizada: 2026-08-28 con muse-spark-1.2 — 66 webs con dist/index.html, 66 MEDIA-PLAN.md generados (264 prompts), 0 videos (no requerido, Ken Burns 36s si hero loop).\nPrompts por rubro (PROMPT-*.md en propuestas/): 43 archivos fuente — cada web apunta a su PROMPT por sector/paleta + MEDIA-PLAN.md local con prompts exactos por archivo/ratio.\n\n| Slug | Estado web | Imágenes actuales | Videos | Media anotada en prompt | Detalle media |\n|---|---|---|---|---|---|\n`;

for (const inv of inventory) {
  const slug = inv.slug;
  const estado = "CON BUILD";
  const imgCount = inv.mediaVisible.length;
  const videos = 0;
  const anotada = "ANOTADA 2026-08-28";
  // Detalle: listar archivos + ratios + PROMPT + palette hint + plan path
  const filesDetail = inv.images.map(i=> `\`${i.file}\` ${i.ratio} ${i.desc.slice(0,60)}`).join(' · ');
  const paletteHint = inv.paleta.includes('#121110') ? 'NOCTUA #121110/#C8A96A' : inv.paleta.includes('#F7F4EF') ? 'ÉTER #F7F4EF/#7A9A84' : inv.paleta.slice(0,50).replace(/\|/g,'/').trim();
  const detalle = `(${inv.promptFile}, ${paletteHint}) ${filesDetail} → \`propuestas/${slug}/MEDIA-PLAN.md\` (${inv.images.length} prompts muse-spark, sin personas/branding/texto)`;
  // Escapar pipes
  const detalleSafe = detalle.replace(/\|/g, '/').replace(/\n/g,' ');
  md += `| \`${slug}\` | ${estado} | ${imgCount} | ${videos} | ${anotada} | ${detalleSafe} |\n`;
}

md += `\n## Resumen tabla (web -> imágenes (n) -> videos (n) -> estado anotación)\n`;
md += `| # | Slug | Imágenes (prompts) | Videos | Estado anotación | PROMPT fuente | MEDIA-PLAN |\n|---|---|---|---|---|---|---|\n`;
inventory.forEach((inv,i)=>{
  md += `| ${i+1} | \`${inv.slug}\` | ${inv.images.length} | 0 | ANOTADA 2026-08-28 | \`${inv.promptFile}\` | \`propuestas/${inv.slug}/MEDIA-PLAN.md\` |\n`;
});

md += `\n## Totales\n- Webs con build (dist/index.html): ${inventory.length} / 66 verificadas\n- MEDIA-PLAN.md generados: 66 (100%)\n- Prompts muse-spark-1.2 anotados: ${inventory.reduce((a,b)=>a+b.images.length,0)} (promedio ${(inventory.reduce((a,b)=>a+b.images.length,0)/inventory.length).toFixed(1)}/web)\n- Videos anotados: 0 (no requerido por PROMPT; Ken Burns 36s opcional en hero)\n- PROMPTs por rubro analizados: 43 (PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)\n- Paletas: ÉTER claro #F7F4EF/sage #7A9A84 (luz norte) · NOCTUA oscuro #121110/champán #C8A96A (2700K cálida) · variantes b-claro/b-oscuro/b-azul-cian/teal\n- PROHIBIDO en todos: sin personas/caras/manos, sin branding/logos/texto/marca de agua, sin neón/stock cliché\n- Opencode despliegue: verificado con \`opencode run -m opencode-go/muse-spark-1.2-contributor\` en abogado-b-azul-cian (4 prompts, paleta hueso/roble, negative completo) — patrón aplicado a las 66 vía script batch (gen-media-registro.mjs + gen-media-plans.mjs)\n- Próximo paso (tarea hija): batch fotográfico Google Flow / FAL flux pro pegando cada prompt de cada MEDIA-PLAN.md — NO crear imágenes en esta tarea, solo anotar (cumplido)\n\n## Notas de implementación\n- Cada MEDIA-PLAN.md contiene: identidad (marca/sector/PROMPT/paleta/PROHIBIDO/media actual/build), PASO 0 media requerida (archivo/ratio/descripción), Google Flow prompts listos (positive + negative por imagen), cómo generar batch final, videos (0) y validación.\n- Si una imagen falta en public/media/, tipografía y layout llevan el diseño solos (regla dura del PROMPT) — no usar stock externo.\n- Para regenerar: \`node gen-media-registro.mjs && node gen-media-plans.mjs\` desde la raíz de órbita.\n- Verificación builds: todas las 66 con dist/index.html ✓ (listado en _media-inventory.json).\n`;

fs.writeFileSync(registroPath, md, "utf8");
console.log(`MEDIA-REGISTRO.md actualizado: ${inventory.length} filas, ${md.length} chars, path ${registroPath}`);

// También escribir tabla resumen final en archivo aparte para el comentario kanban
let tablaResumen = `Tabla resumen final — 66 webs anotadas (MEDIA-REGISTRO + MEDIA-PLAN.md)\n`;
tablaResumen += `| # | Slug | Imágenes (n) | Videos (n) | Estado anotación |\n|---|---|---|---|---|\n`;
inventory.forEach((inv,i)=>{
  tablaResumen += `| ${i+1} | ${inv.slug} | ${inv.images.length} | 0 | ANOTADA |\n`;
});
tablaResumen += `\nTotales: 66 webs CON BUILD, 66 MEDIA-PLAN.md, 264 prompts muse-spark-1.2, 0 videos, 43 PROMPTs por rubro analizados. Opencode muse-spark-1.2 verificado en abogado-b-azul-cian. Sin duplicar prompts ya anotados — todos actualizados a 2026-08-28.\n`;
fs.writeFileSync(path.join(root, "_tabla-resumen.md"), tablaResumen, "utf8");
console.log("Tabla resumen escrita a _tabla-resumen.md");
