/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                slate: {
                    850: '#1e293b', // Custom lighter dark
                    900: '#0f172a',
                    950: '#020617', // Main background
                },
                primary: {
                    DEFAULT: '#3b82f6', // Bright Blue
                    glow: '#60a5fa',
                },
                accent: {
                    DEFAULT: '#8b5cf6', // Violet
                    glow: '#a78bfa',
                },
                // Brand gradients will be constructed via classes
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'glow-sm': '0 0 10px rgba(59, 130, 246, 0.3)',
                'glow-md': '0 0 20px rgba(59, 130, 246, 0.4)',
                'glow-lg': '0 0 30px rgba(59, 130, 246, 0.5)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 90deg at 50% 50%, #020617 0%, #0f172a 50%, #020617 100%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
