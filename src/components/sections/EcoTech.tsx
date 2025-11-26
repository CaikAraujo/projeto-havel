import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
export const EcoTech = () => {
    return (
        <Section id="technology" background="secondary" className="border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-20">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Sustainability Core</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-heading sm:text-4xl">
                        Engineered for <span className="text-primary">Zero Waste</span>
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-text-secondary lg:mx-auto">
                        Our proprietary Swiss technology replaces water with biodegradable compounds, delivering superior results with minimal environmental impact.
                    </p>
                </div>

                <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="relative">
                        <h3 className="text-2xl font-bold text-heading tracking-tight sm:text-3xl">
                            Molecular Cleaning Process
                        </h3>
                        <p className="mt-3 text-lg text-text-secondary">
                            Unlike traditional steam cleaning that soaks your fabrics, our process uses millions of microscopic carbonated bubbles to lift dirt to the surface.
                        </p>

                        <dl className="mt-10 space-y-10">
                            {[
                                {
                                    name: 'Encapsulation Technology',
                                    description: 'Dirt is trapped in microscopic crystals for easy removal.',
                                    icon: (
                                        <svg viewBox="0 0 48 48" className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polygon points="24 6 39 15 39 33 24 42 9 33 9 15" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="24" cy="24" r="5" />
                                        </svg>
                                    ),
                                },
                                {
                                    name: 'Rapid Drying',
                                    description: 'Fabrics are dry in minutes, preventing mold and bacteria.',
                                    icon: (
                                        <svg viewBox="0 0 48 48" className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="3">
                                            <path d="M18 4l-4 14h10l-4 18 14-22h-10l8-10z" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ),
                                },
                                {
                                    name: 'Non-Toxic Formula',
                                    description: 'Safe for pets, children, and allergy sufferers.',
                                    icon: (
                                        <svg viewBox="0 0 48 48" className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="3">
                                            <path d="M10 30c7-1 12-6 14-14 3 11 9 15 14 16-4 8-10 9-14 9S14 39 10 30z" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M29 9c2 2 5 4 9 5" strokeLinecap="round" />
                                        </svg>
                                    ),
                                },
                            ].map((item) => (
                                <div key={item.name} className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-surface border border-white/10 text-xl font-bold shadow-lg">
                                            {item.icon}
                                        </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-heading">{item.name}</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-text-secondary">{item.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                        <div className="relative mx-auto w-[490px] rounded-xl shadow-2xl shadow-primary/10 ring-1 ring-white/10 bg-background/50 backdrop-blur-md p-4">
                            <div className="bg-background-secondary rounded-lg overflow-hidden border border-white/5">
                                <div className="h-8 bg-surface border-b border-white/5 flex items-center px-4 space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="font-mono text-sm text-text-muted">process_monitor.exe</span>
                                        <span className="text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded border border-primary/20">ACTIVE</span>
                                    </div>
                                    <div className="space-y-4 font-mono text-xs">
                                        <div className="flex justify-between">
                                            <span className="text-text-secondary">Water Usage</span>
                                            <span className="text-primary">0.0 L</span>
                                        </div>
                                        <div className="w-full bg-surface rounded-full h-1.5">
                                            <div className="bg-primary h-1.5 rounded-full w-[1%] shadow-[0_0_10px_rgba(0,217,184,0.5)]"></div>
                                        </div>

                                        <div className="flex justify-between mt-4">
                                            <span className="text-text-secondary">Dirt Extraction</span>
                                            <span className="text-secondary">99.9%</span>
                                        </div>
                                        <div className="w-full bg-surface rounded-full h-1.5">
                                            <div className="bg-secondary h-1.5 rounded-full w-[99%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                        </div>

                                        <div className="flex justify-between mt-4">
                                            <span className="text-text-secondary">Drying Time</span>
                                            <span className="text-primary">15 min</span>
                                        </div>
                                        <div className="w-full bg-surface rounded-full h-1.5">
                                            <div className="bg-primary h-1.5 rounded-full w-[15%] shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-4 border-t border-white/5 text-center">
                                        <p className="text-text-muted text-xs">Swiss Eco Standard Certified</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
