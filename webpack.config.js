const path = require('path'),
      webpack = require('webpack'),
      config = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
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

module.exports = [
    config,
    Object.assign({}, config, {
        target: "node",
        output: Object.assign({}, config.output, {
            filename: 'redux-tools.node.js',
        })
    })
]