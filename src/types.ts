export interface PlanAiAssistant {
  conversations: string;
  shortLabel: string;
  optional: boolean;
  description: string;
}

export interface PlanItem {
  id: string;
  name: string;
  price: string;
  priceRaw: number;
  priceUf?: string;
  priceUfRaw?: number;
  monthlyPrice?: string;
  monthlyPriceRaw?: number;
  monthlyPriceUf?: string;
  monthlyPriceUfRaw?: number;
  monthlyFeatures?: string[];
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  aiAssistant?: PlanAiAssistant;
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
