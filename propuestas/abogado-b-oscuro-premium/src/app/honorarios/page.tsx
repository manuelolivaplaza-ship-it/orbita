import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { fees } from "@/lib/site";

export const metadata: Metadata = {
  title: "Honorarios",
  description:
    "Arancel de Vigilia en UF, más IVA. Primera hora $52.000, se descuenta si tomamos el asunto. Por escrito, antes de firmar.",
};

export default function HonorariosPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="03"
        kicker="Honorarios"
        title="El número, antes de partir."
        lede="Minuta en UF. IVA aparte. Por etapa. Lo que no está escrito, no está pactado. La primera hora se descuenta si tomamos el asunto."
      />

      <div className="mt-10 grid gap-12 lg:grid-cols-12">
        <Reveal className="relative hidden overflow-hidden border border-line lg:col-span-4 lg:block lg:min-h-full">
          <Image
            src="/images/escrito.jpg"
            alt="Escrito bajo la lámpara de cobre, pluma y papel"
            fill
            sizes="33vw"
            className="object-cover"
          />
        </Reveal>
        <div className="lg:col-span-8">
          <div className="flex justify-between border-b border-line pb-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-copper">
            <span>Servicio</span>
            <span>Honorario</span>
          </div>
          {fees.map((f) => (
            <div
              key={f.servicio}
              className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-line py-6"
            >
              <div>
                <p className="text-[1.05rem]">{f.servicio}</p>
                <p className="mt-1 max-w-[46ch] text-sm text-muted">{f.nota}</p>
              </div>
              <p className="font-display text-[1.35rem] tabular text-copper whitespace-nowrap">
                {f.precio}
              </p>
            </div>
          ))}
          <p className="mt-8 max-w-[52ch] text-sm leading-relaxed text-muted">
            Los valores son referenciales y se confirman en la minuta. No
            trabajamos a resultado salvo un porcentaje del recargo laboral,
            pactado por escrito antes de demandar. No prometemos el fallo.
          </p>
          <Link href="/primera-hora" className="btn btn-primary mt-8">
            Pedir la primera hora
          </Link>
        </div>
      </div>
    </div>
  );
}
