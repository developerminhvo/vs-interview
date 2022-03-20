const { guessProductionMode } = require('@ngneat/tailwind');
const metric = require('./styles/tailwind-metric.config');
const typography = require('./styles/tailwind-typography.config');
process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  mode: process.env.TAILWIND_MODE ? 'jit' : '',
  content: [
    './apps/**/*.{html,ts,css,scss,sass,less,styl}',
    './libs/**/*.{html,ts,css,scss,sass,less,styl}'
  ],
  theme: {
    extend: {
      ...metric,
      ...typography
    },
    fontFamily: {

    }
  },
  plugins: [],
}
