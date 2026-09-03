# SUPER-PROMPT — SOFTWARE B · GRUPO "CLARO MINIMALISTA / NEUTRO" (165 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para fábricas de software y consultoras tecnológicas chilenas cuya estética real
es **clara, neutra y disciplinada**: blanco/gris dominante, tipografía sobria, grilla estricta,
acento contenido. Es la estética de la empresa de software seria que vende procesos, no humo:
criterio de ingeniería, precios claros y continuidad — ni landing de agencia creativa ni
dashboard sci-fi.
Benchmark REAL verificado del rubro en este mismo segmento (medido por captura renderizada):
Bsale Chile (bsale.cl), Chilean Software Consultores (chileansoftware.cl), CRM Chile
(crmchile.cl), RedRRHH (redrrhh.com), Altanet (altanet.cl), PeopleWork (peoplework.cl),
Grupo Inexoos (inexoos.com). Internacionalmente, el canónico del software claro minimal:
Stripe (stripe.com), Basecamp (basecamp.com), Plausible (plausible.io), Baremetrics
(baremetrics.com) — aire, jerarquía tipográfica, el producto explicado con palabras.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`.
   Copia ARCHIVOS, no node_modules. Nombre de carpeta: `propuestas/software-b-claro`.
2. En tu copia: package.json → "name": "software-b-claro". meta.json →
   { "title": "BALIZA — Software de Gestión · Propuesta Órbita", "client": "BALIZA",
     "brand": "BALIZA", "sector": "software",
     "description": "Propuesta clara y neutra para fábrica de software chilena: ingeniería seria, precios transparentes." }.
   index.html → <html lang="es">, <title>BALIZA — Software de Gestión</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- software-b-claro`
   - `npm run propuestas:build -- software-b-claro` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/software-b-claro/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: BALIZA — Software de Gestión
H1: "Software de gestión que tu pyme entiende desde el primer día."
Subhead: "Facturación, inventario y reportes en un solo sistema, implementado por personas
que responden el teléfono. Sin licencias eternas ni letra chica."
CTA principal: "Agendar demo" · secundario: "Ver precios"
Soporte: +56 2 2965 4821 (texto visible permanente: "¿Ayuda? Habla con un ingeniero, no con un bot")
Contacto: hola@baliza.cl · Providencia, Santiago
Horario: Lun–Vie 9:00–18:30 · Soporte prioritario hasta las 20:00

## PALETA (regla dura, variables CSS en :root)
--papel #FAFAF8 · --tinta #1A1D21 (grafito) · --gris #737B82 · --linea #E2E4E1 ·
ACENTO ÚNICO --azul-acero #2B5F8F (<5% de la UI: CTA principal, estados activos, links).
border-radius: 0 en TODO. Cero sombras difusas: separación por filetes 1px var(--linea)
y whitespace.

## PASO 0 — MEDIA (public/media/, máx 4 imágenes)
oficina.jpg 16:9 oficina de desarrollo luminosa y VACÍA, mesas de madera clara, luz norte,
monitores apagados · teclado.jpg 1:1 macro de teclas mecánicas con luz rasante suave ·
wireframe.jpg 4:5 wireframes a lápiz sobre papel milimetrado con regla y lápiz encima ·
rack.jpg 16:9 rack de servidores en sala limpia con LEDs tenues, tomado de lado.
Caras/manos/logos falsos/pantallas con texto ilegible gigante = descartar y regenerar.
Las UI nunca protagonizan: lo que vende aquí es el método y la palabra clara.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero: kicker uppercase tracking amplio ("SOFTWARE DE GESTIÓN · SANTIAGO"), H1 gigante
           leading 0.92 tracking negativo, subhead 2 líneas, CTA sólido tinta + link subrayado
           animado a #precios. oficina.jpg derecha 7/12, caption técnica 11px. Banda fina bajo
           el hero: "Implementación guiada incluida · Datos migrados por nuestro equipo".
