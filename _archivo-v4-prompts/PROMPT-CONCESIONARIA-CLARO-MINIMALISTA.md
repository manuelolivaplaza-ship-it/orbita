# SUPER-PROMPT — CONCESIONARIA · GRUPO "CLARO MINIMALISTA / NEUTRO" (72 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para concesionarias y automotoras en Chile cuya estética real es **clara, limpia y
luminosa**: fondo blanco/hueso dominante, tipografía display moderna, grilla disciplinada, acento
contenido, fotografía de stock como protagonista. Es la estética de la automotora que vende stock,
confianza y financiamiento: el vehículo como protagonista, cero fuegos artificiales. Referencias
reales verificadas del rubro: Maritano Ebensperger (mye.cl) — concesionario multi-marca premium
de Chillán con presencia editorial clara y stock real; Kovacs (kovacs.cl) — concesionario oficial
claro y sobrio; internacionalmente CarMax (carmax.com) y AutoTrader (autotrader.com) como el
canónico del marketplace claro: aire, tipografía sobria, el auto iluminado sobre papel.

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
- Fondo claro siempre (blanco/papel según paleta del proyecto). PROHIBIDO secciones negras/noche
  u overlays oscuros.
- Accent (definido en PROMPT.md: rojo automotriz desaturado, azul confianza o dorado premium) en MENOS del 5% de la UI.
- Cero fotos stock de "vendedor entregando llaves sonriendo", apretón de manos frente a auto,
  familia posando con SUV, o renders 3D genéricos de concesionario futurista. Solo las imágenes
  editoriales ya presentes en `public/media` (nada externo). Si no hay, tipografía y layout
  llevan el diseño solos.
- Sin logos de marcas inventados, sin badges de "más vendido", sin marquee, sin cards de precio
  tipo startup con sombras gigantes, sin testimonios con foto, sin iconos decorativos como pieza
  central, sin contadores animados falsos.
- Todo texto y alt en español de Chile. Radios 0. Botón sólido ink sobre fondo claro.
- Secciones e ids fijos del arco de conversión: **#precios**, **#cifras**, **#faq**
  (las anclas del nav deben funcionar siempre).

## DISEÑO — CRAFT EDITORIAL AUTOMOTRIZ CLARO
1. Tipografía: display sans geométrica definida en PROMPT.md, leading 0.9–0.95 y tracking
   negativo; kickers uppercase tracking amplio; números tabulares en precios (CLP/UF), kilometraje,
   año y stock disponible.
2. Layout: grilla 12 columnas, whitespace generoso (py-28+), max-width consistente, divisores
   de 1px, captions de 11–12px estilo ficha técnica (marca, modelo, año, kilometraje, transmisión,
   combustible, dueño anterior).
3. Motion: clip-reveal del h1 por líneas, stagger ~0.12s, ease [0.22,1,0.36,1], hovers 150–250ms,
   nav hide-down/show-up, barra de progreso 2px, acordeones FAQ ~280ms. Respeta prefers-reduced-motion.
4. Responsive real: hero legible a 360px, sticky CTA móvil discreto tras el hero. Cards de vehículos
   con foto 16:9, precio grande y CTA "Ver detalle" sin estridencia.

## ARCO DE CONVERSIÓN (obligatorio)
- **#precios** — tabla editorial sobria (no cards SaaS) con precios claros: vehículos desde/hasta por
  segmento (citycar, SUV, camioneta, premium), pie mínimo y cuota referencial, financiamiento bancario
  vs crédito automotriz, tasación online y valor de retoma, consignación sin comisión explícita;
  sin letra chica oculta. Valores en CLP con separador de miles chileno.
- **#cifras** — años operando, vehículos vendidos/entregados, stock disponible hoy, clientes financiados,
  comunas con despacho, talleres aliados / garantías extendidas (números tabulares grandes).
- **#faq** — acordeón con dudas típicas: cómo funciona la tasación online y cuánto demora, qué
  documentos necesito para comprar a crédito, si reciben mi auto en parte de pago y cómo se valora,
  qué cubre la garantía de usados y por cuánto tiempo, si hacen revisión pre-compra de 150 puntos,
  cómo agendar test drive, plazos de entrega y transferencia, qué pasa si el crédito es rechazado.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md y todo src/.
2) Implementa sección por sección respetando ids/anclas.
3) `npm run propuestas:build` hasta compilar limpio. No agregues dependencias nuevas;
   no toques package.json ni vite.config.ts salvo necesidad crítica.
4) Termina con un resumen breve de qué mejoraste.

Calidad > velocidad: esta propuesta se usa para vender rediseños a automotoras y concesionarias
chilenas del grupo claro minimalista (72 sitios con esta estética).
