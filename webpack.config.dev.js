import path from 'path';

export default {
  debug: true, //Enables debugging tools
  devtool: 'inline-source-map', //
  noInfo: false, // Webpack will display all the files bundles in the command line
  entry: [
    path.resolve(__dirname, 'src/index') //Entry point file, we have any number of entry point files
  ],
  target: 'web', //Target platform is web, can be node(server), electron(desktop apps)
  output: {
    path: path.resolve(__dirname, 'src'), //Were it should create bundle
    publicPath: '/', //Files are served from memory and it will not create physical files
    filename: 'bundle.js'//It will just mimic the path given here
  },
  devServer: {
    contentBase: path.resolve(__dirname, "src")
  },
  plugins: [], //plugin for hot reloading, linting etc.,
  module: { //File types to handle
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
