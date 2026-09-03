# MEDIA-PLAN — veterinaria-b-claro · VITALIA · veterinaria
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/veterinaria-b-claro

## Identidad
- Marca: VITALIA — VITALIA — Clínica Veterinaria · Propuesta Órbita
- Sector: veterinaria — Clínica veterinaria clara y cercana: horas, especialidades y urgencias visibles.
- PROMPT fuente: `PROMPT-VETERINARIA-B-CLARO-MINIMALISTA.md` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: PALETA (regla dura, variables CSS en :root) --papel #FAFAF7 · --tinta #16211C (verde-negro clínico) · --gris #7C8781 · -
- Paleta completa: PALETA (regla dura, variables CSS en :root) --papel #FAFAF7 · --tinta #16211C (verde-negro clínico) · --gris #7C8781 · --linea #DFE3DE · ACENTO ÚNICO --verde-clinico #2E7D5B (<5% de la UI: CTA principal, estados activos, links).
- PROHIBIDO: PROHIBIDO secciones negras/noche u overlays
- Media actual en public/media/: detalle.jpg, farmacia.jpg, quirofano.jpg, sala.jpg (4 archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de PROMPT-VETERINARIA-B-CLARO-MINIMALISTA.md — respetar nombre de archivo, ratio y VACÍO sin personas

1. `sala.jpg` — 16:9 — sala de espera luminosa y VACÍA, luz norte, verde salvia y roble — PROHIBIDO secciones negras/noche u overlays
2. `quirofano.jpg` — 16:9 — instrumental quirúrgico esterilizado ordenado sobre paño azul quirúrgico — PROHIBIDO secciones negras/noche u overlays
3. `detalle.jpg` — 1:1 — macro de pelaje sano retroiluminado (sin animal reconocible) — PROHIBIDO secciones negras/noche u overlays
4. `farmacia.jpg` — 4:5 — bodegón de frascos y vacunas alineados sobre bandeja blanca. — PROHIBIDO secciones negras/noche u overlays

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

### 1. sala.jpg — 16:9

```
photorealistic sala de espera luminosa y VACÍA, luz norte, verde salvia y roble, empty veterinary consultation box, clinical calm, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO secciones negras/noche u overlays

### 2. quirofano.jpg — 16:9

```
photorealistic instrumental quirúrgico esterilizado ordenado sobre paño azul quirúrgico, empty veterinary consultation box, clinical calm, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO secciones negras/noche u overlays

### 3. detalle.jpg — 1:1

```
photorealistic macro de pelaje sano retroiluminado (sin animal reconocible), empty veterinary consultation box, clinical calm, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 1:1
```
Negative: PROHIBIDO secciones negras/noche u overlays

### 4. farmacia.jpg — 4:5

```
photorealistic bodegón de frascos y vacunas alineados sobre bandeja blanca., empty veterinary consultation box, clinical calm, VACÍA, sin personas, bone paper #F7F4EF, ink #17140F, bronze #9C6B3F accent <5%, line #D9D3C8, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 4:5
```
Negative: PROHIBIDO secciones negras/noche u overlays


## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = 16:9 / 16:9 / 1:1 / 4:5, añadir `no branding, no watermark, no people, no hands, no faces`.
3. Descargar como `sala.jpg` etc. y reemplazar en `public/media/` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. `npm --prefix propuestas/veterinaria-b-claro run build` (tsc --noEmit && vite build) hasta verde.
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
