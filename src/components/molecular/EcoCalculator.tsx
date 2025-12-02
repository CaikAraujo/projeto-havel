"use client";

import React, { useState } from 'react';
import { calculateEcoInsight, EcoResult } from '../../app/actions/calculateEco';
import { Send, Leaf, Loader2, Droplets, Sparkles } from 'lucide-react';

const EcoCalculator: React.FC = () => {
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<EcoResult | null>(null);

    const [selectedCard, setSelectedCard] = useState<'traditional' | 'molecular' | null>(null);

    const handleCalculate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setLoading(true);
        const insight = await calculateEcoInsight(input);
        setResult(insight);
        setLoading(false);
        setSelectedCard(null); // Reset selection on new calculation
    };

    return (
        <div className="w-full max-w-3xl mx-auto mt-20 glass-panel p-1 rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="bg-[#0f1115] rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                        <Leaf size={24} />
                    </div>
                    <div>
                        <h4 className="text-xl font-syne font-bold text-heading">Calculateur d'Impact Écologique</h4>
                        <p className="text-sm text-text-secondary">Découvrez combien vous économisez avec la technologie Suisse</p>
                    </div>
                </div>

                <form onSubmit={handleCalculate} className="relative mb-8">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ex : Canapé 3 places, Fauteuil en velours..."
                        className="w-full bg-[#1a1d24] text-white border border-white/10 rounded-lg py-4 px-6 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-space placeholder-gray-600 pr-16"
                    />
                    <button
                        type="submit"
                        disabled={loading || !input}
                        className="absolute right-2 top-2 bottom-2 font-bold px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: '#00D9B8'
                        }}
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                    </button>
                </form>

                {result && (
                    <div className="animate-fade-in space-y-6">
                        {/* Comparison Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div
                                onClick={() => setSelectedCard('traditional')}
                                className={`p-4 rounded-xl flex flex-col items-center text-center cursor-pointer transition-all duration-300 border ${selectedCard === 'traditional'
                                    ? 'bg-red-500/10 border-red-500'
                                    : 'bg-red-500/5 border-red-500/20 hover:border-red-500/50'
                                    }`}
                            >
                                <div className={`mb-2 p-2 rounded-full transition-colors ${selectedCard === 'traditional' ? 'bg-red-500/20 text-red-500' : 'bg-red-500/10 text-red-500'
                                    }`}>
                                    <Droplets size={20} />
                                </div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">Traditionnel</div>
                                <div className="text-2xl font-bold text-red-400 font-syne">{result.traditional}L</div>
                                <div className="text-xs text-gray-500 mt-1">Eau Gaspillée</div>
                            </div>

                            <div
                                onClick={() => setSelectedCard('molecular')}
                                className={`p-4 rounded-xl flex flex-col items-center text-center relative overflow-hidden border cursor-pointer transition-all duration-300`}
                                style={{
                                    backgroundColor: 'rgba(0, 217, 184, 0.1)',
                                    borderColor: '#00D9B8'
                                }}
                            >
                                <div className="absolute inset-0 animate-pulse" style={{ backgroundColor: 'rgba(0, 217, 184, 0.05)' }}></div>
                                <div className="relative z-10 flex flex-col items-center">
                                    <div
                                        className="mb-2 p-2 rounded-full transition-all duration-300"
                                        style={{
                                            backgroundColor: 'rgba(0, 217, 184, 0.1)',
                                            color: '#00D9B8'
                                        }}
                                    >
                                        <Sparkles size={20} />
                                    </div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">Swiss Molecular</div>
                                    <div
                                        className="text-2xl font-bold font-syne transition-colors duration-300"
                                        style={{ color: '#00D9B8' }}
                                    >
                                        {result.molecular}L
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">Consommation Minimale</div>
                                </div>
                            </div>
                        </div>

                        {/* Savings Highlight */}
                        <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-l-4 border-primary rounded-r-lg">
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-4xl font-bold text-heading font-syne">{result.savings}L</span>
                                <span className="text-lg text-text-secondary">d'eau économisée</span>
                            </div>
                            <p className="text-text-secondary leading-relaxed font-light">
                                {result.message}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EcoCalculator;
