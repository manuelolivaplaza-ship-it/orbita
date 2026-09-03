# SUPER-PROMPT v3 — FERRETERIA INDUSTRIAL · "ÉTER CLARO" (grupo claro minimalista / neutro · 61 leads A+B Maps)

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL analizado 2026: **ferreterías/barracas/distribuidoras industriales chilenas** — 73 capturas renderizadas (analisis-visual-ferreteria-industrial.json). Grupo dominante: claro minimalista neutro 61 sitios (83% del rubro). Estética real: blanco/hueso, grilla disciplinada, ficha técnica sobria. Referencias verificadas del grupo: FERRETERIA OTOÑAL (ferreteriaotonal.cl, Las Condes, score 81), Pernos Kim (ferreteria.cl, Providencia, 40 años en 10 de Julio), Ferretería J Garachena (jgarachena.cl), Ferrelectrica SPA (ferrelectrica.cl), Martínez Michelis (martinezmichelis.cl, válvulas/fittings minería). Benchmark retail: Sodimac Constructor, Easy, Chilemat, Würth (eshop.wurth.cl), Grainger.
> Objetivo: que un ferretero dueño de barraca en Puente Alto / Maipú / Quilicura vea este sitio y diga "así quiero que me coticen a las 07:30".

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio completo de una ferretería / barraca / distribuidora industrial chilena en modo CLARO editorial. Presupuesto percibido: USD 18.000. Debe sentirse como entrar a una maestranza ordenada a las 7am: luz norte, todo rotulado, nada sobra, el fierro y el perno hablan solos. Sobrio, confiable, sin gritos.

CONTEXTO DEL PROYECTO (dónde y cómo se construye)
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/eter-claro-ferreteria
   (copia ARCHIVOS, no node_modules). Esa será tu app. Si eter-claro-ferreteria ya existe, reutilízala (limpia src/ antes).
2) En tu copia: package.json → cambia "name" a "eter-claro-ferreteria". meta.json →
   { "title": "ÉTER — Ferretería industrial · Propuesta Órbita", "client": "ÉTER Ferretería" }.
   index.html → <html lang="es">, <title>ÉTER — Ferretería industrial · Fierro, pernos y materiales</title>.
3) STACK REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap: todo el
   diseño va en CSS propio bien organizado. ÚNICA dependencia extra PERMITIDA si la
   necesitas para animaciones: "motion" (npm i motion). Nada más.
4) Comandos (desde la raíz de órbita):
   - Desarrollo: npm run propuesta -- eter-claro-ferreteria   → http://localhost:3010
   - Build:      npm run propuestas:build -- eter-claro-ferreteria   (compila tsc + vite)
   La propuesta queda servida en /propuesta/eter-claro-ferreteria. El build debe pasar SIN errores.
5) IGNORA el resto de carpetas de propuestas/ (otros rubros): son de otros clientes. No las leas, no las modifiques. Solo creas/editas DENTRO de eter-claro-ferreteria/.
6) Las imágenes generadas van en TU app: propuestas/eter-claro-ferreteria/public/media/.

BENCHMARK A IMITAR (disciplina, no copia)
Grainger (blanco/gris industrial con rojo contenido) · Würth (suministro premium sobrio) · Sodimac Constructor (planilla ordenada, precio grande) · Ferreteria Otonal (catálogo limpio alto ticket) · Pernos Kim (neutro funcional de pernera histórica). Aire, grilla 12 cols, tipografía con autoridad de ficha técnica.

MARCA DEMO (textos literales, no cambiar)
Nombre: ÉTER — Ferretería Industrial (Santiago / RM, despacho a obra)
H1: "Fierro a medida, sin vueltas."
Subhead: "Cotiza en 2 minutos, retira en mesón o recibe en obra mañana. Stock real, precio con IVA y ficha técnica completa. Atendemos desde el maestro hasta la constructora."
CTA principal: "Cotizar por WhatsApp" · secundario: "Ver precios por familia"
Contacto: +56 2 2840 3315 · ventas@eter-ferreteria.cl · 10 de Julio 1234, Santiago (bodega) + retiro en Puente Alto
Horario: Lun–Vie 7:30–18:00 · Sáb 8:00–13:00 · Dom cerrado
Dolor real que ataca el copy (no inventar otro): "¿Cuántas mañanas perdiste esperando que te respondan el presupuesto del fierro? Acá cotizas con medida exacta, ves el stock y el precio con IVA + despacho antes de hablar con alguien."

PALETA (regla dura, como variables CSS en :root)
--papel #FCFCF9 · --superficie #FFFFFF · --tinta #14181C · --gris #6B7480 · --linea #E6E1D6 ·
--acero #4A5A6B (texto secundario frío) ·
ACENTO ÚNICO --naranja #E85D04 (naranja seguridad industrial desaturado, <5% de la UI). Usado SOLO en CTA sólido, precio destacado y micro-filete activo. border-radius: 0 en TODO.
Cero sombras difusas: separación por filetes 1px var(--linea) y whitespace. NUNCA #000/#FFF puros en texto (usa var(--tinta) y var(--papel)).

