# SUPER-PROMPT v4 — DENTISTA B · "LAGO AZUL TEAL" · anti-homogeneidad

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL: 172 sitios dentista grado B capturados y agrupados por píxeles (no por CSS).
> Grupo visual único para esta web: **Teal / verde agua — salud dental (claro) — 10 sitios (5,8% del rubro, nicho fresco familiar)**, familia px teal, % oscuro típico 0–12%, teal dominante #40a0c0/#80c0c0/#a0e0e0 con blanco cálido #e0e0e0. Referentes verificados del CRM con buyScore real: **CDC Dental (cdcdental.cl · Concepción · 73 · 1% oscuro)** — teal dominante clínico, **Saludoral.cl (saludoral.cl · La Reina · 70 · 11% oscuro)** — teal contenido sobre neutro, **Centro Médico Liray - Salud en Colina (cmliray.cl · Colina · 67 · 0% oscuro)** — teal institucional puro #2080a0, **NeoDonto: Núcleo de Especialidades Odontológicas (neodonto.cl · La Florida · 65 · 2% oscuro)** — verde-agua disciplinado, **Clínica Dental Santa Gemita (saludgalenoysantagemita.com · Colina · 65 · 0% oscuro)** — teal pálido #a0e0e0, **Clínica Odontológica Condell (clinicacondell.cl · Valparaíso · 65 · 12% oscuro)** — teal claro con tinta, **Clínica Dental Omnia Rancagua (clinicaomnia.cl · Rancagua · 65 · 0% oscuro)** — teal familiar regional, **Clínica Dental Interdent Maipú (interdentchile.cl · Maipú · 63 · 2% oscuro)** — turquesa contenido #00c0e0, **Centro Odontológico Los Laureles (clinicaloslaureles.cl · Puerto Montt · 57 · 0% oscuro)** — teal suave #80c0c0, **Dr. Nelson Isamit Cerda (drnelsonisamit.com · Iquique · 57 · 7% oscuro)** — teal de acento #206080. Este grupo NO es el claro neutro masivo (128) ni el oscuro boutique (11): es el dental familiar que vende calma, frescura y cercanía — estética de agua limpia. Objetivo de precio percibido: USD 16.000–22.000. Este prompt es v4 ANTI-HOMOGENEIDAD: debe parecer hecho por un estudio especializado en SALUD DENTAL FAMILIAR FRESCA, no una landing genérica pintada de verde.

## ROL

Eres director de arte + frontend senior nivel Awwwards ESPECIALIZADO en clínicas dentales familiares y odontopediatría: conoces la diferencia entre vender un blanqueamiento y vender la primera visita de un niño de 4 años, sabes que la madre chilena decide por la calma que transmite el box antes que por el precio, y que la conversión real es "primera evaluación explicada con dibujito + presupuesto por escrito a tu ritmo + Isapre/Fonasa clarito + el mismo dentista que recibe a toda la familia". Diseñas como quien ha hecho 20 dentales teal — luz fresca, agua limpia, tipografía amable sin ser infantil — no como quien pinta de verde una plantilla clara.

## CONTEXTO DEL PROYECTO

Trabajas en el monorepo Órbita (`C:\Users\manue\OneDrive\Desktop\órbita`).
1) Duplica `propuestas/_plantilla` → `propuestas/dentista-b-teal/` (archivos, no node_modules). package.json name "dentista-b-teal"; meta.json título "LAGO AZUL — Clínica Dental Familiar · Propuesta Órbita"; index.html lang="es".
2) Stack real: React 19 + TypeScript + Vite 6, CSS PURO en src/styles.css (variables, grid, clamp). Sin Tailwind. Única dependencia extra permitida: `motion`.
3) Comandos desde la raíz órbita: dev `npm run propuesta -- dentista-b-teal` (:3010) · build `npm run propuestas:build -- dentista-b-teal`. El build debe pasar sin errores.
4) AISLAMIENTO (regla dura): PROHIBIDO leer, listar o copiar archivos de cualquier otra carpeta de propuestas (son de otros clientes y su CSS está prohibido como fuente). Se parte SOLO de `_plantilla` virgen. Si te "acuerdas" del CSS de otra propuesta, esa memoria no se usa.

