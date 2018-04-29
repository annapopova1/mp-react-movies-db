const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const serverConf = require('./server/config');

module.exports = (env, other) => {
  const isProd = other && other.mode && other.mode === 'production';

  let plugins = [
    new HtmlWebpackPlugin({
      hash: true,
      template: './index.html'
    }),
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ];

  if (isProd) {
    plugins.unshift(new CleanWebpackPlugin(['build/**/*']));
  }

  return {
    context: path.resolve(__dirname, 'src'),
    entry: './main.js',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'build')
    },
    resolve: {
      modules: [
        'node_modules',
        path.resolve(__dirname, 'src')
      ],
      extensions: ['.js', '.jsx', 'css']
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|server|build)/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        }
      ]
    },

    plugins: plugins,

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

    devtool: isProd ? false : 'eval',

    devServer: {
      https: false,
      host: 'localhost',
      port: 3005,
      before: serverConf.configureExpress
    }
  };
};
