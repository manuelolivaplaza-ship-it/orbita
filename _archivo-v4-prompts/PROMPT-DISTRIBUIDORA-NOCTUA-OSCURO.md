# SUPER-PROMPT v3 — DISTRIBUIDORA · "NOCTUA-OSCURO" · grupo Oscuro / premium minimal (real) (8 sitios)

> Pega este bloque completo en la IA que construye el sitio.
> Benchmark REAL analizado 2026 — **59 capturas renderizadas de 109 leads A+B Maps** · 5 grupos. Grupo objetivo: **Oscuro / premium minimal (real) 8 sitios** — 46% a 96% píxeles oscuros. Estética nocturna de bodega premium: fondo tinta petróleo profundo, tipografía como etiqueta de licor, el pallets presentado como pieza de galería iluminada. Benchmark verificado: **Importadora Somagel (somagel.cl · 81 · Providencia · 46% oscuro)** por contención, **Distribuidora Catan Maipú (96% oscuro)**, **Don Mateo San Bernardo (96%)**, **La Mundial (confiterialamundial.cl · 85%)**, **Tilicura (95%)**, **Central Vinos y Licores (46%)**, **Distribuidora JA (62%)**, **Líder**. Internacional: **CWS dark editorial** + **Restaurant Depot oscuro** (noche cálida en capas) + **Sysco premium noche**.
> Objetivo: que el dueño de botillería/minimarket que compra licores/confites premium y quiere reposición nocturna sienta "aquí me abastecen de noche y sin quiebre caro" antes de scrollear.

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio completo de una distribuidora mayorista chilena nocturna premium. Presupuesto percibido: USD 14.000. Editorial noche cálida + rigor logístico + discreción sin cliché bodega sucia. No es bodegón barato: es abastecimiento donde el botillero no queda sin stock premium el fin de semana.

CONTEXTO DEL PROYECTO
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/distribuidora-noctua-oscuro
   (copia ARCHIVOS, no node_modules).
2) En tu copia: package.json → "name": "distribuidora-noctua-oscuro". meta.json →
   { "title": "NOCTUA — Distribuidora Nocturna · Propuesta Órbita", "client": "NOCTUA", "brand": "NOCTUA", "sector": "distribuidora",
     "description": "Propuesta oscura premium para distribuidoras chilenas: despacho nocturno, licores y abarrotes premium." }.
   index.html → <html lang="es">, <title>NOCTUA — Distribuidora · Abastecimiento nocturno premium</title>.
3) STACK REAL: React 19 + TypeScript + Vite 6, estilos en src/styles.css con CSS puro. NO Tailwind.
   ÚNICA dependencia extra PERMITIDA: "motion".
4) Comandos (desde la RAÍZ de órbita):
   - Desarrollo: npm run propuesta -- distribuidora-noctua-oscuro → http://localhost:3010
   - Build:      npm run propuestas:build -- distribuidora-noctua-oscuro (debe compilar limpio)
   La propuesta queda en /propuesta/distribuidora-noctua-oscuro.
5) IGNORA el resto de carpetas de propuestas/. Solo trabajas DENTRO de distribuidora-noctua-oscuro/.
6) Las imágenes generadas van en TU app: propuestas/distribuidora-noctua-oscuro/public/media/.

BENCHMARK A IMITAR
Somagel (contención oscura 46%) · Catan Maipú 96% (noche absoluta) · Don Mateo 96% · La Mundial 85% · Tilicura 95% · Central Vinos. Internacional: CWS noche cálida en capas.

MARCA DEMO (textos literales, no cambiar)
Nombre: NOCTUA — Distribuidora Nocturna
H1: "La bodega no duerme."
Subhead: "Licores, confites y abarrotes premium con reposición nocturna. Pides hasta las 18:00, despachamos de noche — tu sala amanece llena."
CTA principal: "Ver catálogo nocturno" · secundario: "Cotizar botillería"
Contacto: +56 2 2840 3315 · hola@noctuadistribuidora.cl · Maipú / Santiago — despacho nocturno RM
Horario: Lun–Sáb 18:00–04:00 despacho nocturno · Pedidos hasta 18:00
Badges silenciosos (no hero): "Despacho nocturno · Factura electrónica · Frío garantizado"

DOLOR REAL QUE ATACAS
- "Te quedas sin stock premium el sábado y el proveedor responde el lunes."
- "El precio de licor cambia sin aviso y la factura llega distinta."
- "Te despachan de día y tu sala está llena de clientes."
- "Sin frío garantizado: llega el lácteo tibio."
- Micro-copy honesto: "Si no hay stock, lo ves antes de pagar. De noche también."

PALETA (regla dura — la oscuridad tiene capas, variables CSS en :root)
--fondo #131412 (negro cálido petróleo profundo) · --superficie #1D1E1B · --superficie-alta #252621 ·
--filete #2E3330 · --hueso #E8E4DE (texto, NUNCA #FFF) · --gris-calido #9AA3A0 ·
ACENTO ÚNICO --ambar #C2851A (<5% de la UI: CTA sólido, kickers, estados activos, links). PROHIBIDO #000/#FFF puros, neón (#39FF14), glow en texto, gradientes púrpura-azul genéricos, dorado brillante #FFD700. border-radius: 0 en TODO. Profundidad por capas + filetes 1px (nunca sombras difusas).

