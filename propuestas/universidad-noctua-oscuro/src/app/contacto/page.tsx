import type { Metadata } from "next";
import { ApplyForm } from "@/components/apply-form";
import { Clock } from "@/components/night-bar";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Admisión NOCTUA, Santa Filomena 184, Recoleta. Correo, WhatsApp y visita los sábados.",
};

export default function ContactoPage() {
  return (
    <>
      <PageIntro
        kicker="Contacto"
        title="Admisión responde. No un call center."
        lead="De 17:30 a 21:00, lunes a viernes. Si no contestamos, devolvemos el llamado el mismo día hábil. La visita al campus es sábado, con inscripción."
      />

      <section className="border-t border-line py-24 lg:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <dl className="space-y-10">
              <div>
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                  Teléfono
                </dt>
                <dd className="mt-3">
                  <a
                    href={site.phoneHref}
                    className="font-display text-4xl font-semibold tracking-tight"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                  WhatsApp
                </dt>
                <dd className="mt-3">
                  <a href={site.whatsappHref} className="link-line text-lg">
                    {site.whatsapp}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                  Correo
                </dt>
                <dd className="mt-3">
                  <a href={`mailto:${site.email}`} className="link-line text-lg">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                  Dirección
                </dt>
                <dd className="mt-3 text-paper-dim">
                  {site.address.line1}
                  <br />
                  {site.address.commune}, {site.address.city}
                  <br />
                  {site.access}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                  Horario
                </dt>
                <dd className="mt-3 space-y-1 text-paper-dim">
                  {site.hours.map((row) => (
                    <p key={row.days}>
                      {row.days}: {row.time}
                    </p>
                  ))}
                </dd>
                <Clock />
              </div>
            </dl>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="kicker">Carta a admisión</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
              Una carrera. Una comuna. Un nombre.
            </h2>
            <ApplyForm className="mt-10" />
          </div>
        </div>
      </section>
    </>
  );
}
