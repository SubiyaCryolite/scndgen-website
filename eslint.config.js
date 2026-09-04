import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
  { ignores: ["dist", "public"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.flat.recommended,
      react.configs.flat["jsx-runtime"],
      reactRefresh.configs.vite,
      prettierConfig,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    settings: {
      react: { version: "detect" },
    },
    plugins: {
      "react-hooks": reactHooks,
      prettier,
    },
    rules: {
      "react/jsx-no-target-blank": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true, extraHOCs: ["withTabContext"] },
      ],
      "prettier/prettier": "error",
    },
  },
);
