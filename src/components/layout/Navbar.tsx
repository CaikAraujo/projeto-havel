"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full top-10 z-40 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/" aria-label="Swiss Eco Clean home" className="text-2xl font-bold tracking-tighter text-heading hover:text-primary transition-colors">
                        SWISS<span className="text-primary">ECO</span>CLEAN
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-sm font-medium text-text-secondary hover:text-electric transition-colors">
                        Home
                    </Link>
                    <Link href="/technology" className="text-sm font-medium text-text-secondary hover:text-electric transition-colors">
                        Technology
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-text-secondary hover:text-electric transition-colors">
                        Contact
                    </Link>
                    <Link href="/contact">
                        <Button variant="primary" size="sm" className="shadow-glow-blue">
                            Get a Quote
                        </Button>
                    </Link>
                </div>
                <button
                    className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-heading transition-colors hover:text-primary"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                >
                    {menuOpen ? (
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                        </svg>
                    )}
                </button>
            </div>
            {menuOpen && (
                <div className="md:hidden px-4 sm:px-6 mt-4">
                    <div className="bg-background-secondary/95 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-4 shadow-xl">
                        <Link href="/" className="block text-sm font-medium text-text-secondary hover:text-electric transition-colors" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                        <Link href="/technology" className="block text-sm font-medium text-text-secondary hover:text-electric transition-colors" onClick={() => setMenuOpen(false)}>
                            Technology
                        </Link>
                        <Link href="/contact" className="block text-sm font-medium text-text-secondary hover:text-electric transition-colors" onClick={() => setMenuOpen(false)}>
                            Contact
                        </Link>
                        <Link href="/contact" onClick={() => setMenuOpen(false)}>
                            <Button variant="primary" size="sm" className="w-full shadow-glow-blue">
                                Get a Quote
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};
