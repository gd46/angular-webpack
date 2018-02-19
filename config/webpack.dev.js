const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, '../build/'),
      port: 9000
    },
    module: {
      loaders: [
        {
          test: /\.ts$/,
          use: [
            'awesome-typescript-loader',
            'angular2-template-loader',
          ]
        },
      ]
    },
    plugins: [
      new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/, // Workaround for https://github.com/angular/angular/issues/14898
        path.resolve(__dirname, '../src')
      ),
      new webpack.ContextReplacementPlugin( // Workaround for https://github.com/angular/angular/issues/20357
        /\@angular(\\|\/)core(\\|\/)esm5/,
        path.join(__dirname, '../src')
      ),
    ]
  };