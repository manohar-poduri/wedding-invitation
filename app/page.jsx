import Hero from "../components/Hero";
import Couple from "../components/Couple";
import Events from "../components/Events";
import PopReveal from "../components/PopReveal";
import Countdown from "../components/Countdown";
import VenueMap from "../components/VenueMap";
import Gallery from "../components/Gallery";
import HashtagBanner from "../components/HashtagBanner";
import InvitationGate from "../components/InvitationGate";
import BottomNav from "../components/BottomNav";

export default function Home() {
  return (
    <InvitationGate>
      <main>
        <Hero />
        <Couple />
        <Events />
        <PopReveal />
        <Countdown />
        <VenueMap />
        <Gallery />
        <HashtagBanner />
      </main>
      <BottomNav />
    </InvitationGate>
  );
}