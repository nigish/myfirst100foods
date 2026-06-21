/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './terms.html', './privacy.html', './refund.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        cream: '#FAF6EF',
        clay: '#E29578',
        'clay-deep': '#C66E50',
        sage: '#83C5BE',
        'sage-light': '#EDF6F9',
        oat: '#FFDDD2',
        charcoal: '#23202B',
        ink: '#1A1820',
      },
    },
  },
};
