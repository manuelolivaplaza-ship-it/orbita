import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { VisitForm } from "@/components/visit-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reservar visita",
  description:
    "Agenda una visita de 40 minutos a ALBA en Lo Barnechea. Recorremos las salas y armamos tu primera semana.",
};

export default function VisitaPage() {
  return (
    <>
      <PageHero
        kicker="Conocer el club"
        title="Una visita de 40 minutos. Sin matrícula, sin presión."
        lead="Recorremos las salas, tomamos un café y vemos qué plan te calza. Te escribimos el mismo día, en horario de club."
      />

      <Container className="grid gap-12 pb-24 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <VisitForm />
        </div>
        <aside className="lg:col-span-5 lg:col-start-8">
          <Photo
            src="/images/cafe.jpg"
            alt="Barra del Café Alba con máquina de espresso de cobre, tazas de gres y fruta de estación"
            className="aspect-[4/3]"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <div className="mt-8 space-y-6 text-sm leading-relaxed">
            <div>
              <p className="kicker">Dirección</p>
              <p className="mt-2">{site.address.full}</p>
            </div>
            <div>
              <p className="kicker">Horario</p>
              <ul className="mt-2 space-y-1 text-ink-soft">
                {site.hours.map((h) => (
                  <li key={h.days}>
                    {h.days}: <span className="text-ink">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="kicker">Si tienes prisa</p>
              <p className="mt-2">
                <a href={site.whatsappHref} className="link-underline">
                  WhatsApp {site.phone}
                </a>
                <br />
                <a href={site.emailHref} className="link-underline">
                  {site.email}
                </a>
              </p>
            </div>
          </div>
        </aside>
      </Container>
    </>
  );
}
