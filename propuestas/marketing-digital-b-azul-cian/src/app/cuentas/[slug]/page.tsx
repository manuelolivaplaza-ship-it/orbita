import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Frame } from "@/components/frame";
import { Reveal } from "@/components/reveal";
import { accounts, getAccount } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return accounts.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const account = getAccount(slug);
  if (!account) return {};
  return {
    title: `${account.client} — ${account.title}`,
    description: account.summary,
  };
}

export default async function AccountPage({ params }: Props) {
  const { slug } = await params;
  const account = getAccount(slug);
  if (!account) notFound();
  const others = accounts.filter((item) => item.slug !== account.slug).slice(0, 3);

  return (
    <>
      <section className="pt-32 pb-12 lg:pt-40">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <p className="mark">
              {account.tx} · {account.client} · {account.place}
            </p>
            <h1 className="font-display mt-4 max-w-[16ch] text-[clamp(2.5rem,6vw,4.8rem)] font-medium leading-[0.94] tracking-tight">
              {account.title}
            </h1>
            <div className="rule mt-7 w-16" />
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-muted">
              {account.summary}
            </p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-4 lg:pt-10">
            <p className="font-mono nums text-[3rem] leading-none text-cyan-deep">
              {account.metric}
            </p>
            <p className="mt-3 text-[15px] text-muted">{account.metricLabel}</p>
            <p className="font-mono mt-6 text-[13px] leading-relaxed text-muted">
              {account.months}
              <br />
              {account.channel}
              <br />
              {account.year}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="shell">
          <Frame
            src={account.image}
            alt=""
            ratio="aspect-[16/9] lg:aspect-[21/9]"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            {account.body.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-5 text-[17px] leading-[1.8] text-muted first:mt-0"
              >
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
            <p className="mark">Qué se hizo</p>
            <ul className="mt-4">
              {account.work.map((item) => (
                <li
                  key={item}
                  className="border-t border-line py-3 text-[15px]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={`/canales/${account.channelSlug}`}
              className="mt-8 inline-block text-[15px] font-medium link-line"
            >
              Canal {account.channel}
            </Link>
            <p className="mark mt-14">Otras cuentas</p>
            <ul className="mt-4">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/cuentas/${item.slug}`}
                    className="group flex items-baseline justify-between gap-4 border-t border-line py-3"
                  >
                    <span className="font-display text-[1.25rem] tracking-tight group-hover:text-blue">
                      {item.client}
                    </span>
                    <span className="font-mono nums text-[12px] text-muted">
                      {item.tx}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
