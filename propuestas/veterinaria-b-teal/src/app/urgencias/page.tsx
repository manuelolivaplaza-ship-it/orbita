import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { HoursLive } from "@/components/hours-live";
import { PageIntro } from "@/components/page-intro";
import { Triage } from "@/components/triage";
import { site, triageRed } from "@/lib/site";

export const metadata: Metadata = {
  title: "Urgencias 24 horas",
  description:
    "Urgencias veterinarias las 24 horas en Isla Teja, Valdivia. Atropello, convulsión, distensión, parto. Llama al +56 63 221 8440.",
};

export default function UrgenciasPage() {
  return (
    <>
      <PageIntro
        kicker="Urgencias 24 h"
        title="El río no espera."
        italic="Tampoco un pulso."
        lead="Puerta de urgencias todo el año. Si puedes avisar, avisa. Si no, ven. Estabilizamos primero. Hablamos de plata después."
        image="/images/noche.jpg"
        alt="Estuario de noche, con lluvia sobre el agua"
      />

      <Container className="pb-20">
        <div className="flex flex-wrap items-center gap-4">
          <Button asChild className="h-12 rounded-full px-6">
            <a href={site.phoneHref}>Llamar {site.phoneIntl}</a>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full px-6">
            <a href={site.whatsapp}>WhatsApp</a>
          </Button>
          <HoursLive />
        </div>

        <div className="mt-16">
          <Triage />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="kicker">Ven ahora si</p>
            <ul className="mt-6 space-y-3">
              {triageRed.map((item) => (
                <li key={item} className="flex gap-3 text-[0.98rem]">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-destructive" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker">Cómo llegar de noche</p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Los Robles 1240, Isla Teja. La puerta de urgencias está a la
              izquierda de la recepción, con un letrero teal. Timbre. Hay
              alguien. Estaciona bajo techo; el río está a tres metros y de
              noche el borde está mojado.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Derecho de urgencia: $48.000. Cubre evaluación y estabilización
              inicial. Cirugía, imagen e internación se informan en cuanto el
              animal respira.
            </p>
            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[1.4rem]">
              <Image
                src="/images/uci.jpg"
                alt="Sala de UCI de Estuario"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
