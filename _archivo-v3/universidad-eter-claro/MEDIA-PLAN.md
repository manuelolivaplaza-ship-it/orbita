# MEDIA-PLAN — universidad-eter-claro · ÉTER · universidad
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/universidad-eter-claro

## Identidad
- Marca: ÉTER — ÉTER — Universidad Privada · Propuesta Órbita
- Sector: universidad — Propuesta clara luminosa para universidades privadas chilenas: orden académico, prueba social y admisión sin fricción.
- PROMPT fuente: `PROMPT-UNIVERSIDAD-ETER-CLARO.md` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: PALETA (regla dura, variables CSS en :root) --papel #F8F6F0 (hueso cálido, fondo SIEMPRE) · --superficie #FFFFFF · --tin
- Paleta completa: PALETA (regla dura, variables CSS en :root) --papel #F8F6F0 (hueso cálido, fondo SIEMPRE) · --superficie #FFFFFF · --tinta #121B2A (azul-noche, texto principal) · --gris #6B7280 · --gris-suave #9AA3B2 · --linea #E2DDD4 · --linea-fuerte #D6CFBF · ACENTO ÚNICO --acento #14365F (azul institucional profundo, <5% de la UI: CTA sólido, kickers, links activos, filete activo, subrayados).
- PROHIBIDO: PROHIBIDO #000/#FFF puros en fondos/textos de sección (usa var(--papel) y var(--tinta)).
- Media actual en public/media/: biblioteca.jpg, detalle.jpg, hero.jpg, laboratorio.jpg (4 archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de PROMPT-UNIVERSIDAD-ETER-CLARO.md — respetar nombre de archivo, ratio y VACÍO sin personas

1. `hero.jpg` — 16:9 — patio interior de campus universitario VACÍO al mediodía, hormigón claro + madera, bancas vacías, luz norte difusa, sin personas, orden obsesivo — PROHIBIDO #000/#FFF puros en fondos/textos de sección (usa var(--papel) y var(--tinta)).
2. `biblioteca.jpg` — 4:5 — sala de biblioteca luminosa con estanterías y mesas vacías, luz natural lateral, documental sereno, sin ocupantes — PROHIBIDO #000/#FFF puros en fondos/textos de sección (usa var(--papel) y var(--tinta)).
3. `detalle.jpg` — 1:1 — macro de papel con sello seco y tipografía en relieve sobre hueso, luz rasante cálida, tipográfico — PROHIBIDO #000/#FFF puros en fondos/textos de sección (usa var(--papel) y var(--tinta)).
4. `laboratorio.jpg` — 16:9 — laboratorio / taller universitario ordenado, mesas limpias, instrumentos alineados, sin ocupantes, luz clínica suave. — PROHIBIDO #000/#FFF puros en fondos/textos de sección (usa var(--papel) y var(--tinta)).

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

### 1. hero.jpg — 16:9

```
photorealistic patio interior de campus universitario VACÍO al mediodía, hormigón claro + madera, bancas vacías, luz norte difusa, sin personas, orden obsesivo, empty campus interior, Chilean academic, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO #000/#FFF puros en fondos/textos de sección (usa var(--papel) y var(--tinta)).

### 2. biblioteca.jpg — 4:5

```
photorealistic sala de biblioteca luminosa con estanterías y mesas vacías, luz natural lateral, documental sereno, sin ocupantes, empty campus interior, Chilean academic, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 4:5
```
Negative: PROHIBIDO #000/#FFF puros en fondos/textos de sección (usa var(--papel) y var(--tinta)).

### 3. detalle.jpg — 1:1

```
photorealistic macro de papel con sello seco y tipografía en relieve sobre hueso, luz rasante cálida, tipográfico, empty campus interior, Chilean academic, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 1:1
```
Negative: PROHIBIDO #000/#FFF puros en fondos/textos de sección (usa var(--papel) y var(--tinta)).

### 4. laboratorio.jpg — 16:9

```
photorealistic laboratorio / taller universitario ordenado, mesas limpias, instrumentos alineados, sin ocupantes, luz clínica suave., empty campus interior, Chilean academic, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO #000/#FFF puros en fondos/textos de sección (usa var(--papel) y var(--tinta)).


## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = 16:9 / 4:5 / 1:1 / 16:9, añadir `no branding, no watermark, no people, no hands, no faces`.
3. Descargar como `hero.jpg` etc. y reemplazar en `public/media/` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. `npm --prefix propuestas/universidad-eter-claro run build` (tsc --noEmit && vite build) hasta verde.
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
