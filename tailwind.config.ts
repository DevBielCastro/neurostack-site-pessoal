import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // (ALTERADO) Customizamos o container para um melhor controlo
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',    // 16px de padding em telemóveis
        sm: '1.5rem',       // 24px em ecrãs pequenos
        lg: '2rem',         // 32px em ecrãs grandes
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        'ns-bg': '#0A0F1E',
        'ns-card': '#121829',
        'ns-primary': '#00AEEF',
        'ns-accent': '#FF6B6B',
        'ns-text': '#E0E0E0',
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-open-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;