# SUPER-PROMPT — NEUMATICOS · GRUPO "OSCURO / PREMIUM MINIMAL (REAL)" — NOCTUA OSCURO (13 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para **ventas de neumáticos, vulcanizadoras y servitecas chilenas cuya estética real
es oscura / premium minimal**: fondo grafito profundo dominante, la llanta como objeto de
precisión iluminado, tipografía sobria con tracking amplio, acento contenido tipo luz de taller
nocturno. Es la estética de la serviteca que trabaja de noche, tiene la máquina de montaje
calibrada y despacha sin humo. Vende que el taller nocturno está abierto cuando el auto falla,
que la medida se verifica contra el código real, que la instalación es rápida y sin letra chica.

Benchmark REAL verificado del rubro en este mismo segmento (medido por captura renderizada,
51 sitios, 13 en este grupo):
Fullneumaticos (fullneumaticos.cl), Llantas RX (llantasrx.cl), Neumáticos Holanda
(neumaticosholanda.cl), Puntoservice (puntoservice.cl), Doctor Motor's (drmotors.cl),
Redvulca a domicilio (redvulca.cl), Neumáticos y Llantas José (neumaticosjose.cl),
Serviteca PITSTOP CHILE (pitstopchile.cl), ZetaMotos (zetamotos.cl), León Veliz baterías y
neumáticos (bateriasleon.cl), GOMAS LEIVA (gomasleiva.com), NEUMATICOS TRASANDINO
(neumaticostrasandino.cl). Internacional: Tire Rack dark section (tirerack.com) por producto
iluminado sobre oscuro y Michelin Motorsport por la llanta como pieza técnica nocturna.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`.
   Copia ARCHIVOS, no node_modules. Nombre de carpeta: `propuestas/neumaticos-noctua-oscuro`.
2. En tu copia: package.json → "name": "neumaticos-noctua-oscuro". meta.json →
   { "title": "NOCTUA NEUMÁTICOS — Serviteca Nocturna · Propuesta Órbita", "client": "NOCTUA NEUMÁTICOS",
     "brand": "NOCTUA NEUMÁTICOS", "sector": "neumaticos",
     "description": "Propuesta oscura premium minimal para serviteca de neumáticos chilena: taller nocturno, precisión y despacho sin humo." }.
   index.html → <html lang="es">, <title>NOCTUA NEUMÁTICOS — Taller nocturno y despacho</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- neumaticos-noctua-oscuro`
   - `npm run propuestas:build -- neumaticos-noctua-oscuro` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/neumaticos-noctua-oscuro/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: NOCTUA NEUMÁTICOS — Serviteca Nocturna
H1: "Tu auto no espera horario. Nosotros tampoco."
Subhead: "Taller nocturno de neumáticos: cotizamos por medida, instalamos al tiro
y despachamos a domicilio. Verificamos cada llanta contra el código real."
CTA principal: "Cotizar ahora" · secundario: "Ver stock nocturno"
Urgencia/Ws: +56 9 8345 6789 (texto visible permanente: "Abierto hasta 23:00 — escríbenos")
Contacto: hola@noctuaneumaticos.cl · Av. Vicuña Mackenna 3400, Macul · Despacho RM y regiones
Horario: Lun–Dom 8:00–23:00 · Urgencias vía WhatsApp 24/7

## PALETA (regla dura, variables CSS en :root)
--fondo #121417 (grafito profundo) · --superficie #1A1D20 · --superficie-alta #23262B · --filete #2E3339 ·
--hueso #E8E6E1 (texto, NUNCA #FFF) · --gris #9AA0A6 ·
ACENTO ÚNICO --ambar #D97706 (luz de taller cálida, <6% de la UI: CTA principal, kickers, estados activos, links).
PROHIBIDO #000/#FFF puros, neón saturado, glow en texto, gradientes púrpura-azul genéricos.
border-radius: 0 en TODO. Profundidad por capas de fondo + filetes 1px (nunca sombras difusas).
Fondo oscuro en capas SIEMPRE (nada de bloques blancos).

## PASO 0 — MEDIA (public/media/, máx 4 imágenes, si faltan tipografía lleva el layout)
galpon.jpg 16:9 taller nocturno VACÍO e impecable: torres de llantas en sombra, una sola luz cálida
rasante sobre la bancada de montaje, piso de concreto limpio que refleja la luz, sin personas ·
detalle.jpg 1:1 macro de banda de rodadura nueva sobre pizarra oscura, luz rasante cálida ·
bodega.jpg 16:9 pasillo de bodega nocturna ordenada, llantas rotuladas por código, simetría industrial
en penumbra ·
kit.jpg 4:5 bodegón chiaroscuro de manómetro y tuercas sobre acero oscuro, sombra profunda.
PROHIBIDO: vulcanizador sonriendo con pulgar arriba, manos engrasadas posando, auto derrapando con
humo, renders 3D futuristas, llantas flotando con neón. Si una imagen no convence, se descarta
y el layout tipográfico resuelve.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero editorial 12cols: kicker uppercase tracking .18em ámbar ("SERVITECA NOCTURNA · MACUL · DESDE 2009"),
           H1 gigante hueso leading 0.92 tracking -0.03em, subhead 2 líneas gris, CTA sólido ámbar "Cotizar ahora"
           + link subrayado animado a #precios "Ver precios de referencia". galpon.jpg derecha 7/12 con caption
           técnica 11px ("Stock verificable · Medida, carga y velocidad a la vista"). Banda fina bajo hero:
           "Abierto hasta 23:00 · Cotización en el día · Instalación al tiro · Despacho a domicilio".
