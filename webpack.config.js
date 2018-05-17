const path = require('path'),
      webpack = require('webpack')
      
module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    target: "node",
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'redux-tools.js',
        library: "redux-tools",
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader'
        }]
    },
    resolve: {
        modules: ["src", "node_modules"],
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
    ]
}
