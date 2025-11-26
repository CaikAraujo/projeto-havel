import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Modern Ecological Palette
                background: {
                    DEFAULT: "#181818", // Dark Gray
                    secondary: "#1F1F1F", // Slightly lighter
                },
                heading: "#F2FFFA", // Highlight for titles
                surface: {
                    DEFAULT: "#252525", // Card background
                    light: "#333333",
                },
                primary: {
                    DEFAULT: "#00D9B8", // Fresh Aqua Green
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#4DD4E8", // Light Aqua Blue
                    foreground: "#FFFFFF",
                },
                accent: {
                    DEFAULT: "#A8E6CF", // Mint Pastel
                    foreground: "#181818",
                },
                text: {
                    primary: "#FFFFFF", // Pure White
                    secondary: "#E5E5E5", // Soft Light Gray
                    muted: "#6B7280", // Medium Gray
                },

                // Status Colors
                success: "#10B981",
                warning: "#F59E0B",
                error: "#EF4444",

                // Legacy/Compat Mappings
                electric: {
                    DEFAULT: "#00D9B8", // Mapped to Primary
                    glow: "#00D9B8",
                },
                sustainable: {
                    DEFAULT: "#10B981", // Mapped to Success
                    glow: "#10B981",
                },
                glacial: {
                    DEFAULT: "#4DD4E8", // Mapped to Secondary
                    glow: "#4DD4E8",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "hero-pattern": "url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop')",
            },
            boxShadow: {
                'glow-blue': '0 0 20px -5px rgba(0, 217, 184, 0.3)', // Primary Glow
                'glow-green': '0 0 20px -5px rgba(16, 185, 129, 0.3)', // Success Glow
            },
            colors: {
                slate: {
                    850: '#151e2e',
                    950: '#020617',
                }
            },
            animation: {
                scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
            },
            keyframes: {
                scroll: {
                    to: {
                        transform: 'translate(calc(-50% - 0.5rem))',
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
