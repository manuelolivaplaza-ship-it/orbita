# ALBA — grupo coral · urgencia, sin drama

No “hombre agarrándose la mandíbula al atardecer”. Eso es stock. Urgencia profesional = protocolo + un pasillo encendido.

```text
ROL
Sitio de urgencia dental hecho como el de un servicio de guardia escandinavo o una farmacia de turno: **claro de día**, rápido, serio. USD 20.000. Cero sangre, cero sirena, cero meme de dolor. Cero paneles negros.

PROHIBIDO
Personas (nadie tapándose la cara), antes/después, testimonios, 3 planes de ortodoncia, sirena, sangre, Comic Sans, Unsplash/Mixkit, puerta cinematográfica con actor.

PASO 0 — 2 FOTOS
/public/media/corridor.jpg 4:5
“Empty clinic corridor at 11:00, north daylight, terracotta-painted end wall, pale floor, 28mm, no people, no gurney, no signage letters, bright and calm.”
/public/media/desk.jpg 16:9
“Daytime reception desk, window light, a blank notepad, 50mm, no receptionist, no logos.”

STACK
React + TS + Tailwind. "Outfit" 500–700.

MARCA DEMO
Alba · “Te duele ahora. Te vemos hoy.”
CTA: Pedir hora de urgencia
+56 9 8765 4321 · hola@alba.cl · Santiago
Lun–Sáb 8:00–21:00 · Dom 10:00–14:00

SISTEMA
--bg #FBF6F1
--ink #1A1410
--mute #6A5E54
--coral #D24A28
--line #E8DDD4
Radios 4px solo en botón. Fotos a 0.
Botón --coral, blanco, full width de su columna.

CHROME
fixed, wordmark ALBA 16px 700 + pill 11px “HAY HORA HOY” borde 1px --coral (sin pulso si reduced-motion; pulso opacity 1.8s si no).
Links: Qué atendemos · Protocolo · Agenda
68→56px @24, 240ms. HIDE/SHOW delta 8 / umbral 80 / 260ms (más corto: es urgencia).
Progress 2px --coral. Sheet 260ms.

HERO — split 5/7, 100vh, TODO sobre --bg (nada de panel negro)
Izq --bg, texto --ink, px-8, justify-center:
  kicker 11px tracking 0.18em --coral: URGENCIA DENTAL · SANTIAGO
  h1 Outfit 700 clamp(44px, 7vw, 80px) leading 0.88 tracking -0.04em EXACTO:
    Te duele
    ahora.
    Te vemos
    hoy.
  Párrafo 16px --mute max-w 30ch mt-6:
    “Corona caída, absceso, fístula, trauma, muela del juicio. Tres datos. Un hueco. No un buzón.”
  CTA a lo ancho de la columna.
Der: corridor.jpg object-cover, de DÍA, SIN overlay, SIN texto.
Mobile: tipo sobre --bg primero, foto 48vh debajo.

MOTION
Líneas del h1 y:20 + fade, stagger 0.07, 0.4s (rápido). Sin skew. Sin cine.
prefers-reduced-motion: estático, pill sin pulso, nav visible.

SECCIONES

1. QUÉ ATENDEMOS — lista grande, no chips de app
Dolor que no deja dormir
Corona o puente caído
Encía hinchada / fístula
Muela del juicio
Trauma (golpe, diente roto)
Una línea debajo: “Esto no es estética. Eso es para cuando deje de doler.”

2. PROTOCOLO — 01 02 03
01 WhatsApp o formulario: nombre, qué duele, desde cuándo.
02 Te decimos la hora. Hoy, o mañana 8:00.
03 En box se corta el dolor. El plan grande, después.

3. DESPUÉS — desk.jpg + 
“Cuando estés estable: ortodoncia, implante o estética. No te lo vendemos con hielo en la cara.”

4. FAQ
¿Fonasa? Sí.
¿Extraen sí o sí? No. Primero se apaga el fuego.
¿Niños? Trauma y dolor, sí.
¿Domingo? 10 a 14.

5. AGENDA
form#contact-form: nombre, teléfono, select qué duele (las 5), select desde cuándo (hoy / ayer / +3 días), mensaje.
WhatsApp “Hola Alba, me duele [ ] desde [ ]. ¿Tienen hora hoy?”
Sticky CTA “Pedir hora de urgencia” hide/show.

FOOTER --bg, border-t --line, texto --ink, Sitio demo, © año

PRECIOS — una línea, no 3 cards
Evaluación de urgencia de referencia: $19.900 · control a 7 días incluido · demo

SEO
title: Alba — Urgencia dental hoy en Santiago
meta: Dolor, corona caída, absceso. Hueco el mismo día.
Un h1. AA.

CHECKLIST
[ ] Cero personas
[ ] Cero antes/después
[ ] Hero CLARO (cero panel negro) + pasillo de día
[ ] Nav hide/show 80px / 260ms
[ ] Datos Alba / genéricos
```
