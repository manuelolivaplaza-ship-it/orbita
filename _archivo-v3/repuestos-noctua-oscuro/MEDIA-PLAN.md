# MEDIA-PLAN — repuestos-noctua-oscuro · NOCTUA REPUESTOS · repuestos
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/repuestos-noctua-oscuro

## Identidad
- Marca: NOCTUA REPUESTOS — NOCTUA REPUESTOS — Casa de Repuestos Nocturna · Propuesta Órbita
- Sector: repuestos — Propuesta oscura premium para casa de repuestos chilena: verificación por VIN, stock verificable y despacho noche/madrugada.
- PROMPT fuente: `PROMPT-REPUESTOS-NOCTUA-OSCURO.md` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: NOCTUA oscuro #121110 / champán #C8A96A
- Paleta completa: PALETA (regla dura, variables CSS en :root) --fondo #121417 (grafito profundo) · --superficie #1A1D20 · --superficie-alta #23262B · --filete #2E3339 · --hueso #E8E6E1 (texto, NUNCA #FFF) · --gris #9AA0A6 · ACENTO ÚNICO --signal #C1272D (rojo señal técnico, <6% de la UI: CTA principal, kickers, estados activos, links).
- PROHIBIDO: PROHIBIDO #000/#FFF puros, neón saturado, glow en texto, gradientes púrpura-azul genéricos.
- Media actual en public/media/: bodega.jpg, detalle.jpg, kit.jpg, mostrador.jpg (4 archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de PROMPT-REPUESTOS-NOCTUA-OSCURO.md — respetar nombre de archivo, ratio y VACÍO sin personas

1. `bodega.jpg` — 16:9 — bodega de repuestos nocturna VACÍA e impecable: estanterías metálicas en penumbra, — PROHIBIDO #000/#FFF puros, neón saturado, glow en texto, gradientes púrpura-azul genéricos.
2. `detalle.jpg` — 1:1 — macro de disco de freno nuevo sobre pizarra oscura, luz rasante suave — PROHIBIDO #000/#FFF puros, neón saturado, glow en texto, gradientes púrpura-azul genéricos.
3. `pasillo.jpg` — 16:9 — pasillo de bodega claro en penumbra, cajas alineadas y rotuladas, simetría industrial — PROHIBIDO #000/#FFF puros, neón saturado, glow en texto, gradientes púrpura-azul genéricos.
4. `kit.jpg` — 4:5 — bodegón chiaroscuro de filtros y pastillas alineados sobre superficie grafito, sombra profunda. — PROHIBIDO #000/#FFF puros, neón saturado, glow en texto, gradientes púrpura-azul genéricos.

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

### 1. bodega.jpg — 16:9

```
photorealistic bodega de repuestos nocturna VACÍA e impecable: estanterías metálicas en penumbra,, ordered spare parts warehouse, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO #000/#FFF puros, neón saturado, glow en texto, gradientes púrpura-azul genéricos.

### 2. detalle.jpg — 1:1

```
photorealistic macro de disco de freno nuevo sobre pizarra oscura, luz rasante suave, ordered spare parts warehouse, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 1:1
```
Negative: PROHIBIDO #000/#FFF puros, neón saturado, glow en texto, gradientes púrpura-azul genéricos.

### 3. pasillo.jpg — 16:9

```
photorealistic pasillo de bodega claro en penumbra, cajas alineadas y rotuladas, simetría industrial, ordered spare parts warehouse, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO #000/#FFF puros, neón saturado, glow en texto, gradientes púrpura-azul genéricos.

### 4. kit.jpg — 4:5

```
photorealistic bodegón chiaroscuro de filtros y pastillas alineados sobre superficie grafito, sombra profunda., ordered spare parts warehouse, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 4:5
```
Negative: PROHIBIDO #000/#FFF puros, neón saturado, glow en texto, gradientes púrpura-azul genéricos.


## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = 16:9 / 1:1 / 16:9 / 4:5, añadir `no branding, no watermark, no people, no hands, no faces`.
3. Descargar como `bodega.jpg` etc. y reemplazar en `public/media/` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. `npm --prefix propuestas/repuestos-noctua-oscuro run build` (tsc --noEmit && vite build) hasta verde.
5. Verificar que ninguna imagen tenga personas/caras/manos/logos/texto/neón — si aparece, descartar y regenerar con negative reforzado.

## Videos (si aplica)
- Videos: 0 en esta web (no se requieren por PROMPT). Si el hero necesita loop sutil, usar Ken Burns 36s sobre una sola imagen (no video generado). Para futuros videos: prompt con `slow dolly in, 5s, 24fps, no people`.

## Validación
- [x] 4 prompts muse-spark listos (2×16:9, 1×4:5, 1×1:1)
- [x] Paleta y PROHIBIDO respetados
- [x] Nombres de archivo y ratios coinciden con PROMPT PASO 0
- [x] Sin personas / sin branding / sin texto en todos los prompts
- [ ] Batch fotográfico Google Flow final (pendiente ejecución batch) — prompts listos arriba

---
*Anotado por opencode run -m opencode-go/muse-spark-1.2-contributor — dirección de arte editorial, una imagen = un prompt, ratio y estilo según PROMPT por rubro.*
