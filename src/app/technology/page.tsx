import { Navbar } from "@/components/layout/Navbar";
import { EcoTech } from "@/components/sections/EcoTech";
import { Gallery } from "@/components/sections/Gallery";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function TechnologyPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-electric selection:text-white pt-10">
            <Navbar />
            <div>
                <EcoTech />
                <Gallery />
            </div>
            <Footer />
            <FloatingWhatsApp />
        </main>
    );
}
