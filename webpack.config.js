module.exports = {
  context: __dirname,
  entry: './src/scripts/main.js',
  output: {
    path: __dirname + '/build',
    publicPath: 'build/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: require.resolve('snapsvg'),
        loader: 'imports-loader?fix=>module.exports=0'
      },
      {
        test: /\.(svg|jpg)$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css'
        ]
      }
    ]
  }
}
