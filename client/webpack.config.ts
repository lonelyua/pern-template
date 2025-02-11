import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import { fileURLToPath } from "url";
import _webpackDevServer from "webpack-dev-server";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: Configuration = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    filename: "bundle.[fullhash].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "../node_modules"),
    ],
    extensions: [".ts", ".tsx", ".js"],
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
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { modules: true } },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // favicon: path.resolve(__dirname, "public/favicon.ico"),
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    client: {
      logging: "none",
    },
    historyApiFallback: true,
    port: process.env.CLIENT_PORT || 3001,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
  },
};

export default config;
