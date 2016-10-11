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
        test: /\.vue$/,
        loader: 'vue',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  vue: {
    loaders: {
      js: 'babel',
    },
  },
};
