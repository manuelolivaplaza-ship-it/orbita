# SUPER-PROMPT — EVENTOS · GRUPO "OSCURO / PREMIUM MINIMAL" (20 sitios) — NOCTUA OSCURO

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para centros de eventos chilenos cuya estética real (medida por captura
renderizada) es **oscura y premium minimal**: fondo noche dominante, tipografía como joya,
el salón presentado como pieza de galería iluminada. Es la estética del evento caro y
discreto: vende dirección de arte, técnica impecable y un solo evento por noche — no
quincho con parlantes y luces de colores.
Benchmark REAL verificado del rubro en este mismo segmento (20 de 86 válidos A+B Maps,
pixel medido): Centro Gastronómico BordeRío (borderio.cl, Vitacura, 98% oscuro, 7365
reviews), Centro La Reina, Bate Bate Las Condes (59% oscuro), Centro Comunitario
Padre Hurtado, Centro Cultural San Ginés (3521 reviews), Refugio Antawaya, Maison de France,
Metropolitan Santiago (911 reviews). Internacionalmente, el canónico del oscuro premium
para venues: Skinney MedSpa dark editorial (noche cálida en capas) + Aesop oscuro
(contención) + The Ned (salón nocturno como club privado).
Dolor real que esta propuesta resuelve: tu centro hace eventos de $8M+ pero tu web parece
discoteca de 2012 con fondo negro puro y fotos saturadas; el gerente de RRHH que cotiza
su seminario corporativo no confía porque no ve técnica (audio, iluminación, montaje),
no ve plano, no ve menú, y no ve precios de referencia; cotizar es un Google Form sin
respuesta.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`.
   Copia ARCHIVOS, no node_modules. Nombre de carpeta: `propuestas/noctua-oscuro`.
   (Ya existe para estética; sobrescribe contenido para EVENTOS manteniendo misma carpeta.
   Si prefieres no pisar, crea `noctua-oscuro-eventos` y ajusta los comandos abajo).
2. En tu copia: package.json → "name": "noctua-oscuro". meta.json →
   { "title": "NOCTUA — Casa de Eventos Nocturna · Propuesta Órbita", "client": "NOCTUA", "brand": "NOCTUA", "sector": "eventos", "description": "Propuesta oscura premium para centros de eventos: dirección de arte, técnica y un solo evento por noche." }.
   index.html → <html lang="es">, <title>NOCTUA — Casa de Eventos Nocturna</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- noctua-oscuro` → http://localhost:3010
   - `npm run propuestas:build -- noctua-oscuro` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/noctua-oscuro/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: NOCTUA — Casa de Eventos Nocturna
H1: "La noche también se diseña."
Subhead: "Eventos corporativos y matrimonios con dirección de arte, banquetería y técnica a medida. Un solo evento por noche, sin cruce de fiestas."
CTA principal: "Reservar visita privada"
Contacto: +56 2 2840 3315 · hola@noctua-eventos.cl · Vitacura, Santiago
WhatsApp fijo visible: +56 9 8403 3315 (texto: "Coordinación directa, sin call center")
Horario visitas: Lun–Sáb 10:00–19:00 · Visitas nocturnas con reserva

## PALETA (regla dura — la oscuridad tiene capas, variables CSS en :root)
--fondo #111415 (negro cálido petróleo profundo) · --superficie #1B1E1D · --superficie-alta #242826 ·
--filete #2E3330 · --hueso #EDE9E2 (texto, NUNCA #FFF) · --gris-calido #9AA3A0 ·
ACENTO ÚNICO --ambar #D9A441 (<5% de la UI: CTA sólido, kickers, estados activos, links).
PROHIBIDO #000/#FFF puros, neón (#39FF14 y familia), glow en texto, gradientes púrpura-azul
genéricos, dorado brillante #FFD700. border-radius: 0 en TODO. Profundidad por capas de fondo
+ filetes 1px (nunca sombras difusas).

## PASO 0 — MEDIA (public/media/, máx 4 imágenes; caras/manos/fiestas desbordadas = descartar)
hero.jpg 16:9 salón nocturno VACÍO, mesa larga oscura vestida lino hueso, luz oculta cálida
rasante, cinematográfico pero sereno, sin personas ·
bodegon.jpg 4:5 bodegón chiaroscuro: copa, plato hueso y servilleta negra sobre piedra oscura ·
texture.jpg 1:1 macro lino negro texturado con luz rasante cálida ·
corridor.jpg 16:9 pasillo/salón nocturno simétrico con focos empotrados cálidos, cinematográfico
sereno, sin gente.
Si falta una, tipografía y layout llevan el diseño solos. Nada externo a public/media.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero pantalla completa: kicker ámbar uppercase ("CASA DE EVENTOS · VITACURA"), H1
           gigante hueso leading 0.95 tracking negativo, subhead gris cálido, CTA sólido ámbar
           texto tinta. hero.jpg lateral 7/12 integrado por degradado hacia --fondo (NUNCA
           overlay negro plano). Grano fílmico sutilísimo (opacity .04) sobre toda la página.
