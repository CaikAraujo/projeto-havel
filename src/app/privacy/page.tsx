import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPage() {
    return (
        <main className="bg-background min-h-screen text-text-primary pt-20">
            <Navbar />

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-heading">Politique de Confidentialité</h1>

                <div className="prose prose-invert max-w-none text-text-secondary">
                    <p className="mb-4">Dernière mise à jour : {new Date().toLocaleDateString('fr-CH')}</p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-heading">1. Introduction</h2>
                    <p className="mb-4">
                        SwissEcoClean respecte votre vie privée et s'engage à protéger vos données personnelles.
                        Cette politique de confidentialité vous informe sur la manière dont nous traitons vos données
                        lorsque vous visitez notre site web ou utilisez nos services.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-heading">2. Les données que nous collectons</h2>
                    <p className="mb-4">
                        Nous pouvons collecter les types de données suivants :
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Données d'identité (Nom, Prénom)</li>
                        <li>Données de contact (Email, Numéro de téléphone, Adresse)</li>
                        <li>Données techniques (Adresse IP, type de navigateur)</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-heading">3. Comment nous utilisons vos données</h2>
                    <p className="mb-4">
                        Vos données sont utilisées uniquement pour :
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Fournir nos services de nettoyage</li>
                        <li>Gérer votre relation client</li>
                        <li>Améliorer notre site web et nos services</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-heading">4. Sécurité des données</h2>
                    <p className="mb-4">
                        Nous avons mis en place des mesures de sécurité appropriées pour empêcher que vos données personnelles
                        ne soient accidentellement perdues, utilisées ou consultées de manière non autorisée.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-heading">5. Contact</h2>
                    <p className="mb-4">
                        Pour toute question concernant cette politique de confidentialité, veuillez nous contacter à :
                        contact@swissecoclean.ch
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
