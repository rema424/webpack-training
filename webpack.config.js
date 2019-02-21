// const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  // mode: 'production',
  // mode: 'development',
  // mode: 'none',
  entry: {
    'car/app': './src/app.js',
    app2: './src/app2.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { modules: false }]],
            },
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    overlay: true,
    hot: true,
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [
    // new CopyWebpackPlugin(['index.html']),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
