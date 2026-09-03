# MEDIA-PLAN — arquitectura-claro · Estudio Meridiano · arquitectura
> Generado con muse-spark-1.2-contributor (opencode-go) — prompts listos para Google Flow / FAL flux pro
> Fecha: 2026-08-28 · Workspace: propuestas/arquitectura-claro

## Identidad
- Marca: Estudio Meridiano — Estudio Meridiano — Arquitectura con método, obra con calma
- Sector: arquitectura — Obra nueva, remodelaciones y dirección de obra: proyectos medidos, presupuesto acotado y reporte constante, sobre base clara.
- PROMPT fuente: `PROMPT-ARQUITECTURA-B-CLARO-MINIMALISTA.md` (sección PASO 0 — MEDIA + paleta ÉTER/NOCTUA + PROHIBIDO)
- Paleta: PALETA (regla dura, como variables CSS en :root) --papel #F5F2EC (hueso cálido) · --tinta #191713 · --gris #8B857A · --l
- Paleta completa: PALETA (regla dura, como variables CSS en :root) --papel #F5F2EC (hueso cálido) · --tinta #191713 · --gris #8B857A · --linea #DCD6CA · ACENTO ÚNICO --roble #9A7B4F (<5% de la UI). border-radius: 0 en TODO. Cero sombras difusas: separación por filetes 1px var(--linea) y whitespace.
- PROHIBIDO: PROHIBIDO: personas/caras/manos, fotos stock de rascacielos genéricos, planos como textura
- Media actual en public/media/: esquina.png, mesa.png, muro.png, sala.png (4 archivo(s) jpg/png)
- Build: dist/index.html ✓

## PASO 0 — Media requerida (máx 4 imágenes por web; si falta, tipografía lleva el layout)
> Copiado de PROMPT-ARQUITECTURA-B-CLARO-MINIMALISTA.md — respetar nombre de archivo, ratio y VACÍO sin personas

1. `hero.jpg` — 16:9 — casa de madera y hormigón visto al atardecer, ventanas encendidas, SIN personas — PROHIBIDO: personas/caras/manos, fotos stock de rascacielos genéricos, planos como textura
2. `model.jpg` — 1:1 — maqueta de estudio sobre mesa de trabajo con planos y escalímetro — PROHIBIDO: personas/caras/manos, fotos stock de rascacielos genéricos, planos como textura
3. `detail.jpg` — 4:5 — detalle textura revestimiento madera + piedra, luz rasante — PROHIBIDO: personas/caras/manos, fotos stock de rascacielos genéricos, planos como textura
4. `site.jpg` — 16:9 — terreno/ladera con obra en estructura, cielo sobrio, documental limpio. — PROHIBIDO: personas/caras/manos, fotos stock de rascacielos genéricos, planos como textura

## Google Flow / FAL — prompts listos para batch fotográfico
> Modelo: muse-spark-1.2 (opencode-go) · también Fal flux pro · editorial fotográfico, luz precisa, sin texto/logo/marca de agua, sin personas, Chile contemporáneo

### 1. hero.jpg — 16:9

```
photorealistic casa de madera y hormigón visto al atardecer, ventanas encendidas, SIN personas, architecture studio, material honesty, VACÍA, sin personas, bone paper #F5F2EC, ink #191713, roble #9A7B4F accent <5%, line #DCD6CA, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO: personas/caras/manos, fotos stock de rascacielos genéricos, planos como textura

### 2. model.jpg — 1:1

```
photorealistic maqueta de estudio sobre mesa de trabajo con planos y escalímetro, architecture studio, material honesty, VACÍA, sin personas, bone paper #F5F2EC, ink #191713, roble #9A7B4F accent <5%, line #DCD6CA, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 1:1
```
Negative: PROHIBIDO: personas/caras/manos, fotos stock de rascacielos genéricos, planos como textura

### 3. detail.jpg — 4:5

```
photorealistic detalle textura revestimiento madera + piedra, luz rasante, architecture studio, material honesty, VACÍA, sin personas, bone paper #F5F2EC, ink #191713, roble #9A7B4F accent <5%, line #DCD6CA, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 4:5
```
Negative: PROHIBIDO: personas/caras/manos, fotos stock de rascacielos genéricos, planos como textura

### 4. site.jpg — 16:9

```
photorealistic terreno/ladera con obra en estructura, cielo sobrio, documental limpio., architecture studio, material honesty, VACÍA, sin personas, bone paper #F5F2EC, ink #191713, roble #9A7B4F accent <5%, line #DCD6CA, north daylight through large window, soft morning light 10am, gentle shadows, serene, editorial interior photography, Scandinavian minimal, medium format, f/8, calm and silent, Chile contemporary, no text, no logo, no watermark, no people, no hands, no faces, --ar 16:9
```
Negative: PROHIBIDO: personas/caras/manos, fotos stock de rascacielos genéricos, planos como textura


## Cómo generar el batch final
1. Abrir https://labs.google/flow (o FAL dashboard si FAL_KEY configurado).
2. Pegar prompts uno por uno, aspectRatio = 16:9 / 1:1 / 4:5 / 16:9, añadir `no branding, no watermark, no people, no hands, no faces`.
3. Descargar como `hero.jpg` etc. y reemplazar en `public/media/` (mantener SVG como fallback si existe, o guardar como jpg/png).
4. `npm --prefix propuestas/arquitectura-claro run build` (tsc --noEmit && vite build) hasta verde.
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
