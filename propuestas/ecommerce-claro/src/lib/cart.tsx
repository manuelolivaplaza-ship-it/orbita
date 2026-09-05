"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { getProduct, type Product } from "@/lib/products";
import { site } from "@/lib/site";
import { shippingFor } from "@/lib/shipping";

export type CartLine = {
  key: string;
  slug: string;
  qty: number;
  color?: string;
  size?: string;
};

type CartState = { lines: CartLine[] };

const empty: CartState = { lines: [] };
const KEY = "bazar-austral-carrito";

function lineKey(slug: string, color?: string, size?: string) {
  return [slug, color ?? "", size ?? ""].join(":");
}

function read(): CartState {
  if (typeof window === "undefined") return empty;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw) as CartState;
    if (!Array.isArray(parsed.lines)) return empty;
    return parsed;
  } catch {
    return empty;
  }
}

let memory = empty;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((fn) => fn());
}

function write(next: CartState) {
  memory = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* ignore quota */
  }
  emit();
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function getSnapshot() {
  return memory;
}

function getServerSnapshot() {
  return empty;
}

if (typeof window !== "undefined") {
  memory = read();
  window.addEventListener("storage", () => {
    memory = read();
    emit();
  });
}

type CartApi = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  shipping: (regionId: string) => number;
  total: (regionId: string) => number;
  add: (slug: string, qty?: number, color?: string, size?: string) => void;
  setQty: (key: string, qty: number) => void;
  remove: (key: string) => void;
  clear: () => void;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const CartContext = createContext<CartApi | null>(null);

let openState = false;
const openListeners = new Set<() => void>();

function subscribeOpen(fn: () => void) {
  openListeners.add(fn);
  return () => openListeners.delete(fn);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const open = useSyncExternalStore(
    subscribeOpen,
    () => openState,
    () => false,
  );

  const setOpen = useCallback((v: boolean) => {
    openState = v;
    openListeners.forEach((fn) => fn());
  }, []);

  const add = useCallback(
    (slug: string, qty = 1, color?: string, size?: string) => {
      const product = getProduct(slug);
      if (!product) return;
      const key = lineKey(slug, color, size);
      const current = getSnapshot();
      const found = current.lines.find((l) => l.key === key);
      const nextQty = Math.min(product.stock, (found?.qty ?? 0) + qty);
      const lines = found
        ? current.lines.map((l) => (l.key === key ? { ...l, qty: nextQty } : l))
        : [...current.lines, { key, slug, qty: nextQty, color, size }];
      write({ lines });
      openState = true;
      openListeners.forEach((fn) => fn());
    },
    [],
  );

  const setQty = useCallback((key: string, qty: number) => {
    const current = getSnapshot();
    const line = current.lines.find((l) => l.key === key);
    if (!line) return;
    const product = getProduct(line.slug);
    const max = product?.stock ?? 1;
    if (qty <= 0) {
      write({ lines: current.lines.filter((l) => l.key !== key) });
      return;
    }
    write({
      lines: current.lines.map((l) =>
        l.key === key ? { ...l, qty: Math.min(max, qty) } : l,
      ),
    });
  }, []);

  const remove = useCallback((key: string) => {
    const current = getSnapshot();
    write({ lines: current.lines.filter((l) => l.key !== key) });
  }, []);

  const clear = useCallback(() => write(empty), []);

  const hydrated = useMemo(() => {
    return state.lines
      .map((line) => {
        const product = getProduct(line.slug);
        if (!product) return null;
        const size = product.sizes?.find((s) => s.id === line.size);
        const unit = size?.price ?? product.price;
        return { line, product, unit, amount: unit * line.qty };
      })
      .filter(Boolean) as {
      line: CartLine;
      product: Product;
      unit: number;
      amount: number;
    }[];
  }, [state.lines]);

  const subtotal = hydrated.reduce((acc, item) => acc + item.amount, 0);
  const count = state.lines.reduce((acc, l) => acc + l.qty, 0);

  const api = useMemo<CartApi>(
    () => ({
      lines: state.lines,
      count,
      subtotal,
      shipping: (regionId: string) =>
        shippingFor(subtotal, regionId, site.freeShippingFrom),
      total: (regionId: string) =>
        subtotal + shippingFor(subtotal, regionId, site.freeShippingFrom),
      add,
      setQty,
      remove,
      clear,
      open,
      setOpen,
    }),
    [state.lines, count, subtotal, add, setQty, remove, clear, open, setOpen],
  );

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart fuera de CartProvider");
  return ctx;
}

export function linePrice(line: CartLine) {
  const product = getProduct(line.slug);
  if (!product) return 0;
  const size = product.sizes?.find((s) => s.id === line.size);
  return (size?.price ?? product.price) * line.qty;
}

export { lineKey };
