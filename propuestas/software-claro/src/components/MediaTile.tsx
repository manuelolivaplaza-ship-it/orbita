import { useState, useEffect } from "react";

type Props = {
  filename: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
  width?: number;
  height?: number;
};

export function MediaTile({ filename, alt, style, className, width, height }: Props) {
  const [missing, setMissing] = useState(false);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    // probe existence
    const bases = ["/media/" + filename, "/propuestas/software-claro/media/" + filename];
    let cancelled = false;
    (async () => {
      for (const b of bases) {
        try {
          const r = await fetch(b, { method: "HEAD" });
          if (r.ok) {
            if (!cancelled) setSrc(b);
            return;
          }
        } catch { /* ignore */ }
      }
      if (!cancelled) {
        console.warn(`media falta: ${filename}`);
        setMissing(true);
      }
    })();
    return () => { cancelled = true; };
  }, [filename]);

  if (missing || src === null) {
    // show placeholder until proven exists; if src null and not yet missing we still show placeholder to avoid flicker? show falta only when confirmed missing
    // To avoid flash, we check missing flag only
    if (missing) {
      return (
        <div
          className={`media-falta ${className ?? ""}`}
          data-falta={filename}
          style={style}
        >
          falta: {filename}
        </div>
      );
    }
    // provisional placeholder with same dimensions but not flagged as falta until check completes
    return (
      <div
        className={`media-falta ${className ?? ""}`}
        data-falta={filename}
        style={{ opacity: 0.6, ...style }}
        aria-hidden="true"
      >
        {/* loading */}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      onError={() => {
        console.warn(`media falta: ${filename}`);
        setMissing(true);
      }}
    />
  );
}
