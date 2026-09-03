# MEDIA-PLAN — bruma · Bruma · dental
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/bruma

## Identidad
- Marca: Bruma — Clínica dental familiar y odontopediatría
- Sector: dental — Clínica dental familiar y odontopediatría, con paleta teal fresca y cercana.
- PROMPT fuente: `PROMPT-SITIO-CLARO.md` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: PALETA (regla dura, como variables CSS en :root) --papel #F7F4EF · --tinta #17140F · --gris #8A8378 · --linea #D9D3C8 ·
- Paleta completa: PALETA (regla dura, como variables CSS en :root) --papel #F7F4EF · --tinta #17140F · --gris #8A8378 · --linea #D9D3C8 · ACENTO ÚNICO --bronce #9C6B3F (<5% de la UI). border-radius: 0 en TODO. Cero sombras difusas: separación por filetes 1px var(--linea) y whitespace.
- PROHIBIDO: PROHIBIDO: personas/caras/manos, antes/después fotográficos, testimonios con foto, badges de
- Media actual en public/media/: basin.jpg, bench.jpg, room.jpg, still.jpg (4 archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de PROMPT-SITIO-CLARO.md — respetar nombre de archivo, ratio y VACÍO sin personas

1. `room.jpg` — 16:9 — sala hueso/roble vacía luz norte — PROHIBIDO: personas/caras/manos, antes/después fotográficos, testimonios con foto, badges de
2. `still.jpg` — 4:5 — bodegón frasco ámbar sobre — PROHIBIDO: personas/caras/manos, antes/después fotográficos, testimonios con foto, badges de
3. `detail.jpg` — 1:1 — macro lino pálido — PROHIBIDO: personas/caras/manos, antes/después fotográficos, testimonios con foto, badges de
4. `tools.jpg` — 16:9 — instrumental esterilizado — PROHIBIDO: personas/caras/manos, antes/después fotográficos, testimonios con foto, badges de

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

### 1. room.jpg — 16:9

```
photorealistic sala hueso/roble vacía luz norte, empty dental clinic, clinical calm, VACÍA, sin personas, bone paper #F7F4EF, warm plaster #EFE9E0, ink #1E1C19, sage #7A9A84 accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO: personas/caras/manos, antes/después fotográficos, testimonios con foto, badges de

### 2. still.jpg — 4:5

```
photorealistic bodegón frasco ámbar sobre, empty dental clinic, clinical calm, VACÍA, sin personas, bone paper #F7F4EF, warm plaster #EFE9E0, ink #1E1C19, sage #7A9A84 accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 4:5
```
Negative: PROHIBIDO: personas/caras/manos, antes/después fotográficos, testimonios con foto, badges de

### 3. detail.jpg — 1:1

```
photorealistic macro lino pálido, empty dental clinic, clinical calm, VACÍA, sin personas, bone paper #F7F4EF, warm plaster #EFE9E0, ink #1E1C19, sage #7A9A84 accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 1:1
```
Negative: PROHIBIDO: personas/caras/manos, antes/después fotográficos, testimonios con foto, badges de

### 4. tools.jpg — 16:9

```
photorealistic instrumental esterilizado, empty dental clinic, clinical calm, VACÍA, sin personas, bone paper #F7F4EF, warm plaster #EFE9E0, ink #1E1C19, sage #7A9A84 accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO: personas/caras/manos, antes/después fotográficos, testimonios con foto, badges de


## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = 16:9 / 4:5 / 1:1 / 16:9, añadir `no branding, no watermark, no people, no hands, no faces`.
3. Descargar como `room.jpg` etc. y reemplazar en `public/media/` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. `npm --prefix propuestas/bruma run build` (tsc --noEmit && vite build) hasta verde.
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
