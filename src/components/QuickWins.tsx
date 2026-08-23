import { QUICK_WINS } from "../data";
import { useStoredState } from "../lib/useStoredState";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function QuickWins() {
  const [done, setDone] = useStoredState<boolean[]>(
    "unlost:wins",
    QUICK_WINS.map(() => false)
  );
  const safe = QUICK_WINS.map((_, i) => Boolean(done[i]));
  const count = safe.filter(Boolean).length;
  const allDone = count === QUICK_WINS.length;

  return (
    <section id="wins" className="relative scroll-mt-24 border-t border-bone-100/10 bg-pine-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHead
            kicker="SECTION 04 — RIGHT NOW"
            title="The next ten minutes, sorted."
            note="SIX WINS SMALL ENOUGH TO FINISH BEFORE THE KETTLE BOILS"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mb-8 flex items-center gap-5">
            <span className="font-mono text-[11px] font-bold tracking-[0.25em] text-trail-400">
              {count} / {QUICK_WINS.length} DONE
            </span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-pine-800">
              <div
                className="h-full rounded-full bg-moss-400 transition-all duration-500"
                style={{ width: `${(count / QUICK_WINS.length) * 100}%` }}
              />
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_WINS.map((win, i) => {
            const isDone = safe[i];
            return (
              <Reveal key={win.label} delay={i * 70}>
                <button
                  onClick={() => setDone(QUICK_WINS.map((_, j) => (j === i ? !safe[j] : safe[j])))}
                  className={`group flex h-full w-full items-start gap-4 rounded-md border p-6 text-left transition-all duration-200 ${
                    isDone
                      ? "border-moss-500/50 bg-pine-800"
                      : "border-bone-100/15 bg-pine-900 hover:-translate-y-1 hover:border-trail-400/60"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border-2 transition-all duration-200 ${
                      isDone
                        ? "scale-110 border-moss-400 bg-moss-400 text-pine-950"
                        : "border-bone-300/40 group-hover:border-trail-400"
                    }`}
                  >
                    {isDone && (
                      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
                        <path d="M3 8.5 6.5 12 13 4.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span>
                    <span
                      className={`block text-base font-semibold transition-colors ${
                        isDone ? "text-moss-300 line-through decoration-moss-500/60" : "text-bone-50"
                      }`}
                    >
                      {win.label}
                    </span>
                    <span className="font-mono mt-1.5 block text-[10px] leading-relaxed tracking-[0.08em] text-moss-400">
                      {win.detail}
                    </span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        {allDone && (
          <Reveal>
            <p className="font-mono mt-8 rounded-sm border border-trail-400/40 bg-trail-400/10 px-5 py-4 text-center text-[11px] tracking-[0.2em] text-trail-300">
              ★ ALL SIX. GO PUT THE KETTLE ON — YOU'VE EARNED THE VIEW FROM HERE.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
