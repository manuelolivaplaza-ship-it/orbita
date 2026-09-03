import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getVet, team } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return team.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vet = getVet(slug);
  if (!vet) return { title: "Médico" };
  return {
    title: vet.name,
    description: `${vet.role} de Farol Hospital Veterinario, Ñuñoa.`,
  };
}

export default async function VetPage({ params }: Props) {
  const { slug } = await params;
  const vet = getVet(slug);
  if (!vet) notFound();

  const others = team.filter((v) => v.slug !== vet.slug);

  return (
    <div className="shell pb-24 pt-10 sm:pt-14">
      <Reveal>
        <p className="kicker">{vet.role}</p>
        <h1 className="mt-4 font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.92]">
          {vet.name}
        </h1>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <Reveal className="relative aspect-[3/4] overflow-hidden lg:col-span-5">
          <Image
            src={vet.image}
            alt={`Retrato de ${vet.name}`}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            priority
          />
        </Reveal>
        <div className="flex flex-col justify-center lg:col-span-7">
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-paper-dim">
            {vet.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
            <div>
              <dt className="kicker">Formación</dt>
              <dd className="mt-3 space-y-2 text-[0.95rem] text-paper-dim">
                {vet.education.map((e) => (
                  <p key={e}>{e}</p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="kicker">Foco</dt>
              <dd className="mt-3 space-y-2 text-[0.95rem] text-paper-dim">
                {vet.focus.map((f) => (
                  <p key={f}>{f}</p>
                ))}
              </dd>
            </div>
          </dl>
          <Link href="/hora" className="btn btn-primary mt-10 w-fit">
            Pedir hora
          </Link>
        </div>
      </div>

      <section className="mt-20 border-t border-line pt-12">
        <p className="kicker">La mesa</p>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((v) => (
            <li key={v.slug}>
              <Link href={`/equipo/${v.slug}`} className="group block">
                <div className="img-zoom relative aspect-[3/4]">
                  <Image
                    src={v.image}
                    alt={`Retrato de ${v.name}`}
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 font-display text-xl leading-tight group-hover:text-lantern">
                  {v.name}
                </p>
                <p className="mt-1 text-sm text-muted">{v.role}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
