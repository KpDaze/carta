import { TICKER_ITEMS } from "../data";
import { Diamond } from "./decor";

export function Ticker() {
  const row = (ariaHidden: boolean) => (
    <div
      className="flex shrink-0 items-center gap-8 pr-8"
      aria-hidden={ariaHidden || undefined}
    >
      {TICKER_ITEMS.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center gap-8">
          <span className="font-mono text-[11px] font-bold tracking-[0.3em] text-pine-950">
            {item}
          </span>
          <Diamond className="h-2.5 w-2.5 text-ember-500" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative z-10 -rotate-[0.6deg] scale-[1.01] border-y-2 border-pine-950 bg-trail-400 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      <div className="flex overflow-hidden">
        <div className="ticker-track flex w-max">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
