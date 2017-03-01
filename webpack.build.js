var config = require('./webpack.config.js')

config.entry = {
  'vue-viewer': './src/index.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'vue-viewer',
  libraryTarget: 'umd'
}
delete config.devtool;
delete config.plugins;

module.exports = config
