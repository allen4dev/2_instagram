const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// Loaders
exports.babelTranspile = function babelTranspile() {
  return {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
  };
};

exports.injectCSS = function injectCSS() {
  return {
    module: {
      rules: [
        {
          test: /\.css?$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
};

exports.loadImages = function loadImages(options) {
  return {
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options,
            // options: {
            //   limit: 20000,
            // },
          },
        },
      ],
    },
  };
};

exports.lintJavascript = function lintJS() {
  return {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: 'eslint-loader',
          exclude: /node_modules/,
          enforce: 'pre',
        },
      ],
    },
  };
};
// Plugins
exports.setupHMR = function setupHMR() {
  return {
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
    ],
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
};

exports.setupHTML = function setupHTML({ title, template }) {
  return {
    plugins: [
      new HTMLWebpackPlugin({
        title,
        template,
        // title: 'Simple webpack starter',
        // template: 'index.ejs',
      }),
    ],
  };
};

// Config
exports.devServer = function devServer() {
  return {
    devServer: {
      historyApiFallback: true,
      hot: true,
      publicPath: '/',
    },
  };
};
