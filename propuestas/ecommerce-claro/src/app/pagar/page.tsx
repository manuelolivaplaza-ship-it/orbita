import type { Metadata } from "next";
import { Checkout } from "@/components/checkout";

export const metadata: Metadata = {
  title: "Pagar",
  description: "Cierra el pedido. Boleta o factura. Despacho a tu comuna o retiro en Lastarria.",
};

export default function Page() {
  return <Checkout />;
}
