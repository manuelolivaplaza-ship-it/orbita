# Propuesta de rediseño — diseño claro (grupo "Claro minimalista / neutro")

Propuesta comercial reutilizable para estudios de diseño gráfico y digital en Chile con
estética real clara, limpia y luminosa (referencias del super-prompt: Alebri, Estudio Furia,
Pentagram). El portafolio es el protagonista; vende orden y oficio demostrable.

## Identidad demo

`PROMPT.md` no existe en `_plantilla`, por lo que la identidad demo se definió aquí,
coherente con el super-prompt `PROMPT-DISENO-CLARO-MINIMALISTA.md`:

- **Marca demo:** "Estudio Trama" — estudio chileno de branding, web e impresión.
  Nombre genérico (trama = textura tipográfica/gráfica), sin colisiones con estudios reales
  conocidos del rubro.
- **Paleta:** blanco #FFFFFF dominante + hueso #F7F6F2; tinta neutra cálida #1A1A18;
  gris texto #55524B; acento bermellón editorial #B5432A (<5% de la UI: barra de progreso 2px,
  estado activo de filtros, CTA fija móvil, ::selection, focus ring, hovers de links/FAQ);
  divisores #E5E2DA. Sin secciones oscuras.
- **Tipografías:** Space Grotesk (display, Google Fonts, leading 0.93–0.95 y tracking negativo)
  + Inter (texto). Números tabulares OBLIGATORIOS aplicados en rangos CLP, plazos de entrega
  y cifras de trayectoria.
- **Arco:** #trabajos → #precios → #cifras → editorial → #metodo → #faq → #contacto.
  Anclas nav caen exactamente a 88px (scroll-padding-top).
- Radios 0, botón sólido tinta sobre claro, español de Chile, alt descriptivos.

## Contenido

- **#trabajos:** grilla uniforme de 3 casos demo con ficha de estudio (cliente · rubro ·
  disciplina · año + entregables) y filtro operativo por disciplina.
- **#precios:** tabla editorial sobria en CLP (identidad, una página, corporativo, tienda,
  impresión) con qué incluye cada tramo y plazos; segunda tabla con condiciones (pago 50/50,
  archivos fuente del cliente, mantenimiento $89.000, impresión con talleres aliados).
  Scroll horizontal propio (`tabla-wrap`) para 360px.
- **#cifras:** 6 cifras tabulares grandes (11 años, 214 proyectos, 68% recurrencia, etc.).
- **#metodo:** brief → propuesta cerrada → creación → entrega → postventa (5 pasos numerados).
- **#faq:** 8 preguntas típicas del rubro (precio, rondas de revisión, plazos, propiedad de
  archivos fuente, impresión, proceso, formas de pago, post-lanzamiento); acordeón exclusivo
  animado con grid 0fr→1fr (~280ms) y navegación por flechas.

## Verificación (2026-08-22)

- `npm run propuestas:build -- diseno-claro`: exit 0, dist/ generado.
- `npx tsc --noEmit`: exit 0.
- Smoke DOM jsdom: 0 radios ≠ 0, FAQ exclusivo funcional, filtro operativo (Web=1, Todo=3),
  ids fijos presentes, CTA fija "Ver trabajos".
- Chrome headless: 0 errores consola, 0 respuestas ≥400, anclas a 88px exactos,
  overflow horizontal 0px a 1440 y 360, 5 imágenes cargadas (naturalWidth > 0),
  CTA fija visible tras el hero en móvil. Revisión visual de capturas aprobada.
- 4 imágenes editoriales generadas y verificadas con vision: sin personas, manos, logos
  ni texto (una candidata fue rechazada por texto legible en un marcador y regenerada).

## Comandos

Desde la raíz `C:\Users\manue\OneDrive\Desktop\órbita`:

- Dev: `npm run propuesta -- diseno-claro` → http://localhost:3010
- Build: `npm run propuestas:build -- diseno-claro`

Nota de rutas: el build corre con base `/propuestas/diseno-claro/`; las imágenes siempre se
referencian como `${import.meta.env.BASE_URL}media/x.jpg`.
