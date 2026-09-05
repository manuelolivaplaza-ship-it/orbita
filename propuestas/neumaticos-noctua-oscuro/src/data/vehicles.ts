export type Vehicle = {
  id: string;
  brand: string;
  model: string;
  year: string;
  kind: "turismo" | "suv" | "camioneta" | "sport";
  width: number;
  profile: number;
  rim: number;
};

export const vehicles: Vehicle[] = [
  { id: "swift", brand: "Suzuki", model: "Swift", year: "2018–2025", kind: "turismo", width: 185, profile: 65, rim: 15 },
  { id: "sail", brand: "Chevrolet", model: "Sail", year: "2016–2023", kind: "turismo", width: 185, profile: 65, rim: 15 },
  { id: "versa", brand: "Nissan", model: "Versa", year: "2020–2025", kind: "turismo", width: 195, profile: 65, rim: 15 },
  { id: "208", brand: "Peugeot", model: "208", year: "2021–2025", kind: "turismo", width: 205, profile: 55, rim: 16 },
  { id: "corolla-cross", brand: "Toyota", model: "Corolla Cross", year: "2021–2025", kind: "suv", width: 215, profile: 60, rim: 17 },
  { id: "sportage", brand: "Kia", model: "Sportage", year: "2017–2025", kind: "suv", width: 225, profile: 60, rim: 17 },
  { id: "tucson", brand: "Hyundai", model: "Tucson", year: "2016–2025", kind: "suv", width: 225, profile: 60, rim: 17 },
  { id: "rav4", brand: "Toyota", model: "RAV4", year: "2019–2025", kind: "suv", width: 225, profile: 60, rim: 18 },
  { id: "cx5", brand: "Mazda", model: "CX-5", year: "2018–2025", kind: "suv", width: 225, profile: 55, rim: 19 },
  { id: "qashqai", brand: "Nissan", model: "Qashqai", year: "2018–2025", kind: "suv", width: 215, profile: 60, rim: 17 },
  { id: "hilux", brand: "Toyota", model: "Hilux", year: "2016–2025", kind: "camioneta", width: 265, profile: 65, rim: 17 },
  { id: "ranger", brand: "Ford", model: "Ranger", year: "2016–2025", kind: "camioneta", width: 265, profile: 65, rim: 17 },
  { id: "l200", brand: "Mitsubishi", model: "L200", year: "2016–2025", kind: "camioneta", width: 265, profile: 70, rim: 16 },
  { id: "amarok", brand: "Volkswagen", model: "Amarok", year: "2017–2025", kind: "camioneta", width: 255, profile: 65, rim: 17 },
  { id: "320", brand: "BMW", model: "320i", year: "2016–2024", kind: "sport", width: 225, profile: 45, rim: 18 },
  { id: "gti", brand: "Volkswagen", model: "Golf GTI", year: "2015–2024", kind: "sport", width: 225, profile: 40, rim: 18 },
];

export const faqs = [
  {
    q: "¿Los precios incluyen IVA?",
    a: "Sí. Todo lo que ves está con IVA incluido. El montaje y el balanceo se cotizan aparte, por rueda.",
  },
  {
    q: "¿Puedo llegar sin hora?",
    a: "En horario diurno, a veces. En cita nocturna, no: el taller trabaja con un auto a la vez. Reserva. Toma doce minutos.",
  },
  {
    q: "¿Montan marcas que no son NOCTUA?",
    a: "Montamos lo que traigas, con la misma calibración. El catálogo propio es lo que recomendamos para Chile.",
  },
  {
    q: "¿Hay garantía?",
    a: "Dos años o 40.000 km contra defecto de fabricación. Alineación de control a los 1.000 km, sin costo, con cita.",
  },
  {
    q: "¿Despachan a regiones?",
    a: "Sí. RM en 24 h. V–VIII en 48 h. Norte y sur austral, 3 a 5 días. El montaje, en Huechuraba o en un taller asociado.",
  },
  {
    q: "¿Qué es el índice nocturno?",
    a: "Una nota interna (0–100) que cruza agarre en mojado, ruido y contraste del dibujo bajo faros. No reemplaza la etiqueta europea. La explica para quien conduce de noche.",
  },
];

export const voices = [
  {
    quote:
      "Subí a Farellones un sábado a las seis. Hielo negro en la última curva. El Cumbre no cantó.",
    name: "Camila R.",
    where: "Lo Barnechea · Mazda CX-5",
  },
  {
    quote:
      "La Hilux va cargada a Antofagasta dos veces al mes. El Atacama no se abre con el calor.",
    name: "Héctor M.",
    where: "Quilicura · Toyota Hilux",
  },
  {
    quote:
      "Ruta 68, invierno, de noche. Antes perdía el auto en el mismo charco. Ya no.",
    name: "Daniela S.",
    where: "Viña del Mar · Peugeot 208",
  },
];
