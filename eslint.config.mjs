import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            'space-infix-ops': 'error', // Добавлено правило для пробелов вокруг операторов
        },
    },
    pluginJs.configs.recommended,
];