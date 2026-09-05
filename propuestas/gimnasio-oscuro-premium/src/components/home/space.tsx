import Image from "next/image";
import Link from "next/link";
import { Chapter, Reveal } from "@/components/reveal";
import { spaces } from "@/lib/site";

export function Space() {
  const featured = spaces[0];
  const rest = spaces.slice(1, 4);

  return (
    <section className="border-t border-line px-5 py-28 md:px-8 lg:px-12 lg:py-36">
      <Chapter n="03" label="El recinto" />
      <div className="mt-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="max-w-2xl font-serif text-5xl leading-[0.95] tracking-tight md:text-6xl">
          Piedra, cobre
          <span className="italic text-ivory-soft"> y los Andes.</span>
        </h2>
        <Link
          href="/espacio"
          className="font-mono text-[0.62rem] tracking-[0.28em] text-copper uppercase link-line"
        >
          Recorrer el espacio
        </Link>
      </div>

      <div className="mt-16 grid gap-5 lg:grid-cols-12">
        <Reveal className="relative min-h-[62vh] overflow-hidden lg:col-span-7">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
          <div className="absolute right-0 bottom-0 left-0 p-7">
            <p className="font-mono text-[0.58rem] tracking-[0.28em] text-copper uppercase">
              {featured.meta}
            </p>
            <p className="mt-2 font-serif text-4xl">{featured.title}</p>
          </div>
        </Reveal>
        <div className="grid gap-5 lg:col-span-5">
          {rest.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="relative min-h-[28vh] overflow-hidden">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-transparent to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-6">
                <p className="font-mono text-[0.58rem] tracking-[0.28em] text-copper uppercase">
                  {s.meta}
                </p>
                <p className="mt-1 font-serif text-3xl">{s.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
