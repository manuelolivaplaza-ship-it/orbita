# MEDIA-PLAN — dentista-b-azul-cian · AZURA · dentista
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/dentista-b-azul-cian

## Identidad
- Marca: AZURA — AZURA — Centro Dental · Propuesta Órbita
- Sector: dentista — Propuesta clara con acento azul/cian para centro dental chileno: protocolo, puntualidad y convenios.
- PROMPT fuente: `PROMPT-DENTISTA-B-AZUL-CIAN.md` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: PALETA (regla dura, variables CSS en :root) --papel #F8FBFD · --tinta #132430 (azul-negro clínico) · --gris #6F8090 · --
- Paleta completa: PALETA (regla dura, variables CSS en :root) --papel #F8FBFD · --tinta #132430 (azul-negro clínico) · --gris #6F8090 · --linea #D8E2E9 · ACENTO ÚNICO --azul-clinico #0E7CB5 (<5% de la UI: CTA principal, kickers, estados activos, links; el resto neutro). border-radius: 0 en TODO. Cero sombras difusas: separación por filetes 1px var(--linea) y whitespace.
- PROHIBIDO: PROHIBIDO secciones negras/noche u overlays
- Media actual en public/media/: box.jpg, detalle.jpg, instrumental.jpg, recepcion.jpg (4 archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de PROMPT-DENTISTA-B-AZUL-CIAN.md — respetar nombre de archivo, ratio y VACÍO sin personas

1. `recepcion.jpg` — 16:9 — recepción luminosa VACÍA con mostrador blanco y pared azul pálido — PROHIBIDO secciones negras/noche u overlays
2. `box.jpg` — 16:9 — box dental con sillón vacío, luz natural y monitor de radiografía apagado — PROHIBIDO secciones negras/noche u overlays
3. `detalle.jpg` — 1:1 — macro de superficie vidrio esmerilado con reflejo azul suave — PROHIBIDO secciones negras/noche u overlays
4. `instrumental.jpg` — 4:5 — bodegón de instrumental esterilizado en pouches azules alineados sobre — PROHIBIDO secciones negras/noche u overlays

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

### 1. recepcion.jpg — 16:9

```
photorealistic recepción luminosa VACÍA con mostrador blanco y pared azul pálido, empty dental box, clinical calm, VACÍA, sin personas, paper bone #F9FBFC, ink #14212B, cold gray #6E7E88, cyan #0B76A8 / #35A7CE accent <5%, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO secciones negras/noche u overlays

### 2. box.jpg — 16:9

```
photorealistic box dental con sillón vacío, luz natural y monitor de radiografía apagado, empty dental box, clinical calm, VACÍA, sin personas, paper bone #F9FBFC, ink #14212B, cold gray #6E7E88, cyan #0B76A8 / #35A7CE accent <5%, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO secciones negras/noche u overlays

### 3. detalle.jpg — 1:1

```
photorealistic macro de superficie vidrio esmerilado con reflejo azul suave, empty dental box, clinical calm, VACÍA, sin personas, paper bone #F9FBFC, ink #14212B, cold gray #6E7E88, cyan #0B76A8 / #35A7CE accent <5%, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 1:1
```
Negative: PROHIBIDO secciones negras/noche u overlays

### 4. instrumental.jpg — 4:5

```
photorealistic bodegón de instrumental esterilizado en pouches azules alineados sobre, empty dental box, clinical calm, VACÍA, sin personas, paper bone #F9FBFC, ink #14212B, cold gray #6E7E88, cyan #0B76A8 / #35A7CE accent <5%, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 4:5
```
Negative: PROHIBIDO secciones negras/noche u overlays


## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = 16:9 / 16:9 / 1:1 / 4:5, añadir `no branding, no watermark, no people, no hands, no faces`.
3. Descargar como `recepcion.jpg` etc. y reemplazar en `public/media/` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. `npm --prefix propuestas/dentista-b-azul-cian run build` (tsc --noEmit && vite build) hasta verde.
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
