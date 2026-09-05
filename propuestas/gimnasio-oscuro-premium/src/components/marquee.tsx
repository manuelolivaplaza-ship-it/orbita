const items = [
  "Silencio",
  "Precisión",
  "Permanencia",
  "Fuerza",
  "Cobre",
  "Piedra",
  "Vitacura",
  "180 socios",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line py-5">
      <div className="marquee-track flex w-max gap-10">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-serif text-3xl tracking-tight text-ivory/80 italic md:text-4xl"
          >
            {item}
            <span className="text-copper not-italic">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
