const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const { AngularCompilerPlugin } = require('@ngtools/webpack');

module.exports = {
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
          use: '@ngtools/webpack'
        }
      ]
    },
    plugins: [
      new AngularCompilerPlugin({
        tsConfigPath: 'tsconfig-aot.json',
        mainPath: './src/main.ts',
        sourceMap: true
      }),
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