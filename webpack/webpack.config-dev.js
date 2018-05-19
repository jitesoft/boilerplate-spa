const shared = require('./shared');
const merge  = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const pack = require('../package.json');

const config = merge.smart(shared, {
  mode: 'development',
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: 'index.tmpl.html',
      title: pack.name + ' - develop',
      favicon: pack['meta-tags'].favicon,
      minify: false,
      meta: pack['meta-tags']
    })
  ]
});

module.exports = config;
