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

export default (
  env: { [key: string]: string },
  argv: { mode: "development" | "production" },
): Configuration => {
  const isProduction = argv.mode === "production";

  const commonConfig = createCommonConfig({ context: __dirname });

  const envConfig = isProduction
    ? createProdConfig({ context: __dirname })
    : createDevConfig({
        context: __dirname,
        port: PORT,
        host: "localhost",
      });

  const federationPlugin = createModuleFederationConfig({
    name: "core-shell",
    dependencies: packageJson.dependencies,
  });

  const mergedConfig = merge(commonConfig, envConfig);
  mergedConfig.plugins?.push(federationPlugin);

  return mergedConfig;
};
