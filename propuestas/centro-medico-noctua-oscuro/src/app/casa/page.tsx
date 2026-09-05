import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HousePlan } from "@/components/house-plan";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "La casa",
  description:
    "Casa NOCTUA en Av. Nueva Costanera 4050, Vitacura. Ocho salas, laboratorio, imagen y una habitación de sueño. Piedra, ámbar, silencio.",
};

const rooms = [
  {
    title: "La espera",
    text: "Sin televisor. Sin fila de sillas plásticas. Lino oscuro, una lámpara, el jardín al otro lado del vidrio. El tiempo de quitarse el abrigo.",
    image: "/images/espera.jpg",
    alt: "Pabellón de espera NOCTUA: sillas de lino oscuro, lámpara ámbar y jardín de noche",
  },
  {
    title: "La consulta",
    text: "Camilla de lino, una lámpara, el fonendo. Cuarenta minutos. Cincuenta en sueño y en salud mental. La puerta no se abre antes.",
    image: "/images/consulta.jpg",
    alt: "Sala de consulta NOCTUA con camilla de lino oscuro y lámpara ámbar",
  },
  {
    title: "El pasillo",
    text: "Piedra volcánica. Un aplique ámbar. Ocho puertas. No hay música de spa. Hay el silencio que el oficio pide.",
    image: "/images/pasillo.jpg",
    alt: "Pasillo de piedra volcánica con una lámpara ámbar al fondo",
  },
  {
    title: "La fachada",
    text: `${site.address.line1}. Ocho cupos en el predio, aviso al agendar. Escuela Militar a doce minutos a pie.`,
    image: "/images/fachada.jpg",
    alt: "Fachada de piedra volcánica al anochecer, ventana ámbar sobre el pavimento mojado",
  },
];

export default function CasaPage() {
  return (
    <>
      <PageIntro
        kicker="La casa"
        title="Una casa. No un local de avenida."
        lead={`${site.address.line1}, ${site.address.commune}. Ocho salas, un laboratorio, imagen, una habitación de sueño. Abrimos cuando Santiago baja la voz.`}
      />

      <section className="pb-8">
        <div className="shell">
          <div className="frame relative aspect-[16/9] min-h-[280px]">
            <Image
              src="/images/fachada.jpg"
              alt="Fachada de NOCTUA al anochecer: piedra volcánica y una ventana ámbar"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {site.address.line1} · {site.address.commune}
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              El cuerpo se trata mejor donde hay silencio.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
            <p className="text-lg leading-relaxed text-paper-dim">
              NOCTUA ocupa una casa de un piso. No hay recepción con vidrio ni
              música de spa. Hay piedra, lino oscuro, una lámpara que no
              compete con la ciudad, y el tiempo de una consulta que no se
              recorta porque el siguiente ya llegó.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-paper-dim">
              {site.parking}. {site.metro}.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <p className="kicker">Planta</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Ocho salas. Un pasillo. El jardín.
            </h2>
          </Reveal>
          <Reveal className="mt-14" delay={80}>
            <HousePlan />
          </Reveal>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell grid gap-16">
          {rooms.map((room, index) => (
            <Reveal
              key={room.title}
              delay={index * 40}
              className="grid items-center gap-8 md:grid-cols-12"
            >
              <div
                className={`frame relative aspect-[16/10] md:aspect-[4/3] ${
                  index % 2 === 0 ? "md:col-span-6" : "md:col-span-6 md:col-start-7"
                }`}
              >
                <Image
                  src={room.image}
                  alt={room.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div
                className={
                  index % 2 === 0
                    ? "md:col-span-5 md:col-start-8"
                    : "md:col-span-5 md:col-start-1 md:row-start-1"
                }
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-display text-4xl font-semibold tracking-tight">
                  {room.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-paper-dim">
                  {room.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-ink">
        <div className="shell py-20">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight">
              Cómo llegar. Cómo entrar.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-paper-dim">
              {site.address.line1}, {site.address.commune}. {site.metro}. El
              portero abre a las 16:00. Si llegas antes, espera en el jardín —
              no en la calle.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={site.address.maps} className="btn btn-amber">
                Abrir mapa
                <Arrow />
              </a>
              <Link href="/agenda" className="btn btn-ghost">
                Pedir hora
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
