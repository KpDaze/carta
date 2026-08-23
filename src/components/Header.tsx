import { useEffect, useState } from "react";
import { Compass } from "./decor";

const LINKS = [
  { n: "01", label: "TRIAGE", href: "#triage" },
  { n: "02", label: "FIELD NOTES", href: "#notes" },
  { n: "03", label: "BREATHE", href: "#breathe" },
  { n: "04", label: "RIGHT NOW", href: "#wins" },
];

export function Header() {
  const [rotation, setRotation] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setRotation(window.scrollY * 0.22);
        setScrolled(window.scrollY > 24);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-bone-100/10 bg-pine-950/95"
          : "border-transparent bg-pine-950/60"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="text-bone-100">
            <Compass size={40} rotation={rotation} />
          </span>
          <span className="leading-none">
            <span className="font-display block text-xl font-black tracking-tight text-bone-50">
              UNLOST
            </span>
            <span className="font-mono block pt-0.5 text-[9px] tracking-[0.28em] text-moss-300">
              FIELD GUIDE N°01
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono group flex items-baseline gap-1.5 text-[11px] tracking-[0.18em] text-bone-300 transition-colors hover:text-trail-400"
            >
              <span className="text-trail-500/70 group-hover:text-trail-400">{l.n}</span>
              {l.label}
              <span className="block h-px w-0 bg-trail-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 rounded-sm border border-trail-400/40 bg-trail-400/10 px-3 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="pin-pulse absolute inline-flex h-full w-full rounded-full bg-trail-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-trail-400" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] text-trail-300">
            STATUS: FINDABLE
          </span>
        </div>
      </div>
    </header>
  );
}
