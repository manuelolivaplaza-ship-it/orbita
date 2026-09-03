# PROMPT.md — Identidad del proyecto

## Cliente (ficticio para la propuesta)
**CUMBRES Propiedades** — corredora de propiedades premium con base en Las Condes / Lo Barnechea, Santiago.
Posicionamiento: propiedad de autor, asesoría 1:1, soberanía total del dueño sobre su ficha.
Tono: español de Chile, sobrio, editorial, sin exclamaciones, sin jerga vendedora.

## Headline literal (hero)
«Propiedades que se muestran de noche y se firman con claridad.»

Kicker hero: VENTA · ARRIENDO · ESTUDIO DE TASACIÓN

Sub hero: Representación exclusiva para dueños y compradores exigentes en el sector oriente:
tasación honesta, fotografía profesional y un filtro de postulantes que ahorra meses.

## Paleta (tema oscuro premium, tinta cálida)
| Token | Hex | Uso |
|---|---|---|
| --fondo | #100e0b | fondo general noche cálida |
| --superficie | #17140f | tarjetas, tabla precios |
| --superficie-alta | #1e1a14 | hover, acordeones abiertos |
| --filete | #2a251c | divisores 1px |
| --hueso | #ece5d8 | texto principal |
| --gris | #a89f8f | texto secundario |
| --gris-tenue | #8d8577 | captions, notas |
| --laton | #c9a86b | ACENTO (<5% UI): CTA principal, links, estados activos |
| --tinta | #0a0908 | fondos profundos, footer |

Contraste AA obligatorio. Prohibido #000 y #FFF puros. Botón sólido claro (--hueso con texto --tinta) sobre fondo tinta.

## Tipografías
- Display: **Newsreader** (serif editorial, leading 0.92–0.95, tracking -0.02em, ital disponible).
- Body/UI: **Inter** (400/500/600).
- Números tabulares OBLIGATORIOS (`font-variant-numeric: tabular-nums`) en UF, m², gastos comunes, comisiones y cifras.

## Reglas de marca
- Radios 0 en todo (solo 50% para círculos perfectos si los hubiera).
- Sin fotos stock de personas. Solo `public/media/*.png` ya presentes (living, terraza, cocina, fachada).
- Sin badges de rating, sin marquee de logos, sin contadores animados falsos, sin testimonios con foto, sin iconitos casa/llave/lupa centrales.
- Acento latón solo en: CTA principal, links activos, estados activos, kickers puntuales.
- Ids fijos de secciones: **#precios**, **#cifras**, **#faq** — anclas del nav siempre funcionales.

## Datos comerciales (coherentes entre secciones)
- Comisión venta: 2% del precio de venta + IVA (incluye tasación, fotografía profesional, publicación en portales, filtro de postulantes, acompañamiento en notaría).
- Arriendo amoblado: 50% de un mes de arriendo + IVA.
- Administración de arriendo: 10% de la renta mensual (gestión de cobro, mantenimiento, renovaciones).
- Cifras: 14 años operando · 380+ propiedades vendidas · 1.200 arriendos administrados · 96.000 m² gestionados · 23 comunas cubiertas · 140 visitas coordinadas al mes.
