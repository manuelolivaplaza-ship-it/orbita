# LUMEN — grupo azul · diagnóstico digital

Pegar el bloque en AI Studio → Apps → Build.

```text
ROL
Diseñá el sitio de una clínica de diagnóstico dental como si fuera el site de un estudio de arquitectura o un fabricante de instrumental (Vitsoe, Braun, un hospital suizo). Presupuesto percibido: USD 20.000. No es una landing de ads. No es un reel.

REFERENCIA DE CALIDAD (no copies marcas; copiá la disciplina)
Poco. Tipo grande. Una foto de objeto o de sala vacía. Cero teatro.

PROHIBIDO
- Personas, caras, sonrisas, bocas, niños, dentistas, pacientes, manos en la cara
- Antes/después, sliders de dientes, “casos reales”
- Testimonios con foto/avatar/iniciales en círculo
- Badge 4.9★, “+8.000 pacientes”, marquee de tratamientos
- 3 cards de precio estilo SaaS con “más elegido”
- Unsplash, Pexels, Mixkit, Picsum, placehold, avatares
- Overlay oscuro, hero negro, footer negro, fotos de noche, diente 3D, iconos Lucide como pieza
- Headline “tecnología de punta / sonrisa radiante / nuestra pasión”

PASO 0 — MEDIA (máximo 3 archivos, no 10)
Generá con AI Studio y guardá en /public/media/. Si sale una cara o un diente de stock: descartá y regenerá.
1) room.jpg 4:5 — “Empty dental operatory at 10:00, north window, terrazzo floor, pale oak cabinetry, the chair is mid-grey and EMPTY, no people, 32mm, straight verticals, overcast daylight, museum catalog, no logos, no screens with UI, no text.”
2) object.jpg 1:1 — “Product still life, 85mm, a single intraoral scanner wand on a pale limestone slab, side light, no hand, no mouth, no brand, cool grade.”
3) facade.jpg 16:9 — “Quiet street facade of a low clinic, steel frame, one frosted window, Santiago overcast, no pedestrians in focus, 24mm, no signage letters.”
Sin video. Un Ken Burns lento (18s, scale 1.0→1.03) SOLO en room.jpg si querés movimiento. Preferí estático.

STACK
React + TS + Tailwind. Framer Motion solo para nav y 2 fades. Google Fonts: "Sora" 400–600 + "IBM Plex Sans" 400/500. Nada de Inter, Poppins, Montserrat.

MARCA DEMO
Lumen · “Primero el diagnóstico. Después el tratamiento.”
CTA: Reservar diagnóstico
Ghost: Escribir
Tel +56 9 8765 4321 · hola@lumen.cl · Santiago, Chile
Lun–Vie 8:30–19:00 · Sáb 9:00–13:00
Español de Chile, corto, clínico, sin adjetivos vacíos.

SISTEMA
--bg #F3F1EC
--ink #121417
--mute #5C6570
--line #D9D4CB
--accent #1A56A0   (único color; 5% de la UI: links activos, progress, focus)
Radios 0. Botón: fondo --ink, texto --bg, px-5 py-3, 13px, tracking 0.04em.
Máximo width 1280. Padding page px-6 md:px-12.

CHROME
fixed z-50, wordmark LUMEN 12px Sora tracking 0.28em.
Links md+: Enfoque · Tratamientos · La visita · Espacio · Agenda
CTA derecha “Reservar diagnóstico”
72→60px si scrollY≥24, 280ms, ease [0.22,1,0.36,1]. Top: --bg 0%. Scrolled: --bg 92% + border-b 1px --line.
HIDE DOWN / SHOW UP: delta≥8px, umbral 88px, translateY(-100%)/0, 320ms. No esconder con sheet o focus. WhatsApp (si existe) igual.
Progress 2px --accent. Active link: IntersectionObserver "-40% 0 -50% 0".
Mobile sheet derecha 320ms, fondo --bg texto --ink, X 44px, Escape, lock scroll. Cero menú negro.

HERO (100vh menos nav) — 12 columnas, sin foto a sangre
Col 1–7: align-end, pb-16.
  kicker 11px tracking 0.2em --mute: DIAGNÓSTICO DIGITAL · SANTIAGO
  h1 Sora 500, clamp(40px, 7vw, 76px), leading 0.92, tracking -0.04em, EXACTO en 2 líneas:
    Primero vemos.
    Después decidís.
  Párrafo 17px / 1.5 --mute max-w 34ch, mt-6:
    “Escáner intraoral en la primera hora. Un plan escrito con tiempos y valores. Cero tratamiento el mismo día si no hace falta.”
  Fila: botón primario + texto 13px “45 minutos · sin compromiso”
Col 8–12: object.jpg, object-contain o cover suave, altura 70vh, align-end. Sin recorte redondeado. Sin sombra. Caption 11px --mute mt-3: “Escáner intraoral · demo”
Mobile: tipo primero; la foto debajo a 56vw, no encima del h1.

MOTION
h1 clip-reveal por línea, 0.12s stagger, 0.65s, ease [0.22,1,0.36,1]
Párrafo fadeUp 0.55s delay 0.35
Foto fade 0.8s
prefers-reduced-motion: fades 0.2s, nav no se esconde

SECCIONES (en este orden; no agregues otras)

1. ENFOQUE — id #enfoque — py-28, border-t 1px --line
h2 13px tracking 0.18em --mute: ENFOQUE
Un párrafo 22–26px Sora 400 max-w 40ch:
“La mayoría de las clínicas venden el tratamiento en el recibidor. En Lumen la primera visita es solo para entender. Si no hay que tocar, no se toca.”

2. TRATAMIENTOS — id #tratamientos — py-24
h2 13px tracking 0.18em. Luego una LISTA, no bento. Cada fila: nombre 18px + una frase 15px --mute. Divider 1px. Hover: el nombre pasa a --accent, 180ms. Sin iconos.
- Diagnóstico 3D — Modelo de la boca en pantalla. Salís con un PDF.
- Alineadores — El movimiento se simula antes del primer tapón.
- Ortodoncia — Visible o no. Lo define el escáner.
- Implantes — Planificación. La cirugía no se improvisa en el sillón.
- Endodoncia — Se intenta conservar. Extraer es el plan B.
- Estética — Prueba de color. No un catálogo.
- Urgencia — Hueco el mismo día si hay dolor o infección.

3. LA VISITA — id #visita — py-24, 3 columnas en md, 1 en mobile
01  Escaneo · 8 min · sin pasta
02  Conversación · el plan en una hoja
03  Agenda del tratamiento · solo si corresponde
Números Sora 48px --line (no gigantes de hero). Texto 16px.

4. ESPACIO — id #espacio — py-20
Una sola imagen grande: room.jpg, width 100%, max-h 78vh, object-cover. Caption 12px: “Box · luz norte · demo”
Debajo, en grid 2 col, facade.jpg a la izquierda (más chica) y 3 datos a la derecha:
Un box a la vez.
Sin TV.
El informe se imprime.

5. PRÁCTICO — id #practico — py-20, 3 col
Isapre / Fonasa — Convenios de demo. Copago antes de empezar.
Cuotas — 3 a 12. Se firman en la misma visita.
Horario — Lun–Vie 8:30–19:00 · Sáb 9:00–13:00

6. FAQ — id #faq — acordeón 280ms, sin emojis
¿Duele la primera visita? No. Escáner y conversación.
¿Me van a vender un implante el día uno? No. Esa es la regla de la casa.
¿Puedo pagar en cuotas? Sí.
¿Urgencias? Escribí “urgencia”. Hay hueco reservado.
¿Dónde? Santiago, Chile. El pin real no va en este demo.

7. AGENDA — id #agenda — py-28, 2 col
Izq: h2 “Reservá el diagnóstico, no el tratamiento.” + horario + tel + mail
Der: form#contact-form nombre, email, teléfono, mensaje.
onSubmit preventDefault + “Recibido. Te escribimos en el día (demo).”
WhatsApp wa.me/56987654321 “Hola Lumen, quiero un diagnóstico.”
Sticky CTA móvil 56px, hide/show con la nav, solo <md, después del hero.

FOOTER — py-10, 13px, LUMEN · Santiago · Sitio demo · © año dinámico

SEO
title: Lumen — Diagnóstico dental en Santiago
meta: Primera visita de diagnóstico con escáner. Plan escrito. Ortodoncia, implantes y estética.
Un h1. lang=es. Contraste AA. Alt en español. focus-visible ring 2px --accent.

CHECKLIST
[ ] Cero personas en las 3 fotos
[ ] Cero antes/después
[ ] Cero stock
[ ] Vista clara (fondo #F3F1EC, cero sección negra)
[ ] Hero es tipo + 1 objeto, no video de clínica llena
[ ] Lista de tratamientos, no bento
[ ] Nav hide/show
[ ] Datos solo Lumen / genéricos
```
