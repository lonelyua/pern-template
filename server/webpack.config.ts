import path from "path";
import { fileURLToPath } from "url";
import { Configuration } from "webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: Configuration = {
  entry: path.resolve(__dirname, "src/app.ts"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  target: "node22",
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "../node_modules"),
    ],
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
