import { globalIgnores } from "eslint/config";
import tseslint from 'typescript-eslint';
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from 'eslint-plugin-prettier/recommended'; 

export default tseslint.config([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      prettierConfig, // extend ESLint with Prettier config
    ],
    languageOptions: {
      ecmaVersion: 2020,
    },
    rules: { // add Prettier rules
      'prettier/prettier': [
        'error', 
        { 
          singleQuote: false,
          printWidth: 100,
          tabWidth: 2,
          semi: true,
          trailingComma: 'es5',
          bracketSpacing: true,
          endOfLine: 'lf'
        }],
    },
  },
]);
