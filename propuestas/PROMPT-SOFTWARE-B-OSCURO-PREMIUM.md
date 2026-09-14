# SUPER-PROMPT — SOFTWARE B · GRUPO "OSCURO / PREMIUM MINIMAL" (91 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para fábricas de software y consultoras tecnológicas chilenas cuya estética real
(medida por captura renderizada) es **oscura y premium minimal**: fondo noche dominante,
tipografía como joya, el producto presentado con foco. Es la estética del estudio que vende
ingeniería de alto estándar: precisión, profundidad y control — no landing de curso online
ni neón gamer.
Benchmark REAL verificado del rubro en este mismo segmento: Exequiel Araya · Agencia SEO
(exequielaraya.cl), Iteam Consulting (iteam.cl), MEAT Code (meatcode.cl), Dot Solutions
(dotsolutions.io), Taskflow Chile (taskflow.cl), Logiciel Chile (logiciel.cl), EmpresasPro
(empresaspro.cl). Internacionalmente, el canónico del software dark premium: Linear
(linear.app), Vercel (vercel.com), Railway (railway.com), Supabase (supabase.com) —
oscuridad en capas, acento único, la palabra bien puesta.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`.
   Copia ARCHIVOS, no node_modules. Nombre de carpeta: `propuestas/software-b-oscuro-premium`.
2. En tu copia: package.json → "name": "software-b-oscuro-premium". meta.json →
   { "title": "UMBRAL — Fábrica de Software · Propuesta Órbita", "client": "UMBRAL",
     "brand": "UMBRAL", "sector": "software",
     "description": "Propuesta oscura premium para fábrica de software chilena: ingeniería precisa, trato directo." }.
   index.html → <html lang="es">, <title>UMBRAL — Fábrica de Software</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- software-b-oscuro-premium`
   - `npm run propuestas:build -- software-b-oscuro-premium` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/software-b-oscuro-premium/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: UMBRAL — Fábrica de Software
H1: "Ingeniería seria, plazos que se cumplen."
Subhead: "Diseñamos, construimos y operamos el software de tu empresa con equipo propio en
Santiago. Alcance firmado, avance visible cada semana."
CTA principal: "Agendar conversación"
Soporte: +56 2 2965 4821 (visible permanente: "Hablamos hoy, respondemos nosotros")
Contacto: hola@umbral.dev · Providencia, Santiago
Horario: Lun–Vie 9:00–19:00

