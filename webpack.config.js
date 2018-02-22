require('babel-polyfill');
const path = require('path');
const webpack = require("webpack");

const DEBUG = !process.argv.includes('--env.production');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin()
];

if(!DEBUG){
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({ compress: { screw_ie8: false, warnings: false } }),
    new webpack.optimize.AggressiveMergingPlugin()
  );
}

module.exports = {
  context: __dirname + '/src/js',
  entry: {
    js: "./app.js"
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    inline: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: plugins,
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
