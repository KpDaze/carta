interface SectionHeadProps {
  kicker: string;
  title: string;
  note?: string;
}

export function SectionHead({ kicker, title, note }: SectionHeadProps) {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-2xl">
        <p className="font-mono flex items-center gap-3 text-[11px] tracking-[0.3em] text-trail-400">
          <span className="inline-block h-px w-8 bg-trail-400" />
          {kicker}
        </p>
        <h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.4rem)] font-black leading-[1.02] tracking-tight text-bone-50">
          {title}
        </h2>
      </div>
      {note && (
        <p className="font-mono max-w-[240px] pb-1 text-right text-[10px] leading-relaxed tracking-[0.2em] text-moss-300">
          {note}
        </p>
      )}
    </div>
  );
}
