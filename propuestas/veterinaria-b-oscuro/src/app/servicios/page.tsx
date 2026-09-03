import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { services, tariffs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Consulta, urgencias 24 h, cirugía, internación, imágenes, laboratorio, medicina felina, prevención y odontología en Farol, Ñuñoa.",
};

export default function ServiciosPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="01"
        kicker="Servicios"
        title="Lo que se hace acá, con cifra."
        lede="Consulta con precio. Procedimiento con presupuesto escrito. Si el plan cambia, se avisa antes de tocar."
      />

      <ul className="mt-4">
        {services.map((s) => (
          <li key={s.slug} className="border-t border-line">
            <Link
              href={`/servicios/${s.slug}`}
              className="group grid items-center gap-6 py-8 lg:grid-cols-12"
            >
              <p className="kicker tabular lg:col-span-1">{s.folio}</p>
              <div className="lg:col-span-5">
                <h2 className="font-display text-3xl leading-tight group-hover:text-lantern">
                  {s.name}
                </h2>
                <p className="mt-2 max-w-[40ch] text-paper-dim">{s.short}</p>
              </div>
              <p className="text-sm text-muted lg:col-span-3">{s.duration}</p>
              <p className="font-mono text-[0.78rem] tabular tracking-wide text-lantern lg:col-span-3 lg:text-right">
                {s.price}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <section className="mt-8 border-t border-line pt-16">
        <p className="kicker">Arancel de entrada</p>
        <h2 className="mt-4 font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-[0.95]">
          Lo que se cobra sin sorpresa.
        </h2>
        <p className="mt-4 max-w-[46ch] text-paper-dim">
          Cirugías, internación compleja y odontología se presupuestan por
          escrito. Boleta siempre. Particular: en Chile la veterinaria no va
          por Fonasa ni isapre.
        </p>
        <table className="mt-10 w-full text-left">
          <tbody>
            {tariffs.map((row) => (
              <tr key={row.item} className="border-t border-line">
                <th className="py-4 pr-4 font-normal text-paper-dim">{row.item}</th>
                <td className="py-4 text-right font-mono text-[0.85rem] tabular tracking-wide text-lantern">
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="mt-16 img-zoom relative aspect-[16/7]">
        <Image
          src="/images/lab.jpg"
          alt="Laboratorio de Farol de noche"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
