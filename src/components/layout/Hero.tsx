import React from 'react';
import { Button } from '@/components/ui/Button';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-dark opacity-90"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10"></div>

        {/* Futuristic Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-heading tracking-tight mb-6 leading-tight drop-shadow-2xl">
          L'Avenir des <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver via-white to-silver">
            Espaces Immaculés
          </span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-text-secondary mb-10 font-light leading-relaxed">
          Découvrez l'apogée du nettoyage à sec écologique pour votre maison, votre véhicule et votre bureau.
          La technologie suisse rencontre le luxe durable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-glow-blue">
            Réserver un Service
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto shadow-glow-blue">
            Explorer la Technologie
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};
