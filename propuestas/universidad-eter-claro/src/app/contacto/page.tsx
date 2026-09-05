import type { Metadata } from "next";
import { ApplyForm } from "@/components/apply-form";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Admisión ETER, Camino El Arrayán 3940, Lo Barnechea. Teléfono, WhatsApp y correo.",
};

export default function ContactoPage() {
  return (
    <>
      <PageIntro
        kicker="Contacto"
        title="Admisión responde. No un call center."
        lead={`${site.address.line1}, ${site.address.commune}. ${site.access}. Si no contestamos, devolvemos el llamado el mismo día hábil.`}
      />

      <section className="border-t border-linea py-24 lg:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <dl className="space-y-8 text-sm">
              <div>
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
                  Teléfono
                </dt>
                <dd className="mt-2">
                  <a
                    href={site.phoneHref}
                    className="font-display text-3xl font-light nums tracking-tight"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
                  WhatsApp
                </dt>
                <dd className="mt-2">
                  <a href={site.whatsappHref} className="link-line">
                    {site.whatsapp}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
                  Correo
                </dt>
                <dd className="mt-2">
                  <a href={`mailto:${site.email}`} className="link-line">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
                  Dirección
                </dt>
                <dd className="mt-2 text-tinta-suave">
                  {site.address.line1}
                  <br />
                  {site.address.commune}, {site.address.city}
                  <br />
                  {site.access}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
                  Horario
                </dt>
                <dd className="mt-2 text-tinta-suave">
                  {site.hours.map((row) => (
                    <p key={row.days}>
                      {row.days}: {row.time}
                    </p>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <ApplyForm />
          </div>
        </div>
      </section>
    </>
  );
}
