# MEDIA-PROMPTS — CONCESIONARIA v4 "Patio Claro" (para Google Flow)

Motor decidido por Manu (2026-08-30): **Google Flow — Studio ProgramBI** (Manu genera, Hermes entrega prompts).
Proyecto: https://labs.google/fx/es-419/tools/flow/project/b61a9793-ca1b-40d4-ba73-56f4d435fbfe
Modo **Agente ON** (si no, Flow ignora la proporción). Destino cuando la web esté construida:
`órbita/propuestas/concesionaria-v4/public/media/` + anotar en `SitiosWeb/_leads/MEDIA-REGISTRO.md`.
Reglas permanentes: sin personas/caras/manos/logos/texto/patentes legibles. Español. Paleta papel hueso #F8F5EF.
Pillow procedural = SOLO placeholder de estructura; NUNCA entregable final (lección 66 webs v3).

---

## LOTE 1 — Las 4 imágenes (un solo prompt, Agente ON)

```text
Genera 4 imágenes, mismo estilo editorial fotográfico premium, luz natural de mañana lateral,
paleta papel hueso (#F8F5EF), grava clara, tonos grises cálidos, sin personas, sin rostros,
sin manos, sin logos, sin marcas, sin texto ni patentes legibles en todo cuadro:

Imagen 1 (proporción 16:9): patio de concesionaria de autos usados en Santiago de Chile,
fila de tres sedans y un SUV en formación exacta sobre grava clara, luz rasante de mañana,
sombras largas y suaves, orden quirúrgico, composición minimalista con aire a la izquierda,
fotografía de formato medio, profundidad de campo suave en el auto más cercano.

Imagen 2 (proporción 4:5): vista tres cuartos delantero de un sedán gris cálido sobre fondo
papel hueso de estudio, luz suave de ventana grande, reflejos contenidos en la pintura,
sin placa patente visible, estética de catálogo editorial automotriz, fondo limpio sin texturas.

Imagen 3 (proporción 1:1): detalle macro del tablero de un auto apagado y volante de cuero
gris, luz rasante que dibuja las costuras, sin pantallas encendidas ni texto legible en el
tablero, bodegón técnico sobrio, profundidad de campo corta.

Imagen 4 (proporción 4:5): bodegón sobre superficie de papel hueso: una llave de auto tipo
navaja, una carpeta de documentos genérica cerrada y un lápiz técnico alineados en fila,
luz natural lateral suave, sombras dibujadas con precisión, sin texto en los documentos,
estética editorial de catálogo premium.
```

## LOTE 2 — Clip wow opcional para hero (Veo)

> ⚠️ La descarga de video desde Flow no está probada en este flujo (skill flow-assets):
> verificar en la primera ejecución. Si falla, el hero queda con Ken Burns sobre patio.jpg
> (comportamiento v3) y se reintenta otro día.

```text
Genera 1 clip de video de 8 segundos: travelling lateral lento y cinematográfico a lo largo
de una fila de autos usados en un patio de concesionaria chilena al amanecer, grava clara,
luz dorada rasante, sombras largas, cámara a la altura del capot, movimiento continuo y
estable, sin personas, sin logos, sin texto, sin patentes legibles, atmósfera serena premium.
Proporción: 16:9. Sin audio.
```

---

## Checklist post-generación

- [ ] Las 4 imágenes descargadas, renombradas: `patio.jpg` (16:9) · `tres-cuartos.jpg` (4:5) · `tablero.jpg` (1:1) · `llaves.jpg` (4:5)
- [ ] Sin personas/marcas/texto/patentes en NINGUNA (revisar 2ª a 2ª; regenerar con 1 ajuste si algo se coló)
- [ ] Copiadas a `concesionaria-v4/public/media/` cuando exista el build
- [ ] Fila nueva en `MEDIA-REGISTRO.md`: concesionaria-v4 | GENERADA-FLOW | 4 | 0 o 1 video
- [ ] Borrar descargas temporales de la carpeta de descargas del browser
