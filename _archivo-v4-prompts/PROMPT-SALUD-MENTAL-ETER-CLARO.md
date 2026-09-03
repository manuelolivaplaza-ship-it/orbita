# SUPER-PROMPT v3 — SALUD MENTAL · "ÉTER-CLARO" · grupo Claro minimalista / neutro (6 sitios + 2 verde/lima)

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL analizado 2026 — **8 capturas renderizadas de 14 dominios válidos** (57% cobertura, 16 leads A+B Maps, 0 plantillas clonadas).
> Grupo objetivo: **Claro minimalista / neutro (6)** — estética dominante del rubro: papel hueso, tipografía editorial, orden y silencio. Benchmark verificado de este segmento: **CEAPSI (ceapsi.cl, Tier1 · 81)** por disciplina editorial y aire, **Centro Kiri (centrokiri.cl, Tier1 · 79)** por neutro clárísimo (99% light), **Centro Alianza (centroalianza.cl)** por agenda limpia, más terapia.cl / cepsi.net / saludmentalparatodos.cl. Referentes verde suaves del mismo ecosistema: **saludmentalraices.cl (lima/oliva, 30% px)** y **centrodeterapiaintegral.cl (verde 41% px, Tier1 · 81)**. Internacional: **Minimale/Alea** por clínico-cálido y **Plenaire** por respiración.
> Objetivo: que una persona que lleva meses postergando pedir ayuda sienta "aquí sí me van a escuchar sin juzgarme" antes de scrollear.

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio completo de un centro de salud mental chileno premium pero humano. Presupuesto percibido: USD 18.000. Editorial de calma + rigor clínico + calidez sin cursilería. No es spa, no es clínica fría: es un lugar donde pedir ayuda no da vergüenza.

CONTEXTO DEL PROYECTO (dónde y cómo se construye)
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/salud-mental-eter-claro
   (copia ARCHIVOS, no node_modules). Esa será tu app.
2) En tu copia: package.json → cambia "name" a "salud-mental-eter-claro". meta.json →
   { "title": "ÉTER — Salud Mental · Propuesta Órbita", "client": "ÉTER", "brand": "ÉTER", "sector": "salud-mental",
     "description": "Propuesta clara editorial para centros de salud mental chilenos: calma, criterio y acceso humano." }.
   index.html → <html lang="es">, <title>ÉTER — Salud Mental · Centro de Salud Mental</title>.
3) STACK REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap: todo el
   diseño va en CSS propio bien organizado. ÚNICA dependencia extra PERMITIDA si la
   necesitas para animaciones: "motion" (npm i motion). Nada más.
4) Comandos (desde la RAÍZ de órbita):
   - Desarrollo: npm run propuesta -- salud-mental-eter-claro   → http://localhost:3010
   - Build:      npm run propuestas:build -- salud-mental-eter-claro   (compila tsc + vite)
   La propuesta queda servida en /propuesta/salud-mental-eter-claro. El build debe pasar SIN errores.
5) IGNORA el resto de carpetas de propuestas/ (otros sitios son de otros clientes). No las leas, no las modifiques. Solo creas/editas DENTRO de salud-mental-eter-claro/.
6) Las imágenes generadas van en TU app: propuestas/salud-mental-eter-claro/public/media/.

BENCHMARK A IMITAR (disciplina, no copia)
CEAPSI (orden editorial, blancos generosos, filete 1px) · Centro Kiri (neutro extremo 99% light, silencio tipográfico) · Centro Alianza (agenda sin fricción) · + matiz verde contenido de Raíces (oliva/lima 30%) y Centro de Terapia Integral (verde 41% teal/verde). Internacional: Minimale Skin (confianza antes que credencial) + Plenaire (aire, puntos flotantes).

MARCA DEMO (textos literales, no cambiar)
Nombre: ÉTER — Centro de Salud Mental
H1: "Hablar ayuda. Pedir hora no debería costar tanto."
Subhead: "Psicología y psiquiatría sin lista de espera eterna. Primera hora en 72 horas, arancel claro y un equipo que te escucha sin juzgar."
CTA principal: "Agendar primera conversación" · secundario: "Ver equipo y valores"
Contacto: +56 2 2840 1188 · hola@eter.cl · Providencia / Las Condes — presencial y online
Horario: Lun–Vie 8:30–20:00 · Sáb 9:00–14:00
Badges silenciosos (no hero): "Fonasa · Isapre · Particular — boleta reembolsable"

