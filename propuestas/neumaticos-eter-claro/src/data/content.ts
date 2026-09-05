export const rites = [
  {
    n: "01",
    title: "Leer",
    text: "El costado del neumático no es decoración. Ancho, perfil, aro, carga y velocidad. Si no coinciden, no montamos.",
  },
  {
    n: "02",
    title: "Confirmar",
    text: "Stock y precio el mismo día. Si no hay, te lo decimos ahora. No te hacemos perder la mañana.",
  },
  {
    n: "03",
    title: "Montar",
    text: "Desmonte, talón, balanceo, torque. Alineación 3D si el auto la pide. Sales con la presión escrita.",
  },
] as const;

export const servicios = [
  {
    slug: "montaje",
    title: "Montaje y balanceo",
    price: "Incluido",
    text: "En cada neumático que vendemos. Talón, plomo, torque al valor del fabricante.",
  },
  {
    slug: "alineacion",
    title: "Alineación 3D",
    price: "Desde $42.000",
    text: "Cuatro ruedas, informe impreso. El auto que tira a un lado no es un misterio.",
  },
  {
    slug: "rotacion",
    title: "Rotación",
    price: "Desde $18.000",
    text: "Cada 10.000 km. La huella se gasta mejor si se mueve.",
  },
  {
    slug: "ponchadura",
    title: "Ponchadura",
    price: "Desde $16.000",
    text: "Si el daño está en la banda, se repara. Si está en el flanco, se dice la verdad.",
  },
  {
    slug: "presion",
    title: "Presión y TPMS",
    price: "Sin cargo",
    text: "La revisamos al pasar. Un manómetro honesto vale más que una marca cara.",
  },
  {
    slug: "cadenas",
    title: "Cadenas y nieve",
    price: "Consulta",
    text: "Temporada de Farellones: te decimos si basta M+S, si hace falta 3PMSF, o si llevas cadena.",
  },
] as const;

export const faqs = [
  {
    q: "¿Cómo sé qué medida lleva mi auto?",
    a: "Está escrita en el costado del neumático — 205/55 R16, por ejemplo — y también en una etiqueta en el marco de la puerta del conductor o en la tapa del estanque. Si no la encuentras, tráenos la patente: la leemos.",
  },
  {
    q: "¿El precio incluye el montaje?",
    a: "Sí. Los valores de esta casa incluyen montaje, balanceo e IVA. La alineación 3D es aparte, y te la proponemos solo si el auto la necesita.",
  },
  {
    q: "¿Cuánto demora la instalación?",
    a: "Un juego de cuatro: entre 45 y 70 minutos, con hora agendada. Sin hora, el mismo día si hay cupo. Una ponchadura, menos de media hora.",
  },
  {
    q: "¿Trabajan con todas las marcas?",
    a: "Traemos Michelin, Continental, Bridgestone, Pirelli, Goodyear, Hankook y Yokohama. Si tu medida es rara, la pedimos. No vendemos remanentes ni goma sin fecha de fabricación legible.",
  },
  {
    q: "¿Despachan a regiones?",
    a: "Despacho a la Región Metropolitana en 24 horas. A regiones, el neumático viaja y el montaje lo hace tu taller de confianza — o vienes a La Reina y sales rodando.",
  },
  {
    q: "¿Qué pasa si no hay stock de mi medida?",
    a: "Te lo decimos al tiro, con fecha de llegada. No reservamos un auto en el elevador para descubrir a las cinco que la goma no está.",
  },
  {
    q: "¿Sirve un all-season para Farellones?",
    a: "Para ir y volver un sábado, un M+S o un CrossClimate bien inflado suele bastar. Si nevó de verdad, lleva cadenas. El compuesto de verano, en hielo, no es valentía: es física.",
  },
] as const;

export const voces = [
  {
    quote:
      "Tres furgones. Llego con las medidas anotadas en un cuaderno y salgo antes del almuerzo. Nunca me han dicho «vuelva mañana» con el pan encima.",
    who: "Panadería Los Robles · Ñuñoa",
    since: "Cliente desde 2018",
  },
  {
    quote:
      "Les escribí un viernes a las siete con una ponchadura en Irarrázaval. El sábado a las nueve estaba montada. Sin teatro.",
    who: "C. Vidal · La Reina",
    since: "Cliente desde 2021",
  },
  {
    quote:
      "Subo a Valle Nevado todos los sábados de temporada. Me explicaron la diferencia entre M+S y invierno de verdad. No me vendieron lo más caro.",
    who: "Ida a Farellones",
    since: "Temporada 2024–25",
  },
] as const;

export const sidewall = [
  { code: "205", role: "Ancho", detail: "Milímetros de banda. Lo que ves de frente." },
  { code: "55", role: "Perfil", detail: "Alto del flanco, en % del ancho. Más bajo, menos aire que perdonar." },
  { code: "R", role: "Construcción", detail: "Radial. Casi todo lo que rueda hoy." },
  { code: "16", role: "Aro", detail: "Diámetro del rin, en pulgadas." },
  { code: "91V", role: "Carga y velocidad", detail: "Cuánto peso y a qué ritmo. Si no coincide con la placa, no va." },
] as const;
