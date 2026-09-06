export const site = {
  name: "HELIO",
  legalName: "Helio Corredora de Propiedades SpA",
  tagline: "La luz es el dato.",
  description:
    "Corredora de departamentos y casas en Providencia, Ñuñoa y Las Condes. Publicamos solo propiedades con orientación norte comprobada. Valores en UF. Visitas a la hora en que entra el sol.",
  url: "https://helio.cl",
  rut: "76.410.338-6",
  founded: 2018,
  years: 8,
  email: "mesa@helio.cl",
  phone: "+56 2 2335 4410",
  phoneHref: "tel:+56223354410",
  mobile: "+56 9 7762 1088",
  mobileHref: "tel:+56977621088",
  whatsapp:
    "https://wa.me/56977621088?text=Hola%2C%20quiero%20agendar%20una%20visita%20en%20HELIO.",
  instagram: "https://instagram.com/helio.corredora",
  address: {
    line: "Los Conquistadores 2048",
    city: "Providencia, Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    maps: "https://maps.google.com/?q=Los+Conquistadores+2048+Providencia+Santiago",
  },
  metro: "Pedro de Valdivia · 8 min a pie",
  hours: "Lunes a viernes, 9:30 a 18:30",
  hoursShort: "Lun–Vie 9:30–18:30",
  visitNote: "Las visitas se agendan a la hora de sol de cada planta.",
  coproch: "COPROCH Nº 5.204",
  lat: -33.425,
  lng: -70.617,
  coords: "33°25′30″ S · 70°37′01″ W",
  honorario: "Honorario en UF, por escrito, antes de la primera visita al Conservador.",
} as const;

export const nav = [
  { href: "/lista", label: "Lista" },
  { href: "/criterio", label: "Criterio" },
  { href: "/barrios", label: "Barrios" },
  { href: "/mesa", label: "Mesa" },
] as const;

export const stats = [
  { value: "Norte", label: "Condición de lista" },
  { value: "UF", label: "Unidad de valor" },
  { value: "8", label: "Años de mesa" },
  { value: "33°S", label: "Latitud de trabajo" },
] as const;

export const principles = [
  {
    n: "01",
    title: "El norte no se negocia.",
    text: "En Santiago, a 33° sur, el sol de invierno entra solo por el norte. Un departamento que mira al sur puede ser más grande. En julio es más oscuro. No entra a esta lista.",
  },
  {
    n: "02",
    title: "La visita es a esa hora.",
    text: "No agendamos a las 18:00 para que «se vea lindo». Cada ficha tiene una ventana de sol. Si no puede a esa hora, esperamos. El portal no decide el reloj.",
  },
  {
    n: "03",
    title: "La ficha dice lo que duele.",
    text: "Gastos comunes, contribuciones, bodega, por qué se vende. Si el vecino poniente es un edificio de dieciocho pisos, está escrito. Preferimos perder un encargo a ganar una visita ciega.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Encargo",
    text: "Comuna, rango en UF, dormitorios, y si el norte es irrenunciable — aquí lo es. Respondemos en 24 horas hábiles.",
  },
  {
    n: "02",
    title: "Ficha",
    text: "Le enviamos dos o tres plantas que calzan. Orientación medida, no declarada. Si no hay nada, se lo decimos.",
  },
  {
    n: "03",
    title: "Visita de sol",
    text: "A la hora en que esa planta recibe. Llevamos plano, rol y la lectura del plan regulador. Duración: una hora.",
  },
  {
    n: "04",
    title: "Oferta",
    text: "Si hay encargo, la oferta va en UF, por escrito. El honorario también. El Conservador hace el resto.",
  },
] as const;

export const faqs = [
  {
    q: "¿Por qué solo orientación norte?",
    a: "Porque en esta latitud el norte es la única fachada que recibe sol directo en invierno. El resto del año sigue siendo la pieza más estable. Un departamento norponiente de tarde puede ser hermoso en enero y duro en junio. Lo medimos; no lo prometemos.",
  },
  {
    q: "¿Trabajan con casas o solo departamentos?",
    a: "Las dos. La casa entra si el patio o el estar reciben el norte. Un sitio de 400 m² con el jardín al sur no es un solar para esta mesa.",
  },
  {
    q: "¿Los valores están en UF?",
    a: "Siempre. Precio de lista, gastos comunes y honorario. Las contribuciones se informan en pesos del período vigente. No mezclamos unidades para que el número «se vea menos».",
  },
  {
    q: "¿Cobran por visitar?",
    a: "La visita de un departamento en lista no tiene costo. El honorario de corredora se pacta si hay mandato de compra o de venta, en UF, por escrito.",
  },
  {
    q: "¿Publican en portales?",
    a: "A veces, y siempre después de esta web. La lista de HELIO no se arma con lo que sobra de un portal. Se arma con lo que pasa el criterio.",
  },
  {
    q: "¿Hacen arriendos?",
    a: "No. Comprar y vender. El arriendo pide otro reloj y otra mesa.",
  },
] as const;
