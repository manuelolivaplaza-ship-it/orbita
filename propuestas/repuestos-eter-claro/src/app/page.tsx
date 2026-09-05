import Image from "next/image";
import Link from "next/link";
import { ConsultForm } from "@/components/consult-form";
import { FamilyIndex } from "@/components/family-index";
import { Reveal } from "@/components/reveal";
import { VehicleBench } from "@/components/vehicle-bench";
import { comunasHoy, cruce, facts, featuredPiece, stockLabel } from "@/lib/data";
import { site } from "@/lib/site";
import { clp } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <Hero />
      <VehicleBench />
      <Facts />
      <Familias />
      <Altar />
      <Cruce />
      <Cobertura />
      <Mostrador />
    </>
  );
}

function Hero() {
  return (
    <section id="pieza" className="relative">
      <div className="relative h-[72svh] lg:hidden">
        <Image
          src="/images/hero-m.jpg"
          alt="Disco de freno ventilado de pie en un charco, nave con niebla"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mist via-mist/20 to-transparent" />
      </div>

      <div className="relative hidden lg:block">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="Disco de freno ventilado de pie en un charco, luz rasante en una nave con niebla"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="mist-veil absolute inset-0" />
          <p className="hero-caption font-sku absolute top-1/2 right-10 z-10 text-[11px] text-ink/55">
            Disco ventilado · FR-440 · Independencia
          </p>
        </div>
      </div>

      <div className="shell relative z-[1] pt-8 pb-6 lg:absolute lg:inset-0 lg:flex lg:items-center lg:pt-24 lg:pb-20">
        <div className="max-w-[38rem] lg:col-span-5">
          <p className="kicker">Repuestos · Independencia</p>
          <h1 className="font-display mt-5 text-[clamp(3.2rem,8.6vw,7.6rem)] font-normal leading-[0.86] tracking-tight">
            La pieza
            <br />
            que <em className="italic text-ether-deep">falta.</em>
          </h1>
          <p className="mt-7 max-w-[36ch] text-[17px] leading-relaxed text-muted">
            Cruzamos patente, marca y motor. Te despachamos hoy en la RM o la
            retiras en el mostrador.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#consulta-vehiculo"
              className="font-ui inline-flex h-12 items-center bg-ether-deep px-6 text-[0.78rem] font-medium tracking-[0.14em] text-mist uppercase transition-colors hover:bg-ink"
            >
              Cruzar pieza
            </a>
            <a
              href={site.whatsapp}
              className="font-ui inline-flex h-12 items-center border border-ink px-6 text-[0.78rem] font-medium tracking-[0.14em] uppercase transition-colors hover:border-ether hover:text-ether-deep"
            >
              WhatsApp
            </a>
          </div>
          <p className="mt-5 text-[13px] text-muted lg:hidden">
            {site.address.line} · {site.metro}
          </p>
        </div>
      </div>
    </section>
  );
}

