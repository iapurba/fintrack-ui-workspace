type Configuration = import("webpack").Configuration;
const { merge } = require("webpack-merge");
const {
  createCommonConfig,
  createDevConfig,
  createProdConfig,
  createModuleFederationConfig,
} = require("@fintrack/webpack-config");
const packageJson = require("./package.json");

const PORT = 3001;

const generateWebpackConfig = (
  _env: unknown,
  argv: { mode: "development" | "production" },
): Configuration => {
  const context = __dirname;

  const federationConfig = createModuleFederationConfig({
    name: "mfe-user",
    dependencies: packageJson.dependencies,
  });

  const commonConfig = createCommonConfig({ context });

  const devConfig = createDevConfig({
    context,
    port: PORT,
    host: "localhost",
  });

  const prodConfig = createProdConfig({ context });

  if (argv.mode === "development") {
    return merge(commonConfig, devConfig, {
      plugins: [federationConfig],
    });
  }

  return merge(commonConfig, prodConfig, {
    plugins: [federationConfig],
  });
};

module.exports = generateWebpackConfig;
