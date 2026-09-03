# SUPER-PROMPT — REPUESTOS · GRUPO "OSCURO / PREMIUM MINIMAL (REAL)" — NOCTUA OSCURO (15 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para **casas de repuestos y distribuidoras automotrices chilenas cuya estética real
es oscura / premium minimal**: fondo grafito profundo dominante, el repuesto como objeto de
precisión iluminado sobre oscuro, tipografía sobria con tracking amplio, acento contenido tipo
luz de taller nocturno. Es la estética de la casa de repuestos que trabaja con catálogo digital,
tiene el código exacto y despacha sin humo. Vende que el repuesto correcto llega hoy, que la
compatibilidad se verifica por VIN/código, que el taller no queda parado esperando.

Benchmark REAL verificado del rubro en este mismo segmento (medido por captura renderizada,
68 sitios, 15 en este grupo):
Michelson Car Service (michelsoncarservice.com), Car Toys (cartoys.cl), Fastparts (fastparts.cl),
DobleTracción 4x4 (dobletraccion.com), Sermaco Automotriz (sermacoautomotriz.cl),
José Vergara y Cía (josevergara.cl), Automotriz Noack (noack.cl), Suzuki Dumay (dumay.cl),
Central de Repuestos Universal (cruniversal.cl), Autovidrios Robin (autovidriosrobin.cl),
Worldparts (worldparts.cl), Derco Center Salazar Israel (dercocentersalazarisrael.cl),
Repuestos Misleh (mislehrepuestos.cl), Autokrom (autokrom.cl), Lubricentro Huechuraba
(lubricentrohuechuraba.cl). Internacional: RockAuto dark section (rockauto.com) por el
catálogo técnico nocturno y Autodoc en modo oscuro por la tabla de compatibilidad como pieza central.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`.
   Copia ARCHIVOS, no node_modules. Nombre de carpeta: `propuestas/repuestos-noctua-oscuro`.
2. En tu copia: package.json → "name": "repuestos-noctua-oscuro". meta.json →
   { "title": "NOCTUA REPUESTOS — Casa de Repuestos Nocturna · Propuesta Órbita", "client": "NOCTUA REPUESTOS",
     "brand": "NOCTUA REPUESTOS", "sector": "repuestos",
     "description": "Propuesta oscura premium minimal para casa de repuestos chilena: catálogo técnico nocturno, compatibilidad por código y despacho hoy." }.
   index.html → <html lang="es">, <title>NOCTUA REPUESTOS — Repuestos con despacho hoy</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- repuestos-noctua-oscuro`
   - `npm run propuestas:build -- repuestos-noctua-oscuro` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/repuestos-noctua-oscuro/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: NOCTUA REPUESTOS — Casa de Repuestos
H1: "El repuesto correcto, hoy. Sin vueltas."
Subhead: "Verificamos por VIN y código, confirmamos stock real y despachamos en el día.
Si no lo tenemos, te decimos al tiro — no te hacemos perder el taller."
CTA principal: "Cotizar por VIN" · secundario: "Ver stock y código"
Urgencia/Ws: +56 9 9234 5678 (texto visible permanente: "¿Taller detenido? Escríbenos")
Contacto: ventas@noctuarepuestos.cl · 10 de Julio 771, Santiago · Despacho RM y regiones
Horario: Lun–Vie 8:30–18:30 · Sáb 9:00–14:00 · Urgencias vía WhatsApp

## PALETA (regla dura, variables CSS en :root)
--fondo #121417 (grafito profundo) · --superficie #1A1D20 · --superficie-alta #23262B · --filete #2E3339 ·
--hueso #E8E6E1 (texto, NUNCA #FFF) · --gris #9AA0A6 ·
ACENTO ÚNICO --signal #C1272D (rojo señal técnico, <6% de la UI: CTA principal, kickers, estados activos, links).
PROHIBIDO #000/#FFF puros, neón saturado, glow en texto, gradientes púrpura-azul genéricos.
border-radius: 0 en TODO. Profundidad por capas de fondo + filetes 1px (nunca sombras difusas).
Fondo oscuro en capas SIEMPRE (nada de bloques blancos).

