declare module 'virtual:propuestas-catalogo' {
  export interface PropuestaCatalogEntry {
    /** Slug de la carpeta en propuestas/ y de la URL /propuesta/<slug> */
    slug: string;
    /** Nombre corto de la marca ficticia, para la card */
    brand: string;
    /** Título completo del meta.json */
    title: string;
    /** Slug de sector (ver src/data/sectores.ts) */
    sector: string;
    /** Familia de diseño: claro | oscuro | teal | azul | '' */
    variant: string;
    /** Descripción de una línea para la card */
    description?: string;
  }

  const catalogo: PropuestaCatalogEntry[];
  export default catalogo;
}
