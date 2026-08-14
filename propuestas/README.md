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

## meta.json (opcional)

```json
{
  "title": "Sitio web y captura de leads",
  "client": "Clínica Norte"
}
```

## Notas

- Carpetas que empiezan con `_` no tienen URL (la plantilla está oculta).
- No hay listado público: solo entra quien tenga el enlace.
- `npm run build` de Órbita también construye las propuestas-app.
