import Image from "next/image";
import { cn } from "@/lib/utils";

export function Frame({
  src,
  alt,
  caption,
  className,
  sizes,
  priority,
  ratio = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  ratio?: string;
}) {
  return (
    <figure className={className}>
      <div className={cn("img-zoom relative overflow-hidden bg-foam-2", ratio)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes ?? "100vw"}
          className="object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="font-mono mt-2.5 text-[11px] tracking-[0.04em] text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
