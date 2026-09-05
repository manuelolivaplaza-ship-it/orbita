import Image from "next/image";

export function Altar({
  src,
  alt,
  caption = "ETER · LA HUELLA · LA REINA · AIRE ·",
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  const text = `${caption} ${caption}`;

  return (
    <div className="relative mx-auto aspect-square w-[min(78vw,34rem)] lg:w-[min(46vw,38rem)]">
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-[-11%] orbit"
        aria-hidden="true"
      >
        <defs>
          <path
            id="huella-orbit"
            d="M50,50 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0"
          />
        </defs>
        <text
          fill="currentColor"
          className="text-muted"
          style={{ fontSize: "3.05px", letterSpacing: "0.42px" }}
        >
          <textPath href="#huella-orbit">{text}</textPath>
        </text>
      </svg>

      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-[-4%]"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r="49.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.28"
          className="draw-ring text-goma/70"
        />
      </svg>

      <div className="absolute inset-0 overflow-hidden rounded-full bg-paper-2">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 78vw, 38rem"
          className="breathe object-cover"
        />
      </div>
    </div>
  );
}
