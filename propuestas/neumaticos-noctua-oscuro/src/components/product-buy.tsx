"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  getLine,
  parseSize,
  sizeKey,
  stockLabel,
  type Product,
} from "@/data/products";
import { clp, formatSize, waLink } from "@/lib/format";
import { cn } from "@/lib/cn";

export function ProductBuy({ product }: { product: Product }) {
  const sp = useSearchParams();
  const fromQuery = sp.get("medida");
  const initial =
    product.sizes.find((s) => sizeKey(s) === fromQuery) ?? product.sizes[0];
  const [key, setKey] = useState(sizeKey(initial));
  const size = useMemo(() => {
    const parsed = parseSize(key);
    return (
      product.sizes.find(
        (s) =>
          s.width === parsed.width &&
          s.profile === parsed.profile &&
          s.rim === parsed.rim,
      ) ?? product.sizes[0]
    );
  }, [key, product.sizes]);

  const line = getLine(product.line);
  const four = size.price * 4;
  const wa = waLink(
    `Hola NOCTUA, quiero el ${product.name} en ${formatSize(size.width, size.profile, size.rim)}.`,
  );

  return (
    <div>
      <p className="kicker text-amber-2">{line?.latin}</p>
      <h1 className="display mt-4 text-5xl sm:text-6xl">{product.name}</h1>
      <p className="serif mt-4 text-2xl text-ink">{product.tagline}</p>
      <p className="mt-6 max-w-md leading-relaxed text-mute">{product.lede}</p>

      <dl className="mt-8 grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
        {[
          ["Mojado", product.wet],
          ["Consumo", product.fuel],
          ["Ruido", `${product.noise} dB`],
          ["Nocturno", String(product.night)],
        ].map(([k, v]) => (
          <div key={k} className="bg-bg px-4 py-3">
            <dt className="hud">{k}</dt>
            <dd className="num mt-1 text-lg">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10">
        <p className="kicker mb-3">Medida</p>
        <div className="flex flex-wrap gap-1">
          {product.sizes.map((s) => {
            const id = sizeKey(s);
            const active = id === key;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setKey(id)}
                className={cn(
                  "num px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-amber text-[#1a1408]"
                    : "border border-line text-mute hover:text-ink",
                )}
              >
                {formatSize(s.width, s.profile, s.rim)}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-6">
        <div>
          <p className="hud">Unidad · IVA incl.</p>
          <p className="num mt-1 text-4xl text-amber-2">{clp.format(size.price)}</p>
          <p className="mt-2 text-sm text-mute">
            Juego de 4 · {clp.format(four)}
          </p>
        </div>
        <p className="hud text-ink">{stockLabel[size.stock]}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={`/cita?producto=${product.slug}&medida=${sizeKey(size)}`}
          className="btn btn-solid"
        >
          Agendar montaje
        </Link>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-line">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