## PASO 0 — MEDIA (public/media/, máx 4 imágenes, si faltan tipografía lleva el layout)
bodega.jpg 16:9 bodega de repuestos nocturna VACÍA e impecable: estanterías metálicas en penumbra,
una sola luz cálida rasante sobre la bancada de despacho, cajas rotuladas por código, sin personas ·
detalle.jpg 1:1 macro de disco de freno nuevo sobre pizarra oscura, luz rasante suave ·
pasillo.jpg 16:9 pasillo de bodega claro en penumbra, cajas alineadas y rotuladas, simetría industrial ·
kit.jpg 4:5 bodegón chiaroscuro de filtros y pastillas alineados sobre superficie grafito, sombra profunda.
PROHIBIDO: mecánico sonriendo con pulgar arriba, manos con llave inglesa, familia con auto, renders 3D
futuristas, repuestos flotando con brillo neón. Si una imagen no convence, se descarta
y el layout tipográfico resuelve.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero editorial 12cols: kicker uppercase tracking .18em signal ("CASA DE REPUESTOS · 10 DE JULIO · DESDE 2008"),
           H1 gigante hueso leading 0.92 tracking -0.03em, subhead 2 líneas gris, CTA sólido signal "Cotizar por VIN"
           + link subrayado animado a #precios "Ver precios referencia". bodega.jpg derecha 7/12 con caption
           técnica 11px ("Stock verificable · Código y compatibilidad a la vista"). Banda fina bajo hero:
           "Stock real · Compatibilidad por VIN · Despacho hoy RM · Retiro en 30 min".
#cifras    Count-up al entrar (IntersectionObserver, 1.2s): "+18 años en 10 de Julio", "+42.000 códigos en catálogo",
           "94% despacho en el día RM", "+1.200 talleres confían". Números tabulares serif/geométricos grandes,
           divisor 1px var(--filete), sin iconitos.
#compatibilidad  "¿Le hace a mi auto? Lo verificamos por VIN." Buscador editorial por VIN/patente + marca/modelo/año
           (UI solo, sin backend: input con placeholder "Ej: VF1... o patente · Marca · Modelo · Año" + botón
           signal). 3 columnas filete superior: 01 Envías VIN → 02 Confirmamos código exacto → 03 Retiras o
           despachamos. Micro-copy honesto: "Si no calza, te decimos antes de vender."
#precios   "Precios de referencia, sin sorpresas": tabla editorial 6 filas (NO cards SaaS) con precio DESDE en CLP
           tabulares con separador chileno (punto de miles): Pastillas freno delantero, Disco freno, Filtro aceite/aire,
           Kit embrague, Amortiguador, Bomba de agua. Columna "Original / Alternativo homologado" + nota honesta:
           "Precio final se confirma por VIN y stock del día. Con IVA. Sin letra chica." Fila destacada sutil con
           filete signal 2px a la izquierda (solo una).
#stock     Grilla 3×2 de categorías con foto detalle/pasillo como pieza técnica: Frenos · Suspensión/Dirección ·
           Motor/Distribución · Eléctrico/Encendido · Filtros/Lubricación · Carrocería/Espejos. Cada celda: nombre
           uppercase 12px, conteo "— 3.400 códigos", hover revela "Ver compatibilidad" (150ms).
#metodo    3 columnas filete 1px: 01 Cotizas por VIN (respuesta en <15 min hábil) → 02 Confirmamos stock y compatibilidad
           por foto/código → 03 Retiro en tienda o despacho con seguimiento. Sin iconos centrales: números grandes apagados
           48px var(--gris) opacity .35.
