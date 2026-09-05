import type { Metadata } from "next";
import { CartPage } from "@/components/CartPage";

export const metadata: Metadata = {
  title: "Carrito",
};

export default function CarritoRoute() {
  return <CartPage />;
}
