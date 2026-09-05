export const promises = [
  "NCh-ISO 15189",
  "Informe desde las 06:12",
  "Toma hasta las 21:00",
  "Domicilio en la RM",
  "Isapre y particular",
] as const;

export const stats = [
  { value: 12, suffix: " h", label: "el cuerpo en el analizador, de noche" },
  { value: 12, prefix: "06:", pad: 2, label: "la hora en que llega el informe" },
  { value: 3, label: "sucursales de toma en Santiago" },
  { value: 2018, label: "el año en que el turno no se apagó" },
] as const;

export const journey = [
  {
    hora: "18:12",
    title: "Entra la muestra",
    text: "Se identifica, se centrifuga, se separa el suero. El nombre no se pierde. El vial no se mezcla.",
  },
  {
    hora: "20:40",
    title: "Química clínica",
    text: "Glicemia, lípidos, hígado, riñón. Los analizadores tienen luz propia. La sala, no.",
  },
  {
    hora: "23:15",
    title: "Hormonas",
    text: "TSH, vitaminas, lo que pide más tiempo. El turno no acelera un ensayo que no debe acelerarse.",
  },
  {
    hora: "02:08",
    title: "Validación técnica",
    text: "Tomás lee las banderas. Si un número no cierra, se repite. Nadie duerme sobre un error.",
  },
  {
    hora: "04:50",
    title: "Validación médica",
    text: "Emilia comenta lo que pide conversación. Un asterisco no es un diagnóstico. Es una voz.",
  },
  {
    hora: "06:12",
    title: "El informe",
    text: "Llega a tu correo. Claro, con rangos, con un comentario cuando un número lo merece.",
  },
] as const;

export const metodo = [
  {
    n: "01",
    title: "Toma",
    text: "Amanecer o ocaso. Una sala, una silla, una punción. Si las agujas te pesan, hay tiempo. No hay número de atención en una pantalla.",
  },
  {
    n: "02",
    title: "Noche",
    text: "El análisis corre cuando Santiago apaga. No es romanticismo: es el único horario en que un laboratorio puede ser preciso y no una fábrica.",
  },
  {
    n: "03",
    title: "Alba",
    text: "El informe no es un PDF mudo. Si un valor se sale, hay una frase. Si todo está en rango, también se dice.",
  },
] as const;

export const faqs = [
  {
    q: "¿Puedo tomarme los exámenes después del trabajo?",
    a: "Sí. El turno de ocaso es lun–vie 16:00–21:00. Si el examen pide ayuno de 8 horas, cenas temprano y vienes en la tarde. El Chequeo Ocaso está armado para eso.",
  },
  {
    q: "¿A qué hora llega el informe?",
    a: "Los exámenes de rutina, a las 06:12 del día siguiente. Hormonas y vitaminas, en 24 horas. Cultivos, en 48–72. Si algo se retrasa, te escribimos. No te enteras por silencio.",
  },
  {
    q: "¿Necesito orden médica?",
    a: "Para la mayoría de los chequeos preventivos, no. Si tu isapre la pide para reembolso, tráela. El informe siempre indica el médico tratante si nos lo das.",
  },
  {
    q: "¿Trabajan con isapre y FONASA?",
    a: "Isapre y particular. FONASA libre elección en un set acotado —pregúntanos al agendar—. El precio publicado es particular. Te armamos la boleta para reembolso.",
  },
  {
    q: "¿Qué pasa si me da miedo la aguja?",
    a: "Lo dices. Hay tiempo, hay recostado, hay alguien que no apura. Si hace falta, se toma recostado y en silencio. No cobramos el minuto extra.",
  },
  {
    q: "¿Hacen toma a domicilio?",
    a: "Lun a sáb 06:30–10:30, en doce comunas del oriente y el centro. Ignacio llega con el maletín. El ayuno se respeta en tu mesa, no en un hall.",
  },
] as const;

export const previsiones = ["Particular", "Isapre", "FONASA libre elección"] as const;

export const slots = [
  "06:30",
  "07:00",
  "07:30",
  "08:00",
  "08:30",
  "09:00",
  "10:00",
  "11:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "20:30",
] as const;

export const constellation = [
  { id: "hem", label: "Hematología", x: 22, y: 38, r: 3.2, categoria: "Hematología" as const },
  { id: "bio", label: "Bioquímica", x: 48, y: 22, r: 3.8, categoria: "Bioquímica" as const },
  { id: "hor", label: "Hormonas", x: 72, y: 34, r: 3.4, categoria: "Hormonas" as const },
  { id: "vit", label: "Vitaminas", x: 38, y: 62, r: 2.8, categoria: "Vitaminas" as const },
  { id: "ori", label: "Orina", x: 64, y: 68, r: 2.4, categoria: "Orina" as const },
  { id: "inf", label: "Infecciosos", x: 84, y: 58, r: 2.6, categoria: "Infecciosos" as const },
  { id: "pre", label: "Preventivo", x: 16, y: 72, r: 2.7, categoria: "Preventivo" as const },
] as const;
