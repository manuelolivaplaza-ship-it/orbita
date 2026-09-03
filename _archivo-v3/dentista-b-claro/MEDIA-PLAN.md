# MEDIA-PLAN — dentista-b-claro · SERENA DENTAL · dentista
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/dentista-b-claro

## Identidad
- Marca: SERENA DENTAL — SERENA DENTAL — Clínica Odontológica · Propuesta Órbita
- Sector: dentista — Propuesta clara minimalista para clínica dental chilena: criterio clínico, precios transparentes.
- PROMPT fuente: `PROMPT-DENTISTA-B-CLARO-MINIMALISTA.md` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: PALETA (regla dura, variables CSS en :root) --papel #FBFBF9 · --tinta #1B2430 (azul-pizarra clínico) · --gris #7A8590 ·
- Paleta completa: PALETA (regla dura, variables CSS en :root) --papel #FBFBF9 · --tinta #1B2430 (azul-pizarra clínico) · --gris #7A8590 · --linea #E1E5E3 · ACENTO ÚNICO --azul-clinico #2C6E8F (<5% de la UI: CTA principal, estados activos, links).
- PROHIBIDO: PROHIBIDO secciones negras/noche u overlays
- Media actual en public/media/: box.jpg, detalle.jpg, instrumental.jpg, sala.jpg (4 archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de PROMPT-DENTISTA-B-CLARO-MINIMALISTA.md — respetar nombre de archivo, ratio y VACÍO sin personas

1. `sala.jpg` — 16:9 — sala de espera luminosa y VACÍA, sillones claros, luz norte, madera pálida — PROHIBIDO secciones negras/noche u overlays
2. `box.jpg` — 16:9 — box dental ordenado con sillón vacío e instrumental esterilizado sobre bandeja — PROHIBIDO secciones negras/noche u overlays
3. `detalle.jpg` — 1:1 — macro de superficie cerámica blanca con luz rasante suave — PROHIBIDO secciones negras/noche u overlays
4. `instrumental.jpg` — 4:5 — bodegón de espejos y sondas dentales alineados sobre tela blanca. — PROHIBIDO secciones negras/noche u overlays

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

### 1. sala.jpg — 16:9

```
photorealistic sala de espera luminosa y VACÍA, sillones claros, luz norte, madera pálida, empty dental box, clinical calm, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO secciones negras/noche u overlays

### 2. box.jpg — 16:9

```
photorealistic box dental ordenado con sillón vacío e instrumental esterilizado sobre bandeja, empty dental box, clinical calm, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO secciones negras/noche u overlays

### 3. detalle.jpg — 1:1

```
photorealistic macro de superficie cerámica blanca con luz rasante suave, empty dental box, clinical calm, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 1:1
```
Negative: PROHIBIDO secciones negras/noche u overlays

### 4. instrumental.jpg — 4:5

```
photorealistic bodegón de espejos y sondas dentales alineados sobre tela blanca., empty dental box, clinical calm, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 4:5
```
Negative: PROHIBIDO secciones negras/noche u overlays


## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = 16:9 / 16:9 / 1:1 / 4:5, añadir `no branding, no watermark, no people, no hands, no faces`.
3. Descargar como `sala.jpg` etc. y reemplazar en `public/media/` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. `npm --prefix propuestas/dentista-b-claro run build` (tsc --noEmit && vite build) hasta verde.
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
