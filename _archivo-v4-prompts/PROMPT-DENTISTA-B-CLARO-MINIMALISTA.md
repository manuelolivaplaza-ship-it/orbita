# SUPER-PROMPT — DENTISTA B · GRUPO "CLARO MINIMALISTA / NEUTRO" (128 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para clínicas y consultas dentales chilenas cuya estética real es **clara, limpia
y luminosa**: blanco dominante, tipografía sobria, grilla disciplinada, acento contenido. Es
la estética de la clínica dental seria y ordenada: vende criterio clínico, transparencia de
precios y calma — no sonrisas de stock ni dientes gigantes flotando.
Benchmark REAL verificado del rubro en este mismo segmento (medido por captura renderizada):
Clínica Dental Del Inca (clinicadelinca.cl), Mora Pavic Odontología (morapavic.cl), Amplus
Odontología (amplusodontologia.cl), Odontymed (odontymed.cl), Clínica Dental Adonay
(adonay.cl), Clínica Dental Dr. Vladimir Glasinovic (clinicadentalsantiago.cl).
Internacionalmente, el canónico del dental premium claro: Tendler (tendlerdental.com),
Zen Dental Studio (zendentalstudio.com), Luminous Dentistry — aire, jerarquía tipográfica,
la sala clínica como protagonista.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`.
   Copia ARCHIVOS, no node_modules. Nombre de carpeta: `propuestas/dentista-b-claro`.
2. En tu copia: package.json → "name": "dentista-b-claro". meta.json →
   { "title": "SERENA DENTAL — Clínica Odontológica · Propuesta Órbita", "client": "SERENA DENTAL",
     "brand": "SERENA DENTAL", "sector": "dentista",
     "description": "Propuesta clara minimalista para clínica dental chilena: criterio clínico, precios transparentes." }.
   index.html → <html lang="es">, <title>SERENA DENTAL — Clínica Odontológica</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- dentista-b-claro`
   - `npm run propuestas:build -- dentista-b-claro` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/dentista-b-claro/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: SERENA DENTAL — Clínica Odontológica
H1: "Odontología seria, sin sustos ni letra chica."
Subhead: "Diagnóstico explicado, presupuesto por escrito y tratamiento a tu ritmo.
El mismo dentista te acompaña de principio a fin."
CTA principal: "Agendar evaluación" · secundario: "Ver valores"
Urgencias: +56 9 8765 4321 (texto visible permanente: "¿Dolor ahora? Llámanos")
Contacto: hola@serenadental.cl · Ñuñoa, Santiago
Horario: Lun–Vie 9:00–19:30 · Sáb 10:00–14:00

## PALETA (regla dura, variables CSS en :root)
--papel #FBFBF9 · --tinta #1B2430 (azul-pizarra clínico) · --gris #7A8590 · --linea #E1E5E3 ·
ACENTO ÚNICO --azul-clinico #2C6E8F (<5% de la UI: CTA principal, estados activos, links).
border-radius: 0 en TODO. Cero sombras difusas: separación por filetes 1px var(--linea)
y whitespace.

## PASO 0 — MEDIA (public/media/, máx 4 imágenes)
sala.jpg 16:9 sala de espera luminosa y VACÍA, sillones claros, luz norte, madera pálida ·
box.jpg 16:9 box dental ordenado con sillón vacío e instrumental esterilizado sobre bandeja ·
detalle.jpg 1:1 macro de superficie cerámica blanca con luz rasante suave ·
instrumental.jpg 4:5 bodegón de espejos y sondas dentales alineados sobre tela blanca.
Caras/sonrisas de stock/bocas abiertas/dientes gigantes = descartar y regenerar.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero: kicker uppercase tracking amplio ("CLÍNICA DENTAL · ÑUÑOA"), H1 gigante
           leading 0.92 tracking negativo, subhead 2 líneas, CTA sólido tinta + link subrayado
           animado a #valores. sala.jpg derecha 7/12, caption técnica 11px. Banda fina bajo el
           hero: "Atención con hora o por urgencia · Convenios con las principales isapres".
