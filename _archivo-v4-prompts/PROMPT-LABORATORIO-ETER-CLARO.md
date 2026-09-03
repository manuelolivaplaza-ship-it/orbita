# SUPER-PROMPT — LABORATORIO · GRUPO "CLARO MINIMALISTA / NEUTRO" (33 sitios) · ETER-CLARO

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño reutilizable para laboratorios clínicos y centros de toma de muestras en Chile cuya estética real (medida por captura renderizada) es **clara, luminosa y minimalista**: blanco/gris frío dominante, tipografía display serena, grilla disciplinada, acento clínico contenido. Es la cara del 78% del mercado laboratorio chileno: laboratorios de barrio, toma de muestras, centros radiológicos y químicas que hoy se ven genéricos, con WordPress recargado y paleta lavada, y necesitan verse confiables, limpios y precisos — como un resultado de examen bien impreso.

Benchmark REAL verificado del rubro en este mismo segmento (medido por captura renderizada, 61 leads A+B Maps solo crm-maps-AB.json):
Centro del Alérgico (centrodelalergico.cl) — Las Condes, 484 reseñas, blanco sereno con acento teal; Fastest SpA (fastest.cl) — Providencia, 164 reseñas, tests rápidos, claridad total; Toma de Muestras Test+ (testmas.cl) — Santiago, 5.0★, laboratorio clínico directo; Laboratorio Clínico Prevegen (prevegen.cl) — Concepción, 241 reseñas, WordPress limpio; Difem Laboratorios (difem.cl) — La Reina, 51 reseñas, e-commerce químico sobrio; Biomer S.A. (biomer.cl) — Vitacura, equipamiento ordenado. Referencia nacional aspiracional: UC CHRISTUS y Clínica Alemana — el canónico del health system claro chileno. Internacionalmente: Mayo Clinic (mayoclinic.org) — nav blanco institucional, azul petróleo usado con parsimonia sobre papel #ffffff.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`. Copia ARCHIVOS, no node_modules. Nombre de carpeta: `propuestas/laboratorio-eter-claro`.
2. En tu copia: package.json → "name": "laboratorio-eter-claro". meta.json → { "title": "CRISTALAB — Laboratorio Clínico · Propuesta Órbita", "client": "CRISTALAB", "brand": "CRISTALAB", "sector": "laboratorio", "description": "Propuesta clara minimalista para laboratorio clínico chileno: exámenes confiables, resultados puntuales, trato humano." }. index.html → <html lang="es">, <title>CRISTALAB — Laboratorio Clínico</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- laboratorio-eter-claro`
   - `npm run propuestas:build -- laboratorio-eter-claro` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/laboratorio-eter-claro/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: CRISTALAB — Laboratorio Clínico
H1: "Exámenes claros, resultados que llegan cuando los prometimos."
Subhead: "Toma de muestras, laboratorio clínico y exámenes preventivos en Santiago. Ayuno indicado al agendar, resultados en línea y toma a domicilio sin sorpresas."
CTA principal: "Agendar toma de muestra"
Secundario: "Ver precios y preparación"
Soporte: +56 2 2952 3200 (visible permanente: "¿Dudas? Te responde una persona, no un menú eterno")
Contacto: hola@cristalab.cl · Providencia, Las Condes y Santiago Centro
Horario: Lun–Vie 07:00–18:00 · Sáb 07:30–13:00 · Dom toma a domicilio
Nota horaria: Toma en ayunas hasta las 10:30 todos los días.

## PALETA (regla dura, variables CSS en :root)
--papel #FAFBFC (fondo, NUNCA #FFF puro en bloques grandes) · --blanco #FFFFFF · --tinta #0F1E2E (grafito azulado, texto) · --gris #6B7A8F · --gris-suave #9AA6BA · --linea #E6EAF0 · --linea-fuerte #D2D9E6 · ACENTO ÚNICO --petroleo #0E7490 (teal-600, <5% de la UI: CTA principal, link activo, dato clave, subrayado). PROHIBIDO #000/#FFF puros en texto/fondo, neón, glow, gradientes, sombras difusas. border-radius: 0 en TODO. Separación por filetes 1px var(--linea) y whitespace. ::selection var(--petroleo)/texto blanco. Focus-visible ring 2px var(--petroleo).

## PASO 0 — MEDIA (public/media/, máx 4 imágenes; caras/manos con jeringa/estetoscopio = descartar)
hero.jpg 16:9 mesada de laboratorio VACÍA, luz norte fría, tubos de ensayo alineados y gradilla metálica impecable, fondo blanco desenfocado · tubos.jpg 4:5 bodegón macro de tubos al vacío con etiqueta tipográfica mínima, luz rasante fría · recepcion.jpg 16:9 recepción de toma de muestras vacía, sillas alineadas, luz natural, sin personas · texture.jpg 1:1 macro papel de examen impreso con trama tipográfica y filete 1px, luz rasante. Nada de stock con doctores sonriendo, manos con guantes apuntando, microscopios 3D neón, corazones latiendo. Si falta una imagen, tipografía y layout llevan el diseño solos.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio Hero: kicker uppercase tracking amplio ("LABORATORIO CLÍNICO · SANTIAGO · DESDE 2012"), H1 gigante tinta leading 0.92 tracking -0.03em, subhead 2 líneas gris, CTA sólido petróleo texto blanco + link subrayado animado a #precios ("Ver preparación y ayuno"). hero.jpg derecha 7/12 con caption técnica 11px ("Toma en ayunas hasta 10:30 · Resultados en línea el mismo día en exámenes seleccionados"). Banda fina bajo hero: "Ayuno indicado al agendar · Resultados por correo y plataforma · Toma a domicilio RM".

#confianza ★ LA SECCIÓN QUE DIFERENCIA — EL DOLOR REAL ★ editorial corto: "El examen ya genera ansiedad. El resto no debería." Copy base (usa literal, español de Chile): "Sabes si necesitas ayuno antes de venir. Sabes a qué hora llega la toma a domicilio — y cuánto cuesta antes de agendar. Sabes cuándo está tu resultado y dónde descargarlo sin llamar tres veces. Sin fila a las 6:30 para que te digan que faltó la orden." Sin testimonios con foto JAMÁS: la puntualidad y la claridad son el argumento. Métrica chica al pie: "Tiempo promedio entrega: hemograma 6h · perfil lipídico 12h · orina 8h (días hábiles)".

#examenes Índice numerado 01–06 editorial (NO cards iguales): Hemograma y coagulación · Perfil bioquímico / lipídico · Orina y cultivos · Hormonas y tiroides · Exámenes preventivos y alergias · PCR y test rápidos. Hover/tap expande 64px revelando preparación (ayuno 8h/12h, primera orina, sin ayuno), duración toma 5–8 min, y para quién es. Sin iconitos centrales: números grandes apagados var(--gris-suave).

#cifras Count-up al entrar (IntersectionObserver): "+13 años operando", "+42.000 exámenes al año", "98% resultados entregados en plazo informado", "3 sedes + toma a domicilio en 12 comunas RM". Números tabulares serif grandes tinta, caption 11px por cifra (fuente interna, actualizado 2025).

#precios "Precios claros, sin letra chica": tabla editorial sobria 5 filas en CLP tabulares (no cards SaaS) — Hemograma $12.900 · Perfil lipídico $18.500 · Orina completa $9.700 · Perfil tiroideo $29.900 · Toma a domicilio $14.900 RM — con columna Preparación (ayuno SÍ/NO, horas) y columna Plazo resultado. Nota honesta al pie: "Valores referenciales 2025. Con orden médica o sin ella (según examen). Bonos Fonasa nivel 1 e Isapre con reembolso indicados al agendar. El valor final se confirma antes de la toma, nunca después." Fila destacada sutil: pack preventivo anual.

#metodo 3 columnas con filete superior 1px: 01 Agendas y confirmas preparación (WhatsApp/correo con indicaciones escritas) → 02 Toma de muestra puntual (5–8 min, sala climatizada, personal certificado) → 03 Resultado en línea y aviso (correo + plataforma con PDF descargable, notificación por WhatsApp). Números grandes petróleo apagado 12%.

#sedes Mini-fichas editorial de sedes (no mapa Google embebido gigante): Providencia · Las Condes · Santiago Centro — dirección corta, horario toma ayunas, teléfono por sede 11px. Toma a domicilio: comunas RM listadas, ventana horaria 07:30–11:00, costo fijo $14.900, indicaciones de ayuno por comuna.

#faq 7 acordeones honestos (280ms, uno abierto a la vez): ¿Necesito orden médica para tomarme un examen? ¿Cuántas horas de ayuno y puedo tomar agua o mis remedios? ¿Cuándo y cómo recibo mis resultados — correo, WhatsApp o plataforma? ¿Qué convenios y previsiones aceptan (Fonasa/Isapre) y cómo es el reembolso? ¿Cuánto cuesta y qué comunas cubre la toma a domicilio? ¿Duele la toma y cuánto demora? ¿Puedo ir sin hora o debo agendar? ¿Qué hago si necesito factura o boleta para reembolso?

#reserva Sobre var(--blanco) con filete superior: headline corto "¿Listo para tu toma?", teléfono tabular gigante +56 2 2952 3200, botón sólido petróleo "Agendar toma de muestra", horarios ayunas y domicilio, micro-línea "Te responde una persona. Indicaciones de ayuno por escrito antes de venir." Footer sobrio legal CL (CRISTALAB SpA, RUT, año).

## CONVERSIÓN SIEMPRE PRESENTE
Nav translúcido blur 8px con botón petróleo "Agendar" + teléfono visible en desktop; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Agendar toma"). Subrayados animados 200ms. Barra progreso scroll 2px var(--petroleo).

## MOTION (CSS/transiciones exactas)
H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) · fade+rise 24px al entrar (once) · hovers 150–250ms · acordeones 280ms con chevron rotando 180° · count-up 1.2s easeOut · galería cortina clip-path inset 700ms · TODO respeta prefers-reduced-motion (si activo: nada se mueve, acordeón instantáneo).

## REGLAS DURAS (incumplir una = trabajo rechazado)
- Fondo claro siempre (papel/blanco según paleta). PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos.
- PROHIBIDO stock clínico cliché: doctores con fonendo a cámara, manos con jeringa gigante, microscopio neón, ADN flotando 3D, corazones latiendo, cruces médicas gigantes. Solo las imágenes ya presentes en public/media (nada externo, nada nuevo). Si falta una, tipografía y layout llevan el diseño solos.
- Sin badges de rating ni estrellas, sin marquee de logos, sin contadores falsos, sin testimonios con foto, sin planes SaaS "más elegido" con sombra gigante, sin iconitos de tubo/corazón/cruz como pieza central, sin marquee de convenios inventados.
- Accent petróleo en MENOS del 5% de la UI. Radios 0. Botón sólido tinta/petróleo sobre blanco. Sin outline fantasma como CTA principal.
- Todo texto y alt en español de Chile, alt descriptivos, contraste AA, focus-visible ring petróleo, ::selection petróleo/blanco, hero impecable a 360px, padding vertical ≥112px desktop / ≥72px móvil, max-width ~1200px, números tabulares OBLIGATORIOS en precios y cifras.
- Secciones e ids fijos del arco: #precios, #cifras, #faq (las anclas del nav deben funcionar siempre).

## PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/. 4) `npm run propuesta -- laboratorio-eter-claro`, revisa en navegador y corrige. 5) `npm run propuestas:build -- laboratorio-eter-claro` hasta cero errores. No agregues dependencias nuevas; no toques package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS y arco de conversión (¿precio, ayuno/preparación y cómo recibo mi resultado respondidos antes del footer? ¿Se siente laboratorio confiable o landing genérica?). Itera hasta lo primero. Calidad > velocidad.

Calidad > velocidad: esta propuesta se usa para vender rediseños a laboratorios clínicos chilenos del grupo claro minimalista (33/42 sitios validados por píxeles, 61 leads A+B Maps). Si queda "bien pero genérica", itera hasta que un químico farmacéutico la envidie para su propio laboratorio.
