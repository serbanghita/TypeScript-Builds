var path = require("path");

module.exports = {
  entry: "./app2/src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/js"),
    publicPath: "/js/"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "cheap-eval-source-mapService",

  devServer: {
    contentBase: "dist",
    watchContentBase: true
  },

  watch: false,

  node: {
    __dirname: true
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }

  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
};
