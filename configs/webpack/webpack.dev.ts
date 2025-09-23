import { Configuration } from "webpack";
import "webpack-dev-server"; // Module augmentation for webpack-dev-server
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export const createDevConfig = (options: {
  context: string;
  port: number;
  host: string;
}): Configuration => {
  return {
    mode: "development",
    devtool: "eval-source-map",

    devServer: {
      port: options.port,
      host: options.host,
      // Fallback to index.html for Single Page Applications
      historyApiFallback: true,
      hot: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(options.context, "public", "index.html"),
        // Inject scripts at the botton of the body tag
        inject: "body",
      }),
    ],
  };
};
