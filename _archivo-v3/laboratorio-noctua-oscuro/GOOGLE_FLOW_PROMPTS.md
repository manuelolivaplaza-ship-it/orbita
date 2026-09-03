# LABORATORIO — Google Flow / muse-spark-1.2 — Prompt Pack Visual Pro (sin branding)

> Estado actual 2026-08-28: Gateway FAL `fal-ai/flux-2/klein/9b` rechazado HTTP 402 (no habilitado en proxy Nous). 
> Workaround aplicado: optimización visual pro de las 8 imágenes existentes (PIL grade 1.04 contrast / 0.97 saturación / unsharp 1.2/80, progressive JPEG + WebP, <picture> con webp, decoding async). 
> Cuando FAL se habilite, regenerar con los prompts de abajo via `image_generate` o Google Flow (muse-spark-1.2).

## LABORATORIO-ETER-CLARO (CRISTALAB — #FAFBFC / #0E7490)

### hero.jpg — 16:9 — 1920×1080 — ETER hero
Prompt Google Flow / Flux:
`Empty modern clinical laboratory bench, stainless steel test tube rack with twelve empty clear glass vacuum tubes white caps perfectly aligned on silver medical tray, cold north daylight soft diffuse, pure white blurred background, ultra minimal clinical precision, medium format, f4, no people, no text, no hands, no logos, no blood, serene high key, editorial still life, shot on Phase One, color grade cold teal #0E7490 subtle`

Landing: `public/media/hero.jpg` + `hero.webp` | alt: "Mesada de laboratorio vacía con tubos alineados..."

### tubos.jpg — 4:5 — 1080×1350 — ETER bodegón macro
Prompt:
`Macro editorial still life of three empty clear glass laboratory vacuum tubes with blank matte white labels standing upright on pure white surface, soft raking cold daylight, crisp shadows, minimal 4:5 vertical composition, high detail, no people, no text, no logos, photorealistic, studio lighting, Phase One 80mm, f8`

### recepcion.jpg — 16:9 — 1920×1080 — ETER recepción
Prompt:
`Empty minimal medical clinic reception waiting room, row of eight light grey modern chairs perfectly aligned against pure white wall, white reception counter far end with soft natural daylight from tall window, pale grey porcelain floor, ultra clean Scandinavian clinic interior, no people, no signs, no logos, bright airy architectural photograph, 16:9, high key, f5.6`

### texture.jpg — 1:1 — 1024×1024 — ETER papel
Prompt:
`Extreme macro of premium white paper texture with fine grid and thin black 1px lines, shallow depth of field, soft raking light revealing paper fibers, minimal editorial background 1:1 square, no text readable, no people, clean still life, 100mm macro`

## LABORATORIO-NOCTUA-OSCURO (ORIA — #0F1419 / #7BC4D6)

### hero.jpg — 16:9 — 1920×1080 — NOCTUA hero crepuscular
Prompt:
`Empty premium private medical examination room at night, dark charcoal walls #0F1419, single warm pinpoint spotlight 3000K over pale grey examination bed centered, stainless steel trolley with glassware to side, cinematic chiaroscuro, moody dramatic low-key lighting, no people, no text, editorial architecture, 16:9, shot on ARRI, film grain subtle`

### tubos-dark.jpg — 4:5 — 1080×1350 — NOCTUA chiaroscuro
Prompt:
`Six vacuum blood tubes with dark red blood diagonally arranged on circular brushed stainless steel surface, dramatic spotlight chiaroscuro, dark background #0F1419, reflections, premium clinical cinematic still life 4:5 vertical, shallow depth f2.8, no hands, no people, no text, high detail, color grade cold cian #7BC4D6 subtle`

### lab-noche.jpg — 16:9 — 1920×1080 — NOCTUA mesada noche
Prompt:
`Dark laboratory bench at night, white modern binocular microscope on pale surface with brown leather notebook closed, soft cool blue side light 4500K, blurred dark background with Erlenmeyer flasks, cinematic low key, editorial minimal, no people, no hands, serene premium lab, 16:9, ARRI, f4`

### texture.jpg — 1:1 — 1024×1024 — NOCTUA acero
Prompt:
`Macro of dark brushed stainless steel texture diagonal brush lines 1:1 square, subtle spotlight gradient from dark #18202A to silver, industrial premium material detail, shallow depth, no people, abstract editorial background, 100mm macro, anisotropic highlights`

---
## Notas técnicas entrega visual pro (aplicadas 2026-08-28)

- Todas las JPG re-codificadas: PIL LANCZOS, UnsharpMask radius 1.2/80, Contrast 1.04, Saturación 0.97/0.92, progressive + optimize, subsampling 0 (4:4:4), calidad 88.
- WebP generados método 4 calidad 82 al lado de cada JPG (<picture><source webp><img jpg>).
- App.tsx: <picture> con <source type="image/webp">, decoding="async", fetchPriority="high" para hero eager, width/height explícitos para CLS 0.
- CSS: img { image-rendering: -webkit-optimize-contrast } + filter saturate/contrast sutil por tema.
- Tamaños: ETER 420KB total (antes 3.2MB, -87%), NOCTUA 800KB total (antes 3.7MB, -78%). Builds: ambos OK verificar con `npm run propuestas:build`.
- Próximo paso cuando FAL vuelva: `image_generate` con prompts arriba, aspect_ratio landscape/portrait/square, seeds fijos, luego repetir optimización PIL.

Comando verificación:
  npm run propuesta -- laboratorio-eter-claro
  npm run propuesta -- laboratorio-noctua-oscuro
  npm run propuestas:build -- laboratorio-eter-claro
  npm run propuestas:build -- laboratorio-noctua-oscuro
