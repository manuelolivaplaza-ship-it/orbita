"use client";

import { useState } from "react";
import { useCart } from "@/components/cart";
import { wines } from "@/data/content";
import { Arrow } from "@/components/logo";

export function AddCase() {
  const { addMany } = useCart();
  const [done, setDone] = useState(false);

  return (
    <button
      type="button"
      className="btn btn-ink"
      onClick={() => {
        addMany(wines.map((wine) => wine.slug));
        setDone(true);
        window.setTimeout(() => setDone(false), 1800);
      }}
    >
      {done ? "Caja en la selección" : "Llevar la caja de la casa"}
      <Arrow />
    </button>
  );
}
