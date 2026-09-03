# MEDIA-PLAN — software-b-oscuro-premium · UMBRAL · software
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/software-b-oscuro-premium

## Identidad
- Marca: UMBRAL — UMBRAL — Fábrica de Software · Propuesta Órbita
- Sector: software — Propuesta oscura premium para fábrica de software chilena: ingeniería precisa, trato directo.
- PROMPT fuente: `PROMPT-SOFTWARE-B-OSCURO-PREMIUM.md` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: NOCTUA oscuro #121110 / champán #C8A96A
- Paleta completa: PALETA (regla dura — la oscuridad tiene capas, variables CSS en :root) --fondo #14171A (grafito profundo) · --superficie #1B1F23 · --superficie-alta #22272C · --filete #30363B · --hueso #E9E7E2 (texto, NUNCA #FFF) · --gris-calido #99A2A8 · ACENTO ÚNICO --ambar-codigo #D9A441 (<5% de la UI). PROHIBIDO #000/#FFF puros, azul-violeta
- PROHIBIDO: PROHIBIDO #000/#FFF puros, azul-violeta
- Media actual en public/media/: hero.jpg, planos.jpg, teclas.jpg, texture.jpg (4 archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de PROMPT-SOFTWARE-B-OSCURO-PREMIUM.md — respetar nombre de archivo, ratio y VACÍO sin personas

1. `hero.jpg` — 16:9 — sala de reuniones crepuscular VACÍA, mesa larga madera oscura, luz puntual cálida — PROHIBIDO #000/#FFF puros, azul-violeta
2. `teclas.jpg` — 4:5 — bodegón chiaroscuro de teclado mecánico retroiluminado — PROHIBIDO #000/#FFF puros, azul-violeta
3. `texture.jpg` — 1:1 — macro superficie metálica cepillada con luz — PROHIBIDO #000/#FFF puros, azul-violeta
4. `planos.jpg` — 16:9 — diagramas técnicos impresos en blanco sobre papel, luz lateral — PROHIBIDO #000/#FFF puros, azul-violeta

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

### 1. hero.jpg — 16:9

```
photorealistic sala de reuniones crepuscular VACÍA, mesa larga madera oscura, luz puntual cálida, empty software office, glass and oak, Chilean contemporary, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO #000/#FFF puros, azul-violeta

### 2. teclas.jpg — 4:5

```
photorealistic bodegón chiaroscuro de teclado mecánico retroiluminado, empty software office, glass and oak, Chilean contemporary, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 4:5
```
Negative: PROHIBIDO #000/#FFF puros, azul-violeta

### 3. texture.jpg — 1:1

```
photorealistic macro superficie metálica cepillada con luz, empty software office, glass and oak, Chilean contemporary, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 1:1
```
Negative: PROHIBIDO #000/#FFF puros, azul-violeta

### 4. planos.jpg — 16:9

```
photorealistic diagramas técnicos impresos en blanco sobre papel, luz lateral, empty software office, glass and oak, Chilean contemporary, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO #000/#FFF puros, azul-violeta


## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = 16:9 / 4:5 / 1:1 / 16:9, añadir `no branding, no watermark, no people, no hands, no faces`.
3. Descargar como `hero.jpg` etc. y reemplazar en `public/media/` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. `npm --prefix propuestas/software-b-oscuro-premium run build` (tsc --noEmit && vite build) hasta verde.
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
