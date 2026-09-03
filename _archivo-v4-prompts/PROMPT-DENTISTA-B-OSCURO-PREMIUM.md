# SUPER-PROMPT v4 — DENTISTA B · "OBSIDIANA OSCURO PREMIUM" · anti-homogeneidad

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL: 172 sitios dentista grado B capturados y agrupados por píxeles (no por CSS).
> Grupo visual único para esta web: **Oscuro / premium minimal (real) — 11 sitios (6,4% del rubro, nicho boutique)**, familias px negro/profundo + neutro oscuro, % oscuro típico 56–97%, negros #000000/#202020/#121110 dominantes con hueso #EDE8E0. Referentes verificados del CRM con buyScore real: **Dentista en Santiago | Odonty (dentistaensantiago.cl · Providencia · 74 · 68% oscuro)** — negro editorial con hueso, **Clínica Magna (clinicamagna.cl · Las Condes · 74 · 80% oscuro)** — noche profunda con acento verde quirúrgico #20c060, **Dentalentti (dentalentti.cl · Puente Alto · 71 · 79% oscuro)** — carbón minimal, **Clínica Renova (clinicarenova.cl · Puerto Montt · 71 · 74% oscuro)** — negro con rosa pálido #e0c0c0, **Hempel y Mesa Ortodoncia (hmo.cl · Las Condes · 68 · 46% oscuro)** — azul noche #002040, **Dentalica (dentalica.cl · Vitacura · 68 · 67% oscuro)** — verde-negro profundo #002000, **Dr. Tomás Ilardi — Implantólogo (drtomasilardi.cl · Las Condes · 66 · 70% oscuro)** — tinta #002020 fondo noche. Cierran: Dentiglow (63), Clínica Prat (63), Clínica Maxo (57), LeDent (57). Este grupo NO es el claro masivo (128) ni el teal salud: es el dental boutique que cobra por especialista, no por promoción — estética de galería nocturna. Objetivo de precio percibido: USD 22.000–30.000. Este prompt es v4 ANTI-HOMOGENEIDAD: debe parecer hecho por un estudio especializado en SALUD DENTAL PREMIUM NOCTURNA, no una landing genérica invertida a oscuro.

## ROL

Eres director de arte + frontend senior nivel Awwwards ESPECIALIZADO en clínicas dentales boutique y odontología de especialista (implantología, ortodoncia, estética adhesiva): conoces la diferencia entre vender una limpieza y vender un plan de implante de 4 meses, sabes que el paciente premium chileno paga por el nombre del especialista y la trazabilidad del caso, y que la conversión real es "diagnóstico con scanner + plan fotografiado + presupuesto por escrito con etapas + el mismo especialista de principio a fin". Diseñas como quien ha hecho 20 dentales noche — luz contenida, tipografía joya, precio sin gritos — no como quien invierte colores de una plantilla clara.

## CONTEXTO DEL PROYECTO

Trabajas en el monorepo Órbita (`C:\Users\manue\OneDrive\Desktop\órbita`).
1) Duplica `propuestas/_plantilla` → `propuestas/dentista-b-oscuro-premium/` (archivos, no node_modules). package.json name "dentista-b-oscuro-premium"; meta.json título "OBSIDIANA — Clínica Odontológica · Propuesta Órbita"; index.html lang="es".
2) Stack real: React 19 + TypeScript + Vite 6, CSS PURO en src/styles.css (variables, grid, clamp). Sin Tailwind. Única dependencia extra permitida: `motion`.
3) Comandos desde la raíz órbita: dev `npm run propuesta -- dentista-b-oscuro-premium` (:3010) · build `npm run propuestas:build -- dentista-b-oscuro-premium`. El build debe pasar sin errores.
4) AISLAMIENTO (regla dura): PROHIBIDO leer, listar o copiar archivos de cualquier otra carpeta de propuestas (son de otros clientes y su CSS está prohibido como fuente). Se parte SOLO de `_plantilla` virgen. Si te "acuerdas" del CSS de otra propuesta, esa memoria no se usa.

