const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        candy:'./src/client/candy.js',
        app: './src/client/index.jsx'
        // vendor: ['babel-polyfill']
    },
    plugins: [
        new UglifyJSPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'hello webpack',
            template: './src/index.html'
        }),
        // new HtmlWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
    output: {
        filename: '[name],bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        chunkFilename: '[name].bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        port: 9990,
        // proxy: {
        //   "/haha": "http://192.168.0.105:8009"
        // }
    },
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
        }, ]
    }
};