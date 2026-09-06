export const WEEKDAY_CURVE = [
  0.16, 0.13, 0.11, 0.1, 0.12, 0.2, 0.36, 0.54, 0.72, 0.88, 0.98, 1, 0.93,
  0.76, 0.64, 0.7, 0.84, 0.94, 0.86, 0.68, 0.5, 0.34, 0.24, 0.18,
] as const;

export const WEEKEND_CURVE = [
  0.2, 0.16, 0.14, 0.13, 0.14, 0.18, 0.26, 0.34, 0.46, 0.56, 0.64, 0.7, 0.74,
  0.72, 0.66, 0.64, 0.72, 0.82, 0.9, 0.86, 0.7, 0.5, 0.34, 0.24,
] as const;

export type TideState = {
  name: string;
  channel: string;
  line: string;
};

export function sampleCurve(curve: readonly number[], hour: number) {
  const wrapped = ((hour % 24) + 24) % 24;
  const i = Math.floor(wrapped);
  const t = wrapped - i;
  const a = curve[i];
  const b = curve[(i + 1) % curve.length];
  const c = curve[(i + 2) % curve.length];
  const d = curve[(i + 23) % curve.length];
  // Catmull-Rom-ish between a and b
  const t2 = t * t;
  const t3 = t2 * t;
  const y =
    0.5 *
    (2 * a +
      (-d + b) * t +
      (2 * d - 5 * a + 4 * b - c) * t2 +
      (-d + 3 * a - 3 * b + c) * t3);
  return Math.min(1, Math.max(0, y));
}

export function coefficient(value: number) {
  return (0.18 + value * 1.0).toFixed(2);
}

export function tideState(hour: number, weekend: boolean): TideState {
  if (hour >= 0 && hour < 6.5) {
    return {
      name: "Bajamar",
      channel: "Nada de conversión",
      line: weekend
        ? "Nadie está comprando en serio. Si enciende pauta de lead a esta hora, está pagando insomnio."
        : "Impresiones baratas, formularios vacíos. No encienda conversión. Si algo corre, que sea remarketing liviano.",
    };
  }
  if (hour < 9.5) {
    return {
      name: "Sube",
      channel: "Search local · WhatsApp",
      line: "El celular se abre en la micro y en la cocina. Search de intención corta y un WhatsApp que sí contesta alguien.",
    };
  }
  if (hour < 13.5) {
    return {
      name: "Pleamar",
      channel: weekend ? "Ecommerce · oferta" : "Search B2B · Meta de conversión",
      line: weekend
        ? "Sábado y domingo la pleamar es de casa. Oferta concreta, ficha que se puede comprar, despacho honesto."
        : "El CPC sube porque hay gente que decide. Si el sitio no carga en 4G, está comprando ruido a precio de oficina.",
    };
  }
  if (hour < 16) {
    return {
      name: "Residuo",
      channel: "Recorte, no refuerzo",
      line: "Después de almuerzo el lead se enfría. Se corta lo que no sostuvo la mañana. Subir presupuesto acá es un vicio.",
    };
  }
  if (hour < 19.5) {
    return {
      name: "Segunda pleamar",
      channel: "Meta · oferta · WhatsApp",
      line: "Sale el trabajo, entra el colegio, se abre el ecommerce. Buena hora de oferta. Mala hora de formularios de diez campos.",
    };
  }
  if (hour < 21.5) {
    return {
      name: "Baja con televisor",
      channel: "Awareness, no cierre",
      line: "Se mira y se toca el celular a la vez. Awareness sí. Pedir un RUT a las 20:40, no.",
    };
  }
  return {
    name: "Bajamar nocturna",
    channel: "Remarketing liviano",
    line: "Queda inventario barato. No lance un producto a las 23:00. Un recordatorio, y a dormir.",
  };
}

export function extrema(curve: readonly number[]) {
  let hi = 0;
  let lo = 0;
  for (let i = 1; i < curve.length; i += 1) {
    if (curve[i] > curve[hi]) hi = i;
    if (curve[i] < curve[lo]) lo = i;
  }
  return { pleamar: hi, bajamar: lo };
}
