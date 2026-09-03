# MEDIA-PROMPTS — DENTISTA B · SERENA DENTAL · CLARO (para Google Flow)

Motor decidido por Manu (2026-08-30): **Google Flow — Studio ProgramBI** (Manu genera, Hermes entrega prompts).
Proyecto: https://labs.google/fx/es-419/tools/flow/project/b61a9793-ca1b-40d4-ba73-56f4d435fbfe
Modo **Agente ON** (si no, Flow ignora la proporción). Destino cuando la web esté construida:
`órbita/propuestas/dentista-b-claro/public/media/` + anotar en `SitiosWeb/_leads/MEDIA-REGISTRO.md`.
Reglas permanentes: sin personas/caras/manos/logos/texto/patentes legibles. Español. Paleta papel hueso #FDFCF9, tinta #1A2A2E, teal #218380, coral #E07A5F. Pillow procedural = SOLO placeholder de estructura; NUNCA entregable final.

---

## LOTE 1 — Las 4 imágenes (un solo prompt, Agente ON)
> Ratios válidos en Flow: 16:9 · 4:3 · 1:1 · 3:4 · 9:16 (NO existe 4:5 — verificado 2026-08-30)
> imgs: sillon.jpg 16:9 → 1.778 · bandeja.jpg 1:1 → 1.0 · recepcion.jpg 4:3 → 1.333 · lampara.jpg 3:4 → 0.75

```text
Genera 4 imágenes, fotografía editorial premium coherente como lote (misma luz norte lateral suave de mañana chilena, misma paleta blanco clínico cálido #FDFCF9 + tinta #1A2A2E + toques teal #218380, mismo grading suave con negros levantados y saturación contenida), para la clínica dental SERENA DENTAL en Ñuñoa. Atmósfera serena, orden quirúrgico, aire y calma — cero gritos comerciales. Sin personas, sin rostros, sin manos, sin logos, sin marcas, sin texto legible ni patentes en ningún cuadro:

Imagen 1 (proporción 16:9): box dental vacío fotografiado a la altura del sillón en posición baja, sillón tapizado claro centrado en el tercio derecho con aire generoso a la izquierda, bandeja auxiliar alineada y lámpara operatoria apagada en reposo; luz principal lateral de ventana grande a 45 grados con difusión de visillo, relleno frío sutil del cielo norte, contraluz fino recortando el borde del sillón; lente 35mm f/8 con profundidad extendida, micro-nitidez en costuras del tapizado y cromados; textura de lino del sillón y poro del cuero visibles, piso de porcelanato claro con veta piedra sutil; grading con negros levantados, blancos cálidos, dominante papel hueso, estética de revista Kinfolk clínica.

Imagen 2 (proporción 1:1): bodegón cenital de bandeja de instrumental dental esterilizado sobre tela blanca de algodón con textura de trama visible, espejos bucales, sondas y pinzas alineadas con precisión quirúrgica en regla de tercios, espacios negativos limpios; luz rasante a 20 grados que esculpe sombras largas suaves, tarjeta blanca de relleno y tarjeta negra definiendo borde de sombra; lente macro 100mm f/5.6 con enfoque apilado en el filo del espejo y bokeh cremoso en el fondo; materia: acero inoxidable pulido con micro-rayas, algodón de la tela, reflejos controlados sin quemar; grading monocromo cálido, sensación de catálogo industrial premium europeo.

Imagen 3 (proporción 4:3): recepción luminosa vacía de clínica dental chilena contemporánea, mostrador bajo de madera pálida y piedra clara con filete 1px, sillas de espera alineadas con aire, muro blanco cálido con sombra suave, planta desenfocada al fondo; luz principal de ventana lateral a 45 grados con difusión, relleno de rebote en muro, contraluz sutil en el borde del mostrador; lente 28mm f/8 con corrección de perspectiva, horizonte a media altura, tercios con aire a la derecha; textura de madera clara y piedra caliza visible, piso continuo sin brillos quemados; grading luminoso con saturación contenida, atmósfera de calma y orden, sin carteles legibles.

Imagen 4 (proporción 3:4): detalle vertical de lámpara operatoria dental apagada en primer plano, brazo articulado metálico y cabezal con vidrio y cromados, fondo de box desenfocado con sillón sugerido; luz principal lateral dura contenida a 30 grados esculpiendo el metal, relleno mínimo, cero reflejos quemados en el vidrio; lente 85mm f/5.6 con foco absoluto en la junta metálica y bokeh cálido atrás; materia: aluminio cepillado, vidrio óptico, goma de articulación; grading frío-cálido equilibrado, negros profundos pero no puros, estética de diseño industrial suizo, vertical con aire arriba y abajo.
```

## LOTE 2 — Clip wow opcional para hero (Veo)

> ⚠️ La descarga de video desde Flow no está probada en este flujo (skill flow-assets):
> verificar en la primera ejecución. Si falla, el hero queda con Ken Burns sobre sillon.jpg
> (comportamiento v3) y se reintenta otro día.

```text
Genera 1 clip de video de 8 segundos: travelling lateral lento y estable a lo largo de un box dental vacío de clínica chilena luminosa al amanecer, sillón en posición baja, luz norte lateral suave entrando por ventana, sombras largas delicadas sobre piso claro, cámara a la altura del apoyabrazos deslizándose en paralelo, movimiento continuo sin cortes, sin personas, sin logos, sin texto, atmósfera serena premium, color blanco cálido #FDFCF9 dominante.
Proporción: 16:9. Sin audio.
```

---

## Checklist post-generación

- [ ] Las 4 imágenes descargadas, renombradas: `sillon.jpg` (16:9) · `bandeja.jpg` (1:1) · `recepcion.jpg` (4:3) · `lampara.jpg` (3:4)
- [ ] Sin personas/caras/manos/marcas/texto/patentes en NINGUNA (revisar imagen por imagen; regenerar con 1 ajuste si algo se coló)
- [ ] Coherencia de lote verificada: misma luz norte lateral, misma paleta hueso/teal, mismo grading (negros levantados, saturación contenida)
- [ ] Copiadas a `dentista-b-claro/public/media/` cuando exista el build
- [ ] Fila nueva en `MEDIA-REGISTRO.md`: dentista-b-claro | GENERADA-FLOW | 4 | 0 o 1 video
- [ ] Borrar descargas temporales de la carpeta de descargas del browser
