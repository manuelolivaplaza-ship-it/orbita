"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { wines } from "@/lib/wines";
import { site } from "@/lib/site";

type Line = { slug: string; qty: number };
type Shipping = "rm" | "regiones" | "retiro";

type CartContextValue = {
  lines: Line[];
  open: boolean;
  setOpen: (open: boolean) => void;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  shipping: Shipping;
  setShipping: (value: Shipping) => void;
  shippingCost: number;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE = "noctua-cart";

function wineBySlug(slug: string) {
  return wines.find((wine) => wine.slug === slug);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [shipping, setShipping] = useState<Shipping>("rm");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) {
        const parsed = JSON.parse(raw) as Line[];
        if (Array.isArray(parsed)) setLines(parsed);
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE, JSON.stringify(lines));
  }, [lines, ready]);

  const add = useCallback((slug: string, qty = 1) => {
    const wine = wineBySlug(slug);
    if (!wine || wine.stock <= 0) return;
    setLines((current) => {
      const existing = current.find((line) => line.slug === slug);
      if (!existing) {
        return [...current, { slug, qty: Math.min(qty, wine.stock) }];
      }
      return current.map((line) =>
        line.slug === slug
          ? { ...line, qty: Math.min(line.qty + qty, wine.stock) }
          : line,
      );
    });
    setOpen(true);
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    const wine = wineBySlug(slug);
    if (!wine) return;
    setLines((current) => {
      if (qty <= 0) return current.filter((line) => line.slug !== slug);
      return current.map((line) =>
        line.slug === slug
          ? { ...line, qty: Math.min(qty, wine.stock) }
          : line,
      );
    });
  }, []);

  const remove = useCallback((slug: string) => {
    setLines((current) => current.filter((line) => line.slug !== slug));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const count = lines.reduce((sum, line) => sum + line.qty, 0);
  const subtotal = lines.reduce((sum, line) => {
    const wine = wineBySlug(line.slug);
    return sum + (wine ? wine.price * line.qty : 0);
  }, 0);

  const shippingCost = useMemo(() => {
    if (shipping === "retiro" || subtotal === 0) return 0;
    if (subtotal >= site.shippingFreeFrom) return 0;
    return shipping === "rm" ? site.shippingRm : site.shippingRegions;
  }, [shipping, subtotal]);

  const value: CartContextValue = {
    lines,
    open,
    setOpen,
    add,
    setQty,
    remove,
    clear,
    count,
    subtotal,
    shipping,
    setShipping,
    shippingCost,
    total: subtotal + shippingCost,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function useCartOptional() {
  return useContext(CartContext);
}
