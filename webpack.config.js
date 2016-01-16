module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: require.resolve('snapsvg'),
        loader: 'imports-loader?fix=>module.exports=0'
      },
      {
        test: /\.svg$/,
        loader: 'url'
      }
    ]
  }
}
