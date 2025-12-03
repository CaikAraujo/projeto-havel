import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="bg-background min-h-screen text-text-primary pt-20">
            <Navbar />

            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-heading">Notre Mission</h1>
                        <p className="text-xl text-text-secondary mb-6 leading-relaxed">
                            SwissEcoClean est né d'une vision simple : offrir un nettoyage de luxe sans compromis pour l'environnement.
                        </p>
                        <p className="text-text-muted mb-6 leading-relaxed">
                            Fondée en Suisse, notre entreprise allie la rigueur et la précision helvétiques à une technologie
                            de nettoyage moléculaire de pointe. Nous croyons que la propreté ne doit pas se faire au détriment
                            de la planète.
                        </p>
                        <div className="flex gap-4 mt-8">
                            <div className="border-l-4 border-primary pl-4">
                                <h3 className="font-bold text-heading">Excellence Suisse</h3>
                                <p className="text-sm text-text-muted">Qualité et précision garanties</p>
                            </div>
                            <div className="border-l-4 border-secondary pl-4">
                                <h3 className="font-bold text-heading">Innovation Verte</h3>
                                <p className="text-sm text-text-muted">Technologie 100% écologique</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2700&auto=format&fit=crop"
                            alt="Intérieur impeccable SwissEcoClean"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
