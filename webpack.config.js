'use strict';

require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    application: './src/index.jsx'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/index.js',
    publicPath: '/dist/'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        //include: path.resolve('src'),
        exclude: [/node_modules/, /submodules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|git|svg|woff2?|eot|ttf)$/i,
        exclude: [/node_modules/, /submodules/],
        use: 'file-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: [/node_modules/, /submodules/],
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: [/node_modules/, /submodules/],
        use: 'graphql-tag/loader'
      }
    ]
  }
};

