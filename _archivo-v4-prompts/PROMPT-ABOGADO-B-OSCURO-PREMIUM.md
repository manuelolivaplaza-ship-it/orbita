# SUPER-PROMPT v4.5 — ABOGADO B · "VALPARAISO OSCURO PREMIUM" · anti-homogeneidad — BLUEPRINT DE MONTAJE

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL: 288 sitios abogado grado B capturados y agrupados por píxeles (no por CSS).
> Grupo visual único para esta web: **Oscuro / premium minimal (real) — 86 sitios (29,9% del rubro, nicho boutique nocturno)**, familias px neutro + negro/profundo, % oscuro típico 47–97% (mediana 66%), colores top #000000 / #202020 / #002020 / #002040 / #e0e0e0 con acento dorado/latón/burdeos contenido (<5% área). No es claro masivo (161) ni azul/cian (15+8) ni teal (7): es el abogado nocturno que cobra por autoridad y defensa patrimonial/penal, no por precio gancho. Referentes verificados del CRM con buyScore real: **Grace Méndez Montes — Abogada Penalista (mendezabogados.cl · Las Condes · 74 · 66% oscuro)** — negro editorial con hueso, **ARX Abogados (arxabogados.cl · Las Condes · 74 · 61% oscuro)** — azul noche #002040 profundo, **Estudio Centro Sur (estudiocentrosur.cl · Las Condes · 74 · 78% oscuro)** — noche absoluta #000020 con hueso, **CZ Abogados (czabogados.cl · Providencia · 74 · 64% oscuro)** — neutro nocturno contenido, **Korzenszky Grez Abogados (korzenszkyabogados.com · Vitacura · 72 · 47% oscuro)** — tinta #200020 con hueso, **Abogaley — Bufete Santiago (abogaley.cl · Santiago · 71 · 85% oscuro)** — negro carbón editorial, **Ascende (ascende.cl · Huechuraba · 71 · 82%)**, **Ralef Abogados (ralefabogados.cl · Puente Alto · 71 · 51%)**, **Labrin Abogadas (labrinabogada.cl · Viña · 71 · 56% tinta #002040)**. Cierran: Albornoz y Cía. (73, 57% #000000), Estudio Aguirre y Greene (71, 64% #202020), Abogado Alfredo Robles (71, 75% #000000), Caro & Sebastiani (71, 51% #000020). Internacional: Skadden/Kirkland en dark mode, FerradaNehme Chile noche — autoridad nocturna sin neón. Objetivo de precio percibido: USD 22.000–32.000. Este prompt es v4.5 ANTI-HOMOGENEIDAD: debe parecer hecho por un estudio especializado en DERECHO CHILENO NOCTURNO PREMIUM (penal, laboral complejo, tributario, patrimonio), no una landing clara invertida a oscuro.

---

## 0) REGLAS GLOBALES (inviolables — una violación = rechazado)

- **Stack congelado:** React 19 + TypeScript + Vite 6, CSS PURO en `src/styles.css` (variables, grid, clamp, filetes). Sin Tailwind, sin UI kits, sin styled-components, sin shadcn. Única dependencia extra permitida: `motion` (framer-motion). NO tocar `package.json` ni `vite.config.ts` salvo necesidad crítica documentada.
- **Aislamiento:** PROHIBIDO leer, listar o copiar archivos de cualquier otra carpeta de `propuestas/` (son de otros clientes y su CSS está prohibido como fuente). Se parte SOLO de `propuestas/_plantilla` virgen (reset mínimo + skip-link + focus-visible + reduced-motion). Si te "acuerdas" del CSS de otra propuesta, esa memoria no se usa.
- **Radios 0 en TODO:** `--radius: 0px`. Cero `border-radius`, cero `rounded`, cero `pill`. Botones, inputs, cards, imágenes, filetes: esquina viva 90°. No hay excepción para CTA ni badges.
- **Filetes vs sombras:** PROHIBIDO `box-shadow`, `drop-shadow`, `backdrop-blur`, `glass`, `glow`, `gradient` decorativo. Toda separación es `border: 1px solid var(--linea)` o `border-top: 1px solid var(--linea)` al 12–18% hueso sobre noche. Cero sombras difusas.
- **Contraste AA obligatorio:** Texto principal hueso #EDE8E0 sobre bg noche #0B1220 ≥ 13:1; secundario muted #8B95A8 sobre bg noche ≥ 4.6:1 verificado; tinta #0B1220 sobre hueso #EDE8E0 (bloques respiro) ≥ 15:1. Nunca gris medio #888 sobre noche. Verificar con herramienta real, no a ojo.
- **Focus-visible:** `*:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }` — anillo champán #C8A67A. `*:focus:not(:focus-visible) { outline: none; }`. Skip-link visible al tabular.
- **::selection exacta:** `::selection { background: var(--accent); color: var(--bg); }` — champán sobre noche. `::-moz-selection` idem.
- **Tipografías permitidas + prohibidas:** SOLO `Libre Baskerville` (display serif) + `Source Sans 3` (texto/tabla). PROHIBIDO Inter, Geist, Space Grotesk, Poppins, Montserrat, Roboto, Open Sans, Lato, Arial, system-ui, Helvetica, Sora, Manrope. Cargar vía Google Fonts con `display=swap` y `preload` solo para Libre Baskerville 400/700 y Source Sans 3 400/600.
- **Tabular-nums:** Todos los precios, honorarios, cifras, teléfonos, RUT, años y numeración 01–04 en `font-variant-numeric: tabular-nums lining-nums; font-feature-settings: "tnum" 1, "lnum" 1;` Tracking 0 en números.
- **Motion policy:** `prefers-reduced-motion: reduce` → `* { animation: none !important; transition: none !important; scroll-behavior: auto !important; }`. Sin parallax, sin scroll-jacking, sin orbes flotantes, sin stagger global 0.12s como firma única. Cada transición tiene ms y easing declarado POR SECCIÓN (ver §4). Máximo 240ms por interacción.
- **Idioma:** Español de Chile 100% (incluido `alt` de imágenes, `aria-label`, placeholders). Sin anglicismos SaaS ("pricing", "features").

---

## 1) DESIGN TOKENS EXACTOS — bloque CSS :root copiable

Pega este bloque LITERAL al inicio de `src/styles.css`. Es la única fuente de color/espaciado. No inventar hex fuera de aquí. No usar #000/#FFF puros nunca.

