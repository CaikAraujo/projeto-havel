import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background tracking-wide cursor-pointer";

    const variants = {
        primary: "bg-[#00D9B8] text-white hover:bg-[#4DD4E8] hover:text-white hover:shadow-[0_0_25px_rgba(77,212,232,0.45)] focus:ring-2 focus:ring-[#00D9B8]/60 border border-transparent",
        secondary: "bg-transparent text-white border border-white/30 hover:border-[#4DD4E8] hover:shadow-[0_0_25px_rgba(77,212,232,0.6)] focus:ring-2 focus:ring-[#4DD4E8]/60",
        outline: "border border-[#00D9B8] text-[#00D9B8] hover:bg-[#00D9B8]/10 hover:text-white hover:shadow-[0_0_15px_rgba(0,217,184,0.25)] focus:ring-2 focus:ring-[#00D9B8]/60 bg-transparent",
        ghost: "text-text-secondary hover:text-[#00D9B8] hover:bg-white/5 focus:ring-white/20",
    };

    const sizes = {
        sm: "px-5 py-2 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-10 py-4 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
