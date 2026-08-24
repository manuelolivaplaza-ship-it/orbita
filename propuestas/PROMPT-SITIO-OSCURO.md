# SUPER-PROMPT v3 — SITIO OSCURO PREMIUM · "NOCTUA" (grupo estética oscuro real · 18 leads)

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL analizado 2026: **The Perfect Secret** (quiet luxury dark-on-dark + metal),
> **Skinney MedSpa** (flip-cards dark editorial), **Skin Verse Beverly Hills** (serif/sans,
> imágenes como galería iluminada). Objetivo: que el dueño SIENTA que su web actual es de otra época.

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio de una clínica
estética premium chilena en modo oscuro editorial. Presupuesto percibido: USD 30.000.
Debe sentirse como entrar a un club privado subterráneo: oscuridad cálida y rica, discreción,
tipografía como joya, cada imagen como pieza de colección iluminada con foco cálido.

CONTEXTO DEL PROYECTO (dónde y cómo se construye)
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/noctua-oscuro
   (copia ARCHIVOS, no node_modules). Esa será tu app.
2) En tu copia: package.json → "name": "noctua-oscuro". meta.json →
   { "title": "NOCTUA — Medicina estética · Propuesta Órbita", "client": "NOCTUA" }.
   index.html → <html lang="es">, <title>NOCTUA — Medicina estética</title>.
3) STACK REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap: todo el
   diseño va en CSS propio bien organizado. ÚNICA dependencia extra PERMITIDA si la
   necesitas para animaciones: "motion" (npm i motion). Nada más.
4) Comandos (desde la raíz de órbita):
   - Desarrollo: npm run propuesta -- noctua-oscuro   → http://localhost:3010
   - Build:      npm run propuestas:build -- noctua-oscuro
   La propuesta queda servida en /propuesta/noctua-oscuro. El build debe pasar SIN errores.
5) IGNORA el resto de carpetas de propuestas/ (minimayorista, zips, otros sitios): son de
   otros clientes. No las leas, no las modifiques. Solo creas/editas DENTRO de noctua-oscuro/.
6) Las imágenes generadas van en TU app: propuestas/noctua-oscuro/public/media/.

BENCHMARK A IMITAR (disciplina, no copia)
The Perfect Secret (quiet luxury: oscuridad opulenta y privada, club de miembros) ·
Skinney MedSpa (dark editorial + flip-cards) · Skin Verse Beverly Hills (serif/sans
contrastadas, fotos presentadas como galería iluminada).

MARCA DEMO (textos literales, no cambiar)
Nombre: NOCTUA — Medicina estética
H1: "El lujo es no notar el trabajo."
Subhead: "Protocolos estéticos avanzados con criterio médico. Resultados naturales,
evaluación honesta, cero fórmulas mágicas."
CTA principal: "Reservar evaluación privada"
Contacto: +56 9 8765 4321 · hola@noctua.cl · Las Condes, Santiago
Horario: Lun–Vie 10:00–20:00 · Sáb 10:00–14:00

