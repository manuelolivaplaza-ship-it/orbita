# SUPER-PROMPT v3 — SITIO OSCURO PREMIUM · "UMBRAL" (grupo Oscuro / premium minimal real · 41 leads)

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL analizado 2026: **Winteri Arquitectos** (winteri.com, estudio chileno con cifras e
> índice de proyectos numerado), **Cecilia Puga** (Casa Unamuno: sobriedad estructural, la obra como
> único argumento), **The Perfect Secret** (quiet luxury dark-on-dark, metal apagado).
> Objetivo: que el dueño del estudio SIENTA que esta web vende proyectos de USD 200.000, no cotizaciones rápidas.

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio de un estudio de
arquitectura chileno premium en modo oscuro editorial. Presupuesto percibido: USD 35.000.
Debe sentirse como entrar a una sala de exposición a media luz: la obra iluminada como pieza
de colección, tipografía como placa de museo, oscuridad cálida y rica (nunca negra plana).

CONTEXTO DEL PROYECTO (dónde y cómo se construye)
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/arquitectura-b-oscuro
   (copia ARCHIVOS, no node_modules). Esa será tu app.
2) En tu copia: package.json → cambia "name" a "arquitectura-b-oscuro". meta.json →
   { "title": "UMBRAL — Arquitectura · Propuesta Órbita",
     "client": "Estudio de arquitectura (grupo Oscuro / premium minimal real)" }.
   index.html → <html lang="es">, <title>UMBRAL — Arquitectura</title>.
3) STACK REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap: todo el
   diseño va en CSS propio bien organizado. ÚNICA dependencia extra PERMITIDA si la
   necesitas para animaciones: "motion" (npm i motion). Nada más.
4) Comandos (desde la raíz de órbita):
   - Desarrollo: npm run propuesta -- arquitectura-b-oscuro   → http://localhost:3010
   - Build:      npm run propuestas:build -- arquitectura-b-oscuro   (compila tsc + vite)
   La propuesta queda servida en /propuestas/arquitectura-b-oscuro. El build debe pasar SIN errores.
5) IGNORA el resto de carpetas de propuestas/ (minimayorista, zips, otros sitios): son de
   otros clientes. No las leas, no las modifiques. Solo creas/editas DENTRO de
   arquitectura-b-oscuro/.
6) Las imágenes generadas van en TU app: propuestas/arquitectura-b-oscuro/public/media/.

BENCHMARK A IMITAR (disciplina, no copia)
Winteri Arquitectos (cifra → servicio → proyecto → contacto) · Cecilia Puga (sobriedad
estructural, obra sin adjetivos) · The Perfect Secret (oscuridad opulenta y privada).

MARCA DEMO (textos literales, no cambiar)
Nombre: UMBRAL — Arquitectura
H1: "La obra habla. El resto calla."
Subhead: "Estudio de arquitectura para proyectos residenciales y de obra nueva de alto
estándar. Diseño, permisería y construcción administrada por el mismo equipo."
CTA principal: "Conversar sobre tu proyecto"
Contacto: +56 9 8765 4321 · hola@umbral.cl · Las Condes, Santiago
Horario: Lun–Vie 10:00–19:00

