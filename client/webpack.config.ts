import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";
import { fileURLToPath } from "url";
import _webpackDevServer from "webpack-dev-server";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: Configuration = {
  entry: "./client/src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "./client/src"),
      path.resolve(__dirname, "../node_modules"),
    ],
    extensions: [".ts", ".tsx", ".js"],
    // alias: {
    //   "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
    //   "react/jsx-runtime": "react/jsx-runtime.js",
    // },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
        },
      },
      {
        test: /\.scss$/,
        use: [
          // { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { modules: true } },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "client/public/index.html",
    }),
  ],
  devServer: {
    client: {
      logging: "none",
    },
    historyApiFallback: true,
    // port: process.env.WEBPACK_SERVER_PORT,
    port: 9005,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
  },
};

export default config;
