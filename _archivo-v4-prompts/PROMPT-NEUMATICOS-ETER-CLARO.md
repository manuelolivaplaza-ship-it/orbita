# SUPER-PROMPT — NEUMATICOS · GRUPO "CLARO MINIMALISTA / NEUTRO" — ÉTER CLARO (36 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para **ventas de neumáticos, servitecas y llantas chilenas cuya estética real
es clara, minimalista y neutra**: fondo blanco/hueso dominante, grilla disciplinada, tipografía
industrioso sobria, acento contenido, la llanta como protagonista técnico. Es la estética del
vulcanizador/serviteca que vende criterio, stock real y hora agendada — no humo. Vende que la
llanta correcta llega hoy, que la instalación es en el día y que la cotización se confirma sin
sorpresas. Que el auto no queda esperando.

Benchmark REAL verificado del rubro en este mismo segmento (medido por captura renderizada,
51 sitios, 36 en este grupo):
TiresChile (tireschile.cl), CambiaTuNeumatico (cambiatuneumatico.com), Llantas del Pacífico
(llantasdelpacifico.cl / adwise.cl), Bridgestone Apoquindo (ascapoquindo.cl), Chileneumaticos
(chileneumaticos.cl), León Servicio Automotriz (leon.cl), NEUMAFAST (tienda.neumafast.cl),
Serviteca Dacsa Goodyear (dacsa.cl), ZS Motor (zsmotor.cl), Neumaticos 4x3 (neumaticosk.cl),
Authievre Motors (motors.cl). Internacionalmente, el canónico del neumático claro premium:
Tire Rack (tirerack.com) y Discount Tire en su versión editorial limpia — aire, tabla técnica,
la llanta iluminada sobre papel, cero neón.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`.
   Copia ARCHIVOS, no node_modules. Nombre de carpeta: `propuestas/neumaticos-eter-claro`.
2. En tu copia: package.json → "name": "neumaticos-eter-claro". meta.json →
   { "title": "ÉTER NEUMÁTICOS — Serviteca · Propuesta Órbita", "client": "ÉTER NEUMÁTICOS",
     "brand": "ÉTER NEUMÁTICOS", "sector": "neumaticos",
     "description": "Propuesta clara minimalista para venta de neumáticos chilena: stock verificable, cotización en el día e instalación sin esperas." }.
   index.html → <html lang="es">, <title>ÉTER NEUMÁTICOS — Llantas con despacho hoy</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- neumaticos-eter-claro`
   - `npm run propuestas:build -- neumaticos-eter-claro` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/neumaticos-eter-claro/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: ÉTER NEUMÁTICOS — Serviteca y Llantas
H1: "La llanta correcta, instalada hoy."
Subhead: "Confirmamos stock, cotizamos en el día y la instalamos al tiro.
Medidas, carga y velocidad verificadas — sin sorpresas al llegar."
CTA principal: "Cotizar mis medidas" · secundario: "Ver stock y precios"
Urgencia/Ws: +56 9 7123 4567 (texto visible permanente: "¿Llanta ponchada? Escríbenos")
Contacto: ventas@eterneumaticos.cl · Av. Los Pajaritos 2400, Maipú · Despacho RM
Horario: Lun–Sáb 8:30–19:30 · Dom 9:00–14:00 (urgencias)

## PALETA (regla dura, variables CSS en :root)
--papel #F7F7F5 · --tinta #1A2328 (grafito-azulado industrial) · --gris #7A868F · --linea #E2E5E3 ·
ACENTO ÚNICO --goma #0F4C5C (azul goma profundo, <5% de la UI: CTA principal, estado activo, link).
Nunca #FFF puro para texto sobre oscuro ni #000 puro para fondo — usa la paleta.
border-radius: 0 en TODO. Cero sombras difusas: separación por filetes 1px var(--linea)
y whitespace. Botón sólido --tinta sobre --papel, hover a --goma con transición 180ms.

## PASO 0 — MEDIA (public/media/, máx 4 imágenes, si faltan tipografía lleva el layout)
galpon.jpg 16:9 galpón de serviteca luminoso y VACÍO, torres de llantas alineadas por medida,
luz norte, piso de concreto limpio, sin personas ·
detalle.jpg 1:1 macro de banda de rodadura nueva sobre papel kraft claro, luz rasante suave ·
bodega.jpg 16:9 pasillo de bodega claro ordenado, llantas rotuladas por código, simetría industrial ·
kit.jpg 4:5 bodegón de tuercas y manómetro alineados sobre superficie hueso, sombra suave.
PROHIBIDO: vulcanizador sonriendo con pulgar arriba, manos engrasadas posando, auto deportivo
con humo de llanta, renders 3D futuristas, llantas flotando con brillo neón. Si una imagen no
convence, se descarta y el layout tipográfico resuelve.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero editorial 12cols: kicker uppercase tracking .18em ("SERVITECA · MAIPÚ · DESDE 2006"),
           H1 gigante leading 0.92 tracking -0.03em, subhead 2 líneas gris, CTA sólido tinta "Cotizar medidas"
           + link subrayado animado a #precios "Ver precios de referencia". galpon.jpg derecha 7/12 con caption
           técnica 11px ("Stock verificable · Medida, carga y velocidad a la vista"). Banda fina bajo hero:
           "Stock real · Cotización en el día · Instalación al tiro · Despacho RM".
#cifras    Count-up al entrar (IntersectionObserver, 1.2s): "+18 años en Maipú", "+28.000 llantas instaladas",
           "96% instalación en el día", "+1.400 autos al mes". Números tabulares serif/geométricos grandes,
           divisor 1px var(--linea), sin iconitos.
