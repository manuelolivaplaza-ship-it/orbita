# MEDIA-PLAN — veterinaria-b-teal · LAGUNA VET · veterinaria
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/veterinaria-b-teal

## Identidad
- Marca: LAGUNA VET — LAGUNA VET — Centro Médico Veterinario · Propuesta Órbita
- Sector: veterinaria — Centro médico veterinario con paleta teal: fresco, profesional y fácil de recorrer.
- PROMPT fuente: `PROMPT-VETERINARIA-B-TEAL.md` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: PALETA (regla dura, variables CSS en :root) --papel #FBFDFC · --tinta #14332B · --gris #748B84 · --linea #D8E5E0 · ACENT
- Paleta completa: PALETA (regla dura, variables CSS en :root) --papel #FBFDFC · --tinta #14332B · --gris #748B84 · --linea #D8E5E0 · ACENTO ÚNICO --teal #1F8A7D (<5-8% de la UI: CTA principal, kickers, estados activos, links; el resto neutro). border-radius: 0 en TODO. Cero sombras difusas: separación por filetes 1px var(--linea) y whitespace.
- PROHIBIDO: PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos.
- Media actual en public/media/: consulta.jpg, detalle.jpg, farmacia.jpg, recepcion.jpg (4 archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de PROMPT-VETERINARIA-B-TEAL.md — respetar nombre de archivo, ratio y VACÍO sin personas

1. `recepcion.jpg` — 16:9 — recepción luminosa VACÍA con mostrador blanco y pared verde-agua pálido — PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos.
2. `consulta.jpg` — 16:9 — box de consulta ordenado: balanza veterinaria, mesa de examen, luz natural — PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos.
3. `detalle.jpg` — 1:1 — macro de superficie cerámica verde-agua con luz suave — PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos.
4. `farmacia.jpg` — 4:5 — bodegón de frascos y sobres veterinarios alineados sobre bandeja blanca. — PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos.

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

### 1. recepcion.jpg — 16:9

```
photorealistic recepción luminosa VACÍA con mostrador blanco y pared verde-agua pálido, empty veterinary consultation box, clinical calm, VACÍA, sin personas, paper #FAFDFB, ink #123832, teal #17907E accent <5%, line #D7E5DE, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos.

### 2. consulta.jpg — 16:9

```
photorealistic box de consulta ordenado: balanza veterinaria, mesa de examen, luz natural, empty veterinary consultation box, clinical calm, VACÍA, sin personas, paper #FAFDFB, ink #123832, teal #17907E accent <5%, line #D7E5DE, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos.

### 3. detalle.jpg — 1:1

```
photorealistic macro de superficie cerámica verde-agua con luz suave, empty veterinary consultation box, clinical calm, VACÍA, sin personas, paper #FAFDFB, ink #123832, teal #17907E accent <5%, line #D7E5DE, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 1:1
```
Negative: PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos.

### 4. farmacia.jpg — 4:5

```
photorealistic bodegón de frascos y sobres veterinarios alineados sobre bandeja blanca., empty veterinary consultation box, clinical calm, VACÍA, sin personas, paper #FAFDFB, ink #123832, teal #17907E accent <5%, line #D7E5DE, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 4:5
```
Negative: PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos.


## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = 16:9 / 16:9 / 1:1 / 4:5, añadir `no branding, no watermark, no people, no hands, no faces`.
3. Descargar como `recepcion.jpg` etc. y reemplazar en `public/media/` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. `npm --prefix propuestas/veterinaria-b-teal run build` (tsc --noEmit && vite build) hasta verde.
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