## ADN DEL RUBRO (inviolable — esto te diferencia de cualquier otro rubro)

- **Gramática: G10 Carta / menú denso (primaria) + G4 Protocolo clínico (apoyo arriba del pliegue).** El PRIMER viewport es promesa familiar fresca + acceso a agenda y previsión + tabla-arancel visible sin scroll infinito, con teal como marco de confianza. La unidad de repetición es la FILA DE ARANCEL (no el capítulo editorial, no la semana de kine). El precio vive EN LA FILA, alineado a la derecha en tabular, con nota honesta al pie. NO es storytelling de 7 capítulos: es carta de prestaciones familiares que se escanea en 8 segundos. G4 aparece solo arriba: "qué pasa el día 1 con tu hijo + previsión + sucursal/horario" en banda compacta teal contenida.
- **Tipografía: T9 — Bitter (display) + Outfit (texto).** PROHIBIDO Inter, Geist, Space Grotesk, Poppins, Montserrat, Roboto, Open Sans, Lato, Arial, system-ui. Escala H1: clamp(2.3rem,5.8vw,4.4rem) con leading 0.92 y tracking -0.018em; números de precio en tabular lining, tracking 0. Bitter para titulares clínicos con cercanía familiar; Outfit para cuerpo y filas con legibilidad de tabla pediátrica. H2 serif 1.6–1.9rem, cuerpo 1.05rem/1.6. Kickers uppercase tracking 0.14em en teal.
- **Secciones propias con ids del oficio (máx 3 compartibles con otros rubros: header, footer, reserva):**
  - `#tratamientos-arancel` — carta densa de prestaciones familiares con precio "desde" en CLP tabular: Limpieza, Flúor y sellantes, Restauración, Endodoncia, Implante, Ortodoncia (niños y adultos). Cada fila con hover 160ms que revela duración típica + qué incluye + edad recomendada.
  - `#primera-evaluacion` — qué incluye la evaluación familiar de 40 min: radiografía si corresponde, diagnóstico explicado en palabras simples (con dibujo), presupuesto por escrito, plan a tu ritmo sin presión. Tiempo, pasos y entrega. Respira con fondo teal muy pálido #EDF6F5.
  - `#isapre-reembolso` — Fonasa / Isapre (reembolso y bono) / particular: cómo pagas, boleta reembolsable, convenios reales, sin letra chica. Tabla de 3 columnas filete 1px var(--linea) con cabecera teal sutil.
  - `#especialidades-reales` — las del box de LAGO AZUL (no 12 genéricas): Odontopediatría, Ortodoncia interceptiva y alineadores, Endodoncia microscópica, Estética adhesiva familiar. 4 bloques numerados 01–04 en teal, no cards con icono de diente gigante.
  PROHIBIDO el arco `#inicio #cifras #catalogo #precios #metodo #galeria #faq #reserva` como secuencia. Cada id debe leerse como jerga de clínica dental familiar chilena.