```css
:root {
  /* Noche jurídica — 3 roles + soporte */
  --bg: #0B1220;              /* noche azul petróleo profundo — fondo base, nunca #000 */
  --bg-2: #131E32;            /* superficie elevada 1 (header, cards noche) */
  --bg-3: #1A2744;            /* superficie elevada 2 (hover fila, acordeón abierto) */
  --ink: #EDE8E0;             /* hueso cálido — texto principal sobre noche, nunca #FFF */
  --ink-2: #EDE8E0;           /* alias para bloques respiro (hueso ocupa --bg allí) */
  --muted: #8B95A8;            /* gris azulado — secundario sobre noche (AA ≥4.6:1) */
  --muted-2: #A8B0C2;          /* muted claro para captions sobre bg-2 */
  --linea: #1E2A44;            /* filete 1px noche — 12–15% hueso, separa sin sombra */
  --linea-strong: #2A3A5E;     /* filete hover/acordeón abierto */
  --accent: #C8A67A;           /* champán / latón desaturado — CTA principal, kickers, subrayado, numeración 01–04, links. <5% área */
  --accent-ink: #0B1220;       /* texto sobre accent (botón champán) */
  --accent-2: #9B2F2B;         /* burdeos noche contenido — honorario destacado, urgencia, subrayado crítico. <5% área */
  --state: #C49A3F;            /* ámbar cálido — "respuesta hoy / cupo / agenda abierta" */
  --hueso-bloque: #EDE8E0;     /* para bloques respiro claros intercalados (#como-partimos y parte de #materias) */
  --hueso-ink: #0B1220;        /* tinta sobre hueso-bloque */
  --hueso-linea: #D6CFBF;      /* filete cálido sobre hueso-bloque */
  --hueso-muted: #6B7280;      /* muted sobre hueso */

  /* Tipografía */
  --display: "Libre Baskerville", Georgia, serif;
  --text: "Source Sans 3", system-ui, -apple-system, sans-serif;

  /* Radios / sombras / motion */
  --radius: 0px;
  --shadow: none;
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-inout: cubic-bezier(0.4, 0, 0.2, 1);

  /* Layout */
  --max: 1200px;
  --pad-x: clamp(16px, 4vw, 40px);
  --header-h: 64px;
}
```

