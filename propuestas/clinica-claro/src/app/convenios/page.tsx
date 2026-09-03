import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { convenios, isapres } from "@/lib/data";

export const metadata: Metadata = {
  title: "Convenios",
  description:
    "CLARO atiende de forma particular. Boleta electrónica con código de prestación para reembolso de isapre o Fonasa.",
};

export default function ConveniosPage() {
  return (
    <>
      <PageIntro
        kicker="Previsión"
        title="Particular, con boleta que se puede reembolsar."
        lead="No emitimos bono electrónico en box. Sí emitimos boleta —o factura— con el código de prestación que pide su isapre, su seguro o Fonasa."
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-8 lg:grid-cols-3">
          {convenios.map((item) => (
            <Reveal key={item.title} className="border border-line bg-papel p-7">
              <h2 className="font-display text-[1.7rem] font-medium">{item.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">{item.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="shell mt-16 border border-line px-6 py-8">
          <p className="kicker">Isapres y Fonasa</p>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted">
            El reembolso depende de su plan, no de nosotros. Le damos el papel
            limpio. El resto es su previsión.
          </p>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            {isapres.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </p>
        </Reveal>

        <div className="shell mt-16 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-medium leading-[1.02] tracking-tight">
              Cómo se paga en esta casa.
            </h2>
          </Reveal>
          <Reveal className="space-y-4 text-[16px] leading-relaxed text-muted lg:col-span-6 lg:col-start-7">
            <p>
              Webpay, transferencia y tarjetas. Hasta 3 cuotas sin interés en
              consultas. Exámenes de mayor valor, hasta 6. El plan se dice
              antes, no en caja.
            </p>
            <p>
              La boleta electrónica sale el mismo día. Si necesita factura a
              nombre de una empresa o de un seguro, avíselo al agendar.
            </p>
            <p>
              No somos prestador de urgencia ni de hospitalización. Un bono de
              GES o de una prestación hospitalaria no se usa en esta casa.
            </p>
            <Link
              href="/agenda"
              className="font-sans mt-4 inline-flex text-[0.88rem] font-semibold tracking-wide text-sol"
            >
              Pedir hora →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
