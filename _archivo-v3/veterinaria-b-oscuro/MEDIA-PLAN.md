# MEDIA-PLAN — veterinaria-b-oscuro · NOCTUA VET · veterinaria
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/veterinaria-b-oscuro

## Identidad
- Marca: NOCTUA VET — NOCTUA VET — Clínica Veterinaria de Especialidad · Propuesta Órbita
- Sector: veterinaria — Clínica veterinaria de especialidad con dirección oscura premium y fichas por área.
- PROMPT fuente: `PROMPT-VETERINARIA-B-OSCURO-PREMIUM.md` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: NOCTUA oscuro #121110 / champán #C8A96A
- Paleta completa: PALETA (regla dura — la oscuridad tiene capas, variables CSS en :root) --fondo #131614 (verde-negro profundo) · --superficie #1B201D · --superficie-alta #232A26 · --filete #2E3630 · --hueso #EDEAE3 (texto, NUNCA #FFF) · --gris-calido #98A29B · ACENTO ÚNICO --verde-lumen #7FC8A9 (<5% de la UI). PROHIBIDO #000/#FFF puros, verde neón
- PROHIBIDO: PROHIBIDO #000/#FFF puros, verde neón
- Media actual en public/media/: corridor.jpg, hero.jpg, object.jpg, texture.jpg (4 archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de PROMPT-VETERINARIA-B-OSCURO-PREMIUM.md — respetar nombre de archivo, ratio y VACÍO sin personas

1. `hero.jpg` — 16:9 — sala quirúrgica crepuscular, luz oculta cálida, instrumental acero sobre paño — PROHIBIDO #000/#FFF puros, verde neón
2. `object.jpg` — 4:5 — bodegón chiaroscuro de estetoscopio y frascos ámbar — PROHIBIDO #000/#FFF puros, verde neón
3. `texture.jpg` — 1:1 — macro tela verde quirúrgica con luz rasante — PROHIBIDO #000/#FFF puros, verde neón
4. `corridor.jpg` — 16:9 — pasillo nocturno simétrico con focos empotrados cálidos, cinematográfico — PROHIBIDO #000/#FFF puros, verde neón

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

### 1. hero.jpg — 16:9

```
photorealistic sala quirúrgica crepuscular, luz oculta cálida, instrumental acero sobre paño, empty veterinary consultation box, clinical calm, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO #000/#FFF puros, verde neón

### 2. object.jpg — 4:5

```
photorealistic bodegón chiaroscuro de estetoscopio y frascos ámbar, empty veterinary consultation box, clinical calm, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 4:5
```
Negative: PROHIBIDO #000/#FFF puros, verde neón

### 3. texture.jpg — 1:1

```
photorealistic macro tela verde quirúrgica con luz rasante, empty veterinary consultation box, clinical calm, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 1:1
```
Negative: PROHIBIDO #000/#FFF puros, verde neón

### 4. corridor.jpg — 16:9

```
photorealistic pasillo nocturno simétrico con focos empotrados cálidos, cinematográfico, empty veterinary consultation box, clinical calm, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO #000/#FFF puros, verde neón


## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = 16:9 / 4:5 / 1:1 / 16:9, añadir `no branding, no watermark, no people, no hands, no faces`.
3. Descargar como `hero.jpg` etc. y reemplazar en `public/media/` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. `npm --prefix propuestas/veterinaria-b-oscuro run build` (tsc --noEmit && vite build) hasta verde.
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
