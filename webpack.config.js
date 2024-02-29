const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    background: './src/background/background.ts',
    popup: './src/popup/popup.ts',
    options: './src/options/options.ts',
    content_script: './src/content_scripts/content_script.ts',
    custom_script: './src/custom/custom.ts',
    custom_script2: './src/custom/custom2.ts',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/manifest.json', to: '.' }, // Copy the manifest.json from src to the output directory
        { from: './package.json', to: '.' }, // Copy the package.json from root to the output directory
        { from: './node_modules/nfsfu234-form-validation/package.json', to: 'lib' }, // Copy necessary files from nfsfu234-form-validation dist folder to dist/lib
        { from: './node_modules/nfsfu234-form-validation/dist/css/nfsfu234FormValidation.min.css', to: 'lib' }, // Copy necessary files from nfsfu234-form-validation dist folder to dist/lib
        { from: './node_modules/nfsfu234-form-validation/dist/css/nfsfu234FormValidation.min.css.map', to: 'lib' }, // Copy necessary files from nfsfu234-form-validation dist folder to dist/lib
        { from: './node_modules/nfsfu234-form-validation/dist/js/nfsfu234FormValidation.js', to: 'lib' }, // Copy necessary files from nfsfu234-form-validation dist folder to dist/lib
        { from: './node_modules/nfsfu234-form-validation/dist/js/nfsfu234FormValidation.js.map', to: 'lib' }, // Copy necessary files from nfsfu234-form-validation dist folder to dist/lib
      ],
    }),
  ],
};
