const items = [
  "Lo Barnechea",
  "Vitacura",
  "Zapallar",
  "Cachagua",
  "Puerto Varas",
  "Casablanca",
  "La Dehesa",
  "Lastarria",
  "Cochamó",
  "Alonso de Córdova",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-[var(--line)] py-5">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 pr-8 font-display text-2xl italic text-ivory-soft sm:text-3xl"
          >
            {item}
            <span className="text-gold" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
