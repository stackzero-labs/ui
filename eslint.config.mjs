import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import perfectionist from "eslint-plugin-perfectionist";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["registry/"],
  },
  {
    plugins: {
      perfectionist,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "perfectionist/sort-objects": "warn",
       // Other rules
      "@next/next/no-img-element": "off"
    },
  },
];

export default eslintConfig;
