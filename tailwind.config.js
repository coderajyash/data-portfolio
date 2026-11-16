/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0B0C",
          900: "#0B0B0C",
          800: "#111113",
          700: "#17171A",
          600: "#1F1F23",
          500: "#2A2A2F",
        },
        lime: {
          DEFAULT: "#C6F432",
          300: "#DDFA7E",
          400: "#D2F75A",
          500: "#C6F432",
          600: "#A6D11B",
        },
      },
      fontFamily: {
        // One family everywhere for a clean, consistent look
        sans: ["Manrope", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(198, 244, 50, 0.55)",
        card: "0 30px 60px -20px rgba(0, 0, 0, 0.8)",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.35 },
        },
        streak: {
          "0%": { transform: "translateY(0)", opacity: 0 },
          "30%": { opacity: 1 },
          "100%": { transform: "translateY(-120px)", opacity: 0 },
        },
      },
      animation: {
        pulseDot: "pulseDot 2s ease-in-out infinite",
        streak: "streak 4s ease-in infinite",
      },
    },
  },
  plugins: [],
};
