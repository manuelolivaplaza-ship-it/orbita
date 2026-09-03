# SUPER-PROMPT v3 — VIÑEDO · "NOCTUA-OSCURO" · grupo Oscuro / premium minimal (17 sitios)

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL analizado 2026 — **49 capturas renderizadas de 51 dominios únicos (54 leads A+B Maps, solo crm-maps-AB.json)** · 6 grupos visuales validados. Grupo objetivo: **Oscuro / premium minimal (17 sitios, 35% del mercado viñedo capturado, 48-100% px oscuros)** — estética cava nocturna, barrica iluminada quirúrgica, tipografía como etiqueta negra. Es el 35% más oscuro y el que cobra mejor: degustación premium, guarda y venta directa de botella alta. Benchmark verificado de este segmento OSCURO: **El Mundo del Vino Isidora Goyenechea (elmundodelvino.cl · 81 · Las Condes, 97% oscuro)** por retail nocturno, **Les Dix Vins (lesdixvins.cl · 81 · 97% oscuro)** por cave premium, **Viña Haras de Pirque (haraswines.com · 81 · 100% oscuro)** por viña cinematográfica, **Viña Santa Carolina Tours (santacarolinatours.cl · 81 · 54% oscuro)** por tour vespertino, **Viña Concha y Toro (conchaytoro.com · 75 · 80% oscuro)** por gran marca noche, **Viña Undurraga (undurraga.cl · 81 · 53% oscuro)** por heritage oscuro, **Vinolia (vinolia.cl · 75 · 50% oscuro)** por wine bar noche, **Viña Casas del Bosque (casasdelbosque.cl · 72 · 59% oscuro)** y **Viñedos Orgánicos Emiliana (emiliana.cl · 72 · 51% oscuro)** por orgánico premium nocturno, **Invina (invinawines.cl · 72 · 90% oscuro)** y **Villard Fine Wines (villard.cl · 66 · 80% oscuro)** por boutique negra. Internacional nocturno: **Opus One - Overture (opusonewinery.com)** noche y **Dom Pérignon (domperignon.com)** — oscuridad en capas, barrica iluminada, la etiqueta bien puesta y la cava bien temperada.
> Objetivo: que el bebedor que paga $35.000 por una degustación y el corporativo que reserva cava privada sienta "acá la botella de guarda se trata con respeto, no es góndola de supermercado" antes de scrollear.

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio completo de un viñedo premium nocturno chileno. Presupuesto percibido: USD 16.000. Cava cinematográfica + barrica precisa + confianza de viña que cobra premium y cumple. No es restaurante oscuro con vino de adorno, no es bar con neón: es la cava donde la botella de guarda se sirve a temperatura y el tour privado respeta el horario aunque llegue un solo invitado.

CONTEXTO DEL PROYECTO (dónde y cómo se construye)
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/vinedo-noctua-oscuro
   (copia ARCHIVOS, no node_modules). Esa será tu app.
2) En tu copia: package.json → cambia "name" a "vinedo-noctua-oscuro". meta.json →
   { "title": "NOCTUA — Viña & Cava Nocturna · Propuesta Órbita", "client": "NOCTUA", "brand": "NOCTUA", "sector": "vinedo",
     "description": "Propuesta oscura premium para viñedos chilenos: cava nocturna, degustación precisa y guarda sin humo." }.
   index.html → <html lang="es">, <title>NOCTUA — Viña & Cava Nocturna · Pirque</title>.
3) STACK REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap: todo el
   diseño va en CSS propio bien organizado. ÚNICA dependencia extra PERMITIDA si la
   necesitas para animaciones: "motion" (npm i motion). Nada más.
4) Comandos (desde la RAÍZ de órbita):
   - Desarrollo: npm run propuesta -- vinedo-noctua-oscuro   → http://localhost:3010
   - Build:      npm run propuestas:build -- vinedo-noctua-oscuro   (compila tsc + vite)
   La propuesta queda servida en /propuesta/vinedo-noctua-oscuro. El build debe pasar SIN errores.
5) IGNORA el resto de carpetas de propuestas/ (otros sitios son de otros clientes). No las leas, no las modifiques. Solo creas/editas DENTRO de vinedo-noctua-oscuro/.
6) Las imágenes generadas van en TU app: propuestas/vinedo-noctua-oscuro/public/media/.

BENCHMARK A IMITAR (disciplina, no copia)
El Mundo del Vino / Les Dix Vins (retail noche) · Haras de Pirque (viña 100% oscuridad) · Santa Carolina Tours (tour noche) · Concha y Toro / Undurraga (gran marca oscura) · Vinolia / Casas del Bosque / Emiliana (premium orgánico noche). Internacional: Opus One noche + Dom Pérignon (cava en capas oscuras).

