# SUPER-PROMPT — SOFTWARE B · GRUPO "AZUL / CIAN — CONFIANZA CORPORATIVA (claro)" (10 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para empresas de tecnología y servicios informáticos chilenas cuya estética real
(medida por captura renderizada) es **clara con identidad azul/cian**: papel blanco dominante,
acento azul presente pero contenido, sensación de solidez corporativa. Es la estética del
proveedor TI que vende continuidad operativa: respaldo, soporte que responde y contratos
serios — ni startup juguetona ni banco aburrido.
Benchmark REAL verificado del rubro en este mismo segmento: NetRed Chile (netred.cl),
Valuetech (valuetech.cl), WAY MAKER Capacitaciones (waymaker.cl), C.Unix Chile (cunix.net),
Álvaro Cofre Desarrollo Web (alvarocofre.dev), DELL V Región / Valpotec (valpotec.cl).
Internacionalmente, el canónico del azul corporativo confiable: Atlassian (atlassian.com),
Zendesk (zendesk.com), Freshworks (freshworks.com) — azul como firma de confianza,
tipografía clara, evidencia antes que promesa.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`.
   Copia ARCHIVOS, no node_modules. Nombre de carpeta: `propuestas/software-b-azul-cian`.
2. En tu copia: package.json → "name": "software-b-azul-cian". meta.json →
   { "title": "ALTIVA — Tecnología Corporativa · Propuesta Órbita", "client": "ALTIVA",
     "brand": "ALTIVA", "sector": "software",
     "description": "Propuesta clara con acento azul/cian para empresa TI chilena: confianza corporativa, soporte real." }.
   index.html → <html lang="es">, <title>ALTIVA — Tecnología Corporativa</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- software-b-azul-cian`
   - `npm run propuestas:build -- software-b-azul-cian` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/software-b-azul-cian/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: ALTIVA — Tecnología Corporativa
H1: "La tecnología de tu empresa, sin sobresaltos."
Subhead: "Soporte informático, redes y sistemas para pymes que no pueden detenerse.
Respuesta en menos de 2 horas hábiles, compromiso por escrito."
CTA principal: "Solicitar evaluación" · secundario: "Ver planes"
Soporte: +56 2 2965 4821 (texto visible permanente: "¿Problema ahora? Llámanos")
Contacto: contacto@altiva.cl · Las Condes, Santiago
Horario: Lun–Vie 8:30–18:30 · Guardia técnica sábados

## PALETA (regla dura, variables CSS en :root)
--papel #F9FBFC · --tinta #14212B (azul-negro corporativo) · --gris #6E7E88 · --linea #DCE3E8 ·
ACENTO ÚNICO --azul-cian #0B76A8 (<5% de la UI: CTA principal, kickers, estados activos,
links; el resto neutro). border-radius: 0 en TODO. Cero sombras difusas: separación por
filetes 1px var(--linea) y whitespace.

## PASO 0 — MEDIA (public/media/, máx 4 imágenes; personas/caras/logos falsos = descartar)
lobby.jpg 16:9 hall corporativo de vidrio y acero VACÍO, luz diurna fría, líneas verticales ·
patch.jpg 16:9 patch panel de red ordenado, cables azules peinados y etiquetados ·
vidrio.jpg 1:1 macro de vitrina esmerilada con reflejo azul suave ·
planos.jpg 4:5 diagrama de topología de red impreso sobre mesa blanca con regla metálica.
Stock cliché (servers con humo, cascos VR, handshakes) = descartar y regenerar.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero: kicker azul uppercase ("TECNOLOGÍA CORPORATIVA · SANTIAGO"), H1 gigante
           leading 0.92 tracking negativo, subhead 2 líneas, CTA sólido tinta + link subrayado
           animado a #planes. lobby.jpg derecha 7/12, caption técnica 11px. Banda fina bajo el
           hero: "SLA por escrito · Técnicos certificados · Respuesta < 2 hrs hábiles".