#filosofia ★ LA SECCIÓN QUE DIFERENCIA ★ editorial corto: "Un solo evento por noche."
           Copy base: "No cruzamos fiestas. Tu celebración tiene el salón, el parque, la cocina
           y el equipo completos. La discreción es el lujo." Sin testimonios públicos JAMÁS:
           la exclusividad es el argumento premium.
#cifras    Count-up tabulares serif al entrar (IntersectionObserver): "+12 años", "+2.400 eventos",
           "4.9/5 · 890 reseñas", "1 evento por noche, siempre". Evidencia numérica en vez de
           fotos de gente feliz.
#salones   Índice numerado 01–03 lista editorial con HOVER FLIP-CARD (280ms): Salón Noctua
           (200p) · Terraza Ámbar (120p) · Salón Cava (60p). La fila revela panel
           var(--superficie) con m2, técnica incluida (audio, iluminación) y precio "desde" CLP.
           En móvil tap = acordeón.
#precios   "Precios claros, sin sorpresas": tabla sobria 4 filas precio desde en CLP tabulares
           (Matrimonio 150p · Corporativo 100p · Gala 200p · Cóctel 120p) + nota legal honesta:
           "El valor final se confirma con fecha y asistencia. Nunca partimos un montaje sin
           tu aprobación por escrito."
#metodo    3 columnas filetes verticales 1px: 01 Visita privada → 02 Propuesta técnica y menú
           por escrito → 03 Montaje y dirección día D. Números grandes ámbar apagado.
#galeria   bodegon.jpg + texture.jpg como OBRAS DE GALERÍA: filete 1px, caption técnica 11px,
           revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.
#faq       6 acordeones honestos (280ms): ¿Hacen solo un evento por noche realmente?
           ¿Qué técnica incluye el arriendo (audio, luces, proyector)? ¿Puedo traer mi
           banquetería o DJ externo? ¿Hasta qué hora es el evento y cómo es el ruido?
           ¿Qué pasa si necesito montar el día anterior? ¿Cómo se reserva y qué garantía piden?
#reserva   Sobre var(--superficie): headline corto, teléfono hueso gigante tabular, botón ámbar,
           horarios, dirección. Micro-línea: "Responde el coordinador, no un formulario."
           Footer sobrio: marca pequeña, dirección, legal Chile, año.

## CONVERSIÓN SIEMPRE PRESENTE
Nav translúcido blur sutil con botón ámbar "Reservar visita"; hide-down/show-up + compacta
24px al scroll. Sticky CTA móvil discreto tras el hero ("Reservar visita"). Cursor
personalizado sutil (punto ámbar 6px con lerp, se agranda sobre links; desactivado en
touch/reduced-motion).

## MOTION (CSS/transiciones exactas)
Barra progreso 2px ámbar · H1 clip-reveal líneas stagger .12s ease(0.22,1,0.36,1) · galería
cortina clip-path · count-up 1.2s · flip-cards 280ms · hovers 150–250ms · TODO respeta
prefers-reduced-motion (si activo: nada se mueve).

## REGLAS DURAS (incumplir una = trabajo rechazado)
PROHIBIDO: personas/caras/manos, fiestas desbordadas, testimonios con foto o estrellas,
marquee de logos, contadores falsos, planes SaaS "más elegido", iconitos centrales
(copas/torta/globos), glow/neón, #000/#FFF puros, overlays negros planos sobre foto, emojis,
stock externo, inglés. Fondo oscuro en capas SIEMPRE (nada de bloques blancos).
Todo español de Chile, alt descriptivos, contraste AA, focus-visible ring ámbar,
::selection ámbar/texto oscuro, responsive real a 360px, radios 0, padding vertical ≥112px
desktop / ≥72px móvil, max-width ~1200px.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando
ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/. 4) npm run propuesta --
noctua-oscuro, revisa en navegador y corrige. 5) npm run propuestas:build -- noctua-oscuro
hasta cero errores. No agregues dependencias nuevas; no toques package.json ni
vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS y arco de
conversión (¿precio, técnica y un-solo-evento-por-noche respondidos antes del footer?
¿Se siente salón que cobra 8M o quincho con parlantes?). Itera hasta lo primero.
Calidad > velocidad. 7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a centros de eventos
chilenos de estética oscura premium (20 sitios A+B Maps: BordeRío, Centro La Reina,
San Ginés, Metropolitan, etc.). Si queda "bien pero genérica", itera hasta que un
gerente de eventos la envidie para sí misma.
