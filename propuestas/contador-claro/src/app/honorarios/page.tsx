import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { fees } from "@/lib/data";

export const metadata: Metadata = {
  title: "Honorarios",
  description:
    "Honorarios de CLARO en UF, por escrito, más IVA. Primera hora $38.000. Sin letra chica.",
};

export default function HonorariosPage() {
  return (
    <>
      <PageIntro
        kicker="Honorarios"
        title="En UF. Por escrito. Más IVA."
        lead="La primera hora cuesta $38.000 y se descuenta si tomamos la cartera. El resto se pacta antes de firmar. Un resultado fiscal no se promete."
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-[17px] leading-[1.8] text-muted">
              Cotizamos con una muestra del mes — cantidad de documentos,
              trabajadores, si hay existencias. El número de esta tabla es el
              piso, no un anzuelo.
            </p>
            <p className="mt-5 text-[17px] leading-[1.8] text-muted">
              Facturamos el día 5. Se paga a 15 días. Si un mes no hay
              movimiento, el honorario mínimo se mantiene: la libreta sigue
              abierta.
            </p>
            <Link
              href="/contacto"
              className="mt-10 inline-flex h-12 items-center bg-cobre px-6 text-[0.9rem] font-semibold tracking-wide text-luz hover:bg-cobre-deep"
            >
              Pedir una hora
            </Link>
          </Reveal>
          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {fees.map((item) => (
                <Reveal
                  key={item.servicio}
                  className="grid gap-2 border-b border-line py-6 sm:grid-cols-12 sm:items-baseline"
                >
                  <div className="sm:col-span-7">
                    <p className="text-[18px] font-semibold tracking-tight">
                      {item.servicio}
                    </p>
                    <p className="mt-1 text-[14px] leading-relaxed text-muted">
                      {item.nota}
                    </p>
                  </div>
                  <p className="nums text-cobre sm:col-span-5 sm:text-right text-[20px] font-semibold">
                    {item.precio}
                  </p>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-[13px] leading-relaxed text-muted">
              Valores netos, más IVA. UF del día de la factura. Sujetos a
              una muestra del mes. No incluyen patente municipal, notaría ni
              derechos del Registro de Empresas y Sociedades.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
