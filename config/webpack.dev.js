const path = require('path');
const {TsConfigPathsPlugin} = require('awesome-typescript-loader');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, '../build/'),
      port: 9000
    },
  };