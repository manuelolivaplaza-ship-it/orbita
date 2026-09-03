# SUPER-PROMPT — CONCESIONARIA · GRUPO "OSCURO / PREMIUM MINIMAL (REAL)" (18 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para concesionarias y automotoras en Chile cuya estética real es **oscura premium**:
fondo noche/tinta, tipografía display clara de alto impacto, acento contenido, fotografía de
vehículos como protagonista nocturna. Es la estética de la automotora boutique y alta gama:
showroom nocturno, detalle cromado, el auto iluminado contra fondo mate. Referencias reales del
rubro oscuro: Autos Los Dominicos (autoslosdominicos.cl) — showroom oscuro boutique; RRC Motors
(rrcmotors.cl) y Autototal (autototal.cl) como benchmark local oscuro minimal; internacionalmente
Mercedes-Benz (mercedes-benz.com) en su versión oscura disciplinada y Porsche (porsche.com) — negro
mate, tipografía grande, lujo contenido sin neón ni gradientes chillones.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`.
2. Stack: React 19 + Vite 6 + TypeScript + **CSS puro** (sin Tailwind, sin UI kits).
3. Comandos obligatorios desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`:
   - `npm run propuesta` — levanta la propuesta en dev.
   - `npm run propuestas:build` — build de producción (debe compilar limpio antes de terminar).

## PASO 0 — IDENTIDAD
Lee `PROMPT.md` del proyecto (fuente de verdad: nombre de la automotora, headline literal,
paleta, tipografías, tono español de Chile). Mantén la identidad; solo micro-mejoras de redacción.

## REGLAS DURAS (incumplir una = trabajo rechazado)
- Tema OSCURO consistente: fondo tinta/noche según paleta del proyecto, texto hueso.
  Contraste AA obligatorio en todo texto.
- Acento (definido en PROMPT.md: dorado desaturado, rojo automotriz nocturno o plata metálica)
  en MENOS del 5% de la UI. PROHIBIDO el look "gamer/neón": sin glows saturados ni gradientes
  morado-cian.
- Cero fotos stock de vendedor con corbata entregando llaves o familia gritando con auto nuevo.
  Solo las imágenes editoriales ya presentes en `public/media` (nada externo). Si no hay,
  tipografía y layout llevan el diseño solos.
- Sin badges de rating, sin marquee, sin planes SaaS con cards tipo startup, sin testimonios
  con foto, sin iconos decorativos como pieza central.
- Todo texto y alt en español de Chile. Radios 0. Botón sólido claro sobre fondo tinta.
- Secciones e ids fijos del arco de conversión: **#precios**, **#cifras**, **#faq**
  (las anclas del nav deben funcionar siempre).

## DISEÑO — CRAFT NOCTURNO AUTOMOTRIZ PREMIUM
1. Tipografía: display condensada/bold definida en PROMPT.md, leading 0.9–0.95 y tracking
   negativo; kickers uppercase tracking amplio; números tabulares en precios (CLP/UF), año,
   kilometraje y stock.
2. Layout: grilla 12 columnas, whitespace generoso (py-28+), max-width consistente, divisores de
   1px en tono tenue, captions de 11–12px estilo ficha técnica nocturna (marca, modelo, año,
   cilindrada, tracción, historial).
3. Motion: clip-reveal del h1 por líneas, stagger ~0.12s, ease [0.22,1,0.36,1], hovers 150–250ms,
   nav hide-down/show-up, barra de progreso 2px, acordeones FAQ ~280ms. Respeta prefers-reduced-motion.
4. Responsive real: hero legible a 360px, sticky CTA móvil discreto tras el hero. Fotografía
   vehicular a sangre con overlay mínimo, precio en tipografía grande hueso sobre tinta.

## ARCO DE CONVERSIÓN (obligatorio)
- **#precios** — tabla editorial sobria sobre fondo tinta (no cards SaaS): vehículos premium y
  seminuevos verificados con precio CLP, pie y cuota referencial oscuro, financiamiento a medida,
  consignación premium con custodia y seguro incluido, detailing y garantía extendida aparte;
  sin letra chica oculta.
- **#cifras** — años operando, vehículos premium entregados, stock curado disponible, clientes
  recurrentes, comunas con entrega a domicilio, garantías honradas (números tabulares grandes en hueso).
- **#faq** — acordeón con dudas premium: qué incluye la inspección de alta gama y certificación,
  cómo funciona la consignación boutique con resguardo y seguro, financiamiento para vehículos
  premium y requisitos, cobertura de garantía y post-venta real, posibilidad de traer vehículo a pedido,
  plazos de importación o encargo, servicio de detailing y mantenciones.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md y todo src/.
2) Implementa sección por sección respetando ids/anclas.
3) `npm run propuestas:build` hasta compilar limpio. No agregues dependencias nuevas;
   no toques package.json ni vite.config.ts salvo necesidad crítica.
4) Termina con un resumen breve de qué mejoraste.

Calidad > velocidad: esta propuesta se usa para vender rediseños a automotoras premium chilenas
del grupo oscuro minimal (18 sitios con esta estética nocturna).
