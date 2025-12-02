"use client";
import React from 'react';
import { Section } from '@/components/ui/Section';

import { Compare } from '@/components/ui/compare';

const categories = ['All', 'Upholstery', 'Carpets', 'Automotive', 'Corporate'];

const items = [
    {
        title: 'BMW Interior Detail',
        category: 'Automotive',
        firstImage: '/images/carros/bmw-limpa.jpeg',
        secondImage: '/images/carros/bmw-suja.jpeg',
    },
    {
        title: 'Ferrari Leather Care',
        category: 'Automotive',
        firstImage: '/images/carros/ferrari-limpa.jpeg',
        secondImage: '/images/carros/ferrari-suja.jpeg',
    },
    {
        title: 'Mercedes Upholstery',
        category: 'Automotive',
        firstImage: '/images/carros/mercedes-limpa.jpeg',
        secondImage: '/images/carros/mercedes-suja.jpeg',
    },
    {
        title: 'Toyota Deep Clean',
        category: 'Automotive',
        firstImage: '/images/carros/toyota-limpo.jpeg',
        secondImage: '/images/carros/toyota-sujo.jpeg',
    },
    {
        title: 'Service Car Restoration',
        category: 'Automotive',
        firstImage: '/images/carros/carro-serviço-limpo.jpeg',
        secondImage: '/images/carros/carro-serviço-sujo.jpeg',
    },
    {
        title: 'Trunk Deep Clean',
        category: 'Automotive',
        firstImage: '/images/carros/mala-limpa.jpeg',
        secondImage: '/images/carros/mala-suja.jpeg',
    },
];

export const Gallery = () => {
    const [activeCategory, setActiveCategory] = React.useState('All');

    const filteredItems = items.filter(item => activeCategory === 'All' || item.category === activeCategory);

    return (
        <Section id="gallery" background="secondary" className="border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-secondary font-semibold tracking-wide uppercase text-sm">Visible Results</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
                        Restoration Gallery
                    </p>
                </div>

                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                ? 'bg-primary/10 border border-[#00D9B8] text-[#00D9B8] shadow-[0_0_15px_rgba(0,217,184,0.3)]'
                                : 'bg-surface/50 text-text-secondary hover:bg-surface hover:text-text-primary border border-white/5'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredItems.map((item, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-3xl bg-surface/50 border border-white/5 p-2">
                            <div className="relative aspect-video rounded-2xl overflow-hidden">
                                <Compare
                                    firstImage={item.firstImage}
                                    secondImage={item.secondImage}
                                    firstImageClassName="object-cover object-center"
                                    secondImageClassname="object-cover object-center"
                                    className="w-full h-full"
                                    slideMode="hover"
                                />
                            </div>

                            <div className="p-4 flex justify-between items-end">
                                <div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-2">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-heading">{item.title}</h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Slide to Compare</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
