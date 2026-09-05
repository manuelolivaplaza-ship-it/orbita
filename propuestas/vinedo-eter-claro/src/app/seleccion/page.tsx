import type { Metadata } from "next";
import { Checkout } from "@/components/checkout";

export const metadata: Metadata = {
  title: "Selección",
  description: "Tu caja de ETER. Retiro en viña o despacho a todo Chile.",
};

export default function SeleccionPage() {
  return <Checkout />;
}
