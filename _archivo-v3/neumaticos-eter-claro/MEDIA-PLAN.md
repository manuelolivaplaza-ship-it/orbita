# MEDIA-PLAN — neumaticos-eter-claro · NEUMA · neumaticos
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/neumaticos-eter-claro

## Identidad
- Marca: NEUMA — NEUMA ÉTER — Neumáticos · Propuesta Órbita
- Sector: neumaticos — Propuesta clara editorial para servitecas y venta de neumáticos en Chile: buscador por medida, precio instalado y agenda de montaje sin WhatsApp eterno.
- PROMPT fuente: `PROMPT-NEUMATICOS-ETER-CLARO.md` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: PALETA (regla dura, variables CSS en :root) --papel #F7F7F5 · --tinta #1A2328 (grafito-azulado industrial) · --gris #7A8
- Paleta completa: PALETA (regla dura, variables CSS en :root) --papel #F7F7F5 · --tinta #1A2328 (grafito-azulado industrial) · --gris #7A868F · --linea #E2E5E3 · ACENTO ÚNICO --goma #0F4C5C (azul goma profundo, <5% de la UI: CTA principal, estado activo, link).
- PROHIBIDO: PROHIBIDO: vulcanizador sonriendo con pulgar arriba, manos engrasadas posando, auto deportivo
- Media actual en public/media/: detail.jpg, pasillo.jpg, still.jpg, taller.jpg (4 archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de PROMPT-NEUMATICOS-ETER-CLARO.md — respetar nombre de archivo, ratio y VACÍO sin personas

1. `galpon.jpg` — 16:9 — galpón de serviteca luminoso y VACÍO, torres de llantas alineadas por medida, — PROHIBIDO: vulcanizador sonriendo con pulgar arriba, manos engrasadas posando, auto deportivo
2. `detalle.jpg` — 1:1 — macro de banda de rodadura nueva sobre papel kraft claro, luz rasante suave — PROHIBIDO: vulcanizador sonriendo con pulgar arriba, manos engrasadas posando, auto deportivo
3. `bodega.jpg` — 16:9 — pasillo de bodega claro ordenado, llantas rotuladas por código, simetría industrial — PROHIBIDO: vulcanizador sonriendo con pulgar arriba, manos engrasadas posando, auto deportivo
4. `kit.jpg` — 4:5 — bodegón de tuercas y manómetro alineados sobre superficie hueso, sombra suave. — PROHIBIDO: vulcanizador sonriendo con pulgar arriba, manos engrasadas posando, auto deportivo

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

### 1. galpon.jpg — 16:9

```
photorealistic galpón de serviteca luminoso y VACÍO, torres de llantas alineadas por medida,, empty tire service bay, industrial clean, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO: vulcanizador sonriendo con pulgar arriba, manos engrasadas posando, auto deportivo

### 2. detalle.jpg — 1:1

```
photorealistic macro de banda de rodadura nueva sobre papel kraft claro, luz rasante suave, empty tire service bay, industrial clean, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 1:1
```
Negative: PROHIBIDO: vulcanizador sonriendo con pulgar arriba, manos engrasadas posando, auto deportivo

### 3. bodega.jpg — 16:9

```
photorealistic pasillo de bodega claro ordenado, llantas rotuladas por código, simetría industrial, empty tire service bay, industrial clean, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO: vulcanizador sonriendo con pulgar arriba, manos engrasadas posando, auto deportivo

### 4. kit.jpg — 4:5

```
photorealistic bodegón de tuercas y manómetro alineados sobre superficie hueso, sombra suave., empty tire service bay, industrial clean, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 4:5
```
Negative: PROHIBIDO: vulcanizador sonriendo con pulgar arriba, manos engrasadas posando, auto deportivo


## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = 16:9 / 1:1 / 16:9 / 4:5, añadir `no branding, no watermark, no people, no hands, no faces`.
3. Descargar como `galpon.jpg` etc. y reemplazar en `public/media/` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. `npm --prefix propuestas/neumaticos-eter-claro run build` (tsc --noEmit && vite build) hasta verde.
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
