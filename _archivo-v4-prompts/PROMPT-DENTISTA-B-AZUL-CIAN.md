# SUPER-PROMPT v4 — DENTISTA B · "AZURA AZUL-CIAN" · anti-homogeneidad

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL: 172 sitios dentista grado B capturados y agrupados por píxeles (no por CSS).
> Grupo visual único para esta web: **Azul / cian — confianza clínica (claro) — 13 sitios (7,6% del rubro, nicho de confianza institucional)**, familias px azul/cian, % oscuro típico 0–13%, blancos fríos #e0e0e0/#80a0c0/#4080e0 con azul clínico presente pero contenido. Referentes verificados del CRM con buyScore real: **Tratamientos Dentales Santiago (tratamientosdentalessantiago.cl · Las Condes · 74 · 13% oscuro)** — azul contenido sobre blanco, **Centro Odontológico 12 de Febrero (12defebrero.cl · San Bernardo · 73 · 3% oscuro)** — azul institucional disciplinado, **Centro Médico y Dental Polimedica (polimedica.cl · Puente Alto · 71 · 0% oscuro)** — cian clínico higiénico, **Clínica Dental Chicureo (clinicadentalchicureo.cl · Colina · 71 · 7% oscuro)** — azul confianza contenido, **Clínica Dental Nuvident (nuvident.cl · Pudahuel · 71 · 0% oscuro)** — azul saturado #4080e0 de firma, **Trema Dental Limitada (trema.cl · Quinta Normal · 71 · 0% oscuro)** — lila-azulado clínico. Cierran: Clínica dental Los Ciruelos (71), Dra. Argelys Ramirez (70), DENTAL SHAPER (68), Soc. Inst. Especialidades Odontológicas IEO (65), Clínica Dental CIO (63), DENTIMED (63), A&A Salud (59). Este grupo NO es el claro neutro masivo (128) ni el oscuro boutique (11) ni el teal agua (10): es el dental que vende protocolo, puntualidad y convenio — estética de higiene + respaldo institucional. Objetivo de precio percibido: USD 18.000–24.000. Este prompt es v4 ANTI-HOMOGENEIDAD: debe parecer hecho por un estudio especializado en SALUD DENTAL DE CONFIANZA AZUL, no una landing premium genérica pintada de azul.

## ROL

Eres director de arte + frontend senior nivel Awwwards ESPECIALIZADO en clínicas dentales de confianza institucional y centros dentales de especialidades coordinadas: conoces la diferencia entre vender una limpieza aislada y vender un plan coordinado entre endodoncia-ortodoncia-rehabilitación, sabes que el paciente chileno de comuna confía cuando ve su hora respetada, su presupuesto por escrito y su Isapre explicada sin letra chica, y que la conversión real es "diagnóstico el mismo día + presupuesto por escrito con etapas + convenios y cuotas sin interés + urgencia atendida hoy". Diseñas como quien ha hecho 20 dentales azules — luz higiénica, azul como firma de protocolo, grilla serena sin gritos — no como quien pinta de azul una plantilla clara.

## CONTEXTO DEL PROYECTO

Trabajas en el monorepo Órbita (`C:\Users\manue\OneDrive\Desktop\órbita`).
1) Duplica `propuestas/_plantilla` → `propuestas/dentista-b-azul-cian/` (archivos, no node_modules). package.json name "dentista-b-azul-cian"; meta.json título "AZURA — Centro Dental · Propuesta Órbita"; index.html lang="es".
2) Stack real: React 19 + TypeScript + Vite 6, CSS PURO en src/styles.css (variables, grid, clamp). Sin Tailwind. Única dependencia extra permitida: `motion`.
3) Comandos desde la raíz órbita: dev `npm run propuesta -- dentista-b-azul-cian` (:3010) · build `npm run propuestas:build -- dentista-b-azul-cian`. El build debe pasar sin errores.
4) AISLAMIENTO (regla dura): PROHIBIDO leer, listar o copiar archivos de cualquier otra carpeta de propuestas (son de otros clientes y su CSS está prohibido como fuente). Se parte SOLO de `_plantilla` virgen. Si te "acuerdas" del CSS de otra propuesta, esa memoria no se usa.

