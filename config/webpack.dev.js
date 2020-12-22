const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    // open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  module:{
    rules:[
    {
      test: /\.scss$/,
      use: ['style-loader','css-loader','sass-loader']
    },
    {
      test: /\.(svg|gif|png|jpe?g)$/,
      use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/images/'
        }
      }
      ]
    }
    ]
  },
});

