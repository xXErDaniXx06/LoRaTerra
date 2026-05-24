/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#14532d',
        'brand-primary': '#22c55e',
        'brand-light': '#dcfce7',
        'eco-bg': '#fdfbf7',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 70% 50%, #dcfce7 0%, #fdfbf7 60%)',
        'card-gradient': 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
      },
      boxShadow: {
        'soft': '0 4px 24px 0 rgba(20, 83, 45, 0.08)',
        'medium': '0 8px 40px 0 rgba(20, 83, 45, 0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