#cifras    Count-up al entrar (IntersectionObserver, 1.2s): "+16 años de servicio", "+24.000 llantas instaladas",
           "98% instalación en el día", "+2.300 autos al mes". Números tabulares serif/geométricos grandes,
           divisor 1px var(--filete), sin iconitos.
#medidas   "¿Qué medida necesita tu auto? La verificamos." Buscador editorial por medida/vehículo
           (UI solo, sin backend: input con placeholder "Ej: 215/45 R17 · Marca · Modelo · Año" + botón
           ámbar). 3 columnas filete superior: 01 Envías tu medida → 02 Confirmamos stock y precio → 03 Instalas o despachamos.
           Micro-copy honesto: "Si no hay stock, te decimos al tiro — no te hacemos perder el día."
#precios   "Precios de referencia, sin sorpresas": tabla editorial 6 filas (NO cards SaaS) con precio DESDE en CLP
           tabulares con separador chileno (punto de miles): 175/70 R14, 185/65 R15, 195/55 R16, 205/55 R16,
           215/45 R17, 225/40 R18. Columna "Marca A / B (importación)" + nota honesta:
           "Precio final se confirma por medida y stock del día. Incluye montaje y balanceo. Con IVA."
           Fila destacada sutil con filete ámbar 2px a la izquierda (solo una).
#servicios  Grilla 3×2 de categorías con foto detalle/bodega como pieza técnica: Cambio y montaje nocturno ·
           Alineación y balanceo · Reparación de llantas · Venta online con despacho · Neumáticos agrícolas ·
           Urgencias 24/7. Cada celda: nombre uppercase 12px, hover revela "Agendar hora" (150ms).
#metodo    3 columnas filete 1px: 01 Cotizas por medida (respuesta en <10 min hábil) → 02 Confirmamos stock y precio
           por foto/código → 03 Instalación en el día o despacho con seguimiento. Sin iconos centrales:
           números grandes apagados 48px var(--gris) opacity .35.
#voces     3 testimonios SIN foto, SIN estrellas: cita serif itálica grande, atribución "— Taxista P. Herrera, Macul ·
           cliente desde 2018". Rotación fade lenta pausable, sin carrusel automático agresivo.
#faq       6 acordeones honestos (280ms, uno abierto a la vez): ¿Cómo verifico qué medida lleva mi auto?
           ¿Atienden urgencias de noche? ¿Con qué marcas trabajan? ¿Despachan a domicilio y regiones?
           ¿La cotización es con IVA? ¿Puedo agendar para no esperar?
           Respuestas cortas, sin jerga.
#reserva   Headline "¿Llanta ponchada a las 21:00? Escríbenos." + teléfono tabular gigante + CTA Ws + horarios + dirección con
           micro-mapa línea (no iframe pesado). Footer sobrio legal CL: razón social NOCTUA NEUMÁTICOS SpA, RUT, SII, año,
           "Av. Vicuña Mackenna 3400, Macul — Estacionamiento clientes".

## CONVERSIÓN SIEMPRE PRESENTE
Nav translúcido blur sutil con botón ámbar "Cotizar"; hide-down/show-up + compacta 24px al scroll.
Sticky CTA móvil discreto tras el hero ("Cotizar ahora" con icono llanta minimal línea 16px).
Subrayados animados 200ms. Barra progreso scroll 2px ámbar.

## MOTION (CSS/transiciones exactas)
H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) · fade+rise 24px al entrar (once, IntersectionObserver) ·
hovers 150–250ms · acordeones 280ms con grid-template-rows · count-up 1.2s tabular-nums · TODO respeta
prefers-reduced-motion (si activo: nada se mueve, todo aparece).

## REGLAS DURAS (incumplir una = trabajo rechazado)
- Fondo oscuro en capas SIEMPRE (nada de bloques blancos). PROHIBIDO overlays negros planos sobre fotos.
- PROHIBIDO stock neumático cliché: vulcanizador con pulgar arriba, manos engrasadas posando, auto derrapando,
  renders 3D genéricos, llantas flotando con neón. Solo imágenes de public/media (nada externo).
- Sin badges de rating, sin marquee de logos, sin contadores falsos, sin testimonios con foto,
  sin planes "más elegido", sin iconitos de llanta como pieza central.
- Acento ámbar en MENOS del 6% de la UI. Radios 0. Botón sólido ámbar con texto oscuro.
- Todo texto y alt en español de Chile, alt="" descriptivos, contraste AA, focus-visible ring ámbar,
  ::selection con ámbar/texto oscuro, hero impecable a 360px, padding vertical ≥112px desktop / ≥72px móvil,
  max-width ~1200px. CLP con punto de miles chileno.
- Secciones e ids obligatorios: #cifras, #precios, #faq (anclas del nav deben funcionar).

## PROCESO OBLIGATORIO
1) Lee este PROMPT y todo src/. 2) Implementa sección por sección respetando ids/anclas. 3) Genera y verifica
las 4 imágenes en public/media/ (si alguna no cumple, tipografía resuelve). 4) npm run propuesta --
neumaticos-noctua-oscuro, revisa en navegador y corrige (360px, 768px, 1280px). 5) npm run propuestas:build --
neumaticos-noctua-oscuro hasta cero errores. No agregues dependencias; no toques package.json ni vite.config.ts
salvo crítica. 6) Auto-revisión contra REGLAS DURAS y arco (¿medida, precio e instalación respondidos antes del footer?
¿Se siente serviteca nocturna seria o landing genérica?). Itera hasta lo primero. 7) Resumen breve.

Calidad > velocidad: esta propuesta se usa para vender rediseños a servitecas de neumáticos chilenas
(grupo de 13 sitios con esta estética oscura premium). Si queda "bien pero genérica", itera hasta que
un dueño de serviteca nocturna la envidie para sí misma.