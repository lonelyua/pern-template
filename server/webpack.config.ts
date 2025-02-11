// import path from 'path';
// import * as webpack from 'webpack';

// const config: webpack.Configuration = {
//   entry: path.resolve(__dirname, 'src/app.ts'),
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'build'),
//   },
//   target: 'node',
//   resolve: {
//     modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, '../node_modules')],
//     extensions: ['.ts', '.js'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         exclude: /node_modules/,
//         use: 'ts-loader',
//       },
//     ],
//   },
//   mode: 'production',
// };

// export default config;

import path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, "src/app.ts"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  target: "node22",
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  experiments: {
    outputModule: true,
  },
  mode: "production",
};

export default config;