#voces     3 testimonios SIN foto, SIN estrellas: cita serif itálica grande, atribución "— Taller M. Rojas, La Florida ·
           cliente desde 2019". Rotación fade lenta pausable, sin carrusel automático agresivo.
#faq       6 acordeones honestos (280ms, uno abierto a la vez): ¿Cómo verifican que el repuesto le hace a mi auto?
           ¿Original o alternativo? ¿Qué garantía tiene? ¿Despachan hoy a regiones? ¿Puedo devolver si no calzó?
           ¿Tienen boleta/factura y pago a crédito taller? Respuestas cortas, sin jerga.
#reserva   Headline "¿Taller detenido? Hablemos ahora." + teléfono tabular gigante + CTA Ws + horarios + dirección con
           micro-mapa línea (no iframe pesado). Footer sobrio legal CL: razón social NOCTUA REPUESTOS SpA, RUT, SII, año,
           "10 de Julio 771, Santiago — Estacionamiento clientes".

## CONVERSIÓN SIEMPRE PRESENTE
Nav translúcido blur sutil con botón signal "Cotizar por VIN"; hide-down/show-up + compacta 24px al scroll.
Sticky CTA móvil discreto tras el hero ("Cotizar por VIN" con icono VIN minimal línea 16px).
Subrayados animados 200ms. Barra progreso scroll 2px signal.

## MOTION (CSS/transiciones exactas)
H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) · fade+rise 24px al entrar (once, IntersectionObserver) ·
hovers 150–250ms · acordeones 280ms con grid-template-rows · count-up 1.2s tabular-nums · TODO respeta
prefers-reduced-motion (si activo: nada se mueve, todo aparece).

## REGLAS DURAS (incumplir una = trabajo rechazado)
- Fondo oscuro en capas SIEMPRE (nada de bloques blancos). PROHIBIDO overlays negros planos sobre fotos.
- PROHIBIDO stock repuestos cliché: mecánico con pulgar arriba, manos engrasadas posando, familia con SUV,
  renders 3D genéricos, repuestos flotando con glow neón. Solo imágenes de public/media (nada externo).
- Sin badges de rating, sin marquee de logos de marcas, sin contadores falsos, sin testimonios con foto,
  sin planes "más elegido", sin iconitos de pistón como pieza central (máximo UNA línea de herramienta lineal
  como divisor sutil en TODO el sitio).
- Acento signal en MENOS del 6% de la UI. Radios 0. Botón sólido signal con texto claro.
- Todo texto y alt en español de Chile, alt="" descriptivos, contraste AA, focus-visible ring signal,
  ::selection con signal/texto claro, hero impecable a 360px, padding vertical ≥112px desktop / ≥72px móvil,
  max-width ~1200px. CLP con punto de miles chileno.
- Secciones e ids obligatorios: #cifras, #precios, #faq (anclas del nav deben funcionar).

## PROCESO OBLIGATORIO
1) Lee este PROMPT y todo src/. 2) Implementa sección por sección respetando ids/anclas. 3) Genera y verifica
las 4 imágenes en public/media/ (si alguna no cumple, tipografía resuelve). 4) npm run propuesta --
repuestos-noctua-oscuro, revisa en navegador y corrige (360px, 768px, 1280px). 5) npm run propuestas:build --
repuestos-noctua-oscuro hasta cero errores. No agregues dependencias; no toques package.json ni vite.config.ts
salvo crítica. 6) Auto-revisión contra REGLAS DURAS y arco (¿VIN, precio y despacho respondidos antes del footer?
¿Se siente casa de repuestos seria o landing genérica?). Itera hasta lo primero. 7) Resumen breve.

Calidad > velocidad: esta propuesta se usa para vender rediseños a casas de repuestos chilenas
(grupo de 15 sitios con esta estética oscura premium). Si queda "bien pero genérica", itera hasta que
un dueño de casa de repuestos la envidie para sí misma.