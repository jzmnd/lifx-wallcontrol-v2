var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: path.resolve(__dirname, 'public/index.html'),
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'transformed.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [HTMLWebpackPluginConfig]
};
