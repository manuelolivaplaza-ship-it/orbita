# SUPER-PROMPT v3 — SITIO CLARO PREMIUM · "NORTE ESTUDIO" (grupo Claro minimalista / neutro · 157 leads)

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL analizado 2026: **Winteri Arquitectos** (winteri.com, estudio chileno: hero fotográfico,
> cifras contadas "+106.000 m² diseñados", índice de proyectos numerado, CTA directo a cotización),
> **ELEMENTAL / Alejandro Aravena** (Pritzker 2016, sobriedad editorial chilena),
> **Cazú Zegers** (minimalismo cálido anclado al paisaje).
> Objetivo: que un dueño de estudio de arquitectura vea esta propuesta y sienta que su web actual es de otra década.

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio completo de un
estudio de arquitectura chileno premium. Presupuesto percibido: USD 30.000. Editorial de
revista de arquitectura (Domus, ARQ): luz, materia, silencio tipográfico y obras que hablan solas.

CONTEXTO DEL PROYECTO (dónde y cómo se construye)
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/arquitectura-b-claro
   (copia ARCHIVOS, no node_modules). Esa será tu app.
2) En tu copia: package.json → cambia "name" a "arquitectura-b-claro". meta.json →
   { "title": "NORTE ESTUDIO — Arquitectura · Propuesta Órbita",
     "client": "Estudio de arquitectura (grupo Claro minimalista / neutro)" }.
   index.html → <html lang="es">, <title>NORTE ESTUDIO — Arquitectura</title>.
3) STACK REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap: todo el
   diseño va en CSS propio bien organizado. ÚNICA dependencia extra PERMITIDA si la
   necesitas para animaciones: "motion" (npm i motion). Nada más.
4) Comandos (desde la raíz de órbita):
   - Desarrollo: npm run propuesta -- arquitectura-b-claro   → http://localhost:3010
   - Build:      npm run propuestas:build -- arquitectura-b-claro   (compila tsc + vite)
   La propuesta queda servida en /propuestas/arquitectura-b-claro. El build debe pasar SIN errores.
5) IGNORA el resto de carpetas de propuestas/ (minimayorista, zips, otros sitios): son de
   otros clientes. No las leas, no las modifiques. Solo creas/editas DENTRO de
   arquitectura-b-claro/.
6) Las imágenes generadas van en TU app: propuestas/arquitectura-b-claro/public/media/.

BENCHMARK A IMITAR (disciplina, no copia)
Winteri Arquitectos (cifra → servicio → proyecto → contacto; proyectos con estado y ficha) ·
ELEMENTAL (sobriedad editorial, el proyecto como argumento) · Cazú Zegers (materialidad cálida:
madera, piedra, luz sur).

MARCA DEMO (textos literales, no cambiar)
Nombre: NORTE ESTUDIO — Arquitectura
H1: "Diseñamos casas que se sienten del lugar."
Subhead: "Arquitectura residencial y de obra nueva en el sur de Chile. Proyectos con
permisería incluida, presupuestos transparentes y construcción documentada."
CTA principal: "Cotizar tu proyecto" · secundario: "Ver proyectos"
Contacto: +56 9 8765 4321 · hola@norteestudio.cl · Puerto Varas, Los Lagos
Horario: Lun–Vie 9:00–18:30

PALETA (regla dura, como variables CSS en :root)
--papel #F5F2EC (hueso cálido) · --tinta #191713 · --gris #8B857A · --linea #DCD6CA ·
ACENTO ÚNICO --roble #9A7B4F (<5% de la UI). border-radius: 0 en TODO.
Cero sombras difusas: separación por filetes 1px var(--linea) y whitespace.

PASO 0 — MEDIA (public/media/, máx 4 imágenes; personas/caras/logos = descartar y regenerar)
hero.jpg 16:9 casa de madera y hormigón visto al atardecer, ventanas encendidas, SIN personas ·
model.jpg 1:1 maqueta de estudio sobre mesa de trabajo con planos y escalímetro ·
detail.jpg 4:5 detalle textura revestimiento madera + piedra, luz rasante ·
site.jpg 16:9 terreno/ladera con obra en estructura, cielo sobrio, documental limpio.

