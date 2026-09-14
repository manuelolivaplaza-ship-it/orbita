# PAUSA — grupo CRM “oscuro” (el SITIO es claro; reemplaza a Vesper)

Vesper era un disfraz de hotel: oro, lluvia, italic, silla de cuero. Esto es lo contrario: papel, tipo, una habitación vacía.

```text
ROL
Sitio de una consulta de adultos, una silla, agenda corta. Tiene que parecer el colophon de una editorial o el site de un taller de cerámica. USD 20.000. Si parece “lujo Instagram” (negro, gold, serif italic, lluvia) o si el fondo es oscuro: FALLASTE. Tiralo y empezá de nuevo. Página siempre papel claro.

PROHIBIDO
Personas, caras, sonrisas, antes/después, testimonios con foto, badge de estrellas, marquee, 3 planes SaaS, oro, negro total, lluvia, lámpara de alabastro, daybed, “quiet wealth”, Unsplash/Mixkit, diente 3D, overlay cinematográfico.

PASO 0 — 2 FOTOS NADA MÁS
/public/media/room.jpg 3:2
“Empty treatment room that looks like a small library: limewashed walls, one oak table, a mid-grey chair EMPTY facing a window with linen curtain, noon, Chile, 35mm, straight, no medical trays in foreground, no logos, no people, no text. Soft. Quiet. Not dark.”
/public/media/still.jpg 4:5
“Still life on oak: a white ceramic cup, a folded grey cloth, one metal mouth mirror 40cm away out of focus. 80mm, window light. No hands. No teeth.”
Sin video.

STACK
React + TS + Tailwind. Fuentes: "Source Serif 4" 400–600 + "Söhne" no existe en Google — usar "IBM Plex Sans" 400/500. Display = Source Serif. Body = Plex. NADA de Cormorant, Playfair, Gold.

MARCA DEMO
Pausa · “Una hora. Un sillón. Nadie más.”
CTA: Pedir una hora
+56 9 8765 4321 · hola@pausa.cl · Santiago
Mar–Vie 10:00–19:00 · Sáb 10:00–14:00 · lunes cerrado
Tono: frases cortas. Como una nota en papel.

SISTEMA
--bg #F6F1E8
--ink #1C1916
--mute #6B645C
--line #E0D8CC
--accent #1C1916   (no hay color de marca; el acento ES el negro)
Radios 0. Botón: borde 1px --ink, fondo transparente, hover --ink texto --bg, 200ms.
Page max-w 1120. Mucho aire: py-32 en secciones.

CHROME
fixed, wordmark pausa en Source Serif 22px lowercase, weight 400.
Links md+: Enfoque · Qué hacemos · La hora · Agenda
CTA “Pedir una hora” 12px tracking 0.12em
68→56px scrollY≥24, 280ms. Top: --bg 0%. Scrolled: --bg 94% + border-b --line.
HIDE/SHOW: delta 8px, umbral 88px, 320ms. No esconder con sheet/focus.
Progress 1px --ink (más fino que los otros).
Sheet móvil 320ms, fondo --bg, links Source Serif 32px.

HERO — casi sin imagen
min-h-[88vh] flex flex-col justify-end pb-20.
kicker 11px tracking 0.22em: CONSULTA DE ADULTOS · SANTIAGO
h1 Source Serif 400, clamp(48px, 8vw, 88px), leading 0.95, EXACTO:
  Una hora.
  Un sillón.
  Nadie más.
Párrafo 18px / 1.55 max-w 32ch mt-8 --mute:
  “Ocho pacientes al día. Sin sala de espera llena. Sin televisión. El tiempo es el tratamiento.”
CTA debajo, no al costado.
La foto room.jpg NO va en el hero. El hero es tipo sobre --bg. Punto.

MOTION
Cada línea del h1 clip-reveal, delay 0.1 + i*0.12, 0.7s, ease [0.22,1,0.36,1]
Párrafo fadeUp delay 0.5
prefers-reduced-motion: estático + nav visible siempre

SECCIONES

1. FOTO — full bleed room.jpg, height 78vh, object-cover. Sin texto encima. Caption 11px px-6 pt-3: “La sala · demo”

2. ENFOQUE — id #enfoque — 2 col
Izq h2 Source Serif 36px: “No es un hotel. Es una consulta que no grita.”
Der 17px / 1.6: “Papel, una ventana, una silla. Adultos. Rehabilitación, estética, ortodoncia invisible. Si venís con un niño, te recomendamos otra clínica.”

3. QUÉ HACEMOS — id #que — lista tipográfica, números 01–05 en 13px
01  Rehabilitación sobre implantes — Una pieza. Un plan. Sin feria de precios.
02  Estética en cerámica — El color se prueba en boca.
03  Ortodoncia invisible — Nueve a catorce meses. Nadie en la oficina se entera.
04  Endodoncia — Se intenta guardar el diente.
05  Cordales — Una mañana. Instrucciones impresas.

4. LA HORA — id #hora — still.jpg a la izq (max-w 380) + texto
“45 minutos la primera vez. Un especialista de cabecera. Cero upsell en recepción.”
3 líneas nada más.

5. FAQ — acordeón 280ms
¿Niños? No.
¿Isapre? Reembolso. Boleta en recepción.
¿Urgencia? Un hueco a las 18:00. Escribí “hoy”.
¿Cuotas? Sí, en la misma visita.

6. AGENDA — id #agenda
form#contact-form: nombre, email, select mañana/tarde/sábado, mensaje.
Éxito UI demo. WhatsApp “Hola Pausa, quiero una hora.”
Sticky CTA móvil hide/show.

FOOTER mínimo: pausa · Santiago · Sitio demo · © año

SEO
title: Pausa — Consulta dental de adultos en Santiago
meta: Una silla, agenda limitada. Implantes, estética y ortodoncia invisible.
Un h1. AA. Alt en español.

CHECKLIST
[ ] Página entera papel claro (cero cine negro)
[ ] Hero SIN foto (solo tipo)
[ ] Cero oro, cero negro cine, cero italic de perfume
[ ] Cero personas, cero antes/después
[ ] 2 fotos de espacio/objeto, no más
[ ] Nav hide/show
[ ] Datos solo Pausa / genéricos
```
