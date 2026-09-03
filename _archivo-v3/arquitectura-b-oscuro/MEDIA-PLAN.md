# MEDIA-PLAN — arquitectura-b-oscuro · UMBRAL · arquitectura
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/arquitectura-b-oscuro

## Identidad
- Marca: UMBRAL — UMBRAL — Arquitectura · Propuesta Órbita
- Sector: arquitectura — Precisión premium: presupuesto abierto por partida, modelo 3D compartido con el mandante y obra documentada semana a semana.
- PROMPT fuente: `PROMPT-ARQUITECTURA-B-OSCURO-PREMIUM.md` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: NOCTUA oscuro #121110 / champán #C8A96A
- Paleta completa: PALETA (regla dura — la oscuridad tiene capas, como variables CSS en :root) --fondo #131210 (negro CÁLIDO) · --superficie #1C1A17 · --superficie-alta #242119 · --filete #302B24 · --hueso #EAE4D8 (texto, NUNCA #FFF) · --gris-cálido #9A9285 · ACENTO ÚNICO --laton #B99A62 (<5% UI). PROHIBIDO #000/#FFF puros, dorados brillantes
- PROHIBIDO: PROHIBIDO #000/#FFF puros, dorados brillantes
- Media actual en public/media/: detail.jpg, gallery.jpg, hero.jpg, model.jpg (4 archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de PROMPT-ARQUITECTURA-B-OSCURO-PREMIUM.md — respetar nombre de archivo, ratio y VACÍO sin personas

1. `hero.jpg` — 16:9 — casa de hormigón y madera al anochecer, interiores en luz cálida, cielo azul — PROHIBIDO #000/#FFF puros, dorados brillantes
2. `model.jpg` — 1:1 — maqueta blanca sobre mesa oscura con foco lateral — PROHIBIDO #000/#FFF puros, dorados brillantes
3. `detail.jpg` — 4:5 — macro textura hormigón visto con juntas, luz rasante cálida — PROHIBIDO #000/#FFF puros, dorados brillantes
4. `gallery.jpg` — 16:9 — interior doble altura con escalera de madera, luz cenital, cinematográfico sereno. — PROHIBIDO #000/#FFF puros, dorados brillantes

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

### 1. hero.jpg — 16:9

```
photorealistic casa de hormigón y madera al anochecer, interiores en luz cálida, cielo azul, architecture studio, material honesty, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO #000/#FFF puros, dorados brillantes

### 2. model.jpg — 1:1

```
photorealistic maqueta blanca sobre mesa oscura con foco lateral, architecture studio, material honesty, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 1:1
```
Negative: PROHIBIDO #000/#FFF puros, dorados brillantes

### 3. detail.jpg — 4:5

```
photorealistic macro textura hormigón visto con juntas, luz rasante cálida, architecture studio, material honesty, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 4:5
```
Negative: PROHIBIDO #000/#FFF puros, dorados brillantes

### 4. gallery.jpg — 16:9

```
photorealistic interior doble altura con escalera de madera, luz cenital, cinematográfico sereno., architecture studio, material honesty, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO #000/#FFF puros, dorados brillantes


## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = 16:9 / 1:1 / 4:5 / 16:9, añadir `no branding, no watermark, no people, no hands, no faces`.
3. Descargar como `hero.jpg` etc. y reemplazar en `public/media/` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. `npm --prefix propuestas/arquitectura-b-oscuro run build` (tsc --noEmit && vite build) hasta verde.
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
