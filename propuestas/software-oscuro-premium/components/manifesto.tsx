import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/data";

const stats = [
  { value: String(site.people), label: "personas en el estudio" },
  { value: String(new Date().getFullYear() - site.founded), label: "años tallando" },
  { value: "4", label: "encargos por trimestre" },
  { value: "0", label: "productos de catálogo" },
];

export function Manifesto() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <Image
          src="/images/texture-obsidian.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="relative mx-auto grid max-w-[1600px] gap-16 px-5 py-24 md:grid-cols-12 md:px-10 md:py-36">
        <div className="md:col-span-5">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
              Manifiesto
            </p>
            <h2 className="mt-5 font-serif text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.15] text-ivory italic">
              El vidrio volcánico no se funde para ser bonito. Se funde porque no
              queda otra.
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={0.1}>
            <div className="space-y-6 text-[17px] leading-relaxed text-stone">
              <p>
                Obsidiana nace de lava que se enfría de golpe. Sin cristales. Sin
                adornos. Un filo que corta porque la presión no le dio tiempo a
                volverse piedra común.
              </p>
              <p>
                Así trabajamos el software. Pocas capas. Mucha densidad.
                Interfaces que no piden disculpas. Sistemas que siguen en pie
                cuando el trimestre se pone feo.
              </p>
              <p>
                No vendemos transformación digital. No tenemos un producto para
                encajarle a todo el mundo. Escuchamos, tallamos, templamos,
                entregamos.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-px bg-line md:col-span-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="bg-void px-5 py-8 md:px-8">
              <p className="font-display text-4xl font-semibold tracking-tight text-ivory md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 font-mono text-[11px] tracking-[0.16em] text-mute uppercase">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
