const webpack = require('webpack');
const {ContextReplacementPlugin} = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const {TsConfigPathsPlugin} = require('awesome-typescript-loader');

let conditionalPlugins = [];

module.exports = (env) => {

  if(env.BUNDLEANALYZER) {
    conditionalPlugins.push(new BundleAnalyzerPlugin());
  }
  
  return {

    context: path.resolve(__dirname, '../src'),
    entry: {
      main: './main.ts',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, '../build')
    },
    resolve: {
      extensions: ['.js', '.ts', '.html'],
      plugins: [
        new TsConfigPathsPlugin({configFileName: '../tsconfig.json'})
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, '../build/'),
      port: 9000
    },
    devtool: 'inline-source-map',
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
      ...conditionalPlugins,
      new CleanWebpackPlugin(['build'], {
        root: path.resolve(__dirname, '../')
      }),
      new HtmlWebpackPlugin({
        template: './index.html', // Dynamically includes bundles to index.html
        title: 'Webpack App'
      }),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor'
      // }),
      new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        path.resolve(__dirname, '../src')
      ),
    ]
  };
}