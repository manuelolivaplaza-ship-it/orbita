# SUPER-PROMPT v4 — CONCESIONARIA · "PATIO-CLARO" · anti-homogeneidad

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL: 92 capturas renderizadas del grupo Claro minimalista del rubro concesionaria
> (CRM maps A/B, dedup por dominio, mayor buyScore): **Vendo Autos (vendoautos.cl · 81 · Las
> Condes, 25% oscuro)** por consignación sin comisión, **Santiago Motors (santiagomotors.cl · 81)**,
> **PETERSEN (automotrizpetersen.cl · 81 · Vitacura)** stock multimarca editorial, **MrCar
> (mrcar.cl · 81)** ficha limpia, **Forcenter (forcenter.cl · 81)** concesionario oficial
> luminoso, **Cárbula (carbula.cl · 75)** marketplace con inspección, **KARS / MAO Autos (75)**
> boutique Las Condes. Internacional: CarMax + AutoTrader (catálogo luminoso).
> Objetivo de precio percibido: USD 14.000. Este prompt es v4 ANTI-HOMOGENEIDAD: el sitio debe
> parecer hecho por un estudio especializado en AUTOS, no una landing premium genérica.

## ROL

Eres director de arte + frontend senior nivel Awwwards ESPECIALIZADO en retail automotriz:
concesionarias, marketplaces de usados y servitecas. Conoces el oficio: stock que se filtra,
fichas que se comparan, crédito que se explica en pie + cuota, transferencia sin letra chica.

## CONTEXTO DEL PROYECTO

Trabajas en el monorepo Órbita (`C:\Users\manue\OneDrive\Desktop\órbita`).
1) Duplica `propuestas/_plantilla` → `propuestas/concesionaria-v4/` (archivos, no node_modules).
   package.json name "concesionaria-v4"; meta.json título "ÉTER — Concesionaria · Propuesta
   Órbita"; index.html lang="es".
2) Stack real: React 19 + TypeScript + Vite 6, CSS PURO en src/styles.css (variables, grid,
   clamp). Sin Tailwind. Única dependencia extra permitida: `motion`.
3) Comandos desde la raíz órbita: dev `npm run propuesta -- concesionaria-v4` (:3010) ·
   build `npm run propuestas:build -- concesionaria-v4`. El build debe pasar sin errores.
4) AISLAMIENTO (regla dura): PROHIBIDO leer, listar o copiar archivos de cualquier otra carpeta
   de propuestas (son de otros clientes y su CSS está prohibido como fuente). Se parte SOLO de
   `_plantilla` virgen. Si te "acuerdas" del CSS de otra propuesta, esa memoria no se usa.

## ADN DEL RUBRO (inviolable — esto te diferencia de cualquier otro rubro)

- **Gramática: G2 ficha-catálogo industrial + G8 stock-first.** El PRIMER viewport es el stock:
  barra de filtros (marca/modelo/año/precio/caja) encima del pliegue y 1 unidad destacada hero.
  La unidad de repetición es la FICHA DE UNIDAD (no el capítulo editorial, no la semana clínica).
  El precio vive EN LA CELDA de cada ficha y en la tabla de #credito-pie. NO es landing
  narrativa: es patio ordenado.
- **Tipografía: T6 — Oswald (display) + IBM Plex Sans (texto).** PROHIBIDO Inter, Geist, Space
  Grotesk, Poppins, Montserrat, Roboto, Open Sans, Lato. Escala H1: clamp(2.5rem,7vw,5rem);
  tracking +0.02em en rótulos; números de precio en tabular.
- **Secciones propias con ids del oficio (máx 3 compartibles con otros rubros: header, footer,
  reserva):**
  - `#stock` — filtros año/km/caja/combustible/precio + grilla de fichas con precio visible.
  - `#ficha-unidad` — panel que se abre: año, km, transmisión, combustible, sucursal, informe
    150 puntos. VIN solo si el cliente real lo entrega.
  - `#credito-pie` — simulación simple: precio → pie 20% referencial → cuota 48 meses → CAE
    informado antes de firmar. PROHIBIDO 3 tiers tipo SaaS.
  - `#sucursales-patio` — showroom + comunas de despacho con horarios reales.
  PROHIBIDO el arco `#inicio #cifras #catalogo #precios #metodo #galeria #faq #reserva` como
  secuencia. Cada id debe leerse como jerga de automotora.
- **Firma de motion de oficio:** las fichas NO hacen stagger 0.12s (prohibido); el precio/cuota
  del simulador cambia al mover filtros (120ms); la ficha de unidad abre como PANEL deslizante
  (260ms ease-out); hover de fila de stock 100ms. Nada de orbes ni cortinas cinematográficas:
  esto es un patio, no una gala.
- **Dirección de imagen (4 imágenes, public/media/, sin personas/caras/manos/logos/texto):**
  1. `patio.jpg` 16:9 — fila de autos en patio de grava clara, luz de mañana lateral, orden quirúrgico.
  2. `tres-cuartos.jpg` 4:5 — ¾ delantero de sedán gris, fondo papel hueso, sin patente legible.
  3. `tablero.jpg` 1:1 — detalle de tablero apagado y volante, luz rasante.
  4. `llaves.jpg` 4:5 — bodegón: llave tipo navaja + carpeta de documentos genérica + lápiz.
