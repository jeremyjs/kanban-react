
var path = require('path')
  , HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  app:   path.resolve(__dirname, 'app')
, build: path.resolve(__dirname, 'build')
};

var HtmlKanbanPlugin = new HtmlWebpackPlugin({ title: 'Kanban' });

module.exports = {
  entry: PATHS.app,
  output: {
    path: PATHS.build
  , filename: 'bundle.js'
  }
, plugins: [
    HtmlKanbanPlugin
  ]
};
