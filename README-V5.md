# Órbita v5 — Pipeline de webs por proyecto (2026-08-30)

Sistema multi-bot: cada web vive en SU carpeta con todo adentro (diseño, prompts de media,
prompts de build, media y sitio). Nada de prompts sueltos.

## El flujo (máquina de estados)

```
pendiente_arquitecto → en_arquitecto → pendiente_visual → visual_en_curso
→ pendiente_media → media_en_bandeja → en_build → done (| qa_fallo | bloqueado)
```

| Fase | Quién | Qué hace | Límite |
|---|---|---|---|
| 1. Diseño | `orbita-v5-arquitecto-1..5` | Crea `propuestas/<slug>/` con BLUEPRINT.md, MEDIA-PLAN.md (tabla cerrada), BUILD-01.md, BUILD-02.md + `_media-ingesta/<slug>/plan.json` → `pendiente_visual` | 5 en paralelo (llenado 2/tick) |
| 2. Prompts de media | `orbita-v5-director-visual` | Completa MEDIA-PLAN.md con los prompts finales de Flow (hero 2 variantes A/B, orden de generación) → `pendiente_media` | 1 |
| 3. Media | **PAUSADO 2026-08-31**: un bot generará las imágenes/videos en Google Flow después. Cuando ese bot exista, o genera y copia directo a `public/media/`, o se reactiva el cron `ingesta-media-flow-orbita` (job `74b0f396a9d8`, pausado NO borrado) para que el ingester valide y renombre | — |
| 4. Build | `orbita-v5-builder` | Delega a opencode (`opencode run` con BUILD-01 → BUILD-02), build 0 errores + QA anti-clon → `done` | 2 en paralelo |

Motor: `orquestador-v5.py` (cron 5m, no_agent, silencioso salvo transiciones).
Cola: `COLA-V2.json` v5.0 — 66 webs (tabla canónica de Manu: 58 producción + 8 demos),
regenerable SOLO con `hermes/scripts/build-cola-v5.py`.

## Specs de los bots (editar aquí, no en los SOUL)

- `PROMPT-BOT-ARQUITECTO-SITIOS-v5.md` — el arquitecto (este archivo es su ley)
- `PROMPT-BOT-DIRECTOR-VISUAL-v5.md` — el director visual
- `PROMPT-BOT-BUILDER-v5.md` — el builder (delegación opencode)

Los SOUL.md de los perfiles apuntan a estas specs. Perfiles:
`C:\Users\manue\AppData\Local\hermes\profiles\orbita-v5-*\`

## Carpetas

```
órbita/
  COLA-V2.json                    ← cola v5.0 (66 webs, estados)
  PROMPT-BOT-*-v5.md              ← specs de los 3 roles
  propuestas/
    _plantilla/                   ← base React19+Vite6+CSS puro (virgen)
    <slug>/                       ← UNA carpeta por web (todo adentro)
      BLUEPRINT.md  MEDIA-PLAN.md  BUILD-01.md  BUILD-02.md
      DIRECCION_DE_ARTE.md  src/  public/media/
  _media-ingesta/<slug>/          ← bandeja de Flow (plan.json + archivos sueltos)
  _archivo-v4-prompts/            ← los 54 prompts v4 archivados (referencia)
  _archivo-v3/                    ← webs v3 archivadas (NO forkear)
```

## Reglas duras (resumen)

- Ratios de media SOLO: 16:9 · 4:3 · 1:1 · 3:4 · 9:16 (Flow no soporta otros).
- Benchmark REAL del rubro obligatorio antes de diseñar (GRUPOS-VISUALES-<rubro>.md).
- AISLAMIENTO: cada bot solo lee su carpeta + _plantilla. CSS de otras propuestas prohibido.
- El builder NO redacta: textos literales del BLUEPRINT. El builder NO genera imágenes.
- QA anti-clon obligatorio antes de `done`. Si falla → rehacer secciones.
- Nada se publica ni envía a leads: todo espera el OK de Manu.
- Fallo 2–3x → bloquear tarea con error exacto + aviso Telegram. PROHIBIDO cambiar de
  modelo por cuenta propia (ox-alpha único autorizado).
- PC 8GB: límites del orquestador (3 arquitectos LLM ligero, 2 builds, 1 director).

## Seguimiento (se actualiza SOLO en cada tick del motor)

- `órbita/SEGUIMIENTO-WEBS.xlsx` — Excel con las 66 webs coloreadas por estado + hoja "Tiempos por etapa".
- `órbita/SEGUIMIENTO-WEBS.csv` — mismo dato, respaldo plano.
- `órbita/TIEMPOS-WEBS.csv` — duración real por etapa (arquitecto, director visual, build), medida por el motor (no autodeclarada).

## Semáforo de estados

Gris `pendiente_arquitecto` · Amarillo `en_arquitecto` · Celeste `pendiente_visual`/`visual_en_curso` ·
Azul `pendiente_media` · Verde claro `media_en_bandeja` · Naranjo `en_build` · Verde `done` · Rojo `qa_fallo`.

## Reglas de llenado v5 (anti-cuellos)

- 3 arquitectos SIEMPRE ocupados (llenado 1 tarea/tick): tan pronto uno entrega, toma el siguiente slug.
- Nadie espera la media: los arquitectos siguen generando prompts; la media de Flow corre en PARALELO
  en el orden de la tabla de Manu (`orden_visual` en la cola: la media de cada web se dispara cuando le toca).
- Detección de avance por ARCHIVOS (no autodeclaración): BLUEPRINT+MEDIA-PLAN+BUILD-01+BUILD-02 = blueprint
  listo; línea `ESTADO-MEDIA: PROMPTS-LISTOS` en MEDIA-PLAN.md = prompts de media listos.
- El arquitecto además escribe `_media-ingesta/<slug>/plan.json` (targets = los stills) para el ingester.

## Cómo operar (Manu)

- **Motor**: cron `orquestador-v5` (job `a8ea07ea40c1`), cada 5m, no_agent, ENCENDIDO desde 2026-08-30 23:39.
- **Encender/Apagar**: `hermes cron` → pausar/reanudar `orquestador-v5`. Los tasks en vuelo se terminan solos.
- **Web bloqueada**: mover `propuestas/<slug>/` a `órbita/_bloqueadas/<slug>/` y poner
  `estado: bloqueado` en la cola → el orquestador la archiva de la rotación; al devolver
  la carpeta, la reabre solo (pendiente_arquitecto). Las demos también se reabren.
- **Cambiar una spec**: editar el PROMPT-BOT-*-v5.md correspondiente. Los bots lo leen
  en cada tarea (no hay que reiniciar nada).
- **Forzar re-diseño de una web**: devolver su fila a `pendiente_arquitecto` (borrando
  su carpeta o renombrándola fuera de propuestas/).

## Histórico

- v3: 66 webs monorepo → archivado en `_archivo-v3/` (mismos slugs: NO forkear).
- v4: 63 prompts sueltos (PROMPT-*, MEDIA-PROMPTS-*) → archivados en `_archivo-v4-prompts/`.
  El estándar v4.5 (PROMPT-DENTISTA-B-CLARO.md) está ahí como referencia a superar.
- v5 (esta): carpeta por web, 3 arquitectos en paralelo, director visual dedicado,
  builder que delega a opencode. Cola respaldada en `COLA-V2.backup-antes-v5.json`.
