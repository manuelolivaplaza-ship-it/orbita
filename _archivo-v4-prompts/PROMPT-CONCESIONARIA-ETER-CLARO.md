# SUPER-PROMPT v3 — CONCESIONARIA · "ÉTER-CLARO" · grupo Claro minimalista / neutro (72 + 2 satélites azul) · 92 capturas

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL analizado 2026 — **92 capturas renderizadas de 121 registros Maps (solo crm-maps-AB.json) · 95 dominios únicos dedup por dominio conservando mayor buyScore · 4 grupos visuales validados**. Tasa captura 96.8% (92/95 válidos) · Cobertura análisis 76% (92/121). Grupo objetivo: **Claro minimalista / neutro (72 sitios · 78.3%) + satélites Azul/cian claro (1) + Azul medio (1)** — estética dominante del rubro: papel hueso, grilla de concesionaria sin gritos, blanco que deja respirar el stock y la ficha técnica. Benchmark verificado de este segmento: **Vendo Autos (vendoautos.cl · 81 · Las Condes, 25% oscuro)** por consignación sin comisión explícita, **Santiago Motors Chile (santiagomotors.cl · 81 · Las Condes, 27% oscuro)** por compra-venta directa, **PETERSEN (automotrizpetersen.cl · 81 · Vitacura, 18% oscuro)** por stock multimarca editorial, **MrCar (mrcar.cl · 81 · Vitacura, 1% oscuro)** por ficha limpia, **Forcenter Parque Arauco (forcenter.cl · 81 · Las Condes, Ford)** por concesionario oficial luminoso, **Cárbula (carbula.cl · 75)** por marketplace con inspección y pago seguro, **KARS (kars.cl · 75 · Las Condes)** y **MAO Autos (maoautos.cl · 75)** por boutique clara Las Condes; soporte largo cola clara: **Kaufmann Punta Arenas (kaufmann.cl · 60)**, **Derco Center Berrios Valdivia (dercocenterberrios.cl · 72)**, **Automotora Alameda Rancagua (alameda.cl · 72)**. Satélites confianza: **Automotriz Tu Auto Temuco (automotriztuauto.cl · 72 · 12% oscuro)** azul claro + **Derco Center Recasur Angamos Punta Arenas (recasur.cl · 66 · 19% oscuro)** azul medio — ambos sobre base clara. Internacional: **CarMax (carmax.com)** por marketplace claro canónico y **AutoTrader (autotrader.com)** por catálogo luminoso — aire, tipografía sobria, el auto iluminado sobre papel.
> Objetivo: que quien vende o compra usado en Chile —con miedo a la letra chica del crédito, la tasación eterna por WhatsApp y el auto maquillado— sienta "aquí el precio es el publicado, la inspección es de 150 puntos de verdad y la transferencia no me deja botado" antes de scrollear.

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio completo de una concesionaria / automotora chilena clara y ordenada — compra, venta y consignación de usados y seminuevos verificados. Presupuesto percibido: USD 14.000. Editorial luminosa de showroom diurno + ficha técnica serena + confianza de transferencia sin letra chica. No es marketplace genérico con neón, no es feria con globos: es la automotora donde el auto se ve como es, el precio es el publicado y el crédito se explica en 3 números.

CONTEXTO DEL PROYECTO (dónde y cómo se construye)
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/concesionaria-eter-claro
   (copia ARCHIVOS, no node_modules). Esa será tu app.
2) En tu copia: package.json → cambia "name" a "concesionaria-eter-claro". meta.json →
   { "title": "ÉTER — Concesionaria · Propuesta Órbita", "client": "ÉTER", "brand": "ÉTER", "sector": "concesionaria",
     "description": "Propuesta clara editorial para concesionarias chilenas: stock verificable, precio publicado y transferencia que no te deja botado." }.
   index.html → <html lang="es">, <title>ÉTER — Concesionaria · Compra y venta de usados verificados en Santiago</title>.
