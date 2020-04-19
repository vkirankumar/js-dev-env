import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import webpackConfig from "../webpack.config.dev";

var app = express();
var port = 3999;
var compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(
  compiler,
  {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }
))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, (err) => {
  if(err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
