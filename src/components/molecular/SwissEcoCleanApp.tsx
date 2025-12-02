"use client";

import React, { useState } from 'react';
import MolecularSimulation from './MolecularSimulation';
import EcoCalculator from './EcoCalculator';
import { Button } from '../ui/Button';
import { CleaningMode } from '../../types';
import { CheckCircle2, ShieldCheck, Microscope, ArrowRight, Droplets, Clock, Leaf } from 'lucide-react';

const SwissEcoCleanApp: React.FC = () => {
    const [mode, setMode] = useState<CleaningMode>(CleaningMode.MOLECULAR);

    const features = [
        {
            title: "Zero Encharcamento",
            desc: "Diferente da lavagem a vapor, não injetamos litros de água. Previne mofo e odores de 'cachorro molhado'.",
            icon: <Droplets className="w-8 h-8 text-blue-400" />,
            gradient: "from-blue-500 to-cyan-400"
        },
        {
            title: "Secagem em 15 Min",
            desc: "Seu sofá pronto para uso quase imediatamente. Ideal para hotéis, escritórios e lares movimentados.",
            icon: <Clock className="w-8 h-8 text-indigo-400" />,
            gradient: "from-indigo-500 to-purple-400"
        },
        {
            title: "Fórmula Não-Tóxica",
            desc: "Seguro para bebês e pets. Nossa solução é biodegradável e não deixa resíduos químicos pegajosos.",
            icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
            gradient: "from-emerald-500 to-teal-400"
        }
    ];

    return (
        <div className="min-h-screen bg-background relative overflow-x-hidden selection:bg-primary selection:text-white">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        <Microscope size={14} /> Tecnologia Patenteada
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-syne font-bold text-heading leading-[0.9]">
                        LAVAGEM <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">A SECO REAL.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-text-secondary text-lg md:text-xl font-light leading-relaxed">
                        Esqueça a água suja. Nossa tecnologia de encapsulamento molecular remove a sujeira microscopicamente, deixando seus móveis prontos em minutos, não dias.
                    </p>
                </div>

                {/* The Interactive Demo */}
                <MolecularSimulation mode={mode} setMode={setMode} />

                {/* Feature Grid - Styled like WhyChooseUs */}
                <div className="grid md:grid-cols-3 gap-8 mt-24">
                    {features.map((feature, i) => (
                        <div key={i} className="group relative">
                            {/* Background Glow Effect on Hover */}
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

                                <h3 className="text-xl font-bold text-heading font-syne mb-3">{feature.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* AI Calculator Section */}
                <EcoCalculator />

                {/* CTA Footer */}
                <div className="mt-32 text-center pb-20">
                    <h2 className="text-4xl md:text-5xl font-syne font-bold text-heading mb-8">
                        Pronto para o futuro?
                    </h2>
                    <Button variant="primary" size="lg" className="group shadow-glow-blue rounded-full">
                        <span className="mr-2">Solicitar Orçamento</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="mt-6 text-sm text-text-muted">
                        Atendimento em toda a Grande São Paulo e Região.
                    </p>
                </div>

            </section>

            {/* Background Decorative Elements */}
            <div className="fixed top-20 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] opacity-10 pointer-events-none -z-10 mix-blend-screen" />
            <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-[100px] opacity-10 pointer-events-none -z-10 mix-blend-screen" />

        </div>
    );
};

export default SwissEcoCleanApp;
