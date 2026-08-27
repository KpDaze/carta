import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { Compass } from "./decor";

interface Sign {
  letter: string;
  name: string;
  blurb: string;
  href: string;
  tone: "amber" | "dark";
  rotate: string;
  startHere?: boolean;
}

const SIGNS: Sign[] = [
  {
    letter: "A",
    name: "THE TRIAGE",
    blurb: "Answer five questions, get your own trail and checklist.",
    href: "#triage",
    tone: "amber",
    rotate: "-rotate-1",
    startHere: true,
  },
  {
    letter: "B",
    name: "FIELD NOTES",
    blurb: "Six truths nobody told you. Read them in any order.",
    href: "#notes",
    tone: "dark",
    rotate: "rotate-1",
  },
  {
    letter: "C",
    name: "BASE CAMP",
    blurb: "A breathing circle for when it all feels like too much.",
    href: "#breathe",
    tone: "amber",
    rotate: "-rotate-[0.5deg]",
  },
  {
    letter: "D",
    name: "RIGHT NOW",
    blurb: "Six tiny wins you can finish before the kettle boils.",
    href: "#wins",
    tone: "dark",
    rotate: "rotate-[0.75deg]",
  },
];

export function Trailhead() {
  return (
    <section id="trailhead" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        {/* left: the explanation */}
        <Reveal>
          <SectionHead
            kicker="TRAILHEAD — HOW TO USE THIS PAGE"
            title="In plain English."
          />
          <p className="-mt-6 max-w-md text-lg leading-relaxed text-bone-300">
            This is just a webpage. No coding, no account, no skills needed — you{" "}
            <strong className="font-semibold text-bone-100">
              scroll, click, and check things off.
            </strong>{" "}
            Whenever it says “map,” that's only the costume: feeling lost is the theme, so the
            page dresses up like a trail map. Don't know where to start? Start at{" "}
            <span className="font-mono font-bold text-trail-400">A</span> — that's exactly what
            it's for.
          </p>
          <div className="mt-8 flex items-start gap-4 border border-dashed border-bone-100/20 rounded-sm bg-pine-900/70 p-5">
            <Compass size={40} rotation={-18} className="mt-1 text-trail-400" />
            <p className="font-mono text-[10.5px] leading-relaxed tracking-[0.16em] text-moss-300">
              EVERYTHING CHECKS OFF. EVERYTHING SAVES TO THIS DEVICE ONLY.
              <span className="text-bone-100"> NOTHING FOLLOWS YOU HOME.</span>
            </p>
          </div>
        </Reveal>

        {/* right: the signpost */}
        <div className="relative pl-10 sm:pl-14">
          {/* the post */}
          <div
            className="absolute bottom-4 left-3 top-2 w-2.5 rounded-full sm:left-5"
            style={{
              background:
                "linear-gradient(to right, var(--color-pine-600), var(--color-pine-800) 60%, var(--color-pine-700))",
              boxShadow: "3px 3px 0 rgba(0,0,0,0.3)",
            }}
            aria-hidden="true"
          />

          <div className="space-y-5">
            {SIGNS.map((sign, i) => (
              <Reveal key={sign.letter} delay={i * 110}>
                <a
                  href={sign.href}
                  className={`group relative block w-full max-w-md transition-all duration-200 hover:rotate-0 hover:translate-x-2 ${sign.rotate}`}
                >
                  {sign.startHere && (
                    <span className="font-mono absolute -top-3 left-6 z-10 rotate-[-4deg] rounded-sm bg-ember-500 px-2.5 py-1 text-[9px] font-bold tracking-[0.22em] text-bone-50 shadow-[2px_2px_0_rgba(0,0,0,0.35)]">
                      ★ START HERE
                    </span>
                  )}
                  <div
                    className={`flex items-center gap-4 px-5 py-4 pr-9 shadow-[5px_5px_0_rgba(0,0,0,0.3)] transition-shadow duration-200 group-hover:shadow-[8px_8px_0_rgba(0,0,0,0.35)] ${
                      sign.tone === "amber"
                        ? "bg-trail-400 text-pine-950"
                        : "border border-trail-400/40 bg-pine-800 text-bone-100"
                    }`}
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%)",
                    }}
                  >
                    <span
                      className={`font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border-2 text-2xl font-black ${
                        sign.tone === "amber"
                          ? "border-pine-950/50 bg-pine-950 text-trail-400"
                          : "border-trail-400/50 bg-pine-950 text-trail-400"
                      }`}
                    >
                      {sign.letter}
                    </span>
                    <span className="min-w-0">
                      <span className="font-mono block text-[13px] font-bold tracking-[0.22em]">
                        {sign.name}
                      </span>
                      <span
                        className={`mt-0.5 block text-[12.5px] leading-snug ${
                          sign.tone === "amber" ? "text-pine-800" : "text-bone-300"
                        }`}
                      >
                        {sign.blurb}
                      </span>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <p className="font-mono mt-8 max-w-md pl-2 text-[10px] leading-relaxed tracking-[0.18em] text-moss-400">
            SIGNS POINT AT SECTIONS FURTHER DOWN — CLICK ONE AND THE MAP DOES THE REST.
          </p>
        </div>
      </div>
    </section>
  );
}
