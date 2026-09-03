# VISUAL PRO — SALUD MENTAL 16 A+B Maps · Google Flow + muse-spark-1.2 · sin branding

> ÉTER (claro papel #F7F4EF / sage #7A9A84) × 8 + NOCTUA (oscuro #121110 / champán #C8A96A) × 8 = 16 imágenes editoriales
> Sin personas, sin cerebros/puzzles, sin manos dramáticas, sin stock cliché. Solo espacios vacíos, bodegones y texturas.

## Estado actual (visual pro SVG editorial)
Generadas 16 SVGs premium con filtros, grain y sombras suaves (listas para producción). Sirven como visual pro sin branding y como placeholder hasta el batch fotográfico final en Google Flow / FAL.

- **ÉTER**: `propuestas/salud-mental-eter-claro/public/media/` → `room.svg`, `room-b.svg`, `still.svg`, `still-b.svg`, `window.svg`, `window-b.svg`, `detail.svg`, `detail-b.svg` (+ copias .jpg para legacy)
- **NOCTUA**: `propuestas/salud-mental-noctua-oscuro/public/media/` → `hero.svg`, `hero-b.svg`, `object.svg`, `object-b.svg`, `texture.svg`, `texture-b.svg`, `corridor.svg`, `corridor-b.svg`

Builds verified: `tsc --noEmit && vite build` OK en ambas (ÉTER 225kB / NOCTUA 221kB).

## Qué se mejoró vs. versión anterior
- Reemplazados PNG genéricos (room.jpg 734K etc.) por sistema editorial SVG con paleta dura, filetes 1px, radios 0.
- Añadida **serie B** (segunda lectura del mismo lenguaje) para llegar a 16 A+B.
- Integrado **Maps estilizado sin branding** en ambas: ÉTER con mapa doble-pin Providencia/Las Condes, NOCTUA con mapa nocturno Las Condes.
- Referencias en `App.tsx` migradas a `.svg` (alt descriptivos, visual pro, sin personas).
- Galería B visible en ambas propuestas + banda “16 A+B · Google Flow · sin branding”.

## Google Flow — prompts listos para batch fotográfico (copiar/pegar)
> Modelo: muse-spark-1.2 (o Fal flux pro) · aspect según archivo · estilo: editorial fotográfico, luz natural precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo.

### ÉTER — 8 prompts (luz norte, editorial claro)

1. **room.svg — 16:9** `SALA ÉTER LUZ NORTE`
```
photorealistic empty therapy room, north daylight through large window with thin white mullions, linen armchair in warm off-white, light oak side table, sheer curtains, pale plaster walls, small eucalyptus stem in ceramic vase, soft morning light 10am, Scandinavian minimal, editorial interior photography, medium format, f/8, calm and silent, no people, no text, no logo --ar 16:9
```
Negative: people, hands, brain, puzzle, dramatic shadows, neon, gold, clutter

2. **room-b.svg — 16:9** `SALA ÉTER B DIÁLOGO`
```
same therapy room, two linen armchairs facing each other, low oak coffee table between, north light, white walls, quiet, second angle, editorial --ar 16:9
```

3. **still.svg — 4:5** `STILL CLÍNICO`
```
still life on bone paper: open clinical notebook, graphite pencil, ceramic mug, small eucalyptus sprig, natural window light, soft shadows, editorial flat lay, no people --ar 4:5
```

4. **still-b.svg — 4:5** `STILL B`
```
eucalyptus branch centered on bone paper, minimal, negative space, sage green accents, editorial macro --ar 4:5
```

5. **window.svg — 16:9** `PASILLO LUMINOSO`
```
empty luminous corridor, white walls, natural light from side, soft shadows, serene, minimal, no people, no signage --ar 16:9
```

6. **window-b.svg — 4:5** `VENTANA ALTA`
```
tall window with white frame, north light, windowsill with small potted plant, light oak floor, editorial --ar 4:5
```

7. **detail.svg — 1:1** `DETAIL LINO`
```
macro of pale linen textile and cotton paper with grazing light, texture detail, soft, shallow depth of field --ar 1:1
```

8. **detail-b.svg — 1:1** `DETAIL PAPER`
```
cotton paper grain, subtle emboss, soft shadow, minimal, editorial detail --ar 1:1
```

### NOCTUA — 8 prompts (noche cálida 2700K, premium oscuro)

1. **hero.svg — 16:9** `SALA NOCTUA`
```
cinematic empty therapy room at night, charcoal matte walls, ivory armchair, dark wood side table, warm hidden grazing light 2700K from out-of-frame lamp, moody but serene, dark editorial, no people --ar 16:9
```

2. **hero-b.svg — 16:9** `SALA NOCTUA B`
```
same nocturnal room, two ivory armchairs facing, dark oak table, warm penumbra, second angle --ar 16:9
```

3. **object.svg — 4:5** `OBJECT CHIAROSCURO`
```
chiaroscuro still life on dark stone: dark notebook, graphite pencil, amber glass jar, single warm spotlight 2700K, rich shadows, no people --ar 4:5
```

4. **object-b.svg — 4:5** `OBJECT B`
```
dark stone plinth with geometric volumes, warm light, minimal, premium --ar 4:5
```

5. **texture.svg — 1:1** `TEXTURE SEDA CARBÓN`
```
macro of charcoal silk fabric, warm grazing light revealing weave, rich texture, dark editorial --ar 1:1
```

6. **texture-b.svg — 1:1** `TEXTURE CONCÉNTRICO`
```
concentric circles on dark background, film grain, subtle, premium --ar 1:1
```

7. **corridor.svg — 16:9** `CORRIDOR NOCTURNO`
```
symmetric empty corridor at night, charcoal walls, warm recessed spots 2700K, faint framed artwork, serene, not spooky, no people --ar 16:9
```

8. **corridor-b.svg — 4:5** `CORRIDOR B`
```
tall corridor doors, symmetry, penumbra, warm light, dark editorial --ar 4:5
```

### Maps (sin Google branding)
- ÉTER: mapa estilizado Providencia (A · Los Leones) + Las Condes (B · Manquehue), línea sage conectando, filete 1px, tipografía JetBrains Mono.
- NOCTUA: mapa nocturno Las Condes, fondo #1B1917, pin champán, filete #2E2A26.
- Para producción con Google Maps: usar Styled Maps (desaturado, sin labels, sin logo) o Mapbox Studio con paleta dura; exportar 1200×750 PNG.

## Cómo generar el batch final en Google Flow
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts de arriba uno por uno, aspectRatio = width/height indicado, `no branding, no watermark, no people`.
3. Descargar como `*.jpg` y reemplazar en `public/media/*.svg` (mantener SVG como fallback) o guardar como `*.jpg` sobreescribiendo los .jpg actuales (actuales son SVG copies, reemplazables).
4. `npm --prefix propuestas/salud-mental-eter-claro run build` y `.../noctua-oscuro run build` hasta verde.

## Archivos tocados
- `gen-salud-visual-pro.mjs` (generador 16 SVGs)
- `propuestas/salud-mental-eter-claro/public/media/*.{svg,jpg}` (8+8)
- `propuestas/salud-mental-noctua-oscuro/public/media/*.{svg,jpg}` (8+8)
- `propuestas/salud-mental-eter-claro/src/App.tsx` (hero/equipo a .svg, galería B, Maps)
- `propuestas/salud-mental-noctua-oscuro/src/App.tsx` (hero/galería a .svg, Map nocturno)

## Validación
- [x] 16 imágenes A+B generadas (8 ÉTER + 8 NOCTUA)
- [x] App.tsx referencia .svg visual pro, alt sin personas
- [x] Maps estilizado sin branding en ambas
- [x] `tsc --noEmit && vite build` OK en ambas
- [ ] Batch fotográfico Google Flow final (pendiente FAL_KEY / Nous image generation) — prompts listos arriba, SVGs sirven como entrega visual pro inmediata
