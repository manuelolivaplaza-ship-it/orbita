# SUPER-PROMPT v3 — DISTRIBUIDORA · "ÉTER-CLARO" · grupo Claro minimalista / neutro (47 + 4 satélites) — 51 sitios

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code...).
> Benchmark REAL analizado 2026 — **59 capturas renderizadas de 109 leads A+B Maps (solo crm-maps-AB.json)** · 5 grupos visuales validados. Cobertura 54.1% (59/109). Grupo objetivo: **Claro minimalista / neutro (47) + satélites Azul/cian (4)** — estética dominante distribuidora chilena: papel luminoso, grilla disciplinada, tipografía sobria, el pedido como protagonista. Benchmark verificado de este segmento: **Mundo Rodri (mundorodri.cl · 79 · Providencia)** por orden editorial, **Santorini Foods (santorinifoods.cl · 75 · Las Condes)** por neutro 15% oscuro, **Distribuidora Lira (1.956 reseñas · La Florida)**, **Kayma (1.043 reseñas · Santiago)**, **Rumbo Al Sur**, **El Comienzo (huevos)**; satélites azul: **PROMERCO (promerco.cl)**, **Santa Beatriz**, **Supermercado Diez**. Internacional: **Sysco (sysco.com)** por foodservice claro + **Webstaurant (webstaurantstore.com)** por catálogo mayorista limpio.
> Objetivo: que el dueño de almacén/minimarket que pide por WhatsApp a las 22:00 y no sabe si llega mañana sienta "aquí pido y llega factura y todo pesado sin perseguir a nadie" antes de scrollear.

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio completo de una distribuidora mayorista chilena premium pero operativa. Presupuesto percibido: USD 14.000. Editorial calma + rigor logístico + cercanía sin cliché retail. No es supermercado, no es Bodega barata: es abastecimiento donde el almacenero no queda sin stock el fin de semana.

CONTEXTO DEL PROYECTO (dónde y cómo se construye)
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/distribuidora-eter-claro
   (copia ARCHIVOS, no node_modules). Esa será tu app.
2) En tu copia: package.json → cambia "name" a "distribuidora-eter-claro". meta.json →
   { "title": "ÉTER — Distribuidora Mayorista · Propuesta Órbita", "client": "ÉTER", "brand": "ÉTER", "sector": "distribuidora",
     "description": "Propuesta clara luminosa para distribuidoras mayoristas chilenas: catálogo pedido, stock y despacho." }.
   index.html → <html lang="es">, <title>ÉTER — Distribuidora Mayorista · Abastecimiento sin WhatsApp eterno</title>.
3) STACK REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
   ÚNICA dependencia extra PERMITIDA si la necesitas para animaciones: "motion" (npm i motion). Nada más.
4) Comandos (desde la RAÍZ de órbita):
   - Desarrollo: npm run propuesta -- distribuidora-eter-claro   → http://localhost:3010
   - Build:      npm run propuestas:build -- distribuidora-eter-claro   (compila tsc + vite)
   La propuesta queda servida en /propuesta/distribuidora-eter-claro. El build debe pasar SIN errores.
5) IGNORA el resto de carpetas de propuestas/ (otros sitios son de otros clientes). Solo trabajas DENTRO de distribuidora-eter-claro/.
6) Las imágenes generadas van en TU app: propuestas/distribuidora-eter-claro/public/media/.

BENCHMARK A IMITAR (disciplina, no copia)
Mundo Rodri (orden editorial, blancos generosos) · Santorini Foods (neutro sereno) · Distribuidora Lira (grilla disciplinada) · Kayma (minimalismo extremo) · Rumbo Al Sur (cercanía abasto) + matiz azul contenido de PROMERCO/Santa Beatriz. Internacional: Sysco (confianza foodservice) + Webstaurant (aire, catálogo sobre blanco).

