import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          neon: "#00ff6a",
          dim: "#00cc55",
          muted: "rgba(0,255,106,0.15)",
        },
        purple: {
          neon: "#a855f7",
          dim: "#7c3aed",
          muted: "rgba(168,85,247,0.15)",
        },
        teal: {
          neon: "#00e5ff",
          muted: "rgba(0,229,255,0.12)",
        },
        amber: {
          neon: "#fbbf24",
          muted: "rgba(251,191,36,0.12)",
        },
        void: {
          950: "#050505",
          900: "#080808",
          800: "#0f0f0f",
          700: "#141414",
          600: "#1a1a1a",
          500: "#222222",
          400: "#2a2a2a",
        },
        ink: {
          400: "#6b7280",
          300: "#9ca3af",
          200: "#d1d5db",
        },
      },
      fontFamily: {
        space: ["var(--font-space)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        inter: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        cairo:    ["var(--font-cairo)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
        "glow-green": "glowGreen 2s ease-in-out infinite",
        "glow-purple": "glowPurple 2s ease-in-out infinite",
        "scan": "scan 6s linear infinite",
        "float": "float 4s ease-in-out infinite",
      },
      keyframes: {
        glowGreen: {
          "0%,100%": { boxShadow: "0 0 20px rgba(0,255,106,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(0,255,106,0.8), 0 0 80px rgba(0,255,106,0.3)" },
        },
        glowPurple: {
          "0%,100%": { boxShadow: "0 0 20px rgba(168,85,247,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(168,85,247,0.8), 0 0 80px rgba(168,85,247,0.3)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        "green-glow": "0 0 30px rgba(0,255,106,0.4), 0 0 60px rgba(0,255,106,0.15)",
        "green-sm": "0 0 12px rgba(0,255,106,0.3)",
        "purple-glow": "0 0 30px rgba(168,85,247,0.4)",
        "card": "0 1px 0 rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.02)",
      },
    },
  },
  plugins: [],
};

export default config;
