export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0E16',
        night: '#0F1520',
        panel: '#151C2A',
        line: '#222A39',
        cream: '#EEE7DB',
        mist: '#98A0AE',
        gold: '#D4AA6A',
        'gold-soft': '#E3BF85',
        copper: '#B8774B',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
};
