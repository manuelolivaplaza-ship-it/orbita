export function Atmosphere() {
  const motes = [
    { top: "18%", left: "12%", delay: "0s" },
    { top: "28%", left: "22%", delay: "1.4s" },
    { top: "36%", left: "8%", delay: "2.2s" },
    { top: "44%", left: "31%", delay: "0.6s" },
    { top: "52%", left: "16%", delay: "3.1s" },
    { top: "22%", left: "48%", delay: "1.8s" },
    { top: "62%", left: "27%", delay: "2.7s" },
    { top: "33%", left: "58%", delay: "0.9s" },
    { top: "70%", left: "14%", delay: "4s" },
    { top: "26%", left: "72%", delay: "2.4s" },
    { top: "48%", left: "64%", delay: "3.6s" },
    { top: "58%", left: "42%", delay: "1.1s" },
  ];

  return (
    <div className="dust pointer-events-none absolute inset-0 z-10" aria-hidden="true">
      {motes.map((mote, index) => (
        <span
          key={index}
          style={{
            top: mote.top,
            left: mote.left,
            animationDelay: mote.delay,
            animationDuration: `${8 + (index % 5)}s`,
          }}
        />
      ))}
    </div>
  );
}
