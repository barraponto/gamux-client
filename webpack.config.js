module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist',
    filename: 'gamux-client.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file',
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file',
      },
      {
        test: /\.vue$/,
        loader: 'vue',
        exclude: /node_modules/,
      },
    ],
  },
  vue: {
    loaders: {
      js: 'babel',
    },
  },
};
