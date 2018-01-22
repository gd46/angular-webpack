const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new UglifyJsPlugin({
        test: /\.ts/,
        include: /\/src/,
        mangle: true,
        compress: {
          drop_console: true
        },
        sourceMap: true,
        extractComments: true,
        parallel: true,
        uglifyOptions: {
          ie8: false,
          ecma: 6,
        }
      }),
      new CompressionPlugin(),
    ]
  };