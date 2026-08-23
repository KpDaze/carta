import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const PHASES = [
  { label: "Breathe in", ms: 4000, scale: 1.3, hint: "through the nose, slow" },
  { label: "Hold", ms: 4000, scale: 1.3, hint: "easy — no straining" },
  { label: "Breathe out", ms: 4000, scale: 1, hint: "longer than it feels necessary" },
  { label: "Hold", ms: 4000, scale: 1, hint: "empty and unhurried" },
] as const;

export function Breathe() {
  const [running, setRunning] = useState(false);
  const [idx, setIdx] = useState(0);
  const [rounds, setRounds] = useState(0);

  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(() => {
      setIdx((i) => {
        const next = (i + 1) % PHASES.length;
        if (next === 0) setRounds((r) => r + 1);
        return next;
      });
    }, PHASES[idx].ms);
    return () => window.clearTimeout(t);
  }, [running, idx]);

  const stop = () => {
    setRunning(false);
    setIdx(0);
    setRounds(0);
  };

  const phase = PHASES[idx];

  return (
    <section id="breathe" className="relative scroll-mt-24 border-t border-bone-100/10 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <SectionHead
            kicker="SECTION 03 — BASE CAMP"
            title="Breathe before you bolt."
          />
          <p className="-mt-6 max-w-xl text-lg leading-relaxed text-bone-300">
            When you don't know what you're doing, the nervous system hears{" "}
            <em className="font-display text-bone-100">“sabertooth tiger.”</em> It isn't. This is
            box breathing — four even sides, the same trick used by people whose job is to stay
            calm while everything is on fire.
          </p>
          <ol className="mt-8 space-y-3">
            {[
              "Four seconds in. Four held. Four out. Four held.",
              "Match the circle — it does the counting so you don't have to.",
              "Four rounds is a reset. Ten rounds is a decision-making tool.",
            ].map((line, i) => (
              <li key={line} className="flex items-start gap-4">
                <span className="font-mono mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-trail-400/50 text-[11px] font-bold text-trail-400">
                  {i + 1}
                </span>
                <span className="text-[15px] leading-relaxed text-bone-100">{line}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative mx-auto flex w-full max-w-md flex-col items-center rounded-md border border-bone-100/15 bg-pine-900 px-8 py-12 shadow-[12px_12px_0_0_rgba(95,134,107,0.15)]">
            <span className="font-mono absolute left-4 top-4 text-[9px] tracking-[0.25em] text-moss-300">
              BOX BREATHING · 4·4·4·4
            </span>
            <span className="font-mono absolute right-4 top-4 text-[9px] tracking-[0.25em] text-moss-300">
              ROUNDS: {String(rounds).padStart(2, "0")}
            </span>

            <div className="relative mt-4 flex h-72 w-72 items-center justify-center">
              {/* static guide rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-bone-100/15" />
              <div className="absolute inset-6 rounded-full border border-bone-100/10" />
              {[0, 90, 180, 270].map((deg) => (
                <span
                  key={deg}
                  className={`absolute h-2 w-2 rounded-full transition-colors duration-300 ${
                    running && PHASES[idx] === PHASES[Math.floor(deg / 90)]
                      ? "bg-trail-400"
                      : "bg-pine-700"
                  }`}
                  style={{
                    transform: `rotate(${deg}deg) translateY(-144px)`,
                    transformOrigin: "center",
                    left: "calc(50% - 4px)",
                    top: "calc(50% - 4px)",
                  }}
                />
              ))}

              {/* the breathing disc */}
              <div
                className="flex h-44 w-44 items-center justify-center rounded-full"
                style={{
                  transform: `scale(${running ? phase.scale : 1})`,
                  transition: `transform ${running ? phase.ms : 700}ms cubic-bezier(0.37, 0, 0.63, 1)`,
                  background:
                    "radial-gradient(circle at 35% 30%, rgba(255,207,125,0.5), rgba(246,179,74,0.28) 45%, rgba(232,154,43,0.12) 75%)",
                  boxShadow: "0 0 60px rgba(246,179,74,0.25), inset 0 0 40px rgba(10,27,20,0.45)",
                }}
              >
                <div className="rounded-full border border-bone-100/20 bg-pine-950/80 px-5 py-4 text-center">
                  <p className="font-display text-2xl font-bold italic text-bone-50">
                    {running ? phase.label : "Ready?"}
                  </p>
                  <p className="font-mono mt-1 text-[9px] tracking-[0.2em] text-moss-300">
                    {running ? phase.hint.toUpperCase() : "PRESS START WHEN SET"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              {!running ? (
                <button
                  onClick={() => setRunning(true)}
                  className="btn-hard font-mono rounded-sm bg-trail-400 px-7 py-3 text-[12px] font-bold tracking-[0.2em] text-pine-950 shadow-[5px_5px_0_0_var(--color-ember-500)]"
                >
                  START BREATHING
                </button>
              ) : (
                <button
                  onClick={stop}
                  className="btn-hard font-mono rounded-sm border border-ember-400/60 px-7 py-3 text-[12px] font-bold tracking-[0.2em] text-ember-400 shadow-[5px_5px_0_0_rgba(226,89,63,0.35)] hover:bg-ember-500/10"
                >
                  STOP & RESET
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
