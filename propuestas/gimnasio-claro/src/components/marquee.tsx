export function Marquee({ words }: { words: string[] }) {
  const line = [...words, ...words];

  return (
    <div className="overflow-hidden border-y border-line bg-cream py-5">
      <div className="marquee-track flex w-max gap-0">
        {line.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center gap-8 px-4 font-display text-2xl italic tracking-tight text-ink sm:text-3xl"
          >
            {word}
            <span className="text-copper" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
