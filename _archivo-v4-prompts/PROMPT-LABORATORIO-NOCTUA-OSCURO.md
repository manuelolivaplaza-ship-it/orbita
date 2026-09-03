# SUPER-PROMPT — LABORATORIO · GRUPO "OSCURO / PREMIUM MINIMAL (real)" (2 sitios) · NOCTUA-OSCURO

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño reutilizable para laboratorios clínicos premium en Chile cuya estética real (medida por captura renderizada) es **oscura y premium minimal**: fondo noche dominante, tipografía como joya, el laboratorio presentado con foco quirúrgico. Es la estética del laboratorio que vende precisión, bioseguridad y trato directo — no landing de farmacia ni neón clínico. Es el 5% más oscuro del mercado laboratorio chileno, pero el que cobra mejor: toma privada, sin fila, resultado impecable.

Benchmark REAL verificado del rubro en este mismo segmento (medido por captura renderizada, 61 leads A+B Maps solo crm-maps-AB.json):
Laboratorio Clínico Xima Limitada (laboratorioxima.cl) — La Serena, 146 reseñas, 52% oscuro por píxeles, WordPress sobrio nocturno; Unidad de Toma de Muestras | Laboratorio UC CHRISTUS (ucchristus.cl) — Santiago, 56% oscuro, el referente premium UC. Como espejo aspiracional chileno oscuro: UC CHRISTUS nocturno y la sala técnica de Clínica Las Condes de noche. Internacionalmente, el canónico del health dark premium: Linear (linear.app), Vercel (vercel.com), Supabase (supabase.com) — oscuridad en capas, acento único cian hielo, la palabra bien puesta y la muestra bien tratada.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`. Copia ARCHIVOS, no node_modules. Nombre de carpeta: `propuestas/laboratorio-noctua-oscuro`.
2. En tu copia: package.json → "name": "laboratorio-noctua-oscuro". meta.json → { "title": "ORIA — Laboratorio Clínico Premium · Propuesta Órbita", "client": "ORIA", "brand": "ORIA", "sector": "laboratorio", "description": "Propuesta oscura premium para laboratorio clínico chileno: precisión nocturna, bioseguridad y resultado puntual." }. index.html → <html lang="es">, <title>ORIA — Laboratorio Clínico Premium</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- laboratorio-noctua-oscuro`
   - `npm run propuestas:build -- laboratorio-noctua-oscuro` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/laboratorio-noctua-oscuro/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: ORIA — Laboratorio Clínico Premium
H1: "Precisión que se nota antes de abrir el resultado."
Subhead: "Laboratorio clínico privado en Santiago. Toma agendada sin espera, cadena de frío controlada y resultados en plataforma con aviso directo."
CTA principal: "Agendar toma privada"
Secundario: "Ver protocolos y bioseguridad"
Soporte: +56 2 2952 3200 (visible permanente: "Hablamos hoy, responde nuestro equipo técnico")
Contacto: hola@oria.cl · Providencia, Santiago
Horario: Lun–Vie 07:00–19:00 · Sáb 07:30–14:00 · Toma a domicilio nocturna con agenda

## PALETA (regla dura — la oscuridad tiene capas, variables CSS en :root)
--fondo #0F1419 (grafito azul-negro profundo) · --superficie #18202A · --superficie-alta #222E3B · --filete #2F3D4F · --hueso #E8EEF2 (texto, NUNCA #FFF) · --gris-calido #8A9BB0 · --gris-apagado #5A6A80 · ACENTO ÚNICO --cian-hielo #7BC4D6 (<5% de la UI: CTA, kicker, dato clave, subrayado). PROHIBIDO #000/#FFF puros, azul-violeta neón (#5865F2 y familia), glow en texto, gradientes púrpura genéricos, sombras difusas. border-radius: 0 en TODO. Profundidad por capas de fondo + filetes 1px (nunca sombras). ::selection var(--cian-hielo)/texto tinta. Focus-visible ring 2px var(--cian-hielo).

## PASO 0 — MEDIA (public/media/, máx 4 imágenes; caras/manos/código Matrix = descartar)
hero.jpg 16:9 sala de toma de muestras crepuscular VACÍA, camilla y gradilla iluminadas puntual cálida sobre fondo noche, sin personas · tubos-dark.jpg 4:5 bodegón chiaroscuro de tubos al vacío sobre acero oscuro cepillado, luz rasante fría · texture.jpg 1:1 macro superficie de acero inoxidable cepillado con luz rasante · lab-noche.jpg 16:9 mesada de laboratorio nocturna con microscopio y cuaderno técnico, luz lateral dramática, cinematográfico pero sereno. Nada de doctores con fonendo, manos con guantes apuntando, ADN 3D neón, cruces gigantes. Si falta una, tipografía y layout llevan el diseño solos.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio Hero pantalla completa: kicker cian-hielo uppercase ("LABORATORIO PRIVADO · SANTIAGO · CADENA DE FRÍO CONTROLADA"), H1 gigante hueso leading 0.92 tracking -0.03em, subhead gris cálido 2 líneas, CTA sólido cian-hielo texto tinta + link secundario a #precios. hero.jpg integrado por degradado hacia var(--fondo) (NUNCA overlay negro plano). Grano fílmico sutilísimo opacity .04. Caption técnica 11px: "Toma agendada cada 15 min · Sin sala de espera compartida · Bioseguridad certificada".

