# SUPER-PROMPT — EVENTOS · GRUPO "CLARO MINIMALISTA / NEUTRO" (30 sitios) — ÉTER CLARO

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para centros y casas de eventos chilenas cuya estética real (medida por captura
renderizada + pixel) es **clara, luminosa y ordenada**: fondo papel dominante, tipografía
sobria, grilla disciplinada, acento contenido. Es el grueso del mercado chileno de eventos
(30 de 86 válidos A+B Maps): salones de Las Condes, La Reina, Vitacura, Providencia,
Valparaíso y Talcahuano que hoy se ven como WordPress genérico con fotos movidas y
sin cotización clara — y necesitan verse caros, puntuales y confiables.
Benchmark REAL verificado del rubro en este mismo segmento (captura + pixel medido):
Club 50 (club50.cl) — Las Condes, 480 reviews, estética neutra limpia 29% oscuro;
CasaPiedra Eventos (casapiedra.cl) — 3407 reviews, referente absoluto oriente;
Terrazas de La Reina, Mesón del Parque, Centro Lyon, Valparaíso Sporting (sporting.cl,
4687 reviews), Casona Aldunate, Casa Almarza. Canon internacional del claro editorial
para eventos: Aesop-like editorial puro (aire, filetes, tipografía) + The Greenwich Hotel
(luz, madera, lino).
Dolor real que esta propuesta resuelve: tu salón es precioso pero tu web lo hace parecer
quincho de condominio; la novia pide precio y le respondes "a consultar" por WhatsApp
a las 23:00 sin respuesta 2 días; no hay fotos reales del salón vacío con luz, no hay
plano, no hay tabla de capacidades/precios por día, no hay disponibilidad; el sitio no
cotiza en el celular sin hacer zoom a un PDF. Esta propuesta vende: precios por escrito
en 24h, un solo evento por día, equipo dedicado, y fotos que hacen querer casarse ahí.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`.
   Copia ARCHIVOS, no node_modules. Nombre de carpeta: `propuestas/eter-claro`.
   (Ya existe para estética; sobrescribe contenido para EVENTOS manteniendo misma carpeta.
   Si prefieres no pisar, crea `eter-claro-eventos` y ajusta los comandos abajo).
2. En tu copia: package.json → "name": "eter-claro". meta.json →
   { "title": "ÉTER — Casa de Eventos · Propuesta Órbita", "client": "ÉTER", "brand": "ÉTER", "sector": "eventos", "description": "Propuesta clara luminosa para centros de eventos: salones, capacidades y cotización instantánea." }.
   index.html → <html lang="es">, <title>ÉTER — Casa de Eventos · Celebraciones que se quedan</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- eter-claro` → http://localhost:3010
   - `npm run propuestas:build -- eter-claro` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/eter-claro/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: ÉTER — Casa de Eventos
H1: "Celebraciones que se quedan en la memoria."
Subhead: "Salones con luz, parque y un equipo que no te deja sola el día del evento. Cotiza hoy con precios y disponibilidad reales."
CTA principal: "Cotizar mi fecha" · secundario: "Ver salones"
Contacto: +56 2 2840 3315 · hola@eter-eventos.cl · La Reina, Santiago
WhatsApp fijo visible: +56 9 8403 3315 (texto: "Respuesta en <2h hábiles")
Horario visitas: Lun–Sáb 10:00–19:00 · Dom con reserva

## PALETA (regla dura, variables CSS en :root)
--papel #FBF9F6 · --tinta #1A2320 (verde-negro profundo, NUNCA #000) · --gris #7F8782 · --linea #E6DDD2 ·
ACENTO ÚNICO --terracota #C0582A (<5% de la UI: CTA principal sólido, kickers, links activos, subrayados).
PROHIBIDO #000/#FFF puros, neón, glow, gradientes decorativos. border-radius: 0 en TODO.
Cero sombras difusas: separación por filetes 1px var(--linea) y whitespace generoso.

## PASO 0 — MEDIA (public/media/, máx 4 imágenes; caras/manos/fiestas desbordadas = descartar y regenerar)
salon.jpg 16:9 salón VACÍO luminoso, mesa larga roble clara vestida lino hueso, luz norte, parque al fondo desenfocado, sin personas ·
detalle.jpg 4:5 bodegón mesa: platos hueso, cubiertos, copa agua, servilleta lino doblada, luz rasante cálida ·
parque.jpg 16:9 parque/jardín crepuscular VACÍO, guirnalda de luces cálidas tenue, cinematográfico sereno ·
plano.jpg 1:1 plano cenital esquemático del salón (líneas finas tinta sobre papel) estilo arquitectónico, no foto.
Si falta una, tipografía y layout llevan el diseño solos. Nada externo a public/media.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero: kicker uppercase tracking amplio ("CASA DE EVENTOS · LA REINA"), H1 gigante
           leading 0.92 tracking negativo tinta, subhead 2 líneas gris, CTA sólido terracota
           texto papel + link subrayado animado a #precios. salon.jpg derecha 7/12, caption
           técnica 11px ("Salón Central · 180 sentados · luz norte"). Banda fina bajo hero:
           "Un solo evento por día · Equipo dedicado · Estacionamiento privado".
