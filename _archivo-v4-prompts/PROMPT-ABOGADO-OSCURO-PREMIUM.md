# SUPER-PROMPT v4 — ABOGADO · "RIVERA NOCTURNO" · anti-homogeneidad

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL: 172 sitios propios válidos de abogado grado A capturados y agrupados por píxeles (no por CSS). Los grises default de WordPress (#32373c) NO cuentan como diseño.
> Grupo visual único para esta web: **Oscuro / premium minimal (real) — 55 sitios (32% del rubro, nicho de autoridad nocturna)**, familias px negro/profundo + neutro, dark_pct 46–96%, light_pct 0–4%, colores top reales #000000/#000020/#002020/#002040/#200000. Referentes verificados del CRM (osmosis nocturna real, sin buyScore pero con % oscuro medido): **VIGNOLO MORRIS Abogados (vignolomorris.cl · La Reina · 96% oscuro · #000020)** — noche profunda editorial, **KARLA & CIA (karlaycia.cl · La Serena · 96% · #000000)** — negro absoluto premium, **LATERRA & CIA (laterraycia.cl · Concepción · 84% · #000000)** — autoridad tributaria nocturna, **SALGADO ABOGADOS (salgadoabogados.cl · Valparaíso · 81% · #000000)** — tinta carbón editorial, **DEFENSUR (defensur.cl · Temuco · 81% · #000000)** — noir contenido, **ABOGADA DANIELA BENITEZ (abogadadanielabenitez.cl · Temuco · 56% · #000000)** — noche con hueso. Seguidos por ASContable (82%), Vergara Labarca Parodi (85%), Diaz & Cia (85%), RUIZ SALAZAR (66%) y FERRADA Y POVEZ fn.cl (79%). Este grupo NO es claro minimal (97) ni azul/cian (12): es el abogado chileno que proyecta autoridad 24/7, penal/tributario/familia de alto riesgo, que gana por tinta noche + latón contenido + expediente sobrio. Objetivo de precio percibido: USD 20.000–30.000 (honorario nocturno = confianza premium). Este prompt es v4 ANTI-HOMOGENEIDAD: debe parecer hecho por un estudio editorial-jurídico nocturno (Skadden/Kirkland en chileno, no neón gamer), no una landing premium genérica.

## ROL

Eres director de arte + frontend senior nivel Awwwards ESPECIALIZADO en estudios jurídicos chilenos nocturnos de penal, familia crítica, tributario y civil patrimonial: conoces la diferencia entre una cautelar de madrugada y una herencia con posesión efectiva bloqueada, sabes que el cliente a las 23:00 busca "¿me contestan ahora? + cuánto cuesta + qué llevo mañana a las 9:00", y que la conversión real a las 2 AM es "teléfono que contesta + honorario por escrito + etapas sin humo + el mismo abogado que me recibe". Diseñas como quien ha hecho 20 webs noir editoriales — tinta noche, latón cepillado, expediente bajo lámpara — no como quien pinta de negro una plantilla clara.

## CONTEXTO DEL PROYECTO

Trabajas en el monorepo Órbita (`C:\Users\manue\OneDrive\Desktop\órbita`).
1) Duplica `propuestas/_plantilla` → `propuestas/abogado-oscuro-premium/` (archivos, no node_modules). package.json name "abogado-oscuro-premium"; meta.json título "RIVERA — Estudio Jurídico · Propuesta Órbita"; index.html lang="es".
2) Stack real: React 19 + TypeScript + Vite 6, CSS PURO en src/styles.css (variables, grid 12 col, clamp). Sin Tailwind. Única dependencia extra permitida: `motion`.
3) Comandos desde la raíz órbita: dev `npm run propuesta -- abogado-oscuro-premium` (:3010) · build `npm run propuestas:build -- abogado-oscuro-premium`. El build debe pasar sin errores.
4) AISLAMIENTO (regla dura): PROHIBIDO leer, listar o copiar archivos de cualquier otra carpeta de propuestas (son de otros clientes y su CSS está prohibido como fuente). Se parte SOLO de `_plantilla` virgen. Si te "acuerdas" del CSS de otra propuesta, esa memoria no se usa. Prohibido reusar tokens de abogado-claro/b-claro (son papel hueso; aquí es noche).

## ADN DEL RUBRO (inviolable — esto te diferencia de cualquier otro rubro)

