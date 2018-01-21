const webpack = require('webpack');
const {ContextReplacementPlugin} = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {TsConfigPathsPlugin} = require('awesome-typescript-loader');
const CompressionPlugin = require("compression-webpack-plugin");

let conditionalPlugins = [];

module.exports = (env) => {

  if(env && env.BUNDLEANALYZER) {
    conditionalPlugins.push(new BundleAnalyzerPlugin());
  }

  return {
    context: path.resolve(__dirname, '../src'),
    entry: {
      // angular: [
      //   '@angular/http',
      //   '@angular/common',
      //   '@angular/compiler',
      //   '@angular/core',
      //   '@angular/router'],
      // vendor: [
      //   'zone.js',
      //   'rxjs'
      // ],
      vendor: './vendor.ts',
      polyfills: './polyfills.ts',
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
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.ts$/,
          use: [
            'awesome-typescript-loader',
            'angular2-template-loader'
          ]
        },
        {
          test: /\.html$/,
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
      new webpack.optimize.CommonsChunkPlugin({
        // names: ['angular', 'vendor']
        name: ['main', 'vendor', 'polyfills']
      }),
      new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/, // Workaround for https://github.com/angular/angular/issues/14898
        path.resolve(__dirname, '../src')
      ),
      new webpack.ContextReplacementPlugin( // Workaround for https://github.com/angular/angular/issues/20357
        /\@angular(\\|\/)core(\\|\/)esm5/, 
        path.join(__dirname, '../src')
      ),
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
};