SECCIONES — ARCO DE CONVERSIÓN (ids fijos)
#inicio    Hero: kicker uppercase tracking amplio ("ESTUDIO DE ARQUITECTURA · CHILE"), H1 gigante
           leading 0.92 tracking negativo, subhead 2 líneas, CTA sólido tinta + link subrayado
           animado. hero.jpg derecha 7/12 con caption técnica 11px ("Casa Rupanco, 2024 · 214 m²").
#cifras    Count-up tabulares serif al entrar (IntersectionObserver): "+120 proyectos", "18 años",
           "96% permisos aprobados", "0 obras sin contrato claro". Estilo Winteri: evidencia antes que adjetivos.
#proyectos Índice numerado 01–08 editorial (NO cards): nombre grande + comuna + línea + flecha.
           Hover/tap expande 64px revelando FICHA TÉCNICA obligatoria: m², año, tipología
           (casa/edificio/comercio), materiales principales (280ms).
#estudio   Foto model.jpg + texto editorial corto: quiénes diseñan, filosofía del lugar,
           equipo pequeño con arquitecto a cargo de punta a punta.
#servicios Lista numerada 01–04: Anteproyecto → Permisería → Detalle constructivo →
           Administración de obra. Cada uno con entregable concreto ("qué recibes").
#proceso   5 etapas en columnas con filete superior 1px: Conversación → Levantamiento →
           Anteproyecto → Permisos → Obra. Duración típica de cada etapa en días/semanas.
#precios   "Presupuesto claro desde el primer día": tabla 3 formatos (Anteproyecto, Proyecto
           completo con permisos, Administración de obra) con referencia UF/m² o "desde" +
           nota honesta: "El valor final depende del terreno y del programa. Se confirma en tu
           primera conversación. Nunca partimos sin presupuesto firmado."
#faq       5 acordeones honestos (280ms): ¿Cuánto demora el permiso de construcción? ¿Qué
           incluye el anteproyecto? ¿Trabajan con constructoras propias o externas? ¿Cómo se
           paga (hitos)? ¿Diseñan fuera de la región?
#contacto  Headline corto + teléfono tabular gigante + CTA + horario. Micro-línea:
           "Responde el arquitecto, no un call center." Footer sobrio legal CL.

CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Cotizar" fijo; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil
discreto tras el hero. Subrayados animados 200ms.

MOTION (CSS/transiciones exactas; o "motion" si instalada)
Barra progreso scroll 2px roble · H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) ·
fade+rise 24px al entrar (once) · hovers 150–250ms · count-up 1.2s · expansión de fichas de
proyecto 280ms · TODO respeta prefers-reduced-motion (si activo: nada se mueve).

REGLAS DURAS (incumplir una = rechazado)
PROHIBIDO: personas/caras/manos, fotos stock de rascacielos genéricos, planos como textura
decorativa de fondo, badges de rating, marquee, planes SaaS "más elegido", iconos centrales,
gradientes decorativos, fondos oscuros, overlays oscuros, emojis, stock externo, inglés.
Todo español de Chile, alt="" descriptivos, contraste AA, focus-visible ring roble,
::selection roble, hero impecable a 360px, radios 0, padding vertical ≥112px desktop /
≥72px móvil, max-width ~1200px.

PROCESO OBLIGATORIO
1) Duplica _plantilla → arquitectura-b-claro y ajusta name/meta/title. 2) Genera y verifica
las 4 imágenes. 3) Maqueta componente por componente. 4) npm run propuesta --
arquitectura-b-claro y revisa en navegador; corrige. 5) npm run propuestas:build --
arquitectura-b-claro hasta cero errores. 6) Auto-revisión contra REGLAS DURAS y arco de
conversión (¿precio, permisos y quién-lo-construye respondidos antes del footer?). Itera lo
genérico. Calidad > velocidad: este sitio se usa para vender. 7) Resumen breve final.
```
