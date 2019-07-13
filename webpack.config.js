const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const colors = require('colors');

module.exports = (env, argv) => {
  const mode = argv.mode;
  console.log(mode.bgBlue.bold);
  return {
    entry: {
      app: './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, './public'),
      filename: '[name].bundle.[hash].js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.(scss|css)$/,
          use: [
            {loader: 'css-hot-loader'},
            {loader: MiniCssExtractPlugin.loader},
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images',
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        meta: {
          viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
          'theme-color': '#00d8ff',
          description: 'start my template using webpack bundler',
        },
        minify: {
          collapsWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
        },
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
      new FaviconsWebpackPlugin({
        prefix: 'images/favicons/',
        logo: './src/img/favicon.png',
        background: '#00d8ff',
      }),
    ],
    devServer: {
      host: '0.0.0.0',
      hot: true,
      inline: true,
      overlay: true,
    },
  };
};
