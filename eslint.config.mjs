import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",  // Ensures modern JS support
    },
    rules: {
      "semi": ["error", "always"],          // Enforce semicolons
      "quotes": ["error", "single"],        // Use single quotes
      "indent": ["error", 2],               // Enforce consistent indentation (2 spaces)
      "no-unused-vars": "warn",             // Warn about unused variables
      "no-console": "warn",                 // Warn about console logs
      "curly": ["error", "all"],            // Enforce consistent braces for blocks
    },
  },
  pluginJs.configs.recommended,
];
