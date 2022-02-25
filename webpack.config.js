const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};
// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   loaders: [{
//     test: /\.html$/,
//     loader: 'html-loader?attrs[]=video:src'
//   }, {
//     test: /\.mp4$/,
//     loader: 'url?limit=10000&mimetype=video/mp4'
// }]

// };