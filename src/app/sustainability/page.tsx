import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function SustainabilityPage() {
    return (
        <main className="bg-background min-h-screen text-text-primary pt-20">
            <Navbar />

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-heading">Notre Engagement Durable</h1>

                <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-text-secondary mb-8">
                        Chez SwissEcoClean, la durabilité n'est pas une option, c'est notre fondation.
                        Nous utilisons une technologie moléculaire suisse révolutionnaire qui permet un nettoyage
                        en profondeur sans gaspillage d'eau.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-background-secondary p-6 rounded-lg border border-white/5">
                            <h3 className="text-2xl font-bold mb-4 text-primary">0% Eau Gaspillée</h3>
                            <p className="text-text-muted">
                                Contrairement aux méthodes traditionnelles qui utilisent des centaines de litres,
                                notre processus est quasi-anhydre. Nous préservons cette ressource vitale.
                            </p>
                        </div>
                        <div className="bg-background-secondary p-6 rounded-lg border border-white/5">
                            <h3 className="text-2xl font-bold mb-4 text-primary">Produits Biodégradables</h3>
                            <p className="text-text-muted">
                                Nos solutions de nettoyage sont 100% biodégradables, sans danger pour vos enfants,
                                vos animaux de compagnie et la planète.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-heading">Pourquoi c'est important ?</h2>
                    <p className="text-text-secondary mb-4">
                        Le nettoyage traditionnel de textiles est l'une des industries les plus polluantes en termes
                        de rejet d'eaux usées. En choisissant SwissEcoClean, vous participez activement à la réduction
                        de cette empreinte écologique.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
