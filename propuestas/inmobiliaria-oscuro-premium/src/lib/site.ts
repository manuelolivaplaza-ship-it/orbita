export const site = {
  name: "Meridiano",
  legalName: "Meridiano SpA",
  tagline: "Territorio, no inventario.",
  description:
    "Corredora de presentación privada en Santiago oriente, Zapallar y los lagos del sur. Inventario off-market, valores en UF, mandato escrito.",
  url: "https://meridiano.cl",
  email: "mesa@meridiano.cl",
  phone: "+56 2 2654 3311",
  phoneHref: "tel:+56226543311",
  mobile: "+56 9 8766 3311",
  whatsapp: "https://wa.me/56987663311",
  rut: "76.441.908-4",
  cbr: "CBR Santiago Nº 2.184",
  founded: 2014,
  ufNota: "Valores en UF. Referencia al 2 de septiembre de 2026.",
  hours: "Lunes a viernes, 9:30 a 19:00",
  lastHour: "Última presentación a las 18:00",
  address: {
    line: "Av. Nueva Costanera 4111, of. 1201",
    city: "Vitacura, Santiago",
    region: "Región Metropolitana",
    postal: "7630000",
    country: "Chile",
  },
  coords: "33°24′12″ S · 70°36′08″ W",
  lat: -33.4037,
  lng: -70.6022,
} as const;

export const nav = [
  { href: "/propiedades", label: "Mesa" },
  { href: "/territorio", label: "Territorio" },
  { href: "/estudio", label: "Estudio" },
  { href: "/consulta", label: "Consulta" },
] as const;

export const stats = [
  { label: "Casa fundada", value: "2014" },
  { label: "Latitud de trabajo", value: "33° S" },
  { label: "Unidad de valor", value: "UF" },
  { label: "Territorios", value: "4" },
] as const;

export const principles = [
  {
    folio: "01",
    title: "No hay vitrina.",
    text: "El 70% de lo que movemos no llega a portales. Si está en la mesa, es porque el mandante pidió discreción.",
  },
  {
    folio: "02",
    title: "La dirección se entrega en persona.",
    text: "Publicamos comuna, metros y orientación. La calle, después de calificar el mandato.",
  },
  {
    folio: "03",
    title: "UF, por escrito, antes de visitar.",
    text: "Honorario de corredora en la hoja de encargo. Lo que no está firmado, no está pactado.",
  },
] as const;

export const steps = [
  {
    folio: "01",
    title: "Brief",
    body: "Cincuenta minutos. Presupuesto en UF, orientación, colegio, silencio. Lo que no cabe, se descarta esa tarde.",
  },
  {
    folio: "02",
    title: "Territorio",
    body: "No partimos por el inmueble. Partimos por la comuna, la ladera, el viento y la luz norte.",
  },
  {
    folio: "03",
    title: "Presentación",
    body: "Tres propiedades, no treinta. Se visitan con cita. El mandante sabe quién entra.",
  },
  {
    folio: "04",
    title: "Mandato",
    body: "Promesa, CBR, contribuciones, gastos comunes. Acompañamos hasta la escritura. No desaparecemos en la tasación.",
  },
] as const;

export const faqs = [
  {
    q: "¿Por qué no están en Portal Inmobiliario?",
    a: "Porque el mandante no quiere visitas de fin de semana ni fotos circulando. El inventario de Meridiano se presenta con nombre y con cita. Si busca vitrina, hay otros.",
  },
  {
    q: "¿Cobran por la primera reunión?",
    a: "No. El brief de cincuenta minutos no tiene honorario. Si tomamos el mandato de compra, el honorario es el 2% más IVA sobre el precio de escritura, a cargo de quien nos encarga. En venta, se pacta en la hoja de encargo.",
  },
  {
    q: "¿Trabajan fuera de Santiago?",
    a: "Santiago oriente, la costa de Zapallar y Cachagua, Puerto Varas y el valle de Colchagua. Si el inmueble está en otro territorio, se lo decimos en la primera respuesta y le indicamos a quién llamar.",
  },
  {
    q: "¿La dirección aparece en la ficha?",
    a: "Comuna, barrio y coordenadas de sector. La calle se entrega en la presentación, cuando hay mandato o un brief calificado. No es teatro: es lo que piden los mandantes.",
  },
  {
    q: "¿Tasan?",
    a: "Hacemos una lectura de mercado en UF por metro y por comparable. La tasación formal para crédito hipotecario la hace el banco. No confundimos las dos cosas.",
  },
  {
    q: "¿Aceptan propiedades para vender?",
    a: "Sí, con mandato exclusivo. Pedimos escritura, certificado de CBR, contribuciones al día y un set fotográfico que producimos nosotros. Si el inmueble no está para esta mesa, se lo decimos.",
  },
] as const;

export const team = [
  {
    slug: "amparo-valdes",
    name: "Amparo Valdés",
    role: "Socia",
    territory: "Santiago oriente",
    bio: "Once años presentando casas en Vitacura, Lo Barnechea y Las Condes. Antes, desarrollo inmobiliario. Sabe leer una ladera antes de leer un plano.",
    image: "/images/amparo.jpg",
    phone: "+56 9 8766 3312",
  },
  {
    slug: "vicente-rivas",
    name: "Vicente Rivas",
    role: "Socio",
    territory: "Costa y lagos",
    bio: "Zapallar, Cachagua y el sur. Mandatos de familias que viven entre Santiago y el lago. El criterio es el mismo: menos fichas, mejor luz.",
    image: "/images/vicente.jpg",
    phone: "+56 9 8766 3313",
  },
  {
    slug: "magdalena-soto",
    name: "Magdalena Soto",
    role: "Mandatos",
    territory: "Family office",
    bio: "Estructuras, promesas y el papelerío que nadie quiere ver. Family offices y no residentes que compran en UF y firman a distancia.",
    image: "/images/magdalena.jpg",
    phone: "+56 9 8766 3314",
  },
] as const;

export const consultaOptions = [
  "Compra — residencia",
  "Compra — inversión",
  "Venta — mandato exclusivo",
  "Family office",
] as const;
