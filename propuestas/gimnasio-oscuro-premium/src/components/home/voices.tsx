import { Chapter, Reveal } from "@/components/reveal";
import { testimonials } from "@/lib/site";

export function Voices() {
  return (
    <section className="border-t border-line px-5 py-28 md:px-8 lg:px-12 lg:py-36">
      <Chapter n="06" label="Voces" />
      <h2 className="mt-10 max-w-2xl font-serif text-5xl leading-[0.95] tracking-tight md:text-6xl">
        Lo que se dice
        <span className="italic text-ivory-soft"> cuando no hay que vender.</span>
      </h2>
      <div className="mt-16 grid gap-12 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 100} className="border-t border-line pt-8">
            <blockquote className="font-serif text-2xl leading-snug tracking-tight text-ivory md:text-[1.7rem]">
              “{t.quote}”
            </blockquote>
            <footer className="mt-8">
              <p className="text-ivory">{t.name}</p>
              <p className="mt-1 font-mono text-[0.58rem] tracking-[0.22em] text-muted uppercase">
                {t.role}
              </p>
            </footer>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
