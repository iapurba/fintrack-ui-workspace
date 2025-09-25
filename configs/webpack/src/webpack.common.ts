type Configuration = import("webpack").Configuration;
const path = require("path");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const createCommonConfig = (options: { context: string }): Configuration => {
  return {
    entry: path.resolve(options.context, "src", "index.tsx"),
    output: {
      path: path.resolve(options.context, "dist"),
      filename: "[name].[contenthash].js",
      publicPath: "auto", // Important for Module Federation
      clean: true,
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
      plugins: [new TsconfigPathsPlugin()],
    },

    module: {
      rules: [
        // Rules for TypeScript and JavaScript files
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                ["@babel/preset-react", { runtime: "automatic" }],
                "@babel/preset-typescript",
              ],
            },
          },
        },
        // Rules for CSS, SASS, and SCSS files
        {
          test: /\.(css|sass|scss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        },
        // Rules for images
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: "asset/resource",
          generator: {
            filename: "assets/images/[name].[hash][ext]",
          },
        },
        // Rules for fonts
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: "asset/resource",
          generator: {
            filename: "assets/fonts/[name].[hash][ext]",
          },
        },
      ],
    },

    plugins: [
      // Inject environment variables from a .env file
      new Dotenv({
        systemvars: true, // Allow system environment variables to be used
      }),
      // Define global constants
      // new DefinePlugin({
      //   "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      // }),
    ],
  };
};

export = { createCommonConfig };
