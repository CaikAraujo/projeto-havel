import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-background-secondary text-text-primary py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold tracking-tighter text-heading">
                            SWISS<span className="text-primary">ECO</span>CLEAN
                        </span>
                        <p className="mt-4 text-text-secondary max-w-xs">
                            Redefining cleanliness with Swiss precision and eco-friendly technology.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-heading tracking-wider uppercase mb-4">Services</h3>
                        <ul className="space-y-3">
                            {['Upholstery', 'Carpets', 'Automotive', 'Offices'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-text-muted hover:text-electric transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-heading tracking-wider uppercase mb-4">Company</h3>
                        <ul className="space-y-3">
                            {['About Us', 'Sustainability', 'Careers', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-text-muted hover:text-electric transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-text-muted text-sm">
                        &copy; {new Date().getFullYear()} Swiss Eco Clean. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {/* Social icons would go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
};
