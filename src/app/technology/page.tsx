import { Navbar } from "@/components/layout/Navbar";
import SwissEcoCleanApp from "@/components/molecular/SwissEcoCleanApp";
import { Gallery } from "@/components/sections/Gallery";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function TechnologyPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-electric selection:text-white">
            <Navbar />
            <div className="pt-20">
                <SwissEcoCleanApp />
                <Gallery />
            </div>
            <Footer />
            <FloatingWhatsApp />
        </main>
    );
}
