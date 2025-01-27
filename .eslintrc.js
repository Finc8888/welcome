module.exports = {
    parser: '@babel/eslint-parser',
    env: {
        browser: true,
        jest: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module',
        requireConfigFile: false, // Optional, if you don't have a Babel config
    },
    rules: {
    // indent: ['error', 'tab'],
        indent: ['error', 4],
        // eslint-disable-next-line no-tabs
        'no-plusplus': 'off',
        'no-restricted-globals': 'off',
        'max-len': ['error', { code: 7 }],
        'no-nonoctal-decimal-escape': 'off',
        'no-unsafe-optional-chaining': 'off',
    },
};
