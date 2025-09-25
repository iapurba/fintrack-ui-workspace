/**
 * This file serves as the main entry point for the webpack configuration package.
 * It re-exports the individual configuration creators so they can be easily
 * imported by the micro-frontends.
 */

// export { createCommonConfig } from "./webpack.common";
// export { createDevConfig } from "./webpack.dev";
// export { createProdConfig } from "./webpack.prod";
// export { createModuleFederationConfig } from "./webpack.federation";

module.exports = {
  ...require("./webpack.common"),
  ...require("./webpack.dev"),
  ...require("./webpack.prod"),
  ...require("./webpack.federation"),
};
