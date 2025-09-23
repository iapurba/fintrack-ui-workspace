import { Configuration } from "webpack";
import MiniCSSExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import path from "path";

export const createProdConfig = (options: {
  context: string;
}): Configuration => {
  return {
    mode: "production",
    devtool: "source-map",

    output: {
      // Use contenthash for long-term caching
      filename: "js/[name].[contenthash].js",
      chunkFilename: "js/[name].[contenthash].chunk.js",
      publicPath: "auto", // Important for Module Federation
    },

    module: {
      rules: [
        // Override CSS  rule to extract CSS into files
        {
          test: /\.(css|scss|sass)$/i,
          use: [
            MiniCSSExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
        },
      ],
    },

    plugins: [
      // Extract CSS into separate files
      new MiniCSSExtractPlugin({
        filename: "styles/[name].[contenthash].css",
        chunkFilename: "styles/[name].[contenthash].chunk.css",
      }),

      // Also generate an HTML file for production
      new HtmlWebpackPlugin({
        template: path.resolve(options.context, "public", "index.html"),
        inject: "body",
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
    ],

    optimization: {
      minimize: true,
      minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        `...`,
        // For minifying JavaScript
        new TerserPlugin(),
        // For minifying CSS
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        chunks: "all",
      },
      runtimeChunk: "single",
    },

    performance: {
      hints: "warning",
      maxEntrypointSize: 250 * 1024, //250kb
      maxAssetSize: 250 * 1024, //250kb
    },
  };
};
