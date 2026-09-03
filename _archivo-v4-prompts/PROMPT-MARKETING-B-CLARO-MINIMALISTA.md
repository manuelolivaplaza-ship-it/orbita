# SUPER-PROMPT — MARKETING B · GRUPO "CLARO MINIMALISTA / NEUTRO" (92 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para agencias de marketing chilenas cuya estética real (medida por captura
renderizada) es **clara minimalista y neutra**: papel dominante, tipografía editorial,
acento contenido, sensación de orden y criterio. Es la estética de la agencia que vende
criterio antes que volume: pocas promesas, muchas pruebas. Benchmark REAL verificado del
rubro en este mismo segmento: Bigbuda (bigbuda.cl), Urban Marketing (urbanmarketing.cl),
BEP BE PARTNERS (bepbepartners.cl), Inédita (agenciainedita.cl), BuscAds (buscads.cl),
Nexta Chile (nextachile.cl). Internacionalmente, el canónico del claro editorial:
Skinney MedSpa (skinneymedspa.com) por su disciplina tipográfica aplicada a fondo claro,
y Pentagram (pentagram.com) por ritmo editorial: grilla, blancos generosos, una tinta de
acento.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`. Copia ARCHIVOS, no
   node_modules. Nombre de carpeta: `propuestas/marketing-b-claro` (YA CREADA, con los
   archivos base copiados; solo ajusta nombres/títulos y escribe el código).
2. En tu copia: package.json → "name": "marketing-b-claro". meta.json →
   { "title": "CRITERIO — Agencia de Marketing · Propuesta Órbita", "client": "CRITERIO",
     "brand": "CRITERIO", "sector": "marketing",
     "description": "Propuesta clara editorial para agencias de marketing chilenas: orden, criterio y métricas." }.
   index.html → <html lang="es">, <title>CRITERIO — Agencia de Marketing</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- marketing-b-claro`
   - `npm run propuestas:build -- marketing-b-claro` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/marketing-b-claro/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: CRITERIO — Agencia de Marketing
H1: "Marketing con criterio, no con ruido."
Subhead: "Estrategia, contenido y pauta explicados en lenguaje plano.
Reporte mensual con los números que sí mueven tu negocio."
CTA principal: "Agendar diagnóstico" · secundario: "Ver servicios"
Línea fija: +56 2 2840 1122
Contacto: hola@criterio.cl · Providencia, Santiago
Horario: Lun–Vie 9:00–18:30

## PALETA (regla dura, variables CSS en :root)
--papel #FAF9F5 · --tinta #1C1C1A · --gris #75736B · --linea #E3E1D8 ·
ACENTO ÚNICO --lacre #A63A2B (<5% de la UI: CTA principal, kickers, estados activos,
links; el resto neutro). border-radius: 0 en TODO. Cero sombras difusas: separación por
filetes 1px var(--linea) y whitespace.

## PASO 0 — MEDIA (public/media/, máx 4 imágenes; caras/manos/equipos de stock = descartar)
recepcion.jpg 16:9 oficina luminosa VACÍA con mesa de madera clara, sillas simples y pared
blanca rota · muestras.jpg 16:9 papelería de marca alineada sobre mesa clara (libros,
tarjetas, láminas), luz natural · detalle.jpg 1:1 macro de papel algodón texturado con luz
suave rasante · cuaderno.jpg 4:5 bodegón de cuaderno, lápiz y taza de cerámica sobre lino
claro.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero: kicker lacre uppercase ("AGENCIA DE MARKETING · PROVIDENCIA"), H1 gigante
           leading 0.92 tracking negativo, subhead 2 líneas, CTA sólido tinta + link
           subrayado animado a #servicios. recepcion.jpg derecha 7/12, caption técnica
           11px. Banda fina bajo el hero: "Planes mensuales sin contratos trampa ·
           Reporte con números auditables".
