import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

// https://rollupjs.org/#javascript-api
const plugins = [
  babel({
    exclude: '/node_modules/**',
  }),
  // uglify(),
];

export default [
  {
    input: 'src/js/main.js',
    output: [
      {
        file: 'dist/js/main.js',
        format: 'umd',
      },
    ],
    plugins,
  },
  {
    input: 'src/js/canvas.js',
    output: [
      {
        file: 'dist/js/canvas.js',
        format: 'umd',
      },
    ],
    plugins,
  },
];

