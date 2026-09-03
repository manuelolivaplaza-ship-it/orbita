# SUPER-PROMPT v3 — CONCESIONARIA · "NOCTUA-OSCURO" · grupo Oscuro / premium minimal (18 sitios) · 92 capturas

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL analizado 2026 — **92 capturas renderizadas de 121 registros Maps (solo crm-maps-AB.json) · 95 dominios únicos dedup por dominio conservando mayor buyScore · 4 grupos visuales validados**. Grupo objetivo: **Oscuro / premium minimal (real) — 18 sitios (19.6%) con 47–96% píxeles oscuros**. Estética nocturna boutique automotriz: fondo tinta/noche mate, auto iluminado como pieza de relojería, tipografía display hueso de alto impacto, showroom nocturno sin neón. Benchmark verificado de este segmento: **Autos Los Dominicos (autoslosdominicos.cl · 81 · Las Condes, 90% oscuro)** por showroom oscuro boutique, **Autototal (autototal.cl · 75 · Vitacura, 91% oscuro)** por seminuevos premium oscuro, **Automotora Carstar (carstar.cl · 73 · Vitacura, 96% oscuro)** por negro absoluto premium, **MTM Autos Car Store La Dehesa (mtmautos.cl · 75 · Lo Barnechea, 74% oscuro)** por verificado La Dehesa, **DriveUP Automotora (driveup.cl · 73 · Vitacura, 63% oscuro)** por boutique nocturna, **EXPOAUTOS (expoautos.cl · 77 · Lo Barnechea, 48% oscuro)** por usado impecable nocturno, **RRC Motors (rrcmotors.cl · 69 · Lo Barnechea, 76% oscuro)** y **Car Concept (carconcept.cl · 71 · Lo Barnechea, 83% oscuro)** por alta gama Lo Barnechea, **JYR Autos (jyrautos.cl · 71 · La Reina, 47% oscuro)** por consignación premium, **Automotriz Juan Ignacio Walker (juanignaciowalker.cl · 81 · Las Condes, 54% oscuro)** por tasación online instantánea oscura. Internacional: **Porsche (porsche.com) versión oscura** y **Mercedes-Benz (mercedes-benz.com) oscuro disciplinado** — negro mate, tipografía grande, lujo contenido sin gradientes morado-cian.
> Objetivo: que el comprador de premium / alta gama que odia la feria con globos y quiere custodia, detailing y papeles perfectos sienta "aquí es boutique nocturna: el auto está curado, la consignación es con seguro y el padrón llega sin drama" antes de scrollear.

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio completo de una concesionaria / boutique automotriz chilena oscura premium — alta gama, seminuevos curados y consignación con custodia. Presupuesto percibido: USD 16.000. Editorial nocturna de cava automotriz + showroom mate + confianza de padrón sin letra chica. No es feria luminosa con globos, no es marketplace genérico: es la boutique donde el auto premium se presenta como joya, la consignación es con seguro y el crédito premium se explica sin humo.

CONTEXTO DEL PROYECTO (dónde y cómo se construye)
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/concesionaria-noctua-oscuro
   (copia ARCHIVOS, no node_modules). Esa será tu app.
2) En tu copia: package.json → cambia "name" a "concesionaria-noctua-oscuro". meta.json →
   { "title": "NOCTUA — Concesionaria · Propuesta Órbita", "client": "NOCTUA", "brand": "NOCTUA", "sector": "concesionaria",
     "description": "Propuesta oscura premium minimal para concesionarias chilenas: showroom nocturno, stock curado y consignación con custodia y seguro." }.
   index.html → <html lang="es">, <title>NOCTUA — Concesionaria · Boutique premium · Usados curados</title>.
3) STACK REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap: todo el
   diseño va en CSS propio bien organizado. ÚNICA dependencia extra PERMITIDA si la
   necesitas para animaciones: "motion" (npm i motion). Nada más.
4) Comandos (desde la RAÍZ de órbita):
   - Desarrollo: npm run propuesta -- concesionaria-noctua-oscuro   → http://localhost:3010
   - Build:      npm run propuestas:build -- concesionaria-noctua-oscuro   (compila tsc + vite)
   La propuesta queda servida en /propuesta/concesionaria-noctua-oscuro. El build debe pasar SIN errores.
5) IGNORA el resto de carpetas de propuestas/ (otros sitios son de otros clientes). No las leas, no las modifiques. Solo creas/editas DENTRO de concesionaria-noctua-oscuro/.
6) Las imágenes generadas van en TU app: propuestas/concesionaria-noctua-oscuro/public/media/.

BENCHMARK A IMITAR (disciplina, no copia)
Autos Los Dominicos (90% oscuro boutique) · Autototal (91% premium) · Carstar (96% negro absoluto) · MTM Autos La Dehesa (74% verificado) · DriveUP (63% boutique) · EXPOAUTOS (48% impecable) · RRC/Car Concept (76–83% alta gama Lo Barnechea) · JYR Autos (consignación premium) · Juan Ignacio Walker (tasación instantánea oscura). Internacional: Porsche + Mercedes oscuro disciplinado (negro mate, tipografía grande, lujo contenido).