PASO 0 — MEDIA (public/media/, máx 4 imágenes; caras/manos/bodegas sucias con gente = descartar)
hero.jpg 16:9 bodega nocturna VACÍA, pallets con cajas alineadas iluminadas luz cálida rasante, penumbra elegante, sin personas ·
bodegon.jpg 4:5 bodegón chiaroscuro: botella, caja y albarán sobre piedra oscura ·
texture.jpg 1:1 macro cartón oscuro texturado con luz rasante cálida ·
corridor.jpg 16:9 pasillo bodega nocturno simétrico con focos empotrados cálidos, cinematográfico sereno, sin gente.
Si falta una, tipografía y layout llevan el diseño solos.

SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero pantalla completa: kicker ámbar uppercase ("DISTRIBUIDORA NOCTURNA · MAIPÚ · DESPACHO 18-04H"), H1 gigante hueso leading 0.95 tracking negativo, subhead gris cálido, CTA sólido ámbar texto tinta. hero.jpg lateral 7/12 integrado por degradado hacia --fondo (NUNCA overlay negro plano). Grano fílmico sutilísimo opacity .04 sobre toda la página.
#filosofia ★ LA SECCIÓN QUE DIFERENCIA ★ editorial corto: "Reposición nocturna, sala llena al abrir."
           Copy: "Despachamos cuando tu sala está cerrada. Sin camión bloqueando la puerta a las 11:00. Frío garantizado, factura al tiro."
#cifras    Count-up tabulares serif al entrar: "+12 años", "+2.800 SKUs", "97% despacho nocturno a tiempo", "+600 botillerías". Evidencia numérica en vez de fotos de gente feliz.
#catalogo  Índice numerado 01–05 lista editorial con HOVER FLIP-CARD (280ms): Licores y destilados · Confites y snacks premium · Abarrotes · Refrigerados · Aseo. La fila revela panel var(--superficie) con SKUs y precio "desde" CLP. En móvil tap = acordeón.
#precios   "Precios por caja, sin sorpresas": tabla sobria 5 filas precio desde en CLP tabulares (Pisco 35° caja 6, Ron caja 6, Cerveza pack 24, Snack caja 30, Bebida pack) + nota legal honesta: "IVA incluido. Mínimo $80.000. Despacho nocturno sin recargo RM. El valor final se confirma al facturar stock del día. Nunca despachamos sin tu OK."
#metodo    3 columnas filetes verticales 1px: 01 Pides hasta 18:00 (catálogo o WhatsApp) → 02 Picking nocturno y factura electrónica → 03 Despacho 18-04h, frío garantizado. Números grandes ámbar apagado.
#galeria   bodegon.jpg + texture.jpg como OBRAS DE GALERÍA: filete 1px, caption técnica 11px, revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.
#faq       6 acordeones honestos (280ms): ¿Hasta qué hora puedo pedir para despacho nocturno? ¿Despachan de noche en mi comuna? ¿Frío garantizado cómo funciona? ¿Mínimo y costo despacho nocturno? ¿Puedo pedir mixto licor + abarrotes? ¿Factura y pago a crédito?
#reserva   Sobre var(--superficie): headline corto, teléfono hueso gigante tabular, botón ámbar, horarios, dirección. Micro-línea: "Responde bodega nocturna, no bot."
           Footer sobrio: marca pequeña, dirección, legal Chile, año.

CONVERSIÓN SIEMPRE PRESENTE
Nav translúcido blur sutil con botón ámbar "Ver catálogo"; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Cotizar botillería"). Cursor personalizado sutil (punto ámbar 6px con lerp, se agranda sobre links; desactivado en touch/reduced-motion).

MOTION
Barra progreso 2px ámbar · H1 clip-reveal líneas stagger .12s ease(0.22,1,0.36,1) · galería cortina clip-path · count-up 1.2s · flip-cards 280ms · hovers 150–250ms · TODO respeta prefers-reduced-motion.

REGLAS DURAS (incumplir una = trabajo rechazado)
PROHIBIDO: personas/caras/manos, fiestas, testimonios con foto o estrellas, marquee de logos, contadores falsos, planes SaaS "más elegido", iconitos centrales (camión/botella), glow/neón, #000/#FFF puros, overlays negros planos sobre foto, emojis, stock externo, inglés. Fondo oscuro en capas SIEMPRE (nada de bloques blancos). Todo español de Chile, alt descriptivos, contraste AA, focus-visible ring ámbar, ::selection ámbar/texto oscuro, responsive real a 360px, radios 0, padding vertical ≥112px desktop / ≥72px móvil, max-width ~1200px.

PROCESO OBLIGATORIO
1) Lee PROMPT y todo src/. 2) Implementa sección por sección respetando ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/. 4) npm run propuesta -- distribuidora-noctua-oscuro, revisa en navegador y corrige. 5) npm run propuestas:build -- distribuidora-noctua-oscuro hasta cero errores. 6) Auto-revisión contra REGLAS DURAS y arco (¿precio por caja, despacho nocturno y frío respondidos antes del footer? ¿Se siente bodega que cobra premium o bodegón barato?). Itera hasta lo primero. Calidad > velocidad. 7) Resumen breve.

Calidad > velocidad: esta propuesta se usa para vender rediseños a distribuidoras chilenas de estética oscura premium (8 sitios A+B Maps: Somagel, Catan, Don Mateo, La Mundial, Tilicura, Central Vinos, etc.). Si queda "bien pero genérica", itera hasta que un dueño de botillería la envidie para sí misma.
```
