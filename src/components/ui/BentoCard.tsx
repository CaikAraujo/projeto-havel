import React from 'react';

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    span?: 'col-span-1' | 'col-span-2' | 'col-span-3' | 'md:col-span-2' | 'md:col-span-3';
}

export const BentoCard: React.FC<BentoCardProps> = ({
    children,
    className = '',
    title,
    description,
    icon,
    span = 'col-span-1'
}) => {
    return (
        <div className={`group relative overflow-hidden rounded-3xl bg-surface/50 backdrop-blur-sm border border-white/5 p-6 shadow-lg hover:shadow-glow-blue transition-all duration-300 ${span} ${className}`}>
            {/* Hover Glow Effect */}
            <div className="absolute -inset-px bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl pointer-events-none" />

            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity duration-300 scale-150 transform origin-top-right text-white">
                {icon}
            </div>

            <div className="relative z-10 h-full flex flex-col">
                <div className="flex-1">
                    {children}
                </div>

                {(title || description) && (
                    <div className="mt-6 pt-6 border-t border-white/5">
                        {icon && <div className="w-10 h-10 mb-4 text-secondary">{icon}</div>}
                        {title && <h3 className="text-xl font-bold text-heading mb-2">{title}</h3>}
                        {description && <p className="text-text-secondary text-sm leading-relaxed">{description}</p>}
                    </div>
                )}
            </div>
        </div>
    );
};