#servicios Índice numerado 01–06 editorial (NO cards): Estrategia y posicionamiento ·
           Pauta digital · Contenido y copywriting · SEO técnico · Redes sociales ·
           Analítica y reportes. Hover/tap expande 64px revelando duración típica y
           precio "desde" CLP (280ms).
#cifras    Count-up al entrar (IntersectionObserver): "+12 años operando", "+160 cuentas
           atendidas", "94% retención anual", "Equipo senior, sin pasantes en tu cuenta".
           Números tabulares grandes.
#precios   "Precios claros, sin sorpresas": tabla editorial 6 filas precio desde en CLP
           tabulares (diagnóstico, plan mensual integral, gestión de pauta, producción de
           contenido, auditoría SEO, capacitación al equipo) + nota honesta: "El valor
           final se confirma tras el diagnóstico. Nunca partimos una cuenta sin objetivos
           escritos y aprobados."
#metodo    3 columnas filete superior 1px: 01 Diagnóstico → 02 Plan y KPIs por escrito →
           03 Ejecución y reporte mensual. Sin iconitos centrales: números grandes
           apagados.
#voces     3 testimonios SIN foto SIN estrellas: cita serif itálica grande, comilla lacre,
           atribución "— Rodrigo, gerente comercial · industria retail". Rotación fade
           lenta, pausable.
#faq       6 acordeones honestos (280ms): ¿Hay contrato de permanencia? ¿Cuánto cuesta el
           diagnóstico? ¿Quién trabaja mi cuenta? ¿Cada cuánto reportan? ¿Qué pasa si los
           números no mejoran? ¿Qué formas de pago aceptan?
#reserva   Headline corto + teléfono tabular gigante + CTA + horarios + dirección.
           Micro-línea: "Respondemos personalmente. Sin call centers."
           Footer sobrio legal CL (razón social CRITERIO SpA, SII, año).

## CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Agendar" fijo; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil
discreto tras el hero ("Agendar diagnóstico"). Subrayados animados 200ms.

## MOTION (CSS/transiciones exactas)
Barra progreso scroll 2px lacre · H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) ·
fade+rise 24px al entrar (once) · hovers 150–250ms · acordeones 280ms · count-up 1.2s · TODO
respeta prefers-reduced-motion (si activo: nada se mueve).

## REGLAS DURAS (incumplir una = trabajo rechazado)
- Fondo claro siempre (papel según paleta). PROHIBIDO secciones negras/noche u overlays
  oscuros sobre fotos.
- PROHIBIDO stock de agencia cliché: equipos posando, reuniones con post-its, manos sobre
  laptops, pizarras con garabatos, gráficos 3D abstractos de banco de imágenes. Solo las
  imágenes ya presentes en public/media (nada externo, nada nuevo). Si falta una,
  tipografía y layout llevan el diseño solos.
- Sin badges de rating, sin marquee de logos de clientes, sin contadores falsos, sin
  testimonios con foto, sin planes "más elegido", sin iconitos de cohete/bombilla/gráfico
  como pieza central.
- Accent en MENOS del 5% de la UI. Radios 0. Botón sólido tinta sobre fondo claro.
- Todo texto y alt en español de Chile, alt="" descriptivos, contraste AA, focus-visible
  ring lacre, ::selection lacre/texto claro, hero impecable a 360px, padding vertical
  ≥112px desktop / ≥72px móvil, max-width ~1200px.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando
ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/. 4) npm run propuesta --
marketing-b-claro, revisa en navegador y corrige. 5) npm run propuestas:build --
marketing-b-claro hasta cero errores. No agregues dependencias nuevas; no toques
package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS
DURAS y arco de conversión (¿precio, quién-trabaja-la-cuenta y cómo-reporta respondidos
antes del footer?). 7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a agencias de marketing
chilenas (grupo de 92 sitios con esta estética). Si queda "bien pero genérica", itera hasta
que una agencia la envidie para sí misma.
