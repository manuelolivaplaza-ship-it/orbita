# SUPER-PROMPT — DENTISTA B · GRUPO "OSCURO / PREMIUM MINIMAL (real)" (11 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para clínicas y consultas dentales chilenas cuya estética real (medida por
captura renderizada) es **oscura y premium minimal**: fondo noche dominante, tipografía como
joya, la sala clínica presentada con foco. Es la estética del implantólogo/especialista que
vende precisión, tecnología y calma — no promociones de blanquimiento ni neón.
Benchmark REAL verificado del rubro en este mismo segmento: Odonty (dentistaensantiago.cl),
Dr. Tomás Ilardi Implantólogo (drtomasilardi.cl), Dentalentti (dentalentti.cl), Clínica Magna
(clinicamagna.cl), Clínica Renova (clinicarenova.cl), Hempel y Mesa Ortodoncia (hmo.cl).
Internacionalmente, el canónico del dental dark premium: The Dentists (thedentistsoffice.com),
Studio Dentaire (studiodentaire.ch), dental boutique de lujo — oscuridad cálida,
serif/sans contrastadas, el box como galería iluminada.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`.
   Copia ARCHIVOS, no node_modules. Nombre de carpeta: `propuestas/dentista-b-oscuro-premium`.
2. En tu copia: package.json → "name": "dentista-b-oscuro-premium". meta.json →
   { "title": "OBSIDIANA DENTAL — Clínica de Especialidad · Propuesta Órbita", "client": "OBSIDIANA DENTAL",
     "brand": "OBSIDIANA DENTAL", "sector": "dentista",
     "description": "Propuesta oscura premium para clínica dental chilena: especialidad, tecnología y calma." }.
   index.html → <html lang="es">, <title>OBSIDIANA DENTAL — Clínica Dental de Especialidad</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- dentista-b-oscuro-premium`
   - `npm run propuestas:build -- dentista-b-oscuro-premium` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/dentista-b-oscuro-premium/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: OBSIDIANA DENTAL — Clínica de Especialidad
H1: "La calma también es parte del tratamiento."
Subhead: "Implantología, estética y rehabilitación con protocolo de especialidad.
Diagnóstico digital y presupuesto por escrito antes de tocar un solo diente."
CTA principal: "Reservar evaluación"
Urgencias: +56 9 8765 4321 (visible permanente)
Contacto: hola@obsidianadental.cl · Las Condes, Santiago
Horario: Lun–Vie 9:00–19:30 · Sáb con hora

