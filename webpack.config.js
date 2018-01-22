const commonConfig = require('./config/webpack.common');
const webpackMerge = require('webpack-merge');
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
  }

  const envConfig = require(`./config/webpack.${env.env}.js`);

  return webpackMerge(conditionalConfig, commonConfig, envConfig);
}