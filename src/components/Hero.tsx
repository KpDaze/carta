import { Contours, PinMark } from "./decor";
import { TRAIL_PATH } from "../data";

function TrailMap() {
  return (
    <div className="map-grid relative overflow-hidden rounded-md border border-bone-100/15 bg-pine-900 shadow-[10px_10px_0_0_rgba(246,179,74,0.14)]">
      {/* corner annotations */}
      <span className="font-mono absolute left-3 top-3 text-[9px] tracking-[0.25em] text-moss-300">
        SECTOR: YOUR-LIFE
      </span>
      <span className="font-mono absolute right-3 top-3 text-[9px] tracking-[0.25em] text-moss-300">
        SCALE 1:LOST
      </span>
      <span className="font-mono absolute bottom-3 right-3 text-[9px] tracking-[0.25em] text-moss-300">
        45.51°N 122.67°W
      </span>

      <svg viewBox="0 0 360 400" className="block w-full">
        {/* contours */}
        <g stroke="var(--color-moss-500)" fill="none" opacity="0.5">
          <path d="M -20 300 C 60 260, 120 280, 180 250 S 300 210, 380 230" strokeWidth="1" />
          <path d="M -20 270 C 60 230, 130 252, 190 224 S 300 182, 380 200" strokeWidth="1" opacity="0.7" />
          <path d="M -20 240 C 70 202, 140 224, 200 198 S 310 158, 380 172" strokeWidth="1" opacity="0.45" />
          <ellipse cx="290" cy="120" rx="70" ry="38" strokeWidth="1" opacity="0.5" transform="rotate(-10 290 120)" />
          <ellipse cx="290" cy="120" rx="46" ry="24" strokeWidth="1" opacity="0.4" transform="rotate(-10 290 120)" />
        </g>

        {/* lake */}
        <path
          d="M 250 330 C 270 315, 310 318, 322 336 C 332 352, 300 366, 275 360 C 252 355, 238 342, 250 330 Z"
          fill="var(--color-pine-700)"
          opacity="0.55"
        />
        <text x="286" y="346" textAnchor="middle" fontSize="8" fill="var(--color-moss-300)" fontFamily="Space Mono, monospace" letterSpacing="2">
          L. DOUBT
        </text>

        {/* elevation labels */}
        <text x="290" y="118" textAnchor="middle" fontSize="8" fill="var(--color-moss-300)" fontFamily="Space Mono, monospace" letterSpacing="2">
          MT. OVERWHELM
        </text>
        <text x="290" y="130" textAnchor="middle" fontSize="7" fill="var(--color-moss-300)" fontFamily="Space Mono, monospace" opacity="0.7">
          2,140 M
        </text>

        {/* the trail */}
        <path
          d={TRAIL_PATH}
          className="trail-path"
          pathLength={1}
          fill="none"
          stroke="var(--color-trail-400)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1"
          strokeDashoffset="1"
          opacity="0.9"
          style={{ strokeDasharray: "0.02 0.014" }}
        />

        {/* hiker dot walking the trail */}
        <circle r="5" fill="var(--color-ember-400)" stroke="var(--color-pine-950)" strokeWidth="2">
          <animateMotion dur="10s" repeatCount="indefinite" path={TRAIL_PATH} />
        </circle>

        {/* start: you are here */}
        <g>
          <circle cx="40" cy="352" r="11" fill="var(--color-ember-500)" opacity="0.35" className="pin-pulse" />
          <circle cx="40" cy="352" r="6.5" fill="var(--color-ember-500)" stroke="var(--color-bone-50)" strokeWidth="2" />
          <text x="56" y="350" fontSize="9" fill="var(--color-bone-100)" fontFamily="Space Mono, monospace" letterSpacing="2">
            YOU ARE
          </text>
          <text x="56" y="362" fontSize="9" fill="var(--color-trail-400)" fontFamily="Space Mono, monospace" letterSpacing="2" fontWeight="bold">
            HERE
          </text>
        </g>

        {/* destination flag */}
        <g className="bob" style={{ transformOrigin: "298px 58px" }}>
          <line x1="298" y1="58" x2="298" y2="30" stroke="var(--color-bone-100)" strokeWidth="2" />
          <polygon points="298,30 322,37 298,44" fill="var(--color-trail-400)" />
          <text x="262" y="24" textAnchor="end" fontSize="8" fill="var(--color-moss-300)" fontFamily="Space Mono, monospace" letterSpacing="2">
            WHATEVER'S NEXT
          </text>
        </g>
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative scroll-mt-20 overflow-hidden pt-10 pb-14 sm:pt-14">
      <Contours className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[640px] text-pine-700" />
      <Contours className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[560px] rotate-180 text-pine-800" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="font-mono flex items-center gap-2.5 text-[11px] tracking-[0.3em] text-moss-300">
            <PinMark className="h-4 w-4 text-ember-400" />
            A FIELD GUIDE FOR THE TEMPORARILY LOST
          </p>

          <h1 className="font-display mt-6 text-[clamp(2.9rem,7.2vw,5.6rem)] font-black leading-[0.98] tracking-tight text-bone-50">
            You don't know
            <br />
            what you're doing.
            <span className="relative mt-1 block text-trail-400">
              <em className="font-light italic">Perfect.</em>
              <svg
                viewBox="0 0 220 14"
                className="absolute -bottom-2 left-1 w-44 text-ember-500 sm:w-56"
                fill="none"
                aria-hidden="true"
              >
                <path d="M3 10 C 40 3, 90 12, 130 7 S 200 4, 217 8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone-300">
            That's not a diagnosis — it's a trailhead. <strong className="font-semibold text-bone-100">Unlost</strong> is
            a pocket field guide for exactly this moment: a two-minute triage to find your bearings,
            five short trails with real steps, and a campfire to breathe at first.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#triage"
              className="btn-hard font-mono inline-flex items-center gap-3 rounded-sm bg-trail-400 px-6 py-3.5 text-[12px] font-bold tracking-[0.18em] text-pine-950 shadow-[5px_5px_0_0_var(--color-ember-500)]"
            >
              TAKE THE 2-MIN TRIAGE
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
                <path d="M3 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#breathe"
              className="btn-hard font-mono inline-flex items-center gap-3 rounded-sm border border-bone-300/40 px-6 py-3.5 text-[12px] font-bold tracking-[0.18em] text-bone-100 shadow-[5px_5px_0_0_rgba(241,236,220,0.18)] hover:border-trail-400 hover:text-trail-300"
            >
              BREATHE FIRST
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <svg viewBox="0 0 20 20" className="bob h-4 w-4 text-trail-400" fill="none" aria-hidden="true">
              <path d="M10 2v14M4.5 10.5 10 16l5.5-5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <a href="#trailhead" className="font-mono text-[11px] tracking-[0.18em] text-bone-300 transition-colors hover:text-trail-400">
              DON'T KNOW HOW TO USE THIS? THE SIGNS BELOW POINT THE WAY
            </a>
          </div>

          <p className="font-mono mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] tracking-[0.22em] text-moss-400">
            <span className="text-trail-500">▲</span> 0 ACCOUNTS
            <span className="text-pine-600">/</span> 0 JUDGMENT
            <span className="text-pine-600">/</span> 47-STEP SYSTEMS NOWHERE IN SIGHT
          </p>
        </div>

        <div className="relative lg:col-span-5">
          <div className="drift pointer-events-none absolute -left-8 -top-10 hidden text-pine-700 lg:block">
            <Contours className="h-56 w-80" />
          </div>
          <TrailMap />
          <div className="mt-4 flex items-center justify-between gap-4 border border-dashed border-bone-100/20 rounded-sm bg-pine-900/70 px-4 py-3">
            <span className="font-mono text-[10px] leading-relaxed tracking-[0.18em] text-bone-300">
              CURRENT POSITION: <span className="text-trail-400">UNCERTAIN</span>
            </span>
            <span className="font-mono text-[10px] tracking-[0.18em] text-moss-300">
              MORALE: <span className="text-moss-300">RECOVERABLE</span>
            </span>
          </div>
        </div>
      </div>

      {/* stats strip */}
      <div className="relative mx-auto mt-16 max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 border-y border-dashed border-bone-100/20 py-5 lg:justify-between">
          {[
            ["05", "TRAILS BLAZED"],
            ["25", "TINY STEPS"],
            ["02", "MINUTES TO TRIAGE"],
            ["∞", "FREE RETAKES"],
          ].map(([big, small]) => (
            <div key={small} className="flex items-baseline gap-3">
              <span className="font-display text-3xl font-black text-trail-400">{big}</span>
              <span className="font-mono text-[10px] tracking-[0.25em] text-bone-300">{small}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
