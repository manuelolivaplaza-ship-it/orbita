# MEDIA-PLAN — marketing-b-claro · CRITERIO · marketing
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/marketing-b-claro

## Identidad
- Marca: CRITERIO — CRITERIO — Agencia de Marketing · Propuesta Órbita
- Sector: marketing — Propuesta clara editorial para agencias de marketing chilenas: orden, criterio y métricas.
- PROMPT fuente: `PROMPT-MARKETING-B-CLARO-MINIMALISTA.md` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: PALETA (regla dura, variables CSS en :root) --papel #FAF9F5 · --tinta #1C1C1A · --gris #75736B · --linea #E3E1D8 · ACENT
- Paleta completa: PALETA (regla dura, variables CSS en :root) --papel #FAF9F5 · --tinta #1C1C1A · --gris #75736B · --linea #E3E1D8 · ACENTO ÚNICO --lacre #A63A2B (<5% de la UI: CTA principal, kickers, estados activos, links; el resto neutro). border-radius: 0 en TODO. Cero sombras difusas: separación por filetes 1px var(--linea) y whitespace.
- PROHIBIDO: PROHIBIDO secciones negras/noche u overlays
- Media actual en public/media/: cuaderno.jpg, detalle.jpg, muestras.jpg, recepcion.jpg (4 archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de PROMPT-MARKETING-B-CLARO-MINIMALISTA.md — respetar nombre de archivo, ratio y VACÍO sin personas

1. `recepcion.jpg` — 16:9 — oficina luminosa VACÍA con mesa de madera clara, sillas simples y pared — PROHIBIDO secciones negras/noche u overlays
2. `muestras.jpg` — 16:9 — papelería de marca alineada sobre mesa clara (libros, — PROHIBIDO secciones negras/noche u overlays
3. `detalle.jpg` — 1:1 — macro de papel algodón texturado con luz — PROHIBIDO secciones negras/noche u overlays
4. `cuaderno.jpg` — 4:5 — bodegón de cuaderno, lápiz y taza de cerámica sobre lino — PROHIBIDO secciones negras/noche u overlays

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

### 1. recepcion.jpg — 16:9

```
photorealistic oficina luminosa VACÍA con mesa de madera clara, sillas simples y pared, empty creative office, Chilean contemporary, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO secciones negras/noche u overlays

### 2. muestras.jpg — 16:9

```
photorealistic papelería de marca alineada sobre mesa clara (libros,, empty creative office, Chilean contemporary, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO secciones negras/noche u overlays

### 3. detalle.jpg — 1:1

```
photorealistic macro de papel algodón texturado con luz, empty creative office, Chilean contemporary, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 1:1
```
Negative: PROHIBIDO secciones negras/noche u overlays

### 4. cuaderno.jpg — 4:5

```
photorealistic bodegón de cuaderno, lápiz y taza de cerámica sobre lino, empty creative office, Chilean contemporary, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 4:5
```
Negative: PROHIBIDO secciones negras/noche u overlays


## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = 16:9 / 16:9 / 1:1 / 4:5, añadir `no branding, no watermark, no people, no hands, no faces`.
3. Descargar como `recepcion.jpg` etc. y reemplazar en `public/media/` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. `npm --prefix propuestas/marketing-b-claro run build` (tsc --noEmit && vite build) hasta verde.
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