## ADN DEL RUBRO (inviolable — esto te diferencia de cualquier otro rubro)

- **Gramática: G10 Carta / menú denso (primaria) + G4 Protocolo clínico (apoyo arriba del pliegue).** El PRIMER viewport es promesa clínica nocturna + acceso a agenda y previsión + tabla-arancel legible sobre fondo noche con respiro claro intercalado. La unidad de repetición es la FILA DE ARANCEL (no el capítulo editorial, no la semana de kine). El precio vive EN LA FILA, alineado a la derecha en tabular, con nota honesta al pie. NO es storytelling de 7 capítulos: es carta de prestaciones que se escanea en 8 segundos incluso en noche. G4 aparece solo arriba: "qué pasa el día 1 + previsión + sucursal/horario" en banda compacta sobre noche con filete 1px.
- **Tipografía: T9 — Bitter (display) + Outfit (texto).** PROHIBIDO Inter, Geist, Space Grotesk, Poppins, Montserrat, Roboto, Open Sans, Lato, Arial, system-ui. Escala H1: clamp(2.4rem,6vw,4.6rem) con leading 0.95 y tracking -0.02em; números de precio en tabular lining, tracking 0. Bitter para titulares clínicos con autoridad serena en noche; Outfit para cuerpo y filas con legibilidad de tabla sobre oscuro. H2 serif 1.7–2.0rem, cuerpo 1.05rem/1.6. Kickers uppercase tracking 0.14em en champán.
- **Secciones propias con ids del oficio (máx 3 compartibles con otros rubros: header, footer, reserva):**
  - `#tratamientos-arancel` — carta densa de prestaciones con precio "desde" en CLP tabular: Limpieza, Restauración, Endodoncia, Implante, Ortodoncia. Cada fila con hover 160ms que revela duración típica + qué incluye. Sobre noche, filete 1px var(--linea) al 12% hueso, hover aclara a 20%.
  - `#primera-evaluacion` — qué incluye la evaluación de 45 min: scanner/radiografía, diagnóstico explicado en palabras simples, presupuesto por escrito, plan a tu ritmo. Tiempo, pasos y entrega. Respira en bloque claro intercalado (hueso) para contraste AA.
  - `#isapre-reembolso` — Fonasa / Isapre (reembolso y bono) / particular: cómo pagas, boleta reembolsable, convenios reales, sin letra chica. Tabla de 3 columnas filete 1px. Puede vivir en noche o hueso, pero con contraste AA garantizado.
  - `#especialidades-reales` — las del box de OBSIDIANA (no 12 genéricas): Endodoncia microscópica, Implantología, Ortodoncia alineadores, Estética adhesiva. 4 bloques, no cards con icono de diente gigante. Numeración 01–04 discreta en champán.
  PROHIBIDO el arco `#inicio #cifras #catalogo #precios #metodo #galeria #faq #reserva` como secuencia. Cada id debe leerse como jerga de clínica dental chilena.
- **Firma de motion de oficio:** filas de arancel con highlight 160ms (no stagger 0.12s global); CTA "Agendar evaluación" siempre visible (no aparece con scroll); acordeón de previsión 200ms; transiciones de sección 160–200ms secas; barra de progreso 2px champán si existe. Nada de orbes, clip-reveal cinematográfico global ni bounce: esto es clínica nocturna, no galería. Todo respeta prefers-reduced-motion → cero animación.
- **Dirección de imagen (4 imágenes, public/media/, sin personas/caras/manos/logos/texto/patentes):**
  1. `sillon.jpg` 16:9 — box dental nocturno vacío con sillón en posición baja iluminado por lámpara operatoria cálida, fondo carbón #121110 con luz oculta perimetral, orden quirúrgico galería.
  2. `bandeja.jpg` 1:1 — bandeja de instrumental esterilizado sobre piedra oscura con luz rasante chiaroscuro, acero pulido con reflejos contenidos.
  3. `recepcion.jpg` 4:3 — recepción nocturna vacía, madera oscura + piedra + luz cálida empotrada lineal, aire premium y calma.
  4. `lampara.jpg` 3:4 — detalle vertical de lámpara operatoria apagada en noche, brazo metálico + vidrio, bokeh cálido de box desenfocado.
