import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { chequeos } from "@/data/chequeos";
import { clp } from "@/lib/format";

export const metadata: Metadata = {
  title: "Chequeos",
  description:
    "Paneles de chequeo preventivo ETER: esencial, completo, mujer, hombre, metabólico y deportivo. Santiago.",
};

export default function ChequeosPage() {
  return (
    <>
      <PageHero
        kicker="Chequeos"
        title="Un retrato anual, no una batería infinita."
        lead="Armamos paneles que un internista firmaría. Si tu médico pidió algo extra, lo sumamos el mismo día."
      />
      <div className="wrap-wide pb-10">
        <div className="img-frame aspect-[16/8]">
          <Image
            src="/images/bottles.jpg"
            alt="Frascos de laboratorio con líquidos champagne, agua y celadon."
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="wrap grid gap-6 pb-24 md:grid-cols-2">
        {chequeos.map((item, index) => (
          <Reveal
            key={item.slug}
            delay={index * 60}
            className="flex flex-col border border-line bg-cream p-8 md:p-10"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-serif text-4xl">{item.nombre}</h2>
              <p className="font-mono text-sm">{clp(item.precio)}</p>
            </div>
            <p className="mt-4 text-ink-soft">{item.tagline}</p>
            <p className="mt-3 text-sm text-mute">
              {item.para} · {item.ayuno} de ayuno · informe en {item.plazo}.
            </p>
            <ul className="mt-8 flex-1 space-y-2 border-t border-line pt-6 text-sm">
              {item.incluye.map((linea) => (
                <li key={linea} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage" />
                  {linea}
                </li>
              ))}
            </ul>
            <Link href="/contacto" className="btn btn-ink mt-8 w-fit">
              Agendar {item.nombre.toLowerCase()}
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
