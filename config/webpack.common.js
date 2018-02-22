const path = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {TsConfigPathsPlugin} = require('awesome-typescript-loader');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  resolve: {
    extensions: ['.js', '.ts', '.html'],
    plugins: [
      new TsConfigPathsPlugin({configFileName: '../tsconfig.json'})
    ]
  },
  entry: {
    vendor: './vendor.ts',
    polyfills: './polyfills.ts',
    main: './main.ts',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build')
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        use: [
          'angular-router-loader',
        ]
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.scss$/,
        use: ['raw-loader', 'sass-loader']
        // use: ExtractTextWebpackPlugin.extract({
        //   fallback: 'style-loader',
        //   use: ['raw-loader', 'sass-loader']
        // })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: path.resolve(__dirname, '../')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['main', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: './index.html', // Dynamically includes bundles to index.html
      title: 'Webpack App'
    })
    // new ExtractTextWebpackPlugin('[name].css')
  ]
};
