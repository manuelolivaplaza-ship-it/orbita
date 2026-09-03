# MEDIA-PLAN — marketing-b-azul-cian · PULSO · marketing
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/marketing-b-azul-cian

## Identidad
- Marca: PULSO — PULSO — Agencia de Marketing · Propuesta Órbita
- Sector: marketing — Propuesta de superficie media con acento azul/cian para agencias de marketing chilenas: respaldo corporativo y datos.
- PROMPT fuente: `PROMPT-MARKETING-B-AZUL-CIAN.md` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: PALETA (regla dura — la superficie media tiene capas, variables CSS en :root) --fondo #26303C (azul pizarra MEDIO, más c
- Paleta completa: PALETA (regla dura — la superficie media tiene capas, variables CSS en :root) --fondo #26303C (azul pizarra MEDIO, más claro que una noche) · --superficie #2E3947 · --superficie-alta #37434F · --filete #48545F · --hueso #E9EDF0 (texto, NUNCA #FFF) · --gris-calido #9FABB5 · ACENTO ÚNICO --cian #35A7CE (<5% de la UI: CTA sólido, kickers,
- PROHIBIDO: PROHIBIDO #000/#FFF puros, secciones blancas o negras puras,
- Media actual en public/media/: consola.jpg, detalle.jpg, estudio.jpg, hero.jpg (4 archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de PROMPT-MARKETING-B-AZUL-CIAN.md — respetar nombre de archivo, ratio y VACÍO sin personas

1. `hero.jpg` — 16:9 — oficina abierta en penumbra azulada VACÍA, ventanal con ciudad fuera de foco, — PROHIBIDO #000/#FFF puros, secciones blancas o negras puras,
2. `estudio.jpg` — 16:9 — estudio audiovisual vacío: ciclorama gris-azul, luces — PROHIBIDO #000/#FFF puros, secciones blancas o negras puras,
3. `detalle.jpg` — 1:1 — macro de vidrio esmerilado con reflejo cian suave — PROHIBIDO #000/#FFF puros, secciones blancas o negras puras,
4. `consola.jpg` — 4:5 — bodegón de audífonos profesionales y consola sobre superficie grafito con — PROHIBIDO #000/#FFF puros, secciones blancas o negras puras,

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

### 1. hero.jpg — 16:9

```
photorealistic oficina abierta en penumbra azulada VACÍA, ventanal con ciudad fuera de foco,, empty creative office, Chilean contemporary, VACÍA, sin personas, paper bone #F9FBFC, ink #14212B, cold gray #6E7E88, cyan #0B76A8 / #35A7CE accent <5%, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO #000/#FFF puros, secciones blancas o negras puras,

### 2. estudio.jpg — 16:9

```
photorealistic estudio audiovisual vacío: ciclorama gris-azul, luces, empty creative office, Chilean contemporary, VACÍA, sin personas, paper bone #F9FBFC, ink #14212B, cold gray #6E7E88, cyan #0B76A8 / #35A7CE accent <5%, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO #000/#FFF puros, secciones blancas o negras puras,

### 3. detalle.jpg — 1:1

```
photorealistic macro de vidrio esmerilado con reflejo cian suave, empty creative office, Chilean contemporary, VACÍA, sin personas, paper bone #F9FBFC, ink #14212B, cold gray #6E7E88, cyan #0B76A8 / #35A7CE accent <5%, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 1:1
```
Negative: PROHIBIDO #000/#FFF puros, secciones blancas o negras puras,

### 4. consola.jpg — 4:5

```
photorealistic bodegón de audífonos profesionales y consola sobre superficie grafito con, empty creative office, Chilean contemporary, VACÍA, sin personas, paper bone #F9FBFC, ink #14212B, cold gray #6E7E88, cyan #0B76A8 / #35A7CE accent <5%, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 4:5
```
Negative: PROHIBIDO #000/#FFF puros, secciones blancas o negras puras,


## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = 16:9 / 16:9 / 1:1 / 4:5, añadir `no branding, no watermark, no people, no hands, no faces`.
3. Descargar como `hero.jpg` etc. y reemplazar en `public/media/` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. `npm --prefix propuestas/marketing-b-azul-cian run build` (tsc --noEmit && vite build) hasta verde.
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
