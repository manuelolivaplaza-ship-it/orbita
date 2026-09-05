import Link from "next/link";
import { families, type Family } from "@/data/catalog";
import { formatCLP } from "@/lib/format";

const layout: Array<[string, string]> = [
  ["fierro", "planchas"],
  ["pernos", "maderas"],
  ["soldadura", "herramientas"],
];

export function NavePlan() {
  const byId = Object.fromEntries(
    families.map((family) => [family.id, family]),
  ) as Record<string, Family>;

  return (
    <div>
      <div className="mb-3 flex items-center justify-between font-mono text-[0.58rem] uppercase tracking-[0.2em] text-mute">
        <span>Norte · fierro</span>
        <span>Lo Echevers</span>
      </div>
      <div className="grid gap-px bg-line">
        {layout.map((row, index) => (
          <div key={index} className="grid bg-void sm:grid-cols-2">
            {row.map((id) => {
              const family = byId[id];
              return (
                <Link
                  key={id}
                  href={`/familias/${id}`}
                  className="bay bg-void"
                >
                  <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-sodium">
                    {family.bay}
                  </span>
                  <span className="mt-3 block font-display text-2xl font-medium tracking-wide md:text-3xl">
                    {family.name}
                  </span>
                  <span className="mt-2 block font-mono text-[0.58rem] uppercase tracking-[0.14em] text-mute">
                    desde {formatCLP(family.fromIva)}
                    {family.corte ? " · corte" : ""}
                  </span>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
      <p className="mt-3 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-mute">
        Sur · mesón
      </p>
    </div>
  );
}