- **Firma de motion de oficio:** filas de arancel con highlight teal 160ms (fondo #EDF6F5 al hover, no stagger 0.12s global); CTA "Agendar evaluación" siempre visible (no aparece con scroll); acordeón de previsión 200ms; transiciones de sección 160–200ms secas; barra de progreso 2px teal si existe. Nada de orbes, clip-reveal cinematográfico global ni bounce: esto es clínica familiar, no galería. Todo respeta prefers-reduced-motion → cero animación.
- **Dirección de imagen (4 imágenes, public/media/, sin personas/caras/manos/logos/texto/patentes):**
  1. `sillon.jpg` 16:9 — box dental familiar vacío con sillón en posición baja tapizado claro agua, luz norte lateral fresca de ventana, orden quirúrgico con toque hogar.
  2. `bandeja.jpg` 1:1 — bandeja de instrumental esterilizado pediátrico y adulto alineada sobre tela blanca con tinte agua pálido, luz rasante fresca.
  3. `recepcion.jpg` 4:3 — recepción luminosa vacía con madera pálida + piedra clara + detalle teal sutil, aire familiar y calma.
  4. `lampara.jpg` 3:4 — detalle vertical de lámpara operatoria apagada, textura metálica y vidrio, luz de box contenida con reflejo agua.
- **Paleta de 3 roles (variables en :root) — FAMILIA TEAL v4 (claro fresco):** `--bg` #FDFCF9 (blanco clínico cálido, papel hueso, no #FFF), `--bg-teal` #EDF6F5 (teal pálidísimo para bandas y hover, no para muro completo), `--ink` #143038 (tinta petróleo profunda, nunca #000), `--muted` #7A8D94 (gris azulado para secundario), `--linea` #D8E8E6 (filete 1px con tinte agua), `--accent` #128A7A (teal verde-agua medio, <5% área: CTA principal, nav, kickers, subrayados, barra progreso), `--accent-2` #2E6B7A (azul petróleo profundo para precio destacado y links secundarios, <5%), `--state` #C48A3F (ámbar cálido: "evaluación esta semana / cupo"), `--hueso-bloque` #FDFCF9. PROHIBIDO #000/#FFF puros, teal neón #00E5CC/#00FFD0, turquesa brillante, degradados teal→cian, sombras difusas, radios. --accent-2 y --state SÍ aparecen en filas y etiquetas del oficio (no es un hex solo en botones). Texto sobre --bg y --bg-teal con contraste AA garantizado (ink #143038 sobre hueso, no gris medio).
- **Ritmo vertical y densidad:** respiración generosa en hero teal-blanco (padding 96–128px desktop, hero con banda teal contenida arriba, no muro), pero densidad de CARTA en #tratamientos-arancel: filas compactas 14–18px padding vertical, filete 1px con tinte agua, tipografía tabular. Whitespace solo en hero y #primera-evaluacion (esta última en #EDF6F5 para respiro fresco). Alternancia blanco → teal pálido → blanco obligatoria: PROHIBIDO muro teal continuo. Contraste con el claro neutro: aquí el agua limpia guía el ojo; con el oscuro: aquí la luz es fresca, no contenida.

## BENCHMARK A IMITAR (disciplina, no copia)

CDC Dental Concepción (73, 1% oscuro) — teal dominante disciplinado con blanco · Saludoral La Reina (70) — teal contenido sobre neutro · Centro Médico Liray Colina (67, 0%) — teal institucional puro #2080a0 · NeoDonto La Florida (65) — verde-agua de especialidades · Santa Gemita Colina (65, 0%) — teal pálido luminoso #a0e0e0 · Condell Valparaíso (65, 12%) — teal con tinta profunda · Omnia Rancagua (65, 0%) — familiar regional teal · Interdent Maipú (63) — turquesa contenido. Internacional: Curasept / Curaprox + Philips Sonicare — teal disciplinado, blanco, cero ruido, agua como metáfora de salud. Imita la DISCIPLINA de luz fresca + grilla + precio honesto con toque agua, no los píxeles.

## MARCA DEMO (textos literales, no cambiar)

Nombre: LAGO AZUL
H1: "Odontología familiar que da tranquilidad — de niños a adultos."
Subhead: "Diagnóstico explicado con calma, presupuesto por escrito y plan a tu ritmo. El mismo equipo te acompaña, visita a visita."
CTA principal: "Agendar evaluación" · secundario: "Ver valores"
Contacto: +56 9 7654 3210 · hola@lagoazul.cl · La Florida, Santiago
Horario: Lun–Vie 9:00–19:30 · Sáb 10:00–14:00
Micro-copy honesto: "Si el plan cambia después de la evaluación, te avisamos antes de partir. Nunca iniciamos sin tu aprobación por escrito."
Banda honesta bajo hero (banda teal pálida #EDF6F5): "Atención con hora o por urgencia · Convenios con las principales isapres · Boleta reembolsable · Odontopediatría desde los 2 años"
Firma familiar: "Equipo estable, trato cercano — tu familia siempre con las mismas caras."

## CONTRATO DE CONVERSIÓN (obligatorio, la ubicación la fija la gramática G10/G4)

- Precio/arancel "desde" EN LA FILA de #tratamientos-arancel + referencia en #primera-evaluacion (no en popup): Evaluación con radiografía $28.900 · Limpieza y profilaxis desde $38.900 · Flúor y sellantes pediátricos desde $34.900 · Restauración resina desde $58.900 · Endodoncia 1 conducto desde $128.000 · Extracción simple desde $48.900 · Blanqueamiento desde $88.900 · Implante desde $385.000 · Ortodoncia alineadores desde $44.000/mes (niños) / $46.000/mes (adultos). Nota al pie: "Valores referenciales; el valor final se confirma tras diagnóstico. Sin sorpresas. Hasta 6 cuotas sin interés."
- Teléfono visible en header desktop y sticky móvil (siempre, teal sobre hueso con contraste AA).
- CTA persistente móvil: "Agendar evaluación" (sticky discreto tras el hero, fondo teal #128A7A con texto hueso, no tapa contenido).
- Prueba social honesta sin foto de persona: "+10 años en La Florida · +8.200 familias · 97% nos recomienda · 4 dentistas, siempre los mismos" como línea estática tabular en teal/ink (sin count-up animado en filas; count-up opcional solo una vez si se usa, pero NUNCA en #tratamientos-arancel). Números tabulares Bitter.

## REGLAS DURAS (una violación = rechazado)

Sin personas/caras/manos/logos/texto en imagen. Sin antes/después fotográfico. Sin testimonios con foto ni identidad inventada ("María G." prohibido). Sin badges de rating, marquee, planes Free/Pro/Enterprise, terminal decorativo, orbes, grilla de puntos, sparkles, 3 cards simétricas con icono. Radios 0 en TODO. Español de Chile + alt descriptivos. Contraste AA (ink #143038 sobre hueso #FDFCF9 y teal pálido #EDF6F5 verificado, no gris #888 sobre teal), focus-visible ring teal #128A7A, ::selection teal con texto hueso, responsive 360px real, sin stock externo. prefers-reduced-motion → cero animación. Tipografías: solo Bitter + Outfit. Fondo base claro hueso siempre (no muro teal completo, solo bandas pálidas #EDF6F5); PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos. Accent teal <5% UI, accent-2 petróleo <5%. Filetes 1px var(--linea) con tinte agua, cero sombras difusas. Grano fílmico máximo .02 si existe.

## PROCESO OBLIGATORIO (en este orden)

1. **DIRECCION_DE_ARTE.md primero** (en dentista-b-teal/): gramática G10+G4 y por qué (2 frases del oficio familiar), pareja T9 Bitter/Outfit, los 3 roles de color teal (bg hueso #FDFCF9 + ink #143038 + accent teal #128A7A / petróleo #2E6B7A) con lógica agua limpia, lista de ids del oficio, dónde vive precio/teléfono/CTA sticky/prueba social, firma de motion con ms (160ms filas hover teal, 200ms acordeón), qué muestra cada imagen fresca. PROHIBIDO crear App.tsx o styles.css antes de que este archivo exista.
2. Generar las 4 imágenes frescas (media antes que maqueta) según MEDIA-PROMPTS — lote coherente luz norte fresca.
3. Maquetar desde cero: CSS nuevo en src/styles.css partiendo solo del reset mínimo (focus-visible, skip-link, reduced-motion). Prohibido pegar bloques de otra propuesta. Variables :root teal claras como única fuente de color.
4. `npm run propuestas:build -- dentista-b-teal` hasta cero errores.
5. Auto-QA: grep de ids — si aparece la secuencia v3 (inicio/cifras/catalogo/precios/metodo/galeria/faq), rehacer secciones. Verificar AA teal (ink sobre hueso y teal pálido), 360px, alts. Verificar que --accent no domina (>5% área = fallo). Verificar alternancia blanco → teal pálido → blanco (no muro teal infinito).
6. Criterio de LISTO: apaga --accent (cámbialo a gris). Si el sitio SIGUE pareciendo una clínica dental familiar fresca chilena seria (carta de arancel legible, evaluación explicada para niños y adultos, Isapre clarito, teléfono y agendar siempre visibles, respiro agua intercalado), pasa. Si parece una "landing premium genérica pintada de verde", falla aunque compile: vuelve al ADN.
7. Resumen breve: qué construiste, decisiones de la dirección de arte teal, estado del build.
