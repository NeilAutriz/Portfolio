/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
      colors: {
        primary: "#0EA5E9", // Exact blue color from the inspiration site
        secondary: "#F43F5E", // Exact red accent color from inspiration site
        background: "#161A1D", // Exact black palette color (RGB: 22,26,29)
        foreground: "#FFFFFF",
        accent: "#38BDF8", // Light blue accent from inspiration site
        dark: {
          100: "#1E293B", // Card background
          200: "#121212", // Darker card background
          300: "#161A1D", // Main background - exact color palette match
        },
        light: {
          100: "#F8FAFC",
          200: "#F1F5F9",
          300: "#E2E8F0",
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll": "scroll 30s linear infinite",
        "timeline-pulse": "timeline-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% / 2))' },
        },
        'timeline-pulse': {
          '0%': { 
            opacity: '0.9',
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.8)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.2)',
            boxShadow: '0 0 0 10px rgba(255, 255, 255, 0)'
          },
          '100%': { 
            opacity: '0.9',
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.8)'
          }
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
};