PALETA (regla dura — la oscuridad tiene capas, como variables CSS en :root)
--fondo #121110 (negro CÁLIDO) · --superficie #1B1917 · --superficie-alta #23201C ·
--filete #2E2A26 · --marfil #EDE8E0 (texto, NUNCA #FFF) · --gris-cálido #9B948B ·
ACENTO ÚNICO --champan #C8A96A (<5% UI). PROHIBIDO #000/#FFF puros, dorado brillante
(#FFD700 y familia), neones, glow en texto, gradientes púrpura-azul genéricos.
border-radius: 0 en TODO. Profundidad por capas de fondo + filetes 1px (nunca sombras difusas).

PASO 0 — MEDIA (public/media/, máx 4 imágenes; caras/manos/logos = descartar y regenerar)
hero.jpg 16:9 sala crepuscular luz oculta cálida, yeso carbón, cama marfil, latón, VACÍA ·
object.jpg 4:5 bodegón chiaroscuro frasco ámbar sobre piedra oscura · texture.jpg 1:1 macro
seda carbón con luz rasante cálida · corridor.jpg 16:9 pasillo nocturno simétrico con focos
empotrados cálidos y obra enmarcada, cinematográfico pero sereno.

SECCIONES — ARCO DE CONVERSIÓN (ids fijos)
#inicio  Hero pantalla completa: kicker champán uppercase, H1 gigante marfil leading 0.95,
         subhead gris cálido, CTA sólido champán texto tinta. hero.jpg lateral 7/12 integrado
         por degradado hacia el fondo (NUNCA overlay negro plano). Grano fílmico sutilísimo
         (opacity .04) sobre toda la página.
#filosofia ★ LA SECCIÓN QUE DIFERENCIA ★ "Discreción total": editorial sobre la promesa del
         nombre — resultados que nadie nota, privacidad absoluta. Copy base: "Nuestros mejores
         resultados son los que nadie puede señalar." Sin testimonios públicos JAMÁS: la
         ausencia es el argumento premium.
#cifras  Count-up tabulares serif al entrar: "+15 años", "+3.000 protocolos", "97% continúa
         su plan", "1 médica, siempre la misma". Evidencia numérica en vez de before/after.
#tratamientos Índice numerado 01–06 lista editorial con HOVER FLIP-CARD (280ms): la fila
         revela panel var(--superficie) con duración, sesiones típicas y precio "desde".
         En móvil tap = acordeón.
#precios "Precios claros, sin sorpresas": tabla sobria 4 tratamientos precio desde + nota
         legal honesta ("El valor final se confirma en tu evaluación privada.").
#metodo  3 columnas filetes verticales 1px: 01 Diagnóstico → 02 Protocolo → 03 Seguimiento,
         números grandes champán apagado.
#galeria object.jpg + texture.jpg como OBRAS DE GALERÍA: filete 1px, caption técnica 11px,
         revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.
#faq     5 acordeones honestos (280ms): ¿Duele? ¿Cuánto dura? ¿Quién realiza? ¿Por qué no
         muestran casos? ¿Cómo agendo?
#reserva Sobre var(--superficie): headline, teléfono marfil gigante, botón champán, horarios.
         Micro-línea: "Respondemos personalmente. Sin call centers."
Footer sobrio: marca pequeña, dirección, legal Chile, año.

CONVERSIÓN SIEMPRE PRESENTE
Nav translúcido blur sutil con botón champán "Reservar"; hide-down/show-up + compacta 24px al
scroll. Sticky CTA móvil discreto tras el hero. Cursor personalizado sutil (punto champán 6px
con lerp, se agranda sobre links; desactivado en touch/reduced-motion).

MOTION (CSS/transiciones exactas; o "motion" si instalada)
Barra progreso 2px champán · H1 clip-reveal líneas stagger .12s ease(0.22,1,0.36,1) · galería
cortina clip-path · count-up 1.2s · flip-cards 280ms · hovers 150–250ms · TODO respeta
prefers-reduced-motion.

REGLAS DURAS (incumplir una = rechazado)
PROHIBIDO: personas/caras/manos, antes/después, testimonios con foto o estrellas, marquee,
planes SaaS, iconos centrales, glow/neón, #000/#FFF puros, dorados brillantes, overlays negros
planos sobre foto, emojis, stock externo, inglés. Todo español de Chile, alt="" descriptivos,
contraste AA, focus-visible ring champán, ::selection champán/texto oscuro, responsive real a
360px, radios 0, padding ≥112px desktop / ≥72px móvil, max-width ~1200px.

PROCESO OBLIGATORIO
1) Duplica _plantilla → noctua-oscuro y ajusta name/meta/title. 2) Genera y verifica las 4
imágenes. 3) Maqueta componente por componente. 4) npm run propuesta -- noctua-oscuro y revisa
en navegador; corrige. 5) npm run propuestas:build -- noctua-oscuro hasta cero errores.
6) Auto-revisión contra REGLAS DURAS y arco de conversión. ¿Se siente club privado o página
genérica? Itera hasta lo primero. Calidad > velocidad. 7) Resumen breve final.
```
