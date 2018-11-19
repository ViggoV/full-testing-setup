const merge = require('webpack-merge'); 
const common = require('./webpack.config.js');

const nodeExternals = require('webpack-node-externals');

module.exports = merge(common, {

  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },

  devtool: 'inline-cheap-module-source-map',
  target: 'node',
  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /submodules/],
        enforce: 'post',
        use: [
          {
            loader: 'istanbul-instrumenter-loader',
            query: { esModules: true }
          }
        ]
      },
    ]
  }
});

