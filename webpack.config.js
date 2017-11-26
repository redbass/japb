var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/js/_.js',
        test_app: './src/js/test/test_app.js',
    },
    output: {
        path: __dirname + "/dist/",
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};