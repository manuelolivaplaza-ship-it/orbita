# PROMPT.md — NORTE ESTUDIO (identidad demo)

El super-prompt de grupo (`../PROMPT-ARQUITECTURA-B-CLARO-MINIMALISTA.md`) remite a este
archivo para la identidad demo de la propuesta. Variante **B** del grupo claro: NO reutilices
la marca de la FASE A (`arquitectura-claro`). Misma estética de grupo, identidad propia.
Nota interna: en `marketing-claro` (FASE A) existe "Estudio Norte"; esta propuesta se llama
"NORTE ESTUDIO" por decisión explícita del dueño del proyecto — no cambiarla.

## Marca y rubro

- **Nombre:** NORTE ESTUDIO — Arquitectura. Marca en mayúsculas espaciadas: NORTE ESTUDIO.
- **Rubro:** estudio de arquitectura residencial y de obra nueva en el sur de Chile,
  con sede en Puerto Varas, Región de Los Lagos. Obras entre Osorno, Chiloé y Pucón.
- **Posicionamiento:** presupuesto transparente, permisería incluida y construcción
  documentada. El proyecto como argumento (ELEMENTAL), cifras antes que adjetivos
  (Winteri), materialidad cálida anclada al paisaje (Cazú Zegers).

## Textos literales del hero (no cambiar)

- **H1:** "Diseñamos casas que se sienten del lugar."
- **Subhead:** "Arquitectura residencial y de obra nueva en el sur de Chile. Proyectos con
  permisería incluida, presupuestos transparentes y construcción documentada."
- **CTA principal:** "Cotizar tu proyecto" · **secundario:** "Ver proyectos"
- **Kicker:** "ESTUDIO DE ARQUITECTURA · CHILE"
- **Caption hero:** "Casa Rupanco, 2024 · 214 m²"

## Contacto demo (literales)

+56 9 8765 4321 · hola@norteestudio.cl · Puerto Varas, Los Lagos · Lun–Vie 9:00–18:30.
Micro-línea obligatoria en #contacto: "Responde el arquitecto, no un call center."

## Paleta (regla dura)

- `--papel #F5F2EC` (hueso cálido) · `--tinta #191713` · `--gris #8B857A` · `--linea #DCD6CA`
- ACENTO ÚNICO `--roble #9A7B4F`, presente en MENOS del 5% de la UI (CTA, estados activos,
  links, focus ring, ::selection, barra de progreso).
- PROHIBIDO negro puro #000 o blanco puro #FFF como fondos/texto. border-radius: 0 en TODO
  (solo se permite 50% si algo fuera estrictamente circular). Sin sombras difusas:
  separación por filetes 1px var(--linea) y whitespace.

## Tipografías

- Display serif **Newsreader** (Google Fonts, pesos 500/600, italic 500 para acentos,
  leading 0.92, tracking −0.02em en H1 gigante).
- Texto UI sans **Archivo** (400/500/600), tracking amplio en kickers uppercase.
- Números tabulares OBLIGATORIOS (`font-variant-numeric: tabular-nums`) en #cifras,
  fichas técnicas, tabla UF de #precios y teléfono gigante de #contacto.

## Índice de proyectos #proyectos (data literal, 01–08)

| # | Obra | Comuna | Ficha |
|---|------|--------|-------|
| 01 | Casa Rupanco | Lago Rupanco | 214 m² · 2024 · casa · madera laminada + hormigón visto |
| 02 | Casa Petrohué | Puerto Varas | 186 m² · 2023 · casa · ciprés + piedra local |
| 03 | Casa Chepu | Castro, Chiloé | 148 m² · 2023 · casa · tejuela nativa + estructura de tepú |
| 04 | Edificio Costanera | Puerto Montt | 1.240 m² · 2022 · edificio multifamiliar · hormigón visto + aluminio |
| 05 | Casa Frutillar Bajo | Frutillar | 172 m² · 2022 · casa · ladrillo + roble |
| 06 | Sala de ventas Llanquihue | Llanquihue | 340 m² · 2021 · comercio · hormigón + vidrio |
| 07 | Casa Cochamó | Cochamó | 132 m² · 2021 · casa · madera aserrada en obra |
| 08 | Casa Pucón | Pucón | 205 m² · 2020 · casa · piedra + coigüe |

## Imágenes (ya generadas en public/media/ — NO generar ni descargar más)

- `hero.jpg` 16:9 — casa de madera y hormigón al atardecer, ventanas encendidas, sin personas.
  Hero derecha 7/12 con caption "Casa Rupanco, 2024 · 214 m²".
- `model.jpg` 1:1 — maqueta sobre mesa de trabajo con planos y escalímetro. Sección #estudio.
- `detail.jpg` 4:5 — textura revestimiento madera + piedra, luz rasante. Apoyo en #servicios.
- `site.jpg` 16:9 — terreno en ladera con obra en estructura, cielo sobrio. Apoyo en #proceso.
- Alt descriptivos en español, loading lazy salvo hero (eager + fetchpriority high).

## Tono

Español de Chile, sobrio y concreto. Cero jerga inmobiliaria/de marketing ("exclusividad",
"tu hogar soñado"). El sitio debe responder antes del footer: cuánto cuesta (#precios),
cómo se permisa (#servicios/#faq) y quién construye (#servicios 04 / #faq).
