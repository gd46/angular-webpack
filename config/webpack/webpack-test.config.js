'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  resolve: {
    extensions: ['.js', '.ts']
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
            loader: 'tslint-loader',
            options: {
              emitErrors: true
            }
        },
        { loader: 'raw', test: /\.(css|html)$/ },
        { exclude: /node_modules/, loader: 'ts', test: /\.ts$/ }
    ]
  }
}  