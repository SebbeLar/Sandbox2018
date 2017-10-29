const path = require('path');

module.exports = {
  entry: [
    './index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: [name].bundle.js,
    publicPath: '/assets'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};