PALETA (regla dura — la oscuridad tiene capas, como variables CSS en :root)
--fondo #131210 (negro CÁLIDO) · --superficie #1C1A17 · --superficie-alta #242119 ·
--filete #302B24 · --hueso #EAE4D8 (texto, NUNCA #FFF) · --gris-cálido #9A9285 ·
ACENTO ÚNICO --laton #B99A62 (<5% UI). PROHIBIDO #000/#FFF puros, dorados brillantes
(#FFD700 y familia), neones, glow en texto, gradientes púrpura-azul genéricos.
border-radius: 0 en TODO. Profundidad por capas de fondo + filetes 1px (nunca sombras difusas).

PASO 0 — MEDIA (public/media/, máx 4 imágenes; personas/caras/logos = descartar y regenerar)
hero.jpg 16:9 casa de hormigón y madera al anochecer, interiores en luz cálida, cielo azul
profundo, SIN personas · model.jpg 1:1 maqueta blanca sobre mesa oscura con foco lateral ·
detail.jpg 4:5 macro textura hormigón visto con juntas, luz rasante cálida ·
gallery.jpg 16:9 interior doble altura con escalera de madera, luz cenital, cinematográfico sereno.

SECCIONES — ARCO DE CONVERSIÓN (ids fijos)
#inicio    Hero pantalla completa: kicker latón uppercase, H1 gigante hueso leading 0.95,
           subhead gris cálido, CTA sólido latón texto tinta. hero.jpg integrado por
           degradado hacia el fondo (NUNCA overlay negro plano). Grano fílmico sutilísimo
           (opacity .04) sobre toda la página.
#cifras    Count-up tabulares serif al entrar: "+85 obras", "22 años de estudio", "98%
           permisos aprobados", "1 arquitecto a cargo, siempre". Evidencia numérica en vez
           de adjetivos (patrón Winteri).
#proyectos Índice numerado 01–08 lista editorial: nombre + comuna + línea + flecha.
           Hover/tap expande 280ms revelando FICHA TÉCNICA: m², año, tipología, materiales.
           En móvil tap = acordeón. La obra es la sección más grande del sitio.
#estudio   Editorial breve: cómo trabajan, con foto model.jpg como obra de galería
           (filete 1px, caption técnica 11px).
#servicios 01–04 numerados: Anteproyecto → Proyecto con permisería → Detalle constructivo →
           Administración de obra. Entregable concreto en cada uno ("qué recibes").
#proceso   5 etapas con filetes verticales 1px y números grandes latón apagado:
           Conversación → Levantamiento → Anteproyecto → Permisos → Obra, con duración típica.
#precios   "Presupuesto claro desde el primer día": tabla sobria 3 formatos con referencia
           UF/m² o "desde" + nota legal honesta ("El valor final depende del terreno y del
           programa. Se confirma en la primera conversación. Nunca partimos sin presupuesto firmado.").
#faq       5 acordeones honestos (280ms): ¿Cuánto demora el permiso? ¿Qué incluye el
           anteproyecto? ¿Manejan la construcción o solo el diseño? ¿Cómo se paga por hitos?
           ¿Diseñan fuera de Santiago?
#reserva   Sobre var(--superficie): headline, teléfono hueso gigante tabular, botón latón,
           horario. Micro-línea: "Responde el arquitecto, no un ejecutivo."
Footer sobrio: marca pequeña, dirección, legal Chile, año.

CONVERSIÓN SIEMPRE PRESENTE
Nav translúcido blur sutil con botón latón "Cotizar"; hide-down/show-up + compacta 24px al
scroll. Sticky CTA móvil discreto tras el hero. Cursor personalizado sutil (punto latón 6px
con lerp, se agranda sobre links; desactivado en touch/reduced-motion).

MOTION (CSS/transiciones exactas; o "motion" si instalada)
Barra progreso 2px latón · H1 clip-reveal líneas stagger .12s ease(0.22,1,0.36,1) · galería
revelado cortina clip-path inset 700ms al entrar · count-up 1.2s · expansión fichas 280ms ·
hovers 150–250ms · TODO respeta prefers-reduced-motion.

REGLAS DURAS (incumplir una = rechazado)
PROHIBIDO: personas/caras/manos, fotos stock de rascacielos genéricos, planos como textura
decorativa de fondo, antes/después, testimonios con foto o estrellas, marquee, planes SaaS,
iconos centrales, glow/neón, #000/#FFF puros, dorados brillantes, overlays negros planos
sobre foto, emojis, stock externo, inglés. Todo español de Chile, alt="" descriptivos,
contraste AA, focus-visible ring latón, ::selection latón/texto oscuro, responsive real a
360px, radios 0, padding ≥112px desktop / ≥72px móvil, max-width ~1200px.

PROCESO OBLIGATORIO
1) Duplica _plantilla → arquitectura-b-oscuro y ajusta name/meta/title. 2) Genera y verifica
las 4 imágenes. 3) Maqueta componente por componente. 4) npm run propuesta --
arquitectura-b-oscuro y revisa en navegador; corrige. 5) npm run propuestas:build --
arquitectura-b-oscuro hasta cero errores. 6) Auto-revisión contra REGLAS DURAS y arco de
conversión (¿precio, permisos y quién-construye respondidos antes del footer?). ¿Se siente
sala de exposición o página genérica? Itera hasta lo primero. Calidad > velocidad.
7) Resumen breve final.
```