#modulos   Índice numerado 01–06 editorial (NO cards): Facturación electrónica SII · Inventario
           y bodega · Ventas y CRM · Reportes y tableros · Integración con bancos · App móvil
           para terreno. Hover/tap expande 64px revelando qué resuelve y para qué rubro sirve
           (280ms).
#cifras    Count-up al entrar en viewport (IntersectionObserver): "+14 años operando",
           "+230 pymes activas", "98% renueva cada año", "1 ingeniero asignado por cliente".
           Números tabulares serif grandes.
#precios   "Precios claros, sin letra chica": tabla editorial 4 filas plan mensual en UF/CLP
           tabulares (Esencial, Equipo, Empresa, con nota de qué incluye cada uno y cuántos
           usuarios) + nota honesta: "El valor final se confirma después de levantar tus
           procesos. Si no te sirve, te lo decimos antes de cobrarte."
#metodo    3 columnas filete superior 1px: 01 Levantamiento de procesos (1 semana) →
           02 Migración de datos y capacitación → 03 Acompañamiento continuo. Sin iconitos
           centrales: números grandes apagados.
#voces     3 testimonios SIN foto, SIN estrellas: cita serif itálica grande, atribución
           "— Marcela, gerente de operations · distribuidora en Quilicura". Rotación fade
           lenta, pausable.
#faq       6 acordeones honestos (280ms): ¿Cuánto tarda la implementación? ¿Migran mis datos
           de Excel o del sistema anterior? ¿Qué pasa si necesito un cambio al sistema?
           ¿Cómo se paga, contrato o mes a mes? ¿Los datos son míos y puedo exportarlos?
           ¿Qué soporte incluye el plan?
#reserva   Headline corto + teléfono tabular gigante + CTA "Agendar demo" + horarios +
           mapa-línea de dirección. Footer sobrio legal CL (razón social BALIZA SpA, SII, año).

## CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Agendar demo" fijo + teléfono de soporte visible en desktop; nav hide-down/
show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Agendar demo").
Subrayados animados 200ms.

## MOTION (CSS/transiciones exactas)
Barra progreso scroll 2px azul acero · H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) ·
fade+rise 24px al entrar (once) · hovers 150–250ms · acordeones 280ms · count-up 1.2s ·
TODO respeta prefers-reduced-motion (si activo: nada se mueve).

## REGLAS DURAS (incumplir una = trabajo rechazado)
- Fondo claro siempre (papel según paleta). PROHIBIDO secciones negras/noche u overlays
  oscuros sobre fotos.
- PROHIBIDO stock tech cliché: gente con casco VR, código Matrix, handshakes, oficinas con
  post-its de colores, pantallas con dashboards falsos protagonistas. Solo las imágenes ya
  presentes en public/media (nada externo, nada nuevo). Si falta una, tipografía y layout
  llevan el diseño solos.
- Sin badges de rating, sin marquee de logos de clientes, sin contadores falsos, sin
  testimonios con foto, sin planes SaaS "más elegido", sin iconitos de engranaje/nube/cohete
  como pieza central.
- Accent en MENOS del 5% de la UI. Radios 0. Botón sólido ink sobre fondo claro.
- Todo texto y alt en español de Chile, alt="" descriptivos, contraste AA, focus-visible ring
  azul acero, ::selection con color de marca, hero impecable a 360px, padding vertical
  ≥112px desktop / ≥72px móvil, max-width ~1200px.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando
ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/. 4) npm run propuesta --
software-b-claro, revisa en navegador y corrige. 5) npm run propuestas:build --
software-b-claro hasta cero errores. No agregues dependencias nuevas; no toques
package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS
y arco de conversión (¿precio, soporte-humano y método respondidos antes del footer?).
7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a empresas de software
chilenas (grupo de 165 sitios con esta estética). Si queda "bien pero genérica", itera hasta
que una consultora la envidie para sí misma.