- **Paleta de 3 roles (variables en :root) — FAMILIA OSCURO v4:** `--bg` #121110 (carbón noche profundo, nunca #000), `--surface` #1B1917 (capa elevada), `--surface-2` #252220, `--ink` #EDE8E0 (hueso, texto principal, nunca #FFF), `--muted` #9A9590, `--linea` #2E2A28 (filete 1px al 12–15% hueso), `--accent` #C8A88A (champán cálido, <5% área: CTA principal, kickers, subrayados), `--accent-2` #2E7A75 (teal nocturno apagado para precio destacado y links), `--state` #C49A3F (ámbar cálido: "evaluación esta semana / cupo"), `--hueso-bloque` #EDE8E0 (para bloques claros intercalados). PROHIBIDO #000/#FFF puros, dorados brillantes #FFD700, neones #00E5CC, degradados, sombras difusas. Radios 0 en TODO. --accent-2 y --state SÍ aparecen en filas y etiquetas del oficio (no es un hex solo en botones). Texto sobre --bg y --surface con contraste AA garantizado (hueso sobre carbón, no gris medio).
- **Ritmo vertical y densidad:** respiración generosa en hero noche (padding 96–128px desktop, con grano fílmico .03 opcional), pero densidad de CARTA en #tratamientos-arancel: filas compactas 14–18px padding vertical, filete 1px, tipografía tabular. Whitespace solo en hero y #primera-evaluacion (esta última en bloque hueso para respiro). Alternancia noche → hueso → noche obligatoria: PROHIBIDO muro entero de 3 secciones oscuras consecutivas sin respiro claro. Contraste con el claro masivo: aquí la luz es contenida, el filete es el protagonista.

## BENCHMARK A IMITAR (disciplina, no copia)

Dentista en Santiago Odonty (Providencia, 74, 68% oscuro) — negro editorial contenido con hueso · Clínica Magna (Las Condes, 74, 80%) — noche absoluta con acento quirúrgico · Dentalentti (71, 79%) — carbón minimal · Clínica Renova (71, 74%) — negro con rosa pálido · Hempel y Mesa (68, 46% negro/profundo) — azul noche profundo · Dentalica (68, 67%) — verde-negro · Dr. Tomás Ilardi (66, 70%) — tinta especialista. Internacional: The Smile Bar (Suiza) + Invisalign premium (negro como marco, tipografía como protagonista). Imita la DISCIPLINA de luz contenida + grilla + precio honesto en noche, no los píxeles.

## MARCA DEMO (textos literales, no cambiar)

Nombre: OBSIDIANA
H1: "Odontología de especialista, sin apuro ni sorpresas."
Subhead: "Diagnóstico con scanner, plan fotografiado y presupuesto por escrito. El mismo especialista te acompaña de principio a fin."
CTA principal: "Agendar evaluación" · secundario: "Ver valores"
Contacto: +56 9 8123 4567 · hola@obsidiana.cl · Vitacura, Santiago
Horario: Lun–Vie 9:00–19:30 · Sáb 10:00–14:00
Micro-copy honesto: "Si el plan cambia después de la evaluación, te avisamos antes de partir. Nunca iniciamos sin tu aprobación por escrito."
Banda honesta bajo hero: "Atención con hora o por urgencia · Convenios con las principales isapres · Boleta reembolsable"
Firma boutique: "3 especialistas, siempre los mismos — no rotamos tu caso."

## CONTRATO DE CONVERSIÓN (obligatorio, la ubicación la fija la gramática G10/G4)