- **Paleta de 3 roles (variables en :root):** `--bg` papel #F8F5EF, `--ink` tinta #121416,
  `--accent` rojo automotriz desaturado #9E2B1E (<5% del área: CTA secundario, kickers, links),
  `--accent-2` azul patio #2F4A5C (puede vivir en etiquetas de ficha y filtros), `--state`
  ámbar #C2851A ("oportunidad / único dueño", etiqueta de filete 1px), `--linea` #E2DDD4.
  PROHIBIDO #000/#FFF puros, rojo neón #FF1A1A, degradados. Radios 0 en TODO.
  Regla v4: --accent-2 y --state SÍ aparecen en fichas y tablas del oficio (no es un hex solo
  en botones).
- **Ritmo vertical y densidad:** denso, de catálogo — filas compactas (padding 12-16px), grillas
  de 3-4 columnas desktop, whitespace SOLO en hero y ficha abierta. (Contraste con rubros
  editoriales que respiran en todo el recorrido.)

## BENCHMARK A IMITAR (disciplina, no copia)

Vendo Autos (consignación sin comisión) · Santiago Motors (stock real Las Condes) · PETERSEN /
MrCar (Vitacura, ficha limpia) · Forcenter (oficial Ford disciplinado) · Cárbula (inspección +
pago seguro) · KARS / MAO (boutique con visita con hora). Internacional: CarMax + AutoTrader
(el auto iluminado sobre blanco, aire, sin gritos). Imita la DISCIPLINA del dato limpio, no los pixels.

## MARCA DEMO (textos literales, no cambiar)

Nombre: ÉTER — Concesionaria
H1: "El auto que ves es el auto que retiras."
Subhead: "Usados y seminuevos verificados con inspección 150 puntos, precio publicado con IVA,
financiamiento explicado en pie + cuota real y transferencia en 5 días."
CTA principal: "Ver stock verificado" · secundario: "Tasar mi auto en 15 min"
Contacto: +56 2 2840 3315 · hola@eterconcesionaria.cl · Las Condes · Despacho RM
Horario: Lun–Vie 9:00–19:00 · Sáb 10:00–17:00 · Test drive con hora agendada
Micro-copy honesto: "Stock fotografiado ayer en showroom. Si un auto se vendió después de tu
reserva, te llamamos en 2 horas y te devolvemos la reserva."

## CONTRATO DE CONVERSIÓN (obligatorio, la ubicación la fija la gramática G2/G8)

- Precio publicado EN LA CELDA de cada ficha + tabla referencial en #credito-pie
  (Citycar 2019 $7.490.000 · SUV 2020 $13.900.000 · Camioneta 2021 $16.500.000 · Premium 2022
  $24.900.000 · Consignación tasación $0). Sin badge "más elegido".
- Teléfono visible en header desktop y sticky móvil.
- CTA persistente móvil: "Tasar" (sticky discreto tras el hero).
- Prueba social honesta sin foto de persona: "+6.200 autos entregados · 98% transferencias en
  5 días" como línea estática (sin count-up en fichas; el count-up de #stock-cifras es opcional
  y único).

## REGLAS DURAS (una violación = rechazado)

Sin personas/caras/manos/logos/texto en imagen. Sin antes/después fotográfico. Sin testimonios
con foto ni identidad inventada ("María G." prohibido). Sin badges de rating, marquee, planes
Free/Pro/Enterprise, terminal decorativo, orbes, grilla de puntos, sparkles, 3 cards simétricas
con icono. Radios 0. Español de Chile + alt descriptivos. Contraste AA, focus-visible,
::selection de marca, responsive 360px real, sin stock externo. prefers-reduced-motion → cero
animación. Tipografías: solo Oswald + IBM Plex Sans.

## PROCESO OBLIGATORIO (en este orden)

1. **DIRECCION_DE_ARTE.md primero** (en concesionaria-v4/): gramática G2+G8 y por qué (2 frases
   del oficio), pareja T6, los 3 roles de color con lógica, lista de ids del oficio, dónde vive
   precio/teléfono/CTA sticky/prueba social, firma de motion con ms, qué muestra cada imagen.
   PROHIBIDO crear App.tsx o styles.css antes de que este archivo exista.
2. Generar las 4 imágenes (media antes que maqueta).
3. Maquetar desde cero: CSS nuevo en src/styles.css partiendo solo del reset mínimo
   (focus-visible, skip-link, reduced-motion). Prohibido pegar bloques de otra propuesta.
4. `npm run propuestas:build -- concesionaria-v4` hasta cero errores.
5. Auto-QA: grep de ids — si aparece la secuencia v3 (inicio/cifras/catalogo/precios/metodo/
   galeria/faq), rehacer secciones. Verificar AA, 360px, alts.
6. Criterio de LISTO: apaga --accent (cámbialo a gris). Si el sitio SIGUE pareciendo una
   automotora (patio filtrable, ficha de unidad, simulador pie+cuota), pasa. Si parece una
   "landing premium genérica", falla aunque compile: vuelve al ADN.
7. Resumen breve: qué construiste, decisiones de la dirección de arte, estado del build.
