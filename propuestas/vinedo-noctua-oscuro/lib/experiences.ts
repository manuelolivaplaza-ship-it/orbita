export const experiences = [
  {
    id: "cata",
    name: "Cata de medianoche",
    duration: "90 min",
    time: "21:30",
    price: 45000,
    people: "2 a 8 personas",
    image: "/images/glass.jpg",
    summary: "Cuatro vinos, pan de masa madre, aceitunas del valle. Sin discurso largo.",
    detail:
      "En la terraza de piedra, con el cielo encima. Se cata Strix, Alba, Umbra y una botella de guarda. Isidora conduce: poco teatro, mucha precisión. Incluye agua, pan y un plato frío de cabra y aceitunas.",
  },
  {
    id: "cielo",
    name: "Viñedo y cielo",
    duration: "3 h",
    time: "20:45",
    price: 65000,
    people: "2 a 6 personas",
    image: "/images/observatory.jpg",
    summary: "Recorrido de parcelas a oscuras, cata y un rato de observación astronómica.",
    detail:
      "Caminamos Strix y Umbra con linterna cálida. Luego cata de tres vinos y media hora con telescopio —el Elqui es reserva de cielo oscuro; el viñedo está a minutos de los observatorios. Abrigo grueso recomendado.",
  },
  {
    id: "mesa",
    name: "Mesa Noctua",
    duration: "4 h",
    time: "21:00",
    price: 120000,
    people: "4 a 10 personas",
    image: "/images/mesa.jpg",
    summary: "Cena de cuatro tiempos en el viñedo. Un menú, cinco copas, una fogata.",
    detail:
      "Cocina de fuego y valle: cabrito, trigo, hierbas de la quebrada, postre de membrillo. Los vinos se sirven por tiempo, no por ficha. Solo viernes y sábado, luna mediante. Reserva con diez días.",
  },
];

export const clubTiers = [
  {
    id: "menguante",
    name: "Menguante",
    cadence: "Cada trimestre",
    bottles: 2,
    price: 52000,
    perks: [
      "Dos botellas de la cosecha vigente",
      "Despacho incluido a todo Chile",
      "10 % en visitas",
    ],
  },
  {
    id: "plenilunio",
    name: "Plenilunio",
    cadence: "Cada trimestre",
    bottles: 3,
    price: 89000,
    featured: true,
    perks: [
      "Tres botellas, una de ellas de guarda",
      "Despacho incluido a todo Chile",
      "Cata de medianoche una vez al año",
      "15 % en la tienda",
    ],
  },
  {
    id: "umbra",
    name: "Umbra",
    cadence: "Cada trimestre",
    bottles: 4,
    price: 140000,
    perks: [
      "Cuatro botellas + un magnum al año",
      "Asignación de Noctua Gran Guarda",
      "Mesa Noctua para dos, una vez al año",
      "Retiro preferente en vendimia",
    ],
  },
];
