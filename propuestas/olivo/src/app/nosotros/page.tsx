import Image from "next/image";
import type { Metadata } from "next";

import { Container } from "@/components/container";
import { agents } from "@/lib/properties";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Olivo es una corredora boutique del oriente de Santiago. Criterio, pocas comunas, visitas filtradas.",
};

const values = [
  {
    t: "Menos inventario, más criterio",
    d: "No publicamos para llenar la web. Si una casa no la recomendaríamos a un amigo, no está acá.",
  },
  {
    t: "El precio se dice entero",
    d: "UF, gastos comunes, contribuciones, lo que hay que invertir. El asombro barato no cierra escrituras.",
  },
  {
    t: "WhatsApp no es un portal",
    d: "Respondemos como personas. Si no podemos, lo decimos. El 80% de las consultas inmobiliarias en Chile empiezan ahí: hay que estar.",
  },
];

export default function NosotrosPage() {
  const team = [agents.elena, agents.tomas, agents.amanda];

  return (
    <>
      <section className="relative min-h-[56svh] overflow-hidden">
        <Image
          src="/images/office.jpg"
          alt="Oficina de Olivo"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#171c19]/50" />
        <Container className="relative flex min-h-[56svh] flex-col justify-center pt-24 pb-16">
          <p className="text-xs tracking-[0.22em] text-white/70 uppercase">Nosotros</p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl text-white md:text-6xl">
            Una corredora chica a propósito.
          </h1>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-4xl">Por qué existe Olivo</h2>
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-muted-foreground">
              <p>
                El mercado del oriente de Santiago está lleno de avisos y corto de criterio.
                Portales que mezclan mil propiedades. Visitas a destiempo. Tasaciones infladas
                para ganar la exclusiva.
              </p>
              <p>
                Olivo nace al revés: pocas comunas, cartera curada, respuesta el mismo día.
                El nombre no es un adorno — el olivo es un árbol que se queda. Así queremos
                que se sienta una casa bien elegida.
              </p>
              <p>
                Oficina en Alonso de Córdova, Las Condes. Trabajo en terreno, en notaría y
                en WhatsApp. {site.hours}.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl bg-card p-6 ring-1 ring-border">
                <h3 className="font-heading text-2xl">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-card py-16 md:py-24">
        <Container>
          <h2 className="font-heading text-4xl">Quién te va a atender</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.map((person) => (
              <article key={person.name}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                    sizes="33vw"
                  />
                </div>
                <h3 className="mt-5 font-heading text-2xl">{person.name}</h3>
                <p className="text-sm text-primary">{person.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{person.bio}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
