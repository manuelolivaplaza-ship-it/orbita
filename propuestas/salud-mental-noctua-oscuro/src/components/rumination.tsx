export function Rumination() {
  return (
    <svg
      viewBox="0 0 640 160"
      role="img"
      aria-label="Una línea de pensamiento que se agita y luego se calma"
      className="h-auto w-full text-amber"
    >
      <path
        className="rumi-line"
        d="M8 88 C 40 88, 56 24, 88 48 C 120 72, 136 140, 176 104 C 216 68, 232 16, 272 56 C 312 96, 328 148, 376 100 C 424 52, 448 28, 496 72 C 544 116, 568 88, 632 88"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="8" cy="88" r="2.2" fill="currentColor" />
      <circle cx="632" cy="88" r="2.2" fill="currentColor" />
    </svg>
  );
}
