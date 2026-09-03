import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Reveal } from "@/components/reveal";
import { site } from "@/data/site";
import { method, team } from "@/data/team";

export const metadata: Metadata = {
  title: "El estudio",
  description:
    "Obsidiana es un atelier inmobiliario en Vitacura. Residencias de autor, visitas privadas, un criterio.",
};

export default function EstudioPage() {
  return (
    <div className="pt-28 pb-24">
      <Container>
        <Reveal>
          <p className="kicker">El estudio</p>
          <h1 className="display mt-5 max-w-5xl text-6xl sm:text-7xl lg:text-8xl">
            Un atelier, no una
            <br />
            <em className="text-gold">corredora de vitrina.</em>
          </h1>
        </Reveal>

        <Reveal className="mt-16 grid gap-8 lg:grid-cols-12" delay={80}>
          <div className="relative min-h-[420px] lg:col-span-7">
            <Image
              src="/images/atelier.jpg"
              alt="Atelier Obsidiana en Alonso de Córdova, Vitacura"
              fill
              className="object-cover"
              sizes="(min-width:1024px) 58vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-end lg:col-span-5">
            <p className="text-lg leading-relaxed text-ivory-soft">
              Desde {site.founded} trabajamos con un archivo corto. La oficina
              está en Alonso de Córdova porque el barrio se entiende a pie. El
              resto del país —Zapallar, el Llanquihue, Casablanca— se recorre
              cuando hay una casa que lo merece.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              {site.address.street}
              <br />
              {site.address.comuna}, {site.address.city}
              <br />
              {site.hours}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-24 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker">Por qué obsidiana</p>
            <h2 className="display mt-4 text-4xl">Vidrio volcánico, criterio duro</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ivory-soft lg:col-span-7">
            <p>
              La obsidiana se forma cuando la lava se enfría demasiado rápido
              para cristalizar. Es vidrio, no piedra. Corta. No admite
              adorno. Así queremos las residencias que representamos: materia
              honesta, arista clara, ninguna concesión al brochure.
            </p>
            <p>
              Chile tiene volcanes, cordillera, un océano que no pide permiso y
              un mercado inmobiliario que, a ratos, finge no saberlo. Nuestra
              colección existe para las casas que sí lo saben.
            </p>
          </div>
        </Reveal>

        <section className="mt-28">
          <Reveal>
            <p className="kicker">Quienes abren la puerta</p>
            <h2 className="display mt-4 text-5xl">El estudio</h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {team.map((person, i) => (
              <Reveal key={person.name} delay={i * 80}>
                <article>
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#10100e]">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                      sizes="(min-width:768px) 30vw, 100vw"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-3xl">{person.name}</h3>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.22em] text-gold uppercase">
                    {person.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{person.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-28 border-t border-[var(--line)] pt-16">
          <Reveal>
            <p className="kicker">Método</p>
            <h2 className="display mt-4 text-5xl">Cómo se trabaja aquí</h2>
          </Reveal>
          <ol className="mt-12 grid gap-10 lg:grid-cols-3">
            {method.map((m, i) => (
              <Reveal key={m.n} delay={i * 80} as="li">
                <p className="font-mono text-[11px] tracking-[0.24em] text-gold">{m.n}</p>
                <h3 className="mt-4 font-display text-3xl italic">{m.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </section>

        <Reveal className="mt-24 flex flex-col items-start justify-between gap-8 border border-[var(--line)] px-8 py-12 sm:flex-row sm:items-center">
          <div>
            <p className="kicker">Visita al atelier</p>
            <p className="mt-3 font-display text-3xl italic">
              Martes a viernes, con cita. El café es bueno. Las fichas, pocas.
            </p>
          </div>
          <Link href="/visita" className="btn-gold">
            Coordinar
          </Link>
        </Reveal>
      </Container>
    </div>
  );
}
