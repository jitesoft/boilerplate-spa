const shared = require('./shared');
const merge = require('webpack-merge');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const pack = require('../package.json');

const config = merge.smart(shared, {
  mode: 'production',
  plugins: [
    new UglifyPlugin(),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: 'index.tmpl.html',
      title: pack.name,
      favicon: pack['meta-tags'].favicon,
      minify: true,
      meta: pack['meta-tags']
    })
  ]
});

module.exports = config;