3) STACK REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap: todo el
   diseño va en CSS propio bien organizado. ÚNICA dependencia extra PERMITIDA si la
   necesitas para animaciones: "motion" (npm i motion). Nada más.
4) Comandos (desde la RAÍZ de órbita):
   - Desarrollo: npm run propuesta -- concesionaria-eter-claro   → http://localhost:3010
   - Build:      npm run propuestas:build -- concesionaria-eter-claro   (compila tsc + vite)
   La propuesta queda servida en /propuesta/concesionaria-eter-claro. El build debe pasar SIN errores.
5) IGNORA el resto de carpetas de propuestas/ (otros sitios son de otros clientes). No las leas, no las modifiques. Solo creas/editas DENTRO de concesionaria-eter-claro/.
6) Las imágenes generadas van en TU app: propuestas/concesionaria-eter-claro/public/media/.

BENCHMARK A IMITAR (disciplina, no copia)
Vendo Autos (consignación sin comisión, sucursal Manquehue) · Santiago Motors (stock real Las Condes) · PETERSEN / MrCar (Vitacura, ficha limpia) · Forcenter Parque Arauco (oficial Ford disciplinado) · Cárbula (25% más que automotora, inspección + pago seguro) · KARS / MAO Autos (boutique Las Condes, visita con hora) + soporte Kaufmann / Derco Berrios / Alameda Rancagua (red concesionaria clara a escala). Satélites azul: Tu Auto Temuco + Recasur Punta Arenas (confianza azul contenida sobre base clara). Internacional: CarMax + AutoTrader (el auto iluminado sobre blanco, aire, sin gritos).

MARCA DEMO (textos literales, no cambiar)
Nombre: ÉTER — Concesionaria
H1: "El auto que ves es el auto que retiras."
Subhead: "Usados y seminuevos verificados con inspección 150 puntos, precio publicado con IVA, financiamiento explicado en pie + cuota real y transferencia en 5 días. Tasación online en 15 minutos — sin letra chica ni auto maquillado."
CTA principal: "Ver stock verificado" · secundario: "Tasar mi auto en 15 min"
Contacto: +56 2 2840 3315 · hola@eterconcesionaria.cl · Las Condes · Stock en showroom + despacho RM
Horario: Lun–Vie 9:00–19:00 · Sáb 10:00–17:00 · Test drive con hora agendada
Badges silenciosos (no hero): "150 puntos revisados · Precio publicado · Transferencia 5 días · Financiamiento pie+cuota real"

DOLOR REAL QUE ATACAS (copy con filo chileno, no genérico automotriz)
- "Tasas por WhatsApp y te responden mañana. Si te responden — con un '¿qué auto es?' aunque ya lo mandaste."
- "El precio publicado es 'desde' y el pie te lo dicen cuando ya pediste el crédito."
- "Te muestran fotos con filtro y el auto llega con detalle de pintura que 'no se veía en la foto'."
- "Te dicen 'transferencia inmediata' y andas 3 semanas con poder notarial y sin padrón."
- "Sin maquillaje: cada auto con informe 150 puntos, fotos sin filtro y VIN verificable — o te decimos qué tiene antes de que vengas."
- Micro-copy honesto: "Stock fotografiado ayer en showroom. Si un auto se vendió después de tu reserva, te llamamos en 2 horas y te devolvemos la reserva — no te hacemos venir por nada."

PALETA (regla dura, como variables CSS en :root — medida de 92 capturas: 72 claros 0–45% oscuro, 18 oscuros 47–96%)
--papel #F8F5EF · --papel-2 #EDE8DC · --tinta #121416 · --gris #8B8680 · --linea #E2DDD4 ·
ACENTO ÚNICO --rojo #9E2B1E (rojo automotriz desaturado, <5% de la UI: CTA secundario, kickers, links, estados activos, subrayado; CTA principal es sólido tinta #121416 sobre papel). PROHIBIDO rojo neón (#FF1A1A), azul confianza saturado como acento, dorado brillante, degradados, neón. border-radius: 0 en TODO. Cero sombras difusas: separación por filetes 1px var(--linea) y whitespace. Fondo claro SIEMPRE. NUNCA #000/#FFF puros (usa tinta y papel).

