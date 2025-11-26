import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const Contact = () => {
    return (
        <Section id="contact" background="default" className="border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                    {/* Left Column: Contact Form */}
                    <div className="bg-surface/30 backdrop-blur-sm rounded-2xl border border-white/5 p-8">
                        <h2 className="text-2xl font-bold text-heading mb-6">Send a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                                <input type="text" id="name" placeholder="Your name" className="w-full bg-background-secondary border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                                <input type="email" id="email" placeholder="your@email.com" className="w-full bg-background-secondary border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">Subject</label>
                                <input type="text" id="subject" placeholder="Question, Partnership, etc." className="w-full bg-background-secondary border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors" />
                            </div>
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-2">Select a service</label>
                                <select id="service" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary transition-colors appearance-none">
                                    <option value="">Choose an option</option>
                                    <option value="upholstery">Upholstery Cleaning</option>
                                    <option value="carpets">Carpet & Rugs</option>
                                    <option value="automotive">Automotive Detailing</option>
                                    <option value="corporate">Corporate Offices</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                                <textarea id="message" rows={4} placeholder="How can we help you?" className="w-full bg-background-secondary border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"></textarea>
                            </div>
                            <Button type="submit" size="lg" className="w-full shadow-glow-blue">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Right Column: Info & Map */}
                    <div className="space-y-8 mt-12 lg:mt-0">
                        {/* Contact Info */}
                        <div className="bg-surface/30 backdrop-blur-sm rounded-2xl border border-white/5 p-8">
                            <h2 className="text-2xl font-bold text-heading mb-6">Service Channels</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                                        <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="#00D9B8" strokeWidth="1.8">
                                            <path d="M6.5 3.5h2l2 4-2 2a11 11 0 005 5l2-2 4 2v2a2 2 0 01-2 2 15 15 0 01-15-15 2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-secondary">Phone / WhatsApp</p>
                                        <p className="text-lg font-bold text-text-primary">(11) 99999-9999</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                                        <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="#00D9B8" strokeWidth="1.8">
                                            <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                                            <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-secondary">E-mail</p>
                                        <p className="text-lg font-bold text-text-primary">contact@swissclean.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                                        <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="#00D9B8" strokeWidth="1.8">
                                            <path d="M12 21s6-5.373 6-10a6 6 0 10-12 0c0 4.627 6 10 6 10z" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="12" cy="11" r="2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-secondary">Address</p>
                                        <p className="text-lg font-bold text-text-primary">Rte de Challex, La Plaine</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/5">
                                <p className="text-sm text-text-secondary mb-4">Follow us on social media</p>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary/10 hover:text-white transition-colors" aria-label="Instagram">
                                        <svg className="w-4 h-4 text-current" viewBox="0 0 24 24" fill="none" stroke="#00D9B8" strokeWidth="1.8">
                                            <rect x="4" y="4" width="16" height="16" rx="5" />
                                            <circle cx="12" cy="12" r="3.5" />
                                            <circle cx="17.5" cy="6.5" r="0.8" fill="#00D9B8" stroke="none" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary/10 hover:text-white transition-colors" aria-label="LinkedIn">
                                        <svg className="w-4 h-4 text-current" viewBox="0 0 24 24" fill="none" stroke="#00D9B8" strokeWidth="1.8">
                                            <path d="M6 9v9" strokeLinecap="round" />
                                            <path d="M6 6.5a.75.75 0 11.001 1.5A.75.75 0 016 6.5" fill="#00D9B8" stroke="none" />
                                            <path d="M10 9v9" strokeLinecap="round" />
                                            <path d="M10 12c0-1.657 1.343-3 3-3s3 1.343 3 3v6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary/10 hover:text-white transition-colors" aria-label="YouTube">
                                        <svg className="w-4 h-4 text-current" viewBox="0 0 24 24" fill="none" stroke="#00D9B8" strokeWidth="1.8">
                                            <path d="M4 8.5c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2v7c0 1.105-.895 2-2 2H6c-1.105 0-2-.895-2-2v-7z" />
                                            <path d="M10 10l4 2-4 2v-4z" fill="#00D9B8" stroke="none" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <a
                            href="https://maps.google.com/?q=Rte+de+Challex,+La+Plaine"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-surface/30 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden h-[300px] transition-all hover:border-primary/40"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.662768341646!2d6.000000000000001!3d46.18333330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c62c000000001%3A0x0!2sRte%20de%20Challex%2C%20La%20Plaine!5e0!3m2!1sen!2sch!4v1620000000000!5m2!1sen!2sch"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(90%)', pointerEvents: 'none' }}
                                tabIndex={-1}
                            ></iframe>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};
