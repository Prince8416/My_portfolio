import { useEffect, useState } from "react";

const logs = [
  "POST /api/orders  201 Created",
  "GET /api/reports/sales?period=month  200 OK",
  "POST /api/orders/42/cancel  200 stock restored",
  "GET /api/products?page=2  200 OK",
  "POST /api/wishlist  201 Created",
];

const nodes = [
  { y: 30, title: "React + Tailwind", note: "screens, state, forms" },
  { y: 174, title: "Node.js + Express", note: "auth, validation, business rules" },
  { y: 318, title: "MySQL", note: "orders, stock, customers" },
];

export default function ArchDiagram() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % logs.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <figure className="bg-blueprint rounded-3xl p-5 text-white shadow-xl shadow-cobalt/25 sm:p-7">
      <figcaption className="mb-2 font-display text-lg font-bold">One request, three layers</figcaption>
      <p className="mb-4 max-w-sm text-sm text-white/80">
        This is the path every action takes in the apps I build, from a click in the browser to a row in the database and back.
      </p>

      <svg viewBox="0 0 360 400" className="mx-auto w-full max-w-sm" role="img" aria-label="A request travelling from React to Express to MySQL and back">
        <g stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeDasharray="5 6" fill="none">
          <path d="M150 102 V318" />
          <path d="M210 318 V102" />
        </g>

        {nodes.map((n) => (
          <g key={n.title}>
            <rect x="40" y={n.y} width="280" height="72" rx="14" fill="#fff" />
            <text x="60" y={n.y + 33} className="font-display" fontSize="19" fontWeight="700" fill="#0E1530">
              {n.title}
            </text>
            <text x="60" y={n.y + 55} fontSize="12.5" fill="#5B6482">
              {n.note}
            </text>
          </g>
        ))}

        <circle r="6" fill="#FFB82E" className="motion-reduce:hidden">
          <animateMotion dur="2.4s" repeatCount="indefinite" path="M150 102 V318" />
        </circle>
        <circle r="6" fill="#fff" stroke="#0E1530" strokeWidth="1.5" className="motion-reduce:hidden">
          <animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite" path="M210 318 V102" />
        </circle>
      </svg>

      <p key={i} className="mt-3 truncate rounded-xl bg-ink/40 px-4 py-2.5 font-mono text-[13px] text-white/95" aria-live="off">
        {logs[i]}
      </p>
    </figure>
  );
}
