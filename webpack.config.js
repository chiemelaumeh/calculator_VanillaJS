const path = require("path")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),

  },

  devServer: {
    static: path.join(__dirname, "public"),
    port:9000
  }, 
}