export default function Gopuram({ className = "" }) {
  // Stylised South Indian gopuram silhouette, drawn as tiered arches
  // narrowing toward a kalasham finial — the page's signature motif,
  // echoing Vizianagaram's temple architecture and the pre-dawn muhurtham.
  return (
    <svg
      className={className}
      viewBox="0 0 900 340"
      preserveAspectRatio="xMidYMax meet"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldStroke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ecd08a" />
          <stop offset="100%" stopColor="#c9a24b" />
        </linearGradient>
      </defs>

      {/* finial / kalasham */}
      <circle cx="450" cy="18" r="7" fill="url(#goldStroke)" />
      <path d="M450 25 L450 46" stroke="url(#goldStroke)" strokeWidth="3" />

      {/* five tapering tiers */}
      {[
        { y: 46, w: 90 },
        { y: 88, w: 170 },
        { y: 138, w: 260 },
        { y: 196, w: 360 },
        { y: 262, w: 480 },
      ].map((tier, i) => (
        <g key={i}>
          <path
            d={`M${450 - tier.w / 2} ${tier.y + 38} L${450 - tier.w / 2 + 26} ${tier.y} L${450 + tier.w / 2 - 26} ${tier.y} L${450 + tier.w / 2} ${tier.y + 38} Z`}
            fill="none"
            stroke="url(#goldStroke)"
            strokeWidth="2"
            opacity={0.9 - i * 0.06}
          />
          {Array.from({ length: 3 + i }).map((_, k) => {
            const count = 3 + i;
            const startX = 450 - tier.w / 2 + 30;
            const endX = 450 + tier.w / 2 - 30;
            const gap = (endX - startX) / (count - 1 || 1);
            const cx = count === 1 ? 450 : startX + gap * k;
            return (
              <path
                key={k}
                d={`M${cx - 9} ${tier.y + 34} q9 -18 18 0`}
                fill="none"
                stroke="url(#goldStroke)"
                strokeWidth="1.4"
                opacity={0.7 - i * 0.05}
              />
            );
          })}
        </g>
      ))}

      {/* base archway (doorway) */}
      <path
        d="M330 340 V260 Q450 190 570 260 V340"
        fill="none"
        stroke="url(#goldStroke)"
        strokeWidth="2.5"
      />
      <path
        d="M356 340 V270 Q450 214 544 270 V340"
        fill="none"
        stroke="url(#goldStroke)"
        strokeWidth="1.2"
        opacity="0.6"
      />
    </svg>
  );
}
