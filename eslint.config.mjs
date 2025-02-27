
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier", "plugin:tailwindcss/recommended"],
    rules: {
      semi: ["error"],
      quotes: ["error", "double"],
      "tailwindcss/enforces-shorthand": "off",
    }
  })
];


export default eslintConfig;