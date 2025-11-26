import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { Services } from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { SocialProofCarousel } from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-text-primary selection:bg-electric selection:text-white pt-10">
        <Navbar />
        <Hero />
        <Services />
        <WhyChooseUs />
        <SocialProofCarousel />
        <Footer />
        <FloatingWhatsApp />
      </main>
  );
}
