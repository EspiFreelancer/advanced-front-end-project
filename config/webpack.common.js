const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugi'n);
const path = require('path');

// To process HTML template
const htmlWebpack = new HtmlWebpackPlugin({
  hash:false,
  template: './assets/index.template.html',
  filename: 'index.html'
});

// To load all images into assets
const copyWebpack = new CopyWebpackPlugin({
  patterns: [{
    from: './assets/images',
    to: 'images'
  },
  ]
});

module.exports =  {

  entry: {
    main: path.resolve(__dirname, '../assets/javascript/entry.js'),
  },

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../dist/'),
    filename: 'javascript/bundle.js'
  },

  resolve: {
    alias: {
      images: path.resolve(__dirname, 'public/images')
    }
  },

  plugins: [
    htmlWebpack,
    copyWebpack
    ],
    module: {
      rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader']
      }    
      ]
    }
  };