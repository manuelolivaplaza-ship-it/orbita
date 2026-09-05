import type { Metadata } from "next";
import { OrderDone } from "@/components/order-done";

export const metadata: Metadata = {
  title: "Pedido recibido",
  description: "Tu pedido en Bazar Austral.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <OrderDone />;
}
