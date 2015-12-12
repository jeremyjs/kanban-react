
var path = require('path')
  , webpack = require('webpack')
  , HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  app:   path.resolve(__dirname, 'app')
, build: path.resolve(__dirname, 'build')
};

var HtmlKanbanPlugin = new HtmlWebpackPlugin({ title: 'Kanban' })
  , HMR_Plugin = new webpack.HotModuleReplacementPlugin()

module.exports = {
  entry: PATHS.app,
  output: {
    path: PATHS.build
  , filename: 'bundle.js'
  }
, module: {
    loaders: [
      {
        test: /\.css$/
      , loaders: ['style', 'css']
      , include: PATHS.app
      }
    ]
  }
, devServer: {
    historyApiFallback: true
  , hot: true
  , inline: true
  , progress: true
  , stats: 'errors-only'
  , host: process.env.HOST
  , port: process.env.PORT
  }
, plugins: [
    HtmlKanbanPlugin
  , HMR_Plugin
  ]
};
