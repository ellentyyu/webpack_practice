var path = require("path");
console.log(process.env.NODE_ENV);

module.exports = {
    context: path.resolve(__dirname, './src'),
    // entry: './index.js',
    entry: {
        index: './js/index.js',
        about: './js/about.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
}