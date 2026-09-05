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
import { wines, type Wine } from "@/data/content";
import { site } from "@/data/site";

export type CartLine = {
  slug: string;
  qty: number;
};

type CartContextValue = {
  ready: boolean;
  lines: CartLine[];
  add: (slug: string, qty?: number) => void;
  addMany: (slugs: string[]) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  shipping: number;
  total: number;
  items: Array<CartLine & { wine: Wine }>;
};

const CartContext = createContext<CartContextValue | null>(null);
const KEY = "eter-seleccion";

function mergeLines(prev: CartLine[], incoming: CartLine[]) {
  const next = prev.map((line) => ({ ...line }));
  for (const item of incoming) {
    const found = next.find((line) => line.slug === item.slug);
    if (found) found.qty = Math.min(12, found.qty + item.qty);
    else next.push({ slug: item.slug, qty: item.qty });
  }
  return next;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const add = useCallback((slug: string, qty = 1) => {
    setLines((prev) => mergeLines(prev, [{ slug, qty }]));
  }, []);

  const addMany = useCallback((slugs: string[]) => {
    setLines((prev) => mergeLines(prev, slugs.map((slug) => ({ slug, qty: 1 }))));
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    setLines((prev) => {
      if (qty <= 0) return prev.filter((line) => line.slug !== slug);
      return prev.map((line) =>
        line.slug === slug ? { ...line, qty: Math.min(12, qty) } : line,
      );
    });
  }, []);

  const remove = useCallback((slug: string) => {
    setLines((prev) => prev.filter((line) => line.slug !== slug));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo(() => {
    const items = lines
      .map((line) => {
        const wine = wines.find((w) => w.slug === line.slug);
        return wine ? { ...line, wine } : null;
      })
      .filter((item): item is CartLine & { wine: Wine } => item !== null);

    const subtotal = items.reduce((sum, item) => sum + item.wine.price * item.qty, 0);
    const shipping =
      subtotal === 0 || subtotal >= site.shipping.freeFrom ? 0 : site.shipping.rm;
    const count = items.reduce((sum, item) => sum + item.qty, 0);

    return {
      ready,
      lines,
      add,
      addMany,
      setQty,
      remove,
      clear,
      count,
      subtotal,
      shipping,
      total: subtotal + shipping,
      items,
    };
  }, [ready, lines, add, addMany, setQty, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
