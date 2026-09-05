import Image from "next/image";
import { Chapter } from "@/components/reveal";

export function PageHero({
  chapter,
  kicker,
  title,
  lead,
  image,
  imageAlt,
}: {
  chapter: string;
  kicker: string;
  title: React.ReactNode;
  lead: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover kenburns"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/20" />
      <div className="relative z-10 flex min-h-[88vh] flex-col justify-end px-5 pt-32 pb-16 md:px-8 lg:px-12">
        <Chapter n={chapter} label={kicker} />
        <h1 className="mt-6 max-w-5xl font-serif text-[12vw] leading-[0.9] font-medium tracking-tight md:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory-soft">
          {lead}
        </p>
      </div>
    </section>
  );
}
