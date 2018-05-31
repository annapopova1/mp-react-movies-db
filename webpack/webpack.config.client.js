const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config');
const serverConf = require('../server/config');

const isProd = process.env.NODE_ENV === 'production';

module.exports = merge(common, {
  name: 'client',
  target: 'web',

  entry: [
    !isProd && 'webpack-hot-middleware/client',
    './client.jsx'
  ].filter(Boolean),

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },

  plugins: [
    !isProd && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),

  devtool: isProd ? false : 'eval'
});