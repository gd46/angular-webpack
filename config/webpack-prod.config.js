const webpack = require('webpack');
const { ContextReplacementPlugin } = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {TsConfigPathsPlugin} = require('awesome-typescript-loader');

let conditionalPlugins = [];

if(process.env.BUNDLEANALYZER) {
  conditionalPlugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
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
      new TsConfigPathsPlugin({ configFileName: '../tsconfig.json'})
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
    new webpack.optimize.ModuleConcatenationPlugin(), // Recommended for prod to shrink bundle size
    // new UglifyJsPlugin(),  // Recommended for prod to shrink bundle size  TODO check options
  ]
};