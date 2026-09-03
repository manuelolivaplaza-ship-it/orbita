# SUPER-PROMPT — MARKETING B · GRUPO "OSCURO / PREMIUM MINIMAL" (96 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para agencias de marketing chilenas cuya estética real (medida por captura
renderizada) es **oscura y premium minimal**: fondo noche dominante, tipografía como joya,
la estrategia presentada como pieza de galería. Es la estética de la agencia boutique que
vende criterio, foco y resultados medibles — no ruido, no emojis de cohete ni promesas
infladas. Benchmark REAL verificado del rubro en este mismo segmento: LaGencia
(lagencia.cl), Digitals (digitals.cl), Bengala Digital (bengaladigital.cl), Retargeting
Latam (retargeting.cl), Ikigai Agencia Digital (ikigaiagenciadigital.cl), Loopbond
(loopbond.com). Internacionalmente, el canónico del oscuro premium editorial:
Skinney MedSpa (skinneymedspa.com) — noche cálida en capas, serif/sans contrastadas,
la imagen como galería iluminada; también Aesop (aesop.com) por contención.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`. Copia ARCHIVOS, no
   node_modules. Nombre de carpeta: `propuestas/marketing-b-oscuro` (YA CREADA, con los
   archivos base copiados; solo ajusta nombres/títulos y escribe el código).
2. En tu copia: package.json → "name": "marketing-b-oscuro". meta.json →
   { "title": "BRÚJULA — Agencia de Marketing · Propuesta Órbita", "client": "BRÚJULA",
     "brand": "BRÚJULA", "sector": "marketing",
     "description": "Propuesta oscura premium minimal para agencias de marketing chilenas: criterio, foco y métricas." }.
   index.html → <html lang="es">, <title>BRÚJULA — Agencia de Marketing</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- marketing-b-oscuro`
   - `npm run propuestas:build -- marketing-b-oscuro` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/marketing-b-oscuro/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: BRÚJULA — Agencia de Marketing
H1: "Menos ruido, más clientes."
Subhead: "Estrategia, contenido y pauta con reportabilidad mensual real.
Presupuesto de medios transparente desde el primer día."
CTA principal: "Agendar diagnóstico"
Línea fija: +56 2 2965 4821 (visible permanente)
Contacto: hola@brujula.cl · Providencia, Santiago
Horario: Lun–Vie 9:00–18:30

## PALETA (regla dura — la oscuridad tiene capas, variables CSS en :root)
--fondo #14161A (azul-negro tinta profunda) · --superficie #1B1E23 · --superficie-alta
#22262C · --filete #2F343B · --hueso #ECE9E2 (texto, NUNCA #FFF) · --gris-calido #9AA3AC ·
ACENTO ÚNICO --ambar #D9A441 (<5% de la UI: CTA sólido, kickers, estados activos, links).
PROHIBIDO #000/#FFF puros, neón (#39FF14 y familia), glow en texto, gradientes
púrpura-azul genéricos. border-radius: 0 en TODO. Profundidad por capas de fondo +
filetes 1px (nunca sombras difusas).

