'use strict';

const path = require('path');
const webpack = require('webpack');
const {TsConfigPathsPlugin} = require('awesome-typescript-loader');

module.exports = {
  context: __dirname + '/src',
  resolve: {
    extensions: ['.js', '.ts', '.html'],
    plugins: [
      new TsConfigPathsPlugin({ configFileName: '../../tsconfig.json'})
    ]
  },
  devtool: 'inline-source-map',
  module: {
    // preLoaders: [
    //     { exclude: /node_modules/, loader: 'tslint', test: /\.ts$/ }
    // ],
    // preLoaders: [
    //   {
    //       test: /\.ts$/,
    //       exclude: /node_modules/,
    //       loader: 'tslint-loader',
    //       options: {
    //         emitErrors: true
    //       }
    //   }
    // ],
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