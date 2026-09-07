import type { Metadata } from "next";

import { Container } from "@/components/container";
import { LeadForm } from "@/components/lead-form";
import { Button } from "@/components/ui/button";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos por WhatsApp, correo o en la oficina de Alonso de Córdova, Las Condes.",
};

export default function ContactoPage() {
  return (
    <section className="py-14 md:py-20">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs tracking-[0.22em] text-primary uppercase">Contacto</p>
          <h1 className="mt-3 font-heading text-4xl md:text-6xl">
            El camino más corto es WhatsApp.
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            Si es para visitar, tasar o preguntar una UF, te respondemos en el día
            hábil. Si es domingo, al otro día a primera hora.
          </p>

          <dl className="mt-10 grid gap-6 text-sm">
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">Teléfono</dt>
              <dd className="mt-1">
                <a href={site.phoneHref} className="font-heading text-2xl hover:text-primary">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">Correo</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="hover:text-primary">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">Oficina</dt>
              <dd className="mt-1">
                {site.address}
                <br />
                {site.comuna}
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">Horario</dt>
              <dd className="mt-1">{site.hours}</dd>
            </div>
          </dl>

          <Button asChild className="mt-8 h-12 px-6">
            <a
              href={waLink("Hola Olivo, quiero hablar con un corredor.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </a>
          </Button>
        </div>

        <div className="rounded-3xl bg-card p-6 ring-1 ring-border md:p-8">
          <LeadForm intent="contacto" />
        </div>
      </Container>
    </section>
  );
}
