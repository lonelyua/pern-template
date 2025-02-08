import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as path from 'path';
import { fileURLToPath } from 'url';
import * as webpack from 'webpack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import _webpackDevServer from 'webpack-dev-server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.SERVER_PORT': JSON.stringify(process.env.SERVER_PORT),
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, '../node_modules')],
    extensions: ['.js', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.(scss)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { modules: true } },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(css)$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' }],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.png/,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    client: {
      logging: 'none',
    },
    historyApiFallback: true,
    port: process.env.WEBPACK_SERVER_PORT,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
  },
};

export default config;