DOLOR REAL QUE ATACAS (copy con filo chileno, no genérico wellness)
- "Llevas meses funcionando en rojo y lo llamas 'estrés'."
- "No es falta de voluntad. Es ansiedad que no te deja dormir a las 3 AM."
- "Pedir ayuda da pudor. Aquí la primera entrevista es conversación, no interrogatorio."
- "Sin lista de espera de 3 meses. Sin derivaciones eternas. Un profesional a cargo de tu caso."
- Micro-copy honesto: "Si no somos el lugar indicado para ti, te derivamos donde sí — sin cobrar de más."

PALETA (regla dura, como variables CSS en :root — medida de 8 capturas: 0% oscuros, 6 neutros)
--papel #F7F4EF · --papel-2 #EFE9E0 · --tinta #1E1C19 · --gris #8A8378 · --linea #D9D3C8 ·
ACENTO ÚNICO --sage #7A9A84 (verde salvia contenido, <5% de la UI: CTA secundario, kickers, links, estados activos; CTA principal es sólido tinta sobre papel). PROHIBIDO verde neón, lima saturado (#BFFF00 y familia), dorados brillantes. border-radius: 0 en TODO. Cero sombras difusas: separación por filetes 1px var(--linea) y whitespace. Fondo claro SIEMPRE.

PASO 0 — MEDIA (public/media/, máx 4 imágenes; caras/manos/equipos posando = descartar y regenerar)
room.jpg 16:9 sala de terapia VACÍA luz norte: sillón lino claro, mesa de roble clara, ventana grande, planta pequeña desenfocada, pared blanca rota — calma absoluta, sin personas ·
still.jpg 4:5 bodegón sobre papel hueso: cuaderno abierto, lápiz grafito, taza cerámica y ramita de eucalipto, luz natural ·
detail.jpg 1:1 macro lino pálido/textura papel algodón con luz rasante suave ·
window.jpg 16:9 pasillo luminoso vacío con luz natural y sombra suave, sereno, nada clínico frío.

SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio  Hero: kicker sage uppercase tracking amplio ("CENTRO DE SALUD MENTAL · PROVIDENCIA / ONLINE"), H1 gigante leading 0.92 tracking negativo, subhead 2 líneas, CTA sólido tinta "Agendar primera conversación" + link subrayado animado sage a #equipo. room.jpg derecha 7/12, caption técnica 11px ("Sala Éter — luz norte, sin interrupciones"). Banda fina bajo hero: "Primera hora en 72h · Arancel informado antes · Presencial y online · Fonasa/Isapre". Puntos flotantes sutiles opacity .12 guiño Plenaire.
#evidencia  Count-up al entrar (IntersectionObserver): "+1.800 primeras conversaciones", "94% continúa su proceso", "11 años", "72h primera hora". Números tabulares serif. Nota pequeña: "Sin antes/después. La evidencia es continuidad, no foto."
#cifras  (alias de #evidencia — id debe existir #cifras con los mismos números para cumplir regla dura) — si usas #evidencia, duplica el bloque con id="cifras" o usa ambos ids.
#servicios  Índice numerado 01–06 editorial (NO cards): Psicoterapia adultos · Psiquiatría · Infanto-juvenil · Terapia de pareja y familia · Intervención en crisis · Talleres y grupos. Hover/tap expande 64px revelando "para quién es / duración 50 min / desde $XX.XXX" (280ms). Lenguaje plano, sin jerga.
#equipo  3 columnas filete superior 1px: foto NO es persona — es detalle de espacio/objeto que representa cada línea (ej. sillón, cuaderno clínico, ventana). Nombre, credencial breve (Psicóloga PUC, Psiquiatra U. de Chile), enfoque en 1 línea. "Un profesional a cargo, no rotación".
#precios  "Valores claros, sin sorpresas": tabla editorial 5 filas precio DESDE en CLP tabulares (Primera conversación 50 min, Psicoterapia sesión, Psiquiatría control, Terapia pareja, Taller grupal) + nota honesta: "El valor final se confirma en la primera conversación. Emitimos boleta reembolsable. Si tu caso necesita otro especialista, te derivamos sin costo extra." Sin badge "más elegido".
#metodo  3 columnas filete superior 1px: 01 Conversación inicial (50 min, sin juicio) → 02 Plan y frecuencia por escrito → 03 Seguimiento y ajuste. Números grandes sage apagado. Sin iconitos centrales.
#voces  3 testimonios SIN foto SIN estrellas: cita serif itálica grande, comilla sage, atribución "— C., 34 · ansiedad" / "— Madre de M., 9 · infanto-juvenil". Rotación fade lenta, pausable. Disclaimer 11px: "Testimonios con consentimiento, sin datos identificables."
#faq  6 acordeones honestos (280ms): ¿Cuánto cuesta la primera hora? ¿Atienden Fonasa/Isapre? ¿Presencial u online? ¿Cada cuánto son las sesiones? ¿Qué pasa si no conecto con mi terapeuta? ¿Cómo pido hora si estoy en crisis? Respuestas con teléfono visible y derivación a urgencia si corresponde.
#reserva  Headline corto "Da el primer paso. Nosotros el segundo." + teléfono tabular gigante + CTA tinta + horarios + dirección. Micro-línea: "Respondemos personas, no bots. Si no contestamos en el momento, devolvemos el llamado el mismo día." Footer sobrio legal CL (Razón social ÉTER SpA, SII, año, consentimiento informado).

CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Agendar" sólido tinta fijo; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Agendar primera conversación"). Subrayados animados 200ms. Teléfono fijo visible en header y footer.

MOTION (CSS/transiciones exactas; o "motion" si instalada)
Barra progreso scroll 2px sage · H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) · fade+rise 24px al entrar (once) · hovers 150–250ms · acordeones/count-up 280ms/1.2s · TODO respeta prefers-reduced-motion (si activo: nada se mueve).

REGLAS DURAS (incumplir una = rechazado)
- Fondo claro siempre (papel según paleta). PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos.
- PROHIBIDO stock salud mental cliché: personas abrazándose, cabezas entre manos dramáticas, cerebros iluminados, puzzles, manos sobre hombros, equipos posando con delantal. Solo las imágenes ya presentes en public/media (nada externo, nada nuevo). Si falta una, tipografía y layout llevan el diseño solos.
- PROHIBIDO antes/después, promesas de cura, badges de rating con estrellas, marquee de logos, contadores falsos, planes "más elegido", iconitos de cerebro/corazón como pieza central, emojis.
- Accent sage en MENOS del 5% de la UI. Radios 0. Botón sólido tinta sobre fondo claro (no sage sólido).
- Todo texto y alt en español de Chile, alt="" descriptivos, contraste AA, focus-visible ring sage, ::selection sage/texto claro, hero impecable a 360px, padding vertical ≥112px desktop / ≥72px móvil, max-width ~1200px.
- Ética: sin diagnósticos en el copy, sin urgencia falsa, derivación responsable a urgencia en FAQ y footer.

PROCESO OBLIGATORIO
1) Duplica _plantilla → salud-mental-eter-claro y ajusta name/meta/title. 2) Genera y verifica las 4 imágenes en public/media/. 3) Maqueta sección por sección respetando ids/anclas (#inicio, #cifras, #precios, #faq, #reserva obligatorios). 4) npm run propuesta -- salud-mental-eter-claro, revisa en navegador y corrige. 5) npm run propuestas:build -- salud-mental-eter-claro hasta cero errores. No agregues dependencias nuevas; no toques package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS y arco de conversión (¿precio, quién-te-atiende y cómo-pedir-hora respondidos antes del footer? ¿Se siente calma o clínica fría?). Itera hasta lo primero. Calidad > velocidad. 7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a centros de salud mental chilenos (grupo de 6 neutros + halo verde). Si queda "bien pero genérica wellness", itera hasta que un centro la envidie para sí mismo.
```
