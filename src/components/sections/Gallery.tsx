"use client";
import React from 'react';
import { Section } from '@/components/ui/Section';

const categories = ['All', 'Upholstery', 'Carpets', 'Automotive', 'Corporate'];

const items = [
    {
        title: 'Velvet Armchair',
        category: 'Upholstery',
        image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop',
    },
    {
        title: 'Luxury Vehicle Interior',
        category: 'Automotive',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1780&auto=format&fit=crop',
    },
    {
        title: 'Persian Rug',
        category: 'Carpets',
        image: 'https://images.unsplash.com/photo-1596230529625-7ee541364597?q=80&w=1974&auto=format&fit=crop',
    },
    {
        title: 'Office Lounge',
        category: 'Corporate',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    },
    {
        title: 'Leather Sofa',
        category: 'Upholstery',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
    },
    {
        title: 'Car Detailing',
        category: 'Automotive',
        image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop',
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
                                ? 'bg-primary text-primary-foreground shadow-glow-blue'
                                : 'bg-surface/50 text-text-secondary hover:bg-surface hover:text-text-primary border border-white/5'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-text-primary mb-3">
                                    {item.category}
                                </span>
                                <h3 className="text-xl font-bold text-heading mb-1">{item.title}</h3>
                                <p className="text-sm text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    Restored to original condition
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