#servicios Índice numerado 01–06 editorial (NO cards): Soporte HelpDesk · Redes y
           conectividad (switching, Wi-Fi, VPN) · Ciberseguridad básica empresarial · Respaldo
           y continuidad · Microsoft 365 / Google Workspace · Equipos y arriendo de hardware.
           Hover/tap expande 64px revelando qué incluye y para qué tamaño de empresa (280ms).
#cifras    Count-up al entrar en viewport (IntersectionObserver): "+16 años operando",
           "+140 empresas atendidas", "97% de tickets resueltos el mismo día", "< 2 hrs
           respuesta garantizada por SLA". Números tabulares serif grandes.
#planes    "Planes claros, compromiso por escrito": tabla editorial 3 filas mensual en UF/CLP
           tabulares (Esencial hasta 15 usuarios, Corporativo hasta 50, A medida) cada una con
           qué incluye (horas, SLA, visitas) + nota honesta: "Sin permanencia obligatoria.
           Si no cumplimos el SLA, ese mes se descuenta."
#metodo    3 columnas filete superior 1px: 01 Diagnóstico gratuito (visita + inventario) →
           02 Plan y prioridades por escrito → 03 Operación con reporte mensual. Sin iconitos
           centrales: números grandes apagados.
#voces     3 testimonios SIN foto, SIN estrellas: cita serif itálica grande, atribución
           "— Rodrigo, jefe de administración · importadora en Estación Central". Rotación
           fade lenta, pausable.
#faq       6 acordeones honestos (280ms): ¿Cuánto demoran en responder un problema?
           ¿Trabajan con contrato o mes a mes? ¿Atienden en terreno o remoto? ¿Qué cubre la
           ciberseguridad básica? ¿Pueden tomar el soporte de otro proveedor a medias? ¿Qué
           pasa con nuestros datos si nos cambiamos?
#reserva   Headline corto + teléfono tabular gigante + CTA "Solicitar evaluación" + horarios +
           mapa-línea de dirección. Footer sobrio legal CL (razón social ALTIVA SpA, SII, año).

## CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Evaluación" fijo + teléfono de soporte visible en desktop; nav hide-down/
show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Solicitar
evaluación"). Subrayados animados 200ms.

## MOTION (CSS/transiciones exactas)
Barra progreso scroll 2px azul cian · H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) ·
fade+rise 24px al entrar (once) · hovers 150–250ms · acordeones 280ms · count-up 1.2s ·
TODO respeta prefers-reduced-motion (si activo: nada se mueve).

## REGLAS DURAS (incumplir una = trabajo rechazado)
- Fondo claro siempre (papel según paleta). PROHIBIDO secciones negras/noche u overlays
  oscuros sobre fotos.
- PROHIBIDO stock tech cliché: gente con casco VR, código Matrix, candados gigantes sobre
  teclados, handshakes, nubes 3D. Solo las imágenes ya presentes en public/media (nada
  externo, nada nuevo). Si falta una, tipografía y layout llevan el diseño solos.
- Sin badges de rating, sin marquee de logos de clientes, sin contadores falsos, sin
  testimonios con foto, sin planes SaaS "más elegido", sin iconitos de escudo/nube/engranaje
  como pieza central.
- Accent en MENOS del 5% de la UI. Radios 0. Botón sólido ink sobre fondo claro.
- Todo texto y alt en español de Chile, alt="" descriptivos, contraste AA, focus-visible ring
  azul cian, ::selection con color de marca, hero impecable a 360px, padding vertical
  ≥112px desktop / ≥72px móvil, max-width ~1200px.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando
ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/. 4) npm run propuesta --
software-b-azul-cian, revisa en navegador y corrige. 5) npm run propuestas:build --
software-b-azul-cian hasta cero errores. No agregues dependencias nuevas; no toques
package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS
y arco de conversión (¿precio, SLA y método respondidos antes del footer?). 7) Resumen breve
final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a proveedores TI chilenos
(grupo con esta estética). Si queda "bien pero genérica", itera hasta que una empresa de
soporte la envidie para sí misma.
