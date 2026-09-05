"use client";

import type { ReactNode } from "react";
import { AgeGate } from "@/components/AgeGate";
import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/components/CartProvider";
import { Grain } from "@/components/Grain";
import { SmoothScroll } from "@/components/SmoothScroll";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <SmoothScroll />
      <Grain />
      <AgeGate />
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
