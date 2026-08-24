# Propuestas

Cada **subcarpeta** tiene una URL:

`/propuesta/nombre-de-la-carpeta`

No se mezclan con Órbita. El visitante las ve dentro de un marco, aisladas.

## HTML o PDF (simple)

1. Crea `propuestas/clinica-norte`
2. Pon `index.html` o `propuesta.pdf`
3. Comparte `/propuesta/clinica-norte`

En el HTML usa rutas relativas (`./foto.jpg`).

## Sitio React / Vite (aislado)

Para una propuesta compleja (React, rutas, estado):

1. Copia la plantilla y ponle el slug:

   ```
   propuestas/_plantilla  →  propuestas/clinica-norte
   ```

2. Entra a esa carpeta y deja su propio `npm install`. Es un proyecto aparte: su React, sus estilos, sus dependencias. Órbita no las ve.

3. Desarrolla aislado:

   ```
   npm run propuesta -- clinica-norte
   ```

   Abre `http://localhost:3010`

4. Cuando esté lista para enviar:

   ```
   npm run propuestas:build -- clinica-norte
   ```

5. Comparte `/propuesta/clinica-norte`

El build sale en `propuestas/clinica-norte/dist` con la base `/propuestas/clinica-norte/`. Órbita solo sirve esa carpeta compilada, no el código fuente.

Si copias un proyecto Vite que ya tienes, el nombre de la carpeta es el slug. No hace falta tocar `base`: el script lo pone al construir.

Next.js u otro stack: tiene que poder exportarse a estáticos (`dist` o `out`) con `basePath` `/propuestas/slug/`. Si no exporta HTML, no se puede compartir así.

## meta.json

```json
{
  "title": "Sitio web y captura de leads",
  "client": "Clínica Norte",
  "brand": "Clínica Norte",
  "sector": "dental",
  "description": "Clínica dental con agenda online destacada y diseño claro.",
  "hidden": false
}
```

- `title` / `client`: título de la pestaña y del visor `/propuesta/<slug>`.
- `brand`: nombre corto de la marca para la card de la galería. Si falta, se deduce del `title`.
- `sector`: slug del sector en la galería (ver `src/data/sectores.ts`: `dental`, `legal`, `arquitectura`, `inmobiliaria`, `veterinaria`, `bienestar`, `estetica`, `marketing`, `software`, `contabilidad`, `ecommerce`, `diseno`). Si falta, se infiere del prefijo del slug (`abogado-…` → `legal`, `arquitectura-…` → `arquitectura`, etc.).
- `description`: una línea para la card de la galería.
- `hidden`: **`true` excluye la propuesta de la galería pública y del catálogo embebido en el bundle**. Úsalo para propuestas de clientes reales (datos reales de contacto): siguen funcionando por enlace directo `/propuesta/<slug>`, pero no se listan en ningún lado.
- La variante de diseño (claro / oscuro premium / teal / azul) también se infiere del sufijo del slug (`-claro`, `-oscuro*`, `-teal`, `-azul-cian`).

## Galería pública

Las propuestas con sector (explícito o inferido) se muestran en `/galeria` y en `/galeria/<sector>`, con preview en vivo. Ese enlace de sector es el que se envía a un cliente del rubro. Dentro de una propuesta, las flechas ← → (o los botones laterales) pasan a la siguiente propuesta del mismo sector.

## Notas

- Carpetas que empiezan con `_` no tienen URL (la plantilla está oculta).
- La galería solo lista propuestas con sector conocido y sin `hidden`. El resto sigue siendo solo por enlace: registrá el slug en `/admin` si querés verla en el panel.
- `npm run build` de Órbita también construye las propuestas-app.
