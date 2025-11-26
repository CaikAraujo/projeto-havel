import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-electric selection:text-white pt-10">
            <Navbar />
            <div>
                <Contact />
            </div>
            <Footer />
            <FloatingWhatsApp />
        </main>
    );
}
