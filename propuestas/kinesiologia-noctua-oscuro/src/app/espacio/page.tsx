import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Espacio",
  description:
    "Casa NOCTUA en Av. Santa María 7120, Vitacura. Tres box, piedra volcánica, lámpara ámbar y el Mapocho al otro lado del vidrio.",
};

const rooms = [
  {
    title: "El box",
    text: "Camilla de lino oscuro, una lámpara, el río. Setenta y cinco minutos la primera vez. Cincuenta o sesenta las que siguen. La puerta no se abre antes.",
    image: "/images/hero.jpg",
    alt: "Box NOCTUA de noche con camilla, lámpara ámbar y Santiago al fondo",
  },
  {
    title: "El pasillo",
    text: "Se espera sin televisor y sin fila de sillas plásticas. Piedra, un banco, el tiempo de quitarse el abrigo.",
    image: "/images/corridor.jpg",
    alt: "Pasillo de piedra volcánica con una lámpara ámbar al fondo",
  },
  {
    title: "La fachada",
    text: "Santa María 7120. Dos cupos en el predio, aviso al agendar. Alcántara a once minutos a pie.",
    image: "/images/facade.jpg",
    alt: "Fachada de piedra volcánica al anochecer, ventana ámbar sobre el pavimento mojado",
  },
];

export default function EspacioPage() {
  return (
    <>
      <PageIntro
        kicker="El espacio"
        title="Una casa. No un local de avenida."
        lead="Av. Santa María 7120, Vitacura. Tres box, un pasillo que no pide fila, el Mapocho al otro lado del vidrio. Abrimos cuando Santiago baja la voz."
      />

      <section className="pb-8">
        <div className="shell">
          <div className="frame relative aspect-[16/9] min-h-[280px]">
            <Image
              src="/images/facade.jpg"
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
              compete con la ciudad, y el tiempo de una sesión que no se recorta
              porque el siguiente ya llegó.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-paper-dim">
              {site.parking}. {site.metro}.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        {rooms.map((room, index) => (
          <article
            key={room.title}
            className="grid border-b border-line md:grid-cols-12"
          >
            <div
              className={`relative min-h-[320px] md:col-span-6 md:min-h-[480px] ${index % 2 === 1 ? "md:order-2" : ""}`}
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
              className={`flex flex-col justify-center px-6 py-14 md:col-span-6 md:px-12 lg:px-16 ${index % 2 === 1 ? "md:order-1" : ""}`}
            >
              <Reveal>
                <p className="kicker">0{index + 1}</p>
                <h3 className="mt-4 font-display text-4xl font-semibold tracking-tight">
                  {room.title}
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-paper-dim">
                  {room.text}
                </p>
              </Reveal>
            </div>
          </article>
        ))}
      </section>

      <section className="py-24">
        <div className="shell grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="frame relative aspect-[4/3]">
              <Image
                src="/images/still.jpg"
                alt="Escritorio de roble oscuro: lámpara ámbar, cuaderno de cuero y una vértebra"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Lectura · el mapa se escribe aquí
            </p>
            <div className="frame relative mt-8 aspect-square max-w-sm">
              <Image
                src="/images/detail.jpg"
                alt="Lino oscuro con una franja de luz ámbar"
                fill
                sizes="(max-width: 768px) 100vw, 28vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Lino · luz rasante · box 01
            </p>
          </Reveal>
          <Reveal className="flex flex-col justify-center md:col-span-5" delay={80}>
            <p className="kicker">Cómo llegar</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              Santa María, al borde del río.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-paper-dim">
              {site.address.line1}
              <br />
              {site.address.commune}, {site.address.city}
            </p>
            <a
              href={site.address.maps}
              className="link-line mt-6 inline-flex w-fit items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
            >
              Abrir mapa
              <Arrow />
            </a>
            <Link href="/hora" className="btn btn-amber mt-10 w-fit">
              Pedir hora
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
