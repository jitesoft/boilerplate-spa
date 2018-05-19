const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const root = path.resolve(__dirname, '..');
const distPath = path.resolve(root, 'dist');
const srcPath = path.resolve(root, 'src');

module.exports = {
  context: srcPath,
  target: 'web',
  entry: [
    'babel-polyfill',
    './js/index.js'
  ],
  output: {
    filename: '[chunkhash].bundle.js',
    path: distPath
  },
  plugins: [
    new CleanPlugin(distPath , {
      root: root
    }),
    new CopyPlugin([
      { from: path.resolve(srcPath, 'img'), to: path.resolve(distPath, '/img') },
      { from: path.resolve(srcPath, 'favicon.png'), to: path.resolve(distPath, 'favicon.png') }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /tests/],
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'env', { targets: { browsers: ['since 2015'] } }
            ]
          ]
        }
      }
    ]
  }
};
