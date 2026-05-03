/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          dark: '#1E1E1E',
          medium: '#797979',
          light: '#F2F2F2',
          accent: '#16a34a',
          'accent-light': '#dcfce7',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans-brand)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif-brand)', 'Georgia', 'Times New Roman', 'serif'],
        smooch: ['var(--font-smooch-sans)', 'system-ui', 'sans-serif'],
        sansation: ['Sansation', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
