"use client";

import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Gem, CheckCircle2, Trophy, Car } from 'lucide-react';

// Data structure based on the user's image, enhanced for the new design
const features = [
  {
    id: 1,
    title: "Rapport Qualité-Prix",
    subtitle: "Excellence Accessible",
    description: "Nous proposons des solutions sur-mesure, alliant matériaux de haute technologie et expertise artisanale, pour garantir un résultat d'exception sans compromis.",
    icon: <Gem className="w-8 h-8 text-blue-400" />,
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    title: "Expérience Éprouvée",
    subtitle: "Maîtrise Technique",
    description: "Nos techniciens certifiés possèdent des années de pratique sur véhicules de prestige. Votre automobile est entre les mains de véritables passionnés.",
    icon: <Car className="w-8 h-8 text-indigo-400" />,
    gradient: "from-indigo-500 to-purple-400"
  },
  {
    id: 3,
    title: "Garantie Sérénité",
    subtitle: "Engagement Total",
    description: "Fiers de notre savoir-faire, chaque prestation est couverte par notre garantie satisfaction. Nous nous engageons à offrir durabilité, brillance et confiance absolue.",
    icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
    gradient: "from-emerald-500 to-teal-400"
  }
];

const WhyChooseUs: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 w-full bg-gradient-to-b from-background via-[#01FFFF]/10 to-background">
      <div className="max-w-7xl mx-auto">
      
      {/* Header Section */}
      <div className="text-center mb-16 space-y-4">
        <h3 className="text-primary font-semibold tracking-wider uppercase text-sm">
          Swiss Eco Clean
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold text-heading tracking-tight">
          Pourquoi nous choisir ?
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6 opacity-80" />
        <p className="max-w-2xl mx-auto text-text-secondary text-lg pt-4 leading-relaxed">
          Une fusion entre technologie de pointe et soin méticuleux pour révéler la véritable beauté de votre véhicule.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Background Glow Effect on Hover - External only */}
            <div 
              className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-xl -z-10`}
            />

            {/* Card Content */}
            <div className="relative h-full bg-slate-900/90 border border-slate-800 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 overflow-hidden transform group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl">
              
              {/* Icon Container */}
              <div className="mb-6 relative">
                <div className="relative w-16 h-16 rounded-2xl bg-slate-800/90 border border-slate-700 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-heading mb-2">
                {feature.title}
              </h3>
              
              <span className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">
                {feature.subtitle}
              </span>

              <p className="text-text-secondary leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

