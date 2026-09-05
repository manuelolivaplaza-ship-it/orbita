export type Oficio = {
  slug: string;
  index: string;
  title: string;
  lede: string;
  lead: string;
  body: string;
  image: string;
  imageAlt: string;
  includes: string[];
};

export const oficios: Oficio[] = [
  {
    slug: "identidad",
    index: "01",
    title: "Identidad",
    lede: "Un sistema que se puede repetir. No un logo que se celebra una vez.",
    lead: "Una marca que necesita ochenta páginas para explicarse todavía no es una marca. Ordenamos lo que ya existe hasta que se puede decir en una mesa — y aplicar un martes.",
    body: "Trabajamos con empresas que ya tienen nombre, clientes y una historia a medias. No inventamos universos: afinamos tipo, color, tono y criterio. El resultado es una frase, una familia de piezas y una forma de decir que no. La guía cabe en una sentada. Si no se consulta, falló.",
    image: "/images/taller.jpg",
    imageAlt:
      "Muro del estudio con pruebas de color, grillas y papeles prendidos con cinta.",
    includes: [
      "Posicionamiento en una frase",
      "Tipo, color y grilla",
      "Tono verbal — cómo se habla y cómo no",
      "Piezas madre y una guía corta",
    ],
  },
  {
    slug: "producto",
    index: "02",
    title: "Producto",
    lede: "Interfaces que un turno entiende. El diseño del software que se usa de verdad.",
    lead: "Diseñamos el producto digital que una empresa opera cuando nadie está mirando. Formularios, fichas, torres de control, flujos que duelen. Claridad antes que novedad.",
    body: "Nos sentamos con quien usa la herramienta, no solo con quien la encarga. Mapeamos excepciones, el café de las once, el dato que vive en un cuaderno. Prototipamos en cortes semanales. Si hay que explicar un botón, el botón sobra. Entregamos un sistema que un equipo de ingeniería puede heredar sin traducir nuestro dialecto.",
    image: "/images/mesa.jpg",
    imageAlt: "Mesa de trabajo con papel, lápiz, regla y muestras de color a la luz de la mañana.",
    includes: [
      "Descubrimiento dentro de la operación",
      "Arquitectura de información e interfaz",
      "Prototipos que se pulsan",
      "Criterio y acompañamiento al equipo",
    ],
  },
  {
    slug: "sitios",
    index: "03",
    title: "Sitios",
    lede: "Páginas que cargan, se leen y convierten. Sin teatro de agencia.",
    lead: "Un sitio no es un brochure con scroll. Es la única pieza que controlas del todo: mensaje, prueba, formulario, velocidad. Lo tratamos como tal.",
    body: "Escribimos en español de Chile. Tipografía que se lee a los cincuenta y a los veinte. Fotografía que podría ser de acá. Formularios que llegan. WhatsApp a un toque. Construimos en Next.js, rápido, claro, sin plantillas disfrazadas. Un sitio contemporáneo, para nosotros, es uno que una persona entiende sin pedir ayuda.",
    image: "/images/hero.jpg",
    imageAlt: "El estudio en Avenida Italia, mesa de roble y ventanal hacia Ñuñoa.",
    includes: [
      "Arquitectura, copy y diseño",
      "Desarrollo en Next.js",
      "Landings de campaña, si hacen falta",
      "Medición de lo que se puede actuar",
    ],
  },
  {
    slug: "sistemas",
    index: "04",
    title: "Sistemas",
    lede: "Una sola manera de hablar, en toda la empresa.",
    lead: "No un kit de botones. Un lenguaje: tono, ritmo, componentes, reglas. Para que el siguiente producto no empiece de cero y el anterior no se vea abandonado.",
    body: "Los sistemas que nadie abre son decoración. Los que hacemos caben en el flujo de trabajo: tokens, componentes, ejemplos con copy real, un criterio de sí y de no. Acompañamos al equipo interno hasta que el sistema se usa sin nosotros en la sala. Eso, no un Figma de 200 frames, es un sistema de diseño.",
    image: "/images/ventana.jpg",
    imageAlt: "Luz de mañana sobre un muro de yeso, cortina de lino y un alféizar.",
    includes: [
      "Principios y tokens",
      "Librería de componentes",
      "Documentación que se consulta",
      "Acompañamiento al equipo interno",
    ],
  },
];

export function getOficio(slug: string) {
  return oficios.find((item) => item.slug === slug);
}
