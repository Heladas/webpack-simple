var webpack = require('webpack')
var path = require('path')
var isProduction = (process.env.NODE_ENV && process.env.NODE_ENV.trim() === "production")

// function resolve (dir) {
//     return path.join(__dirname, '..', dir)
// }

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {presets: ['es2015']},

                }
            }
        ]
    },
    plugins: []
}

if(isProduction){
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    )
}