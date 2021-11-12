module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 3s linear infinite',
        'bounce-slow': 'bounce 2s linear infinite',
      }
    },
  },
  variants: {
    extend: {
      lineClamp: ['hover'],
      transitionDuration: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
