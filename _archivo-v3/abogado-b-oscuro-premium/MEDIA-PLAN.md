# MEDIA-PLAN — abogado-b-oscuro-premium · Valparaíso Asesores Legales · legal
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/abogado-b-oscuro-premium

## Identidad
- Marca: Valparaíso Asesores Legales — VALPARAÍSO ASESORES LEGALES — Propuesta Órbita
- Sector: legal — Asesoría legal con dirección oscura premium: sobria, elegante y de alto contraste.
- PROMPT fuente: `PROMPT-SITIO-OSCURO.md` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: NOCTUA oscuro #121110 / champán #C8A96A
- Paleta completa: PALETA (regla dura — la oscuridad tiene capas, como variables CSS en :root) --fondo #121110 (negro CÁLIDO) · --superficie #1B1917 · --superficie-alta #23201C · --filete #2E2A26 · --marfil #EDE8E0 (texto, NUNCA #FFF) · --gris-cálido #9B948B · ACENTO ÚNICO --champan #C8A96A (<5% UI). PROHIBIDO #000/#FFF puros, dorado brillante
- PROHIBIDO: PROHIBIDO #000/#FFF puros, dorado brillante
- Media actual en public/media/: pasillo.png, pluma.png, sala.png, textura.png (4 archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de PROMPT-SITIO-OSCURO.md — respetar nombre de archivo, ratio y VACÍO sin personas

1. `hero.jpg` — 16:9 — sala crepuscular luz oculta cálida, yeso carbón, cama marfil, latón, VACÍA — PROHIBIDO #000/#FFF puros, dorado brillante
2. `object.jpg` — 4:5 — bodegón chiaroscuro frasco ámbar sobre piedra oscura — PROHIBIDO #000/#FFF puros, dorado brillante
3. `texture.jpg` — 1:1 — macro — PROHIBIDO #000/#FFF puros, dorado brillante
4. `corridor.jpg` — 16:9 — pasillo nocturno simétrico con focos — PROHIBIDO #000/#FFF puros, dorado brillante

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

### 1. hero.jpg — 16:9

```
photorealistic sala crepuscular luz oculta cálida, yeso carbón, cama marfil, latón, VACÍA, empty law office, Chilean contemporary, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO #000/#FFF puros, dorado brillante

### 2. object.jpg — 4:5

```
photorealistic bodegón chiaroscuro frasco ámbar sobre piedra oscura, empty law office, Chilean contemporary, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 4:5
```
Negative: PROHIBIDO #000/#FFF puros, dorado brillante

### 3. texture.jpg — 1:1

```
photorealistic texture, empty law office, Chilean contemporary, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 1:1
```
Negative: PROHIBIDO #000/#FFF puros, dorado brillante

### 4. corridor.jpg — 16:9

```
photorealistic pasillo nocturno simétrico con focos, empty law office, Chilean contemporary, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO #000/#FFF puros, dorado brillante


## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = 16:9 / 4:5 / 1:1 / 16:9, añadir `no branding, no watermark, no people, no hands, no faces`.
3. Descargar como `hero.jpg` etc. y reemplazar en `public/media/` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. `npm --prefix propuestas/abogado-b-oscuro-premium run build` (tsc --noEmit && vite build) hasta verde.
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
