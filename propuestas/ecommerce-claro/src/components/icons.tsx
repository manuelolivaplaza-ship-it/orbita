export function IconSearch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 16.5 20 20.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconBag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M6 8h12l-.8 11.2a1 1 0 0 1-1 .8H7.8a1 1 0 0 1-1-.8L6 8Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M9 8V6.5A3 3 0 0 1 12 3.5 3 3 0 0 1 15 6.5V8"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function IconClose({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconPlus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconMinus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className ?? "h-3 w-3"} fill="none" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
