import Image from "next/image";
import { Chapter, Reveal } from "@/components/reveal";

export function Manifesto() {
  return (
    <section className="px-5 py-28 md:px-8 lg:px-12 lg:py-36">
      <Chapter n="01" label="Manifiesto" />
      <div className="mt-12 grid items-start gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <h2 className="font-serif text-[11vw] leading-[0.92] font-medium tracking-tight md:text-7xl">
            No es un gimnasio.
            <span className="mt-2 block italic text-ivory-soft">
              Es un recinto.
            </span>
          </h2>
          <div className="mt-10 max-w-xl space-y-6 text-[1.08rem] leading-relaxed text-ivory-soft">
            <p>
              Hay recintos diseñados para distraer: pantallas, playlists, un
              coach que grita el nombre de un ejercicio. Obsidiana se construyó
              para lo contrario.
            </p>
            <p>
              La obsidiana es vidrio volcánico. Nace cuando la lava se enfría de
              golpe, bajo presión, y se vuelve filo. Así entendemos el cuerpo:
              no como un proyecto de verano, sino como un material que se afila
              con los años.
            </p>
            <p>
              En Vitacura, a los pies de los Andes, entrenan ciento ochenta
              personas que ya no necesitan que las convenzan. Vienen a trabajar.
            </p>
          </div>
        </Reveal>
        <Reveal className="relative lg:col-span-5" delay={160}>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/kettlebell.jpg"
              alt="Pesa rusa sobre piedra volcánica, con tiza y luz de cobre"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <p className="mt-4 max-w-xs font-mono text-[0.62rem] leading-relaxed tracking-[0.18em] text-muted uppercase">
            Vidrio negro. Presión. Filo. El nombre no es un adorno.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
