const path = require("path");

module.exports = {
  mode: "production",
  entry: ["./src/index"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `use-once.min.js`,
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  externals: {
    react: "react",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: [/node_modules/],
        use: ["babel-loader"],
      },
    ],
  },
  optimization: {
    nodeEnv: "production",
  },
};
