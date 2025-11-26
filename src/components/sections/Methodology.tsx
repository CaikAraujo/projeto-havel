import React from 'react';
import { Section } from '@/components/ui/Section';

const steps = [
    {
        id: '01',
        title: 'Molecular Inspection',
        description: 'We analyze the fabric composition and stain types using UV technology to determine the precise cleaning formula required.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
    },
    {
        id: '02',
        title: 'Carbonated Extraction',
        description: 'Our proprietary Swiss solution releases millions of microscopic bubbles that lift dirt to the surface for permanent removal.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        id: '03',
        title: 'Nano-Protection',
        description: 'We apply an invisible shield that repels liquids and prevents future stains, extending the life of your assets.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
];

export const Methodology = () => {
    return (
        <Section id="methodology" background="secondary" className="border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-semibold tracking-wide uppercase text-sm">Our Methodology</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
                        Scientific Process for <br /> Maximum Preservation
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step) => (
                            <div key={step.id} className="group relative bg-surface/80 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-all duration-300">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary font-bold shadow-glow-blue z-20">
                                    {step.id}
                                </div>

                                <div className="mt-8 text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-heading mb-4">{step.title}</h3>
                                    <p className="text-text-secondary leading-relaxed text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};
