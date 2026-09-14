# CASA NORTE — grupo navy · institución

El más cerca de $20k del lote anterior. Se limpia: sin before/after, sin count-up, sin caras.

```text
ROL
Identidad de una clínica polivalente que podría ser un colegio o un estudio de abogados. Grilla, membrete, cero adorno. USD 20.000.

PROHIBIDO
Personas en fotos, antes/después, testimonios con cara, count-up de stats, marquee, 3 planes “más elegido”, Lucide como pieza, Unsplash/Mixkit, silla celeste de héroe.

PASO 0 — 2 FOTOS
/public/media/facade.jpg 4:5
“Two-storey clinic facade, white plaster, navy steel window frames in a 3x3 grid, dry sidewalk, 11:00 overcast daylight, NO people, NO cars sharp, NO letters on the building, 24mm architectural, Santiago.”
/public/media/desk.jpg 16:9
“Empty reception: navy linoleum, oak desk, one paper tray, 35mm, no receptionist, no logos, no computer UI readable.”

STACK
React + TS + Tailwind. "Newsreader" 400–600 + "IBM Plex Sans" 400/500.

MARCA DEMO
Casa Norte · “Una clínica. Todas las especialidades.”
CTA: Agendar evaluación
+56 9 8765 4321 · hola@casonorte.cl · Santiago
Lun–Vie 8:00–20:00 · Sáb 9:00–14:00

SISTEMA
--bg #F4F2EC
--navy #121A2B
--ink #121826
--rule #C9C2B6
--mark #8F1D22   (filete 2px nada más)
Radios 0. Botón --navy, uppercase 11px tracking 0.16em, py-3 px-5.
Grilla 12, gutter 24, max-w 1200.

CHROME
fixed, wordmark CASA NORTE 11px tracking 0.32em.
Links: Especialidades · La visita · Espacio · Agenda
72→56px @24. HIDE/SHOW 8/88/320. Progress 2px --mark.
Sheet 320ms, fondo --bg, texto --ink, Newsreader 28px.

HERO — 92vh, 12 col
Col 1–6 pt-32:
  kicker 11px tracking 0.2em: CLÍNICA POLIVALENTE · SANTIAGO
  h1 Newsreader clamp(44px, 5.5vw, 72px) leading 0.98 EXACTO:
    Una clínica.
    Todas las
    especialidades.
  Párrafo 17px max-w 34ch mt-6:
    “Ortodoncia, implantes, endodoncia, niño y adulto. Un expediente. Un mostrador. El horario se cumple.”
  CTA + 13px “Evaluación 40 min · plan el mismo día”
Col 7–12: facade.jpg, height 78vh, object-cover, filete 1px --navy, SIN radius, SIN overlay.
Bajo el hero: regla 1px + 4 datos 13px (sin count-up): 22 años · 11 box · un jefe de turno · 6 especialidades

MOTION
h1 por línea clip-reveal 0.1s. Foto fade 0.7s. Sin count-up.
prefers-reduced-motion: estático.

SECCIONES

1. ESPECIALIDADES — tabla, hover filete izq 2px --mark
Ortodoncia — niños y adultos, visible e invisible
Implantes — planificación y corona
Endodoncia — microscopio; una sesión cuando se puede
Odontopediatría — agenda propia, no el hueco de las 13
Estética — carillas y blanqueamiento con prueba
Urgencia — 8:00 y 19:00 reservados

2. LA VISITA — 01 02 03
01 Hora por web o teléfono. Confirmación el día anterior.
02 Llegás 5 minutos antes. Si tardamos, avisamos.
03 Salís con el plan impreso. No con “te llamamos”.

3. ESPACIO — desk.jpg full width max-h 64vh + una línea:
“Once box. El paciente no es un número que viaja solo.”

4. FAQ
¿Fonasa e Isapre? Sí.
¿Más sucursales? En el demo, una.
¿Estacionamiento? En el edificio.
¿Cuotas? 3–12, se firman en recepción.

5. AGENDA
form#contact-form: nombre, email, teléfono, select especialidad (las 6), mensaje.
Membrete al lado: tel, mail, horario.
WhatsApp “Hola Casa Norte, quiero agendar evaluación.”
Sticky CTA móvil hide/show.

FOOTER institucional, Sitio demo, © año

SEO
title: Casa Norte — Clínica dental polivalente en Santiago
meta: Todas las especialidades, un expediente. Ortodoncia, implantes, niños y urgencias.
Un h1. AA.

CHECKLIST
[ ] Vista clara de día (fachada 11:00, no 18:30)
[ ] Fachada vacía, cero peatones nítidos
[ ] Cero antes/después, cero caras
[ ] Cero count-up
[ ] Nav hide/show
[ ] Datos Casa Norte / genéricos
```
