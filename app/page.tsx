import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImmersiveDomains from "@/components/ImmersiveDomains";
import AISubstrate from "@/components/AISubstrate";
import OurStory from "@/components/OurStory";
import WhyWorkAtCuvr from "@/components/WhyWorkAtCuvr";
import ArchitectsSection from "@/components/ArchitectsSection";
import EstablishLink from "@/components/EstablishLink";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Navbar />
      <HeroSection />
      <ImmersiveDomains />
      <AISubstrate />
      <OurStory />
      <WhyWorkAtCuvr />
      <ArchitectsSection />
      <EstablishLink />
      <Footer />
    </main>
  );
}
