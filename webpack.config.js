const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pug = require('./webpack_modules/pug');
const extractCSS = require('./webpack_modules/css.extract');
const css = require('./webpack_modules/css');
const webpack = require('webpack');
const sourceMap = require('./webpack_modules/sourceMap');
const lintJS = require('./webpack_modules/js.lint');
const lintCSS = require('./webpack_modules/sass.lint');
const images = require('./webpack_modules/images');
const babel = require('./webpack_modules/babel');
const favicon = require('./webpack_modules/favicon');

const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'build'),
};

const config = merge([
  {
    entry: {
      'main': PATHS.source + '/main.js',
    },
    output: {
      path: PATHS.build,
      filename: './js/[name].js',
    },
    watch: true,
    plugins: [
      /*new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),*/
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: PATHS.source + '/pages/index.pug',
      }),
      new HtmlWebpackPlugin({
        filename: 'article.html',
        template: PATHS.source + '/pages/article.pug',
      }),
    ],
  },
  pug(),
  lintJS({paths: PATHS.sources}),
  lintCSS(),
  images(),
  babel(),
]);

module.exports = function (env, argv) {
  if (argv.mode === 'production') {
    config.devtool = false;
    config.watch = false;
    return merge([
      config,
      extractCSS(),
      favicon(),
    ]);
  }
  if (argv.mode === 'development') {
    return merge([
      config,
      extractCSS(),
      sourceMap(),
    ]);
  }
};