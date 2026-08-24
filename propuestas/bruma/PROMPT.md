# BRUMA — grupo teal · familias, sin miedo

No generar niños. AI los hace mal y se ve barato. La calma se cuenta con espacio y tipo.

```text
ROL
Sitio de una clínica familiar que baja el pulso. Como el site de un jardín de infantes japonés o un estudio de obstetricia nórdico: claro, lento, cero mascotas dentales. USD 20.000.

PROHIBIDO
Niños generados, caras, sonrisas publicitarias, antes/después, testimonios con foto, badge 4.9, marquee, 3 precios SaaS, diente cartoon, Unsplash/Mixkit, video de “familia feliz en el sillón”.

PASO 0 — 2 FOTOS
/public/media/bench.jpg 16:9
“Empty clinic waiting alcove, pale sage wall, one oak bench, a fig tree in a clay pot, linen curtain, 09:00 overcast, 35mm, no people, no toys in primary colors, no TV, no logos, no text.”
/public/media/basin.jpg 4:5
“Stone basin and a folded towel, window light, 50mm, no hands, no faces.”
Sin video.

STACK
React + TS + Tailwind. "Fraunces" 500 + "Figtree" 400/500.

MARCA DEMO
Bruma · “Primero te calmamos. Después te tratamos.”
CTA: Agendar primera visita
+56 9 8765 4321 · hola@bruma.cl · Santiago
Lun–Vie 9:00–19:00 · Sáb 9:00–13:00

SISTEMA
--bg #F4F6F3
--ink #1A2B28
--mute #5A6B66
--line #D5DDD8
--teal #2A6B64   (10% UI)
--coral #C65D46  (solo el botón primario)
Radios: 0 en UI, 0 en fotos (sin rounded-3xl).
Botón: --coral, texto blanco, px-6 py-3.

CHROME
fixed, wordmark bruma Fraunces 24px lowercase.
Links: Enfoque · Cuidados · La primera hora · Agenda
72→60px @24px scroll. HIDE/SHOW delta 8 / umbral 88 / 320ms. Progress 2px --teal.
Sheet 320ms.

HERO — 2 col, 88vh
Izq justify-center:
  kicker 11px tracking 0.18em: FAMILIAS · PRIMERA VEZ
  h1 Fraunces clamp(40px, 6.5vw, 68px) leading 1.02 EXACTO:
    El miedo
    no es un detalle.
  Párrafo 17px max-w 34ch mt-6:
    “Odontopediatría y ortodoncia. Un padre puede quedarse adentro. La primera visita puede ser solo un espejo.”
  CTA coral.
Der: bench.jpg, height 72vh, object-cover. Sin texto encima.
Mobile: tipo, luego foto 52vh.

MOTION
h1 2 líneas clip-reveal 0.12s. Párrafo fadeUp 0.4s. Foto fade 0.7s.
prefers-reduced-motion: off motion.

SECCIONES

1. ENFOQUE — 3 frases, no iconos, gap 48px
El patio primero. Nadie entra directo al sillón.
El adulto se queda. En niños, un padre adentro. Siempre.
El plan en papel. Nada de “ya vemos en la próxima”.

2. CUIDADOS — lista
Odontopediatría — La primera puede ser solo conversación.
Ortodoncia — Cuando el hueso todavía escucha.
General — Adultos que volvieron después de años.
Urgencia — Dolor un sábado. Te vemos.

3. LA PRIMERA HORA — 01 02 03
01 Llegás 10 minutos antes. Banco, agua. Sin TV a todo volumen.
02 15 minutos de conversación. Cero instrumental si no hace falta.
03 Recién ahí, si hay confianza, el espejo.

4. FOTO basin.jpg centrada max-w 520, caption 12px.

5. FAQ
¿Fonasa? Sí. Copago antes.
¿Sedación? Solo con protocolo y un adulto responsable.
¿Padres adentro? Sí.
¿Cuánto dura? 40–50 min.

6. AGENDA
form#contact-form: nombre, email, select niño/adulto, mensaje.
WhatsApp “Hola Bruma, quiero una primera visita.”
Sticky CTA móvil hide/show.

FOOTER: bruma · Sitio demo · © año

SEO
title: Bruma — Clínica dental familiar en Santiago
meta: Odontopediatría y ortodoncia. La primera visita puede ser solo un espejo.
Un h1. AA.

CHECKLIST
[ ] Cero niños / caras en fotos
[ ] Cero antes/después
[ ] Vista clara de día
[ ] Hero = tipo + 1 sala vacía
[ ] Nav hide/show
[ ] Datos Bruma / genéricos
```
