# MEDIA-PLAN — noctua-oscuro · NOCTUA · eventos
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/noctua-oscuro

## Identidad
- Marca: NOCTUA — NOCTUA — Casa de Eventos Nocturna · Propuesta Órbita
- Sector: eventos — Propuesta oscura premium para centros de eventos: dirección de arte, técnica y un solo evento por noche.
- PROMPT fuente: `PROMPT-EVENTOS-ETER-CLARO.md` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: NOCTUA oscuro #121110 / champán #C8A96A
- Paleta completa: PALETA (regla dura, variables CSS en :root) --papel #FBF9F6 · --tinta #1A2320 (verde-negro profundo, NUNCA #000) · --gris #7F8782 · --linea #E6DDD2 · ACENTO ÚNICO --terracota #C0582A (<5% de la UI: CTA principal sólido, kickers, links activos, subrayados). PROHIBIDO #000/#FFF puros, neón, glow, gradientes decorativos. border-radius: 0 en TODO. Cero sombras difusas: separación por filetes 1px var(--linea) y whitespace generoso.
- PROHIBIDO: PROHIBIDO #000/#FFF puros, neón, glow, gradientes decorativos. border-radius: 0 en TODO.
- Media actual en public/media/: bodegon.jpg, corridor.jpg, hero.jpg, texture.jpg (4 archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de PROMPT-EVENTOS-ETER-CLARO.md — respetar nombre de archivo, ratio y VACÍO sin personas

1. `salon.jpg` — 16:9 — salón VACÍO luminoso, mesa larga roble clara vestida lino hueso, luz norte, parque al fondo desenfocado, sin personas — PROHIBIDO #000/#FFF puros, neón, glow, gradientes decorativos. border-radius: 0 en TODO.
2. `detalle.jpg` — 4:5 — bodegón mesa: platos hueso, cubiertos, copa agua, servilleta lino doblada, luz rasante cálida — PROHIBIDO #000/#FFF puros, neón, glow, gradientes decorativos. border-radius: 0 en TODO.
3. `parque.jpg` — 16:9 — parque/jardín crepuscular VACÍO, guirnalda de luces cálidas tenue, cinematográfico sereno — PROHIBIDO #000/#FFF puros, neón, glow, gradientes decorativos. border-radius: 0 en TODO.
4. `plano.jpg` — 1:1 — plano cenital esquemático del salón (líneas finas tinta sobre papel) estilo arquitectónico, no foto. — PROHIBIDO #000/#FFF puros, neón, glow, gradientes decorativos. border-radius: 0 en TODO.

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

### 1. salon.jpg — 16:9

```
photorealistic salón VACÍO luminoso, mesa larga roble clara vestida lino hueso, luz norte, parque al fondo desenfocado, sin personas, empty contemporary Chilean interior, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO #000/#FFF puros, neón, glow, gradientes decorativos. border-radius: 0 en TODO.

### 2. detalle.jpg — 4:5

```
photorealistic bodegón mesa: platos hueso, cubiertos, copa agua, servilleta lino doblada, luz rasante cálida, empty contemporary Chilean interior, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 4:5
```
Negative: PROHIBIDO #000/#FFF puros, neón, glow, gradientes decorativos. border-radius: 0 en TODO.

### 3. parque.jpg — 16:9

```
photorealistic parque/jardín crepuscular VACÍO, guirnalda de luces cálidas tenue, cinematográfico sereno, empty contemporary Chilean interior, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO #000/#FFF puros, neón, glow, gradientes decorativos. border-radius: 0 en TODO.

### 4. plano.jpg — 1:1

```
photorealistic plano cenital esquemático del salón (líneas finas tinta sobre papel) estilo arquitectónico, no foto., empty contemporary Chilean interior, VACÍA, sin personas, warm charcoal #121110, marfil #EDE8E0, champagne #C8A96A accent <5%, brass details, filete #2E2A26, warm hidden grazing light 2700K, chiaroscuro, soft shadows, dark editorial, premium dark editorial, quiet luxury, cinematic, medium format, f/8, film grain 0.04, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 1:1
```
Negative: PROHIBIDO #000/#FFF puros, neón, glow, gradientes decorativos. border-radius: 0 en TODO.


## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = 16:9 / 4:5 / 16:9 / 1:1, añadir `no branding, no watermark, no people, no hands, no faces`.
3. Descargar como `salon.jpg` etc. y reemplazar en `public/media/` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. `npm --prefix propuestas/noctua-oscuro run build` (tsc --noEmit && vite build) hasta verde.
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
