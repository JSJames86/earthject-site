import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // KEEP these existing colors as they are linked to CSS variables
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',

        // ADD your new custom brand colors here
        'earth-green': {
          DEFAULT: '#30602C',
          '50': '#F3F6F2',
          '100': '#E1EBE0',
          '200': '#C7DBC5',
          '300': '#A4C39F',
          '400': '#7D9F7A',
          '500': '#577A53',
          '600': '#446040',
          '700': '#3A5236',
          '800': '#30442E',
          '900': '#233020',
          '950': '#151D14',
        },
        'solar-yellow': {
          DEFAULT: '#DDAF27',
          '50': '#FFFDED',
          '100': '#FFF9D7',
          '200': '#FFF1AC',
          '300': '#FFE880',
          '400': '#FFD84D',
          '500': '#FFC91A',
          '600': '#DDAF27',
          '700': '#AD8C1E',
          '800': '#8A6E18',
          '900': '#5E4911',
          '950': '#3F2C0A',
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        fade: 'fadeInUp 1s both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