**Regla de área por rol (QA "apaga el acento"):**
- `--bg` / `--bg-2` / `--bg-3` = 85–90% píxeles. `--ink` = texto. `--accent` (champán #C8A67A) y `--accent-2` (burdeos #9B2F2B) NUNCA superan 5% del viewport cada uno: solo CTA sólido, kicker 11px, numeración 01–04, subrayado 1px bajo H2 activo, precio destacado en #honorarios y firma de urgencia. `--state` solo en micro-etiqueta "Respuesta hoy" / "Agenda abierta". Si apagas `--accent` (cámbialo a gris #888) el sitio SIGUE pareciendo un estudio jurídico nocturno premium chileno — expediente, tabla honorarios, tipografía, filetes — no una landing genérica.

---

## 2) TIPOGRAFÍA EXACTA — TABLA por elemento

| Elemento | Familia | Peso | Tamaño (clamp) | Line-height | Letter-spacing | Color | Notas |
|---|---|---|---|---|---|---|---|
| **H1 hero** | Libre Baskerville | 700 | `clamp(2.4rem, 5.8vw, 4.4rem)` | 0.92 | -0.03em | var(--ink) | 2 líneas máx, balance, nunca widows. |
| **H2 sección** | Libre Baskerville | 700 | `clamp(1.7rem, 3.2vw, 2.2rem)` | 1.05 | -0.02em | var(--ink) / var(--hueso-ink) en bloque hueso | Subrayado tinta 1px animado 240ms al entrar (ver motion). |
| **H3 materia** | Libre Baskerville | 700 | 1.15rem | 1.2 | -0.015em | var(--ink) | Sin uppercase. |
| **Kicker / eyebrow** | Source Sans 3 | 600 | 0.70rem (11px) | 1.4 | 0.14em | var(--accent) / var(--accent-2) en urgencia | Uppercase, nunca más de 2 por viewport. |
| **Numeración 01–04** | Source Sans 3 | 600 | 0.72rem | 1 | 0.10em | var(--accent) | Tabular-nums, filete izquierda 1px var(--linea) en desktop. |
| **Cuerpo** | Source Sans 3 | 400 | 1.06rem | 1.65 | 0 | var(--muted) / var(--hueso-muted) en hueso | Max 62ch, `text-wrap: pretty`. |
| **Cuerpo strong** | Source Sans 3 | 600 | 1.06rem | 1.65 | 0 | var(--ink) | Solo para "qué incluye / qué NO incluye". |
| **Fila honorario — nombre** | Source Sans 3 | 600 | 0.98rem | 1.4 | 0 | var(--ink) | Truncate a 1 línea desktop. |
| **Fila honorario — precio** | Libre Baskerville | 700 | 1.05rem | 1 | 0 | var(--ink) | Tabular-nums lining, `text-align: right`, burdeos #9B2F2B solo en "desde" más consultado (1 fila máx por viewport). |
| **Fila honorario — nota incluye** | Source Sans 3 | 400 | 0.82rem | 1.5 | 0 | var(--muted) | Aparece en hover/focus 160ms (ver §4). |
| **Caption / filete legal** | Source Sans 3 | 400 | 0.70rem (11px) | 1.5 | 0.04em | var(--muted-2) | Para jurisdicción, "valores referenciales", RUT. |
| **Teléfono header** | Source Sans 3 | 600 | 0.92rem | 1 | 0 | var(--ink) | Tabular-nums, `href="tel:+569..."`, nunca gris. |
| **CTA primario** | Source Sans 3 | 600 | 0.92rem | 1 | 0.02em | var(--accent-ink) sobre var(--accent) | Padding 14px 22px, border 1px solid var(--accent), hover: fondo transparent + texto var(--accent) 160ms. |
| **CTA secundario** | Source Sans 3 | 600 | 0.92rem | 1 | 0.02em | var(--ink) | Border 1px solid var(--linea-strong), hover border var(--accent) 160ms. |

**Prohibido:** Inter/Geist/Space Grotesk/Poppins/Montserrat/Roboto en cualquier peso. Números SIEMPRE tabular-nums (verificar en DevTools → Computed → font-variant-numeric).

---

## 3) ESTRUCTURA DE PÁGINA — orden real + anchor nav

Orden NO negociable (gramática G12 Expediente trust-first nocturna + G1 índice apoyo). Cada id es ancla del nav y debe existir literal:

```
1  header (sticky, 64px) — nav anclas: #materias · #como-partimos · #honorarios · #urgencia + teléfono + CTA "Agendar consulta"
2  #hero — expediente nocturno (G12) — hero editorial noche con índice 01–04 lateral + H1 VALPARAISO + subhead + 2 CTAs + micro-copy honesto + banda G12 de confianza (prueba) + imagen mesa.jpg
3  #materias — 01 / Materias (expediente) — 4 materias del estudio en grilla 2×2 + bloque hueso intercalado parcial
4  #como-partimos — 02 / Cómo partimos — BLOQUE RESPIRO CLARO (hueso #EDE8E0) con pasos 01→03 + qué traer + plazos 24–48h + entrega
5  #honorarios — 03 / Honorarios — tabla editorial densa nocturna con precio desde tabular + hover revela + nota honesta + imagen expediente.jpg
6  #urgencia — 04 / Urgencia — bloque nocturno con teléfono gigante + protocolo qué decir al llamar + tiempo respuesta + imagen fachada.jpg + biblioteca.jpg como textura sutil
7  #reserva — formulario mínimo + datos contacto + horario (compartible, pero con copy jurídico)
8  footer — RUT, registro, jurisdicción Valparaíso/Santiago, marca VALPARAISO, links legales
```

**Nav desktop:** horizontal, 4 anclas + separador filete 1px vertical 16px + teléfono tabular + CTA champán. Índice lateral decorativo 01–04 vertical a la derecha del hero (visible solo ≥1100px, `position: absolute; right: 0; top: 22vh`).

**Sticky móvil:** header 64px siempre; CTA "Agendar consulta" sticky bottom discreto que APARECE tras scrollear 60% del hero (no tapa hero), altura 52px, fondo var(--accent) con texto noche, `transform: translateY(100%)` → `translateY(0)` 200ms var(--ease-out).

**Max-width:** 1200px centrado, `padding-inline: var(--pad-x)`, grid 12 columnas (`display: grid; grid-template-columns: repeat(12, 1fr); gap: 16px`).

---

## 4) SECCIÓN POR SECCIÓN — EL CORAZÓN (60% del documento)

### 4.1 HEADER (sticky, noche)

- **Composición:** grid 12 cols. Logo VALPARAISO (cols 1–3, Libre Baskerville 700 1.05rem tracking -0.02em, color var(--ink), sin isotipo). Nav (cols 4–8, Source Sans 3 0.82rem 600 uppercase tracking 0.08em, links var(--muted) → hover var(--ink) 160ms). Teléfono + CTA (cols 9–12, justify-end, gap 16px). Altura 64px, `border-bottom: 1px solid var(--linea)`, `background: rgba(11,18,32,0.92); backdrop-filter: none` (sin blur), `position: sticky; top: 0; z-index: 40`.
- **Textos literales nav:** "Materias" → #materias · "Cómo partimos" → #como-partimos · "Honorarios" → #honorarios · "Urgencia" → #urgencia
- **Teléfono:** `+56 9 8234 5678` (tabular, href tel, color var(--ink), hover var(--accent) 160ms)
- **CTA header desktop:** "Agendar consulta" — fondo var(--accent) texto var(--accent-ink) 14×22px, hover invertido 160ms ease-inout.
- **Motion:** header hide-on-scroll-down / show-on-scroll-up 200ms var(--ease-out) (solo desktop, con `transform: translateY`). Respeta reduced-motion → sin hide.
- **Responsive 360px:** nav colapsa a hamburguesa (3 líneas 18×2px var(--ink), gap 4px); teléfono se oculta (queda en sticky bottom); CTA header se oculta (queda sticky bottom). Logo cols 1–8.

### 4.2 HERO — #hero (expediente nocturno, G12 trust-first + G1 índice apoyo)

- **Composición 12 cols, height 88vh min (desktop), 72vh móvil.**
  - Col izquierda texto: cols 1–7, `padding: 88px 0 48px` desktop (respiración noche generosa). Col derecha imagen: cols 8–12, `aspect-ratio: 16/9` desktop, `3/4` móvil, `object-fit: cover`, `border: 1px solid var(--linea)`.
  - Índice lateral 01–04: `position: absolute; right: -8px; top: 22vh;` solo ≥1100px, vertical, gap 12px, numeración Source Sans 600 0.70rem var(--accent) + línea 1×24px var(--linea) entre números; número activo (`data-active="true"`) → var(--ink) + línea var(--accent) 200ms.
- **Kicker:** "ESTUDIO JURÍDICO · VALPARAÍSO — SANTIAGO · DESDE 2012" — Source Sans 600 0.70rem uppercase tracking 0.14em color var(--accent), margin-bottom 16px.
- **H1 literal (2 líneas, no cambiar):** "Defensa de alto estándar, a tu alcance." — Libre Baskerville 700 clamp(2.4rem,5.8vw,4.4rem) leading 0.92 tracking -0.03em color var(--ink), `text-wrap: balance`, max 18ch. Subrayado decorativo NO en H1; va en H2 de secciones.
- **Subhead literal:** "Te decimos si tu causa es viable antes de cobrar. Materias acotadas, presupuesto por escrito en etapas y el mismo abogado de principio a fin." — Source Sans 400 1.12rem/1.6 var(--muted), max 48ch, margin-top 18px.
- **CTAs (gap 12px, margin-top 28px):**
  - Primario: "Agendar consulta" → #reserva, fondo var(--accent) texto noche, 44px alto.
  - Secundario: "Ver honorarios" → #honorarios, outline var(--linea-strong), texto var(--ink), hover border var(--accent) 160ms.
- **Micro-copy honesto bajo CTAs (caption 11px):** "Si tu causa no es viable, te lo decimos en la primera reunión. No iniciamos sin tu aprobación por escrito." — var(--muted-2) con `border-left: 1px solid var(--accent)` padding-left 10px.
- **Banda G12 de confianza bajo hero (banda noche secundaria, no popup):** grid 12 cols, `background: var(--bg-2); border: 1px solid var(--linea); border-left: 2px solid var(--accent);` padding 14px 18px, cols 1–12, 4 celdas: "RUT 76.123.456-7" · "+14 años en Valparaíso" · "Registro Colegio de Abogados" · "Respuesta inicial en 24h hábiles" — Source Sans 600 0.78rem var(--ink) label 0.68rem var(--muted) uppercase tracking 0.08em encima del valor. Esta banda ES la prueba G12; no es opcional.
- **Imagen hero:** `mesa.jpg` 16:9 — mesa de reunión vacía noche, tablero roble oscuro con expediente hueso y lápiz alineado, luz lateral cálida contenida. `alt="Mesa de reunión vacía del estudio VALPARAISO en Valparaíso, expediente sobre tablero oscuro — luz lateral contenida"` — `object-position: center 45%`.
- **Precio visible sin scroll (disciplina G12):** badge discreto sobre imagen: "Consulta inicial $45.000 · Presupuesto por escrito" — fondo var(--bg-3) border 1px var(--linea-strong) color var(--ink) 0.76rem 600, padding 8px 12px, `position: absolute; bottom: 14px; left: 14px;`.
- **Motion hero:** H1 reveal por líneas `clip-path: inset(0 0 100% 0) → inset(0 0 0 0)` 520ms var(--ease-out) stagger 80ms por línea; subhead fade + translateY 14px 380ms 120ms delay; CTAs fade 300ms 240ms delay; índice lateral fade 400ms 400ms delay. Todo anulado en reduced-motion.
- **Responsive 360px:** cols 1–12 apiladas; H1 clamp baja a 2.1rem; imagen pasa arriba? NO — texto arriba, imagen abajo (orden natural), altura imagen 52vw, padding hero 48px top / 28px bottom; banda G12 pasa a 2×2 grid gap 10px; badge precio sobre imagen escala a 0.70rem.

### 4.3 #materias — 01 / Materias (expediente nocturno, parte en hueso)

- **Composición:** grid 12 cols. Header sección: kicker "01 — MATERIAS ACOTADAS" (var(--accent) 0.70rem tracking 0.14em) + H2 "Materias que sí llevamos. Sin prometer resultados." (Libre Baskerville 700 1.9rem) + bajada "Cuatro materias, equipo estable. Si no es nuestra materia, te derivamos con honestidad." (Source Sans 400 1.02rem var(--muted), 52ch). Filete 1px var(--linea) bajo header, margin 24px 0.
- **Grilla materias 2×2:**
  - Cada materia: `cols span 6` desktop (2×2), `cols span 12` móvil. `background: var(--bg-2); border: 1px solid var(--linea); border-top: 2px solid var(--accent);` padding 22px 20px, `min-height: 188px`, hover `border-color: var(--linea-strong); background: var(--bg-3);` 160ms.
  - Estructura interna: numeración lateral "01" var(--accent) 0.70rem + bullet filete vertical 1×28px var(--linea) a la izquierda (desktop). H3 + "qué incluye" (3 bullets 0.88rem var(--muted) con guion largo "—") + "qué NO incluye" (1 línea 0.80rem var(--muted-2) italic con prefijo "No incluye:").
- **Textos literales (4 materias, no inventar otras):**
  1. **Familia — Divorcio y pensión** — H3 "Familia" · incluye: "Divorcio mutuo acuerdo y contencioso, pensión de alimentos, cuidado personal, relación directa y regular" · NO incluye: "divorcios express sin cese de convivencia acreditado".
  2. **Laboral — Despido y tutela** — H3 "Laboral" · incluye: "Despido injustificado, autodespido, tutela laboral, accidentes y enfermedades profesionales, negociación colectiva" · NO incluye: "asesoría sindical permanente sin encargo".
  3. **Civil — Herencias y contratos** — H3 "Civil" · incluye: "Herencias y posesiones efectivas, particiones, contratos civiles, responsabilidad contractual, cobranza" · NO incluye: "regularización de títulos sin antecedentes completos".
  4. **Penal — Defensa patrimonio y delitos** — H3 "Penal" · incluye: "Delitos patrimoniales, económicos, lesiones, defensa en garantía y juicio oral, medidas cautelares" · NO incluye: "garantía de resultado ni rebaja de pena asegurada".
- **Detalle visual:** cada materia lleva caption inferior "Valparaíso · Santiago · Presencial y online" 11px var(--muted-2) + flecha "→" var(--accent) que se desplaza 4px en hover 160ms.
- **Bloque hueso intercalado (respiro):** última fila de la grilla (segunda fila en desktop) puede alternar a `background: var(--hueso-bloque); border-color: var(--hueso-linea);` con H3 var(--hueso-ink) y bullets var(--hueso-muted) para romper muro noche — OBLIGATORIO usar al menos 1 card hueso en esta sección (evita muro oscuro infinito). Texto hueso mantiene AA (tinta #0B1220 sobre hueso #EDE8E0).
- **Motion:** H2 subrayado 1px var(--accent) `scaleX(0)→1` 240ms var(--ease-out) al entrar en viewport (una sola vez, `transform-origin: left`). Cards stagger 80ms `fade + translateY 12px` 280ms, sin bounce. Hover fila 160ms.
- **Responsive 360px:** 1 columna, cards `span 12`, padding 18px 16px, numeración arriba horizontal con filete 24×1px debajo, no lateral.

### 4.4 #como-partimos — 02 / Cómo partimos — BLOQUE RESPIRO CLARO (hueso)

- **Composición:** ESTA SECCIÓN ES OBLIGATORIAMENTE CLARA (respiro). `background: var(--hueso-bloque);` full-bleed (`margin-inline: calc(-1 * var(--pad-x)); padding-inline: var(--pad-x);` si el max está centrado, o wrapper dedicado). `padding: 88px 0` desktop, `48px 0` móvil. `border-top: 1px solid var(--hueso-linea); border-bottom: 1px solid var(--hueso-linea);`. Todo texto en tinta var(--hueso-ink) / muted var(--hueso-muted) para AA.
- **Header:** kicker "02 — CÓMO PARTIMOS" var(--accent-2) burdeos 0.70rem tracking 0.14em (único uso de burdeos sobre hueso para diferenciar respiro) + H2 "Viabilidad, etapas y presupuesto por escrito. Sin letra chica." (Libre Baskerville 700 1.9rem var(--hueso-ink)) + bajada "En 45 minutos sabes si tienes caso, qué sigue y cuánto cuesta cada etapa." var(--hueso-muted).
- **Pasos 01→03 (grid 12 cols, 3 columnas desktop):**
  - Cada paso: `cols span 4` desktop, `span 12` móvil. `border: 1px solid var(--hueso-linea); background: #F5F0E8;` padding 20px 18px, `border-top: 2px solid var(--hueso-ink);` (tinta noche sobre hueso para autoridad), hover `border-top-color: var(--accent-2)` 160ms.
  - Número grande "01" Libre Baskerville 700 1.6rem var(--hueso-ink) con sub-número 11px var(--accent-2). Título paso Source Sans 600 0.98rem var(--hueso-ink). Cuerpo 0.92rem 1.6 var(--hueso-muted).
- **Textos literales pasos:**
  1. **01 — Reunión de 45 min** — "Trae: cédula, antecedentes del caso, documentos clave (contrato, demanda, liquidación, certificado de matrimonio/cese según materia). Te decimos viabilidad y riesgos en palabras simples."
  2. **02 — Estrategia y presupuesto** — "En 24–48h hábiles: estrategia escrita, etapas, plazos estimados y honorario por etapa en CLP/UF por escrito. Sin honorarios a convenir ocultos."
  3. **03 — Acompañamiento** — "El mismo abogado de principio a fin. Seguimiento quincenal + acceso a expediente digital. Si el plan cambia, te avisamos antes de seguir."
- **Banda de entrega (filete hueso, bajo pasos):** grid 3 cols con íconos tipográficos (no icono gigante): "① Documentos" · "② Plazos 24–48h" · "③ Expediente digital" — 0.82rem 600 var(--hueso-ink) + caption 0.76rem var(--hueso-muted). Filete 1px var(--hueso-linea) arriba, padding-top 16px.
- **Motion:** H2 subrayado burdeos 240ms var(--ease-out) sobre hueso; pasos stagger 90ms fade+translateY 12px 300ms; hover border-top 160ms.
- **Responsive 360px:** 1 columna, pasos `span 12` gap 12px, padding sección 48px 0, números 1.3rem.

### 4.5 #honorarios — 03 / Honorarios — tabla editorial densa nocturna

- **Composición:** grid 12 cols. Header: kicker "03 — HONORARIOS" var(--accent) + H2 "Honorarios por escrito, en etapas." + bajada "Valores referenciales según complejidad. El valor final se fija por escrito tras la primera reunión. Facilidades de pago en cuotas." (Source Sans 400 0.95rem var(--muted), filete 1px var(--linea) debajo, 20px margin). La tabla ES la sección; no hay cards SaaS.
- **Tabla densa (no <table> semántico opcional, pero estructura fila):** `cols 1–12`, `border: 1px solid var(--linea); background: var(--bg-2);` Filas `display: grid; grid-template-columns: 1fr auto; gap: 12px; padding: 14px 16px; border-bottom: 1px solid var(--linea);` última sin border. Hover fila: `background: var(--bg-3); border-color: var(--linea-strong);` 160ms. Fila destacada opcional (1 máx): `border-left: 2px solid var(--accent-2)` + precio en var(--accent-2) burdeos.
- **Textos literales filas (8 filas, precio CLP tabular derecha, nota incluye hover):**
  1. **Consulta inicial** — "$45.000" — hover revela: "45 min, viabilidad + ruta + presupuesto por escrito. Se abona al encargo."
  2. **Divorcio mutuo acuerdo** — "desde $450.000" — hover: "Incluye cese, demanda conjunta, acuerdo completo. Tasas y receptor no incluidos."
  3. **Divorcio contencioso** — "desde $890.000" — hover: "Demanda, contestación, prueba, audiencia. Por etapa."
  4. **Pensión de alimentos** — "desde $320.000" — hover: "Demanda o aumento/rebaja, mediación previa incluida."
  5. **Juicio laboral (despido/tutela)** — "desde $700.000" — hover: "Demanda, comparendo, prueba, alegato. Pacto cuota litis disponible."
  6. **Herencia / posesión efectiva** — "desde $520.000" — hover: "Inventario, posesión, inscripción. Complejidad según herederos/bienes."
  7. **Defensa penal** — "desde $950.000" — hover: "Garantía, cautelares, juicio oral. Urgencias 24/7 según disponibilidad."
  8. **Asesoría empresa (mensual)** — "desde $300.000/mes" — hover: "Contratos, laboral, compliance acotado. Horas incluidas por tramo."
  - Cada precio en Libre Baskerville 700 tabular 1.05rem var(--ink) derecha; hover revela línea secundaria 0.82rem var(--muted) con qué incluye + forma de pago (cuotas, transferencia, factura).
- **Nota honesta al pie (obligatoria, 11px):** "Valores referenciales según complejidad y antecedentes; el honorario final se confirma por escrito tras la primera reunión. Facilidades de pago en cuotas. Tasas judiciales, receptores y peritajes no incluidos salvo indicación expresa. Sin sorpresas." — var(--muted-2) con `border-left: 1px solid var(--accent)` padding-left 10px, margin-top 16px.
- **Banda de pago (3 celdas bajo nota):** "Transferencia / Tarjeta / Cuotas" + "Factura afecta" + "Convenio por escrito" — 0.76rem 600 var(--ink) + caption var(--muted-2).
- **Imagen asociada:** `expediente.jpg` 1:1 a la derecha en desktop (`cols 8–12`, `position: sticky; top: 88px;` max 420px), `border: 1px solid var(--linea);` en móvil pasa debajo de la tabla full-width. `alt="Expediente jurídico cerrado con cinta burdeos y sello seco sobre tablero oscuro — detalle macro"`
- **Motion:** filas highlight 160ms var(--ease-inout) (no stagger global); acordeón de "qué incluye" height 200ms si se expande; H2 subrayado 240ms.
- **Responsive 360px:** tabla full-width cols 1–12, padding fila 12px 12px, precio 0.98rem, gap 8px, imagen 1:1 debajo, sin sticky en móvil.

### 4.6 #urgencia — 04 / Urgencia — bloque nocturno patrimonial

- **Composición:** grid 12 cols, `padding: 72px 0` desktop, `40px 0` móvil, `background: var(--bg); border-top: 1px solid var(--linea);` La sección es noche profunda, no hueso (contrasta con #como-partimos claro).
- **Col texto:** cols 1–7. Kicker "04 — URGENCIA · PENAL / FAMILIA" var(--accent-2) burdeos 0.70rem tracking 0.14em + H2 "¿Audiencia cerca o medida urgente? Respondemos hoy." (Libre Baskerville 700 1.85rem var(--ink)) + bajada "Si hay detención, cautelar, VIF o plazo en curso, llámanos ahora. Te decimos qué hacer en los próximos 60 minutos." var(--muted) 1.02rem.
- **Teléfono gigante:** `+56 9 8234 5678` — Libre Baskerville 700 `clamp(1.6rem, 4vw, 2.4rem)` var(--ink) tabular, `href="tel:+56982345678"`, hover var(--accent) 160ms, con caption "Respuesta dentro del horario · Fuera de horario: mensaje + devolución a primera hora" 0.78rem var(--muted-2) debajo.
- **Protocolo "qué decir al llamar" (3 bullets con filete):** `border: 1px solid var(--linea); background: var(--bg-2);` padding 16px, gap 12px, 3 items: "1. Qué pasó y cuándo" · "2. Tribunal / RUC / RIT si existe" · "3. Qué documento tienes a mano" — 0.88rem var(--ink) 600 + caption var(--muted). Cada bullet con número 01–03 var(--accent) 0.70rem.
- **Horario + firma:** "Lun–Vie 9:00–18:30 · Sáb 10:00–13:00 (coordinación previa) · Valparaíso y Santiago, presencial y online" — 0.82rem var(--muted) + firma VALPARAISO "Materias acotadas · Presupuesto por escrito · El mismo abogado" — 0.76rem var(--accent) tracking 0.06em.
- **CTA urgencia:** "Llamar ahora" (tel:) fondo var(--accent-2) burdeos texto hueso #EDE8E0, 44px alto, hover fondo #7A2426 160ms + secundario "Escribir por WhatsApp" outline var(--linea-strong).
- **Col imagen:** cols 8–12, dos imágenes apiladas gap 12px: `fachada.jpg` 3:4 arriba (fachada noche valparaiso, piedra clara + puerta madera oscura, luz cálida puntual) + `biblioteca.jpg` 4:3 abajo (biblioteca jurídica nocturna, lomos burdeos/azul noche con filete champán). Ambas `border: 1px solid var(--linea);` `alt` descriptivos sin personas.
- **Motion:** H2 subrayado burdeos 240ms; teléfono pulse sutil solo si se usa, pero preferible `fade 200ms`; protocolo bullets stagger 70ms fade+translateY 10px 260ms.
- **Responsive 360px:** cols 1–12 apiladas, teléfono `clamp(1.4rem, 7vw, 1.9rem)`, protocolo 1 columna, imágenes una debajo de otra 16:9 recortadas, CTAs full-width stacked.

### 4.7 #reserva — formulario mínimo jurídico (compartible, pero con copy oficio)

- **Composición:** grid 12 cols, `padding: 64px 0` desktop, `32px 0` móvil, `background: var(--bg-2); border-top: 1px solid var(--linea); border-bottom: 1px solid var(--linea);` Col formulario cols 1–7, col datos cols 8–12.
- **Header:** kicker "AGENDA" var(--accent) 0.70rem + H2 "Agendar consulta" (Libre Baskerville 700 1.7rem var(--ink)) + "Respuesta en 24h hábiles. Si es urgencia, llama." var(--muted) 0.92rem.
- **Formulario (4 campos, sin RUT completo):** `display: grid; gap: 12px;`
  - Nombre (text, required, placeholder "Nombre y apellido") — `height 44px, background: var(--bg); border: 1px solid var(--linea); color: var(--ink); padding: 0 12px; font: Source Sans 400 0.95rem;` focus `border-color: var(--accent);` 160ms.
  - Teléfono (tel, required, placeholder "+56 9 — — — —") tabular.
  - Materia (select nativo estilizado, required, opciones: "Familia · Divorcio/pensión" / "Laboral · Despido/tutela" / "Civil · Herencia/contratos" / "Penal · Defensa" / "Empresa · Asesoría mensual" / "Otra — cuéntanos").
  - Mensaje (textarea 88px, placeholder "Cuéntanos en 2 líneas qué pasó y qué buscas lograr").
  - Submit: "Solicitar reserva — respuesta 24h" — fondo var(--accent) texto noche, 46px alto, full-width móvil, hover invertido 160ms. Nota bajo botón 11px var(--muted-2): "Al enviar aceptas contacto por teléfono/WhatsApp para coordinar. No guardamos tu RUT."
- **Col datos:** card `background: var(--bg); border: 1px solid var(--linea);` padding 18px, gap 14px:
  - Tel +56 9 8234 5678 tabular + mail contacto@valparaisojuridico.cl (mailto) + dirección "Valparaíso · Santiago · Atención presencial y online" + horario + RUT 76.123.456-7 + "Registro Colegio de Abogados" — 0.88rem var(--ink) label 0.70rem var(--muted) uppercase.
  - Micro-mapa estático decorativo (no iframe): div 16:9 con `background: var(--bg-3); border: 1px solid var(--linea);` y texto centrado "Valparaíso — Viña — Santiago" 0.76rem var(--muted) + pin tipográfico "·" var(--accent) (sin API externa).
- **Motion:** inputs focus 160ms border-color; submit hover 160ms; sección fade+translateY 12px 280ms al entrar.
- **Responsive 360px:** cols 1–12 apiladas, formulario arriba, datos abajo, submit full-width, altura inputs 42px.

### 4.8 FOOTER — expediente nocturno

- **Composición:** `background: var(--bg); border-top: 1px solid var(--linea);` padding 32px 0 24px, grid 12 cols.
  - Col 1–4: marca VALPARAISO — Estudio Jurídico (Libre Baskerville 700 1.0rem var(--ink)) + claim "Defensa de alto estándar, a tu alcance." 0.88rem var(--muted) + RUT + registro.
  - Col 5–8: nav footer "Materias · Cómo partimos · Honorarios · Urgencia" 0.82rem var(--muted) → hover var(--ink) 160ms.
  - Col 9–12: jurisdicción "Valparaíso · Viña del Mar · Santiago · Online todo Chile" + horario + "© 2026 VALPARAISO — Estudio Jurídico. Jurisdicción: Chile. Materias acotadas." 11px var(--muted-2) + `border-top: 1px solid var(--linea)` margin-top 16px para nota legal.
- **Motion:** sin motion, solo hover links 160ms.
- **Responsive 360px:** 1 columna, cols 1–12 stacked, nav footer en 2×2, marca arriba.

---

## 5) MEDIA — nombres canónicos + ratios + qué muestra + en qué sección vive

> El builder NO genera imágenes. Llegan de Google Flow a `public/media/`. Si falta una, deja hueco con `background: var(--bg-3); border: 1px solid var(--linea);` y reporta en QA. Nunca usar stock externo, gradiente ni placeholder con texto.

| Archivo | Ratio | Qué muestra (sin personas/caras/manos/logos/texto/patentes) | Vive en |
|---|---|---|---|
| `mesa.jpg` | 16:9 → 1.778 | Mesa de reunión vacía nocturna premium: tablero roble oscuro con veta contenida, expediente hueso #EDE8E0 con líneas tenues y lápiz grafito alineado en diagonal, luz lateral cálida contenida 2800K desde ventana alta con difusión, sombras largas suaves sobre el tablero, fondo muro noche #0B1220 con sombra, aire generoso a la derecha para H1. Estética Kinfolk nocturna, orden quirúrgico. | #hero (cols 8–12) — hero editorial noche |
| `biblioteca.jpg` | 4:3 → 1.333 | Biblioteca jurídica nocturna: lomos de códigos chilenos encuadernados en burdeos #9B2F2B, azul noche #002040 y hueso con lomo de tela y filete champán #C8A67A sutil, estantería madera oscura mate, luz puntual cálida 30° esculpiendo el lomo con sombra suave 25cm, contraluz fino en canto superior, grano mínimo. Materias: tela editorial, cuero mate, papel poroso. | #urgencia (col 8–12 abajo) + textura sutil en #materias |
| `expediente.jpg` | 1:1 → 1.0 | Bodegón cenital cuadrado de expediente jurídico cerrado sobre tablero oscuro: carpeta cartón crema #EDE8E0 con cinta algodón burdeos #9B2F2B y sello de lacre abstracto sin texto legible, anotaciones manuscritas desenfocadas ilegibles, luz rasante 20° esculpiendo relieve de cinta y lacre con sombra larga nítida, tarjeta negra definiendo borde. Materia: fibra cartón, algodón, cera con micro-fisuras. | #honorarios (sticky derecha desktop, cols 8–12) |
| `fachada.jpg` | 3:4 → 0.75 | Fachada interior / patio acceso sobrio nocturno de oficina jurídica chilena contemporánea: muro piedra clara iluminado puntual + puerta madera oscura entreabierta con herraje bronce #C8A67A apagado, pavimento piedra clara con junta 1px, planta desenfocada al fondo, luz lateral 30° esculpiendo piedra y veta madera, cielo noche recortado sin quemar. Sin letrero legible, sin autos con patente. | #urgencia (col 8–12 arriba) |

**Coherencia de lote nocturno:** misma luz contenida cálida 2700–3000K + relleno frío sutil del cielo noche, misma paleta carbón azul #0B1220 / #131E32 + hueso #EDE8E0 + champán #C8A67A + burdeos #9B2F2B, mismo grading nocturno (negros profundos levantados levemente, nunca #000 puro, blancos hueso cálidos, saturación contenida 0.7, contraste medio). Lote fotografiado como catálogo editorial europeo quiet luxury nocturno — orden, silencio, expediente.

**Ratios válidos Flow:** solo 16:9 / 4:3 / 1:1 / 3:4 / 9:16 — verificado 2026-08-30. No existe 4:5.

---

## 6) QA FINAL DEL BUILDER — checklist antes de entregar

### Build
- `npm run propuestas:build -- abogado-b-oscuro-premium` → 0 errores, 0 warnings de tipo. `dist/` existe.
- No se tocó `propuestas/_plantilla` original; duplicada a `propuestas/abogado-b-oscuro-premium/`.

### Grep de ids — anti-clon v3
```bash
grep -R "id=\"inicio\"\|id=\"cifras\"\|id=\"catalogo\"\|id=\"precios\"\|id=\"metodo\"\|id=\"galeria\"\|id=\"faq\"" propuestas/abogado-b-oscuro-premium/src
# debe dar 0 resultados. Si aparece, rehacer secciones al §3.
grep -R "id=\"materias\"\|id=\"como-partimos\"\|id=\"honorarios\"\|id=\"urgencia\"\|id=\"reserva\"\|id=\"hero\"" propuestas/abogado-b-oscuro-premium/src
# debe dar 5+ hits (las del oficio).
```

### Criterio "apaga el acento"
- Cambia `--accent: #888; --accent-2: #888;` y recarga. El sitio SIGUE pareciendo un estudio jurídico nocturno premium chileno serio (expediente, tabla honorarios legible, cómo partimos claro, teléfono y agendar siempre visibles, biblioteca/mesa/expediente como protagonistas silenciosos). No parece "landing premium genérica" ni "dashboard tech oscuro".

### Checklist visual (viewport 1280 + 360)
- [ ] Fondo base siempre noche #0B1220 (no invertir a claro en hero). Solo #como-partimos es hueso como respiro intercalado — PROHIBIDO 3 secciones oscuras consecutivas sin respiro claro (alternancia noche → hueso → noche verificada).
- [ ] Coral/burdeos/champán ≤2 por viewport simultáneo (accent + accent-2 nunca dominan). Medir con eyedropper: <5% área.
- [ ] Sticky CTA solo móvil y solo tras 60% hero, no tapa contenido, 52px alto, no vibra.
- [ ] Filetes 1px var(--linea) en TODO (hero banda, materias cards, tabla filas, urgencia protocolo, reserva form). Cero sombras.
- [ ] Radios 0 verificado (inspeccionar cualquier botón/card/imagen → `border-radius: 0`).
- [ ] Teléfono tabular visible en header desktop + sticky móvil + #urgencia gigante (3 lugares).
- [ ] Honorarios "desde" en #honorarios (8 filas CLP tabular) + referencia en hero badge + #como-partimos (mención "presupuesto por escrito").
- [ ] Prueba social estática tabular sin count-up en tabla: "+14 años en Valparaíso · +2.300 causas asesoradas · 4 materias, sin prometer resultados · Respuesta el mismo día hábil" — en banda G12 bajo hero (no en #honorarios).
- [ ] Contraste AA verificado: hueso #EDE8E0 sobre noche #0B1220 (13:1), muted #8B95A8 sobre #0B1220 (4.6:1), tinta #0B1220 sobre hueso #EDE8E0 (15:1 en bloque claro).
- [ ] Tipografías solo Libre Baskerville + Source Sans 3 (Network tab → solo 2 familias). Números tabular-nums en precios/tel/RUT/años.
- [ ] Focus-visible anillo champán 2px offset 3px en todos los interactivos; ::selection champán/noche.
- [ ] Alt descriptivos en las 4 imágenes (sin "imagen de…", describe escena y luz), en español de Chile.
- [ ] 360px real: hero legible, tabla no rompe, formulario no corta, sticky CTA no tapa inputs, sin scroll horizontal.
- [ ] Sin personas/caras/manos/logos/texto/patentes en ninguna imagen (revisar 1 por 1). Sin testimonios con foto ni "María G.", sin badges rating, sin marquee, sin planes Free/Pro, sin terminal decorativo, sin orbes, sin grilla puntos, sin sparkles, sin 3 cards con icono gigante, sin martillos/balanzas gigantes como decoración central.
- [ ] `prefers-reduced-motion` → cero animación (probar en DevTools → Rendering → Emulate).
- [ ] Grano fílmico máximo .04 si existe (opcional), nunca overlay oscuro sobre foto.

### Entrega
- Resumen breve: qué construiste, decisiones de dirección de arte noche (gramática G12 + apoyo G1, T4, paleta noche 3 roles, ids del oficio, dónde vive precio/tel/CTA/proof, firma motion ms), estado del build.

---

## MARCA DEMO — TEXTOS LITERALES (no cambiar — copiar/pegar)

```
Nombre: VALPARAISO — Estudio Jurídico
H1: "Defensa de alto estándar, a tu alcance."
Subhead: "Te decimos si tu causa es viable antes de cobrar. Materias acotadas, presupuesto por escrito en etapas y el mismo abogado de principio a fin."
CTA principal: "Agendar consulta" · secundario: "Ver honorarios"
Contacto: +56 9 8234 5678 · contacto@valparaisojuridico.cl · Valparaíso · Santiago · Atención presencial y online
Horario: Lun–Vie 9:00–18:30 · Sáb 10:00–13:00 (coordinación previa)
Micro-copy honesto (bajo CTAs hero): "Si tu causa no es viable, te lo decimos en la primera reunión. No iniciamos sin tu aprobación por escrito."
Banda G12 honesta bajo hero: "RUT 76.123.456-7 · +14 años en Valparaíso · Registro Colegio de Abogados · Respuesta inicial en 24h hábiles"
Banda honesta flujo: "Materias acotadas · Presupuesto por escrito · El mismo abogado de principio a fin"
Firma urgencia: "¿Audiencia cerca o medida urgente? Llámanos — respondemos hoy dentro del horario."
Prueba social estática (banda G12): "+14 años en Valparaíso · +2.300 causas asesoradas · 4 materias, sin prometer resultados · Respuesta el mismo día hábil"
Nota honorarios al pie: "Valores referenciales según complejidad; el honorario final se confirma por escrito tras la primera reunión. Facilidades de pago en cuotas. Tasas, receptores y peritajes no incluidos."
```

---

## PROCESO OBLIGATORIO (en este orden — el builder no puede saltarse pasos)

1. **DIRECCION_DE_ARTE.md primero** (en `abogado-b-oscuro-premium/`): gramática G12 Expediente trust-first nocturna + apoyo G1 índice (2 frases del oficio: por qué expediente nocturno y por qué respiro claro), pareja T4 Libre Baskerville/Source Sans 3, los 3 roles de color noche (bg #0B1220 + ink #EDE8E0 + accent champán #C8A67A / burdeos #9B2F2B) con lógica autoridad nocturna, lista de ids del oficio (#materias #como-partimos #honorarios #urgencia #reserva), dónde vive honorario (badge hero + tabla #honorarios)/teléfono (header + sticky + #urgencia gigante)/CTA sticky/prueba social (banda G12), firma de motion con ms (subrayado 240ms, hover fila 160ms, acordeón 200ms), qué muestra cada imagen noche (mesa/biblioteca/expediente/fachada). PROHIBIDO crear App.tsx o styles.css antes de que este archivo exista.

2. Generar las 4 imágenes noche (media antes que maqueta) según MEDIA-PROMPTS-abogado-b-oscuro-premium.md — lote coherente luz contenida cálida 2700K.

3. Maquetar desde cero: CSS nuevo en `src/styles.css` partiendo solo del reset mínimo (focus-visible, skip-link, reduced-motion). Prohibido pegar bloques de otra propuesta. Variables :root oscuras como única fuente de color.

4. `npm run propuestas:build -- abogado-b-oscuro-premium` hasta cero errores.

5. Auto-QA: grep de ids — si aparece secuencia v3 (inicio/cifras/catalogo/precios/metodo/galeria/faq), rehacer secciones. Verificar AA noche (hueso sobre carbón azul) y hueso (tinta sobre hueso), 360px, alts. Verificar que --accent no domina (>5% área = fallo). Verificar alternancia noche → hueso → noche (no muro oscuro infinito).

6. Criterio de LISTO: apaga --accent y --accent-2 (cámbialos a gris #888). Si el sitio SIGUE pareciendo un estudio jurídico nocturno premium chileno serio (materias acotadas legibles, cómo partimos en bloque hueso explicado, honorarios por escrito con tabla densa nocturna, teléfono con urgencia siempre visible, biblioteca/mesa/expediente como protagonistas), pasa. Si parece una "landing premium genérica invertida" o "dashboard tech", falla aunque compile: vuelve al ADN.

7. Resumen breve: qué construiste, decisiones de la dirección de arte noche, estado del build.

Calidad > velocidad: esta propuesta se usa para vender rediseños a estudios jurídicos nocturnos chilenos con presencia boutique premium (grade B, nicho 86 sitios). Precio percibido USD 22.000–32.000.