MARCA DEMO (textos literales, no cambiar)
Nombre: NOCTUA — Concesionaria
H1: "Alta gama curada. Papeles sin drama."
Subhead: "Seminuevos premium verificados con informe 150 puntos, detailing y garantía extendida. Consignación boutique con custodia, seguro y pago al instante. Financiamiento premium explicado en pie + cuota real — transferencia en 5 días."
CTA principal: "Ver stock curado" · secundario: "Consignar mi auto"
Contacto: +56 2 2840 3316 · hola@noctuaconcesionaria.cl · Lo Barnechea · Showroom con hora agendada
Horario: Lun–Vie 9:30–19:00 · Sáb 10:30–17:00 · Test drive y detailing con hora
Badges silenciosos (no hero): "Boutique La Dehesa · Custodia con seguro · Detailing incluido · Padrón 5 días"

DOLOR REAL QUE ATACAS (copy con filo chileno, no humo premium)
- "Te venden 'premium' y el auto viene sin detailing, sin informe y con neuma a media vida."
- "Consignas tu auto y queda a la intemperie, sin seguro y sin fecha de pago clara."
- "El crédito premium te lo explican en 'cuota mágica' y el CAE aparece en la letra chica."
- "Sin letra chica de boutique: custodia bajo techo, seguro mientras se vende y pago al instante cuando se cierra — o te avisamos antes."
- "Si algo no calza en el informe 150 puntos, te lo mostramos antes de que firmes — no después de que pagaste."
- Micro-copy honesto: "Cada auto con fotos nocturnas sin filtro + VIN verificable. Si se vendió después de tu visita, te llamamos en 2 horas — no te hacemos venir a ver aire."

PALETA (regla dura — la oscuridad tiene capas, variables CSS en :root — medida de 18 capturas: 47–96% oscuro)
--fondo #0E1113 (negro tinta profunda) · --superficie #191C1E · --superficie-alta #24282B · --filete #2E3330 · --hueso #E9E4DE (texto, NUNCA #FFF) · --gris #9AA0A6 ·
ACENTO ÚNICO --champagne #C8A96A (<5% de la UI: CTA sólido, kickers, estados activos, links; tracking amplio uppercase). PROHIBIDO #000/#FFF puros, neón saturado, glow en texto, gradientes púrpura-azul genéricos, rojo neón brillante. border-radius: 0 en TODO. Profundidad por capas de fondo + filetes 1px (nunca sombras difusas). Fondo oscuro en capas SIEMPRE (nada de bloques blancos).

PASO 0 — MEDIA (public/media/, máx 4 imágenes; showroom luminoso blanco/familia con SUV y globos/vendedor con corbata entregando llaves/mockup 3D neón inglés = descartar y regenerar)
cava.jpg 16:9 showroom nocturno VACÍO: 2 autos premium alineados sobre piso oscuro pulido, luz rasante cálida oculta, muro tinta mate — cinematográfico sereno, reflejo suave, sin personas ·
still.jpg 4:5 bodegón chiaroscuro: llave premium + padrón oscuro sin marca + lápiz metálico sobre piedra oscura ·
texture.jpg 1:1 macro cuero perforado / aro diamantado / cromado con luz rasante cálida ·
pasillo.jpg 16:9 pasillo de showroom nocturno simétrico con focos cálidos empotrados, sereno, nada galpón ruidoso.

SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio  Hero pantalla completa: kicker champagne uppercase ("CONCESIONARIA PREMIUM · LO BARNECHEA · STOCK CURADO"), H1 gigante hueso leading 0.95 tracking negativo, subhead gris, CTA sólido champagne texto fondo + link subrayado animado a #precios. cava.jpg lateral 7/12 integrado por degradado hacia --fondo (NUNCA overlay negro plano). Grano fílmico sutilísimo opacity .04 sobre toda la página.
#filosofia  ★ LA SECCIÓN QUE DIFERENCIA ★ editorial corto: "Vender premium es custodiar." Copy base: "No vendemos lo que no custodiamos. Cada auto duerme bajo techo, asegurado y con detailing antes de mostrarse. El precio que ves es el publicado con IVA. Si un auto se vendió después de tu reserva, te llamamos en 2 horas — no te hacemos venir a ver aire. Cada entrega va con informe 150 puntos y padrón en 5 días. Esa es la diferencia entre una feria y tu boutique." Sin testimonios públicos JAMÁS: la discreción del cliente premium es el argumento.
#cifras  Count-up tabulares al entrar (IntersectionObserver): "+14 años", "+4.800 premium entregados", "99% custodias sin detalle", "1.900 clientes recurrentes". Números hueso serif grandes, caption gris 11px. Nota: "Sin 'desde' engañoso. El precio publicado es el facturado."
#catalogo  Índice numerado 01–06 lista editorial con HOVER FLIP-CARD (280ms): Premium alemán · SUV alta gama · Deportivo y coupé · Eléctrico / híbrido · Consignación boutique · Detailing y garantía extendida. La fila revela panel var(--superficie) con "desde $XX.XXX.XXX CLP · pie + cuota real". En móvil tap = acordeón.
#precios  "Valores curados, sin sorpresas": tabla sobria 5 filas precio CLP tabulares IVA incl. + columna Modelo/año/km + columna Pie/Cuota premium (Premium sedán 2021 $22.900.000 · SUV premium 2022 $32.500.000 · Deportivo 2020 $28.900.000 · Eléctrico 2023 $34.900.000 · Consignación custodia $0 + seguro incluido) + nota honesta: "Pie 20–30% referencial. Cuota a 48 meses, CAE informado antes de firmar. Transferencia 5 días padrón a tu nombre. Detailing y revisión 150 puntos incluidos. El total se confirma antes de pagar. Factura el mismo día." Columna lateral con ventana test drive por comuna (RM 10:00–18:00 con hora).
#metodo  3 columnas filetes verticales 1px: 01 Tasas online 15 min (fotos + patente + VIN) → 02 Visitas boutique con informe en mano (test drive con hora) → 03 Firmas y retiras con padrón (o consignas con custodia asegurada y pago al instante). Números grandes champagne apagado.
#galeria  still.jpg + texture.jpg como OBRAS DE GALERÍA: filete 1px, caption técnica 11px ("Custodia bajo techo · padrón 5 días · VIN verificable"), revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.
#faq  6 acordeones honestos (280ms): ¿Cómo tasan mi auto y cuánto demora la tasación online real? ¿Qué cubre la custodia con seguro mientras mi auto está consignado? ¿El precio publicado incluye transferencia, detailing y garantía extendida? ¿Qué pasa si el crédito premium es rechazado y cuánto es el pie real? ¿En cuántos días tengo el padrón a mi nombre y qué informe me entregan? ¿Puedo traer mi auto a pedido o encargo premium y cuánto demora? Respuestas con teléfono visible y compromiso de aviso previo.
#reserva  Sobre var(--superficie): headline corto "Que tu próximo auto no sea una lotería.", teléfono hueso gigante tabular, botón champagne, horarios, dirección showroom. Micro-línea: "Responden curadores, no bots. Si no contestamos, devolvemos el llamado el mismo día." Footer sobrio: marca pequeña, dirección, legal Chile, año.

CONVERSIÓN SIEMPRE PRESENTE
Nav translúcido blur sutil con botón champagne "Ver stock" ; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero. Cursor personalizado sutil (punto champagne 6px con lerp, se agranda sobre links; desactivado en touch/reduced-motion).

MOTION (CSS/transiciones exactas)
Barra progreso scroll 2px champagne · H1 clip-reveal líneas stagger .12s ease(0.22,1,0.36,1) · galería cortina clip-path · count-up 1.2s · flip-cards 280ms · hovers 150–250ms · TODO respeta prefers-reduced-motion (si activo: nada se mueve).

REGLAS DURAS (incumplir una = rechazado)
PROHIBIDO: personas/caras/manos, familias con SUV y globos, vendedor entregando llaves sonriendo, antes/después, testimonios con foto o estrellas, marquee de logos, contadores falsos, planes SaaS "más elegido", iconitos centrales (auto/volante), glow/neón, #000/#FFF puros, overlays negros planos sobre foto, emojis, stock externo, inglés. Fondo oscuro en capas SIEMPRE (nada de bloques blancos). Todo español de Chile, alt="" descriptivos, contraste AA, focus-visible ring champagne, ::selection champagne/texto oscuro, responsive real a 360px, radios 0, padding vertical ≥112px desktop / ≥72px móvil, max-width ~1200px.

PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/. 4) npm run propuesta -- concesionaria-noctua-oscuro, revisa en navegador y corrige. 5) npm run propuestas:build -- concesionaria-noctua-oscuro hasta cero errores. No agregues dependencias nuevas; no toques package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS y arco de conversión (¿precio curado, custodia/transferencia y cómo-consignar respondidos antes del footer? ¿Se siente boutique nocturna o feria oscura genérica?). Itera hasta lo primero. Calidad > velocidad. 7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a concesionarias chilenas (grupo de 18 oscuros premium: 47–96% dark, 92 capturas validadas). Si queda "bien pero feria oscura", itera hasta que un comprador premium la envidie para su boutique. Benchmark chileno oscuro: tan curado como comprar en Autos Los Dominicos con custodia, pero con la precisión de un showroom Lo Barnechea que no te deja botado con el padrón.
```