PASO 0 — MEDIA (public/media/, máx 4 imágenes; obreros con casco sonriendo / renders 3D neón = descartar y regenerar)
steel.jpg 16:9 bodega luminosa con perfiles de acero y mallas ordenadas, luz norte, sin personas, orden obsesivo
detail.jpg 1:1 macro pernos/tornillos/tarugos sobre cartón técnico gris, sombra suave, ficha visible
yard.jpg 16:9 patio de fierro con fierro doblado y zinc acopiado, mañana despejada, limpio sin barro
tools.jpg 4:5 herramientas eléctricas alineadas sobre mesón blanco, luz de día clínica
Si no hay media, tipografía y tabla llevan el diseño (no usar stock externo).

SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav deben funcionar)
#inicio  Hero: kicker uppercase tracking amplio "PERNERÍA · FIERRO · MADERA · GASFITERÍA", H1 gigante leading 0.92 tracking -0.03em, subhead 2 líneas max 62ch, CTA sólido naranja texto hueso + link "Ver precios" subrayado animado 200ms. steel.jpg derecha 5/12 con caption técnica 11px "Bodega Santiago · 1.200 m2 · stock rotulado". Grano sutil opacity .03.
#confianza Barra de confianza bajo hero (filete superior 1px): "40 años abasteciendo obra" · "4.5★ 1.434 opiniones (Pernos Kim benchmark)" · "Despacho 24h RM" · sin estrellas, solo tipografía tabular.
#cifras  Count-up al entrar (IntersectionObserver): "+40 años" "4.200 SKU en stock" "68% despachos en 24h RM" "12 comunas con reparto" "1.200 m2 bodega". Números tabulares grandes tinta, kicker acero 11px.
#catalogo Índice 06 familias editorial (NO cards de e-commerce genérico): 01 Fierro y perfiles 02 Pernos y fijaciones 03 Maderas y tableros 04 Cemento y áridos 05 Planchas y zinc 06 Herramientas y EPP. Fila con nombre grande + medida tipo + flecha. Hover expande 48px revelando "desde $/kg" y "corte/doblado incluido" (280ms).
#precios "Precios claros, sin letra chica": TABLA EDITORIAL SOBRIA (no cards SaaS) con scroll horizontal contenido. Columnas: Familia | Medida/Norma | $/tira 6mt o $/ciento o $/saco (CLP, separador chileno) | IVA | Despacho | Stock. 6 filas ejemplo: Perfil 40x40x2mm $/tira, Perno Ø8x40mm $/ciento, Terciado 15mm $/plancha, Cemento 25kg $/saco, Zinc 0.35mm $/plancha, Esmeril 4.5". Nota honesta: "Precio con IVA. Despacho por comuna y retiro en local. Corte y doblado de fierro incluido hasta 6mt. Sin cobros ocultos." Debe funcionar a 360px.
#garantias 3 columnas filete superior 1px: 01 Cotiza → 02 Confirmas → 03 Retiras/Recibes. Microcopy con plazos reales ("Cotización en 2 min por WhatsApp, respuesta humana 07:30–18:00").
#faq     6 acordeones honestos (280ms, uno abierto a la vez): ¿Cómo cotizo (web/WhatsApp/teléfono)? ¿Despacho a obra vs retiro en local (plazos RM/regiones, costo por comuna)? ¿Cortan y doblan fierro a medida? ¿Venden por mayor y menor? ¿Boleta/factura y crédito empresa 30 días? ¿Cambios por falla o medida errónea y qué llevar al mesón (RUT, OC)? Todo en español de Chile.
#reserva Headline corto "¿Necesitas fierro para mañana?" + teléfono tabular gigante + CTA "Cotizar por WhatsApp" + horarios y dirección bodega. Footer sobrio: RUT, dirección, horario obra, legal CL, año. Sin logos inventados.

CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Cotizar" naranja fijo; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Cotizar por WhatsApp"). Botón con hover 150ms (brillo sutil, no glow). Subrayados animados 200ms.

MOTION (CSS/transiciones exactas; o "motion" si instalada)
Barra progreso scroll 2px naranja · H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) · fade+rise 24px al entrar (once) · hovers 150–250ms · count-up 1.2s · acordeones 280ms · TODO respeta prefers-reduced-motion (si activo: nada se mueve).

REGLAS DURAS (incumplir una = rechazado)
PROHIBIDO: fotos de obreros con casco genérico sonriendo a cámara, herramientas 3D flotando, warehouse render neón, manos con guantes apuntando, badges de rating con estrellas, marquee, planes SaaS "más elegido", testimonios con foto, logos de marcas inventadas, iconos decorativos como pieza central, gradientes saturados, fondos oscuros u overlays oscuros, emojis, stock externo, inglés. Todo español de Chile, alt="" descriptivos con medida y material, contraste AA, focus-visible ring naranja, ::selection naranja/texto tinta, hero impecable a 360px, radios 0, padding vertical ≥112px desktop / ≥72px móvil, max-width ~1200px, tabla #precios con scroll y sin romper layout.
PROCESO OBLIGATORIO
1) Duplica _plantilla → eter-claro-ferreteria y ajusta name/meta/title. 2) Genera y verifica las 4 imágenes (o deja sin si no hay, no uses stock externo). 3) Maqueta componente por componente respetando ids. 4) npm run propuesta -- eter-claro-ferreteria y revisa en navegador; corrige a 360px. 5) npm run propuestas:build -- eter-claro-ferreteria hasta cero errores. 6) Auto-revisión contra REGLAS DURAS y arco (¿precio con IVA + despacho + stock + ficha respondidos antes del footer?). Itera lo genérico. 7) Resumen breve final.
```
