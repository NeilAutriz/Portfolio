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
      },
      colors: {
        primary: "#0EA5E9", // Exact blue color from the inspiration site
        secondary: "#F43F5E", // Exact red accent color from inspiration site
        background: "#0F172A", // Dark background color from inspiration site
        foreground: "#FFFFFF",
        accent: "#38BDF8", // Light blue accent from inspiration site
        dark: {
          100: "#1E293B", // Card background
          200: "#162031", // Darker card background - exact match
          300: "#0F172A", // Main background
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
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% / 2))' },
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
