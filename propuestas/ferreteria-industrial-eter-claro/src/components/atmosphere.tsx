export function Atmosphere() {
  const motes = [
    { top: "16%", left: "10%", delay: "0s" },
    { top: "26%", left: "20%", delay: "1.4s" },
    { top: "34%", left: "7%", delay: "2.2s" },
    { top: "42%", left: "28%", delay: "0.6s" },
    { top: "54%", left: "14%", delay: "3.1s" },
    { top: "20%", left: "46%", delay: "1.8s" },
    { top: "64%", left: "24%", delay: "2.7s" },
    { top: "31%", left: "56%", delay: "0.9s" },
    { top: "72%", left: "12%", delay: "4s" },
    { top: "24%", left: "70%", delay: "2.4s" },
    { top: "48%", left: "62%", delay: "3.6s" },
    { top: "58%", left: "40%", delay: "1.1s" },
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
