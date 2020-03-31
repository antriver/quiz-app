const config = require('./webpack.config');

config.mode = 'production';

config.output.filename = '[name].[contenthash].js';
config.output.chunkFilename = '[name].[contenthash].js';

config.devtool = 'source-map';

config.optimization.minimize = true;

module.exports = config;
