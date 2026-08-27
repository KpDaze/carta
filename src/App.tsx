import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { Trailhead } from "./components/Trailhead";
import { Triage } from "./components/Triage";
import { FieldNotes } from "./components/FieldNotes";
import { Breathe } from "./components/Breathe";
import { QuickWins } from "./components/QuickWins";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-pine-950 text-bone-100 antialiased">
      {/* plain-language note for first-time visitors */}
      <div className="border-b border-trail-400/30 bg-trail-400/10 px-5 pb-3.5 pt-24 text-center">
        <p className="font-mono mx-auto max-w-3xl text-[10.5px] leading-relaxed tracking-[0.14em] text-bone-100 sm:text-[11px]">
          <span className="font-bold text-trail-300">READ THIS FIRST:</span> you don't need to
          touch any code or files anywhere. <span className="text-trail-300">This page is the whole app.</span>{" "}
          Just scroll down and click things — that's the entire skill required.
        </p>
      </div>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Trailhead />
        <Triage />
        <FieldNotes />
        <Breathe />
        <QuickWins />
      </main>
      <Footer />
    </div>
  );
}
