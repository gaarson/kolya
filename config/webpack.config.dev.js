process.env.BABEL_ENV = 'development';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, '../src/index.jsx'),
  output: {
    filename: './js/bundle.js',
    path: path.join(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: path.join(__dirname, '../src'),
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:8].[ext]',
        },
      },
      {
        test: [/\.jsx?$/, /\.js?$/],
        include: path.resolve(__dirname, '../src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react-app', 'env', 'flow'],
            plugins: [
              'transform-decorators-legacy',
              'transform-class-properties',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
    hot: true,
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: true,
    headers: { 'Access-control-allow-origin': '*' },
  },
  resolve: {
    modules: ['node_modules', '../src'],
    extensions: ['.js', '.jsx', 'css', '.json'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['..dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: './public/img',
        to: './img',
      },
      {
        from: './public/fonts',
        to: './fonts',
      },
    ]),
  ],
};
