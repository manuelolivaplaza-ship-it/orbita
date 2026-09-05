"use client";

import { CartDrawer } from "@/components/cart-drawer";
import { SearchProvider } from "@/components/search";
import { CartProvider } from "@/lib/cart";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SearchProvider>
      <CartProvider>
        {children}
        <CartDrawer />
      </CartProvider>
    </SearchProvider>
  );
}
