const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

let plugins = [
  new HtmlWebpackPlugin({
    hash: isProd,
    filename: 'app.html',
    template: './index.html',
    templateParameters: {
      'html': '${html}',
      'customScript': '${customScript}'
    },
  }),
  new ExtractTextPlugin({
    filename: '[name].css'
  })
];

if (isProd) {
  plugins.unshift(new CleanWebpackPlugin('build/**/*', { root: path.resolve(__dirname, '../') }));
}

module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve(__dirname, '../src'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/assets/'
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './src')
    ],
    extensions: ['.js', '.jsx', 'css']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|build)/,
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

  plugins: plugins
};
