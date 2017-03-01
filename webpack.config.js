var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: [
      'vue',
      'bootstrap/dist/css/bootstrap.css'
    ],
    app: ['./example/index.js']
  },
  output: {
    path: './build',
    filename: '[name].js'
  },
  resolve: {
    root: path.resolve('./')
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.s?css$/,
        loaders: [
            'style', 
            'css', 
            'sass'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: `image/[name].[hash:7].[ext]`
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: `font/[name].[hash:7].[ext]`
        }
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'vue-viewer',
          template: path.join(__dirname, 'example/index.html'),
          filename: path.join('examples/index.html')
      })
  ],
  babel: {
  presets: ['es2015'],
  plugins: ['transform-runtime']
  },
  devtool: 'source-map'
};