- **Gramática: G12 Expediente / trust-first (primaria) + G1 Índice editorial numerado (apoyo sutil).** El PRIMER viewport es expediente nocturno: titular tinta-noche con prueba dura inmediata (años/RUT/registro) + honorario desde visible sin scroll infinito + CTA "Agendar reunión" latón sobre noche. El recorrido son CAPÍTULOS DE EXPEDIENTE numerados 01–04, no grilla de fichas ni timeline de semanas. El precio vive EN LA TABLA DE HONORARIOS (#honorarios) como expediente nocturno con valor "desde" en tabular hueso a la derecha, con nota honesta al pie en muted. G1 aparece solo como índice lateral 01–04 a la derecha del hero (numeración latón tenue, marca el capítulo activo), pero la arquitectura es G12: pruebas → alcance → honorario → reserva. NO es storytelling de 7 capítulos genéricos: es confianza que se verifica en 8 segundos bajo luz de lámpara.
- **Tipografía: T1 — Newsreader (display) + Public Sans (texto).** PROHIBIDO Inter, Geist, Space Grotesk, Poppins, Montserrat, Roboto, Open Sans, Lato, Arial, system-ui. Escala H1: clamp(2.4rem,6vw,4.8rem) con leading 0.90 y tracking -0.03em; H2 Newsreader 1.7–2.0rem leading 1.05; cuerpo Public Sans 1.05rem/1.65. Números de honorarios y cifras en tabular lining, tracking 0. Newsreader para titulares jurídicos nocturnos con autoridad serena (Skadden-like); Public Sans para cuerpo y tablas con legibilidad de expediente. Kickers uppercase tracking 0.16em en latón. Diferencial anti-clon: abogado-claro/b-claro usan T4 (Libre Baskerville); aquí T1 es obligatorio.
- **Secciones propias con ids del oficio (máx 3 compartibles con otros rubros: header, footer, reserva):**
  - `#materias` — 01 / Materias: las de RIVERA (Penal, Familia crítica, Civil patrimonial, Tributario — 4, no 12). Cada materia como capítulo editorial nocturno con bajada de 1 línea en palabras simples + "cuándo nos llamas" + casos típicos, grilla 2×2 sobria con filete 1px linea noche, sin iconos de martillo/balanza gigantes.
  - `#como-partimos` — 02 / Cómo partimos: reunión inicial (qué traes), diagnóstico en 24–48h, estrategia y escrito, seguimiento. Documentos, plazos y entrega — reduce la incertidumbre, la objeción real del cliente nocturno. Pasos numerados 01–03 con plazos.
  - `#honorarios` — 03 / Honorarios: tabla editorial nocturna densa con valor "desde" en CLP tabular hueso/latón a la derecha. No es 3 tiers SaaS: es expediente con honorario transparente sobre noche.
  - `#urgencia` — 04 / Urgencia: penal o familia con detención/medida cautelar hoy, teléfono grande latón + "¿detención / medida cautelar / VIF hoy?" + tiempo de respuesta (45 min RM) + qué decir al llamar. Sin esta sección, el sitio no convierte en crisis nocturna.
  PROHIBIDO el arco `#inicio #cifras #catalogo #precios #metodo #galeria #faq #reserva` como secuencia. Cada id debe leerse como vocabulario de estudio jurídico chileno nocturno.
- **Firma de motion de oficio (noche contenida):** subrayado de capítulo que se extiende 240ms ease [0.22,1,0.36,1] al entrar en viewport (trazo latón 1.5px bajo H2, una sola vez); índice lateral 01–04 que marca capítulo activo con latón 180ms sin bounce; hover seco 180ms en filas de #honorarios (fondo #1A2E40 sutil, filete latón tenue); CTA latón sin escala ni rebote; entrada de capítulos fade+translate 12px 280ms sin stagger global 0.12s. Todo respeta prefers-reduced-motion → cero animación. PROHIBIDO orbes, clip-reveal cinematográfico global, bounce.
- **Dirección de imagen (4 imágenes, public/media/, sin personas/caras/manos/logos/texto/patentes):**
  1. `biblioteca.jpg` 4:3 — lomos de biblioteca jurídica en noche tenue, luz de lámpara cálida.
  2. `mesa.jpg` 16:9 — mesa de reunión vacía nocturna con papel y lápiz bajo lámpara puntual.
  3. `expediente.jpg` 1:1 — expediente cerrado con cinta y sello abstracto en sombra nocturna.
  4. `fachada.jpg` 3:4 — fachada/patio interior de oficina clásica chilena en penumbra noche.
- **Paleta de 3 roles (variables en :root) — FAMILIA OSCURO NOCTURNO v4:** `--bg` #0F1A24 (noche tinta azul-negra, nunca #000 puro), `--bg-soft` #152433 (panel secundario noche), `--ink` #EDE6DA (hueso expediente, texto principal), `--muted` #8FA0B8 (gris azul secundario nocturno), `--linea` #243449 (filete 1px noche, 12% hueso), `--accent` #C9A86A (latón dorado apagado cepillado, <5% área: CTA principal, índice activo 01–04, subrayados, links), `--accent-2` #9A7B5E (latón profundo para numeración y filetes editoriales, <4%), `--state` #8A9A78 (verde piedra contenido: "agenda disponible / respuesta 45 min"). PROHIBIDO #000/#FFF puros, dorados brillantes #D4AF37 neón, cian neón, degradados tinta→dorado, sombras difusas, radios. --accent y --accent-2 SÍ aparecen en numeración 01–04 y etiquetas del oficio (no es un hex solo en botones). Texto hueso sobre noche con contraste AA verificado.
- **Ritmo vertical y densidad:** hero nocturno con respiración generosa pero contenida (padding 96–112px desktop, divisor 1px var(--linea) bajo titular), capítulos con aire intersticial 64–80px, pero densidad de EXPEDIENTE en #honorarios: filas compactas 16–20px padding vertical, filete 1px var(--linea), tipografía tabular hueso. El whitespace está en índice y entre capítulos; la densidad está en honorarios nocturnos. Contraste con G2: aquí no es grilla densa de fichas, es expediente que se lee bajo lámpara.

## BENCHMARK A IMITAR (disciplina, no copia)

Vignolo Morris La Reina (96% oscuro) — noche profunda con latón mínimo · Karla & Cia La Serena (96%) — negro absoluto sin ruido · Laterra & Cia Concepción (84%) — autoridad tributaria nocturna · Salgado Abogados Valparaíso (81%) — tinta carbón editorial · Defensur Temuco (81%) — noir contenido · FerradaNehme (fn.cl, 79%) como disciplina nacional: tipografía grande, aire, expediente como protagonista, honorario sin gritos — pero en noche, no en blanco. Internacional: Skadden (skadden.com), Kirkland & Ellis, Latham & Watkins — autoridad nocturna sobria, tracking negativo, filete 1px, latón desaturado. Imita la DISCIPLINA de tinta noche + grilla 12 col + honorario honesto sobre oscuro, no los píxeles. Tu propuesta debe sentirse como "por fin un penalista que se ve serio de noche".

## MARCA DEMO (textos literales, no cambiar)

Nombre: RIVERA
H1: "Tranquilidad legal cuando todo está en juego."
Subhead: "Te decimos si tienes caso, cuánto cuesta y qué hacemos mañana a primera hora. Sin humo, por escrito."
CTA principal: "Agendar reunión" · secundario: "Ver honorarios"
Contacto: +56 9 8765 1234 · contacto@rivera.cl · Las Condes, Santiago · Atención presencial y online
Horario: Lun–Vie 9:00–18:30 · Urgencias penal/familia 24/7 (respuesta inicial 45 min RM)
Micro-copy honesto (bajo hero): "Primera reunión con diagnóstico honesto. Si no tienes caso, te lo decimos y no avanzas."
Banda de confianza G12 bajo hero (sobre bg-soft #152433 con filete superior 1px linea): "RUT 76.123.456-7 · +18 años · Registro Colegio de Abogados · Respuesta inicial en 24h hábiles · Materias acotadas"
Firma editorial del índice G1 (lateral derecho hero, vertical en desktop): 01 Materias · 02 Cómo partimos · 03 Honorarios · 04 Urgencia

## CONTRATO DE CONVERSIÓN (obligatorio, la ubicación la fija la gramática G12/G1)

- Precio/honorario "desde" EN LA TABLA de #honorarios (no en popup, no "consúltenos"): Consulta inicial $45.000 · Asesoría penal/familia desde $150.000 · Juicio laboral desde $750.000 · Divorcio de común acuerdo desde $380.000 · Divorcio contencioso desde $820.000 · Defensa penal desde $950.000 · Juicio civil patrimonial desde $600.000 · Honorario mensual empresa desde $320.000/mes. Nota al pie: "Valores referenciales según complejidad y jurisdicción; honorario final se fija por escrito tras reunión. Facilidades de pago en cuotas. Sin sorpresas."
- Teléfono visible en header desktop (hueso #EDE6DA sobre noche #0F1A24 con botón latón #C9A86A) y sticky móvil (siempre, contraste AA).
- CTA persistente móvil: "Agendar reunión" (sticky discreto tras el hero, fondo latón #C9A86A con texto noche #0F1A24, no tapa contenido, aparece tras scroll 60vh).
- Prueba social honesta sin foto de persona: "+18 años · +1.600 causas · 91% recomendación · 5 abogados, siempre los mismos" como línea estática tabular con números en Newsreader tabular lining (sin count-up animado; count-up opcional solo una vez fuera de #honorarios, pero NUNCA dentro de la tabla densa).

## 0. REGLAS GLOBALES (stack congelado, aislamiento, radios, contraste, focus)

Stack congelado: React 19 + Vite 6 + TS + CSS puro. Sin Tailwind, sin UI kits, sin shadcn. Único extra: motion. No tocar package.json salvo motion. Aislamiento: prohibido importar CSS de otra propuesta. Radios 0 en TODO (cards, botones, inputs, imágenes). Sombras: PROHIBIDAS difusas; solo filete 1px var(--linea). Contraste AA obligatorio: --ink #EDE6DA sobre --bg #0F1A24 (ratio >12:1), --muted #8FA0B8 sobre --bg verificado >4.5:1, latón #C9A86A solo como acento texto grande o botón (no cuerpo 12px sobre hueso). Focus-visible: ring 2px var(--accent) offset 2px noche. ::selection: background #C9A86A color #0F1A24. Tipografías permitidas: Newsreader + Public Sans (T1). PROHIBIDAS: Inter, Geist, Space Grotesk, Poppins, Montserrat, Roboto, Open Sans, Lato, Arial, system-ui. tabular-nums activado en precios y cifras. Motion policy: todo respeta @media (prefers-reduced-motion: reduce) → animation: none !important; transition: none !important.

## 1. DESIGN TOKENS EXACTOS (bloque :root copiable + regla de área por rol)

```css
:root {
  --bg: #0F1A24;
  --bg-soft: #152433;
  --ink: #EDE6DA;
  --ink-2: #8FA0B8;
  --muted: #8FA0B8;
  --linea: #243449;
  --accent: #C9A86A;
  --accent-2: #9A7B5E;
  --state: #8A9A78;
  --display: "Newsreader", serif;
  --text: "Public Sans", system-ui, sans-serif;
  --radius: 0px;
  --max: 1280px;
  --gutter: 24px;
}
```
Regla de área por rol: --bg 78% (fondo noche base), --bg-soft 12% (bandas G12, hover filas, footer), --ink 6% texto, --linea 2% filetes, --accent <3.5% (CTA + índice activo + subrayados + links), --accent-2 <1.5% (numeración 01–04, detalles filete), --state <0.8% (etiqueta "disponible/45min"). Total acentos <5.8% por viewport medido. Nunca sección hueso completa: noche consistente 100% viewport. Prohibido #FFF/#000 puros, neón, degradados, glassmorphism.

## 2. TIPOGRAFÍA EXACTA (tabla por elemento)

| Elemento | Familia | Peso | Tamaño clamp | Line-height | Letter-spacing | Color | Uso |
|---|---|---|---|---|---|---|---|
| Kicker G12 (banda) | Public Sans | 600 | 0.72rem (11.5px) | 1.4 | 0.16em uppercase | var(--accent) | "RUT · +18 años · Registro" |
| H1 | Newsreader | 300 | clamp(2.4rem,6vw,4.8rem) | 0.90 | -0.03em | var(--ink) | "Tranquilidad legal…" |
| Subhead | Public Sans | 400 | clamp(1.05rem,1.2vw,1.18rem) | 1.65 | -0.01em | var(--muted) | bajo H1, max 36ch |
| H2 capítulo | Newsreader | 300 | clamp(1.75rem,3.2vw,2.05rem) | 1.05 | -0.02em | var(--ink) | "01 / Materias" |
| Numeración 01–04 | Newsreader | 300 | 0.95rem | 1 | 0.08em | var(--accent-2) | índice lateral + H2 prefix |
| Cuerpo | Public Sans | 400 | 1.02rem | 1.65 | -0.01em | var(--ink) con 88% | párrafos expediente |
| Fila honorario label | Public Sans | 500 | 0.98rem | 1.5 | 0 | var(--ink) | "Divorcio de común acuerdo" |
| Fila honorario precio | Newsreader | 400 | 1.05rem tabular | 1 | 0 | var(--accent) | "$380.000" tabular lining, tabular-nums |
| Nota pie tabla | Public Sans | 400 | 0.78rem | 1.6 | 0 | var(--muted) | "Valores referenciales…" |
| Teléfono grande | Newsreader | 300 | clamp(1.6rem,3vw,2.2rem) | 1 | -0.02em | var(--ink) | urgencia #urgencia |
| Caption 11px | Public Sans | 500 | 0.70rem | 1.5 | 0.08em uppercase | var(--muted) | "Qué incluye · Plazo" |

Carga Google Fonts: `<link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,300;6..72,400&family=Public+Sans:wght@400;500;600&display=swap" rel="stylesheet">`. tabular-nums: `font-variant-numeric: tabular-nums lining-nums; font-feature-settings: "tnum" 1, "lnum" 1;`

## 3. ESTRUCTURA DE PÁGINA (orden real + anchor nav)

Orden NO negociable (G12 trust-first nocturno):
Header sticky (índice 01–04 + teléfono + CTA) → Hero nocturno (H1 + subhead + 2 CTAs + micro-copy + banda G12 de confianza) → #materias (01, grilla 2×2 nocturna) → #como-partimos (02, pasos 01–03 con plazos) → #honorarios (03, tabla densa nocturna) → #urgencia (04, bloque crisis con imagen fachada) → Footer + #reserva (form + datos RIVERA) .

Nav anchor (header + índice lateral apuntan a mismos ids):
- 01 Materias → #materias
- 02 Cómo partimos → #como-partimos
- 03 Honorarios → #honorarios
- 04 Urgencia → #urgencia
- CTA "Agendar" → #reserva

Header sticky: height 64px, bg #0F1A24 con border-bottom 1px var(--linea), backdrop sin blur (noche sólida). Logo "RIVERA" Newsreader 300 1.15rem tracking -0.02em color var(--ink). Nav desktop: 01–04 con numeración accent-2 0.75rem + label Public Sans 500 0.85rem, gap 28px. Teléfono +56 9 8765 1234 visible desktop a la derecha (Public Sans 600 0.88rem tabular, color var(--ink)). CTA header "Agendar reunión" (bg var(--accent) #C9A86A, color #0F1A24, padding 10px 18px, font Public Sans 600 0.85rem, 0 radius). Sticky móvil: header colapsa a 56px, nav 01–04 se oculta bajo hamburguesa (drawer noche #152433), teléfono persiste icono + número abreviado.

## 4. SECCIÓN POR SECCIÓN (el corazón — 60% del documento)

### 4.1 HEADER (sticky, G12 navegable)
Composición: grid 12 col, cols 1–12 header. Height 64px desktop / 56px mobile. Logo cols 1–2, nav índice cols 3–8 centrado, teléfono+CTA cols 9–12 derecha. Padding x 24px, y 0. Border-bottom 1px var(--linea). Background #0F1A24, color var(--ink). Z-index 50.
Elementos:
- Logo "RIVERA" Newsreader 300 1.15rem -0.02em var(--ink). Hover: color var(--accent) 180ms.
- Nav items 01–04: número accent-2 0.72rem + label Public Sans 500 0.82rem var(--muted). Activo: label var(--accent) + subrayado 1.5px var(--accent) width 100% 180ms ease [0.22,1,0.36,1]. Hover: label var(--ink) 150ms.
- Teléfono "+56 9 8765 1234" Public Sans 600 0.88rem tabular var(--ink), icono teléfono 14px var(--accent). Hover: color var(--accent) 150ms.
- CTA "Agendar reunión" bg var(--accent) #C9A86A color #0F1A24 600 0.85rem, padding 10px 18px, border 1px solid var(--accent). Hover: bg #B89A5E (accent-2) 180ms, sin escala.
Motion: header hide on scroll down 200ms ease, show on scroll up 200ms. Índice activo sigue scroll con IntersectionObserver, subrayado 180ms.
Responsive 360px: logo + hamburguesa (3 líneas 18×2px var(--ink)) + teléfono icono solo, CTA header se oculta (vive en sticky móvil). Drawer móvil noche #152433, items 01–04 stacked con numeración latón.

### 4.2 HERO NOCTURNO + BANDA G12 (trust-first)
Composición: grid 12 col, height 88vh min 560px max 780px. Texto cols 1–7, índice lateral cols 9–12 (desktop), imagen mesa.jpg bg? NO: noche tipográfica pura, sin foto hero a sangrado (autoridad = tipografía, no stock). Padding top 96px, bottom 48px. Background #0F1A24. Divisor 1px var(--linea) bajo hero antes de banda.
Elementos literales:
- Kicker superior (sobre H1): "RIVERA · LAS CONDES — ESTUDIO JURÍDICO" Public Sans 600 0.72rem 0.16em uppercase var(--accent), margin-bottom 16px, con filete 1px var(--linea) a la izquierda 24px.
- H1: "Tranquilidad legal cuando todo está en juego." Newsreader 300 clamp 2.4–4.8rem leading 0.90 -0.03em var(--ink), max 14ch, margin-bottom 18px. Clip-reveal por líneas? NO global; H1 entra fade+translate 12px 400ms ease [0.22,1,0.36,1] una vez.
- Subhead: "Te decimos si tienes caso, cuánto cuesta y qué hacemos mañana a primera hora. Sin humo, por escrito." Public Sans 400 1.10rem/1.65 var(--muted), max 36ch, margin-bottom 28px.
- CTAs fila: primario "Agendar reunión" bg var(--accent) #C9A86A color #0F1A24 600 0.92rem padding 14px 26px. Secundario "Ver honorarios" ghost: border 1px var(--linea) color var(--ink) bg transparent padding 14px 26px. Gap 12px. Hover primario bg #B89A5E 180ms; secundario bg #152433 border var(--accent) 180ms.
- Micro-copy bajo CTAs: "Primera reunión con diagnóstico honesto. Si no tienes caso, te lo decimos y no avanzas." Public Sans 400 0.88rem/1.6 var(--muted) max 38ch, margin-top 14px, con punto verde state 6px #8A9A78 antes.
- Índice lateral G1 (desktop cols 9–12, vertical): 01 Materias · 02 Cómo partimos · 03 Honorarios · 04 Urgencia. Cada fila: número Newsreader 300 0.85rem var(--accent-2) + label Public Sans 500 0.85rem var(--muted). Activo: label var(--accent) 180ms. Filete vertical 1px var(--linea) a la izquierda del índice, subrayado activo 1.5px var(--accent) que crece 240ms.
- Banda G12 bajo hero (full width, bg #152433, border top 1px var(--linea), padding y 18px): "RUT 76.123.456-7 · +18 años · Registro Colegio de Abogados · Respuesta inicial en 24h hábiles · Materias acotadas" Public Sans 500 0.78rem 0.06em color var(--ink-2), centered, con separadores "·" var(--linea). En mobile, wrap en 2 líneas, same tamaño.
Textos literales exactos (builder NO redacta): H1, subhead, kicker, micro-copy, banda G12 arriba tal cual.
Motion hero: H1 fade+translate 12px 400ms 0ms, subhead 400ms 80ms, CTAs 400ms 160ms, índice fade 300ms 240ms, banda slide up 10px 360ms. Todo con ease [0.22,1,0.36,1]. Sin stagger global.
Responsive 360px: cols 1–12 texto, índice lateral se mueve bajo CTAs como barra horizontal scrolleable (01–04 con filete superior 1px, numeración arriba label abajo). H1 clamp 2.4rem a 360px sigue 2 líneas legible (14ch → 10ch). CTAs stacked full width.

### 4.3 #materias — 01 / Materias (capítulo expediente nocturno)
Composición: grid 12 col, padding y 80px desktop / 56px mobile. Background #0F1A24 (noche base), no alternancia hueso. Título cols 1–12: kicker "01 / MATERIAS" Public Sans 600 0.72rem 0.16em var(--accent) + H2 "Materias acotadas. Lo que hacemos, y lo que no." Newsreader 300 1.9rem -0.02em var(--ink) max 18ch, con subrayado latón 1.5px width 48px bajo H2 que crece 240ms al entrar. Intro cols 1–7: "Solo estas cuatro materias. Materias acotadas = criterio, no catálogo infinito. Si tu caso no calza, te derivamos con honestidad." Public Sans 400 1.02rem/1.65 var(--muted) max 42ch.
Grilla 2×2: cols 1–6 y 7–12 por fila, gap 1px var(--linea) (filete noche, no sombra). Cada materia card nocturna: bg #152433, border 1px var(--linea) 0 radius, padding 28px 24px. Height auto min 220px.
4 materias literales:
- **Penal** — kicker "01 — PENAL" accent-2 0.72rem + H3 "Defensa penal" Newsreader 400 1.25rem var(--ink) + bajada "Querellas, defensas, medidas cautelares, recursos. Urgencia 24/7." Public Sans 400 0.95rem/1.6 var(--muted) + "Cuándo nos llamas:" caption 0.70rem var(--accent) uppercase + bullets "· Detención / control de detención hoy · Citación Fiscalía · Querella en contra" Public Sans 400 0.88rem var(--muted) + filete 1px var(--linea) arriba de bullets.
- **Familia crítica** — "02 — FAMILIA" + "Divorcio y cuidado personal" + "Divorcio mutuo/contencioso, pensión, relación directa y regular. Sin prometer resultados." + bullets "· Divorcio con o sin acuerdo · Pensión de alimentos · Cuidado personal / RDR"
- **Civil patrimonial** — "03 — CIVIL" + "Juicios civiles y cobranzas" + "Contratos, indemnizaciones, herencias, posesiones efectivas. Patrimonio con papel." + bullets "· Herencia / posesión efectiva · Incumplimiento de contrato · Cobranza judicial"
- **Tributario** — "04 — TRIBUTARIO" + "Defensa tributaria y empresa" + "Fiscalizaciones SII, reclamos, planificación. Honorario mensual empresa." + bullets "· Citación / liquidación SII · Reclamo tributario · Asesoría mensual desde $320.000/mes"
Cada card hover: bg #1A2E40 (noche hover) 180ms, border var(--accent) 180ms, H3 color var(--accent) 180ms, sin elevación ni sombra. PROHIBIDO iconos gigantes; solo numeración y filete.
Motion: cada card entra fade+translate 12px 280ms secuencial 60ms entre cards (no 120ms global), subrayado H2 240ms. Hover 180ms seco.
Responsive 360px: grilla 1 columna (stack), padding cards 20px, H2 1.6rem.

### 4.4 #como-partimos — 02 / Cómo partimos (protocolo nocturno)
Composición: grid 12 col, bg #152433 (panel nocturno secundario) con filete superior 1px var(--linea), padding y 80px. Título cols 1–12 same kicker "02 / CÓMO PARTIMOS" var(--accent) + H2 "Sabes qué pasa mañana a las 9:00." Newsreader 300 1.9rem var(--ink). Sub "Viabilidad en la primera reunión. Diagnóstico en 24–48h. Estrategia por escrito." Public Sans 400 0.98rem var(--muted) max 40ch.
Pasos numerados 01–03: layout cols 1–4, 5–8, 9–12 (3 columnas desktop, border-right 1px var(--linea) entre pasos). Cada paso: número Newsreader 300 2.4rem -0.03em var(--accent-2) con filete 1px var(--linea) bajo número width 32px, H3 "01 — Primera reunión" Public Sans 600 0.95rem var(--ink) margin-top 12px, p "45 min. Traes: cédula, antecedentes, documentos clave. Te decimos si hay caso, cuánto cuesta y qué plazo es realista. Si no hay caso, no avanzas." Public Sans 400 0.92rem/1.65 var(--muted), y "Entrega:" caption 0.70rem var(--accent) uppercase + "Diagnóstico verbal + presupuesto por escrito en 24h" Public Sans 500 0.88rem var(--ink). Pasos 02 y 03 literales:
- 02 — Diagnóstico "24–48h. Informe de viabilidad, estrategia, etapas y honorario cerrado por etapa. Sin letra chica." Entrega: "Minuta escrita + honorario por escrito"
- 03 — Estrategia "Escrito, audiencia, seguimiento. El mismo abogado de principio a fin. Actualización quincenal." Entrega: "Escrito + agenda + WhatsApp directo"
Hover paso: número var(--accent) 180ms, filete accent 180ms.
Motion: steps entran fade 280ms stagger 80ms, filete crece 240ms por paso. Todo [0.22,1,0.36,1].
Responsive 360px: pasos stack vertical (cols 1–12 c/u), border-right → border-bottom 1px var(--linea), padding y 24px por paso.

### 4.5 #honorarios — 03 / Honorarios (tabla nocturna densa, CORE de conversión)
Composición: grid 12 col, bg #0F1A24 (vuelve a noche base), padding y 80px. Título cols 1–12: kicker "03 / HONORARIOS" var(--accent) + H2 "Honorarios por escrito, desde." Newsreader 300 1.9rem var(--ink) + sub "Valores referenciales en CLP. El valor final se fija por escrito tras reunión. Facilidades en cuotas." Public Sans 400 0.92rem var(--muted) max 42ch.
Tabla editorial nocturna: cols 2–11 centrada (gutter 24px), max 760px. No cards SaaS. Estructura filas con filete 1px var(--linea), padding vertical 16–18px, layout fila: label izq + precio der tabular. Header tabla: "SERVICIO" caption 0.70rem var(--accent) uppercase tracking 0.08em cols 1–7, "DESDE" caption same cols 8–12 right-aligned.
Filas literales (builder NO inventa otros):
| Servicio (Public Sans 500 0.98rem var(--ink)) | Precio (Newsreader 400 1.05rem tabular var(--accent) right) | Nota hover reveal |
|---|---|---|
| Consulta inicial (45 min) | $45.000 | Incluye diagnóstico verbal y presupuesto por escrito |
| Asesoría penal / familia (viabilidad) | desde $150.000 | Informe + estrategia escrita |
| Divorcio de común acuerdo | desde $380.000 | Incluye acuerdo completo y tramitación |
| Divorcio contencioso | desde $820.000 | Etapas: demanda, prueba, sentencia |
| Juicio laboral | desde $750.000 | Demanda, comparendo, juicio |
| Defensa penal | desde $950.000 | Querella/defensa, cautelares, juicio |
| Juicio civil patrimonial | desde $600.000 | Demanda + prueba + sentencia |
| Honorario mensual empresa | desde $320.000/mes | Asesoría tributaria/laboral continua |
Cada fila hover: bg #152433 160ms, filete var(--accent) 160ms, precio color var(--ink) 160ms, revela nota hover en muted 0.82rem debajo label (opacity 0→1 160ms, sin desplazar fila). PROHIBIDO badge "popular", toggle mensual/anual, decoración pricing SaaS.
Nota al pie tabla (full width bajo filete doble 2px var(--linea)): "Valores referenciales según complejidad y jurisdicción; honorario final se fija por escrito tras reunión. Facilidades de pago en cuotas. Sin sorpresas." Public Sans 400 0.78rem/1.6 var(--muted) max 48ch, con punto state #8A9A78 antes.
Motion: filas no animan al entrar (densidad estática, confianza); solo hover 160ms. H2 subrayado 240ms.
Responsive 360px: tabla cols 1–12, label 0.92rem, precio 0.98rem, padding 14px 0, nota hover siempre visible debajo label (no hover en mobile).

### 4.6 #urgencia — 04 / Urgencia (bloque crisis nocturno, imagen fachada)
Composición: grid 12 col, bg #152433 panel noche, padding y 80px, con imagen fachada.jpg cols 7–12 (3:4 vertical) y texto cols 1–6. En desktop: texto izq, imagen der con aire. Border top 1px var(--linea). Título kicker "04 / URGENCIA" var(--accent) + H2 "¿Detención, medida cautelar o VIF hoy?" Newsreader 300 1.85rem var(--ink) leading 1.05. P "Si es penal o familia crítica, responde hoy dentro del horario extendido. No es call center: es el abogado que tomará tu causa." Public Sans 400 1.02rem/1.65 var(--muted) max 34ch.
Elemento crisis: teléfono grande "+56 9 8765 1234" Newsreader 300 clamp 1.8rem-2.4rem -0.02em var(--ink) con icono 20px var(--accent), href tel:. Debajo: "Respuesta inicial 45 min RM · Lun–Vie 9:00–18:30 · Urgencias 24/7" Public Sans 500 0.88rem var(--muted), con dot state #8A9A78 8px + "Disponible hoy" Public Sans 600 0.82rem var(--state). Botón "Llamar ahora" bg var(--accent) #C9A86A color #0F1A24 600 0.92rem padding 14px 28px, margin-top 18px. Secundario "Escribir por WhatsApp" ghost border var(--linea) color var(--ink) padding 14px 28px, gap 12px.
Qué decir al llamar (banda bajo teléfono, bg #0F1A24 border 1px var(--linea) padding 16px): "Di: nombre, comuna, materia (penal/familia/civil) y qué pasó hoy. Si hay detención, indica comisaría." Public Sans 400 0.88rem/1.6 var(--muted), caption "Qué decir" 0.70rem var(--accent) uppercase arriba.
Imagen fachada.jpg (3:4, 0.75) cols 7–12: height 520px desktop object-cover, border 1px var(--linea) 0 radius, sin overlay oscuro (noche ya es oscura; no oscurecer más). Alt: "Patio interior de oficina jurídica chilena clásica en penumbra nocturna, muro piedra clara y puerta madera oscura, sin personas ni letrero legible".
Motion: H2 subrayado 240ms, teléfono pulse sutil? NO, solo hover color accent 180ms. Imagen entra fade 380ms.
Responsive 360px: texto cols 1–12 arriba, imagen abajo 16:9 crop (height 240px), teléfono 1.8rem, botones full width stacked.

### 4.7 FOOTER + #reserva (formulario mínimo noche)
Composición: grid 12 col, bg #0F1A24 con border-top 1px var(--linea), padding y 64px. Layout: form #reserva cols 1–7, datos RIVERA cols 8–12. Título form kicker "RESERVA" var(--accent) 0.72rem + H2 "Agendar reunión" Newsreader 300 1.6rem var(--ink) + sub "Respuesta en 24h hábiles. Si es urgencia, llama directo." Public Sans 400 0.92rem var(--muted).
Form mínimo (sin pedir RUT completo): inputs bg #152433 border 1px var(--linea) color var(--ink) placeholder var(--muted), padding 14px 16px, font Public Sans 400 0.92rem, 0 radius, focus ring 2px var(--accent). Campos: Nombre (text) * , Teléfono (tel) * , Materia (select: Penal / Familia / Civil / Tributario / Otro) * , Mensaje (textarea 4 rows) . Botón submit "Solicitar reunión" bg var(--accent) #C9A86A color #0F1A24 600 0.92rem padding 14px 32px full width desktop? No, width auto 220px. Nota privacidad: "Al enviar aceptas contacto por teléfono/WhatsApp. No compartimos tus datos." Public Sans 400 0.75rem var(--muted) max 36ch.
Col datos RIVERA cols 8–12: Logo RIVERA Newsreader 300 1.25rem var(--ink) + "Estudio Jurídico" Public Sans 500 0.82rem var(--accent) + separador 1px var(--linea) + contacto "+56 9 8765 1234 · contacto@rivera.cl" Public Sans 400 0.88rem var(--ink) tabular + "Las Condes, Santiago · Presencial y online" Public Sans 400 0.88rem var(--muted) + horario "Lun–Vie 9:00–18:30 · Urgencias 24/7 (45 min RM)" Public Sans 400 0.82rem var(--muted) + footer legal "RUT 76.123.456-7 · © RIVERA" caption 0.70rem var(--muted) margin-top 24px.
Motion: form entra fade 300ms, inputs focus border var(--accent) 160ms.
Responsive 360px: form cols 1–12 arriba, datos abajo, inputs 16px font (evita zoom iOS), botón full width.

## 5. MEDIA (nombres canónicos + ratios + qué muestra cada foto + en qué sección vive)

Nombres y ratios exactos (Flow ratios válidos 16:9·4:3·1:1·3:4·9:16):
- `biblioteca.jpg` 4:3 (1.333) → vive en #materias como fondo sutil? No, NO como hero a sangrado; vive como header de #materias (banda 4:3 recortada a 220px height sobre grilla) — lomos alineados.
- `mesa.jpg` 16:9 (1.778) → vive en hero? NO sangrado; vive como textura sutil bajo banda G12? O como imagen de apoyo en #como-partimos? Definición: NO hero a sangrado; vive en #como-partimos cols 1–12 como banda 16:9 height 180px entre pasos y tabla (luz tenue editorial).
- `expediente.jpg` 1:1 (1.0) → vive en #honorarios como bodegón cuadrado 1:1 al lado de la nota al pie (cols 2–5) o como detalle sobre la tabla en desktop (220×220px), borde 1px var(--linea).
- `fachada.jpg` 3:4 (0.75) → vive en #urgencia cols 7–12 vertical 520px (definido arriba).

Si falta una imagen: hueco con bg #152433 + filete 1px var(--linea) + caption en muted "Imagen no disponible — RIVERA nocturno" + reporte en MEDIA-REGISTRO sin regenerar con Pillow. Builder NO genera imágenes (llegan de Flow); sin imagen el layout no colapsa (altura reservada).

Dirección de luz coherente lote: misma noche tenue editorial, luz de lámpara cálida puntual 3200K + relleno frío mínimo, negros profundos pero no puros, saturación contenida, grading con tinta noche #0F1A24 dominante, latón #C9A86A solo en reflejo de herraje/lomo.

## 6. QA FINAL DEL BUILDER (build 0 errores + qa-anticlon + criterio "apaga el acento" + checklist visual)

- Build: `npm run propuestas:build -- abogado-oscuro-premium` 0 errores, 0 warnings de contraste. Verificar que :root noche se aplica 100% viewport (ninguna sección hueso #F9F6F0 colada de abogado-claro).
- qa-anticlon: correr `python SitiosWeb/_leads/qa-anticlon.py --slug abogado-oscuro-premium` — debe pasar (<35% CSS idéntico vs abogado-claro/b-claro, <25% vs demo). Si falla por T1 vs T4 idéntico, revisar que Newsreader es único aquí.
- Criterio "apaga el acento": cambia --accent #C9A86A y --accent-2 #9A7B5E a gris #6B7686. Si el sitio SIGUE pareciendo un estudio jurídico nocturno serio (expediente legible en noche, materias acotadas, honorarios por escrito, teléfono urgencia visible), pasa. Si parece "landing negra genérica con texto gris", falla: vuelve al ADN (tipografía, filetes, ritmo).
- Checklist visual nocturno:
  [ ] acento latón ≤5.8% por viewport (inspección visual: solo CTA, índice 01–04, subrayados, precio; nunca fondo latón grande)
  [ ] sticky solo móvil (header desktop sticky sí, pero CTA sticky móvil solo tras 60vh; no doble sticky)
  [ ] filetes 1px var(--linea) #243449 visibles en noche (no invisibles por #000 sobre #0F1A24)
  [ ] radios 0 en todo (inspeccionar botones, inputs, imágenes — 0px exacto)
  [ ] contraste AA: --ink #EDE6DA sobre --bg #0F1A24 y #152433 verificado con axe; --muted #8FA0B8 sobre ambos ≥4.5:1
  [ ] hover filas #honorarios 160ms bg #152433 visible en noche (no hover blanco sobre hueso colado)
  [ ] 360px: hero H1 2 líneas, índice 01–04 horizontal scrolleable sin overflow, tabla #honorarios sin scroll horizontal, teléfono urgencia no desborda
  [ ] alt descriptivos en las 4 imágenes en español Chile, sin "imagen de…"
  [ ] ::selection hueso sobre latón visible, focus-visible ring latón 2px en noche
  [ ] sin personas/caras/manos/logos/texto en imágenes (auditar cada jpg)
  [ ] sin ids v3 (grep -r "#inicio|#cifras|#catalogo|#precios|#metodo|#galeria|#faq" debe dar 0)
  [ ] tipografía solo Newsreader+Public Sans (grep "Libre Baskerville|Source Sans|Inter|Poppins" → 0)

PROHIBIDO: frases "estructura similar a", "componentes a criterio", "diseño premium moderno", delegar textos al builder, arco v3 de ids, tipografías prohibidas, degradados, sombras difusas, orbes, badges, marquee, planes SaaS.

Calidad > velocidad: esta propuesta vende rediseños nocturnos a estudios jurídicos chilenos que atienden crisis. Si parece plantilla clara pintada de negro, no sirve.
