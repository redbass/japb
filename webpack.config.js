module.exports = {
    entry: {
        index: './src/_.js',
        test_app: './src/test_app.js',
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
            },
            {
                test: /.css?$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
};