# SUPER-PROMPT — MARKETING B · GRUPO "AZUL / CIAN — CONFIANZA CORPORATIVA (medio)" (10 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para agencias de marketing chilenas cuya estética real (medida por captura
renderizada) es **de superficie media con identidad azul/cian**: ni papel blanco ni noche
profunda — fondos gris-azulados medios dominan (≈60% del área), acento cian presente pero
contenido, sensación de solidez corporativa y respaldo técnico. Es la estética de la
agencia-productora que vende presencia profesional con datos: Creatempo (creatempo.com),
Imagina FX (imaginafx.cl), HL Digital Group (hldigital.cl), Dood (dood.cl), Bitplay
(bitplay.cl), Cachai (cachaiagenciadigital.cl). Internacionalmente, el canónico del azul
corporativo como infraestructura: IBM (ibm.com) — azul de protocolo, superficies medias,
tipografía clara sobre gris-azulado, evidencia antes que promesa.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`. Copia ARCHIVOS, no
   node_modules. Nombre de carpeta: `propuestas/marketing-b-azul-cian` (YA CREADA, con los
   archivos base copiados; solo ajusta nombres/títulos y escribe el código).
2. En tu copia: package.json → "name": "marketing-b-azul-cian". meta.json →
   { "title": "PULSO — Agencia de Marketing · Propuesta Órbita", "client": "PULSO",
     "brand": "PULSO", "sector": "marketing",
     "description": "Propuesta de superficie media con acento azul/cian para agencias de marketing chilenas: respaldo corporativo y datos." }.
   index.html → <html lang="es">, <title>PULSO — Agencia de Marketing</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- marketing-b-azul-cian`
   - `npm run propuestas:build -- marketing-b-azul-cian` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/marketing-b-azul-cian/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: PULSO — Agencia de Marketing
H1: "Presencia digital con respaldo de datos."
Subhead: "Pauta, contenido y analítica bajo un solo plan mensual.
Reportes claros y un ejecutivo que responde por su nombre."
CTA principal: "Solicitar propuesta" · secundario: "Ver servicios"
Línea fija: +56 2 2840 3344
Contacto: hola@pulso.cl · Las Condes, Santiago
Horario: Lun–Vie 9:00–18:30

## PALETA (regla dura — la superficie media tiene capas, variables CSS en :root)
--fondo #26303C (azul pizarra MEDIO, más claro que una noche) · --superficie #2E3947 ·
--superficie-alta #37434F · --filete #48545F · --hueso #E9EDF0 (texto, NUNCA #FFF) ·
--gris-calido #9FABB5 · ACENTO ÚNICO --cian #35A7CE (<5% de la UI: CTA sólido, kickers,
estados activos, links). PROHIBIDO #000/#FFF puros, secciones blancas o negras puras,
azules neón, glow en texto, gradientes púrpura-azul genéricos. border-radius: 0 en TODO.
Profundidad por capas de fondo + filetes 1px (nunca sombras difusas).

