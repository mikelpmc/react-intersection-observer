require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: './src/observer.js',
  output: {
    filename: 'observer.js',
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /(\.js|jsx)$/,
        exclude: /(node_modules|build)/,
        loader: 'babel-loader'
      }
    ]
  }
};
