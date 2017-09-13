const { resolve } = require('path');
const merge = require('webpack-merge');

const parts = require('./webpack.parts.config');

const commonConfig = function commonConfig() {
  const common = merge([
    {
      context: resolve(__dirname, '..'),
      entry: [resolve('src', 'client.jsx')],
      output: {
        filename: 'bundle.js',
        path: resolve('dist'),
        publicPath: '/',
      },
      resolve: {
        extensions: ['.js', '.jsx', 'json'],
      },
      target: 'web',
    },
    // loaders
    parts.babelTranspile(),
    parts.loadImages({ limit: 20000 }),
    // plugins
    parts.setupHTML({
      title: 'Simple webpack starter',
      template: 'index.ejs',
    }),
  ]);

  // console.log('COMMON', common);

  return common;
};

const developmentConfig = function developmentConfig() {
  const devConfig = merge([
    // loaders
    parts.injectCSS(),
    parts.lintJavascript(),
    // plugins
    parts.setupHMR(),
    // config
    parts.devServer(),
  ]);

  return devConfig;
};

const productionConfig = function() {};

module.exports = function clientConfig(env) {
  let config;

  if (env === 'production') {
    config = merge(productionConfig(), commonConfig());
    // console.log(`ENV: ${env}`, config);
    return config;
  }

  config = merge(developmentConfig(), commonConfig());
  // console.log(`ENV: ${env}`, config);
  return config;
};