MARCA DEMO (textos literales, no cambiar)
Nombre: NOCTUA — Viña & Cava Nocturna
H1: "Guarda precisa. Botella servida a su hora."
Subhead: "Cava nocturna en Pirque. Degustación premium con cupo íntimo, guarda controlada y venta directa de etiqueta negra — con horario respetado y temperatura de servicio exacta."
CTA principal: "Reservar cava privada" · secundario: "Ver guarda y despacho"
Contacto: +56 2 2840 7732 · hola@noctuavina.cl · Pirque · Cava Lun–Sáb · Despacho RM 24–48h premium
Horario: Lun–Sáb 15:00–22:00 · Degustación nocturna 19:30 · Último ingreso 20:30
Badges silenciosos (no hero): "Cupo íntimo 8 máx · Guarda a 14°C · Despacho premium · Etiqueta negra"

DOLOR REAL QUE ATACAS (copy con filo chileno, no genérico premium)
- "Reservas premium que son sala común con 25 personas y parlante."
- "La premium es 'degustación' de 15ml a 22°C en copa plástica."
- "La guarda la compras y te dicen 'está en bodega externa, llega en 10 días'."
- "El tour nocturno es foto con barrica y tienda a la salida sin historia."
- "Sin sorpresas en la cava: 8 máx, copa Riedel, temperatura exacta y relato de guarda — o te avisamos antes, no después."
- Micro-copy honesto: "Guarda en cava propia a 14°C constante. Si tu etiqueta no está en guarda, te avisamos en 2 horas — no te cobramos para después decir 'no había'."

PALETA (regla dura — la oscuridad tiene capas, como variables CSS en :root — medida 17 sitios 48-100% oscuro)
--fondo #0E0D0C (negro barrica profundo) · --superficie #1A1816 · --superficie-alta #252220 · --filete #2E2A26 · --hueso #EDE6D6 (texto, NUNCA #FFF) · --gris-calido #9A9590 · --gris-apagado #6B6763 · ACENTO ÚNICO --burdeo #8B2E3A (vino tinto profundo, <5% de la UI: CTA, kicker, dato clave, subrayado). PROHIBIDO #000/#FFF puros, burdeo neón (#FF2B4A y familia), glow en texto, gradientes púrpura genéricos, sombras difusas. border-radius: 0 en TODO. Profundidad por capas de fondo + filetes 1px (nunca sombras). ::selection var(--burdeo)/texto hueso. Focus-visible ring 2px var(--burdeo).

PASO 0 — MEDIA (public/media/, máx 4 imágenes; viñedo soleado con filtro cálido excesivo / copa con vino derramado / manos brindando bokeh / barrica con luz neón = descartar y regenerar)
hero.jpg 16:9 cava nocturna VACÍA iluminada quirúrgica: barricas con luz cenital cálida puntual sobre fondo noche, pasillo vacío cinematográfico, sin personas ·
botella-dark.jpg 4:5 bodegón chiaroscuro sobre piedra oscura: botella negra sin etiqueta genérica + copa con vino tinto + sacacorchos, luz rasante cálida ·
texture.jpg 1:1 macro roble de barrica / duela con luz rasante dramática, vetas y sello a fuego ·
cava-noche.jpg 16:9 degustación nocturna VACÍA: mesa de roble con copas alineadas y luz baja, cinematográfico pero sereno.

SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio  Hero pantalla completa: kicker burdeo uppercase ("VIÑA NOCTURNA · PIRQUE · CAVA A 14°C"), H1 gigante hueso leading 0.92 tracking -0.03em, subhead gris cálido 2 líneas, CTA sólido burdeo texto hueso + link secundario a #precios. hero.jpg integrado por degradado hacia var(--fondo) (NUNCA overlay negro plano). Grano fílmico sutilísimo opacity .04. Caption técnica 11px: "Cava NOCTUA · 8 máx por degustación · Temperatura 14°C constante · Etiqueta negra".
#filosofia  ★ LA SECCIÓN QUE DIFERENCIA ★ editorial corto: "La guarda no improvisa. Nosotros tampoco." Copy base (usa literal): "Barrica roble francés 225L con trazabilidad de guarda desde el encube. Botella etiquetada en cava, no en bodega externa. Temperatura de servicio controlada por etiqueta — tinto guarda 16–18°C, no 22°C de sala sin climatizar. Si tu guarda no está en condición, te avisamos antes de cobrarte, no después." Sin testimonios públicos JAMÁS: la discreción y la guarda son el argumento premium. Métrica al pie 11px: "Guarda 14°C · Humedad 75% · 18 meses barrica promedio".
#cavas  Índice numerado 01–06 lista editorial con HOVER FLIP-CARD (280ms): Cava Clásica Nocturna (60 min) · Reserva Barrica (90 min) · Guarda Premium (120 min, etiqueta negra) · Maridaje Nocturno & Tabla · Atardecer a Nocturno · Cava Privada Grupos 8 máx. La fila revela panel var(--superficie) con incluye/no incluye, temperatura de servicio, guarda. En móvil tap = acordeón.
#cifras  Count-up tabulares serif al entrar: "+16 años de guarda", "+9.000 visitas nocturnas al año", "99% degustaciones a temperatura exacta", "3.000 botellas guarda negra". Números hueso grandes tabulares, caption gris cálido 11px.
#precios  "Precios guarda, sin letra chica": tabla sobria 5 filas en CLP tabulares sobre var(--superficie) — Cava Nocturna $24.900 · Reserva Barrica $38.900 · Guarda Premium $58.900 · Maridaje Nocturno $44.900 · Caja Guarda Negra 6 $149.900 — con columna Incluye y columna Temperatura/Plazo. Nota honesta: "Valores referenciales 2025. Cupo 8 máx. Despacho premium RM desde $5.990. Si la guarda no está en condición, no se cobra la degustación."
#metodo  3 columnas filetes verticales 1px var(--filete): 01 Reserva cava privada con horario exacto → 02 Degustación íntima (8 máx, copa Riedel, temperatura por etiqueta, relato de guarda) → 03 Guarda a domicilio premium (caja sellada climatizada, guía y factura, cambio en 48h si falla). Números grandes burdeo apagado 18%.
#galeria  botella-dark.jpg + cava-noche.jpg como OBRAS DE GALERÍA: filete 1px var(--filete), caption técnica 11px ("Botella guarda negra · 14°C · Barrica 225L · 19:30 degustación"), revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.
#faq  6 acordeones honestos (280ms): ¿Cómo reservo cava privada y hasta cuándo puedo cancelar? ¿Qué incluye la degustación premium y qué temperatura tiene cada etiqueta? ¿Puedo comprar guarda sin hacer el tour y cómo es el despacho premium? ¿Hacen cava privada para empresa o celebración? ¿Qué pasa si llueve — la cava es subterránea climatizada? ¿Cómo llego de noche desde Santiago y hay chofer privado? Respuestas con teléfono visible.
#reserva  Sobre var(--superficie): headline "¿Reservamos tu cava?" + teléfono hueso gigante tabular +56 2 2840 7732, botón sólido burdeo texto hueso "Reservar cava privada", horarios nocturnos y nota "Responde nuestro equipo de cava, no un call center." Footer sobrio: marca pequeña, dirección Pirque, razón social NOCTUA SpA, año.

CONVERSIÓN SIEMPRE PRESENTE
Nav translúcido blur sutil con botón burdeo "Reservar"; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero. Barra progreso 2px burdeo.

MOTION (CSS/transiciones exactas)
Barra progreso 2px burdeo · H1 clip-reveal líneas stagger .12s ease(0.22,1,0.36,1) · galería cortina clip-path inset 700ms · count-up 1.2s · flip-cards 280ms · hovers 150–250ms · acordeones 280ms · TODO respeta prefers-reduced-motion.

REGLAS DURAS (incumplir una = trabajo rechazado)
PROHIBIDO: personas/caras/manos brindando, copas derramadas, racimo saturado neón, barricas con luz neón, dashboards falsos, glow/neón, gradientes púrpura-azul, testimonios con foto o estrellas, marquee de logos, planes "más elegido" con badge, iconos centrales de copa, emojis, stock externo, inglés. Todo español de Chile, alt descriptivos, contraste AA sobre fondo oscuro (hueso #EDE6D6 sobre #0E0D0C), focus-visible ring burdeo, ::selection burdeo/hueso, responsive real a 360px, radios 0, padding ≥112px desktop / ≥72px móvil, max-width ~1200px, números tabulares OBLIGATORIOS en precios.

PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/. 4) `npm run propuesta -- vinedo-noctua-oscuro`, revisa en navegador y corrige. 5) `npm run propuestas:build -- vinedo-noctua-oscuro` hasta cero errores. No agregues dependencias nuevas; no toques package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS y arco de conversión (¿precio guarda, temperatura/guarda y cómo reservar cava privada respondidos antes del footer? ¿Se siente cava premium o bar oscuro genérico?). Itera hasta lo primero. Calidad > velocidad. 7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a viñedos premium nocturnos chilenos (grupo oscuro real 17/49 validado por píxeles, 54 leads A+B Maps). Si queda "bien pero genérica", itera hasta que un enólogo de guarda la envidie para su propia cava nocturna.
```
