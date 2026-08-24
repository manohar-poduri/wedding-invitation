export default function VineBorder({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1000 70"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="vineGold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--gold-line)" />
          <stop offset="15%" stopColor="var(--gold)" />
          <stop offset="50%" stopColor="var(--gold-bright)" />
          <stop offset="85%" stopColor="var(--gold)" />
          <stop offset="100%" stopColor="var(--gold-line)" />
        </linearGradient>
      </defs>

      <path
        d="M0 35 C 120 10, 180 55, 300 30 S 480 8, 500 35 S 680 60, 800 30 S 920 10, 1000 35"
        fill="none"
        stroke="url(#vineGold)"
        strokeWidth="1.4"
      />

      {[80, 220, 360, 500, 640, 780, 920].map((x, i) => (
        <g key={x} opacity={0.9}>
          <path
            d={`M${x} ${i % 2 === 0 ? 24 : 46} q7 -12 14 0 q-7 12 -14 0 Z`}
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.1"
          />
        </g>
      ))}

      <circle cx="500" cy="35" r="3.2" fill="var(--gold-bright)" />
    </svg>
  );
}