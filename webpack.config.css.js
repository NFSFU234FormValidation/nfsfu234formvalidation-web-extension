const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: {
    popup: './src/popup/popup.css', // Entry point for popup CSS
    options: './src/options/options.css', // Entry point for options CSS
    // Add more entry points if needed for other parts of your extension
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ignore/[name].css', // Output CSS filenames in the js directory
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css', // Output CSS filenames in the css directory
    }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].min.css', // Minified CSS filenames in the css directory
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
        test: /\.min\.css$/g, // Minimize .min.css files only
      }),
    ],
  },
  mode: 'production',
  devtool: 'source-map',
};
