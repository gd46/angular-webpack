const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, '../build/'),
      port: 9000
    },
  };