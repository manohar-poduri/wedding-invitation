import Hero from "../components/Hero";
import Couple from "../components/Couple";
import Events from "../components/Events";
import PuzzleReveal from "../components/PopReveal";
import Countdown from "../components/Countdown";
import Gallery from "../components/Gallery";
import GetInTouch from "../components/GetInTouch";
import HashtagBanner from "../components/HashtagBanner";
import InvitationGate from "../components/InvitationGate";
import BottomNav from "../components/BottomNav";
import FloatingActions from "../components/FloatingActions";
import PopReveal from "../components/PopReveal";

export default function Home() {
  return (
    <InvitationGate>
      <main>
        <Hero />
        <Couple />
        <Events />
        <PopReveal />
        <Countdown />
        <Gallery />
        <GetInTouch />
        <HashtagBanner />
      </main>
      <BottomNav />
      <FloatingActions />
    </InvitationGate>
  );
}