## PASO 0 — MEDIA (public/media/, máx 4 imágenes; caras/manos/equipos de stock = descartar)
hero.jpg 16:9 oficina abierta en penumbra azulada VACÍA, ventanal con ciudad fuera de foco,
luz fría de tarde · estudio.jpg 16:9 estudio audiovisual vacío: ciclorama gris-azul, luces
apagadas en pértiga · detalle.jpg 1:1 macro de vidrio esmerilado con reflejo cian suave ·
consola.jpg 4:5 bodegón de audífonos profesionales y consola sobre superficie grafito con
luz cian lateral.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero pantalla completa: kicker cian uppercase ("AGENCIA DE MARKETING · LAS
           CONDES"), H1 gigante hueso leading 0.95 tracking negativo, subhead gris cálido,
           CTA sólido cian texto tinta + link subrayado animado a #servicios. hero.jpg
           lateral 7/12 integrado por degradado hacia --fondo (NUNCA overlay plano).
           Banda fina bajo el hero: "Planes mensuales con ejecutivo dedicado · Reporte
           con números auditables".
#servicios Índice numerado 01–06 lista editorial (NO cards): Estrategia y posicionamiento ·
           Pauta digital y paid media · Contenido y producción audiovisual · SEO técnico ·
           Redes sociales · Analítica y dashboards. Hover/tap expande 64px revelando
           duración típica y precio "desde" CLP (280ms). En móvil tap = acordeón.
#cifras    Count-up tabulares al entrar (IntersectionObserver): "+10 años operando",
           "+120 cuentas atendidas", "91% retención anual", "1 ejecutivo senior por
           cuenta". Evidencia numérica en vez de before/after.
#precios   "Precios claros, sin sorpresas": tabla sobria 6 filas precio desde en CLP
           tabulares (diagnóstico, plan mensual integral, gestión de pauta, producción
           audiovisual, auditoría SEO, reporte personalizado) + nota honesta: "El valor
           final se confirma tras el diagnóstico. Nunca partimos sin objetivos escritos
           y aprobados."
#metodo    3 columnas filetes verticales 1px: 01 Diagnóstico → 02 Plan y KPIs por escrito →
           03 Ejecución y reporte mensual. Números grandes cian apagado.
#voces     3 testimonios SIN foto SIN estrellas: cita serif itálica grande, comilla cian,
           atribución "— Marcela, gerenta de marketing · industria servicios". Rotación
           fade lenta, pausable.
#faq       6 acordeones honestos (280ms): ¿Hay contrato de permanencia? ¿Cuánto cuesta la
           propuesta? ¿Quién trabaja mi cuenta? ¿Cada cuánto reportan? ¿Qué pasa si los
           números no mejoran? ¿Qué formas de pago aceptan?
#reserva   Sobre var(--superficie): headline corto, teléfono hueso gigante tabular, botón
           cian, horarios, dirección. Micro-línea: "Respondemos personalmente. Sin call
           centers." Footer sobrio legal CL (razón social PULSO SpA, SII, año).

## CONVERSIÓN SIEMPRE PRESENTE
Nav translúcido blur sutil con botón cian "Solicitar"; hide-down/show-up + compacta 24px al
scroll. Sticky CTA móvil discreto tras el hero ("Solicitar propuesta"). Subrayados animados
200ms.

## MOTION (CSS/transiciones exactas)
Barra progreso scroll 2px cian · H1 clip-reveal líneas stagger .12s ease(0.22,1,0.36,1) ·
fade+rise 24px al entrar (once) · hovers 150–250ms · acordeones 280ms · count-up 1.2s · TODO
respeta prefers-reduced-motion (si activo: nada se mueve).

## REGLAS DURAS (incumplir una = trabajo rechazado)
- Superficie media SIEMPRE: ninguna sección blanca pura ni negra pura; todo vive entre
  --fondo, --superficie y --superficie-alta. Contraste AA verificado sobre fondos medios.
- PROHIBIDO stock de agencia cliché: equipos posando, reuniones con post-its, manos sobre
  laptops, cabinas de radio de banco de imágenes. Solo las imágenes ya presentes en
  public/media (nada externo, nada nuevo).
- Sin badges de rating, sin marquee de logos de clientes, sin contadores falsos, sin
  testimonios con foto, sin planes "más elegido", sin iconitos centrales (cohete/
  bombilla/gráfico), emojis, inglés.
- Accent en MENOS del 5% de la UI. Radios 0. Botón sólido cian con texto tinta oscura.
- Todo texto y alt en español de Chile, alt="" descriptivos, focus-visible ring cian,
  ::selection cian/texto tinta, responsive real a 360px, padding vertical ≥112px desktop /
  ≥72px móvil, max-width ~1200px.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando
ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/. 4) npm run propuesta --
marketing-b-azul-cian, revisa en navegador y corrige. 5) npm run propuestas:build --
marketing-b-azul-cian hasta cero errores. No agregues dependencias nuevas; no toques
package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS
DURAS y arco de conversión (¿precio, quién-trabaja-la-cuenta y cómo-reporta respondidos
antes del footer?). 7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a agencias de marketing
chilenas (grupo con esta estética). Si queda "bien pero genérica", itera hasta que una
agencia la envidie para sí misma.
