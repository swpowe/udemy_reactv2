const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    //loaders
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            // ? after letter In this case "s" means optional
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

// loader customize behavior of webpack when it sees a kind of file
// for example JSX conver to JS or SCSS to CSS
// requires local npm dependencies
// babel-core (like CLI) but used for tools like webpack
// babel-loader is a plugin for webpack
// module has an array of rules objects with a loader and a test
// test is regex to see what files match criteria
// requires .babelrc in root of project for babel presets array