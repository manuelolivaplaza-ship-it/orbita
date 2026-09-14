# Propuesta de rediseño — ecommerce claro (grupo "Claro minimalista / neutro")

Propuesta comercial reutilizable para tiendas online y marcas que venden por internet en Chile
con estética real clara, limpia y luminosa (referencias: Froens, Essentiality, Everlane).

## Identidad demo

`PROMPT.md` no existe en `_plantilla`, por lo que la identidad demo se definió aquí,
coherente con el super-prompt `PROMPT-ECOMMERCE-CLARO-MINIMALISTA.md`:

- **Marca demo:** "Alameda Store" — tienda online chilena de objetos y textiles para la casa.
  Nombre genérico chileno (Avenida Alameda), sin colisiones con marcas reales conocidas del rubro.
- **Paleta:** blanco #FFFFFF dominante + hueso #FAF9F6; tinta grafito neutra #1F1F1D;
  gris texto #565650; acento verde oliva contenido #4A5A3E (~3% de la UI: CTA comprar/CTA fija,
  estados activos y links); divisores #E8E6E0.
- **Tipografías:** Archivo (display, Google Fonts) + Inter (texto). Números tabulares en precios
  CLP, umbrales y plazos.
- **Arco:** #coleccion → #precios → #cifras → #metodo → #faq → #contacto.
- Radios 0, sin secciones oscuras, accent < 5%, español de Chile.

## Comandos

Desde la raíz `C:\Users\manue\OneDrive\Desktop\órbita`:

- Dev: `npm run propuesta -- ecommerce-claro` → http://localhost:3010
- Build: `npm run propuestas:build -- ecommerce-claro`

Nota de rutas: el build corre con base `/propuestas/<slug>/`; las imágenes siempre se referencian
como `${import.meta.env.BASE_URL}media/x.jpg`.
