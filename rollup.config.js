
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import eslint from 'rollup-plugin-eslint';

let buildObj = {
  entry: 'src/macy-watchcss.js',
  format: 'umd',
  moduleName: 'Macy - watchCSS',
  banner: '/* Macy.js - watchCSS - v1.0.2 */',
  plugins: [
    eslint(),
    babel(),
  ],
  dest: 'dist/macy-watchcss.js'
};

if (process.env.build !== 'dev') {
  buildObj.plugins.push(uglify());
}

export default buildObj;
