export type Parcel = {
  id: string;
  name: string;
  altitude: number;
  hectares: number;
  soil: string;
  grapes: string;
  aspect: string;
  note: string;
};

export const parcels: Parcel[] = [
  {
    id: "strix",
    name: "Strix",
    altitude: 1720,
    hectares: 3.2,
    soil: "Granito y gravas gruesas",
    grapes: "Syrah",
    aspect: "Poniente",
    note: "La ladera que recibe el último sol. Pieles más gruesas, pimienta más evidente.",
  },
  {
    id: "umbra",
    name: "Umbra",
    altitude: 1810,
    hectares: 2.1,
    soil: "Granito descompuesto",
    grapes: "Syrah, Garnacha",
    aspect: "Norte-este",
    note: "La parcela más alta. Noches más largas, acidez más vertical.",
  },
  {
    id: "alba",
    name: "Alba",
    altitude: 1480,
    hectares: 2.8,
    soil: "Aluvión, caliza y canto rodado",
    grapes: "Pedro Ximénez, Moscatel de Alejandría",
    aspect: "Fondo de valle",
    note: "Suelos más profundos, brisa del río Elqui. Blancos de sal y hierba seca.",
  },
  {
    id: "nyctea",
    name: "Nyctea",
    altitude: 1640,
    hectares: 1.3,
    soil: "Mica, cuarzo y limo",
    grapes: "Garnacha, Roussanne",
    aspect: "Oriente",
    note: "La primera en ver la luna. Rendimientos bajos, racimos sueltos.",
  },
];