- Precio/arancel "desde" EN LA FILA de #tratamientos-arancel + referencia en #primera-evaluacion (no en popup): Evaluación con radiografía $32.900 · Limpieza y profilaxis desde $42.900 · Restauración resina desde $64.900 · Endodoncia 1 conducto desde $135.000 · Extracción simple desde $52.900 · Blanqueamiento desde $94.900 · Implante desde $420.000 · Ortodoncia alineadores desde $48.000/mes. Nota al pie: "Valores referenciales; el valor final se confirma tras diagnóstico. Sin sorpresas."
- Teléfono visible en header desktop y sticky móvil (siempre, hueso sobre carbón con contraste AA).
- CTA persistente móvil: "Agendar evaluación" (sticky discreto tras el hero, fondo hueso con texto carbón o champán sobre noche, no tapa contenido).
- Prueba social honesta sin foto de persona: "+12 años en Vitacura · +7.200 pacientes · 97% nos recomienda · 3 especialistas, siempre los mismos" como línea estática tabular en hueso/champán (sin count-up animado en filas; count-up opcional solo una vez si se usa, pero NUNCA en #tratamientos-arancel). Números tabulares Bitter.

## REGLAS DURAS (una violación = rechazado)

Sin personas/caras/manos/logos/texto en imagen. Sin antes/después fotográfico. Sin testimonios con foto ni identidad inventada ("María G." prohibido). Sin badges de rating, marquee, planes Free/Pro/Enterprise, terminal decorativo, orbes, grilla de puntos, sparkles, 3 cards simétricas con icono. Radios 0. Español de Chile + alt descriptivos. Contraste AA (hueso sobre carbón verificado, no gris #888 sobre #121110), focus-visible ring champán, ::selection champán/texto carbón, responsive 360px real, sin stock externo. prefers-reduced-motion → cero animación. Tipografías: solo Bitter + Outfit. Fondo base noche #121110 siempre (no invertir a claro en hero); bloques claros solo como RESPIRO intercalado (#primera-evaluacion en hueso). Accent champán <5% UI, teal <5%. Filetes 1px var(--linea), cero sombras difusas. Grano fílmico máximo .04 si existe.

## PROCESO OBLIGATORIO (en este orden)

1. **DIRECCION_DE_ARTE.md primero** (en dentista-b-oscuro-premium/): gramática G10+G4 y por qué (2 frases del oficio), pareja T9 Bitter/Outfit, los 3 roles de color noche (bg carbón #121110 + ink hueso #EDE8E0 + accent champán #C8A88A / teal #2E7A75) con lógica boutique, lista de ids del oficio, dónde vive precio/teléfono/CTA sticky/prueba social, firma de motion con ms (160ms filas, 200ms acordeón), qué muestra cada imagen noche. PROHIBIDO crear App.tsx o styles.css antes de que este archivo exista.
2. Generar las 4 imágenes noche (media antes que maqueta) según MEDIA-PROMPTS.
3. Maquetar desde cero: CSS nuevo en src/styles.css partiendo solo del reset mínimo (focus-visible, skip-link, reduced-motion). Prohibido pegar bloques de otra propuesta. Variables :root oscuras como única fuente de color.
4. `npm run propuestas:build -- dentista-b-oscuro-premium` hasta cero errores.
5. Auto-QA: grep de ids — si aparece la secuencia v3 (inicio/cifras/catalogo/precios/metodo/galeria/faq), rehacer secciones. Verificar AA noche (hueso sobre carbón), 360px, alts. Verificar que --accent no domina (>5% área = fallo). Verificar alternancia noche→hueso→noche (no muro oscuro infinito).
6. Criterio de LISTO: apaga --accent (cámbialo a gris). Si el sitio SIGUE pareciendo una clínica dental boutique nocturna chilena seria (carta de arancel legible en noche, evaluación explicada, Isapre claro, teléfono y agendar siempre visibles, respiro hueso intercalado), pasa. Si parece una "landing premium genérica invertida", falla aunque compile: vuelve al ADN.
7. Resumen breve: qué construiste, decisiones de la dirección de arte noche, estado del build.
