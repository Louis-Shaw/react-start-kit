const path    = require('path');
const webpack = require('webpack');
const project = require('./project.config')
module.exports = {
    entry: {
        vendor: project.vendor
    },
    output: {
        path: path.resolve(project.basePath, 'dll'),
        filename: '[name].dll.js',
        library: '[name]_library',
        publicPath: project.publicPath
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_library',
            path: path.resolve(project.basePath, 'dll', 'manifest.json'),
            context: project.basePath
        })
    ]
};
