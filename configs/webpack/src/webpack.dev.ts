import "webpack-dev-server"; // Module augmentation for webpack-dev-server
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
type Configuration = import("webpack").Configuration;

const createDevConfig = (options: {
  context: string;
  port: number;
  host: string;
}): Configuration => {
  return {
    mode: "development",
    devtool: "eval-source-map",

    performance: {
      hints: false, // Turn off performance hints in development
    },

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

export = { createDevConfig };
