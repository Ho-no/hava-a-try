const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.tsx',
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
}
