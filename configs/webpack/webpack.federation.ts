import { container } from "webpack";

interface FederationConfigOptions {
  name: string;
  dependencies: Record<string, string>;
  filename?: string;
  exposes?: Record<string, string>;
  remotes?: Record<string, string>;
  shared?: Record<string, { singleton: boolean; requiredVersion: string }>;
}

export const createModuleFederationConfig = (
  options: FederationConfigOptions,
) => {
  const {
    name,
    dependencies,
    filename = "remoteEntry.js",
    exposes = {},
    remotes = {},
    shared = {},
  } = options;

  return new container.ModuleFederationPlugin({
    name,
    filename,
    exposes,
    remotes,
    shared: {
      ...dependencies,
      react: {
        singleton: true,
        requiredVersion: dependencies.react,
      },
      "react-dom": {
        singleton: true,
        requiredVersion: dependencies["react-dom"],
      },
      ...shared,
    },
  });
};
