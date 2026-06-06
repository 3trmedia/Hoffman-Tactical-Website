/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ht-bg': '#1C1C1C',
        'ht-surface': '#242424',
        'ht-accent': '#A0916B',
        'ht-accent-hover': '#8B7A58',
        'ht-text': '#F0EDE6',
        'ht-muted': '#9E9A91',
        'ht-border': '#2E2E2E',
        'ht-success': '#4A7C59',
      },
      fontFamily: {
        dm: ['"DM Sans"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
