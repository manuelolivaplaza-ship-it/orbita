import Image from "next/image";
import { cn } from "@/lib/utils";

export function Crop({
  src,
  alt,
  className,
  imageClassName,
  priority,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <figure className={cn("crop relative bg-nieve-2", className)}>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
        />
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--tinta)_12%,transparent)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-px -top-px z-[3] h-3 w-3 border-l border-t border-tinta/55"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-px -top-px z-[3] h-3 w-3 border-r border-t border-tinta/55"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-px -left-px z-[3] h-3 w-3 border-b border-l border-tinta/55"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-px -right-px z-[3] h-3 w-3 border-b border-r border-tinta/55"
      />
    </figure>
  );
}
