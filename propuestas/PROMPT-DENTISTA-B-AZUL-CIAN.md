# SUPER-PROMPT — DENTISTA B · GRUPO "AZUL / CIAN — CONFIANZA CLÍNICA (claro)" (13 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para clínicas y consultas dentales chilenas cuya estética real (medida por
captura renderizada) es **clara con identidad azul/cian**: papel blanco dominante, acento azul
presente pero contenido, sensación de higiene + respaldo institucional. Es la estética del
centro dental que vende confianza clínica: protocolo, puntualidad y convenios — no sonrisas
de stock ni azules neón de farmacia.
Benchmark REAL verificado del rubro en este mismo segmento: Tratamientos Dentales Santiago
(tratamientosdentalessantiago.cl), Polimédica (polimedica.cl), Clínica Dental CIO (ciodental.cl),
Clínica Dental Chicureo (clinicadentalchicureo.cl), Centro Odontológico 12 de Febrero
(12defebrero.cl), Nuvident (nuvident.cl), Trema Dental (trema.cl). Internacionalmente, el
canónico del azul dental confiable: Pacific Dental Services (pacificdentalservices.com),
Heartland Dental (heartland.com) — azul como firma de protocolo, evidencia antes que promesa.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`.
   Copia ARCHIVOS, no node_modules. Nombre de carpeta: `propuestas/dentista-b-azul-cian`.
2. En tu copia: package.json → "name": "dentista-b-azul-cian". meta.json →
   { "title": "AZURA — Centro Dental · Propuesta Órbita", "client": "AZURA",
     "brand": "AZURA", "sector": "dentista",
     "description": "Propuesta clara con acento azul/cian para centro dental chileno: protocolo, puntualidad y convenios." }.
   index.html → <html lang="es">, <title>AZURA — Centro Dental</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- dentista-b-azul-cian`
   - `npm run propuestas:build -- dentista-b-azul-cian` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/dentista-b-azul-cian/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: AZURA — Centro Dental
H1: "Tu hora a la hora, tu tratamiento por escrito."
Subhead: "Centro dental con especialidades coordinadas: una sola visita, un solo presupuesto.
Convenios con isapres y pago en cuotas sin interés."
CTA principal: "Reservar hora" · secundario: "Ver valores"
Urgencias: +56 9 8765 4321 (texto visible permanente: "¿Urgencia dental? Llámanos")
Contacto: contacto@azura.cl · Puente Alto, Santiago
Horario: Lun–Vie 9:00–20:00 · Sáb 9:30–14:00

## PALETA (regla dura, variables CSS en :root)
--papel #F8FBFD · --tinta #132430 (azul-negro clínico) · --gris #6F8090 · --linea #D8E2E9 ·
ACENTO ÚNICO --azul-clinico #0E7CB5 (<5% de la UI: CTA principal, kickers, estados activos,
links; el resto neutro). border-radius: 0 en TODO. Cero sombras difusas: separación por
filetes 1px var(--linea) y whitespace.

## PASO 0 — MEDIA (public/media/, máx 4 imágenes; caras/sonrisas de stock = descartar)
recepcion.jpg 16:9 recepción luminosa VACÍA con mostrador blanco y pared azul pálido ·
box.jpg 16:9 box dental con sillón vacío, luz natural y monitor de radiografía apagado ·
detalle.jpg 1:1 macro de superficie vidrio esmerilado con reflejo azul suave ·
instrumental.jpg 4:5 bodegón de instrumental esterilizado en pouches azules alineados sobre
bandeja blanca.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero: kicker azul uppercase ("CENTRO DENTAL · PUENTE ALTO"), H1 gigante leading
           0.92 tracking negativo, subhead 2 líneas, CTA sólido tinta + link subrayado animado
           a #valores. recepcion.jpg derecha 7/12, caption técnica 11px. Banda fina bajo el
           hero: "Especialidades coordinadas en un solo lugar · Urgencias dentales durante
           horario".
