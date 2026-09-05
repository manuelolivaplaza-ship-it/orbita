"use client";

import Link from "next/link";
import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { IconClose } from "@/components/icons";
import { formatCLP } from "@/lib/format";
import { searchProducts } from "@/lib/products";

type SearchApi = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const SearchContext = createContext<SearchApi>({
  open: false,
  setOpen: () => {},
});

export function SearchProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <SearchContext.Provider value={{ open, setOpen }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchPanel() {
  const { open, setOpen } = useSearch();
  const [q, setQ] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  useEffect(() => {
    if (!open) setQ("");
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const results = useMemo(() => searchProducts(q), [q]);
  const close = useCallback(() => setOpen(false), [setOpen]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-papel" role="dialog" aria-label="Buscar">
      <div className="shell flex h-[4.5rem] items-center justify-between border-b border-linea">
        <p className="kicker">Buscar en la casa</p>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center"
          aria-label="Cerrar búsqueda"
          onClick={close}
        >
          <IconClose className="h-5 w-5" />
        </button>
      </div>
      <div className="shell py-10">
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Manta, gres, Pomaire, lino…"
          className="font-display w-full border-0 bg-transparent text-4xl tracking-tight text-tinta placeholder:text-gris focus:outline-none md:text-6xl"
          aria-label="Qué buscas"
        />
        <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
          {q
            ? `${results.length.toString().padStart(2, "0")} ${results.length === 1 ? "pieza" : "piezas"}`
            : "Escribe un material, un origen o un nombre"}
        </p>

        <ul className="mt-10 divide-y divide-linea">
          {results.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/coleccion/${p.slug}`}
                onClick={close}
                className="grid grid-cols-[72px_1fr_auto] items-center gap-5 py-4"
              >
                <span className="relative aspect-square overflow-hidden bg-papel-2">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="72px"
                    className="object-cover"
                  />
                </span>
                <span>
                  <span className="block font-display text-2xl tracking-tight">
                    {p.name}
                  </span>
                  <span className="mt-1 block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-gris">
                    {p.origin}
                  </span>
                </span>
                <span className="font-mono nums text-sm">{formatCLP(p.price)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