## PASO 0 — MEDIA (public/media/, máx 4 imágenes; caras/manos/equipos de stock = descartar)
hero.jpg 16:9 sala de reuniones crepuscular VACÍA, mesa larga oscura, luz oculta cálida
rasante, cinematográfica pero serena · tablero.jpg 4:5 bodegón chiaroscuro: cuaderno,
regla, compás antiguo sobre piedra oscura · texture.jpg 1:1 macro papel negro texturado
con luz rasante cálida · oficina.jpg 16:9 pasillo/oficina nocturna simétrica con focos
cálidos empotrados, serena.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero pantalla completa: kicker ámbar uppercase ("AGENCIA DE MARKETING ·
           PROVIDENCIA"), H1 gigante hueso leading 0.95 tracking negativo, subhead gris
           cálido, CTA sólido ámbar texto tinta + link subrayado animado a #servicios.
           hero.jpg lateral 7/12 integrado por degradado hacia --fondo (NUNCA overlay
           negro plano). Grano fílmico sutilísimo (opacity .04) sobre toda la página.
#filosofia ★ LA SECCIÓN QUE DIFERENCIA ★ editorial corto: "Estrategia que se puede
           auditar." Copy base: "Cada campaña tiene objetivo, presupuesto y métrica
           declarados por escrito. Si el número no mejora, te lo decimos nosotros antes
           que tú." Sin testimonios públicos JAMÁS: la discreción es el argumento premium.
#cifras    Count-up tabulares al entrar (IntersectionObserver): "+11 años operando",
           "+140 cuentas atendidas", "92% retención anual de clientes", "3 industrias
           dominadas". Evidencia numérica en vez de before/after.
#servicios Índice numerado 01–06 lista editorial con HOVER FLIP-CARD (280ms): Estrategia
           digital · Pauta y paid media · Contenido y producción · SEO técnico · Email y
           CRM · Analítica y dashboards. La fila revela panel var(--superficie) con
           duración típica y precio "desde" CLP. En móvil tap = acordeón.
#precios   "Precios claros, sin sorpresas": tabla sobria 5 filas precio desde en CLP
           tabulares (diagnóstico, plan mensual, gestión de pauta, producción de contenido,
           auditoría SEO) + nota honesta: "El valor final se confirma tras el diagnóstico.
           Nunca partimos sin objetivos escritos y aprobados."
#metodo    3 columnas filetes verticales 1px: 01 Diagnóstico → 02 Plan y KPIs por escrito →
           03 Ejecución y reporte mensual. Números grandes ámbar apagado.
#galeria   tablero.jpg + texture.jpg como OBRAS DE GALERÍA: filete 1px, caption técnica
           11px, revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.
#faq       6 acordeones honestos (280ms): ¿Trabajan con contratos a plazo fijo? ¿Cuánto
           cuesta el diagnóstico? ¿Quién ejecuta las campañas? ¿Reportan con qué
           frecuencia? ¿Qué pasa si los números no mejoran? ¿Qué formas de pago aceptan?
#reserva   Sobre var(--superficie): headline corto, teléfono hueso gigante tabular, botón
           ámbar, horarios, dirección. Micro-línea: "Respondemos personalmente. Sin call
           centers." Footer sobrio: marca pequeña, dirección, legal Chile, año.

## CONVERSIÓN SIEMPRE PRESENTE
Nav translúcido blur sutil con botón ámbar "Agendar"; hide-down/show-up + compacta 24px al
scroll. Sticky CTA móvil discreto tras el hero. Cursor personalizado sutil (punto ámbar
6px con lerp, se agranda sobre links; desactivado en touch/reduced-motion).

## MOTION (CSS/transiciones exactas)
Barra progreso scroll 2px ámbar · H1 clip-reveal líneas stagger .12s ease(0.22,1,0.36,1) ·
galería cortina clip-path · count-up 1.2s · flip-cards 280ms · hovers 150–250ms · TODO
respeta prefers-reduced-motion (si activo: nada se mueve).

## REGLAS DURAS (incumplir una = trabajo rechazado)
PROHIBIDO: personas/caras/manos, equipos posando, testimonios con foto o estrellas,
marquee de logos, contadores falsos, planes SaaS "más elegido", iconitos centrales
(cohete/bombilla/gráfico), glow/neón, #000/#FFF puros, overlays negros planos sobre foto,
emojis, stock externo, inglés. Fondo oscuro en capas SIEMPRE (nada de bloques blancos).
Todo español de Chile, alt="" descriptivos, contraste AA, focus-visible ring ámbar,
::selection ámbar/texto oscuro, responsive real a 360px, radios 0, padding vertical ≥112px
desktop / ≥72px móvil, max-width ~1200px.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando
ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/. 4) npm run propuesta --
marketing-b-oscuro, revisa en navegador y corrige. 5) npm run propuestas:build --
marketing-b-oscuro hasta cero errores. No agregues dependencias nuevas; no toques
package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS
DURAS y arco de conversión (¿precio, quién-ejecuta y cómo-reporta respondidos antes del
footer? ¿Se siente agencia boutique premium o página genérica?). Itera hasta lo primero.
Calidad > velocidad. 7) Resumen breve final.
