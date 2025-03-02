import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import nextPlugin from '@next/eslint-plugin-next';
import tsParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a compatibility layer for legacy configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Use legacy configs (core-web-vitals)
  ...compat.extends('next/core-web-vitals'),

  // Add specific configuration for JS/TS files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      next: nextPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Apply Next.js recommended rules
      ...nextPlugin.configs.recommended.rules,
      // Add any custom rules here
    },
  },
];
