# MEDIA-PLAN — dentista-b-oscuro-premium · OBSIDIANA DENTAL · dentista
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/dentista-b-oscuro-premium

## Identidad
- Marca: OBSIDIANA DENTAL — OBSIDIANA DENTAL — Clínica de Especialidad · Propuesta Órbita
- Sector: dentista — Propuesta oscura premium para clínica dental chilena: especialidad, tecnología y calma.
- PROMPT fuente: `PROMPT-DENTISTA-B-OSCURO-PREMIUM.md` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: NOCTUA oscuro #121110 / champán #C8A96A
- Paleta completa: PALETA (regla dura — la oscuridad tiene capas, variables CSS en :root) --fondo #14171B (azul-negro profundo) · --superficie #1B2026 · --superficie-alta #232A31 · --filete #2F3840 · --hueso #EDEBE6 (texto, NUNCA #FFF) · --gris-calido #97A1AB · ACENTO ÚNICO --celeste-quirurgico #8FC7DC (<5% de la UI). PROHIBIDO #000/#FFF puros, azul
- PROHIBIDO: PROHIBIDO #000/#FFF puros, azul
- Media actual en public/media/: corridor.jpg, hero.jpg, object.jpg, texture.jpg (4 archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de PROMPT-DENTISTA-B-OSCURO-PREMIUM.md — respetar nombre de archivo, ratio y VACÍO sin personas

1. `hero.jpg` — 16:9 — box dental crepuscular VACÍA, sillón como pieza escultórica bajo luz puntual — PROHIBIDO #000/#FFF puros, azul
2. `object.jpg` — 4:5 — bodegón chiaroscuro de instrumental dental sobre piedra oscura — PROHIBIDO #000/#FFF puros, azul
3. `texture.jpg` — 1:1 — macro tela quirúrgica celeste pálido con luz rasante — PROHIBIDO #000/#FFF puros, azul
4. `corridor.jpg` — 16:9 — pasillo clínico nocturno simétrico con focos empotrados cálidos, — PROHIBIDO #000/#FFF puros, azul

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

### 1. hero.jpg — 16:9

```
photorealistic box dental crepuscular VACÍA, sillón como pieza escultórica bajo luz puntual, empty dental box, clinical calm, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO #000/#FFF puros, azul

### 2. object.jpg — 4:5

```
photorealistic bodegón chiaroscuro de instrumental dental sobre piedra oscura, empty dental box, clinical calm, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 4:5
```
Negative: PROHIBIDO #000/#FFF puros, azul

### 3. texture.jpg — 1:1

```
photorealistic macro tela quirúrgica celeste pálido con luz rasante, empty dental box, clinical calm, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 1:1
```
Negative: PROHIBIDO #000/#FFF puros, azul

### 4. corridor.jpg — 16:9

```
photorealistic pasillo clínico nocturno simétrico con focos empotrados cálidos,, empty dental box, clinical calm, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO #000/#FFF puros, azul


## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = 16:9 / 4:5 / 1:1 / 16:9, añadir `no branding, no watermark, no people, no hands, no faces`.
3. Descargar como `hero.jpg` etc. y reemplazar en `public/media/` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. `npm --prefix propuestas/dentista-b-oscuro-premium run build` (tsc --noEmit && vite build) hasta verde.
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