#salones   Índice numerado 01–03 editorial (NO cards): Salón Central (180p) · Terraza Parque
           (120p) · Salón Íntimo (60p). Hover/tap expande 64px revelando m2, capacidad
           banquete/cóctel, precio desde y CTA "Ver disponibilidad". (280ms).
#cifras    Count-up al entrar (IntersectionObserver): "+14 años operando", "+3.800 eventos",
           "4.8/5 · 1.240 reseñas verificadas", "Un solo evento por día". Números tabulares
           serif grandes terracota apagado.
#precios   "Precios claros, sin letra chica": tabla editorial sobria (NO cards SaaS) con 4 filas
           precio DESDE en CLP tabulares: Matrimonio 150p · Corporativo 80p · Cumpleaños 60p ·
           Cóctel 120p. Columnas: incluye (mobiliario, audio básico, mantelería, coordinación
           día D) · no incluye. Nota honesta: "El valor final se confirma con fecha y
           asistencia. Nunca cobramos algo que no aprobaste por escrito."
#metodo    3 columnas filete superior 1px: 01 Visita y cotización 24h → 02 Reserva con contrato
           simple → 03 Montaje y coordinación día D. Números grandes 11px caption.
#galeria   detalle.jpg + parque.jpg como OBRAS DE GALERÍA: filete 1px, caption técnica 11px,
           revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.
#faq       6 acordeones honestos (280ms): ¿Cómo reservo mi fecha? ¿Cuál es el mínimo de
           personas y horarios? ¿Qué incluye el arriendo y qué se paga aparte (banquetería,
           barra, DJ)? ¿Puedo traer proveedores externos? ¿Qué pasa si llueve (terraza)?
           ¿Cómo se paga y cuál es la política de devolución?
#reserva   Headline corto + teléfono tabular gigante + CTA "Cotizar mi fecha" + horarios
           + dirección + mapa-linea textual + WhatsApp. Footer sobrio legal CL (razón social,
           dirección, año).
           Micro-línea bajo CTA: "Cotización con fecha, asistencia y precios por escrito en 24h."

## CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Cotizar" terracota fijo + teléfono visible en desktop; nav hide-down/show-up
+ compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Cotizar mi fecha").
Subrayados animados 200ms. Barra progreso scroll 2px terracota.

## MOTION (CSS/transiciones exactas)
H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) · fade+rise 24px al entrar (once) ·
hovers 150–250ms · acordeones 280ms · count-up 1.2s · galería cortina clip-path 700ms ·
TODO respeta prefers-reduced-motion (si activo: nada se mueve).

## REGLAS DURAS (incumplir una = trabajo rechazado)
- Fondo claro SIEMPRE (papel según paleta). PROHIBIDO secciones negras/noche u overlays oscuros.
- PROHIBIDO stock de fiestas: gente brindando desbordada, manos con copas, confeti cayendo,
  antes/después, montajes Pinterest con guirnaldas saturadas. Solo imágenes ya presentes en
  public/media (nada externo).
- Sin badges de rating, sin marquee de logos, sin contadores falsos, sin testimonios con foto,
  sin planes SaaS "más elegido", sin iconitos de copas/torta/globos como pieza central.
- Accent <5%. Radios 0. Botón sólido tinta/papel según contraste. Todo español de Chile,
  alt descriptivos, contraste AA, focus-visible ring terracota, ::selection terracota/papel,
  hero impecable a 360px, padding vertical ≥112px desktop / ≥72px móvil, max-width ~1200px.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando
ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/. 4) npm run propuesta --
eter-claro, revisa en navegador y corrige. 5) npm run propuestas:build -- eter-claro hasta
cero errores. No agregues dependencias nuevas; no toques package.json ni vite.config.ts salvo
necesidad crítica. 6) Auto-revisión contra REGLAS DURAS y arco de conversión (¿precio,
disponibilidad y qué-incluye respondidos antes del footer? ¿Se siente casa que cuida una
celebración o página genérica de quincho?). Itera hasta lo primero. Calidad > velocidad. 7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a casas de eventos chilenas
de estética clara (30 sitios A+B Maps medidos por pixel: Club 50, CasaPiedra, Terrazas de
La Reina, etc.). Si queda "bien pero genérica", itera hasta que una dueña la envidie para
sí misma.
