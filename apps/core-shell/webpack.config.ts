import { Configuration } from "webpack";
import { merge } from "webpack-merge";
import {
  createCommonConfig,
  createDevConfig,
  createProdConfig,
  createModuleFederationConfig,
} from "@fintrack/webpack-config";
import packageJson from "./package.json";

const PORT = 3000;

const generateWebpackConfig = (
  env: { [key: string]: string },
  argv: { mode: "development" | "production" },
): Configuration => {
  const context = __dirname;

  const federationConfig = createModuleFederationConfig({
    name: "core-shell",
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

export default generateWebpackConfig;
