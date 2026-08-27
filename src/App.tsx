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
