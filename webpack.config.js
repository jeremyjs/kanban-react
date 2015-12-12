
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app:   path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'build'),
};

var HtmlKanbanPlugin = new HtmlWebpackPlugin({ title: 'Kanban' });
var HMR_Plugin = new webpack.HotModuleReplacementPlugin();

var common = {
  entry: PATHS.app,
  // output: {
  //   path: PATHS.build,
  //   filename: 'bundle.js',
  // },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app,
      },
    ],
  },
  plugins: [
    HtmlKanbanPlugin,
  ],
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT,
    },
    plugins: [
      HMR_Plugin,
    ],
  });
}
