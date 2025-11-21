import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AIExperimentsSection from "@/components/AIExperimentsSection";
import ProcessSection from "@/components/ProcessSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AIExperimentsSection />
        <ProcessSection />
        <CapabilitiesSection />
        <VisionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
