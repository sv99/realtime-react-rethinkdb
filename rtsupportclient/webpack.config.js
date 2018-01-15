module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: [
          'react-hot-loader/webpack',
          'babel-loader'
        ],
        exclude: /node_modules/
      }
    ]
  }
}