## ADN DEL RUBRO (inviolable — esto te diferencia de cualquier otro rubro)

- **Gramática: G10 Carta / menú denso (primaria) + G4 Protocolo clínico (apoyo arriba del pliegue).** El PRIMER viewport es promesa de protocolo + acceso a agenda y previsión + tabla-arancel visible sin scroll infinito, con azul como marco de confianza. La unidad de repetición es la FILA DE ARANCEL (no el capítulo editorial, no la semana de kine). El precio vive EN LA FILA, alineado a la derecha en tabular, con nota honesta al pie. NO es storytelling de 7 capítulos: es carta de prestaciones que se escanea en 8 segundos. G4 aparece solo arriba: "qué pasa el día 1 + previsión + sucursal/horario" en banda compacta azul pálida.
- **Tipografía: T9 — Bitter (display) + Outfit (texto).** PROHIBIDO Inter, Geist, Space Grotesk, Poppins, Montserrat, Roboto, Open Sans, Lato, Arial, system-ui. Escala H1: clamp(2.3rem,5.8vw,4.4rem) con leading 0.92 y tracking -0.02em; números de precio en tabular lining, tracking 0. Bitter para titulares clínicos con autoridad serena y confianza; Outfit para cuerpo y filas con legibilidad de tabla institucional. H2 serif 1.6–1.9rem, cuerpo 1.05rem/1.6. Kickers uppercase tracking 0.14em en azul clínico.
- **Secciones propias con ids del oficio (máx 3 compartibles con otros rubros: header, footer, reserva):**
  - `#tratamientos-arancel` — carta densa de prestaciones con precio "desde" en CLP tabular: Limpieza, Restauración, Endodoncia, Implante, Ortodoncia, Urgencia. Cada fila con hover 160ms que revela duración típica + qué incluye + si requiere 1 o 2 visitas.
  - `#primera-evaluacion` — qué incluye la evaluación de 40 min: radiografía panorámica si corresponde, diagnóstico explicado en palabras simples, presupuesto por escrito, plan coordinado entre especialistas. Tiempo, pasos y entrega. Respira con fondo azul pálido #EDF4F8.
  - `#isapre-reembolso` — Fonasa / Isapre (reembolso y bono) / particular: cómo pagas, boleta reembolsable, convenios reales, cuotas sin interés, sin letra chica. Tabla de 3 columnas filete 1px var(--linea) con cabecera azul sutil.
  - `#especialidades-reales` — las del box de AZURA (no 12 genéricas): Diagnóstico digital, Rehabilitación y estética, Endodoncia, Odontopediatría, Periodoncia, Ortodoncia y alineadores. 6 bloques numerados 01–06 en azul, no cards con icono de diente gigante.
  PROHIBIDO el arco `#inicio #cifras #catalogo #precios #metodo #galeria #faq #reserva` como secuencia. Cada id debe leerse como jerga de clínica dental chilena de confianza.
