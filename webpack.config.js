var webpack = require("webpack"),
    path = require("path"),
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
            { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin("style.css"),
        new webpack.ProvidePlugin({
            $: "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin("libs", "libs.[hash].js")
    ],
    resolve: {
        alias: {
            "jquery": path.join(__dirname, "/bower_components/jquery/dist/jquery.min.js")
        },
        extensions: ["", ".js", ".jsx"]
    }
};