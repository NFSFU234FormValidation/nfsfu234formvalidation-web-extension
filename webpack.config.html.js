const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', // or 'production' based on your environment
  entry: {
    // No need to include JavaScript files here since HtmlWebpackPlugin will handle them
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'), // output directory
  },
  module: {
    rules: [
      // Add loaders for JavaScript, CSS, or other file types if needed
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/popup/popup.html', // path to your HTML template
      filename: 'popup.html', // output HTML filename
      chunks: ['popup'], // specify the chunk to include (if you have multiple entry points)
    }),
    new HtmlWebpackPlugin({
      template: './src/options/options.html', // path to your HTML template
      filename: 'options.html', // output HTML filename
      chunks: ['options'], // specify the chunk to include (if you have multiple entry points)
    }),
    // Add more HtmlWebpackPlugin instances for other HTML files if needed
    new CopyPlugin({
        patterns: [
            { from: './src/images', to: 'images' }, // Copy all files and folders from src/images to dist/images
        ],
    }),
  ],
};
