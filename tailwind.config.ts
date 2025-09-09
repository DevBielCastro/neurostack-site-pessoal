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
        'ns-bg': '#0A0F1E',
        'ns-card': '#121829',
        'ns-primary': '#00AEEF',
        'ns-accent': '#FF6B6B',
        'ns-text': '#E0E0E0',
      },
      fontFamily: {
        // (AJUSTADO) Agora o Tailwind usará as variáveis CSS que o Next.js otimizou
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-open-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;