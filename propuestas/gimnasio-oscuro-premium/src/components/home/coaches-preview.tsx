import Image from "next/image";
import Link from "next/link";
import { Chapter, Reveal } from "@/components/reveal";
import { coaches } from "@/lib/site";

export function CoachesPreview() {
  return (
    <section className="border-t border-line px-5 py-28 md:px-8 lg:px-12 lg:py-36">
      <Chapter n="04" label="Los coaches" />
      <div className="mt-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="max-w-xl font-serif text-5xl leading-[0.95] tracking-tight md:text-6xl">
          Doce miradas.
          <span className="italic text-ivory-soft"> Cero teatro.</span>
        </h2>
        <Link
          href="/coaches"
          className="font-mono text-[0.62rem] tracking-[0.28em] text-copper uppercase link-line"
        >
          Conocer al equipo
        </Link>
      </div>
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {coaches.map((c, i) => (
          <Reveal key={c.slug} delay={i * 80}>
            <Link href="/coaches" className="group block">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
                <div className="absolute right-0 bottom-0 left-0 p-5">
                  <p className="font-serif text-2xl">{c.name}</p>
                  <p className="mt-1 font-mono text-[0.58rem] tracking-[0.22em] text-copper uppercase">
                    {c.role}
                  </p>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
