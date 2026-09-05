import type { Metadata } from "next";
import { CartPage } from "@/components/cart-page";

export const metadata: Metadata = {
  title: "Carrito",
  description: "Revisa las piezas antes de pagar. IVA incluido.",
};

export default function Page() {
  return <CartPage />;
}
