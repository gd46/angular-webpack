// const webpack = require('webpack');
const { ContextReplacementPlugin } = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const nodeExternals = require('webpack-node-externals');

module.exports = {
  // target: 'node', // For backend app
  context: __dirname + '/src',
  entry: {
    main: './main.ts'
    // vendor: ['lodash']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: ['.js', '.ts', '.html']
  },
  devServer: {
    contentBase: path.join(__dirname, '../build/'),
    port: 9000
  },
  devtool: 'source-map',
  // externals: [nodeExternals()], // For backend app
  module: {
    loaders: [
      {
        test: /.ts$/,
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
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: './index.html', // Dynamically includes bundles to index.html
      title: 'Webpack App'
    }),
    // new BundleAnalyzerPlugin(), Output bundle size info
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // }),
    new ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, '../src')
    )
  ]
};