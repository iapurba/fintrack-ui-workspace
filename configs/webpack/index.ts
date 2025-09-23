/**
 * This file serves as the main entry point for the webpack configuration package.
 * It re-exports the individual configuration creators so they can be easily
 * imported by the micro-frontends.
 */

export * from "./webpack.common";
export * from "./webpack.dev";
export * from "./webpack.prod";
export * from "./webpack.federation";
