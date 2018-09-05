const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let plugins = [
  new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({
    title: 'hello webpack',
    favicon: './src/favicon.ico',
    template: './src/index.html'
  }),
  // new webpack.optimize.ModuleConcatenationPlugin(),
  // new CommonsChunkPlugin({
  //   name: "vendors",
  // }),
  // new webpack.ProvidePlugin({
  //   $: 'jquery',
  //   jQuery: 'jquery',
  //   _: 'lodash',
  //   rx: 'rxjs'
  // }),
  // new BundleAnalyzerPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
]
if (process.env.NODE_ENV === 'production') {
  console.log('-----NODE_ENV production model-----')
  plugins.push(new UglifyJSPlugin())
} else {
  console.log('-----NODE_ENV development model-----')
  plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = {
  mode: "development",
  entry: {
    candy: './src/client/candy.js',
    app: './src/client/index.jsx',
    vendor: ['react', 'react-dom', 'redux', /*'react-redux',*/ 'redux-saga', 'lodash', /*'rxjs'*/],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'] 
    // alias: rxPaths()
  },
  plugins: plugins,
  // optimization: {
  //   runtimeChunk: true,
  //   splitChunks: {
  //     chunks: 'all'
  //   },
  // },
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    chunkFilename: '[name].bundle.js',
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 9991,
    proxy: [{
      context: '/api',
      target: 'localhost:9990', // 代理跨域目标接口
      changeOrigin: true,
      secure: false, // 当代理某些https服务报错时用
      cookieDomainRewrite: false //'localhost:9990' // 可以为false，表示不修改
    }]
  },
  // devServer: {
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  //   },
  //   historyApiFallback: true,
  //   hot: true,
  //   inline: true,
  //   //progress: true,
  //   host: '0.0.0.0',
  //   port: sysConfigDefault.devPort,
  //   proxy: {
  //     '*': {
  //       target: 'http://localhost:' + sysConfigDefault.port,
  //       secure: false,
  //       ws: false,
  //       bypass: function (req, res, opt) {
  //         let pth = req.path
  //         if (/^\/sql-pad/.test(pth)) {
  //           return
  //         }
  //         if (
  //           (
  //             /(\.json|\.jpg|\.png|\.css)$/.test(pth) &&
  //             !/^\/static\//.test(pth) &&
  //             !/^\/_bc\//.test(pth)
  //           ) ||
  //           /\.bundle\.js/.test(pth)
  //         ) {
  //           console.log('bypass', pth)
  //           return req.path
  //         }
  //       }
  //     }
  //   }
  // },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.tsx?$/,
      loader: "awesome-typescript-loader"
    }, ]
  }
};