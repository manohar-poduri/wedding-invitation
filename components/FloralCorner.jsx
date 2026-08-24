export default function FloralCorner({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 220"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="floralGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--gold-bright)" />
          <stop offset="100%" stopColor="var(--gold)" />
        </linearGradient>
      </defs>

      <path
        d="M6 6 C 40 34, 34 78, 70 96 S 132 108, 150 150 S 176 200, 214 210"
        fill="none"
        stroke="url(#floralGold)"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      <path
        d="M22 20 C 46 46, 30 66, 58 84"
        fill="none"
        stroke="url(#floralGold)"
        strokeWidth="1"
        opacity="0.75"
      />

      {[
        { x: 30, y: 40, r: -30 },
        { x: 58, y: 70, r: 20 },
        { x: 92, y: 100, r: -15 },
        { x: 128, y: 132, r: 25 },
        { x: 168, y: 168, r: -20 },
      ].map((leaf, i) => (
        <path
          key={i}
          d="M0 0 C 8 -10, 22 -10, 26 0 C 22 10, 8 10, 0 0 Z"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1"
          opacity="0.8"
          transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r})`}
        />
      ))}

      <g transform="translate(52 52)">
        {[0, 72, 144, 216, 288].map((angle) => (
          <ellipse
            key={angle}
            cx="0"
            cy="-11"
            rx="7"
            ry="11"
            fill="none"
            stroke="url(#floralGold)"
            strokeWidth="1.1"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle cx="0" cy="0" r="3" fill="var(--gold-bright)" />
      </g>

      <g transform="translate(140 118)">
        {[0, 90, 180, 270].map((angle) => (
          <ellipse
            key={angle}
            cx="0"
            cy="-6"
            rx="4.2"
            ry="6.4"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="0.9"
            opacity="0.85"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle cx="0" cy="0" r="1.8" fill="var(--gold)" />
      </g>
    </svg>
  );
}