PASO 0 — MEDIA (public/media/, máx 4 imágenes; showroom con neón/familia feliz con SUV nuevo y globos/vendedor entregando llaves sonriendo/mockup 3D futurista inglés = descartar y regenerar)
showroom.jpg 16:9 interior de showroom VACÍO luz mañana: 3 autos alineados sobre piso pulido gris claro, muro blanco con línea horizontal filete, luz natural lateral — orden quirúrgico, reflejo suave, sin personas ·
still.jpg 4:5 bodegón sobre papel hueso claro: llave tipo navaja + padrón genérico sin marca + lápiz técnico, luz natural ·
detail.jpg 1:1 macro costura de cuero / aro diamantado / filete cromado con luz rasante suave ·
pasillo.jpg 16:9 pasillo de showroom luminoso vacío con sombra suave, sereno, nada galpón frío.

SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio  Hero: kicker rojo uppercase tracking amplio ("CONCESIONARIA · LAS CONDES · USADOS VERIFICADOS"), H1 gigante leading 0.92 tracking negativo, subhead 2 líneas, CTA sólido tinta "Ver stock verificado" + link subrayado animado rojo a #precios. Filtro sobrio bajo hero: Marca / Modelo / Año / Precio — como ficha, no marketplace chillón. showroom.jpg derecha 7/12, caption técnica 11px ("ÉTER — stock fotografiado ayer · 150 puntos revisados"). Banda fina bajo hero: "Precio publicado · Stock real ayer · Transferencia 5 días · Pie + cuota sin letra chica". Puntos flotantes sutiles opacity .10.
#cifras  Count-up al entrar (IntersectionObserver): "+14 años", "+6.200 autos entregados", "98% transferencias en 5 días", "2.800 tasaciones/año". Números tabulares serif grandes. Nota pequeña: "Sin 'desde' engañoso. El precio que ves es el que facturas."
#evidencia (alias de #cifras — si usas #evidencia, duplica el bloque con id="cifras" o usa ambos ids para cumplir regla dura)
#catalogo  Índice numerado 01–06 editorial (NO cards iguales): Citycar y hatch · Sedán · SUV / Crossover · Camioneta · Premium / alta gama · Consignación. Hover/tap expande 64px revelando "desde $X.XXX.XXX CLP · pie $XXX.XXX + cuota $XXX.XXX · año/km referencia". Lenguaje plano, sin jerga importadora.
#servicios  3 columnas filete superior 1px: Compra verificada 150 puntos (VIN, historial, prueba ruta) · Financiamiento pie+cuota real (bancario vs automotriz explicado) · Consignación sin comisión (auto asegurado, resguardo Manquehue, pago al instante). Sin iconitos centrales: números 01–03 rojo apagado.
#precios  "Valores publicados, sin letra chica": tabla editorial 5 filas precio CLP tabulares + columna Segmento + columna Pie/Cuota referencial + columna Transferencia (Citycar 2019 $7.490.000 · SUV 2020 $13.900.000 · Camioneta 2021 $16.500.000 · Premium 2022 $24.900.000 · Consignación tasación $0) + nota honesta al margen: "Pie mínimo 20% referencial. Cuota simulada a 48 meses, CAE informado antes de firmar. Transferencia 5 días hábiles con padrón a tu nombre. Precios actualizados cada lunes. El total se confirma antes de pagar, nunca después." Sin badge "más elegido". Columna lateral con comunas despacho y ventana test drive.
#metodo  3 columnas filete superior 1px: 01 Tasas online 15 min (fotos + patente) → 02 Agendas visita y test drive (informe 150 puntos en mano) → 03 Firmas y retiras con padrón (o consignas con custodia y pago al instante). Números grandes rojo apagado.
#galeria  still.jpg + detail.jpg como OBRAS DE GALERÍA: filete 1px, caption técnica 11px ("Padrón a tu nombre en 5 días · VIN verificable"), revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.
#faq  6 acordeones honestos (280ms): ¿Cómo funciona la tasación online y cuánto demora realmente? ¿El precio publicado incluye transferencia y qué cubre la garantía de usados? ¿Reciben mi auto en parte de pago y cómo valoran el retoma? ¿Qué revisan en los 150 puntos y puedo ver el informe antes? ¿Cómo funciona el crédito y qué pasa si es rechazado? ¿En cuántos días tengo el padrón y puedo agendar test drive sin compromiso? Respuestas con teléfono visible, sin letra chica oculta.
#reserva  Headline corto "Ven a verlo. Si te gusta, te lo llevas con papeles al día." + teléfono tabular gigante + CTA tinta + horarios + dirección showroom/comunas despacho. Micro-línea: "Responden vendedores, no bots. Si no contestamos, devolvemos el llamado en 2 horas hábiles." Footer sobrio legal CL (Razón social ÉTER SpA, SII, boleta/factura, año).

CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Ver stock" sólido tinta fijo; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Tasar"). Subrayados animados 200ms. Teléfono fijo visible en header y footer.

MOTION (CSS/transiciones exactas; o "motion" si instalada)
Barra progreso scroll 2px rojo · H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) · fade+rise 24px al entrar (once) · hovers 150–250ms · acordeones/count-up 280ms/1.2s · TODO respeta prefers-reduced-motion (si activo: nada se mueve).

REGLAS DURAS (incumplir una = rechazado)
- Fondo claro siempre (papel según paleta). PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos (noctua es otro prompt).
- PROHIBIDO stock automotriz cliché: vendedor entregando llaves con sonrisa gigante, familia feliz con globos frente a SUV, apretón de manos sobre capó, render 3D futurista con neón, antes/después. Solo las imágenes ya presentes en public/media (nada externo). Si falta una, tipografía y layout llevan el diseño solos.
- PROHIBIDO promesas vacías, badges de rating con estrellas, marquee de logos, contadores falsos, planes "más elegido", iconitos de auto/volante como pieza central, emojis.
- Accent rojo en MENOS del 5% de la UI. Radios 0. Botón sólido tinta sobre fondo claro (no rojo sólido).
- Todo texto y alt en español de Chile, alt="" descriptivos, contraste AA, focus-visible ring rojo, ::selection rojo/texto claro, hero impecable a 360px, padding vertical ≥112px desktop / ≥72px móvil, max-width ~1200px.
- Ética: sin "precio más barato garantizado" sin sustento, sin urgencia falsa, stock honesto, VIN verificable.

PROCESO OBLIGATORIO
1) Duplica _plantilla → concesionaria-eter-claro y ajusta name/meta/title. 2) Genera y verifica las 4 imágenes en public/media/. 3) Maqueta sección por sección respetando ids/anclas (#inicio, #cifras, #precios, #faq, #reserva obligatorios). 4) npm run propuesta -- concesionaria-eter-claro, revisa en navegador y corrige. 5) npm run propuestas:build -- concesionaria-eter-claro hasta cero errores. No agregues dependencias nuevas; no toques package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS y arco de conversión (¿precio publicado, transferencia/150 puntos y cómo-tasar respondidos antes del footer? ¿Se siente concesionaria luminosa o catálogo genérico?). Itera hasta lo primero. Calidad > velocidad. 7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a concesionarias chilenas (grupo de 72 neutros claros + 2 satélites azul, 92 capturas validadas). Si queda "bien pero catálogo genérico", itera hasta que un dueño que ha perdido plata con letra chica la envidie para su automotora. Benchmark chileno claro: tan confiable como comprar en Cárbula con inspección, pero con la prolijidad de una boutique Las Condes que no te deja botado con el padrón.
```
