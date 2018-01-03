const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  context: __dirname + '/src',
  entry: {
    index: './index.js',
    another: './another-module.js',
    vendor: [
      'lodash'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    // chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new BundleAnalyzerPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],
  // plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common' // Specify the common bundle's name.
    // })
  // ]
  // plugins: [
  //  new webpack.optimize.CommonsChunkPlugin(
  //    /* chunkName= */"vendor", 
  //    /* filename= */"vendor.bundle.js"
  //   )
  // ]
};