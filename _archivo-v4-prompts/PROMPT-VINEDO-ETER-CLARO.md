# SUPER-PROMPT v3 — VIÑEDO · "ÉTER-CLARO" · grupo Claro minimalista / neutro (26 sitios) + satélites verde/oliva/teal/dorado

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL analizado 2026 — **49 capturas renderizadas de 51 dominios únicos (54 leads A+B Maps, solo crm-maps-AB.json)** · 6 grupos visuales validados. Cobertura 90.7% (49/54 registros) · Tasa captura 96.1% (49/51 dominios válidos). Grupo objetivo: **Claro minimalista / neutro (26 sitios)** — estética dominante del rubro viñedo chileno: papel luminoso, parra y barrica insinuadas, grilla serena sin folclore, blanco que deja respirar la etiqueta. Satélites menores (<10, no grupo): verde oliva 3, teal 1, verde viñedo 1, dorado/barrica 1. Benchmark verificado de este segmento CLARO: **Viña Cousiño Macul (cousinomacul.com · 81 · Las Condes, 1.738 reseñas)** por heritage claro, **Viña Santa Rita (santarita.com · 81 · Las Condes, 1.073 reseñas)** por gran marca luminosa, **Bocanáriz (bocanariz.cl · 81 · Providencia, 5.427 reseñas)** por wine bar claro, **La Vinoteca (lavinoteca.cl · 81 · Vitacura, 671 reseñas)** por retail especializado, **Viña Santa Carolina (santacarolina.cl · 81 · Providencia)** y **Santa Catalina (santacatalina.cl · 75 · Las Condes, 1.038 reseñas)** por viña urbana clara, **Tienda de Vinos La Reina (vinoslareina.cl · 77)** y **Viña Las Araucarias (lasaraucariaswine.com · 77)** por boutique minimalista, **Santiago Wine Club (santiagowineclub.cl · 72)** por club luminoso. Satélites cromáticos: **Viña Aquitania (aquitania.cl · 81 · verde viñedo)**, **Odfjell Vineyards (odfjellvineyards.cl · 77 · lima/oliva)**, **Viña TerraMater (terramater.cl · 75 · dorado/barrica)** — el acento vegetal/dorado usado con parsimonia sobre base clara. Internacional: **Opus One (opusonewinery.com)** por viñedo claro editorial y **Château d'Yquem (yquem.fr)** por luz de cava — blanco mineral, acento contenido, la parra bien fotografiada y la barrica insinuada.
> Objetivo: que el enoturista que compara tours en Google y el comprador que busca "viña con despacho" sienta "acá la visita no es un bus con parlante, el vino tiene origen y el despacho llega" antes de scrollear.

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio completo de un viñedo chileno luminoso y editorial. Presupuesto percibido: USD 14.000. Luz de valle central + orden de cava clara + confianza de viña que despacha sin enredo. No es restaurante con viñedo de adorno, no es e-commerce genérico con botellas flotando: es la viña donde el tour se reserva en 2 clics y el vino llega a la casa sin llamar tres veces.

CONTEXTO DEL PROYECTO (dónde y cómo se construye)
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/vinedo-eter-claro
   (copia ARCHIVOS, no node_modules). Esa será tu app.
2) En tu copia: package.json → cambia "name" a "vinedo-eter-claro". meta.json →
   { "title": "LUMEN — Viña & Cava · Propuesta Órbita", "client": "LUMEN", "brand": "LUMEN", "sector": "vinedo",
     "description": "Propuesta clara editorial para viñedos chilenos: tours luminosos, cava ordenada y venta directa sin fricción." }.
   index.html → <html lang="es">, <title>LUMEN — Viña & Cava · Valle Central</title>.
3) STACK REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap: todo el
   diseño va en CSS propio bien organizado. ÚNICA dependencia extra PERMITIDA si la
   necesitas para animaciones: "motion" (npm i motion). Nada más.
4) Comandos (desde la RAÍZ de órbita):
   - Desarrollo: npm run propuesta -- vinedo-eter-claro   → http://localhost:3010
   - Build:      npm run propuestas:build -- vinedo-eter-claro   (compila tsc + vite)
   La propuesta queda servida en /propuesta/vinedo-eter-claro. El build debe pasar SIN errores.
5) IGNORA el resto de carpetas de propuestas/ (otros sitios son de otros clientes). No las leas, no las modifiques. Solo creas/editas DENTRO de vinedo-eter-claro/.
6) Las imágenes generadas van en TU app: propuestas/vinedo-eter-claro/public/media/.

BENCHMARK A IMITAR (disciplina, no copia)
Cousiño Macul (heritage luminoso) · Santa Rita (gran marca clara) · Bocanáriz (wine bar sereno) · La Vinoteca (retail editorial) · Santa Carolina / Santa Catalina (viña urbana ordenada) · Las Araucarias / Tienda La Reina (boutique minimal) · Santiago Wine Club (club claro) + matiz vegetal/dorado contenido de Aquitania/Odfjell/TerraMater. Internacional: Opus One + Yquem (luz de viñedo y cava).

