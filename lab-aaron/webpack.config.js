'use strict';

const HtmlPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/app.js',
  plugins: [new HtmlPlugin({template: __dirname + '/src/index.html'})],

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
      },
      {test: /\.(scss|css)$/, loader: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ]},
    ]
  },
};

module.exports = config;