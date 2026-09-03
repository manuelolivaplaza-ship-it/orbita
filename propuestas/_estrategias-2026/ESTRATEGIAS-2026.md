# ESTRATEGIAS DE DISEÑO WEB 2026 — Órbita
### Reemplaza al bot `orbita-prompter` (eliminado 2026-08-29) y a la anatomía del super-prompt v3

---

## 1. Diagnóstico: por qué los sitios v3 se parecen entre sí (y a toda la IA de internet)

El v3 fijaba en CADA prompt: mismo esqueleto de secciones (hero → cifras count-up → índice
numerado 01-08 → precios → método 3 columnas → galería → FAQ acordeón → reserva teléfono
gigante), serif+sans, radios 0, filetes 1px, clip-reveal, barra de progreso 2px, "un acento
<5%". Solo cambiaba paleta y copy. Resultado: 40+ propuestas con distinto color e idéntico ADN.

La investigación (fuentes abajo) demuestra que ese ADN **coincide punto por punto con los
patrones que delatan un sitio hecho por IA**:

**Los 3 clusters estéticos que la IA sobreusa** (Anthropic, skill oficial `frontend-design`):
1. Crema cálido (~#F4F1EA) + serif display de alto contraste + acento terracota
2. Fondo casi negro + UN acento ácido (verde lima / vermellón) + gris medio en texto
3. "Broadsheet": filetes 1px, border-radius 0, columnas densas tipo periódico

→ El v3 de Órbita está plantado EXACTAMENTE sobre los tres (ÉTER = cluster 1,
NOCTUA = cluster 2, reglas de radios 0 + filetes = cluster 3).

**Los 14 patrones "slop"** (Adrian Krebs, design-slop-cop, 1.590 sitios Show HN analizados):
| # | Patrón | El tell |
|---|---|---|
| 1 | Fuentes display templadas | Space Grotesk, Instrument Serif, Geist, Syne, Fraunces, Bricolage Grotesque, Sora, Young Serif, Bodoni como fuente por defecto |
| 2 | Hero font mix | Una palabra del H1 en otra fuente / itálica / color distinto |
| 3 | Vibe purple | Acento indigo/violeta en CTAs y links |
| 4 | Gradientes | Fondos degradados o texto con clip de gradiente |
| 5 | Accent stripe | Franja de color en borde superior/izquierdo de cards |
| 6 | Glassmorphism | backdrop-blur en paneles flotantes translúcidos |
| 7 | Colored glow | box-shadow saturado en botones y cards |
| 8 | Emoji nav | Ítems de nav/sidebar con emoji delante |
| 9 | Centered + Inter | Hero centrado en Inter o sans genérica |
| 10 | Perma dark | Fondo oscuro con texto gris medio y labels all-caps en TODA la página |
| 11 | Numbered steps | Secuencia "1 · 2 · 3" en fila de pasos |
| 12 | Stat banner | Fila "10K+ usuarios · 99.9% uptime · 4.9★" |
| 13 | Headline badge | Pill/etiqueta pequeña sobre el H1 ("INTRODUCING", kicker uppercase) |
| 14 | FAQ acordeón | FAQ plegable uniforme al final de la página |

→ El v3 usa como REGLAS varias de estas: índice numerado 01-08 (=11), fila de cifras
count-up (=12), kicker uppercase sobre H1 (=13), FAQ acordeón (=14), serif display
Instrument/Caslon + H1 con palabra en itálica (=1 y 2).

**Conclusión central:** no basta con "buenas reglas de diseño" — las reglas v3 eran las
defaults de la IA. Para no parecer IA hay que **derivar cada decisión del rubro concreto**
y **gastar la osadía en UN solo lugar** (elemento firma).

---

## 2. Fuentes de la investigación (2026-08-29, todas gratis/acceso abierto)

- Anthropic — skills oficiales `frontend-design` y `canvas-design` (github.com/anthropics/skills):
  calibración de los 3 clusters, proceso en dos pasadas (plan de tokens → autocrítica → build),
  "gasta tu osadía en un solo lugar", copy como material de diseño.
- Adrian Krebs — design-slop-cop (github.com/AdrianKrebs/design-slop-cop + blog): 14 patrones
  deterministas, validados con diseñadores; ~22% de sitios Show HN = "high slop".
- Codrops 2026: "A Canvas for Individuality" (individualidad > tendencias), "The Story Is in
  the Interaction" (Bonhomme: lujo = precisión narrativa e interacción), "Designing A Better Lou"
  (salud sin clichés clínicos: outcomes primero, confianza por claridad).
- Hacker News (Algolia API): discusiones "Color palette gives away AI slop",
  "Design Slop Cop", "Scan any website for AI design patterns".

---

## 3. Reglas transversales (aplican a las 3 estrategias)

**PROHIBIDO (anti-slop, una violación = rechazado):**
- Fuentes: Space Grotesk, Instrument Serif, Fraunces, Bricolage Grotesque, Sora, Young Serif,
  Bodoni, Syne, Inter como fuente de display/hero. Inter solo tolerable en UI micro, nunca hero.
- Palabra acentuada en el H1 (otra fuente/itálica/color) — el H1 es de UNA sola cara.
- Pill/kicker/badge encima del H1. Los kickers van EN LÍNEA con contenido real o no van.
- Gradientes decorativos, glassmorphism, glows de colores, accent stripes en cards.
- Filas de stats idénticas; pasos "1·2·3" como fila de cards; FAQ `<details>` uniforme al final.
- Acento indigo/violeta; emojis en nav; fondo crema+serif+terracota COMO COMBO default;
  dark completo con texto gris; radios 0 + filetes 1px COMO SISTEMA (cluster 3).
- Cards idénticas con icono arriba. Cualquier foto de stock externo.

**OBLIGATORIO:**
- Tabla de derivación rubro→diseño ANTES de diseñar (ver §4-A): materiales, objetos,
  gestos y vocabulario del rubro → paleta, tipografía, firma, texturas.
- UN elemento firma (memorable, imposible de pegar en otro rubro). Todo lo demás disciplinado.
- Números: integrados en contenido real (tablas de precios/horarios/capacidades), MÁXIMO un
  momento numérico grande, nunca en fila.
- FAQ → sección de preguntas editorial NO uniforme (título propio del rubro, primer ítem
  abierto en prosa, formato variado) o integrada en otras secciones.
- Conversion arc chileno: precios "desde" en CLP, CTA +56 9 WhatsApp, sticky CTA móvil,
  horarios reales, español de Chile, alt descriptivos, contraste AA, focus-visible,
  prefers-reduced-motion, responsive 360px real.
- Tipografía con carácter y NO slop-listed (superfamilias o fuentes del mismoFoundry),
  escala tipográfica intencional (clamp), la tipografía ES parte de la identidad.
- MEDIA con dirección de arte: mismo tratamiento fotográfico en todas las imágenes del sitio
  (luz, encuadre, grano), sin personas/caras/manos/logos/texto, máximo 6 imágenes.
- Verificación antes de entregar: build limpio + captura real revisada + grep anti-slop
  (fuentes cargadas, gradientes, glows, radios, details/FAQ, emojis, fila de stats).

---

## 4. Las 3 estrategias

### ESTRATEGIA A — "IDENTIDAD DERIVADA DEL RUBRO" (la verdad del oficio)
**Mecanismo:** el diseño no se elige: se DERIVA del mundo físico y cultural del negocio.
Todo token sale de la tabla de derivación; el sitio es reconocible como ESE rubro sin leer
ni una palabra. Un gimnasio de Ñuñoa no puede compartir ADN con una clínica dental.

**Tabla de derivación (obligatoria, se escribe antes del código):**
| Preguntar al rubro | Ej. gimnasio de barrio |
|---|---|
| Materiales que toca a diario | hierro galvanizado, magnesio, hormigón sellado, goma |
| Objetos con autoridad | pizarra del WOD, discos, cronómetro, planilla de rutina |
| Gestos del oficio | tachar la rutina, marcar el peso, firmar asistencia |
| Vocabulario local | "toca pierna", "saca el pase", "el hierro", "la sala de máquinas" |
| Luz y hora del lugar | mañana fría, luz de galpón, neón NUNCA |

→ De ahí salen: paleta (no de Dribbble), texturas (reales, sutiles), la FIRMA.

**Firma:** UNA pieza imposible en otro rubro (ej. gimnasio: LA PIZZARRA DEL DÍA — se
actualiza sola con la fecha real y el WOD escrito a mano con marcador).
**Tipografía:** display de peso/anchura extrema con carácter de rubro; cuerpo y mono del
mismo foundry cuando exista superfamilia. **Layout:** asimétrico, la jerarquía la manda el
contenido real (tablas, pizarra, planillas), no cards.

**Cuándo usarla:** rubros con mundo físico/objetal fuerte (gimnasio, ferretería, taller,
restaurante, veterinaria, concesionaria, vinícola). Es la estrategia DEFAULT de Órbita.

**Esqueleto de prompt (autocontenido, pegable en opencode/Claude/Cursor):**
```
ROL: Director de arte + frontend senior. Antes de diseñar, completa la TABLA DE DERIVACIÓN
de este rubro (materiales/objetos/gestos/vocabulario/luz) y preséntala en un comentario.
PALETA: derívala de los materiales reales del rubro (4-6 hex nombrados). PROHIBIDO tomarla
de un moodboard genérico. NADA de: crema+serif+terracota default, dark+acento ácido,
radios 0 + filetes como sistema.
TIPOGRAFÍA: display con carácter del rubro (NO Space Grotesk/Instrument/Fraunces/Syne/
Inter), cuerpo y mono coherentes. H1 de UNA cara, sin palabra acentuada, sin badge encima.
FIRMA: define UN elemento que solo existe en este rubro (no en otro negocio) y gasta ahí
toda la osadía. El resto, disciplinado.
PROHIBIDO: filas de stats, pasos 1·2·3 en cards, FAQ acordeón uniforme (usa sección
editorial de preguntas propia del rubro), gradientes, glows, glassmorphism, emoji nav,
cards idénticas con icono.
NÚMEROS: dentro de contenido real (tablas/precios/capacidades). Máximo un momento numérico.
MEDIA: máx 6 imágenes propias del mundo del rubro, mismo tratamiento fotográfico todas,
sin personas/caras/manos/logos/texto. Nada de stock externo.
CONVERSIÓN: precios desde en CLP, WhatsApp +56 9, sticky CTA móvil, horarios reales,
español de Chile, AA, reduced-motion, 360px real.
PROCESO: tabla → tokens → autocrítica ("¿esto serviría para cualquier rubro?" si sí,
reescribe) → build → captura → iterar → grep anti-slop.
```

---

### ESTRATEGIA B — "MOMENTO FIRMA INTERACTIVO" (la historia está en la interacción)
**Mecanismo (Bonhomme/Codrops):** el sitio se recuerda por UNA interacción orquestada que
solo tiene sentido en ese negocio. Todo lo demás es callado y preciso. La interacción
reemplaza a las fotos como protagonista cuando el rubro es experiencia/velocidad/precisión.

**Catálogo de firmas interactivas (elegir UNA, derivada del rubro):**
- Galería horizontal arrastrable con inercia + ficha técnica que se "escribe sola" (autos, muebles, maquinaria)
- Medidor/gauge animado con UNA cifra real del negocio (km, litros, horas) (concesionaria, bodega, taller)
- Escena canvas ligera (niebla, polvo, agua) que responde al cursor (vinícola, spa, costa)
- Recorrido scroll-drawn sobre un mapa/planta (inmobiliaria, logistics, viñedo)
- Comparador antes/ahora de UN proceso real (no antes/después fotográfico de cuerpos)

**Reglas de motion:** una secuencia de entrada coreografiada (<900ms), micro-hovers 150-250ms,
NADA más se mueve; `prefers-reduced-motion` apaga todo y deja versión estática usable;
la interacción firma debe funcionar en touch (drag real, no solo scroll).

**Cuándo usarla:** rubros donde el cliente compra experiencia o precisión (concesionaria,
eventos, tecnología, turismo, estudio profesional).

**Esqueleto de prompt:**
```
ROL: Creative developer senior (Codrops/Awwwards) + diseñador editorial.
FIRMA INTERACTIVA: elige UNA interacción derivada del rubro (lista del brief) y
constrúyela tú mismo en canvas/JS vanilla (sin dependencias nuevas). Debe funcionar
en touch y respetar reduced-motion (versión estática).
MOTION: entrada coreografiada única <900ms + hovers 150-250ms. PROHIBIDO marquee,
parallax múltiple, reveals por todos lados, gradientes/glows/glassmorphism.
PALETA/TIPO: mismas prohibiciones anti-slop (§3). Sin badge sobre el H1, H1 de una cara.
PERFORMANCE: sin librerías nuevas; canvas pausado fuera de viewport; 60fps target.
CONVERSIÓN Y VERIFICACIÓN: igual que §3 (precios desde, WhatsApp, sticky CTA, build,
captura, grep anti-slop).
```

---

### ESTRATEGIA C — "DIRECCIÓN DE ARTE FOTOGRÁFICA" (la imagen manda)
**Mecanismo:** el sitio es un ensayo fotográfico del negocio. Se define primero el SISTEMA
de imágenes (tratamiento único: luz, encuadre, grano, paleta dentro de la foto), se generan
6 imágenes coherentes, y el layout sirve a esas fotos: full-bleeds, collages asimétricos,
captions técnicas (datos reales del rubro: bloque, altitud, lote), fotos que cortan la grilla.

**Sistema de imágenes (obligatorio escribirlo antes):**
- 1 frase de tratamiento fotográfico (ej. "todo mirado desde el suelo, luz de mañana con
  niebla, grano 400, sin saturar")
- 1 motivo recurrente (arcos de bodega, texturas de materia prima, herramienta en reposo)
- Captions técnicas con datos reales del rubro (11px, esquina) — las fotos documentan,
  no decoran.

**Layout:** magazine editorial asimétrico; fotos ocupan la mayoría del viewport en las
secciones fuertes; el texto entra DESPUÉS de la foto; spreads alternados (no cards).
**Tipografía:** serif editorial NO slop-listed usada con restricción (títulos pequeños y
grandes, nunca con palabra acentuada), sans humanista para cuerpo, captions en caps pequeñas.
**Cuándo usarla:** rubros fotogénicos donde el producto SE VE (vinícola, gastronomía,
hotelería, arquitectura, moda, paisajismo).

**Esqueleto de prompt:**
```
ROL: Director de fotografía + editor de revista + frontend senior.
PASO 0: escribe el SISTEMA DE IMÁGENES (tratamiento en 1 frase, motivo recurrente,
5-6 encuadres con caption técnica cada uno). Genera/valida TODAS las imágenes con ese
tratamiento idéntico. Sin personas/caras/manos/logos/texto.
LAYOUT: ensayo fotográfico asimétrico; las fotos lideran (full-bleeds, collages,
capturas técnicas 11px); texto después de la foto; spreads alternados, NO cards iguales.
TIPO: serif editorial no-slop con restricción + sans humanista; H1 de una cara sin badge.
PROHIBIDO: combo default crema+serif+terracota SIN justificación derivada del rubro
(justifícala en la tabla de derivación o cámbiala), gradientes, glows, FAQ uniforme,
filas de stats, pasos 1·2·3.
CONVERSIÓN Y VERIFICACIÓN: igual que §3.
```

---

## 5. Cómo elegir estrategia por rubro (regla rápida)
1. ¿El negocio tiene objetos/materiales con autoridad? → **A**
2. ¿Se compra experiencia, velocidad o precisión? → **B**
3. ¿El producto se ve y emociona en foto? → **C**
Rubro fuerte en dos: mezclar A+C (identidad derivada + fotos del mundo del rubro) o A+B.
NUNCA tres a la vez: la disciplina es parte del anti-slop.

## 6. Verificación de entrega (checklist nuevo, reemplaza el grep v3)
1. `npm run propuestas:build -- <slug>` sin errores
2. Captura Edge headless 1440px + 360px, REVISADA visualmente (no asumir del CSS)
3. Grep anti-slop: fuentes cargadas ∉ lista slop; sin gradientes decorativos; sin
   box-shadows saturados; sin backdrop-blur; radios ≠ sistema 0-universal (salvo firma);
   sin `<details>`×3 al fondo ni heading ^FAQ; sin emoji en nav; sin fila de 3+ stats
   idénticas; sin pill sobre H1; H1 una sola familia sin itálica de acento
4. ¿El elemento firma existe y es del rubro? ¿Se puede cambiar la paleta y el sitio sigue
   pareciéndose a otro rubro? Si sí → falló la derivación
5. Tabla de derivación y sistema de imágenes guardados en el repo del sitio (DERIVACION.md)

## 7. Cambios de pipeline derivados
- El que construye ya NO recibe "anatomía v3"; recibe ESTRATEGIA + rubro y hace la
  derivación él mismo (los perfiles builder/analyst leen este documento).
- Los prompts dejan de ser 40 plantillas por rubro-estética: 3 esqueletos de estrategia +
  tabla de derivación por lead (el análisis visual del rubro alimenta la tabla).
- `orbita-prompter` eliminado (perfil borrado 2026-08-29). Construcción: agente principal
  o `orbita-builder` leyendo este doc; delegación a opencode opcional para build.
