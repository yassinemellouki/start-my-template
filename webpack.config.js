const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = (env, argv) => ({
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename:
      argv.mode === 'production'
        ? '[name].bundle.[chunkhash].js'
        : '[name].bundle.[hash].js',
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
          'css-hot-loader',
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
    splitChunks: {
      cacheGroups: {
        vendoes: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': '#00d8ff',
      },
      minify: {
        collapsWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new FaviconsWebpackPlugin({
      prefix: 'images/favicons/',
      logo: './src/img/favicon.png',
      background: '#00d8ff',
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    open: true,
    hot: true,
    overlay: true,
  },
  resolve: {
    alias:
      argv.mode === 'development'
        ? {
            'react-dom': '@hot-loader/react-dom',
          }
        : {},
  },
});
