const path = require("path")
const {VueLoaderPlugin} = require("vue-loader")
module.exports = {
  entry: "./build/index.js",
  mode: 'production',
  output: {
    path: path.join(__dirname, "./src/public"),
    filename: "bundle.js"
  },
  module: {
    rules: [

      {
        test: /\.vue$/,
        exclude:/node_modules/,
        loader: "vue-loader"
        
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}