/** Small decorative SVG pieces: compass, pin, contours, diamond. */

export function Compass({
  size = 44,
  rotation = 0,
  className = "",
}: {
  size?: number;
  rotation?: number;
  className?: string;
}) {
  const ticks = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="3" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="3 5" />
      {ticks.map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="8"
          x2="50"
          y2={deg % 90 === 0 ? "17" : "13"}
          stroke="currentColor"
          strokeOpacity={deg % 90 === 0 ? 0.8 : 0.35}
          strokeWidth={deg % 90 === 0 ? 3 : 1.5}
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      <g transform={`rotate(${rotation} 50 50)`} style={{ transition: "transform 0.25s ease-out" }}>
        <polygon points="50,16 58,50 42,50" fill="var(--color-trail-400)" />
        <polygon points="50,84 58,50 42,50" fill="var(--color-ember-500)" fillOpacity="0.85" />
      </g>
      <circle cx="50" cy="50" r="5" fill="var(--color-bone-100)" />
      <circle cx="50" cy="50" r="2" fill="var(--color-pine-950)" />
    </svg>
  );
}

export function PinMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  );
}

export function Diamond({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="7" height="7" transform="rotate(45 6 6)" fill="currentColor" />
    </svg>
  );
}

export function ArrowSquiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 14 C 18 4, 30 22, 46 12 S 70 6, 82 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M74 5 L 84 12 L 74 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Topographic contour lines, used as ambient section backdrop. */
export function Contours({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={`a${i}`}
          d={`M ${-40 + i * 8} ${340 - i * 42} C ${120 + i * 10} ${300 - i * 50}, ${210 - i * 6} ${250 - i * 30}, ${330 + i * 14} ${240 - i * 44} S ${560 + i * 10} ${180 - i * 30}, ${660} ${170 - i * 40}`}
          stroke="currentColor"
          strokeWidth="1.2"
          opacity={0.5 - i * 0.08}
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <ellipse
          key={`b${i}`}
          cx={470}
          cy={80}
          rx={40 + i * 34}
          ry={22 + i * 20}
          stroke="currentColor"
          strokeWidth="1.2"
          opacity={0.4 - i * 0.08}
          transform={`rotate(-12 470 80)`}
        />
      ))}
      <circle cx="120" cy="90" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="390" cy="300" r="3" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
