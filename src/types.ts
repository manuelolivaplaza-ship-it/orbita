export interface PlanItem {
  id: string;
  name: string;
  price: string;
  priceRaw: number;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  nombre: string;
  email: string;
  telefono?: string;
  mensaje: string;
  plan?: string;
  presupuestoAprox?: string;
}
