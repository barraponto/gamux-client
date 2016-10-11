var nodeExternals = require('webpack-node-externals');


module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist',
    filename: 'gamux-client.js',
  },
  modules: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader' },
    ],
  },
  externals: [
    nodeExternals(),
  ],
};