#especialidades Índice numerado 01–06 editorial (NO cards): Diagnóstico digital · Rehabilitación
           y estética · Endodoncia · Odontopediatría · Periodoncia · Ortodoncia y alineadores.
           Hover/tap expande 64px revelando duración típica y valor "desde" (280ms).
#cifras    Count-up al entrar en viewport (IntersectionObserver): "+13 años en la comuna",
           "+11.000 atenciones", "95% de horas puntuales", "5 especialistas titulados".
           Números tabulares serif grandes.
#valores   "Valores claros, presupuesto en el día": tabla editorial 6 filas precio desde en
           CLP tabulares (evaluación + radiografía panorámica, limpieza completa, resina,
           endodoncia, extracción, blanquimiento) + nota honesta: "El presupuesto se entrega
           por escrito después del diagnóstico. Nunca partimos un tratamiento sin tu
           aprobación."
#metodo    3 columnas filete superior 1px: 01 Hora y evaluación → 02 Presupuesto por escrito →
           03 Tratamiento coordinado entre especialistas. Sin iconitos centrales: números
           grandes apagados.
#voces     3 testimonios SIN foto, SIN estrellas: cita serif itálica grande, atribución
           "— Patricia, paciente desde 2021 · Puente Alto". Rotación fade lenta, pausable.
#faq       6 acordeones honestos (280ms): ¿Atienden urgencias el mismo día? ¿Cuánto cuesta la
           primera evaluación? ¿Trabajan con isapres? ¿Los niños son atendidos igual?
           ¿Cuántas visitas necesita mi tratamiento? ¿Qué formas de pago aceptan?
#reserva   Headline corto + teléfono tabular gigante + CTA + horarios + mapa-línea de
           dirección. Footer sobrio legal CL (razón social AZURA SpA, SII, año).

## CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Reservar" fijo + teléfono de urgencias visible en desktop; nav hide-down/
show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Reservar hora").
Subrayados animados 200ms.

## MOTION (CSS/transiciones exactas)
Barra progreso scroll 2px azul clínico · H1 clip-reveal por líneas stagger .12s
ease(0.22,1,0.36,1) · fade+rise 24px al entrar (once) · hovers 150–250ms · acordeones 280ms ·
count-up 1.2s · TODO respeta prefers-reduced-motion (si activo: nada se mueve).

## REGLAS DURAS (incumplir una = trabajo rechazado)
- Fondo claro siempre (papel según paleta). PROHIBIDO secciones negras/noche u overlays
  oscuros sobre fotos.
- PROHIBIDO stock dental cliché: sonrisas perfectas de banco de imágenes, bocas abiertas con
  espejo, dientes animados, niños de stock. Solo las imágenes ya presentes en public/media
  (nada externo, nada nuevo). Si falta una, tipografía y layout llevan el diseño solos.
- Sin badges de rating, sin marquee de logos de isapres, sin contadores falsos, sin
  testimonios con foto, sin planes "más elegido", sin iconitos de diente como pieza central.
- Accent en MENOS del 5% de la UI. Radios 0. Botón sólido ink sobre fondo claro.
- Todo texto y alt en español de Chile, alt="" descriptivos, contraste AA, focus-visible ring
  azul clínico, ::selection con color de marca, hero impecable a 360px, padding vertical
  ≥112px desktop / ≥72px móvil, max-width ~1200px.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando
ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/. 4) npm run propuesta --
dentista-b-azul-cian, revisa en navegador y corrige. 5) npm run propuestas:build --
dentista-b-azul-cian hasta cero errores. No agregues dependencias nuevas; no toques
package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS
y arco de conversión (¿valor, urgencia y convenios respondidos antes del footer?). 7) Resumen
breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a centros dentales chilenos
(grupo con esta estética). Si queda "bien pero genérica", itera hasta que una clínica la
envidie para sí misma.
