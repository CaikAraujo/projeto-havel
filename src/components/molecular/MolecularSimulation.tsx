"use client";

import React, { useEffect, useRef } from 'react';
import { CleaningMode } from '../../types';
import { Droplets, Sparkles, AlertTriangle, Wind } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
    mode: CleaningMode;
    setMode: (mode: CleaningMode) => void;
}

const MolecularSimulation: React.FC<Props> = ({ mode, setMode }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Animation loop logic
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: any[] = [];
        const width = canvas.width;
        const height = canvas.height;

        // Initialize particles based on mode
        const initParticles = () => {
            particles = [];
            const particleCount = mode === CleaningMode.TRADITIONAL ? 80 : 120;

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 3 + 1,
                    speedY: mode === CleaningMode.TRADITIONAL ? Math.random() * 2 + 1 : -(Math.random() * 1.5 + 0.5),
                    opacity: Math.random() * 0.5 + 0.2,
                    type: mode === CleaningMode.TRADITIONAL ? 'heavy' : 'bubble'
                });
            }

            // Add "dirt" particles
            for (let i = 0; i < 30; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: height - 20 - (Math.random() * 40), // Sitting in fabric
                    radius: Math.random() * 4 + 2,
                    speedY: 0,
                    opacity: 0.8,
                    type: 'dirt',
                    isLifted: false
                });
            }
        };

        initParticles();

        const drawFabric = () => {
            ctx.fillStyle = '#1F2833';
            // Draw wavy fabric lines at bottom
            ctx.beginPath();
            ctx.moveTo(0, height - 20);
            for (let i = 0; i <= width; i += 20) {
                ctx.quadraticCurveTo(i + 10, height - 40, i + 20, height - 20);
            }
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.fill();
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            drawFabric();

            particles.forEach((p) => {
                ctx.beginPath();

                if (p.type === 'heavy') {
                    // Traditional: Heavy blue water drops falling down
                    ctx.fillStyle = `rgba(50, 100, 255, ${p.opacity})`;
                    p.y += p.speedY;
                    if (p.y > height - 30) {
                        p.y = height - 30; // Stuck in fabric
                        p.opacity = Math.min(p.opacity + 0.01, 0.9); // Gets darker/wetter
                    }
                } else if (p.type === 'bubble') {
                    // Molecular: Cyan bubbles floating up (using primary color)
                    ctx.fillStyle = `rgba(0, 217, 184, ${p.opacity})`; // Primary #00D9B8
                    p.y += p.speedY;
                    if (p.y < 0) p.y = height;
                } else if (p.type === 'dirt') {
                    // Dirt particles
                    ctx.fillStyle = '#3e2a2a'; // Dark brown
                    if (mode === CleaningMode.MOLECULAR) {
                        // In molecular mode, bubbles grab dirt
                        if (!p.isLifted && Math.random() > 0.98) {
                            p.isLifted = true;
                        }
                        if (p.isLifted) {
                            p.y -= 1; // Float away
                            p.opacity -= 0.01;
                        }
                    } else {
                        // In traditional, dirt gets pushed down/muddy
                        ctx.fillStyle = '#1a1212';
                    }
                }

                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();

                // Reset heavy particles
                if (p.type === 'heavy' && p.y > height) {
                    p.y = -10;
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [mode]);

    return (
        <div className="w-full relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 h-[500px] flex flex-col md:flex-row">

            {/* Canvas Layer */}
            <div className="absolute inset-0 z-0">
                <canvas
                    ref={canvasRef}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Control Panel */}
            <div className="relative z-10 p-8 w-full md:w-1/3 flex flex-col justify-center glass-panel md:border-r border-b md:border-b-0 border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-white font-syne uppercase tracking-wider">
                    Analyse du Processus
                </h3>

                <div className="space-y-4">
                    <button
                        onClick={() => setMode(CleaningMode.TRADITIONAL)}
                        className={`w-full p-4 rounded-xl flex items-center gap-4 transition-all duration-300 border ${mode === CleaningMode.TRADITIONAL ? 'bg-red-500/10 border-red-500 text-white' : 'bg-transparent border-white/10 text-gray-400 hover:bg-white/5'}`}
                    >
                        <div className={`p-2 rounded-lg ${mode === CleaningMode.TRADITIONAL ? 'bg-red-500 text-white' : 'bg-gray-800'}`}>
                            <Droplets size={20} />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-sm uppercase tracking-wide">Traditionnel</div>
                            <div className="text-xs opacity-70">Saturation & Risque de Moisissure</div>
                        </div>
                    </button>

                    <button
                        onClick={() => setMode(CleaningMode.MOLECULAR)}
                        className={`w-full p-4 rounded-xl flex items-center gap-4 transition-all duration-300 border ${mode === CleaningMode.MOLECULAR ? 'bg-[#00D9B8]/10 border-[#00D9B8] text-[#00D9B8] shadow-[0_0_15px_rgba(0,217,184,0.2)]' : 'bg-transparent border-white/10 text-gray-400 hover:bg-white/5'}`}
                    >
                        <div className={`p-2 rounded-lg ${mode === CleaningMode.MOLECULAR ? 'bg-[#00D9B8]/10 text-[#00D9B8]' : 'bg-gray-800 text-gray-400'}`}>
                            <Sparkles size={20} />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-sm uppercase tracking-wide">Swiss Molecular</div>
                            <div className={`text-xs ${mode === CleaningMode.MOLECULAR ? 'text-[#00D9B8]/70' : 'opacity-70'}`}>Encapsulation & Zéro Résidu</div>
                        </div>
                    </button>
                </div>

                <div className="mt-8">
                    <AnimatePresence mode="wait">
                        {mode === CleaningMode.TRADITIONAL ? (
                            <motion.div
                                key="trad-desc"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-3"
                            >
                                <div className="flex items-center gap-2 text-red-400 text-sm font-bold uppercase tracking-wider">
                                    <AlertTriangle size={16} />
                                    <span>Dommage Critique</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    L'eau pénètre profondément dans la mousse (2-5cm), créant un environnement humide pendant des jours. Cela affaiblit les fibres et permet la prolifération de champignons invisibles.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="mol-desc"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-3"
                            >
                                <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider">
                                    <Wind size={16} />
                                    <span>Efficacité Maximale</span>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Des millions de bulles carbonatées explosent au contact de la saleté, la brisant en particules microscopiques qui sont encapsulées et éliminées instantanément.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Visualization Area */}
            <div className="relative flex-1 p-8 flex flex-col justify-between">
                <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
                    <div className={`w-2 h-2 rounded-full animate-pulse ${mode === CleaningMode.MOLECULAR ? 'bg-primary' : 'bg-red-500'}`}></div>
                    <span className="text-xs font-mono uppercase text-gray-400">
                        {mode === CleaningMode.MOLECULAR ? 'Actif : Carbonatation' : 'Attention : Saturation'}
                    </span>
                </div>

                <div className="mt-auto pointer-events-none">
                    {mode === CleaningMode.MOLECULAR && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex gap-8"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary font-syne">15m</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Séchage Total</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary font-syne">98%</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Moins d'Eau</div>
                            </div>
                        </motion.div>
                    )}
                    {mode === CleaningMode.TRADITIONAL && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex gap-8"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-red-500 font-syne">24h+</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Temps de Séchage</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-red-500 font-syne">200L</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Eau par Canapé</div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default MolecularSimulation;
