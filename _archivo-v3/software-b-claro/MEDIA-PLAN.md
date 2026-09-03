# MEDIA-PLAN — software-b-claro · BALIZA · software
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/software-b-claro

## Identidad
- Marca: BALIZA — BALIZA — Software de Gestión · Propuesta Órbita
- Sector: software — Propuesta clara y neutra para fábrica de software chilena: ingeniería seria, precios transparentes.
- PROMPT fuente: `PROMPT-SOFTWARE-B-CLARO-MINIMALISTA.md` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: PALETA (regla dura, variables CSS en :root) --papel #FAFAF8 · --tinta #1A1D21 (grafito) · --gris #737B82 · --linea #E2E4
- Paleta completa: PALETA (regla dura, variables CSS en :root) --papel #FAFAF8 · --tinta #1A1D21 (grafito) · --gris #737B82 · --linea #E2E4E1 · ACENTO ÚNICO --azul-acero #2B5F8F (<5% de la UI: CTA principal, estados activos, links).
- PROHIBIDO: PROHIBIDO secciones negras/noche u overlays
- Media actual en public/media/: (vacío) (0 archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de PROMPT-SOFTWARE-B-CLARO-MINIMALISTA.md — respetar nombre de archivo, ratio y VACÍO sin personas

1. `oficina.jpg` — 16:9 — oficina de desarrollo luminosa y VACÍA, mesas de madera clara, luz norte, — PROHIBIDO secciones negras/noche u overlays
2. `teclado.jpg` — 1:1 — macro de teclas mecánicas con luz rasante suave — PROHIBIDO secciones negras/noche u overlays
3. `wireframe.jpg` — 4:5 — wireframes a lápiz sobre papel milimetrado con regla y lápiz encima — PROHIBIDO secciones negras/noche u overlays
4. `rack.jpg` — 16:9 — rack de servidores en sala limpia con LEDs tenues, tomado de lado. — PROHIBIDO secciones negras/noche u overlays

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

### 1. oficina.jpg — 16:9

```
photorealistic oficina de desarrollo luminosa y VACÍA, mesas de madera clara, luz norte,, empty software office, glass and oak, Chilean contemporary, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO secciones negras/noche u overlays

### 2. teclado.jpg — 1:1

```
photorealistic macro de teclas mecánicas con luz rasante suave, empty software office, glass and oak, Chilean contemporary, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 1:1
```
Negative: PROHIBIDO secciones negras/noche u overlays

### 3. wireframe.jpg — 4:5

```
photorealistic wireframes a lápiz sobre papel milimetrado con regla y lápiz encima, empty software office, glass and oak, Chilean contemporary, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 4:5
```
Negative: PROHIBIDO secciones negras/noche u overlays

### 4. rack.jpg — 16:9

```
photorealistic rack de servidores en sala limpia con LEDs tenues, tomado de lado., empty software office, glass and oak, Chilean contemporary, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO secciones negras/noche u overlays


## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = 16:9 / 1:1 / 4:5 / 16:9, añadir `no branding, no watermark, no people, no hands, no faces`.
3. Descargar como `oficina.jpg` etc. y reemplazar en `public/media/` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. `npm --prefix propuestas/software-b-claro run build` (tsc --noEmit && vite build) hasta verde.
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
