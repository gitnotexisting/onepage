const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    './src/index.js',
    './src/sass/entry.scss',
  ],
  output: {
    filename: 'main.js',
  },
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css',
  })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
            },
            {
                loader: "sass-loader"
            }
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
};