- **Firma de motion de oficio:** filas de arancel con highlight azul 160ms (fondo #EDF4F8 al hover, no stagger 0.12s global); CTA "Agendar evaluación" siempre visible (no aparece con scroll); acordeón de previsión 200ms; transiciones de sección 160–200ms secas; barra de progreso 2px azul clínico si existe. Nada de orbes, clip-reveal cinematográfico global ni bounce: esto es clínica de protocolo, no galería. Todo respeta prefers-reduced-motion → cero animación.
- **Dirección de imagen (4 imágenes, public/media/, sin personas/caras/manos/logos/texto/patentes):**
  1. `sillon.jpg` 16:9 — box dental vacío con sillón en posición baja tapizado claro, luz norte lateral higiénica, muro azul pálido sutil al fondo y monitor apagado.
  2. `bandeja.jpg` 1:1 — bandeja de instrumental esterilizado en pouches azules alineados sobre tela blanca, luz rasante higiénica.
  3. `recepcion.jpg` 4:3 — recepción luminosa vacía, mostrador blanco + pared azul pálido + piedra clara, aire institucional y calma.
  4. `lampara.jpg` 3:4 — detalle vertical de lámpara operatoria apagada, brazo metálico y vidrio, reflejo azul suave y box desenfocado.
- **Paleta de 3 roles (variables en :root) — FAMILIA AZUL-CIAN v4 (claro confianza):** `--bg` #F8FBFD (papel frío azul-pálido, no #FFF), `--bg-blue` #EDF4F8 (azul pálidísimo para bandas y hover, no para muro completo), `--ink` #132430 (tinta azul-negro profundo, nunca #000), `--muted` #6F8090 (gris azulado secundario), `--linea` #D8E2E9 (filete 1px frío), `--accent` #0E7CB5 (azul clínico confianza, <5% área: CTA principal, kickers, subrayados, barra progreso), `--accent-2` #2A6B8A (azul petróleo profundo para precio destacado y links secundarios, <5%), `--state` #C48A3F (ámbar cálido: "evaluación esta semana / urgencia hoy"). PROHIBIDO #000/#FFF puros, azul neón #00BFFF/#00E5FF, degradados azul→cian, sombras difusas, radios. --accent-2 y --state SÍ aparecen en filas y etiquetas del oficio (no es un hex solo en botones). Texto sobre --bg y --bg-blue con contraste AA garantizado (ink #132430 sobre papel frío, no gris medio).
- **Ritmo vertical y densidad:** respiración generosa en hero azul-blanco (padding 96–128px desktop, hero con banda azul contenida arriba, no muro), pero densidad de CARTA en #tratamientos-arancel: filas compactas 14–18px padding vertical, filete 1px frío, tipografía tabular. Whitespace solo en hero y #primera-evaluacion (esta última en #EDF4F8 para respiro higiénico). Alternancia blanco-frío → azul pálido → blanco obligatoria: PROHIBIDO muro azul continuo. Contraste con el claro neutro: aquí el azul guía el protocolo; con el oscuro: aquí la luz es higiénica, no contenida.

## BENCHMARK A IMITAR (disciplina, no copia)

Tratamientos Dentales Santiago Las Condes (74, 13% oscuro) — azul contenido sobre blanco disciplinado · Centro 12 de Febrero San Bernardo (73, 3%) — azul institucional puro · Polimédica Puente Alto (71, 0%) — cian higiénico · Chicureo Colina (71, 7%) — confianza contenida · Nuvident Pudahuel (71, 0%) — firma azul saturada · Trema Quinta Normal (71, 0%) — lila-azulado clínico · Los Ciruelos Buin (71) — azul disciplinado comunal · Dra. Argelys Ramírez Ñuñoa (70) — azul sobre tinta · DENTAL SHAPER Ñuñoa (68) — azul eléctrico contenido. Internacional: Pacific Dental Services + Heartland Dental — azul como firma de protocolo, evidencia antes que promesa, blanco, aire, sin sonrisas de stock. Imita la DISCIPLINA de luz higiénica + grilla + precio honesto con toque azul, no los píxeles.

## MARCA DEMO (textos literales, no cambiar)

Nombre: AZURA
H1: "Tu hora a la hora, tu tratamiento por escrito."
Subhead: "Especialidades coordinadas en un solo lugar: diagnóstico el mismo día, presupuesto por escrito y convenios claros con tu isapre. Pago en cuotas sin interés."
CTA principal: "Agendar evaluación" · secundario: "Ver valores"
Contacto: +56 9 8765 4321 · contacto@azura.cl · Puente Alto, Santiago
Horario: Lun–Vie 9:00–20:00 · Sáb 9:30–14:00
Micro-copy honesto: "Si el plan cambia después de la evaluación, te avisamos antes de partir. Nunca iniciamos sin tu aprobación por escrito."
Banda honesta bajo hero (banda azul pálida #EDF4F8): "Especialidades coordinadas · Urgencias dentales durante horario · Convenios con las principales isapres · Boleta reembolsable"
Firma de protocolo: "¿Urgencia dental? Llámanos — atendemos hoy dentro del horario."

## CONTRATO DE CONVERSIÓN (obligatorio, la ubicación la fija la gramática G10/G4)

- Precio/arancel "desde" EN LA FILA de #tratamientos-arancel + referencia en #primera-evaluacion (no en popup): Evaluación con radiografía panorámica $29.900 · Limpieza y profilaxis desde $39.900 · Restauración resina desde $59.900 · Endodoncia 1 conducto desde $129.000 · Extracción simple desde $49.900 · Blanqueamiento desde $89.900 · Implante desde $390.000 · Ortodoncia alineadores desde $45.000/mes. Nota al pie: "Valores referenciales; el valor final se confirma tras diagnóstico. Sin sorpresas. Hasta 6 cuotas sin interés."
- Teléfono visible en header desktop y sticky móvil (siempre, azul sobre papel frío con contraste AA). Texto permanente "¿Urgencia dental? Llámanos" junto al teléfono en header.
- CTA persistente móvil: "Agendar evaluación" (sticky discreto tras el hero, fondo azul #0E7CB5 con texto blanco, no tapa contenido).
- Prueba social honesta sin foto de persona: "+13 años en Puente Alto · +11.000 atenciones · 95% de horas puntuales · 5 especialistas titulados" como línea estática tabular en azul/ink (sin count-up animado en filas; count-up opcional solo una vez si se usa, pero NUNCA en #tratamientos-arancel). Números tabulares Bitter.

## REGLAS DURAS (una violación = rechazado)

Sin personas/caras/manos/logos/texto en imagen. Sin antes/después fotográfico. Sin testimonios con foto ni identidad inventada ("María G." prohibido). Sin badges de rating, marquee, planes Free/Pro/Enterprise, terminal decorativo, orbes, grilla de puntos, sparkles, 3 cards simétricas con icono. Radios 0 en TODO. Español de Chile + alt descriptivos. Contraste AA (ink #132430 sobre papel frío #F8FBFD y azul pálido #EDF4F8 verificado, no gris #888 sobre azul), focus-visible ring azul #0E7CB5, ::selection azul con texto blanco, responsive 360px real, sin stock externo. prefers-reduced-motion → cero animación. Tipografías: solo Bitter + Outfit. Fondo base claro papel frío siempre (no muro azul completo, solo bandas pálidas #EDF4F8); PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos. Accent azul <5% UI, accent-2 petróleo <5%. Filetes 1px var(--linea) frío, cero sombras difusas. Grano fílmico máximo .02 si existe.

## PROCESO OBLIGATORIO (en este orden)

1. **DIRECCION_DE_ARTE.md primero** (en dentista-b-azul-cian/): gramática G10+G4 y por qué (2 frases del oficio de confianza), pareja T9 Bitter/Outfit, los 3 roles de color azul (bg papel frío #F8FBFD + ink #132430 + accent azul #0E7CB5 / petróleo #2A6B8A) con lógica protocolo higiénico, lista de ids del oficio, dónde vive precio/teléfono/CTA sticky/prueba social, firma de motion con ms (160ms filas hover azul, 200ms acordeón), qué muestra cada imagen azul. PROHIBIDO crear App.tsx o styles.css antes de que este archivo exista.
2. Generar las 4 imágenes azul-cian (media antes que maqueta) según MEDIA-PROMPTS — lote coherente luz norte higiénica.
3. Maquetar desde cero: CSS nuevo en src/styles.css partiendo solo del reset mínimo (focus-visible, skip-link, reduced-motion). Prohibido pegar bloques de otra propuesta. Variables :root azul claras como única fuente de color.
4. `npm run propuestas:build -- dentista-b-azul-cian` hasta cero errores.
5. Auto-QA: grep de ids — si aparece la secuencia v3 (inicio/cifras/catalogo/precios/metodo/galeria/faq), rehacer secciones. Verificar AA azul (ink sobre papel frío y azul pálido), 360px, alts. Verificar que --accent no domina (>5% área = fallo). Verificar alternancia blanco-frío → azul pálido → blanco (no muro azul infinito).
6. Criterio de LISTO: apaga --accent (cámbialo a gris). Si el sitio SIGUE pareciendo una clínica dental de confianza chilena seria (carta de arancel legible, evaluación explicada con presupuesto por escrito, Isapre y cuotas claras, teléfono con urgencia siempre visible, respiro azul intercalado), pasa. Si parece una "landing premium genérica pintada de azul", falla aunque compile: vuelve al ADN.
7. Resumen breve: qué construiste, decisiones de la dirección de arte azul, estado del build.
