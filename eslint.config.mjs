import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], settings: { react: { version: 'detect' } } },
  // {
  //   languageOptions: {
  //     parser: tseslint.parser,
  //     ecmaVersion: 'latest',
  //     sourceType: 'module',
  //     ecmaFeatures: { jsx: true },
  //     globals: { ...globals.browser, ...globals.node, ...globals.es2021 },
  //   },
  // },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      indent: 'off',
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
  {
    ignores: ['node_modules', 'client/build', 'server/build'],
  },
];