## PALETA (regla dura — la oscuridad tiene capas, variables CSS en :root)
--fondo #14171B (azul-negro profundo) · --superficie #1B2026 · --superficie-alta #232A31 ·
--filete #2F3840 · --hueso #EDEBE6 (texto, NUNCA #FFF) · --gris-calido #97A1AB ·
ACENTO ÚNICO --celeste-quirurgico #8FC7DC (<5% de la UI). PROHIBIDO #000/#FFF puros, azul
neón (#00BFFF y familia), glow en texto, gradientes púrpura genéricos.
border-radius: 0 en TODO. Profundidad por capas de fondo + filetes 1px (nunca sombras difusas).

## PASO 0 — MEDIA (public/media/, máx 4 imágenes; caras/sonrisas/manos = descartar)
hero.jpg 16:9 box dental crepuscular VACÍA, sillón como pieza escultórica bajo luz puntual
cálida · object.jpg 4:5 bodegón chiaroscuro de instrumental dental sobre piedra oscura ·
texture.jpg 1:1 macro tela quirúrgica celeste pálido con luz rasante ·
corridor.jpg 16:9 pasillo clínico nocturno simétrico con focos empotrados cálidos,
cinematográfico pero sereno.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero pantalla completa: kicker celeste uppercase, H1 gigante hueso leading 0.95,
           subhead gris cálido, CTA sólido celeste texto tinta. hero.jpg integrado por
           degradado hacia el fondo (NUNCA overlay negro plano). Grano fílmico sutilísimo
           (opacity .04).
#filosofia ★ LA SECCIÓN QUE DIFERENCIA ★ editorial corto: "Un plan claro antes que una silla
           de dentista." Copy base: "Radiografía panorámica digital el primer día. Presupuesto
           por escrito. El mismo especialista desde la evaluación hasta el control final."
           Sin testimonios públicos JAMÁS: la discreción es el argumento premium.
#cifras    Count-up tabulares serif al entrar: "+16 años de especialidad", "+6.500 implantes
           colocados", "98% continúa sus controles", "2 especialistas titulados siempre los
           mismos". Evidencia numérica en vez de sonrisas de stock.
#especialidades Índice numerado 01–06 lista editorial con HOVER FLIP-CARD (280ms):
           Implantología · Estética dental · Rehabilitación oral · Endodoncia microscópica ·
           Periodoncia · Ortodoncia invisible. La fila revela panel var(--superficie) con
           duración típica y valor "desde". En móvil tap = acordeón.
#precios   "Valores claros, sin sorpresas": tabla sobria 5 tratamientos precio desde en CLP
           tabulares + nota legal honesta ("El valor final se confirma en la evaluación con
           radiografía. Nunca partimos un tratamiento sin tu aprobación por escrito.").
#metodo    3 columnas filetes verticales 1px: 01 Evaluación y diagnóstico digital →
           02 Plan explicado paso a paso → 03 Tratamiento y control. Números grandes celeste
           apagado.
#galeria   object.jpg + texture.jpg como OBRAS DE GALERÍA: filete 1px, caption técnica 11px,
           revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.
#faq       6 acordeones honestos (280ms): ¿Cuánto cuesta la evaluación inicial? ¿Colocar un
           implante duele? ¿Cuánto demora un implante de principio a fin? ¿Quién realiza el
           procedimiento? ¿Qué formas de pago aceptan? ¿Cómo es el post-operatorio?
#reserva   Sobre var(--superficie): headline, teléfono hueso gigante, botón celeste,
           horarios. Micro-línea: "Respondemos personalmente. Sin call centers."
           Footer sobrio: marca pequeña, dirección, legal Chile, año.

## CONVERSIÓN SIEMPRE PRESENTE
Nav translúcido blur sutil con botón celeste "Reservar"; hide-down/show-up + compacta 24px al
scroll. Sticky CTA móvil discreto tras el hero. Cursor personalizado sutil (punto celeste 6px
con lerp, se agranda sobre links; desactivado en touch/reduced-motion).

## MOTION (CSS/transiciones exactas)
Barra progreso 2px celeste · H1 clip-reveal líneas stagger .12s ease(0.22,1,0.36,1) · galería
cortina clip-path · count-up 1.2s · flip-cards 280ms · hovers 150–250ms · TODO respeta
prefers-reduced-motion.

## REGLAS DURAS (incumplir una = trabajo rechazado)
PROHIBIDO: personas/caras/sonrisas de stock, bocas abiertas, antes/después, testimonios con
foto o estrellas, marquee, planes "más elegido", iconitos de diente centrales, glow/neón,
#000/#FFF puros, overlays negros planos sobre foto, emojis, stock externo, inglés. Todo
español de Chile, alt="" descriptivos, contraste AA sobre fondo oscuro, focus-visible ring
celeste, ::selection celeste/texto oscuro, responsive real a 360px, radios 0, padding ≥112px
desktop / ≥72px móvil, max-width ~1200px.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando
ids/anclas. 3) Genera y verifica las 4 imágenes. 4) npm run propuesta --
dentista-b-oscuro-premium, revisa en navegador y corrige. 5) npm run propuestas:build --
dentista-b-oscuro-premium hasta cero errores. No agregues dependencias nuevas; no toques
package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS
y arco de conversión (¿valor, urgencia y quién-trata respondidos antes del footer? ¿Se siente
clínica de especialidad o landing genérica?). Itera hasta lo primero. Calidad > velocidad.
7) Resumen breve final.
