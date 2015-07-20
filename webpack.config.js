var webpack = require("webpack"),
    path = require("path"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname,  "/static"),
    entry: {
        app: "./js/app.js",
        libs: ['jquery']
    },
    output: {
        path: "./build",
        filename: "[name].[hash].js"
    },
    module: {
        loaders: [
            { test: /\.es6.js$/, loader: "babel-loader" },
            { test: /\.(css|less)$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file?limit=20000&name=img/[hash].[ext]" }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin("libs", "libs.[hash].js"),
        new HtmlWebpackPlugin({
            title: 'Test App',
            template: './static/templates/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin("style.[hash].css", {
            allChunks: false
        })
    ],
    resolve: {
        alias: {
            "jquery": path.join(__dirname, "/bower_components/jquery/dist/jquery.min.js")
        },
        extensions: ["", ".js", ".jsx", ".html"]
    }
};