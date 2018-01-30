const commonConfig = require('./config/webpack.common');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => {

  let conditionalPlugins = [];

  if(env && env.BUNDLEANALYZER) {
    conditionalPlugins.push(new BundleAnalyzerPlugin());
  }

  let conditionalConfig = {
    plugins: [
      ...conditionalPlugins
    ]
  };

  const envConfig = require(`./config/webpack.${env.env}.js`);

  return merge.strategy({
    'module.loaders': 'prepend',
  })(conditionalConfig, commonConfig, envConfig);
};