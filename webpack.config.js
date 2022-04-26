const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          allowTsInNodeModules: true,
          compilerOptions: {
            noEmit: false,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg|ttf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              esModule: false,
              name: '[path][name].[ext]'
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: path.join(__dirname, 'src', 'index.html')
      })
  ],
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.js$/
    })]
  }
};