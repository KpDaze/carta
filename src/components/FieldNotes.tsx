import { FIELD_NOTES } from "../data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const SPANS = [
  "lg:col-span-7",
  "lg:col-span-5 lg:mt-14",
  "lg:col-span-5",
  "lg:col-span-7 lg:-mt-6",
  "lg:col-span-6",
  "lg:col-span-6 lg:mt-10",
];

export function FieldNotes() {
  return (
    <section id="notes" className="relative scroll-mt-24 border-t border-bone-100/10 bg-pine-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHead
            kicker="SECTION 02 — FIELD NOTES"
            title="Things nobody tells you"
            note="TORN FROM THE RANGER'S NOTEBOOK · READ IN ANY ORDER"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {FIELD_NOTES.map((note, i) => (
            <Reveal key={note.num} delay={(i % 3) * 90} className={SPANS[i % SPANS.length]}>
              <article className="group relative h-full overflow-hidden rounded-md border border-bone-100/12 bg-pine-900 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-trail-400/50 hover:shadow-[8px_8px_0_0_rgba(246,179,74,0.12)] sm:p-9">
                <span className="font-display absolute -right-3 -top-6 text-[7rem] font-black leading-none text-pine-800 transition-colors duration-300 group-hover:text-pine-700">
                  {note.num}
                </span>
                <p className="font-mono relative text-[10px] tracking-[0.3em] text-trail-400">
                  NOTE {note.num}
                </p>
                <h3 className="font-display relative mt-4 max-w-md text-2xl font-bold leading-snug text-bone-50 sm:text-[1.7rem]">
                  {note.title}
                </h3>
                <p className="relative mt-4 max-w-md text-[15px] leading-relaxed text-bone-300">
                  {note.body}
                </p>
                <span className="dashed-rule relative mt-6 block w-16 transition-all duration-300 group-hover:w-28 group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
