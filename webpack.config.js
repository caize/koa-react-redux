// import webpack from 'webpack';
const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: `${__dirname}/app/main.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules'
      }
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract('style', 'css?modules!postcss'),
      // },
    ]
  },
  // postcss: [
  //   require('autoprefixer'),
  // ],

  plugins: [
    // new HtmlWebpackPlugin({
    //   template: `${__dirname}/app/index.tmpl.html`,
    // }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    // new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.CommonsChunkPlugin('common', 'common.js', 'Infinity'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
