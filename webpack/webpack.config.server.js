const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config');

module.exports = merge(common, {
    name: 'server',
    target: 'node',
    entry: ['./serverRenderer.js'],
    externals: [nodeExternals()],
    output: {
        filename: 'serverRenderer.js',
        libraryTarget: 'commonjs2',
    }
});
