import type { Metadata } from "next";
import Image from "next/image";
import { Tira } from "@/components/tira";
import { site } from "@/data/site";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Tira",
  description:
    "Nidador de corte sobre tira de 6.000 mm. Kerf de 3 mm. Lista hasta las 22:00, sale a las 05:00.",
};

export default function TiraPage() {
  return (
    <div className="pt-[4.5rem]">
      <header className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
        <h1 className="max-w-3xl font-display text-[clamp(2.8rem,6vw,6.4rem)] font-medium leading-[0.88] tracking-wide">
          Seis mil milímetros.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-mute">
          La tira entra entera. El nidador reparte los cortes, cuenta el kerf y
          dice cuántas tiras salen. Sin medida, no hay sierra.
        </p>
      </header>

      <section className="border-y border-line">
        <div className="relative min-h-[18rem] md:min-h-[28rem]">
          <Image
            src="/images/corte.jpg"
            alt="Cara de corte fresca de un perfil cuadrado, viruta sobre hormigón húmedo"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <Tira />
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1480px] gap-10 px-5 py-16 md:grid-cols-3 md:px-10 lg:px-16">
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
              Corte
            </p>
            <p className="mt-3 font-display text-4xl font-medium tracking-wide">
              {formatCLP(site.corteExtra)}
            </p>
            <p className="mt-2 text-sm text-mute">por pieza, con IVA.</p>
          </div>
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
              Doblado
            </p>
            <p className="mt-3 font-display text-4xl font-medium tracking-wide">
              {formatCLP(site.dobladoCurva)}
            </p>
            <p className="mt-2 text-sm text-mute">por curva.</p>
          </div>
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
              Cierre de lista
            </p>
            <p className="mt-3 font-display text-4xl font-medium tracking-wide">
              {site.corteHora}
            </p>
            <p className="mt-2 text-sm text-mute">sale a las {site.salidaHora}.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
