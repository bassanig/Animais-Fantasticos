const path = require('path');

module.exports = {
  entry: './js/script.js',
  output: {
    path: path.resolve(__dirname, 'main'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // fixed typo here
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          }
        }
      }
    ]
  }
}