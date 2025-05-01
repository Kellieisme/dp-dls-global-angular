import globals from "globals";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  ...tseslint.configs.recommended,
  {
    ignores: [
      'dist/',
      'node_modules/',
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', //Disable the rule that don't allow 'any',
    }
  }
];