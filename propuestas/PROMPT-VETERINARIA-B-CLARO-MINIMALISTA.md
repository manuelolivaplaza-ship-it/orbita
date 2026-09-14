# SUPER-PROMPT — VETERINARIA B · GRUPO "CLARO MINIMALISTA / NEUTRO" (165 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para clínicas y centros veterinarios chilenos cuya estética real es **clara,
limpia y luminosa**: blanco/gris dominante, tipografía sobria, grilla disciplinada, acento
contenido. Es la estética de la veterinaria seria y ordenada: vende criterio clínico,
transparencia de precios y confianza — no caricaturas ni perritos de stock.
Benchmark REAL verificado del rubro en este mismo segmento (medido por captura renderizada):
Ballena Azul Veterinaria (ballenaazul.cl), Islavet (islavet.cl), VitaVet (vitavet.cl),
Paskana (vetpaskana.com), Vet Ramon Cruz (vetramoncruz.cl), Cordovet (cordovet.cl),
Corsos (corsos.cl), Veterinaria Antares (veterinariaantares.cl). Internacionalmente, el
canónico del diseño veterinario premium claro: Bond Vet (bondvet.com), Small Door
Veterinary (smalldoorvet.com), Modern Animal (modernanimal.com) — aire, jerarquía tipográfica,
la clínica como protagonista.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`.
   Copia ARCHIVOS, no node_modules. Nombre de carpeta: `propuestas/veterinaria-b-claro`.
2. En tu copia: package.json → "name": "veterinaria-b-claro". meta.json →
   { "title": "VITALIA — Clínica Veterinaria · Propuesta Órbita", "client": "VITALIA" }.
   index.html → <html lang="es">, <title>VITALIA — Clínica Veterinaria</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- veterinaria-b-claro`
   - `npm run propuestas:build -- veterinaria-b-claro` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/veterinaria-b-claro/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: VITALIA — Clínica Veterinaria
H1: "Medicina veterinaria seria, para toda la familia."
Subhead: "Consultas, cirugía y urgencias con criterio clínico y precios claros.
Tu mascota atendida por quien la conoce, siempre."
CTA principal: "Agendar consulta" · secundario: "Ver precios"
Urgencias: +56 9 8765 4321 (texto visible permanente: "¿Urgencia? Llámanos ahora")
Contacto: hola@vitalia.vet · Ñuñoa, Santiago
Horario: Lun–Vie 9:00–20:00 · Sáb 10:00–16:00 · Urgencias 24/7

## PALETA (regla dura, variables CSS en :root)
--papel #FAFAF7 · --tinta #16211C (verde-negro clínico) · --gris #7C8781 · --linea #DFE3DE ·
ACENTO ÚNICO --verde-clinico #2E7D5B (<5% de la UI: CTA principal, estados activos, links).
border-radius: 0 en TODO. Cero sombras difusas: separación por filetes 1px var(--linea)
y whitespace.

## PASO 0 — MEDIA (public/media/, máx 4 imágenes)
sala.jpg 16:9 sala de espera luminosa y VACÍA, luz norte, verde salvia y roble ·
quirofano.jpg 16:9 instrumental quirúrgico esterilizado ordenado sobre paño azul quirúrgico ·
detalle.jpg 1:1 macro de pelaje sano retroiluminado (sin animal reconocible) ·
farmacia.jpg 4:5 bodegón de frascos y vacunas alineados sobre bandeja blanca.
Caras/manos/perritos tiernos/logos = descartar y regenerar.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero: kicker uppercase tracking amplio ("CLÍNICA VETERINARIA · ÑUÑOA"), H1 gigante
           leading 0.92 tracking negativo, subhead 2 líneas, CTA sólido tinta + link subrayado
           animado a #precios. sala.jpg derecha 7/12, caption técnica 11px. Banda fina bajo el
           hero: "Atención por orden de llegada y hora agendada · Urgencias 24/7".
