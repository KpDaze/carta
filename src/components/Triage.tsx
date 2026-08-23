import { useState } from "react";
import { OUTCOMES, QUESTIONS, type OutcomeId } from "../data";
import { useStoredState } from "../lib/useStoredState";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const LETTERS = ["A", "B", "C", "D", "E"];
const ORDER: OutcomeId[] = ["switchback", "dump", "fog", "crossroads", "basecamp"];

function score(answers: number[]): OutcomeId {
  const tally = new Map<OutcomeId, number>();
  answers.forEach((optIdx, qIdx) => {
    const opt = QUESTIONS[qIdx]?.options[optIdx];
    if (opt) tally.set(opt.outcome, (tally.get(opt.outcome) ?? 0) + 1);
  });
  let best: OutcomeId = ORDER[0];
  let bestCount = -1;
  for (const id of ORDER) {
    const c = tally.get(id) ?? 0;
    if (c > bestCount) {
      best = id;
      bestCount = c;
    }
  }
  return best;
}

function PlanChecklist({ outcomeId }: { outcomeId: OutcomeId }) {
  const steps = OUTCOMES[outcomeId].steps;
  const [checked, setChecked] = useStoredState<boolean[]>(
    `unlost:steps:${outcomeId}`,
    steps.map(() => false)
  );
  const safe = steps.map((_, i) => Boolean(checked[i]));
  const done = safe.filter(Boolean).length;
  const pct = Math.round((done / steps.length) * 100);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="font-mono text-[10px] tracking-[0.25em] text-moss-300">
          TRAIL LOG — TAP A STEP TO COMPLETE IT
        </span>
        <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-trail-400">
          {done} / {steps.length} STEPS
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-pine-800">
        <div
          className="h-full rounded-full bg-trail-400 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>

      <ul className="mt-6 space-y-3">
        {steps.map((step, i) => {
          const isDone = safe[i];
          return (
            <li key={i}>
              <button
                onClick={() =>
                  setChecked(steps.map((_, j) => (j === i ? !safe[j] : safe[j])))
                }
                className={`group flex w-full items-start gap-4 rounded-sm border px-4 py-3.5 text-left transition-all duration-200 ${
                  isDone
                    ? "border-moss-500/40 bg-pine-800/80"
                    : "border-bone-100/15 bg-pine-900 hover:-translate-y-0.5 hover:border-trail-400/60"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border-2 font-mono text-[11px] font-bold transition-colors ${
                    isDone
                      ? "border-trail-400 bg-trail-400 text-pine-950"
                      : "border-bone-300/40 text-bone-300/70 group-hover:border-trail-400 group-hover:text-trail-400"
                  }`}
                >
                  {isDone ? (
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                      <path d="M3 8.5 6.5 12 13 4.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </span>
                <span
                  className={`text-[15px] leading-relaxed transition-colors ${
                    isDone ? "text-moss-300 line-through decoration-moss-500/60" : "text-bone-100"
                  }`}
                >
                  {step}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {done === steps.length && (
        <p className="font-mono mt-5 rounded-sm border border-trail-400/40 bg-trail-400/10 px-4 py-3 text-[11px] tracking-[0.18em] text-trail-300">
          ★ TRAIL COMPLETE. SEE? YOU ABSOLUTELY KNOW WHAT YOU'RE DOING NOW.
        </p>
      )}
    </div>
  );
}

export function Triage() {
  const [answers, setAnswers] = useState<number[]>(() => QUESTIONS.map(() => -1));
  const [step, setStep] = useState(0);
  const [outcomeId, setOutcomeId] = useStoredState<OutcomeId | null>(
    "unlost:outcome:v1",
    null
  );

  const q = QUESTIONS[step];

  const choose = (optIdx: number) => {
    const next = answers.map((a, i) => (i === step ? optIdx : a));
    setAnswers(next);
    window.setTimeout(() => {
      if (step < QUESTIONS.length - 1) {
        setStep(step + 1);
      } else {
        setOutcomeId(score(next));
      }
    }, 260);
  };

  const retake = () => {
    setAnswers(QUESTIONS.map(() => -1));
    setStep(0);
    setOutcomeId(null);
  };

  const outcome = outcomeId ? OUTCOMES[outcomeId] : null;

  return (
    <section id="triage" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHead
            kicker="SECTION 01 — TRIAGE"
            title="Where are you, actually?"
            note="≈ 2 MINUTES · 5 QUESTIONS · SAVED ON THIS DEVICE ONLY"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-md border border-bone-100/15 bg-pine-900 shadow-[12px_12px_0_0_rgba(226,89,63,0.12)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-pine-800">
              <div
                className="h-full bg-trail-400 transition-all duration-500"
                style={{ width: outcome ? "100%" : `${((step + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>

            {!outcome ? (
              <div className="p-6 sm:p-12">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-[11px] tracking-[0.3em] text-ember-400">{q.kicker}</p>
                  <div className="flex items-center gap-2">
                    {QUESTIONS.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 w-6 rounded-full transition-colors ${
                          i < step ? "bg-moss-400" : i === step ? "bg-trail-400" : "bg-pine-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3
                  key={step}
                  className="font-display mt-6 max-w-2xl text-[clamp(1.6rem,3.4vw,2.6rem)] font-bold leading-tight text-bone-50"
                >
                  {q.text}
                  <span className="blink ml-1 text-trail-400">_</span>
                </h3>

                <div className="mt-8 grid gap-3">
                  {q.options.map((opt, i) => {
                    const selected = answers[step] === i;
                    return (
                      <button
                        key={opt.label}
                        onClick={() => choose(i)}
                        className={`group flex items-center gap-4 rounded-sm border px-4 py-4 text-left transition-all duration-200 sm:gap-5 sm:px-5 ${
                          selected
                            ? "translate-x-2 border-trail-400 bg-trail-400/15"
                            : "border-bone-100/15 bg-pine-850 hover:translate-x-2 hover:border-trail-400/70 hover:bg-pine-800"
                        }`}
                      >
                        <span
                          className={`font-mono flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border text-sm font-bold transition-colors ${
                            selected
                              ? "border-trail-400 bg-trail-400 text-pine-950"
                              : "border-bone-300/30 text-trail-400 group-hover:border-trail-400"
                          }`}
                        >
                          {LETTERS[i]}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[15px] font-medium text-bone-50 sm:text-base">
                            {opt.label}
                          </span>
                          <span className="font-mono mt-0.5 block text-[10px] tracking-[0.12em] text-moss-400">
                            {opt.hint}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    className="font-mono text-[11px] tracking-[0.2em] text-bone-300 transition-colors enabled:hover:text-trail-400 disabled:opacity-30"
                  >
                    ← BACK ONE SWITCHBACK
                  </button>
                  <span className="font-mono text-[11px] tracking-[0.2em] text-moss-400">
                    {String(step + 1).padStart(2, "0")} / {String(QUESTIONS.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-6 sm:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono rounded-sm border border-ember-400/50 bg-ember-500/15 px-3 py-1.5 text-[10px] font-bold tracking-[0.25em] text-ember-400">
                    {outcome.tag}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.22em] text-moss-300">
                    {outcome.distance}
                  </span>
                </div>

                <h3 className="font-display mt-5 text-[clamp(2rem,5vw,3.6rem)] font-black leading-[1.02] text-bone-50">
                  Your trail:{" "}
                  <span className="text-trail-400 italic">{outcome.title}</span>
                </h3>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-bone-300">{outcome.intro}</p>

                <blockquote className="mt-7 max-w-3xl border-l-4 border-trail-400 bg-pine-850 py-4 pl-5 pr-4">
                  <p className="font-display text-lg italic leading-relaxed text-bone-100">
                    “{outcome.rangerNote}”
                  </p>
                  <footer className="font-mono mt-2 text-[10px] tracking-[0.25em] text-moss-400">
                    — THE RANGER, PROBABLY
                  </footer>
                </blockquote>

                <div className="mt-10">
                  <PlanChecklist outcomeId={outcome.id} />
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-dashed border-bone-100/15 pt-6">
                  <button
                    onClick={retake}
                    className="btn-hard font-mono rounded-sm border border-bone-300/40 px-5 py-3 text-[11px] font-bold tracking-[0.2em] text-bone-100 shadow-[4px_4px_0_0_rgba(241,236,220,0.15)] hover:border-trail-400 hover:text-trail-300"
                  >
                    ↻ RETAKE THE TRIAGE
                  </button>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-moss-400">
                    PROGRESS IS SAVED ON THIS DEVICE. RANGES ARE SUGGESTIONS, NOT ORDERS.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
