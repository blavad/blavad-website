const path = require('path');

module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'],
            },
            typescript: {
                project: './tsconfig.json',
            },
            alias: {
                map: [['~', path.resolve(__dirname, './src')]],
                extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'],
            },
        },
    },
    plugins: ['react', 'react-refresh', '@typescript-eslint', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'max-classes-per-file': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'consistent-return': 'error',
        'jsx-a11y/click-events-have-key-events': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        'react/no-array-index-key': 'off',
        'no-underscore-dangle': [
            'off',
            {
                allowAfterThis: true,
                allowAfterSuper: true,
            },
        ],
        'no-restricted-syntax': 'off',
        'no-plusplus': 'off',
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {
                'ts-expect-error': false,
                'ts-ignore': false,
                'ts-nocheck': false,
                'ts-check': false,
                minimumDescriptionLength: 3,
            },
        ],
        'react/require-default-props': 'off',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                tabWidth: 4,
                semi: true,
                singleQuote: true,
                printWidth: 120,
                jsxSingleQuote: false,
                bracketSpacing: true,
                jsxBracketSameLine: false,
                arrowParens: 'always',
                endOfLine: 'auto',
            },
        ],
        'no-console': 'off',
    },
};
