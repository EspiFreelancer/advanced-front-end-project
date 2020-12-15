const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

// To process HTML template
const htmlWebpack = new HtmlWebpackPlugin({
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

  resolve: {
    alias: {
      images: path.resolve(__dirname, 'public/images')
    }
  },

  plugins: [
  /* ... */
    // Only update what has changed on hot reload
    htmlWebpack,
    copyWebpack
    ],
    module: {
      rules: [
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images/'
          }
        }
        ]
      },
      {
        test: /\.(html)$/,
        use: ['html-loader']
      }    
      ]
    }
  };