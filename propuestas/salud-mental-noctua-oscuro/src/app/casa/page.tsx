import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { rooms } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "La casa",
  description:
    "Casa NOCTUA en Los Militares 4770, Las Condes. Piedra volcánica, lino, un jardín. Metro Escuela Militar.",
};

const facts = [
  { label: "Dirección", value: `${site.address.line1}, ${site.address.commune}` },
  { label: "Metro", value: site.metro },
  { label: "Estacionamiento", value: site.parking },
  { label: "Horario", value: site.hoursShort },
];

export default function CasaPage() {
  return (
    <>
      <PageIntro
        kicker="La casa"
        title="Una casa. No un box de clínica."
        lead={`${site.address.line1}, ${site.address.commune}. Ocho minutos a pie desde Escuela Militar. Piedra, ámbar, un jardín. Sin letreros de pasillo.`}
      />

      <section className="pb-16">
        <div className="shell">
          <div className="frame relative aspect-[16/9] min-h-[280px]">
            <Image
              src="/images/fachada.jpg"
              alt="Fachada de piedra volcánica al anochecer, una ventana ámbar sobre el pavimento mojado"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
            {site.address.line1}, {site.address.commune} — la ventana que queda encendida
          </p>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="shell grid gap-8 py-10 md:grid-cols-4">
          {facts.map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-paper-dim">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              El pensamiento se trata mejor donde hay silencio.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
            <p className="text-lg leading-relaxed text-paper-dim">
              NOCTUA ocupa una casa de un piso. No hay recepción con vidrio ni
              música de spa. Hay piedra volcánica, lino oscuro, una lámpara que
              no compete con la ciudad, y el tiempo de una consulta que no se
              recorta porque el siguiente ya llegó.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-paper-dim">
              {site.parking}. {site.metro}.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-16">
          {rooms.map((room, index) => (
            <Reveal key={room.src} className="grid items-center gap-10 lg:grid-cols-12">
              <div
                className={`frame relative aspect-[16/10] ${
                  index % 2 ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-7"
                }`}
              >
                <Image
                  src={room.src}
                  alt={room.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
              <p
                className={`font-display text-3xl italic leading-snug text-paper-dim ${
                  index % 2
                    ? "lg:col-span-5 lg:col-start-1 lg:row-start-1"
                    : "lg:col-span-4"
                }`}
              >
                {room.caption}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="kicker">Cómo llegar</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              Escuela Militar. Ocho minutos a pie.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-dim">
              Bajada Escuela Militar, hacia Los Militares. Timbre sin letrero
              clínico: dice NOCTUA. Si vienes en auto, hay seis cupos en el
              predio — avísanos al agendar.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={site.address.maps} className="btn btn-amber">
                Abrir mapa
                <Arrow />
              </a>
              <Link href="/primera" className="btn btn-ghost">
                Pedir primera hora
              </Link>
            </div>
          </div>
          <div className="frame relative aspect-[16/10] lg:col-span-5 lg:col-start-8">
            <Image
              src="/images/jardin.jpg"
              alt="Jardín nocturno visto desde el interior"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
