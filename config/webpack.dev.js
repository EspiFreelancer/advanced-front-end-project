const webpack = require('webpack');
const path = require('path');

module.exports =  {
  mode: 'development',

  entry: {
    main: path.resolve(__dirname, '../assets/javascript/entry.js'),
  },

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '..'),
    filename: 'dist/javascript/bundle.js'
  },

  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    // open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [
    /* ... */
    // Only update what has changed on hot reload
  ],
};