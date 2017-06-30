const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production');

// extract css to dedicated file in production
const extractSass = new ExtractTextPlugin({
    // filename: "[name].[contenthash].css",
    filename: '[name].css',
    // disable: !isProduction
    disable: false
});

module.exports = {
    entry: {
        app: [
            './src/app.js',
            './src/sass/main.scss'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                use: extractSass.extract({
                    use: ['css-loader', 'sass-loader']
                    // use style-loader in development
                    // fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        extractSass
    ],
    watch: true
};

if (isProduction) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: isProduction,
            sourceMap: isProduction
        })
    );
}
