import type { Metadata } from "next";
import Link from "next/link";
import { Frame } from "@/components/frame";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { mesa, principles } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "El estudio",
  description:
    "MAREA en Barrio Puerto, Valparaíso. Cinco personas, nueve cuentas. Cochrane 412.",
};

export default function EstudioPage() {
  return (
    <>
      <PageIntro
        mark={`${site.barrio} · ${site.address.city}`}
        title="Un piso sobre el puerto."
        lead="No estamos en Providencia. El trolley pasa abajo. La bahía se ve si el día deja. El criterio no cambia por el código postal."
      />

      <section className="pb-12">
        <div className="shell grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Frame
              src="/images/puerto.jpg"
              alt="Muelle de Valparaíso con amarras, contenedores y agua cian"
              caption="Puerto de Valparaíso · la pauta también se amarra"
              ratio="aspect-[4/3] lg:aspect-[16/10]"
              sizes="(min-width: 1024px) 66vw, 100vw"
              priority
            />
          </div>
          <div className="lg:col-span-4">
            <Frame
              src="/images/cerro.jpg"
              alt="Calle de cerro en Valparaíso, muro cian y bahía al fondo"
              caption="Subida al cerro · 4G de verdad"
              ratio="aspect-[3/4]"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="text-[17px] leading-[1.8] text-muted">
              Amelia abrió este piso en {site.founded}, después de cinco años en
              una agencia de Santiago donde las cuentas se acumulaban y el
              markup se explicaba como si fuera clima. Acá se cobra el oficio.
              La factura de Meta le llega a usted.
            </p>
            <p className="mt-5 text-[17px] leading-[1.8] text-muted">
              Somos {site.people}. Tomamos {site.accounts} cuentas. Si el mes
              está lleno, se lo decimos en la primera respuesta. El retainer se
              firma cuando hay un número, no una vibra.
            </p>
          </Reveal>
          <div className="lg:col-span-5 lg:col-start-8">
            {principles.map((item) => (
              <Reveal key={item.folio}>
                <div className="border-t border-line py-5">
                  <p className="font-mono nums text-[13px] text-cyan-deep">
                    {item.folio}
                  </p>
                  <h2 className="font-display mt-2 text-[1.5rem] leading-tight tracking-tight">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="mark">Puerto</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3rem)] font-medium leading-[0.96] tracking-tight">
              Cómo llegar.
            </h2>
            <address className="mt-6 not-italic text-[16px] leading-relaxed">
              {site.address.line}
              <br />
              {site.address.city}, {site.address.region}
              <br />
              {site.metro}
            </address>
            <p className="mt-4 text-[16px]">{site.hours}</p>
            <p className="mt-4 text-[16px]">
              <a href={site.phoneHref} className="link-line">
                {site.phone}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="link-line">
                {site.email}
              </a>
            </p>
            <a
              href={site.address.maps}
              className="mt-6 inline-block text-[15px] font-medium link-line"
            >
              Abrir en Maps
            </a>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7 lg:col-start-6">
            <p className="mark">Rol de guardia</p>
            <ul className="mt-6">
              {mesa.map((person) => (
                <li key={person.slug}>
                  <Link
                    href={`/mesa/${person.slug}`}
                    className="group flex items-baseline justify-between gap-4 border-t border-line py-4"
                  >
                    <span>
                      <span className="font-display text-[1.45rem] tracking-tight group-hover:text-blue">
                        {person.name}
                      </span>
                      <span className="ml-3 text-[14px] text-muted">
                        {person.role}
                      </span>
                    </span>
                    <span className="font-mono text-[12px] text-muted">
                      {person.station}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/lectura"
              className="mt-10 inline-flex h-12 items-center bg-navy px-6 text-[0.92rem] font-semibold text-foam transition-colors hover:bg-ink"
            >
              Pedir una lectura
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