#medidas   "¿Qué medida necesita tu auto? La verificamos." Buscador editorial por medida/vehículo
           (UI solo, sin backend: input con placeholder "Ej: 205/55 R16 · Marca · Modelo · Año" + botón
           --goma). 3 columnas filete superior: 01 Envías tu medida → 02 Confirmamos stock y precio → 03 Instalas o despachas.
           Micro-copy honesto: "Si no hay stock, te decimos al tiro — no te hacemos perder el día."
#precios   "Precios de referencia, sin sorpresas": tabla editorial 6 filas (NO cards SaaS) con precio DESDE en CLP
           tabulares con separador chileno (punto de miles): 175/70 R14, 185/65 R15, 195/55 R16, 205/55 R16,
           215/45 R17, 225/40 R18. Columna "Marca A / B (importación)" + nota honesta:
           "Precio final se confirma por medida y stock del día. Incluye montaje y balanceo. Con IVA."
           Fila destacada sutil con filete --goma 2px a la izquierda (solo una).
#servicios  Grilla 3×2 de categorías con foto detalle/bodega como pieza técnica: Cambio y montaje · Alineación y
           balanceo · Reparación de llantas · Venta online con despacho · Neumáticos agrícolas/industriales ·
           Revisión de presión y rotación. Cada celda: nombre uppercase 12px, hover revela "Agendar hora" (150ms).
#metodo    3 columnas filete 1px: 01 Cotizas por medida (respuesta en <10 min hábil) → 02 Confirmamos stock y precio
           por foto/código → 03 Instalación en el día o despacho con seguimiento. Sin iconos centrales:
           números grandes apagados 48px var(--gris) opacity .35.
#voces     3 testimonios SIN foto, SIN estrellas: cita serif itálica grande, atribución "— Taxista R. Fuentes, Cerrillos ·
           cliente desde 2019". Rotación fade lenta pausable, sin carrusel automático agresivo.
#faq       6 acordeones honestos (280ms, uno abierto a la vez): ¿Cómo verifico qué medida lleva mi auto?
           ¿Con qué marcas trabajan? ¿Cuánto demora la instalación? ¿Despachan a regiones?
           ¿La cotización es con IVA? ¿Puedo agendar para no esperar?
           Respuestas cortas, sin jerga.
#reserva   Headline "¿Llanta ponchada? Hablemos ahora." + teléfono tabular gigante + CTA Ws + horarios + dirección con
           micro-mapa línea (no iframe pesado). Footer sobrio legal CL: razón social ÉTER NEUMÁTICOS SpA, RUT, SII, año,
           "Av. Los Pajaritos 2400, Maipú — Estacionamiento clientes".

## CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Cotizar medidas" fijo + teléfono visible en desktop; nav hide-down/show-up + compacta 24px al scroll.
Sticky CTA móvil discreto tras el hero ("Cotizar medidas" con icono llanta minimal línea 16px). Subrayados animados 200ms.
Barra progreso scroll 2px var(--goma).

## MOTION (CSS/transiciones exactas)
H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) · fade+rise 24px al entrar (once, IntersectionObserver) ·
hovers 150–250ms · acordeones 280ms con grid-template-rows · count-up 1.2s tabular-nums · TODO respeta
prefers-reduced-motion (si activo: nada se mueve, todo aparece).

## REGLAS DURAS (incumplir una = trabajo rechazado)
- Fondo claro siempre (papel según paleta). PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos.
- PROHIBIDO stock neumático cliché: vulcanizador con pulgar arriba, manos engrasadas posando, auto con derrape,
  renders 3D genéricos, llantas flotando con glow neón. Solo imágenes de public/media (nada externo).
- Sin badges de rating, sin marquee de logos de marcas, sin contadores falsos, sin testimonios con foto,
  sin planes "más elegido", sin iconitos de llanta como pieza central (máximo UNA línea de herramienta lineal
  como divisor sutil en TODO el sitio).
- Acento --goma en MENOS del 5% de la UI. Radios 0. Botón sólido tinta sobre claro.
- Todo texto y alt en español de Chile, alt="" descriptivos, contraste AA, focus-visible ring goma,
  ::selection con goma/texto papel, hero impecable a 360px, padding vertical ≥112px desktop / ≥72px móvil,
  max-width ~1200px. CLP con punto de miles chileno.
- Secciones e ids obligatorios: #cifras, #precios, #faq (anclas del nav deben funcionar).

## PROCESO OBLIGATORIO
1) Lee este PROMPT y todo src/. 2) Implementa sección por sección respetando ids/anclas. 3) Genera y verifica
las 4 imágenes en public/media/ (si alguna no cumple, tipografía resuelve). 4) npm run propuesta --
neumaticos-eter-claro, revisa en navegador y corrige (360px, 768px, 1280px). 5) npm run propuestas:build --
neumaticos-eter-claro hasta cero errores. No agregues dependencias; no toques package.json ni vite.config.ts
salvo crítica. 6) Auto-revisión contra REGLAS DURAS y arco (¿medida, precio e instalación respondidos antes del footer?
¿Se siente serviteca seria o landing genérica?). Itera hasta lo primero. 7) Resumen breve.

Calidad > velocidad: esta propuesta se usa para vender rediseños a ventas de neumáticos chilenas
(grupo de 36 sitios con esta estética clara minimalista). Si queda "bien pero genérica", itera hasta que
un dueño de serviteca la envidie para sí misma.