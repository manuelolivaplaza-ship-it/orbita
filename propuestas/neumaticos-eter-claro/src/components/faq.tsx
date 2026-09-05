import { faqs } from "@/data/content";

export function Faq() {
  return (
    <div>
      {faqs.map((item, index) => (
        <details
          key={item.q}
          className="faq-item group border-t border-line last:border-b"
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6">
            <span className="font-display text-2xl font-light tracking-tight md:text-3xl">
              {item.q}
            </span>
            <span className="faq-mark mt-2 block h-4 w-4 shrink-0 transition-transform duration-300">
              <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
                <path
                  d="M8 1v14M1 8h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </span>
          </summary>
          <p className="max-w-2xl pb-8 text-base leading-relaxed text-ink-soft">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