#servicios Índice numerado 01–06 editorial (NO cards): Consulta general · Vacunación y
           desparasitación · Cirugía soft tissue · Laboratorio y diagnóstico por imagen ·
           Peluquería sanitaria · Tienda veterinaria. Hover/tap expande 64px revelando
           duración típica y precio "desde" (280ms).
#cifras    Count-up al entrar en viewport (IntersectionObserver): "+12 años operando",
           "+18.000 pacientes atendidos", "94% recomienda", "2 médicos veterinarios titulados".
           Números tabulares serif grandes.
#precios   "Precios claros, sin sorpresas": tabla editorial 6 filas precio desde en CLP
           tabulares (consulta general, vacuna triple, desparasitación, perfil pre-quirúrgico,
           cirugía esterilización gato/perro, baño sanitario) + nota honesta: "El valor final
           se confirma en la consulta. Nunca partimos un tratamiento sin tu aprobación."
#metodo    3 columnas filete superior 1px: 01 Llegada y triage → 02 Diagnóstico explicado →
           03 Plan y seguimiento. Sin iconitos centrales: números grandes apagados.
#voces     3 testimonios SIN foto, SIN estrellas: cita serif itálica grande, atribución
           "— Carolina, tutora de Simba · Ñuñoa". Rotación fade lenta, pausable.
#faq       6 acordeones honestos (280ms): ¿Atienden urgencias de noche? ¿Cuánto cuesta la
           consulta? ¿Necesito hora o por orden de llegada? ¿Qué incluye la vacunación?
           ¿Atienden especies exóticas? ¿Qué formas de pago aceptan?
#reserva   Headline corto + teléfono tabular gigante + CTA + horarios + mapa-línea de dirección.
           Footer sobrio legal CL (razón social GIRE, SII, año).

## CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Agendar" fijo + teléfono de urgencias visible en desktop; nav hide-down/show-up
+ compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Agendar consulta").
Subrayados animados 200ms.

## MOTION (CSS/transiciones exactas)
Barra progreso scroll 2px verde clínico · H1 clip-reveal por líneas stagger .12s
ease(0.22,1,0.36,1) · fade+rise 24px al entrar (once) · hovers 150–250ms · acordeones 280ms ·
count-up 1.2s · TODO respeta prefers-reduced-motion (si activo: nada se mueve).

## REGLAS DURAS (incumplir una = trabajo rechazado)
- Fondo claro siempre (papel según paleta). PROHIBIDO secciones negras/noche u overlays
  oscuros sobre fotos.
- PROHIBIDO stock de mascotas: perritos con estetoscopio, gatitos en cajas, manos y patas,
  antes/después. Solo las imágenes ya presentes en public/media (nada externo, nada nuevo).
  Si falta una, tipografía y layout llevan el diseño solos.
- Sin badges de rating, sin marquee de logos, sin contadores falsos, sin testimonios con foto,
  sin planes SaaS "más elegido", sin iconitos de patita/hueso/corazón como pieza central
  (máximo UNA línea de huella como divisor sutil en TODO el sitio).
- Accent en MENOS del 5% de la UI. Radios 0. Botón sólido ink sobre fondo claro.
- Todo texto y alt en español de Chile, alt="" descriptivos, contraste AA, focus-visible ring
  verde clínico, ::selection con color de marca, hero impecable a 360px, padding vertical
  ≥112px desktop / ≥72px móvil, max-width ~1200px.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando
ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/. 4) npm run propuesta --
veterinaria-b-claro, revisa en navegador y corrige. 5) npm run propuestas:build --
veterinaria-b-claro hasta cero errores. No agregues dependencias nuevas; no toques
package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS
y arco de conversión (¿precio, urgencias y quién-atiende respondidos antes del footer?).
7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a veterinarias chilenas
(grupo de 165 sitios con esta estética). Si queda "bien pero genérica", itera hasta que una
clínica la envidie para sí misma.
