import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReembolsoPanel } from "@/components/reembolso-panel";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Reembolso isapre",
  description:
    "Cian atiende de forma particular y emite boleta con código de prestación para que tu isapre te reembolse según plan.",
};

export default function ReembolsoPage() {
  return (
    <>
      <PageHero
        eyebrow="Reembolso"
        title="Particular, con papeles en regla."
        lead="No somos prestador en convenio. Emitimos boleta o factura electrónica con el código de prestación. Tu isapre reembolsa según plan. Sin comercial de pasillo."
      />
      <Container className="pb-24">
        <ReembolsoPanel />
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {[
            {
              n: "01",
              t: "Diagnóstico",
              d: "En la primera visita te decimos qué prestación corresponde y si tu plan suele cubrirla. No prometemos un porcentaje que no controlamos.",
            },
            {
              n: "02",
              t: "Boleta el mismo día",
              d: "Caja emite boleta o factura electrónica. El detalle incluye código y valor. Lo recibes en el correo.",
            },
            {
              n: "03",
              t: "Tú lo subes",
              d: "La app de tu isapre. Si se traba, recepción te indica el recuadro. No cobramos por eso.",
            },
          ].map((s) => (
            <div key={s.n} className="rounded-[1.3rem] bg-mist p-7">
              <p className="font-display text-cian">{s.n}</p>
              <h2 className="mt-3 font-display text-2xl tracking-tight">
                {s.t}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.d}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Los porcentajes reales dependen de tu plan, tope anual y si la
          prestación está en arancel. Un implante no se reembolsa igual que una
          higiene. Por eso no publicamos una tabla mágica: publicamos el
          método.
        </p>
        <Button asChild className="mt-8 h-12 rounded-xl px-6">
          <Link href="/hora">Agendar y hablar de tu plan</Link>
        </Button>
      </Container>
    </>
  );
}
