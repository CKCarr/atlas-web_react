const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    header: './js/header.js',
    body: './js/body.js',
    footer: './js/footer.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader'],
      // },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     filename: 'index.html',
  //     template: './src/index.html',
  //     inject: 'body',
  //   }),
  //   new MiniCssExtractPlugin({
  //     filename: './css/[name].css',
  //   }),
  //   new CleanWebpackPlugin(),
  // ],
};
