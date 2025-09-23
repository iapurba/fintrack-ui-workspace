// @ts-check

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

/**
 * This is the shared ESLint configuration.
 * It's exported as a default array of configuration objects.
 * ESLint v9 will process this array to build the final linting rules.
 */

export default [
  // 1. Global configurations
  {
    files: ["**/*.{js,cjs,mjs,ts,cts,mts,jsx,tsx}"],

    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: react,
      "react-hooks": reactHooks,
    },

    // Language options configure the JavaScript environment
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    // Settings can be shared across all rules
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },

  // 2. Recommended rule sets
  // Each of these is a pre-configured set of rules
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,

  // 3. Custom rule configurations
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Not needed with new JSX transform
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
  },

  // 4. Prettier configuration
  // IMPORTANT: This MUST be the last item in the array.
  // It disables any stylistic rules that might conflict with Prettier's formatting.
  prettierConfig,
];
