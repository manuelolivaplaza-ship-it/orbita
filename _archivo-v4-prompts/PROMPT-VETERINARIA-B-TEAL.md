# SUPER-PROMPT — VETERINARIA B · GRUPO "TEAL / VERDE AGUA" (12 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para clínicas veterinarias chilenas cuya estética real (medida por captura
renderizada) es **clara con identidad teal/verde-agua**: papel blanco dominante, acento teal
presente pero contenido, sensación de higiene + cercanía. Es la estética de la veterinaria
moderna de barrio alto/moderno: vende frescura, limpieza y trato amable sin caer en lo infantil.
Benchmark REAL verificado del rubro en este mismo segmento: VetDog (veterinariavetdog.cl),
Clan Piedra Roja (veterinariaclan.cl), La Serena Vet (laserenavet.cl), Integravet Ñuñoa,
Veterinaria el Rodeo (veterinariaelrodeo.cl), Veterinaria Providencia
(veterinariaprovidencia.cl), Premev (premev.cl), Las Torres (veterinarialastorres.cl).
Internacionalmente, el canónico del teal clínico-amable: Bond Vet (bondvet.com),
VCA Animal Hospitals (vcahospitals.com), Greencross Vets (greencrossvet.com.au).

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`.
   Copia ARCHIVOS, no node_modules. Nombre de carpeta: `propuestas/veterinaria-b-teal`.
2. En tu copia: package.json → "name": "veterinaria-b-teal". meta.json →
   { "title": "LAGUNA VET — Centro Médico Veterinario · Propuesta Órbita", "client": "LAGUNA VET" }.
   index.html → <html lang="es">, <title>LAGUNA VET — Centro Médico Veterinario</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- veterinaria-b-teal`
   - `npm run propuestas:build -- veterinaria-b-teal` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/veterinaria-b-teal/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: LAGUNA VET — Centro Médico Veterinario
H1: "Cuidado experto, trato de barrio."
Subhead: "Consulta, vacunación y cirugía menor con médicos titulados.
Precios claros desde la primera visita."
CTA principal: "Agendar hora" · secundario: "Ver servicios"
Urgencias: +56 9 8765 4321
Contacto: hola@lagunavet.cl · Providencia, Santiago
Horario: Lun–Sáb 9:30–20:00 · Dom 10:00–14:00

## PALETA (regla dura, variables CSS en :root)
--papel #FBFDFC · --tinta #14332B · --gris #748B84 · --linea #D8E5E0 ·
ACENTO ÚNICO --teal #1F8A7D (<5-8% de la UI: CTA principal, kickers, estados activos, links;
el resto neutro). border-radius: 0 en TODO. Cero sombras difusas: separación por filetes
1px var(--linea) y whitespace.

## PASO 0 — MEDIA (public/media/, máx 4 imágenes; caras/manos/mascotas tiernas = descartar)
recepcion.jpg 16:9 recepción luminosa VACÍA con mostrador blanco y pared verde-agua pálido ·
consulta.jpg 16:9 box de consulta ordenado: balanza veterinaria, mesa de examen, luz natural ·
detalle.jpg 1:1 macro de superficie cerámica verde-agua con luz suave ·
farmacia.jpg 4:5 bodegón de frascos y sobres veterinarios alineados sobre bandeja blanca.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero: kicker teal uppercase ("CENTRO MÉDICO VETERINARIO · PROVIDENCIA"), H1 gigante
           leading 0.92 tracking negativo, subhead 2 líneas, CTA sólido tinta + link subrayado
           animado. recepcion.jpg derecha 7/12, caption técnica 11px. Banda fina: "Atención con
           hora o por orden de llegada · Urgencias durante horario de operación".
#servicios Índice numerado 01–06 editorial (NO cards): Consulta general · Vacunación ·
           Cirugía menor · Laboratorio · Odontología veterinaria · Control peso y nutrición.
           Hover/tap expande 64px revelando duración típica y precio "desde" (280ms).
#cifras    Count-up al entrar: "+9 años en el barrio", "+11.000 pacientes", "4,8★ Google"
           (solo como cifra tipográfica, NUNCA badge), "Médicos titulados siempre los mismos".
#precios   "Precios claros, sin sorpresas": tabla editorial 6 filas precio desde CLP tabulares
           + nota honesta: "El valor final se confirma en la consulta. Nunca partimos un
           tratamiento sin tu aprobación."
#metodo    3 columnas filete superior 1px: 01 Agenda o llegada → 02 Consulta explicada →
           03 Plan de cuidado. Números grandes apagados.
#voces     3 testimonios SIN foto SIN estrellas: cita serif itálica grande, comilla teal,
           atribución "— Rodrigo, tutora de Luna · Providencia". Rotación fade lenta, pausable.
#faq       6 acordeones honestos (280ms): ¿Necesito hora? ¿Cuánto cuesta la consulta?
           ¿Atienden urgencias? ¿Qué vacunas necesita mi mascota? ¿Atienden gatos y perros?
           ¿Qué formas de pago aceptan?
#reserva   Headline corto + teléfono tabular gigante + CTA + horarios + dirección.
           Footer sobrio legal CL (razón social GIRE, SII, año).

## CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Agendar" fijo; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil
discreto tras el hero ("Agendar hora"). Subrayados animados 200ms.

## MOTION (CSS/transiciones exactas)
Barra progreso scroll 2px teal · H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) ·
fade+rise 24px al entrar (once) · hovers 150–250ms · acordeones 280ms · count-up 1.2s · TODO
respeta prefers-reduced-motion (si activo: nada se mueve).

## REGLAS DURAS (incumplir una = trabajo rechazado)
- Fondo claro siempre. PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos.
- PROHIBIDO stock de mascotas: perritos felices corriendo, gatitos en canastas, manos y patas,
  humanos abrazando animales. Solo las imágenes ya presentes en public/media (nada externo).
- Sin badges de rating, sin marquee de logos, sin contadores falsos, sin testimonios con foto,
  sin planes SaaS, sin iconitos de patita/hueso/corazón como pieza central.
- Radios 0. Botón sólido ink sobre fondo claro. Todo texto y alt en español de Chile,
  contraste AA, focus-visible ring teal, ::selection teal/texto oscuro, hero impecable a 360px,
  padding vertical ≥112px desktop / ≥72px móvil, max-width ~1200px.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando
ids/anclas. 3) Genera y verifica las 4 imágenes. 4) npm run propuesta -- veterinaria-b-teal,
revisa en navegador y corrige. 5) npm run propuestas:build -- veterinaria-b-teal hasta cero
errores. No agregues dependencias nuevas; no toques package.json ni vite.config.ts salvo
necesidad crítica. 6) Auto-revisión contra REGLAS DURAS y arco de conversión (¿precio y
quién-atiende respondidos antes del footer?). 7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a veterinarias chilenas
(grupo de 12 sitios con esta estética). Si queda "bien pero genérica", itera hasta que una
clínica la envidie para sí misma.
