'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const autoprefixer = require('autoprefixer')
//extractLess
const ExtractLess = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  allChunks: true,
})
const staticSourcePath = path.resolve(__dirname, 'public')
const sourcePath = path.join(__dirname, 'src')
const buildPath = path.join(__dirname, 'dist')

module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.resolve(sourcePath, 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: [
      '.webpack-loader.js',
      '.web-loader.js',
      '.loader.js',
      '.js',
      '.jsx'],
    modules: [
      sourcePath,
      path.resolve(__dirname, 'node_modules'),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[chunkhash].js',
      minChunks (modules) {
        return modules.context && modules.context.indexOf('node_modules') >= 0
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      ompress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9',
            ],
          }),
        ],
        context: staticSourcePath,

      },
    }),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/public/index.html'),
      path: buildPath,
      excludeChunks: ['base'],
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as: 'script',
      include: 'all',
      fileBlacklist: [/\.(css|map)$/, /base?.+/],
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true,
    }),
    new StyleExtHtmlWebpackPlugin({
      minify: true,
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        include: sourcePath,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: require.resolve('css-loader'),
              options: {
                minimize: true,
              },
            },
            {loader: require.resolve('postcss-loader')},
          ],
        }),

      },
      // {
      //   test: /\.less$/,
      //   use: ExtractLess.extract({
      //     fallback: {
      //       loader: 'style-loader',
      //       use: [
      //         {
      //           loader: 'css-loader',
      //           options: {
      //             minimize: true,
      //             module: true,
      //           },
      //         },
      //         'postcss-loader',
      //         'less-loader'
      //       ],
      //     },
      //   }),
      // },
      {
        test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
        use: 'file-loader?name=assets/[name]-[hash].[ext]'
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          'url-loader?limit=20480&name=assets/[name]-[hash].[ext]'
        ],
        include: staticSourcePath
      }
    ],
  },
}
