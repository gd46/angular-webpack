'use strict';

const path = require('path');
const {TsConfigPathsPlugin} = require('awesome-typescript-loader');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  resolve: {
    extensions: ['.js', '.ts', '.html'],
    plugins: [
      new TsConfigPathsPlugin({ configFileName: '../tsconfig.json'})
    ]
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          'awesome-typescript-loader',
          'angular2-template-loader'
        ]
      },
      {
        test: /.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.scss$/,
        use: ['raw-loader', 'sass-loader']
      }
    ]
  }
};