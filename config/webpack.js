'use strict';

var webpack = require('webpack');

module.exports = {
  context: __dirname+'/../app',
  entry: {
    app: './app.js'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname+'/../dist',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.css$/,
        loader: 'style!css-loader'
      }, {
        test: /\.(scss|sass)$/,
        loader: 'style!css!sass-loader'
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)/,
        loader: 'file?name=public/fonts/[name].[ext]'
      }, {
        test: /\.md$/,
        loader: 'html!markdown-loader'
      }, {
        test: /\.txt$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production')
    })
  ],
  devServer: {
    host: '127.0.0.1',
    port: '9000',
    proxy: {
      '*': 'http://127.0.0.1:8000'
    },
    progress: true,
    inline: true,
    hot: true
  }
};
