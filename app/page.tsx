import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImmersiveDomains from "@/components/ImmersiveDomains";
import HowItWorks from "@/components/HowItWorks";
import AISubstrate from "@/components/AISubstrate";
import OurStory from "@/components/OurStory";
import VisionMission from "@/components/VisionMission";
import SystemImpact from "@/components/SystemImpact";
import DemoSection from "@/components/DemoSection";
import WhyWorkAtCuvr from "@/components/WhyWorkAtCuvr";
import FloatingCTA from "@/components/FloatingCTA";
import ArchitectsSection from "@/components/ArchitectsSection";
import EstablishLink from "@/components/EstablishLink";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <main className="min-h-screen bg-[#080808]">
        <Navbar />

        {/* Hero — primary value proposition */}
        <section aria-label="Hero — CUVR Innovation VR Technology Platform">
          <HeroSection />
        </section>

        {/* Products */}
        <section aria-label="CUVR Products — PhysioVR and CUVR Realty">
          <ImmersiveDomains />
        </section>

        {/* How It Works */}
        <section aria-label="How CUVR Products Work">
          <HowItWorks />
        </section>

        {/* Technology */}
        <section aria-label="AI and VR Technology Stack" id="technology">
          <AISubstrate />
        </section>

        {/* About / Story */}
        <section aria-label="About CUVR Innovation Labs" id="about">
          <OurStory />
        </section>

        {/* System Impact — results */}
        <section aria-label="CUVR System Impact and Results">
          <SystemImpact />
        </section>

        {/* Demo Videos */}
        <section aria-label="CUVR Product Demo Videos">
          <DemoSection />
        </section>

        {/* Vision & Mission */}
        <section aria-label="CUVR Vision and Mission" id="vision">
          <VisionMission />
        </section>

        {/* Careers */}
        <section aria-label="Careers at CUVR Innovation">
          <WhyWorkAtCuvr />
        </section>

        {/* Team */}
        <section aria-label="CUVR Leadership Team">
          <ArchitectsSection />
        </section>

        {/* Contact */}
        <section aria-label="Contact CUVR Innovation">
          <EstablishLink />
        </section>

        <Footer />
        <FloatingCTA />
      </main>
    </>
  );
}