#tratamientos Índice numerado 01–06 editorial (NO cards): Evaluación y diagnóstico digital ·
           Limpieza y profilaxis · Restauraciones estéticas · Endodoncia · Cirugía y
           extracciones · Ortodoncia y alineadores. Hover/tap expande 64px revelando duración
           típica y valor "desde" (280ms).
#cifras    Count-up al entrar en viewport (IntersectionObserver): "+15 años atendiendo en
           Ñuñoa", "+9.500 pacientes tratados", "96% recomienda la clínica", "3 dentistas
           titulados, siempre los mismos". Números tabulares serif grandes.
#valores   "Valores claros, presupuesto por escrito": tabla editorial 6 filas precio desde en
           CLP tabulares (evaluación con radiografía, limpieza, restauración resina,
           endodoncia un conducto, extracción simple, blanquimiento) + nota honesta: "El valor
           final se confirma después del diagnóstico. Nunca partimos un tratamiento sin tu
           aprobación por escrito."
#metodo    3 columnas filete superior 1px: 01 Evaluación y radiografía → 02 Diagnóstico
           explicado en palabras simples → 03 Plan de tratamiento y seguimiento. Sin iconitos
           centrales: números grandes apagados.
#voces     3 testimonios SIN foto, SIN estrellas: cita serif itálica grande, atribución
           "— Claudia, paciente desde 2019 · Ñuñoa". Rotación fade lenta, pausable.
#faq       6 acordeones honestos (280ms): ¿Atienden urgencias dentales el mismo día? ¿Cuánto
           cuesta la evaluación? ¿Trabajan con isapres o convenios? ¿El presupuesto puede
           cambiar? ¿Usan anestesia siempre? ¿Qué formas de pago aceptan?
#reserva   Headline corto + teléfono tabular gigante + CTA + horarios + mapa-línea de
           dirección. Footer sobrio legal CL (razón social SERENA DENTAL SpA, SII, año).

## CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Agendar" fijo + teléfono de urgencias visible en desktop; nav hide-down/
show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Agendar
evaluación"). Subrayados animados 200ms.

## MOTION (CSS/transiciones exactas)
Barra progreso scroll 2px azul clínico · H1 clip-reveal por líneas stagger .12s
ease(0.22,1,0.36,1) · fade+rise 24px al entrar (once) · hovers 150–250ms · acordeones 280ms ·
count-up 1.2s · TODO respeta prefers-reduced-motion (si activo: nada se mueve).

## REGLAS DURAS (incumplir una = trabajo rechazado)
- Fondo claro siempre (papel según paleta). PROHIBIDO secciones negras/noche u overlays
  oscuros sobre fotos.
- PROHIBIDO stock dental cliché: sonrisas perfectas con brocha, bocas con espejo dental,
  niños sonrientes de banco de imágenes, dientes animados. Solo las imágenes ya presentes en
  public/media (nada externo, nada nuevo). Si falta una, tipografía y layout llevan el diseño
  solos.
- Sin badges de rating, sin marquee de logos de isapres, sin contadores falsos, sin
  testimonios con foto, sin planes "más elegido", sin iconitos de diente como pieza central
  (máximo UNA línea de diente lineal como divisor sutil en TODO el sitio).
- Accent en MENOS del 5% de la UI. Radios 0. Botón sólido ink sobre fondo claro.
- Todo texto y alt en español de Chile, alt="" descriptivos, contraste AA, focus-visible ring
  azul clínico, ::selection con color de marca, hero impecable a 360px, padding vertical
  ≥112px desktop / ≥72px móvil, max-width ~1200px.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando
ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/. 4) npm run propuesta --
dentista-b-claro, revisa en navegador y corrige. 5) npm run propuestas:build -- dentista-b-claro
hasta cero errores. No agregues dependencias nuevas; no toques package.json ni vite.config.ts
salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS y arco de conversión (¿valor,
urgencia y quién-trata respondidos antes del footer?). 7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a clínicas dentales chilenas
(grupo de 128 sitios con esta estética). Si queda "bien pero genérica", itera hasta que una
clínica la envidie para sí misma.