MARCA DEMO (textos literales, no cambiar)
Nombre: ÉTER — Distribuidora Mayorista
H1: "Abastecimiento sin WhatsApp eterno."
Subhead: "Catálogo con precio por caja y unidad, stock en vivo y despacho programado. Pides hoy, facturado hoy — sin perseguir al vendedor."
CTA principal: "Ver catálogo y precios" · secundario: "Cotizar por WhatsApp"
Contacto: +56 2 2840 3315 · hola@eterdistribuidora.cl · La Florida / Santiago — despacho RM y regiones
Horario: Lun–Sáb 6:00–18:00 · Pedidos hasta 16:00 despacho día siguiente
Badges silenciosos (no hero): "Factura electrónica · SII · Despacho programado · Mínimo $80.000"

DOLOR REAL QUE ATACAS (copy con filo chileno, no genérico retail)
- "Pides por WhatsApp y te responden 'te confirmo' 8 horas después."
- "El precio es 'a consultar' y cambia según quién conteste."
- "Te llega la mitad del pedido y la otra mitad 'la próxima semana' sin avisar."
- "Sin quiebre de stock avisado: te enteras cuando el cliente te pide y no tienes."
- "Factura a mano, guía despachada tarde y el contador reclamando."
- Micro-copy honesto: "Stock en vivo. Si no hay, lo ves antes de pedir — no después."

PALETA (regla dura, como variables CSS en :root — medida de 59 capturas: 47 neutros claros 0-39% oscuro)
--papel #F7F5EF · --papel-2 #EFE9E0 · --tinta #1A1E1B · --gris #8A8580 · --linea #E0D9CC ·
ACENTO ÚNICO --oxido #9E3A1B (óxido terracota profundo, <5% de la UI: CTA secundario, kickers, links, estados activos; CTA principal es sólido tinta #1A1E1B sobre papel). PROHIBIDO rojo neón (#FF0000), verde lima, dorados brillantes, degradados. border-radius: 0 en TODO. Cero sombras difusas: separación por filetes 1px var(--linea) y whitespace. Fondo claro SIEMPRE. NUNCA #000/#FFF puros.

PASO 0 — MEDIA (public/media/, máx 4 imágenes; bodegas saturadas con gente cargando cajas genérica/manos con clipboard neón = descartar y regenerar)
bodega.jpg 16:9 bodega luminosa VACÍA, pasillo con pallets y cajas alineadas rotuladas, luz norte, sin personas, orden absoluto ·
still.jpg 4:5 bodegón sobre papel hueso: caja abierta con productos alineados (aceite, arroz, conservas), albarán y lápiz, luz natural ·
detail.jpg 1:1 macro cartón corrugado / textura caja con luz rasante suave ·
camion.jpg 16:9 camión de reparto blanco estacionado con portón bodega al fondo, luz mañana, sin gente, cinematográfico sereno.
Si falta una, tipografía y layout llevan el diseño solos. Nada externo a public/media.

SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio  Hero: kicker óxido uppercase tracking amplio ("DISTRIBUIDORA MAYORISTA · LA FLORIDA · DESDE 2008"), H1 gigante leading 0.92 tracking negativo, subhead 2 líneas, CTA sólido tinta "Ver catálogo y precios" + link subrayado animado óxido a #precios. bodega.jpg derecha 7/12, caption técnica 11px ("Bodega ÉTER — stock rotulado, picking diario 06:00"). Banda fina bajo hero: "Stock en vivo · Precio por caja y unidad · Despacho programado · Factura al tiro". Puntos flotantes sutiles opacity .10.
#cifras  Count-up al entrar (IntersectionObserver): "+17 años abasteciendo", "+3.200 SKUs", "98% pedidos completos", "+1.800 almacenes confían". Números tabulares serif grandes. Nota: "Sin quiebre fantasma. Si no hay stock, lo ves antes de pagar."
#catalogo Índice numerado 01–06 editorial (NO cards): Abarrotes · Lácteos y refrigerados · Bebestibles · Aseo y hogar · Confites y snacks · Harinas y pastas. Hover/tap expande 64px revelando "SKUs / marca líder / desde $X por caja" (280ms).
#precios "Precios claros, por caja y por unidad": tabla editorial 6 filas precio DESDE en CLP tabulares (Aceite 900ml caja 12, Arroz 1kg saco 10, Bebida 1.5L pack, Detergente 3kg caja, Harina 1kg saco, Conserva atún caja) + nota honesta al margen: "IVA incluido. Mínimo $80.000. Despacho $3.990 RM. El precio final se confirma al facturar stock del día. Nunca despachamos sin tu OK." Columna "Por caja / Por unidad".
#evidencia (alias de #cifras — cumple regla dura si usas #cifras)
#metodo  3 columnas filete superior 1px: 01 Cotizas (catálogo o WhatsApp con lista) → 02 Confirmamos stock y total por escrito en <30 min hábil → 03 Picking, factura electrónica y despacho programado. Números grandes óxido apagado. Sin iconitos centrales.
#galeria  still.jpg + detail.jpg como OBRAS DE GALERÍA: filete 1px, caption técnica 11px ("Picking por caja · guía y factura electrónica"), revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.
#faq  6 acordeones honestos (280ms): ¿Cuál es el pedido mínimo y costo despacho? ¿Precio por caja o unidad? ¿Cómo veo stock en vivo? ¿Despachan a regiones y en cuánto? ¿Puedo pedir mixto y qué pasa si algo no hay? ¿Boleta/factura y pago (transferencia, crédito almacenero)? Respuestas con teléfono visible.
#reserva  Headline corto "Pide hoy. Vende mañana." + teléfono tabular gigante + CTA tinta + horarios + dirección. Micro-línea: "Responde bodega, no bot. Si no contestamos, devolvemos el llamado en 30 min hábil." Footer sobrio legal CL (Razón social ÉTER SpA, SII, año).

CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Ver catálogo" sólido tinta fijo; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Cotizar pedido"). Subrayados animados 200ms. Teléfono fijo visible en header y footer.

MOTION (CSS/transiciones exactas; o "motion" si instalada)
Barra progreso scroll 2px óxido · H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) · fade+rise 24px al entrar (once) · hovers 150–250ms · acordeones/count-up 280ms/1.2s · TODO respeta prefers-reduced-motion.

REGLAS DURAS (incumplir una = rechazado)
- Fondo claro siempre (papel según paleta). PROHIBIDO secciones negras/noche u overlays oscuros.
- PROHIBIDO stock distribuidora cliché: gente cargando cajas genérica sonriendo, manos con tablet neón, carritos de supermercado llenos, familia con bolsas. Solo imágenes ya presentes en public/media (nada externo).
- PROHIBIDO promesas de "más barato garantizado", badges de rating con estrellas, marquee de logos, contadores falsos, planes "más elegido", iconitos de camión como pieza central.
- Accent óxido <5% de la UI. Radios 0. Botón sólido tinta sobre fondo claro.
- Todo texto y alt en español de Chile, alt descriptivos, contraste AA, focus-visible ring óxido, ::selection óxido/texto claro, hero impecable a 360px, padding vertical ≥112px desktop / ≥72px móvil, max-width ~1200px.
- Secciones e ids obligatorios: #inicio #cifras #precios #faq #reserva (anclas del nav deben funcionar).

PROCESO OBLIGATORIO
1) Duplica _plantilla → distribuidora-eter-claro y ajusta name/meta/title. 2) Genera y verifica las 4 imágenes en public/media/. 3) Maqueta sección por sección respetando ids/anclas. 4) npm run propuesta -- distribuidora-eter-claro, revisa en navegador. 5) npm run propuestas:build -- distribuidora-eter-claro hasta cero errores. 6) Auto-revisión contra REGLAS DURAS y arco (¿precio por caja/unidad, stock y despacho respondidos antes del footer? ¿Se siente abastecimiento serio o landing genérica?). Itera hasta lo primero. 7) Resumen breve.

Calidad > velocidad: esta propuesta se usa para vender rediseños a distribuidoras chilenas (grupo de 47 neutros + 4 satélites azul). Si queda "bien pero genérica", itera hasta que un dueño de distribuidora la envidie para sí mismo.
```