#filosofia ★ LA SECCIÓN QUE DIFERENCIA ★ editorial corto: "La muestra no espera. Nosotros tampoco." Copy base (usa literal): "Cadena de frío desde la toma hasta el informe. Tubo etiquetado delante tuyo, no después. Resultado en plataforma con hora de liberación informada al agendar — no 'entre 24 y 72 horas, llame para consultar'. Si algo compromete la muestra, te avisamos antes de cobrarte, no después." Sin testimonios públicos JAMÁS: la discreción y la trazabilidad son el argumento premium. Métrica al pie 11px: "Trazabilidad completa · Transporte refrigerado · Informe con firma bioquímico".

#examenes Índice numerado 01–06 lista editorial con HOVER FLIP-CARD (280ms): Hemograma y coagulación con control interno · Perfil lipídico y bioquímico con ayuno controlado · Orina y cultivos con frasco estéril entregado · Hormonas y tiroides con toma matinal · Preventivos ejecutivos y alergias · PCR y carga viral. La fila revela panel var(--superficie) con preparación exacta (ayuno 8h/12h, hora ideal toma), duración y bioseguridad. En móvil tap = acordeón.

#cifras Count-up tabulares serif al entrar: "+15 años de laboratorio", "+38.000 informes al año", "99.1% muestras sin re-toma por trazabilidad", "1 bioquímico firmante por informe". Números hueso grandes tabulares, caption gris cálido 11px.

#precios "Precios claros, sin letra chica": tabla sobria 4 filas en CLP tabulares sobre var(--superficie) — Hemograma premium $16.900 · Perfil lipídico $22.500 · Perfil tiroideo completo $34.900 · Toma privada a domicilio $19.900 RM — con columna Preparación y columna Plazo garantizado. Nota honesta: "Valores referenciales 2025. Orden médica según examen. Fonasa nivel 1 y reembolso Isapre informados antes de agendar. Si la muestra no es viable, no se cobra el procesamiento.".

#metodo 3 columnas filetes verticales 1px var(--filete): 01 Agenda con preparación escrita y ventana horaria exacta → 02 Toma privada puntual (box individual, etiquetado delante tuyo, cadena de frío inmediata) → 03 Informe en plataforma con aviso (PDF firmado por bioquímico, notificación por WhatsApp/correo, hora de liberación respetada). Números grandes cian-hielo apagado 18%.

#galeria tubos-dark.jpg + lab-noche.jpg como OBRAS DE GALERÍA: filete 1px var(--filete), caption técnica 11px ("Tubo EDTA etiquetado en box · Acero 316 cepillado · 07:30 toma en ayunas"), revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.

#faq 6 acordeones honestos (280ms): ¿Necesito orden médica o puedo tomarme el examen directo? ¿Cuántas horas de ayuno y qué pasa con agua y remedios? ¿Cómo y cuándo recibo mi resultado — plataforma, correo o WhatsApp? ¿Qué pasa si mi muestra no es viable o necesita re-toma? ¿Qué convenios aceptan y cómo funciona el reembolso Fonasa/Isapre? ¿Cuánto cuesta la toma a domicilio privada y qué comunas cubre con cadena de frío? ¿Cómo garantizan la bioseguridad y la trazabilidad de mi muestra?

#reserva Sobre var(--superficie): headline "¿Agendamos tu toma privada?", teléfono hueso gigante tabular +56 2 2952 3200, botón sólido cian-hielo texto tinta "Agendar toma privada", horarios y nota "Responde nuestro equipo técnico, no un call center." Footer sobrio: marca pequeña, dirección Providencia, razón social ORIA SpA, año.

## CONVERSIÓN SIEMPRE PRESENTE
Nav translúcido blur sutil con botón cian-hielo "Agendar"; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero. Cursor personalizado sutil (punto cian 6px con lerp, se agranda sobre links; desactivado en touch/reduced-motion). Barra progreso 2px cian-hielo.

## MOTION (CSS/transiciones exactas)
Barra progreso 2px cian-hielo · H1 clip-reveal líneas stagger .12s ease(0.22,1,0.36,1) · galería cortina clip-path inset 700ms · count-up 1.2s · flip-cards 280ms · hovers 150–250ms · acordeones 280ms · TODO respeta prefers-reduced-motion.

## REGLAS DURAS (incumplir una = trabajo rechazado)
PROHIBIDO: personas/caras/manos, ADN 3D neón, microscopios gigantes fluorescentes, cruces médicas gigantes, dashboards falsos, glow/neón, gradientes púrpura-azul, testimonios con foto o estrellas, marquee de logos, planes "más elegido" con badge, iconos centrales, emojis, stock externo, inglés. Todo español de Chile, alt descriptivos, contraste AA sobre fondo oscuro (hueso #E8EEF2 sobre #0F1419), focus-visible ring cian-hielo, ::selection cian-hielo/tinta, responsive real a 360px, radios 0, padding ≥112px desktop / ≥72px móvil, max-width ~1200px, números tabulares OBLIGATORIOS en precios.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/. 4) `npm run propuesta -- laboratorio-noctua-oscuro`, revisa en navegador y corrige. 5) `npm run propuestas:build -- laboratorio-noctua-oscuro` hasta cero errores. No agregues dependencias nuevas; no toques package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS y arco de conversión (¿precio, trazabilidad/bioseguridad y cómo recibo mi resultado respondidos antes del footer? ¿Se siente laboratorio premium o landing genérica?). Itera hasta lo primero. Calidad > velocidad. 7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a laboratorios clínicos premium chilenos (grupo oscuro real 2/42 validado por píxeles, 61 leads A+B Maps). Si queda "bien pero genérica", itera hasta que un bioquímico jefe la envidie para su propio laboratorio.
