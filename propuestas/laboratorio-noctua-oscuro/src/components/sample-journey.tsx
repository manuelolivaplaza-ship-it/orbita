import { journey } from "@/data/content";
import { Reveal } from "@/components/reveal";

export function SampleJourney() {
  return (
    <ol className="relative">
      <span
        aria-hidden="true"
        className="absolute left-[2.4rem] top-3 bottom-3 w-px bg-line md:left-[3.15rem]"
      />
      {journey.map((item, index) => (
        <Reveal as="li" key={item.hora} delay={index * 80} className="relative grid grid-cols-[5.5rem_1fr] gap-6 py-8 md:grid-cols-[7rem_1fr] md:gap-10">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-amber nums">
            {item.hora}
          </p>
          <div>
            <span
              aria-hidden="true"
              className="absolute left-[2.15rem] top-9 h-2 w-2 rounded-full bg-amber md:left-[2.9rem]"
            />
            <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              {item.title}
            </h3>
            <p className="mt-3 max-w-xl text-paper-dim">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
