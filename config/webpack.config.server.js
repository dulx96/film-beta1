const webpack = require('webpack')
const path = require('path')
const paths = require('./paths')
const getClientEnvironment = require('./env')
const publicPath = paths.servedPath
const publicUrl = publicPath.slice(0, -1)
const env = getClientEnvironment(publicUrl)
const DEV = process.env.NODE_ENV !== 'production'

const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const cssFilename = 'static/css/[name].[contenthash:8].css'
const cssClassName = 'hash:base64:5'
const ExtractLess = new ExtractTextPlugin({
  filename: cssFilename,
})

const shouldUseRelativeAssetPaths = publicPath === './'
const extractTextPluginOptions = shouldUseRelativeAssetPaths
  ? // Making sure that the publicPath goes back to to build folder.
  {publicPath: Array(cssFilename.split('/').length).join('../')}
  : {}

module.exports = {
  bail: !DEV,
  devtool: DEV ? 'cheap-module-source-map' : 'source-map',
  target: 'node',
  entry: './src/server.js',
  output: {
    path: path.resolve('build/server'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  externals: (context, request, callback) => {
    // Externalize all npm modules.
    if (/^[a-z0-9-][a-z0-9-./]+$/.test(request)) {
      return callback(null, `commonjs ${request}`)
    }
    callback()
  },
  resolve: {
    // This allows you to set a fallback for where Webpack should look for modules.
    // We placed these paths second because we want `node_modules` to "win"
    // if there are any conflicts. This matches Node resolution mechanism.
    // https://github.com/facebookincubator/create-react-app/issues/253
    modules: ['node_modules', paths.appNodeModules].concat(
      // It is guaranteed to exist because we tweak it in `env.js`
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean),
    ),
    // These are the reasonable defaults supported by the Node ecosystem.
    // We also include JSX as a common component filename extension to support
    // some tools, although we do not recommend using it, see:
    // https://github.com/facebookincubator/create-react-app/issues/290
    // `web` extension prefixes have been added for better support
    // for React Native Web.
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {

      // Support React Native Web
      // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
      'react-native': 'react-native-web',
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: paths.appSrc,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        // options: {
        //   'presets': [
        //     'react-app',
        //     'stage-2',
        //     'react-native',
        //     [
        //       'env',
        //       {
        //         'targets': {
        //           'node': 'current',
        //           'browsers': ['last 2 versions'],
        //         },
        //       },
        //     ],
        //   ],
        //   'plugins': [
        //     'react-native-web/babel', 'transform-class-properties',
        //     // 'css-modules-transform', {
        //     //   "preprocessCss": "loaders/less-loader.js",
        //     //   'extensions': ['.css','.less'],
        //     //   'generateScopedName': '[hash:base64:5]',
        //     //   'ignore': '*css'
        //     // },
        //   ],
        //
        // },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.css$/, loader: 'ignore-loader',
      },
      {
        test: /\.less$/, loader: 'ignore-loader',
      },
      // {
      //   test: /\.less$/,
      //   loader: ExtractLess.extract(
      //     Object.assign(
      //       {
      //         fallback: {
      //           loader: require.resolve('style-loader'),
      //           options: {
      //             hmr: false,
      //           },
      //         },
      //         use: [
      //           {
      //             loader: require.resolve('css-loader'),
      //             options: {
      //               importLoaders: 1,
      //               minimize: true,
      //               module: true,
      //               sourceMap: true,
      //             },
      //           },
      //           {
      //             loader: require.resolve('postcss-loader'),
      //             options: {
      //               // Necessary for external CSS imports to work
      //               // https://github.com/facebookincubator/create-react-app/issues/2677
      //               ident: 'postcss',
      //               plugins: () => [
      //                 require('postcss-flexbugs-fixes'),
      //                 autoprefixer({
      //                   browsers: [
      //                     '>1%',
      //                     'last 4 versions',
      //                     'Firefox ESR',
      //                     'not ie < 9', // React doesn't support IE8 anyway
      //                   ],
      //                   flexbox: 'no-2009',
      //                 }),
      //               ],
      //             },
      //           },
      //           {
      //             loader: require.resolve('less-loader'),
      //           },
      //         ],
      //       },
      //       extractTextPluginOptions,
      //     ),
      //   ),
      //   // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
      // },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // prettier-ignore
      'process.env.NODE_ENV': JSON.stringify(
        DEV ? 'development' : 'production'),
    }),
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false,
  },
}
