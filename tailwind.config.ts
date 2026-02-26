import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // global palette defined by client
        background: "#0f172a",        // page background
        card: "#111827",              // card/container bg
        "main-text": "#e5e7eb",     // primary readable text
        "light-text": "#9ca3af",    // secondary/light text
        border: "#1f2937",           // generic border color
        primary: {
          // primary color shades (all set to the provided blue so existing
          // utility classes like `primary-600` continue to work without
          // having to rewrite all of them).  Using the same value keeps the
          // site visually consistent.  If finer control is needed these can
          // be tweaked later.
          50: "#38bdf8",
          100: "#38bdf8",
          200: "#38bdf8",
          300: "#38bdf8",
          400: "#38bdf8",
          500: "#38bdf8",
          600: "#38bdf8",
          700: "#38bdf8",
          800: "#38bdf8",
          900: "#38bdf8",
        },
        secondary: {
          // secondary mirrors primary so gradients/links still use the
          // blue tone instead of the old orange palette.
          50: "#38bdf8",
          100: "#38bdf8",
          200: "#38bdf8",
          300: "#38bdf8",
          400: "#38bdf8",
          500: "#38bdf8",
          600: "#38bdf8",
          700: "#38bdf8",
          800: "#38bdf8",
          900: "#38bdf8",
        },
        success: "#22c55e",
        warning: "#facc15",
        danger: "#ef4444",
        // keep default utilities for white/gray if needed by not overriding them
      },
      backgroundColor: {
        "accent-white": "#ffffff",
        "accent-gray": "#f9fafb",
        "accent-dark": "#111827",
      },
      textColor: {
        "accent-white": "#ffffff",
        "accent-gray": "#f9fafb",
        "accent-dark": "#111827",
      },
      borderColor: {
        "accent-white": "#ffffff",
        "accent-gray": "#f9fafb",
        "accent-dark": "#111827",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