## PALETA (regla dura — la oscuridad tiene capas, variables CSS en :root)
--fondo #14171A (grafito profundo) · --superficie #1B1F23 · --superficie-alta #22272C ·
--filete #30363B · --hueso #E9E7E2 (texto, NUNCA #FFF) · --gris-calido #99A2A8 ·
ACENTO ÚNICO --ambar-codigo #D9A441 (<5% de la UI). PROHIBIDO #000/#FFF puros, azul-violeta
neón (#5865F2 y familia), glow en texto, gradientes púrpura genéricos.
border-radius: 0 en TODO. Profundidad por capas de fondo + filetes 1px (nunca sombras difusas).

## PASO 0 — MEDIA (public/media/, máx 4 imágenes; caras/manos/código Matrix = descartar)
hero.jpg 16:9 sala de reuniones crepuscular VACÍA, mesa larga madera oscura, luz puntual cálida
sobre cuaderno abierto · teclas.jpg 4:5 bodegón chiaroscuro de teclado mecánico retroiluminado
tenue sobre escritorio oscuro · texture.jpg 1:1 macro superficie metálica cepillada con luz
rasante · planos.jpg 16:9 diagramas técnicos impresos en blanco sobre papel, luz lateral
dramática, cinematográfico pero sereno.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero pantalla completa: kicker ámbar uppercase, H1 gigante hueso leading 0.95,
           subhead gris cálido, CTA sólido ámbar texto tinta. hero.jpg integrado por degradado
           hacia el fondo (NUNCA overlay negro plano). Grano fílmico sutilísimo (opacity .04).
#filosofia ★ LA SECCIÓN QUE DIFERENCIA ★ editorial corto: "El software falla por promesas
           grandes y procesos chicos." Copy base: "Alcance escrito antes de empezar. Demo
           funcionando cada viernes. Un ingeniero senior responde tu WhatsApp, no un ticket
           perdido." Sin testimonios públicos JAMÁS: la discreción es el argumento premium.
#cifras    Count-up tabulares serif al entrar: "+14 años construyendo", "+87 sistemas en
           producción", "96% de proyectos entregados en plazo", "1 senior asignado por cuenta".
           Evidencia numérica en vez de logos de clientes.
#servicios Índice numerado 01–06 lista editorial con HOVER FLIP-CARD (280ms): Sistemas de
           gestión a medida · Integraciones y APIs · Migración de legacy · Datos y tableros ·
           Soporte y evolución · Auditoría técnica. La fila revela panel var(--superficie) con
           duración típica y modalidad de entrega. En móvil tap = acordeón.
#precios   "Precios claros, sin letra chica": tabla sobria 4 modalidades con rango desde en UF
           tabulares (auditoría, módulo a medida, producto completo, equipo dedicado mensual)
           + nota legal honesta ("El presupuesto final se firma después del levantamiento.
           Nunca partimos un proyecto sin alcance acordado por escrito.").
#metodo    3 columnas filetes verticales 1px: 01 Levantamiento y alcance firmado →
           02 Construcción con demo semanal → 03 Operación y evolución. Números grandes
           ámbar apagado.
#galeria   teclas.jpg + planos.jpg como OBRAS DE GALERÍA: filete 1px, caption técnica 11px,
           revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.
#faq       6 acordeones honestos (280ms): ¿Cuánto cuesta un sistema a medida? ¿Cuánto demora
           un proyecto típico? ¿Qué pasa si el proyecto se desvia? ¿Quién es dueño del código?
           ¿Trabajan con equipos internos o solo tercerizan todo? ¿Cómo funciona el soporte
           después de la entrega?
#reserva   Sobre var(--superficie): headline, teléfono hueso gigante, botón ámbar, horario.
           Micro-línea: "Te responde un ingeniero, no un formulario perdido."
           Footer sobrio: marca pequeña, dirección, legal Chile, año.

## CONVERSIÓN SIEMPRE PRESENTE
Nav translúcido blur sutil con botón ámbar "Agendar"; hide-down/show-up + compacta 24px al
scroll. Sticky CTA móvil discreto tras el hero. Cursor personalizado sutil (punto ámbar 6px
con lerp, se agranda sobre links; desactivado en touch/reduced-motion).

## MOTION (CSS/transiciones exactas)
Barra progreso 2px ámbar · H1 clip-reveal líneas stagger .12s ease(0.22,1,0.36,1) · galería
cortina clip-path · count-up 1.2s · flip-cards 280ms · hovers 150–250ms · TODO respeta
prefers-reduced-motion.

## REGLAS DURAS (incumplir una = trabajo rechazado)
PROHIBIDO: personas/caras/manos, código Matrix, pantallas con dashboards falsos protagonistas,
glow/neón, gradientes púrpura-azul, testimonios con foto o estrellas, marquee de logos,
planes "más elegido", iconos centrales, emojis, stock externo, inglés. Todo español de Chile,
alt="" descriptivos, contraste AA sobre fondo oscuro, focus-visible ring ámbar, ::selection
ámbar/texto oscuro, responsive real a 360px, radios 0, padding ≥112px desktop / ≥72px móvil,
max-width ~1200px.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando
ids/anclas. 3) Genera y verifica las 4 imágenes. 4) npm run propuesta --
software-b-oscuro-premium, revisa en navegador y corrige. 5) npm run propuestas:build --
software-b-oscuro-premium hasta cero errores. No agregues dependencias nuevas; no toques
package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS
y arco de conversión (¿precio, método y dueño-del-código respondidos antes del footer? ¿Se
siente estudio de ingeniería o landing genérica?). Itera hasta lo primero. Calidad > velocidad.
7) Resumen breve final.
