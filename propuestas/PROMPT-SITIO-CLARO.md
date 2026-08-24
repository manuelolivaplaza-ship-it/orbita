# SUPER-PROMPT v3 — SITIO CLARO PREMIUM · "ÉTER" (grupo estética claro/neutro · 108 leads)

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL analizado 2026: **Minimale Skin** (Soho NY), **Alea Med Spa**, **Plenaire**, **Auteur**.
> Objetivo: que un dueño de clínica estética chilena vea este sitio y NO PUEDA DECIR QUE NO.

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio completo de una
clínica estética premium chilena. Presupuesto percibido: USD 25.000. Editorial de skincare de
lujo + precisión suiza + calidez humana.

CONTEXTO DEL PROYECTO (dónde y cómo se construye)
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/eter-claro
   (copia ARCHIVOS, no node_modules). Esa será tu app.
2) En tu copia: package.json → cambia "name" a "eter-claro". meta.json →
   { "title": "ÉTER — Estética integral · Propuesta Órbita", "client": "ÉTER" }.
   index.html → <html lang="es">, <title>ÉTER — Estética integral</title>.
3) STACK REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap: todo el
   diseño va en CSS propio bien organizado. ÚNICA dependencia extra PERMITIDA si la
   necesitas para animaciones: "motion" (npm i motion). Nada más.
4) Comandos (desde la raíz de órbita):
   - Desarrollo: npm run propuesta -- eter-claro   → http://localhost:3010
   - Build:      npm run propuestas:build -- eter-claro   (compila tsc + vite)
   La propuesta queda servida en /propuesta/eter-claro. El build debe pasar SIN errores.
5) IGNORA el resto de carpetas de propuestas/ (minimayorista, zips, otros sitios): son de
   otros clientes. No las leas, no las modifiques. Solo creas/editas DENTRO de eter-claro/.
6) Las imágenes generadas van en TU app: propuestas/eter-claro/public/media/.

BENCHMARK A IMITAR (disciplina, no copia)
Minimale Skin (editorial que genera confianza antes de ver credenciales) · Alea Med Spa
(clínico-cálido) · Plenaire (aire, puntos flotantes sutiles) · Auteur (monocromía + 1 acento).

MARCA DEMO (textos literales, no cambiar)
Nombre: ÉTER — Estética integral
H1: "La piel, en calma."
Subhead: "Medicina estética seria, sin exageraciones. Diagnóstico honesto y protocolos
mesurados en Providencia."
CTA principal: "Agendar evaluación" · secundario: "Ver tratamientos"
Contacto: +56 9 8765 4321 · hola@eter.cl · Providencia, Santiago
Horario: Lun–Vie 9:30–19:30 · Sáb 10:00–14:00

PALETA (regla dura, como variables CSS en :root)
--papel #F7F4EF · --tinta #17140F · --gris #8A8378 · --linea #D9D3C8 ·
ACENTO ÚNICO --bronce #9C6B3F (<5% de la UI). border-radius: 0 en TODO.
Cero sombras difusas: separación por filetes 1px var(--linea) y whitespace.

PASO 0 — MEDIA (public/media/, máx 4 imágenes; caras/manos/logos = descartar y regenerar)
room.jpg 16:9 sala hueso/roble vacía luz norte · still.jpg 4:5 bodegón frasco ámbar sobre
piedra caliza · detail.jpg 1:1 macro lino pálido · tools.jpg 16:9 instrumental esterilizado
ordenado sobre paño blanco, luz de día, clínico pero bello.

SECCIONES — ARCO DE CONVERSIÓN (ids fijos)
#inicio  Hero: kicker uppercase tracking amplio, H1 gigante leading 0.92 tracking negativo,
         subhead 2 líneas, CTA sólido tinta + link subrayado animado. room.jpg derecha 7/12,
         caption técnica 11px. Puntos flotantes sutiles (opacity .15) guiño Plenaire.
#evidencia Count-up animado al entrar en viewport (IntersectionObserver): "+1.200 evaluaciones",
         "94% recomienda", "12 años", "0 tratamientos sin diagnóstico". Números tabulares serif.
#tratamientos Índice numerado 01–06 editorial (NO cards): nombre grande + línea + flecha.
         Hover/tap expande 64px revelando duración y precio "desde" (280ms).
#precios "Precios claros, sin sorpresas": tabla 4 tratamientos estrella precio desde + nota
         "El valor final se confirma en tu evaluación. Nunca cobramos algo que no aprobaste."
#metodo  3 columnas filete superior 1px: 01 Diagnóstico → 02 Protocolo → 03 Seguimiento.
#voces   3 testimonios SIN foto: cita serif itálica grande, comilla bronce, atribución
         "— Marcela, 42 · melasma". Rotación fade lenta, pausable.
#espacio Galería still.jpg + detail.jpg como obras con captions; Ken Burns 36s solo en UNA.
#faq     5 acordeones honestos (280ms): ¿Duele? ¿Cuánto dura? ¿Quién realiza? ¿Qué pasa si
         no soy candidata? ¿Cómo pago?
#reserva Headline corto + teléfono tabular gigante + CTA + horarios. Footer sobrio legal CL.

CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Agendar" fijo; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil
discreto tras el hero. Botón magnético sutil (4px hacia cursor). Subrayados animados 200ms.

MOTION (CSS/transiciones exactas; o "motion" si instalada)
Barra progreso scroll 2px bronce · H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) ·
fade+rise 24px al entrar (once) · hovers 150–250ms · count-up 1.2s · TODO respeta
prefers-reduced-motion (si activo: nada se mueve).

REGLAS DURAS (incumplir una = rechazado)
PROHIBIDO: personas/caras/manos, antes/después fotográficos, testimonios con foto, badges de
rating, marquee, planes SaaS "más elegido", iconos centrales, gradientes decorativos, fondos
oscuros, overlays oscuros, emojis, stock externo, inglés. Todo español de Chile, alt=""
descriptivos, contraste AA, focus-visible ring bronce, ::selection bronce, hero impecable a
360px, radios 0, padding vertical ≥112px desktop / ≥72px móvil, max-width ~1200px.

PROCESO OBLIGATORIO
1) Duplica _plantilla → eter-claro y ajusta name/meta/title. 2) Genera y verifica las 4
imágenes. 3) Maqueta componente por componente. 4) npm run propuesta -- eter-claro y revisa
en navegador; corrige. 5) npm run propuestas:build -- eter-claro hasta cero errores.
6) Auto-revisión contra REGLAS DURAS y arco de conversión (¿confianza, precio y quién-lo-hace
respondidos antes del footer?). Itera lo genérico. 7) Resumen breve final.
```
