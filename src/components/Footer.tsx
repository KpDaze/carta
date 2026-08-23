import { Contours, Diamond } from "./decor";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-bone-100/10 bg-pine-950">
      <Contours className="pointer-events-none absolute -bottom-16 left-1/2 h-[380px] w-[720px] -translate-x-1/2 text-pine-800" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="font-mono flex items-center gap-3 text-[11px] tracking-[0.3em] text-moss-300">
              <Diamond className="h-2 w-2 text-ember-400" />
              END OF TRAIL · BEGINNING OF YOU
            </p>
            <p className="font-display mt-5 text-[clamp(2.4rem,6vw,4.6rem)] font-black leading-[1.02] tracking-tight text-bone-50">
              You were never lost —<br />
              <em className="font-light italic text-trail-400">just early.</em>
            </p>
          </div>
          <div className="lg:col-span-4">
            <nav className="grid grid-cols-2 gap-x-6 gap-y-3 lg:justify-items-end">
              {[
                ["TRIAGE", "#triage"],
                ["FIELD NOTES", "#notes"],
                ["BREATHE", "#breathe"],
                ["RIGHT NOW", "#wins"],
                ["THE MAP", "#top"],
              ].map(([label, href]) => (
                <a
                  key={href + label}
                  href={href}
                  className="font-mono text-[11px] tracking-[0.2em] text-bone-300 transition-colors hover:text-trail-400"
                >
                  {label} ↗
                </a>
              ))}
            </nav>
            <p className="font-mono mt-8 text-[10px] leading-relaxed tracking-[0.18em] text-moss-400 lg:text-right">
              NO ACCOUNTS · NO TRACKING · NO TRACK RECORD NEEDED
              <br />
              BRING WATER.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-bone-100/15 pt-6">
          <p className="font-mono text-[10px] tracking-[0.2em] text-moss-400">
            UNLOST FIELD GUIDE N°01 — BUILT MID-STUMBLE
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-moss-400">
            45.5152° N, 122.6784° W — SOMEWHERE ON THE WAY
          </p>
        </div>
      </div>
    </footer>
  );
}