function Facts() {
  return (
    <div className="mt-10 border-y border-line bg-vapor/40">
      <div className="shell grid grid-cols-2 gap-y-8 py-9 sm:grid-cols-4">
        {facts.map((item) => (
          <div key={item.label}>
            <p className="font-display nums text-3xl tracking-tight lg:text-4xl">
              {item.value}
            </p>
            <p className="mt-1 text-[11px] tracking-[0.16em] text-muted uppercase">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Familias() {
  return (
    <section id="familias" className="py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <p className="kicker">Índice</p>
          <h2 className="font-display mt-4 max-w-[16ch] text-[clamp(2.2rem,4.6vw,4rem)] font-normal leading-[0.95] tracking-tight">
            Seis familias. Una ficha.
          </h2>
        </Reveal>
        <div className="mt-14">
          <FamilyIndex />
        </div>
      </div>
    </section>
  );
}

function Altar() {
  const piece = featuredPiece();
  return (
    <section id="linea" className="border-y border-line bg-vapor/30 py-24 lg:py-32">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="relative aspect-[4/3] overflow-hidden lg:col-span-7">
          <Image
            src={piece.image}
            alt={piece.imageAlt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-5">
          <p className="kicker">Pieza en sala</p>
          <p className="font-sku mt-4 text-[12px] text-ether">{piece.sku}</p>
          <h2 className="font-display mt-3 text-[clamp(2.2rem,4vw,3.6rem)] font-normal leading-[0.95] tracking-tight">
            {piece.name}
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-muted">{piece.lead}</p>
          <p className="mt-4 text-[14px] text-muted">{piece.fits}</p>
          <p className="font-display mt-8 text-4xl tracking-tight">
            {clp(piece.priceFrom)}
            <span className="ml-2 text-lg text-muted"> {piece.unit}</span>
          </p>
          <p className="mt-2 text-[12px] tracking-wide text-muted uppercase">
            {stockLabel[piece.stock]} · valores referenciales, IVA incluido
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/pieza/${piece.slug}`}
              className="font-ui inline-flex h-12 items-center bg-ether-deep px-6 text-[0.78rem] font-medium tracking-[0.14em] text-mist uppercase"
            >
              Ver ficha
            </Link>
            <Link
              href="/consulta"
              className="font-ui inline-flex h-12 items-center border border-ink px-6 text-[0.78rem] font-medium tracking-[0.14em] uppercase"
            >
              Cotizar
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Cruce() {
  return (
    <section id="cruce" className="py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <p className="kicker">El cruce</p>
          <h2 className="font-display mt-4 max-w-[18ch] text-[clamp(2.2rem,4.6vw,4rem)] font-normal leading-[0.95] tracking-tight">
            No se cotiza de oído.
          </h2>
        </Reveal>
        <ol className="mt-16 grid gap-0 border-t border-line lg:grid-cols-3">
          {cruce.map((step, i) => (
            <li
              key={step.index}
              className="border-b border-line py-10 lg:border-r lg:border-b-0 lg:px-8 lg:py-12 first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0"
            >
              <Reveal delay={i * 0.08}>
                <p className="font-sku text-[12px] text-ether">{step.index}</p>
                <h3 className="font-display mt-4 text-3xl tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-[36ch] text-[16px] leading-relaxed text-muted">
                  {step.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Cobertura() {
  return (
    <section id="cobertura" className="border-y border-line py-24 lg:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Despacho</p>
          <h2 className="font-display mt-4 text-[clamp(2.2rem,4.4vw,3.8rem)] font-normal leading-[0.95] tracking-tight">
            Hoy en la RM, si cruzas antes de las 13:00.
          </h2>
          <p className="mt-6 max-w-[42ch] text-[16px] leading-relaxed text-muted">
            Retiro en Independencia altiro. A regiones, Chilexpress 24–48 h.
            El flete se confirma con el peso de la pieza.
          </p>
          <Link
            href="/despacho"
            className="font-ui mt-8 inline-flex items-center text-[0.82rem] font-medium tracking-[0.14em] text-ether-deep uppercase"
          >
            Ver comunas <span aria-hidden className="ml-2">→</span>
          </Link>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-7">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[15px] text-muted">
            {comunasHoy.map((comuna) => (
              <li key={comuna} className="after:ml-5 after:text-line after:content-['/'] last:after:content-none">
                {comuna}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Mostrador() {
  return (
    <section id="mostrador" className="py-24 lg:py-32">
      <div className="shell grid items-start gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Mostrador</p>
          <h2 className="font-display mt-4 text-[clamp(2.2rem,4.4vw,3.8rem)] font-normal leading-[0.95] tracking-tight">
            Independencia 3142.
          </h2>
          <p className="mt-6 max-w-[40ch] text-[16px] leading-relaxed text-muted">
            La calle de los repuestos, con luz de sala. Trae la patente o el
            número OEM. Si no lo tienes, lo sacamos juntos.
          </p>
          <p className="mt-6 text-[15px] leading-relaxed">
            {site.hours}
            <br />
            {site.metro}
          </p>
          <div className="relative mt-10 aspect-[16/9] overflow-hidden">
            <Image
              src="/images/mostrador.jpg"
              alt="Cajas mate apiladas sobre un mostrador de concreto, estantería al fondo"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
          <ConsultForm />
        </Reveal>
      </div>
    </section>
  );
}
