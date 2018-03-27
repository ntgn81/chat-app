const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(env, argv) {
  const styleLoader =
    argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader';
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.scss$/,
          use: [styleLoader, 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      // new webpack.HotModuleReplacementPlugin(),
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      })
    ]
  };
};