MARCA DEMO (textos literales, no cambiar)
Nombre: LUMEN — Viña & Cava
H1: "Vino con origen. Visita sin apuro."
Subhead: "Tours de cava, degustación guiada y venta directa en el Valle Central. Reserva en línea con horario y cupo visible, despacho a todo Chile y retiro en viña sin sorpresas."
CTA principal: "Reservar visita guiada" · secundario: "Ver vinos y despacho"
Contacto: +56 2 2840 7731 · hola@lumenvina.cl · Pirque · Tours Lun–Sáb · Despacho RM 24–48h y regiones 48–72h
Horario: Lun–Vie 10:00–18:00 · Sáb 10:00–17:00 · Dom cerrado · Último tour 15:30
Badges silenciosos (no hero): "Cupo y horario visibles · Degustación guiada · Despacho a todo Chile · Venta directa viña"

DOLOR REAL QUE ATACAS (copy con filo chileno, no genérico turístico)
- "Reservas por Instagram DM que responden mañana. Si responden."
- "La visita es 'desde $15.000' y en caja son $28.000 con degustación aparte."
- "La tienda online tiene quiebre y te avisan después de pagar."
- "El tour es un bus con parlante, foto rápida y tienda a la salida."
- "Sin sorpresas en la cava: grupo pequeño, horario respetado y vino servido a temperatura — o te avisamos antes, no después."
- Micro-copy honesto: "Cupo en línea actualizado cada mañana. Si tu horario se llena después de reservar, te reubicamos en 2 horas — no te dejamos con la copa vacía."

PALETA (regla dura, como variables CSS en :root — medida de 49 capturas: 26 neutros claros 0-41% oscuro)
--papel #F8F5EF · --papel-2 #EDE6D6 · --tinta #1E1A16 · --gris #8A857E · --linea #E2D9C7 ·
ACENTO ÚNICO --terracota #9C4A2A (barrica desaturada, <5% de la UI: CTA secundario, kickers, links, estados activos, subrayado; CTA principal es sólido tinta #1E1A16 sobre papel). PROHIBIDO terracota neón (#FF3B30 y familia), verde lima saturado, dorados brillantes metálicos, degradados, azules corporativos como acento. border-radius: 0 en TODO. Cero sombras difusas: separación por filetes 1px var(--linea) y whitespace. Fondo claro SIEMPRE. NUNCA #000/#FFF puros (usa tinta y papel).

PASO 0 — MEDIA (public/media/, máx 4 imágenes; viñedo con filtro Instagram saturado / copa gigante con vino derramado / barricas con luz neón / manos brindando a cámara con bokeh = descartar y regenerar)
vinedo.jpg 16:9 hilera de parras VACÍA luz mañana lateral, suelo mineral, cordón ordenado, sin personas, orden agrícola absoluto ·
cava.jpg 4:5 interior de cava VACÍA luz cenital suave: barricas alineadas, pasillo central vacío, piedra y madera, luz natural filtrada ·
botella.jpg 1:1 bodegón sobre papel hueso claro: botella sin etiqueta genérica + copa vacía + corcho y lápiz de cata, luz natural ·
parra.jpg 16:9 detalle macro hoja de parra / sarmiento con luz rasante suave, textura vegetal premium.

SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio  Hero: kicker terracota uppercase tracking amplio ("VIÑA & CAVA · PIRQUE · VALLE CENTRAL"), H1 gigante leading 0.92 tracking negativo, subhead 2 líneas, CTA sólido tinta "Reservar visita guiada" + link subrayado animado terracota a #precios. vinedo.jpg derecha 7/12, caption técnica 11px ("LUMEN · Pirque — tours con cupo visible, último tour 15:30"). Banda fina bajo hero: "Cupo y horario visibles · Degustación guiada · Despacho a todo Chile · Venta directa viña". Puntos flotantes sutiles opacity .10.
#cifras  Count-up al entrar (IntersectionObserver): "+14 años de viña", "+12.000 visitas al año", "98% tours a horario", "42 hectáreas / 18.000 botellas guarda". Números tabulares serif grandes. Nota pequeña: "Sin 'desde' engañoso. El precio que ves es el que pagas."
#evidencia (alias de #cifras — si usas #evidencia, duplica el bloque con id="cifras" o usa ambos ids para cumplir regla dura)
#tours  Índice numerado 01–06 editorial (NO cards iguales): Visita Clásica Cava (60 min) · Degustación Reserva (90 min) · Tour Premium Barrica (120 min) · Maridaje & Tabla (90 min) · Atardecer en Viñedo (75 min) · Visita Privada Grupos. Hover/tap expande 64px revelando "incluye / no incluye, cupo máx, idioma ES/EN, desde $XX.XXX". (280ms). Lenguaje plano, sin jerga sommelier.
#vinos  3 columnas filete superior 1px: Vinos jóvenes · Reserva & Gran Reserva · Espumante & Rosé. Sin iconitos centrales: números 01–03 terracota apagado. Cada columna con 2 etiquetas y nota de guarda.
#precios  "Valores viña, sin letra chica": tabla editorial 5 filas precio CLP tabulares + columna Formato + columna Incluye (Tour Cava $18.900 · Degustación Reserva $28.900 · Premium Barrica $42.900 · Maridaje & Tabla $34.900 · Caja mixta 6 botellas $89.900) + nota honesta al margen: "Cupo máximo 12 personas. Niños no pagan sin degustación. Despacho RM desde $4.990, regiones desde $7.990. Precios actualizados cada temporada. El total se confirma antes de pagar, nunca después." Sin badge "más elegido". Columna lateral con comunas y ventana de entrega.
#metodo  3 columnas filete superior 1px: 01 Reservas con horario y cupo visible → 02 Llegas y degustas (grupo pequeño, guía enológica, temperatura de servicio controlada) → 03 Llevas o te despachamos (caja sellada, guía y boleta, cambio en 48h si falla). Números grandes terracota apagado.
#galeria  cava.jpg + botella.jpg como OBRAS DE GALERÍA: filete 1px, caption técnica 11px ("Cava LUMEN · barrica roble francés 225L · 14°C constante"), revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.
#faq  6 acordeones honestos (280ms): ¿Cómo reservo y hasta cuándo puedo cancelar o reprogramar? ¿Qué incluye cada tour y cuánto dura realmente? ¿Puedo comprar vino sin hacer el tour y cómo es el despacho? ¿Hacen eventos privados o de empresa para grupos? ¿Qué pasa si llueve o hace mucho calor — se suspende? ¿Cómo llego desde Santiago y hay estacionamiento? Respuestas con teléfono visible, sin letra chica oculta.
#reserva  Headline corto "Reserva tu visita. Nosotros ponemos la cava." + teléfono tabular gigante + CTA tinta + horarios + dirección viña/comunas despacho. Micro-línea: "Responden anfitriones, no bots. Si no contestamos, devolvemos el llamado en 2 horas hábiles." Footer sobrio legal CL (Razón social LUMEN SpA, SII, boleta/factura, año).

CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Reservar" sólido tinta fijo; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Reservar"). Subrayados animados 200ms. Teléfono fijo visible en header y footer.

MOTION (CSS/transiciones exactas; o "motion" si instalada)
Barra progreso scroll 2px terracota · H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) · fade+rise 24px al entrar (once) · hovers 150–250ms · acordeones/count-up 280ms/1.2s · TODO respeta prefers-reduced-motion (si activo: nada se mueve).

REGLAS DURAS (incumplir una = rechazado)
- Fondo claro siempre (papel según paleta). PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos (noctua es otro prompt).
- PROHIBIDO stock viñedo cliché: copa gigante con vino derramado en cámara lenta, barrica con luz neón, manos brindando a cámara con bokeh, racimo saturado con filtro Instagram, dron cenital genérico con viñedo infinito. Solo las imágenes ya presentes en public/media (nada externo). Si falta una, tipografía y layout llevan el diseño solos.
- PROHIBIDO promesas vacías, badges de rating con estrellas, marquee de logos, contadores falsos, planes "más elegido", iconitos de copa/barrica como pieza central, emojis.
- Accent terracota en MENOS del 5% de la UI. Radios 0. Botón sólido tinta sobre fondo claro (no terracota sólido).
- Todo texto y alt en español de Chile, alt="" descriptivos, contraste AA, focus-visible ring terracota, ::selection terracota/texto claro, hero impecable a 360px, padding vertical ≥112px desktop / ≥72px móvil, max-width ~1200px.
- Ética: sin "el mejor vino de Chile" sin sustento, sin urgencia falsa, stock y cupo honestos.

PROCESO OBLIGATORIO
1) Duplica _plantilla → vinedo-eter-claro y ajusta name/meta/title. 2) Genera y verifica las 4 imágenes en public/media/. 3) Maqueta sección por sección respetando ids/anclas (#inicio, #cifras, #precios, #faq, #reserva obligatorios). 4) npm run propuesta -- vinedo-eter-claro, revisa en navegador y corrige. 5) npm run propuestas:build -- vinedo-eter-claro hasta cero errores. No agregues dependencias nuevas; no toques package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS y arco de conversión (¿precio tour, cupo/despacho y cómo-reservar respondidos antes del footer? ¿Se siente viña luminosa o e-commerce genérico?). Itera hasta lo primero. Calidad > velocidad. 7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a viñedos chilenos (grupo de 26 neutros claros, 49 capturas validadas). Si queda "bien pero viña genérica", itera hasta que un enólogo la envidie para su propia cava. Benchmark chileno claro: tan ordenado como comprar en La Vinoteca, pero con la calma de una cava que respeta la hora del tour.
```
